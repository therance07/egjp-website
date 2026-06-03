'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { CheckCircle, MessageCircle, Loader2 } from 'lucide-react';

const reservationSchema = z.object({
  nom: z.string().min(2, 'Nom requis'),
  prenom: z.string().min(2, 'Prénom requis'),
  email: z.string().email('Email invalide').optional().or(z.literal('')),
  telephone: z.string().min(8, 'Téléphone requis'),
  date_reservation: z.string().min(1, 'Date requise'),
  heure: z.string().min(1, 'Heure requise'),
  nb_couverts: z.number().min(1, 'Minimum 1 couvert').max(8, 'Maximum 8 couverts'),
  message: z.string().optional(),
});

type ReservationData = z.infer<typeof reservationSchema>;

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<ReservationData>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { nb_couverts: 2 },
  });

  const onSubmit = async (data: ReservationData) => {
    setLoading(true);
    setError(null);
    try {
      const { error: supaError } = await supabase
        .from('reservations')
        .insert({
          nom: data.nom,
          prenom: data.prenom,
          email: data.email || undefined,
          telephone: data.telephone,
          date_reservation: data.date_reservation,
          heure: data.heure,
          nb_couverts: data.nb_couverts,
          message: data.message || undefined,
        });

      if (supaError) throw supaError;
      setSubmitted(true);
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const buildWhatsApp = () => {
    const v = getValues();
    const msg = `Réservation La Petite Faim\n\nNom : ${v.prenom} ${v.nom}\nDate : ${v.date_reservation} à ${v.heure}\nCouverts : ${v.nb_couverts}\nTél : ${v.telephone}`;
    return `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  if (submitted) {
    return (
      <div className="border border-[#E8A020]/30 bg-[#E8A020]/05 p-8 text-center">
        <CheckCircle size={40} className="text-[#E8A020] mx-auto mb-4" />
        <h3 className="font-playfair font-bold text-white text-xl mb-3">Réservation envoyée !</h3>
        <p className="font-barlow text-sm text-white/60 mb-6 leading-relaxed">
          Nous avons bien reçu votre demande. Notre équipe vous contactera sous 24h pour confirmer votre table.
        </p>
        <a
          href={buildWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-barlow font-700 text-[0.72rem] tracking-[0.1em] uppercase px-6 py-3 hover:bg-[#128C7E] transition-colors duration-300"
        >
          <MessageCircle size={14} />
          Confirmer via WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label text-white/60 block mb-1.5">Prénom *</label>
          <input {...register('prenom')} placeholder="Jean" className="form-input bg-white/05 border-white/15 text-white placeholder:text-white/20 focus:border-[#E8A020]" />
          {errors.prenom && <p className="form-error mt-1">{errors.prenom.message}</p>}
        </div>
        <div>
          <label className="form-label text-white/60 block mb-1.5">Nom *</label>
          <input {...register('nom')} placeholder="Dupont" className="form-input bg-white/05 border-white/15 text-white placeholder:text-white/20 focus:border-[#E8A020]" />
          {errors.nom && <p className="form-error mt-1">{errors.nom.message}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label text-white/60 block mb-1.5">Téléphone *</label>
          <input {...register('telephone')} placeholder="+242 00 000 000" className="form-input bg-white/05 border-white/15 text-white placeholder:text-white/20 focus:border-[#E8A020]" />
          {errors.telephone && <p className="form-error mt-1">{errors.telephone.message}</p>}
        </div>
        <div>
          <label className="form-label text-white/60 block mb-1.5">Email</label>
          <input {...register('email')} type="email" placeholder="email@exemple.com" className="form-input bg-white/05 border-white/15 text-white placeholder:text-white/20 focus:border-[#E8A020]" />
          {errors.email && <p className="form-error mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="form-label text-white/60 block mb-1.5">Date *</label>
          <input {...register('date_reservation')} type="date" className="form-input bg-white/05 border-white/15 text-white focus:border-[#E8A020] [color-scheme:dark]" />
          {errors.date_reservation && <p className="form-error mt-1">{errors.date_reservation.message}</p>}
        </div>
        <div>
          <label className="form-label text-white/60 block mb-1.5">Heure *</label>
          <select {...register('heure')} className="form-input bg-[#1A0F00] border-white/15 text-white focus:border-[#E8A020]">
            <option value="">-- Choisir --</option>
            <optgroup label="Déjeuner" style={{ background: '#1A0F00' }}>
              <option>12:00</option>
              <option>12:30</option>
              <option>13:00</option>
              <option>13:30</option>
            </optgroup>
            <optgroup label="Dîner" style={{ background: '#1A0F00' }}>
              <option>19:00</option>
              <option>19:30</option>
              <option>20:00</option>
              <option>20:30</option>
              <option>21:00</option>
            </optgroup>
          </select>
          {errors.heure && <p className="form-error mt-1">{errors.heure.message}</p>}
        </div>
      </div>

      {/* Couverts */}
      <div>
        <label className="form-label text-white/60 block mb-1.5">Nombre de couverts * (1–8)</label>
        <input {...register('nb_couverts', { valueAsNumber: true })} type="number" min="1" max="8" className="form-input bg-white/05 border-white/15 text-white focus:border-[#E8A020] w-28" />
        {errors.nb_couverts && <p className="form-error mt-1">{errors.nb_couverts.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="form-label text-white/60 block mb-1.5">Message / Demande particulière</label>
        <textarea {...register('message')} rows={3} placeholder="Allergie, occasion spéciale, chaise enfant..." className="form-input bg-white/05 border-white/15 text-white placeholder:text-white/20 focus:border-[#E8A020] resize-none" />
      </div>

      {error && (
        <div className="border border-red-500/30 bg-red-500/10 p-3">
          <p className="font-barlow text-xs text-red-400">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <span>Confirmer la réservation</span>
        )}
      </button>

      <p className="font-barlow text-[0.65rem] text-white/25 text-center">
        Réservation soumise à confirmation · Annulation possible jusqu&apos;à 24h avant
      </p>
    </form>
  );
}
