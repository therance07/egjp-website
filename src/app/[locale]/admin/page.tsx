'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { supabase } from '@/lib/supabase';
import {
  LayoutDashboard, Users, CalendarRange, MessageSquare,
  FileEdit, LogOut, ChevronRight
} from 'lucide-react';
import AdminInscriptions from '@/components/admin/AdminInscriptions';
import AdminReservations from '@/components/admin/AdminReservations';
import AdminMessages from '@/components/admin/AdminMessages';
import AdminOverview from '@/components/admin/AdminOverview';

type AdminView = 'overview' | 'inscriptions' | 'reservations' | 'messages' | 'contenu';

export default function AdminPage() {
  const router = useRouter();
  const locale = useLocale();
  const [view, setView] = useState<AdminView>('overview');
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isDevMode = !process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http') ||
      process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co';

    if (isDevMode) {
      const devAuth = sessionStorage.getItem('egjp_dev_auth');
      if (devAuth === 'true') {
        setUser({ email: 'admin@egjp.cg' });
        setLoading(false);
      } else {
        router.push(`/${locale}/admin/login`);
      }
      return;
    }

    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push(`/${locale}/admin/login`);
      } else {
        setUser(data.user);
        setLoading(false);
      }
    });
  }, [locale, router]);

  const handleLogout = async () => {
    sessionStorage.removeItem('egjp_dev_auth');
    await supabase.auth.signOut().catch(() => {});
    router.push(`/${locale}/admin/login`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1A0F00] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#E8A020]/30 border-t-[#E8A020] rounded-full animate-spin" />
      </div>
    );
  }

  const navItems: { key: AdminView; label: string; icon: typeof LayoutDashboard }[] = [
    { key: 'overview', label: 'Vue d\'ensemble', icon: LayoutDashboard },
    { key: 'inscriptions', label: 'Inscriptions', icon: Users },
    { key: 'reservations', label: 'Réservations', icon: CalendarRange },
    { key: 'messages', label: 'Messages', icon: MessageSquare },
    { key: 'contenu', label: 'Contenu site', icon: FileEdit },
  ];

  return (
    <div className="min-h-screen bg-[#0F0800] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A0F00] border-r border-[#E8A020]/10 flex flex-col fixed left-0 top-0 bottom-0 z-20">
        {/* Header */}
        <div className="p-6 border-b border-[#E8A020]/10">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-8 h-8 border border-[#E8A020] flex items-center justify-center">
              <span className="font-playfair font-bold text-[#E8A020] text-xs">EG</span>
            </div>
            <div>
              <div className="font-barlow font-700 text-white text-xs">EGJP Admin</div>
              <div className="font-barlow text-[0.55rem] text-white/30 tracking-wide truncate max-w-[120px]">
                {user?.email}
              </div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200 rounded-sm group ${
                view === key
                  ? 'bg-[#E8A020]/15 text-[#E8A020] border-l-2 border-[#E8A020] pl-[10px]'
                  : 'text-white/40 hover:text-white/70 hover:bg-white/04'
              }`}
            >
              <Icon size={14} className="flex-shrink-0" />
              <span className="font-barlow font-600 text-[0.72rem] tracking-wide">{label}</span>
              {view === key && <ChevronRight size={10} className="ml-auto" />}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#E8A020]/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-white/30 hover:text-red-400 transition-colors font-barlow text-[0.68rem] tracking-wide"
          >
            <LogOut size={13} />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto min-h-screen">
        <div className="max-w-6xl">
          {view === 'overview' && <AdminOverview />}
          {view === 'inscriptions' && <AdminInscriptions />}
          {view === 'reservations' && <AdminReservations />}
          {view === 'messages' && <AdminMessages />}
          {view === 'contenu' && (
            <div className="text-center py-20 text-white/30">
              <FileEdit size={40} className="mx-auto mb-4 opacity-40" />
              <h3 className="font-playfair font-bold text-white/40 text-xl mb-2">Éditeur de contenu</h3>
              <p className="font-barlow text-sm">Interface d'édition des textes du site en cours de développement.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
