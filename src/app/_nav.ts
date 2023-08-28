import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Employees',
    url: '/employee',
    icon: 'icon-drop'
  },
  {
    name: 'Stagiaires',
    url: '/stagiaire',
    icon: 'icon-pencil'
  },
  {
    name: 'Stages',
    url: '/stage',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Ajouter Stage',
        url: '/stage',
        icon: 'icon-puzzle'
      },
      {
        name: 'List des stages',
        url: '/stage-list',
        icon: 'icon-puzzle'
      }]
  },
  {
    name: 'Departements',
    url: '/departement',
    icon: 'icon-puzzle'
  },
  {
    name: 'Designations',
    url: '/designation',
    icon: 'icon-puzzle'
  },
  {
    name: 'Attestation',
    url: '/attestation',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Attestation Employee',
        url: '/attestationEmp',
        icon: 'icon-puzzle'
      },
      {
        name: 'Attestation Stagiaire',
        url: '/attestationStg',
        icon: 'icon-puzzle'
      }]
  },
  {
    name: 'Conge',
    url: '/Conge',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Type De Congé',
        url: '/typeconge',
        icon: 'icon-puzzle'
      },
      {
        name: 'Demande De Congé',
        url: '/demandeConge',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Tache',
    url: '/tache',
    icon: 'icon-puzzle'
  },
  {
    name: 'Jour Ferie',
    url: '/holiday',
    icon: 'icon-puzzle'
  }
];
