export type ActivityData = {
  id: number;
  type: "experience" | "hike",
  title: string;
  cover: string;
  duration: string;
  rating: number;
  reviews: number;
  tags: string[];
}


export const ACTIVITIES: ActivityData[] = [
  {
    id: 1,
    type: "experience",
    cover: "/img/activities/01.jpg",
    title: "Visite côte à côte - Sete Cidades",
    duration: "demi-journée",
    rating: 5,
    reviews: 336,
    tags: ["buggy", "paysages"]
  },
  {
    id: 2,
    type: "experience",
    cover: "/img/activities/02.jpg",
    title: "San Miguel : Excursion en bateau",
    duration: "4h",
    rating: 5,
    reviews: 78,
    tags: ["nautique", "grottes"]
  },
  {
    id: 3,
    type: "experience",
    cover: "/img/activities/03.jpg",
    title: "Excursion d’observation des baleines aux Açores",
    duration: "2h",
    rating: 4.5,
    reviews: 643,
    tags: ["nautique", "faune"]
  },
  {
    id: 4,
    type: "hike",
    cover: "/img/activities/04.jpg",
    title: "Caldeira das Sete Cidades",
    duration: "4h",
    rating: 4.8,
    reviews: 4673,
    tags: ["paysage", "volcans", "lac"]
  },
  {
    id: 5,
    type: "hike",
    cover: "/img/activities/05.jpg",
    title: "Miradouro da Boca do Inferno",
    duration: "4h",
    rating: 4.9,
    reviews: 420,
    tags: ["paysage", "volcans", "côte"]
  },
  {
    id: 6,
    type: "hike",
    cover: "/img/activities/06.jpg",
    title: "Algar do Carvao",
    duration: "1h",
    rating: 4.6,
    reviews: 1177,
    tags: ["paysage", "grotte"]
  },
  {
    id: 7,
    type: "hike",
    cover: "/img/activities/07.jpg",
    title: "Lagoa do Fogo",
    duration: "6h",
    rating: 4.7,
    reviews: 2126,
    tags: ["paysage", "lac"]
  },
];