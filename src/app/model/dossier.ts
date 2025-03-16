export interface Dossier {
    id: string;
    commune: string;
    dateFin: string;
    kmCategorie: string;
    etat: 'Contrôlé' | 'Non contrôlé';
  } 