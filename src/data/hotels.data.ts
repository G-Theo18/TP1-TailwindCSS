export type HotelData = {
  id: number;
  cover: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
}

export const HOTELS: HotelData[] = [
  {
    id: 1,
    cover: "/img/hotels/01.jpg",
    title: "Hotel Verde Mar & Spa",
    rating: 4.1,
    reviews: 275,
    price: 300
  },
  {
    id: 2,
    cover: "/img/hotels/02.jpg",
    title: "Pedras do Mar Resort & Spa",
    rating: 4.1,
    reviews: 755,
    price: 250
  },
  {
    id: 3,
    cover: "/img/hotels/03.jpg",
    title: "Açores Autêntico Boutique Hotel",
    rating: 4.8,
    reviews: 16,
    price: 250
  },
  {
    id: 4,
    cover: "/img/hotels/04.jpg",
    title: "Caloura Hotel Resort",
    rating: 4.3,
    reviews: 610,
    price: 275
  },
]