// interfaces/index.ts

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;       // e.g. "3"
  shower: string;    // e.g. "2"
  occupants: string; // e.g. "4-6"
}

export interface PropertyProps {
  name: string;          // Property name
  address: Address;      // Nested address object
  rating: number;        // e.g. 4.89
  category: string[];    // e.g. ["Luxury Villa", "Pool", "Free Parking"]
  price: number;         // e.g. 3200
  offers: Offers;        // Nested offers object
  image: string;         // Image URL
  discount: string;      // "" or "30" (string to match your sample data)
}
