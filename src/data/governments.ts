import { Government } from '../types';

export const governments: Government[] = [
  {
    id: 1,
    name: "Zukunftsallianz",
    slogan: "Gemeinsam für ein besseres Morgen",
    color: "#3457D5",
    participants: [
      { id: 1, name: "Martina Weber", role: "Kanzlerkandidatin", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 2, name: "Thomas Müller", role: "Außenminister", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 3, name: "Sabine Schmidt", role: "Finanzministerin", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 4, name: "Daniel Hoffmann", role: "Bildungsminister", avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/zukunftsallianz.pdf",
    posts: [
      { id: 1, governmentId: 1, authorId: 1, content: "Unser Wahlprogramm steht für Nachhaltigkeit und soziale Gerechtigkeit.", timestamp: "2025-03-15T14:30:00" },
      { id: 2, governmentId: 1, authorId: 2, content: "Wir setzen uns für eine stärkere internationale Zusammenarbeit ein.", timestamp: "2025-03-16T09:15:00" }
    ]
  },
  {
    id: 2,
    name: "Freiheitspartei",
    slogan: "Freiheit, Fortschritt, Fairness",
    color: "#D5354A",
    participants: [
      { id: 5, name: "Klaus Wagner", role: "Kanzlerkandidat", avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 6, name: "Julia Becker", role: "Justizministerin", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 7, name: "Felix Schneider", role: "Wirtschaftsminister", avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 8, name: "Lena Fischer", role: "Umweltministerin", avatar: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/freiheitspartei.pdf",
    posts: [
      { id: 3, governmentId: 2, authorId: 5, content: "Unsere Wirtschaftspolitik fördert Innovation und entlastet die Bürger.", timestamp: "2025-03-14T11:45:00" },
      { id: 4, governmentId: 2, authorId: 7, content: "Wir wollen Bürokratie abbauen und den Mittelstand stärken.", timestamp: "2025-03-17T16:20:00" }
    ]
  },
  {
    id: 3,
    name: "Ökologische Union",
    slogan: "Für Mensch und Natur",
    color: "#28A745",
    participants: [
      { id: 9, name: "Sarah Meier", role: "Kanzlerkandidatin", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 10, name: "Michael Schulz", role: "Energieminister", avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 11, name: "Lisa König", role: "Verkehrsministerin", avatar: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 12, name: "Max Richter", role: "Landwirtschaftsminister", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/oekologische-union.pdf",
    posts: [
      { id: 5, governmentId: 3, authorId: 9, content: "Klimaschutz ist die größte Herausforderung unserer Zeit.", timestamp: "2025-03-18T10:30:00" },
      { id: 6, governmentId: 3, authorId: 11, content: "Wir setzen auf nachhaltige Mobilität und ÖPNV-Ausbau.", timestamp: "2025-03-19T14:45:00" }
    ]
  },
  {
    id: 4,
    name: "Soziale Mitte",
    slogan: "Zusammenhalt für alle",
    color: "#7A3CD5",
    participants: [
      { id: 13, name: "Peter Klein", role: "Kanzlerkandidat", avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 14, name: "Anna Neumann", role: "Arbeitsministerin", avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 15, name: "Stefan Braun", role: "Gesundheitsminister", avatar: "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 16, name: "Nina Wolf", role: "Familienministerin", avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/soziale-mitte.pdf",
    posts: [
      { id: 7, governmentId: 4, authorId: 13, content: "Gerechtigkeit und Chancengleichheit sind unsere Leitprinzipien.", timestamp: "2025-03-16T13:20:00" },
      { id: 8, governmentId: 4, authorId: 14, content: "Wir kämpfen für faire Löhne und bessere Arbeitsbedingungen.", timestamp: "2025-03-17T09:50:00" }
    ]
  },
  {
    id: 5,
    name: "Digitale Zukunft",
    slogan: "Innovation für Deutschland",
    color: "#17A2B8",
    participants: [
      { id: 17, name: "Claudia Berg", role: "Kanzlerkandidatin", avatar: "https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 18, name: "Robert Fuchs", role: "Digitalminister", avatar: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 19, name: "Sophia Schuster", role: "Forschungsministerin", avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 20, name: "Alexander Keller", role: "Infrastrukturminister", avatar: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/digitale-zukunft.pdf",
    posts: [
      { id: 9, governmentId: 5, authorId: 17, content: "Deutschland braucht eine digitale Aufholjagd.", timestamp: "2025-03-15T16:40:00" },
      { id: 10, governmentId: 5, authorId: 18, content: "Wir fördern Start-ups und digitale Bildung.", timestamp: "2025-03-18T11:15:00" }
    ]
  },
  {
    id: 6,
    name: "Traditionsbündnis",
    slogan: "Bewährtes bewahren",
    color: "#FD7E14",
    participants: [
      { id: 21, name: "Hans Gruber", role: "Kanzlerkandidat", avatar: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 22, name: "Elisabeth Huber", role: "Heimatministerin", avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 23, name: "Karl Fischer", role: "Verteidigungsminister", avatar: "https://images.pexels.com/photos/1080243/pexels-photo-1080243.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 24, name: "Maria Bauer", role: "Kulturministerin", avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/traditionsbuendnis.pdf",
    posts: [
      { id: 11, governmentId: 6, authorId: 21, content: "Wir stehen für Sicherheit und gesellschaftlichen Zusammenhalt.", timestamp: "2025-03-19T10:05:00" },
      { id: 12, governmentId: 6, authorId: 23, content: "Eine starke Verteidigung ist wichtiger denn je.", timestamp: "2025-03-20T14:30:00" }
    ]
  },
  {
    id: 7,
    name: "Wirtschaftsunion",
    slogan: "Wohlstand für alle",
    color: "#FFD700",
    participants: [
      { id: 25, name: "Martin Schmidt", role: "Kanzlerkandidat", avatar: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 26, name: "Andrea Weber", role: "Finanzministerin", avatar: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 27, name: "Markus Wagner", role: "Handelsminister", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 28, name: "Petra Becker", role: "Arbeitsministerin", avatar: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/wirtschaftsunion.pdf",
    posts: [
      { id: 13, governmentId: 7, authorId: 25, content: "Deutschland braucht Steuererleichterungen und weniger Regulierung.", timestamp: "2025-03-14T09:30:00" },
      { id: 14, governmentId: 7, authorId: 27, content: "Internationale Handelsabkommen sichern unseren Wohlstand.", timestamp: "2025-03-16T15:45:00" }
    ]
  },
  {
    id: 8,
    name: "Bürgernahe Fraktion",
    slogan: "Politik vom Volk fürs Volk",
    color: "#6C757D",
    participants: [
      { id: 29, name: "Christian Hoffmann", role: "Kanzlerkandidat", avatar: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 30, name: "Susanne Meyer", role: "Ministerin für Bürgerbeteiligung", avatar: "https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 31, name: "Tobias Koch", role: "Kommunalminister", avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150" },
      { id: 32, name: "Laura Schulz", role: "Sozialministerin", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" }
    ],
    programUrl: "/programme/buergernahe-fraktion.pdf",
    posts: [
      { id: 15, governmentId: 8, authorId: 29, content: "Wir bringen direkte Demokratie in die Politik.", timestamp: "2025-03-17T13:10:00" },
      { id: 16, governmentId: 8, authorId: 30, content: "Mehr Bürgerbeteiligung bei wichtigen Entscheidungen.", timestamp: "2025-03-19T09:25:00" }
    ]
  }
];