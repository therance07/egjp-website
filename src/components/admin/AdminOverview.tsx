'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, CalendarRange, MessageSquare, TrendingUp } from 'lucide-react';

interface Counts {
  inscriptions: number;
  reservations: number;
  messages: number;
  inscriptions_pending: number;
}

export default function AdminOverview() {
  const [counts, setCounts] = useState<Counts>({ inscriptions: 0, reservations: 0, messages: 0, inscriptions_pending: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const [ins, res, msg, insPend] = await Promise.all([
          supabase.from('inscriptions').select('id', { count: 'exact', head: true }),
          supabase.from('reservations').select('id', { count: 'exact', head: true }),
          supabase.from('contacts').select('id', { count: 'exact', head: true }),
          supabase.from('inscriptions').select('id', { count: 'exact', head: true }).eq('statut', 'en_attente'),
        ]);
        setCounts({
          inscriptions: ins.count ?? 0,
          reservations: res.count ?? 0,
          messages: msg.count ?? 0,
          inscriptions_pending: insPend.count ?? 0,
        });
      } catch { /* silent */ }
      finally { setLoading(false); }
    }
    fetchCounts();
  }, []);

  const cards = [
    { label: 'Inscriptions totales', value: counts.inscriptions, sub: `${counts.inscriptions_pending} en attente`, icon: Users, color: '#E8A020' },
    { label: 'Réservations', value: counts.reservations, sub: 'La Petite Faim', icon: CalendarRange, color: '#F5C842' },
    { label: 'Messages reçus', value: counts.messages, sub: 'via formulaire contact', icon: MessageSquare, color: '#C4841A' },
    { label: 'Taux d\'insertion', value: '95%', sub: 'diplômés en emploi', icon: TrendingUp, color: '#E8A020' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-playfair font-bold text-white text-2xl mb-1">Vue d'ensemble</h1>
        <p className="font-barlow text-sm text-white/30">Tableau de bord de l'administration EGJP</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {cards.map((card) => (
          <div key={card.label} className="bg-[#1A0F00] border border-[#E8A020]/10 p-5 hover:border-[#E8A020]/30 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-9 h-9 flex items-center justify-center"
                style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}>
                <card.icon size={15} style={{ color: card.color }} />
              </div>
              {loading && <div className="w-8 h-4 skeleton rounded" />}
            </div>
            <div className="font-playfair font-bold text-white text-2xl mb-0.5">
              {loading ? '—' : card.value}
            </div>
            <div className="font-barlow font-600 text-[0.68rem] text-white/50 mb-0.5">{card.label}</div>
            <div className="font-barlow text-[0.6rem] text-white/25">{card.sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1A0F00] border border-[#E8A020]/10 p-6">
          <h3 className="font-barlow font-700 text-[0.7rem] tracking-[0.15em] uppercase text-[#E8A020] mb-4">
            Activité récente
          </h3>
          <div className="space-y-3">
            {[
              { text: 'Nouvelle candidature reçue', time: 'Il y a 2h', color: 'gold' },
              { text: 'Réservation confirmée · La Petite Faim', time: 'Il y a 4h', color: 'green' },
              { text: 'Message de contact non lu', time: 'Hier', color: 'gray' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/04">
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  item.color === 'gold' ? 'bg-[#E8A020]' : item.color === 'green' ? 'bg-green-400' : 'bg-white/20'
                }`} />
                <span className="font-barlow text-xs text-white/60 flex-1">{item.text}</span>
                <span className="font-barlow text-[0.6rem] text-white/25">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A0F00] border border-[#E8A020]/10 p-6">
          <h3 className="font-barlow font-700 text-[0.7rem] tracking-[0.15em] uppercase text-[#E8A020] mb-4">
            Accès rapide
          </h3>
          <div className="space-y-2">
            {[
              { label: 'Valider une inscription', action: 'inscriptions' },
              { label: 'Confirmer une réservation', action: 'reservations' },
              { label: 'Répondre aux messages', action: 'messages' },
            ].map((item) => (
              <button key={item.label}
                className="w-full text-left px-3 py-2.5 border border-white/08 hover:border-[#E8A020]/30 hover:text-white transition-colors font-barlow text-xs text-white/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E8A020]/50 rounded-full flex-shrink-0" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
