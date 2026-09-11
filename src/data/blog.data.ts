export type BlogData = {
  id: number;
  cover: string;
  title: string;
  excerpt: string;
  date: Date;
}

export const BLOG_ARTICLES: BlogData[] = [
  {
    id: 1,
    cover: "/img/blog/01.webp",
    title: "Guide complet pour explorer São Miguel en 7 jours",
    excerpt: "Des lacs de cratère de Sete Cidades aux sources chaudes de Furnas, découvrez l'itinéraire parfait pour visiter l'île principale des Açores.",
    date: new Date("2026-04-12")
  },
  {
    id: 2,
    cover: "/img/blog/02.webp",
    title: "Observation des baleines et dauphins à Pico",
    excerpt: "L'archipel des Açores est l'un des plus grands sanctuaires marins au monde. Retour sur une excursion inoubliable au large de l'île de Pico.",
    date: new Date("2026-05-03")
  },
  {
    id: 3,
    cover: "/img/blog/03.jpg",
    title: "Les plus belles randonnées de l'île de Flores",
    excerpt: "Cascade du Poço do Bacalhau, lacs volcaniques et côtes découpées : exploration pédestre du joyau le plus sauvage de l'archipel.",
    date: new Date("2026-06-18")
  },
  {
    id: 4,
    cover: "/img/blog/04.webp",
    title: "Quand partir aux Açores ? Climat, météo et saisons",
    excerpt: "Températures, précipitations et affluence : nos conseils pour choisir la meilleure période de l'année selon vos envies d'activités.",
    date: new Date("2026-07-02")
  },
  {
    id: 5,
    cover: "/img/blog/05.webp",
    title: "Escapade culturelle à Terceira et Angra do Heroísmo",
    excerpt: "Flâneries dans les ruelles colorées de la capitale historique et exploration impressionnante du tube de lave d'Algar do Carvão.",
    date: new Date("2026-08-10")
  }
];