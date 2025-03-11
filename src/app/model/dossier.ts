export interface Dossiezr {
    id: string;
    commune: string;
    dateFin: string;
    kmCategorie: string;
    etat: 'Contrôlé' | 'Non contrôlé';
  }