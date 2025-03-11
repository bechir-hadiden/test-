export interface dossierDesat {
  cog: string;
  collaborateur: string;
  dateLivraison: Date;
  dateControle: Date;
  phase: string;
  etate: 'Contrôlé' | 'Non contrôlé';
}