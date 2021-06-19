export class Agent {
  id: number;
  nom: string;
  prenom: string;
  cin: string;
  adresse: string;
  telephone: string;
  email: string;
  username: string;
  password: string;
  role: string;
  agence: {
    id: number;
    nom: string;
    adresse: string;
    telephone: string;
    fax: string;
    email: string;
  };
  
}
