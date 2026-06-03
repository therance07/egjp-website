'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Inscription, InscriptionStatus } from '@/types/database';
import { Download, RefreshCw } from 'lucide-react';

const statusLabels: Record<InscriptionStatus, string> = {
  en_attente: 'En attente',
  contacte: 'Contacté',
  accepte: 'Accepté',
  refuse: 'Refusé',
};

const statusBadge: Record<InscriptionStatus, string> = {
  en_attente: 'badge-gray',
  contacte: 'badge-gold',
  accepte: 'badge-green',
  refuse: 'badge-red',
};

export default function AdminInscriptions() {
  const [inscriptions, setInscriptions] = useState<Inscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<InscriptionStatus | 'all'>('all');

  const fetchInscriptions = async () => {
    setLoading(true);
    try {
      let query = supabase.from('inscriptions').select('*').order('created_at', { ascending: false });
      if (filter !== 'all') query = query.eq('statut', filter);
      const { data } = await query;
      setInscriptions(data ?? []);
    } finally { setLoading(false); }
  };

  useEffect(() => { fetchInscriptions(); }, [filter]); // eslint-disable-line react-hooks/exhaustive-deps

  const updateStatus = async (id: string, statut: InscriptionStatus) => {
    await supabase.from('inscriptions').update({ statut }).eq('id', id);
    fetchInscriptions();
  };

  const exportCSV = () => {
    const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Formation', 'Statut', 'Date'];
    const rows = inscriptions.map(i => [i.nom, i.prenom, i.email, i.telephone ?? '', i.formation_souhaitee, i.statut, i.created_at]);
    const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'inscriptions-egjp.csv'; a.click();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-playfair font-bold text-white text-2xl mb-1">Inscriptions</h1>
          <p className="font-barlow text-sm text-white/30">{inscriptions.length} candidature(s)</p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchInscriptions} className="p-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors">
            <RefreshCw size={14} />
          </button>
          <button onClick={exportCSV} className="flex items-center gap-2 px-4 py-2 border border-[#E8A020]/30 text-[#E8A020] font-barlow text-[0.68rem] font-600 tracking-wide hover:bg-[#E8A020]/10 transition-colors">
            <Download size={12} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {(['all', 'en_attente', 'contacte', 'accepte', 'refuse'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`font-barlow text-[0.65rem] tracking-wide uppercase px-3 py-1.5 border transition-colors ${
              filter === f ? 'bg-[#E8A020] text-[#1A0F00] border-[#E8A020]' : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white/70'
            }`}>
            {f === 'all' ? 'Toutes' : statusLabels[f as InscriptionStatus]}
          </button>
        ))}
      </div>

      {/* Table */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-14 skeleton rounded" />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/08">
                {['Candidat', 'Formation', 'Contact', 'Date', 'Statut', 'Actions'].map(h => (
                  <th key={h} className="text-left font-barlow font-700 text-[0.62rem] tracking-[0.15em] uppercase text-white/25 pb-3 pr-4">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inscriptions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-12 text-white/25 font-barlow text-sm">
                    Aucune candidature trouvée.
                  </td>
                </tr>
              ) : inscriptions.map(ins => (
                <tr key={ins.id} className="border-b border-white/04 hover:bg-white/02 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="font-barlow font-600 text-white text-xs">{ins.prenom} {ins.nom}</div>
                    <div className="font-barlow text-[0.6rem] text-white/30">{ins.nationalite}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-barlow text-[0.65rem] text-white/50">{ins.formation_souhaitee}</span>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="font-barlow text-[0.65rem] text-white/50">{ins.email}</div>
                    <div className="font-barlow text-[0.6rem] text-white/30">{ins.telephone}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-barlow text-[0.6rem] text-white/30">
                      {new Date(ins.created_at).toLocaleDateString('fr-FR')}
                    </span>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`badge ${statusBadge[ins.statut]} text-[0.58rem]`}>
                      {statusLabels[ins.statut]}
                    </span>
                  </td>
                  <td className="py-3">
                    <select
                      value={ins.statut}
                      onChange={(e) => updateStatus(ins.id, e.target.value as InscriptionStatus)}
                      className="bg-transparent border border-white/10 text-white/50 text-[0.62rem] px-2 py-1 focus:outline-none focus:border-[#E8A020] cursor-pointer"
                    >
                      {Object.entries(statusLabels).map(([val, label]) => (
                        <option key={val} value={val} style={{ background: '#1A0F00' }}>{label}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
