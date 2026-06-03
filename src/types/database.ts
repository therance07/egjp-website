export interface Inscription {
  id: string;
  nom: string;
  prenom: string;
  date_naissance?: string;
  nationalite?: string;
  email: string;
  telephone?: string;
  whatsapp?: string;
  formation_souhaitee: string;
  niveau_etudes?: string;
  message?: string;
  statut: 'en_attente' | 'contacte' | 'accepte' | 'refuse';
  created_at: string;
}

export interface Reservation {
  id: string;
  nom: string;
  prenom: string;
  email?: string;
  telephone: string;
  date_reservation: string;
  heure: string;
  nb_couverts: number;
  message?: string;
  statut: 'en_attente' | 'confirmee' | 'annulee';
  created_at: string;
}

export interface Contact {
  id: string;
  nom: string;
  email: string;
  objet?: string;
  message: string;
  lu: boolean;
  created_at: string;
}

export interface ContenuSite {
  id: string;
  cle: string;
  valeur_fr?: string;
  valeur_en?: string;
  updated_at: string;
}

export type InscriptionStatus = Inscription['statut'];
export type ReservationStatus = Reservation['statut'];
