'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Reservation, ReservationStatus } from '@/types/database';
import { RefreshCw } from 'lucide-react';

const statusLabels: Record<ReservationStatus, string> = {
  en_attente: 'En attente',
  confirmee: 'Confirmée',
  annulee: 'Annulée',
};

export default function AdminReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase.from('reservations').select('*').order('date_reservation', { ascending: true });
    setReservations(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const updateStatus = async (id: string, statut: ReservationStatus) => {
    await supabase.from('reservations').update({ statut }).eq('id', id);
    fetchData();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-playfair font-bold text-white text-2xl mb-1">Réservations</h1>
          <p className="font-barlow text-sm text-white/30">La Petite Faim · {reservations.length} réservation(s)</p>
        </div>
        <button onClick={fetchData} className="p-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors">
          <RefreshCw size={14} />
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">{[...Array(5)].map((_, i) => <div key={i} className="h-14 skeleton rounded" />)}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/08">
                {['Client', 'Date & Heure', 'Couverts', 'Contact', 'Statut', 'Action'].map(h => (
                  <th key={h} className="text-left font-barlow font-700 text-[0.62rem] tracking-[0.15em] uppercase text-white/25 pb-3 pr-4">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reservations.length === 0 ? (
                <tr><td colSpan={6} className="text-center py-12 text-white/25 font-barlow text-sm">Aucune réservation.</td></tr>
              ) : reservations.map(res => (
                <tr key={res.id} className="border-b border-white/04 hover:bg-white/02 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="font-barlow font-600 text-white text-xs">{res.prenom} {res.nom}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="font-barlow text-[0.65rem] text-white/60">
                      {new Date(res.date_reservation).toLocaleDateString('fr-FR')} · {res.heure}
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className="font-barlow font-700 text-[#E8A020] text-sm">{res.nb_couverts}</span>
                  </td>
                  <td className="py-3 pr-4">
                    <div className="font-barlow text-[0.6rem] text-white/40">{res.telephone}</div>
                    <div className="font-barlow text-[0.6rem] text-white/25">{res.email}</div>
                  </td>
                  <td className="py-3 pr-4">
                    <span className={`badge text-[0.58rem] ${
                      res.statut === 'confirmee' ? 'badge-green' : res.statut === 'annulee' ? 'badge-red' : 'badge-gray'
                    }`}>
                      {statusLabels[res.statut]}
                    </span>
                  </td>
                  <td className="py-3">
                    <select value={res.statut} onChange={e => updateStatus(res.id, e.target.value as ReservationStatus)}
                      className="bg-transparent border border-white/10 text-white/50 text-[0.62rem] px-2 py-1 focus:outline-none focus:border-[#E8A020]">
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
