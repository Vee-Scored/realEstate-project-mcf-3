import { create } from "zustand";
import p1 from "../assets/propertyAssets/p1.jpeg";
import p2 from "../assets/propertyAssets/p2.jpeg";
import p3 from "../assets/propertyAssets/p3.jpeg";
import p4 from "../assets/propertyAssets/p4.jpeg";
import p5 from "../assets/propertyAssets/p5.jpeg";
const useCardList = create((set) => ({
  cards: [
    {
      id: "AA123456",
      name: "Golden Pearl Condo",
      slug: "golden-pearl-condo",
      available: true,
      type: "rent",
      propertyImg: p1,
      shortDescription:
        "Prime condo located in downtown, just 10 minutes to the mall. Surrounded by lush parks, trendy cafes, and vibrant markets.",
      pricePerMonth: 1500,
      bedrooms: 2,
      bathrooms: 2,
      sizeSqft: 1200,
      listedDate: "2024-11-15",
      details: {
        description:
          "A beautifully designed condo with a modern layout, spacious living room, and fully equipped kitchen. Located in a prime downtown area with easy access to shopping centers and parks.",
        detailImg: [
          "/images/details/golden_pearl_condo_1.jpg",
          "/images/details/golden_pearl_condo_2.jpg",
          "/images/details/golden_pearl_condo_3.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/golden_pearl_condo_1.jpg",
          "/images/details/thumbnails/golden_pearl_condo_2.jpg",
          "/images/details/thumbnails/golden_pearl_condo_3.jpg",
        ],
        propertyDetails: [
          ["unitId", "AA123456"],
          ["propertyType", "Condo"],
          ["sizeSqft", 1200],
          ["rooms", 5],
          ["bedrooms", 2],
          ["price", "$ 505,50000 1000/per sq ft"],
          ["status", "Available"],
          ["lotSize", 0],
          ["bathrooms", 2],
          ["garages", 1],
        ],
        amenitiesFeatures: [
          "Smoke Alarm",
          "Gym",
          "Parking",
          "24th Security",
          "Garden",
          "Swimming Pool",
          "WiFi",
          "Mini Playground",
          "Convenience store",
          "Laundry Shop",
        ],
        mapLocation: {
          latitude: 13.736717,
          longitude: 100.523186,
        },
      },
    },
    {
      id: "BB987654",
      name: "Emerald View Condo",
      slug: "emerald-view-condo",
      available: true,
      type: "rent",
      propertyImg: p2,
      shortDescription:
        "Modern condo overlooking the river, located near public transportation hubs and schools.",
      pricePerMonth: 1800,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqft: 1400,
      listedDate: "2024-11-20",
      details: {
        description:
          "Stylish condo with a scenic view of the river. Equipped with modern appliances and spacious bedrooms. Ideal for families.",
        detailImg: [
          "/images/details/emerald_view_condo_1.jpg",
          "/images/details/emerald_view_condo_2.jpg",
          "/images/details/emerald_view_condo_3.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/emerald_view_condo_1.jpg",
          "/images/details/thumbnails/emerald_view_condo_2.jpg",
          "/images/details/thumbnails/emerald_view_condo_3.jpg",
        ],
        propertyDetails: [
          ["unitId", "BB987654"],
          ["propertyType", "Condo"],
          ["sizeSqft", 1400],
          ["rooms", 6],
          ["bedrooms", 3],
          ["price", "$ 600,00000 1500/per sq ft"],
          ["status", "Available"],
          ["lotSize", 0],
          ["bathrooms", 2],
          ["garages", 2],
        ],
        amenitiesFeatures: [
          "Smoke Alarm",
          "Gym",
          "River View",
          "Parking",
          "24th Security",
          "Swimming Pool",
          "WiFi",
          "Playground",
          "CCTV Monitoring",
          "Cafe",
        ],
        mapLocation: {
          latitude: 13.75633,
          longitude: 100.501765,
        },
      },
    },
    ...Array.from({ length: 88 }, (_, i) => ({
      id: `CC${100000 + i}`,
      name: `Elite Condo ${i + 3}`,
      slug: `elite-condo-${i + 3}`,
      available: i % 2 === 0,
      type: i % 2 === 0 ? "rent" : "sale",
      propertyImg: p4,
      shortDescription: `Elite condo with luxurious facilities, located in a serene neighborhood close to downtown amenities.`,
      pricePerMonth: 1400 + i * 50,
      bedrooms: 1 + (i % 3),
      bathrooms: 1 + (i % 2),
      sizeSqft: 1100 + i * 50,
      listedDate: `2024-11-${15 + (i % 10)}`,
      details: {
        description: `An exquisite condo offering contemporary design, ample space, and unmatched amenities. Perfect for modern living.`,
        detailImg: [
          `/images/details/elite_condo_${i + 3}_1.jpg`,
          `/images/details/elite_condo_${i + 3}_2.jpg`,
          `/images/details/elite_condo_${i + 3}_3.jpg`,
        ],
        thumbnails: [
          `/images/details/thumbnails/elite_condo_${i + 3}_1.jpg`,
          `/images/details/thumbnails/elite_condo_${i + 3}_2.jpg`,
          `/images/details/thumbnails/elite_condo_${i + 3}_3.jpg`,
        ],
        propertyDetails: [
          ["unitId", `CC${100000 + i}`],
          ["propertyType", "Condo"],
          ["sizeSqft", 1100 + i * 50],
          ["rooms", 5 + (i % 4)],
          ["bedrooms", 1 + (i % 3)],
          ["price", `$ ${(1400 + i * 50) * 100} total`],
          ["status", i % 2 === 0 ? "Available" : "Unavailable"],
          ["lotSize", 0],
          ["bathrooms", 1 + (i % 2)],
          ["garages", i % 2],
        ],
        amenitiesFeatures: [
          "Smoke Alarm",
          "Gym",
          "Parking",
          "24th Security",
          "Garden",
          "Swimming Pool",
          "WiFi",
          "Pet Friendly",
          "Convenience store",
          "Laundry Shop",
        ],
        mapLocation: {
          latitude: 13.71 + i * 0.01,
          longitude: 100.52 - i * 0.01,
        },
      },
    })),
  ],
  setCards: (cards) => set({ cards }),
  resetCards: () => set({ cards: [] }),
}));

export default useCardList;
