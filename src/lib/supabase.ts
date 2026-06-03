import { createClient } from '@supabase/supabase-js';
import type { Inscription, Reservation, Contact, ContenuSite } from '@/types/database';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseUrl = rawUrl.startsWith('http') ? rawUrl : 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      inscriptions: { Row: Inscription; Insert: Omit<Inscription, 'id' | 'created_at' | 'statut'>; Update: Partial<Inscription> };
      reservations: { Row: Reservation; Insert: Omit<Reservation, 'id' | 'created_at' | 'statut'>; Update: Partial<Reservation> };
      contacts: { Row: Contact; Insert: Omit<Contact, 'id' | 'created_at' | 'lu'>; Update: Partial<Contact> };
      contenu_site: { Row: ContenuSite; Insert: Omit<ContenuSite, 'id' | 'updated_at'>; Update: Partial<ContenuSite> };
    };
  };
};
