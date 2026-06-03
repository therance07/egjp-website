'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { supabase } from '@/lib/supabase';
import { Loader2, Eye, EyeOff } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isDevMode = !process.env.NEXT_PUBLIC_SUPABASE_URL?.startsWith('http') ||
    process.env.NEXT_PUBLIC_SUPABASE_URL === 'https://placeholder.supabase.co';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      // Dev mode bypass when Supabase not configured
      if (isDevMode) {
        if (email === 'admin@egjp.cg' && password === 'admin1234') {
          sessionStorage.setItem('egjp_dev_auth', 'true');
          router.push(`/${locale}/admin`);
          return;
        }
        throw new Error('invalid');
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.push(`/${locale}/admin`);
    } catch {
      setError('Email ou mot de passe incorrect.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A0F00] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 border-2 border-[#E8A020] flex items-center justify-center mx-auto mb-4">
            <span className="font-playfair font-bold text-[#E8A020] text-xl">EG</span>
          </div>
          <h1 className="font-playfair font-bold text-white text-xl">Administration</h1>
          <p className="font-barlow text-[0.68rem] tracking-[0.15em] uppercase text-white/30 mt-1">
            École de Gastronomie Jean Paul II
          </p>
        </div>

        {/* Dev mode hint */}
        {isDevMode && (
          <div className="mb-5 border border-[#E8A020]/30 bg-[#E8A020]/08 px-4 py-3">
            <p className="font-barlow font-700 text-[0.62rem] tracking-[0.15em] uppercase text-[#E8A020] mb-1.5">
              Mode développement local
            </p>
            <p className="font-barlow text-[0.68rem] text-white/40 leading-relaxed">
              Email : <span className="text-white/70 select-all">admin@egjp.cg</span><br />
              Mot de passe : <span className="text-white/70 select-all">admin1234</span>
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="font-barlow font-600 text-[0.65rem] tracking-[0.15em] uppercase text-white/40 block mb-1.5">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@egjp.cg"
              className="w-full bg-white/05 border border-white/15 text-white placeholder:text-white/20 px-4 py-3 font-barlow text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
              required
            />
          </div>
          <div>
            <label className="font-barlow font-600 text-[0.65rem] tracking-[0.15em] uppercase text-white/40 block mb-1.5">
              Mot de passe
            </label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/05 border border-white/15 text-white placeholder:text-white/20 px-4 py-3 pr-11 font-barlow text-sm focus:outline-none focus:border-[#E8A020] transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="border border-red-500/30 bg-red-500/10 px-4 py-2.5">
              <p className="font-barlow text-xs text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#E8A020] text-[#1A0F00] font-barlow font-700 text-[0.72rem] tracking-[0.12em] uppercase py-3.5 hover:bg-[#F5C842] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? <><Loader2 size={14} className="animate-spin" />Connexion...</> : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  );
}
