# École de Gastronomie Jean Paul II — Site Web

Site web officiel de l'EGJP, école de gastronomie basée à Brazzaville, République du Congo.

## Stack technique

- **Framework** : Next.js 14 (App Router)
- **Base de données** : Supabase (PostgreSQL)
- **Hosting** : Vercel
- **Styling** : Tailwind CSS + CSS custom properties
- **Formulaires** : React Hook Form + Zod
- **i18n** : next-intl (FR/EN, français par défaut)
- **Icons** : Lucide React
- **Fonts** : Playfair Display + Cormorant Garamond + Barlow Condensed (Google Fonts)

## Installation

```bash
npm install
# Copier et remplir les variables d'environnement
cp .env.local .env.local.example
npm run dev
```

## Variables d'environnement (.env.local)

```env
NEXT_PUBLIC_SUPABASE_URL=         # URL de votre projet Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=    # Clé anon publique Supabase
SUPABASE_SERVICE_ROLE_KEY=        # Clé service role (admin seulement)
NEXT_PUBLIC_WHATSAPP_NUMBER=      # Numéro WhatsApp sans + (ex: 242064000000)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=  # Optionnel - clé API Google Maps
NEXT_PUBLIC_SITE_URL=             # URL de production
```

## Base de données Supabase

Exécuter la migration dans l'éditeur SQL Supabase :

```
supabase/migrations/001_initial_schema.sql
```

### Tables

| Table | Description |
|-------|-------------|
| `inscriptions` | Candidatures étudiants |
| `reservations` | Réservations La Petite Faim |
| `contacts` | Messages formulaire contact |
| `contenu_site` | Textes éditables du site |

## Pages

```
/fr                    → Accueil
/fr/formations         → Nos formations
/fr/l-ecole            → L'École
/fr/la-petite-faim     → Restaurant d'application + réservation
/fr/galerie            → Galerie photos
/fr/actualites         → Actualités
/fr/actualites/[slug]  → Article
/fr/inscription        → Formulaire d'inscription
/fr/contact            → Contact
/fr/admin              → Dashboard admin (protégé Supabase Auth)
/fr/admin/login        → Connexion admin
/en/...                → Versions anglaises
```

## Déploiement Vercel

1. Importer le repo sur Vercel
2. Ajouter les variables d'environnement dans les settings
3. Déployer — le build se lance automatiquement

## Identité visuelle

| Variable | Valeur | Usage |
|----------|--------|-------|
| `--color-primary` | `#E8A020` | Or chaud — accent principal |
| `--color-dark` | `#1A0F00` | Brun quasi-noir |
| `--color-cream` | `#FDFAF3` | Fond crème chaud |
| Font titres | Playfair Display | H1/H2/H3 |
| Font accroches | Cormorant Garamond | Citations |
| Font UI | Barlow Condensed | Navigation, boutons |

---

**EGJP © 2024 — Brazzaville, République du Congo**
