-- EGJP Website — Schéma initial Supabase
-- Migration: 001_initial_schema.sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ===================== INSCRIPTIONS =====================
CREATE TABLE IF NOT EXISTS inscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  date_naissance DATE,
  nationalite TEXT,
  email TEXT NOT NULL,
  telephone TEXT,
  whatsapp TEXT,
  formation_souhaitee TEXT NOT NULL,
  niveau_etudes TEXT,
  message TEXT,
  statut TEXT DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'contacte', 'accepte', 'refuse')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for status filtering
CREATE INDEX idx_inscriptions_statut ON inscriptions(statut);
CREATE INDEX idx_inscriptions_created_at ON inscriptions(created_at DESC);

-- ===================== RESERVATIONS =====================
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  email TEXT,
  telephone TEXT NOT NULL,
  date_reservation DATE NOT NULL,
  heure TEXT NOT NULL,
  nb_couverts INTEGER NOT NULL CHECK (nb_couverts BETWEEN 1 AND 20),
  message TEXT,
  statut TEXT DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'confirmee', 'annulee')),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_reservations_date ON reservations(date_reservation);
CREATE INDEX idx_reservations_statut ON reservations(statut);

-- ===================== CONTACTS =====================
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nom TEXT NOT NULL,
  email TEXT NOT NULL,
  objet TEXT,
  message TEXT NOT NULL,
  lu BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_contacts_lu ON contacts(lu);
CREATE INDEX idx_contacts_created_at ON contacts(created_at DESC);

-- ===================== CONTENU SITE =====================
CREATE TABLE IF NOT EXISTS contenu_site (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  cle TEXT UNIQUE NOT NULL,
  valeur_fr TEXT,
  valeur_en TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Seed initial content keys
INSERT INTO contenu_site (cle, valeur_fr, valeur_en) VALUES
  ('hero.title', 'L''art culinaire au service de l''excellence africaine', 'Culinary arts in service of African excellence'),
  ('hero.subtitle', 'Formez-vous aux métiers de la restauration et de la gastronomie à Brazzaville', 'Train for careers in hospitality and gastronomy in Brazzaville'),
  ('school.mission', 'Former des professionnels de la gastronomie capables d''exceller au Congo et dans le monde', 'Train gastronomy professionals capable of excelling in Congo and worldwide'),
  ('restaurant.tagline', 'Une cuisine franco-africaine contemporaine, sublimée par nos étudiants', 'Contemporary Franco-African cuisine, elevated by our students')
ON CONFLICT (cle) DO NOTHING;

-- ===================== ROW LEVEL SECURITY =====================

-- Public can INSERT only (no SELECT without auth)
ALTER TABLE inscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contenu_site ENABLE ROW LEVEL SECURITY;

-- Inscriptions: anyone can insert, only auth can read/update
CREATE POLICY "Public can insert inscriptions" ON inscriptions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Auth users can read inscriptions" ON inscriptions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Auth users can update inscriptions" ON inscriptions
  FOR UPDATE TO authenticated USING (true);

-- Reservations: anyone can insert, only auth can read/update
CREATE POLICY "Public can insert reservations" ON reservations
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Auth users can read reservations" ON reservations
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Auth users can update reservations" ON reservations
  FOR UPDATE TO authenticated USING (true);

-- Contacts: anyone can insert, only auth can read/update/delete
CREATE POLICY "Public can insert contacts" ON contacts
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Auth users can read contacts" ON contacts
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Auth users can update contacts" ON contacts
  FOR UPDATE TO authenticated USING (true);

CREATE POLICY "Auth users can delete contacts" ON contacts
  FOR DELETE TO authenticated USING (true);

-- Contenu site: public can read, auth can update
CREATE POLICY "Public can read contenu" ON contenu_site
  FOR SELECT TO anon USING (true);

CREATE POLICY "Auth users can update contenu" ON contenu_site
  FOR ALL TO authenticated USING (true);
