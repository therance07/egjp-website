'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Contact } from '@/types/database';
import { Mail, MailOpen, Trash2, RefreshCw } from 'lucide-react';

export default function AdminMessages() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Contact | null>(null);

  const fetchData = async () => {
    setLoading(true);
    const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    setContacts(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const markRead = async (id: string) => {
    await supabase.from('contacts').update({ lu: true }).eq('id', id);
    fetchData();
  };

  const deleteMessage = async (id: string) => {
    await supabase.from('contacts').delete().eq('id', id);
    if (selected?.id === id) setSelected(null);
    fetchData();
  };

  const unreadCount = contacts.filter(c => !c.lu).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-playfair font-bold text-white text-2xl mb-1">Messages</h1>
          <p className="font-barlow text-sm text-white/30">
            {contacts.length} message(s) · <span className="text-[#E8A020]">{unreadCount} non lu(s)</span>
          </p>
        </div>
        <button onClick={fetchData} className="p-2 border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors">
          <RefreshCw size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Message list */}
        <div className="space-y-2">
          {loading ? (
            [...Array(5)].map((_, i) => <div key={i} className="h-16 skeleton rounded" />)
          ) : contacts.length === 0 ? (
            <div className="text-center py-12 text-white/25 font-barlow text-sm">Aucun message.</div>
          ) : contacts.map(contact => (
            <div
              key={contact.id}
              onClick={() => { setSelected(contact); if (!contact.lu) markRead(contact.id); }}
              className={`p-4 border cursor-pointer transition-all duration-200 ${
                selected?.id === contact.id
                  ? 'border-[#E8A020]/50 bg-[#E8A020]/05'
                  : contact.lu
                    ? 'border-white/05 hover:border-white/15 bg-white/01'
                    : 'border-[#E8A020]/20 bg-[#E8A020]/03 hover:border-[#E8A020]/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {contact.lu
                    ? <MailOpen size={13} className="text-white/20" />
                    : <Mail size={13} className="text-[#E8A020]" />
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span className={`font-barlow font-600 text-xs truncate ${contact.lu ? 'text-white/50' : 'text-white'}`}>
                      {contact.nom}
                    </span>
                    <span className="font-barlow text-[0.55rem] text-white/25 flex-shrink-0">
                      {new Date(contact.created_at).toLocaleDateString('fr-FR')}
                    </span>
                  </div>
                  <div className="font-barlow text-[0.62rem] text-white/30 truncate">{contact.objet || 'Sans objet'}</div>
                  <div className="font-barlow text-[0.6rem] text-white/20 truncate mt-0.5">{contact.message.slice(0, 60)}...</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message detail */}
        {selected ? (
          <div className="bg-[#1A0F00] border border-white/08 p-6">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h3 className="font-barlow font-700 text-white text-sm">{selected.nom}</h3>
                <div className="font-barlow text-[0.65rem] text-[#E8A020]">{selected.email}</div>
              </div>
              <button onClick={() => deleteMessage(selected.id)}
                className="p-1.5 text-white/20 hover:text-red-400 transition-colors">
                <Trash2 size={13} />
              </button>
            </div>
            {selected.objet && (
              <div className="font-barlow font-600 text-xs text-white/50 mb-4 pb-4 border-b border-white/05">
                Objet : {selected.objet}
              </div>
            )}
            <p className="font-barlow text-sm text-white/60 leading-relaxed mb-5">{selected.message}</p>
            <a href={`mailto:${selected.email}?subject=Re: ${selected.objet ?? 'EGJP'}`}
              className="inline-flex items-center gap-2 bg-[#E8A020] text-[#1A0F00] font-barlow font-700 text-[0.68rem] tracking-wide uppercase px-4 py-2 hover:bg-[#F5C842] transition-colors">
              <Mail size={12} />
              Répondre par email
            </a>
          </div>
        ) : (
          <div className="bg-[#1A0F00] border border-white/05 flex items-center justify-center h-48 text-white/15">
            <div className="text-center">
              <Mail size={24} className="mx-auto mb-2" />
              <span className="font-barlow text-xs">Sélectionnez un message</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
