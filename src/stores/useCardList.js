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
        "Prime condo located in downtown, just 10 minutes to mall. Surrounded by lush parks, trendy cafes, and vibrant markets.",
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
        propertyDetails: {
          unitId: "AA123456",
          propertyType: "Condo",
          sizeSqft: 1200,
          rooms: 5,
          bedrooms: 2,
          price: 1500,
          status: "Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 1,
        },
        amenitiesFeatures: [
          "Smoke Alarm",
          "Gym",
          "Parking",
          "24th Security",
          "Garden",
          "Swimming Pool",
          "WiFi",
          "Mini Playground",
          "Laundry Shop",
        ],
        mapLocation: {
          latitude: 13.736717,
          longitude: 100.523186,
        },
      },
    },
    {
      id: "BB234567",
      name: "Emerald Residence",
      slug: "emerald-residence",
      available: true,
      type: "rent",
      propertyImg: p2,
      shortDescription:
        "Spacious condo in a vibrant neighborhood, close to shopping and public transportation.",
      pricePerMonth: 1800,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqft: 1400,
      listedDate: "2024-10-01",
      details: {
        description:
          "Modern amenities, open floor plan, and a community garden.",
        detailImg: [
          "/images/details/emerald_residence_1.jpg",
          "/images/details/emerald_residence_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/emerald_residence_1.jpg",
          "/images/details/thumbnails/emerald_residence_2.jpg",
        ],
        propertyDetails: {
          unitId: "BB234567",
          propertyType: "Condo",
          sizeSqft: 1400,
          rooms: 6,
          bedrooms: 3,
          price: 1800,
          status: "Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 1,
        },
        amenitiesFeatures: ["Smoke Alarm", "Gym", "Swimming Pool", "Parking"],
        mapLocation: {
          latitude: 13.746717,
          longitude: 100.543186,
        },
      },
    },
    {
      id: "CC345678",
      name: "Sunset Villas",
      slug: "sunset-villas",
      available: false,
      type: "sale",
      propertyImg: p3,
      shortDescription:
        "Luxurious villa with a stunning ocean view, perfect for families.",
      pricePerMonth: 5000,
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      sizeSqft: 3000,
      listedDate: "2024-09-20",
      details: {
        description: "Private pool, large garden, and high-end finishes.",
        detailImg: [
          "/images/details/sunset_villas_1.jpg",
          "/images/details/sunset_villas_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/sunset_villas_1.jpg",
          "/images/details/thumbnails/sunset_villas_2.jpg",
        ],
        propertyDetails: {
          unitId: "CC345678",
          propertyType: "Villa",
          sizeSqft: 3000,
          rooms: 8,
          bedrooms: 4,
          price: 500000,
          status: "Not Available",
          lotSize: 5000,
          bathrooms: 3,
          garages: 2,
        },
        amenitiesFeatures: ["Smoke Alarm", "Swimming Pool", "Garden", "Garage"],
        mapLocation: {
          latitude: 13.756717,
          longitude: 100.533186,
        },
      },
    },
    {
      id: "DD456789",
      name: "City Heights Apartment",
      slug: "city-heights-apartment",
      available: true,
      type: "rent",
      propertyImg: p4,
      shortDescription:
        "Conveniently located apartment with easy access to public transport.",
      pricePerMonth: 1200,
      bedrooms: 1,
      bathrooms: 1,
      sizeSqft: 800,
      listedDate: "2024-11-10",
      details: {
        description: "Cozy living space with modern appliances.",
        detailImg: [
          "/images/details/city_heights_apartment_1.jpg",
          "/images/details/city_heights_apartment_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/city_heights_apartment_1.jpg",
          "/images/details/thumbnails/city_heights_apartment_2.jpg",
        ],
        propertyDetails: {
          unitId: "DD456789",
          propertyType: "Apartment",
          sizeSqft: 800,
          rooms: 3,
          bedrooms: 1,
          price: 1200,
          status: "Available",
          lotSize: 0,
          bathrooms: 1,
          garages: 0,
        },
        amenitiesFeatures: ["WiFi", "Gym", "Laundry", "Parking"],
        mapLocation: {
          latitude: 13.766717,
          longitude: 100.523186,
        },
      },
    },
    {
      id: "EE567890",
      name: "Riverfront Estate",
      slug: "riverfront-estate",
      available: true,
      type: "sale",
      propertyImg: p5,
      shortDescription:
        "Exclusive estate with river views and expansive grounds.",
      pricePerMonth: 12000,
      price: 1200000,
      bedrooms: 5,
      bathrooms: 4,
      sizeSqft: 5000,
      listedDate: "2024-08-15",
      details: {
        description:
          "Elegant interiors, outdoor entertaining areas, and private dock.",
        detailImg: [
          "/images/details/riverfront_estate_1.jpg",
          "/images/details/riverfront_estate_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/riverfront_estate_1.jpg",
          "/images/details/thumbnails/riverfront_estate_2.jpg",
        ],
        propertyDetails: {
          unitId: "EE567890",
          propertyType: "Estate",
          sizeSqft: 5000,
          rooms: 10,
          bedrooms: 5,
          price: 1200000,
          status: "Available",
          lotSize: 10000,
          bathrooms: 4,
          garages: 3,
        },
        amenitiesFeatures: ["Smoke Alarm", "Swimming Pool", "Garden", "Dock"],
        mapLocation: {
          latitude: 13.776717,
          longitude: 100.513186,
        },
      },
    },
    {
      id: "FF678901",
      name: "Parkside Townhouse",
      slug: "parkside-townhouse",
      available: false,
      type: "rent",
      propertyImg: p2,
      shortDescription:
        "Charming townhouse near a large park, ideal for families.",
      pricePerMonth: 2000,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqft: 1600,
      listedDate: "2024-07-01",
      details: {
        description:
          "Cozy interiors, backyard, and close to schools and parks.",
        detailImg: [
          "/images/details/parkside_townhouse_1.jpg",
          "/images/details/parkside_townhouse_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/parkside_townhouse_1.jpg",
          "/images/details/thumbnails/parkside_townhouse_2.jpg",
        ],
        propertyDetails: {
          unitId: "FF678901",
          propertyType: "Townhouse",
          sizeSqft: 1600,
          rooms: 5,
          bedrooms: 3,
          price: 2000,
          status: "Not Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 1,
        },
        amenitiesFeatures: ["Smoke Alarm", "Garden", "Parking", "WiFi"],
        mapLocation: {
          latitude: 13.786717,
          longitude: 100.503186,
        },
      },
    },
    {
      id: "GG789012",
      name: "Beachside Bungalow",
      slug: "beachside-bungalow",
      available: true,
      type: "sale",
      propertyImg: p3,
      shortDescription:
        "Cozy bungalow with a private beach, perfect for relaxation.",
      pricePerMonth: 7500,
      price: 750000,
      bedrooms: 2,
      bathrooms: 2,
      sizeSqft: 900,
      listedDate: "2024-10-20",
      details: {
        description: "Direct beach access, modern kitchen, and outdoor deck.",
        detailImg: [
          "/images/details/beachside_bungalow_1.jpg",
          "/images/details/beachside_bungalow_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/beachside_bungalow_1.jpg",
          "/images/details/thumbnails/beachside_bungalow_2.jpg",
        ],
        propertyDetails: {
          unitId: "GG789012",
          propertyType: "Bungalow",
          sizeSqft: 900,
          rooms: 4,
          bedrooms: 2,
          price: 750000,
          status: "Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 0,
        },
        amenitiesFeatures: ["Smoke Alarm", "Beach Access", "Deck", "WiFi"],
        mapLocation: {
          latitude: 13.796717,
          longitude: 100.523186,
        },
      },
    },
    {
      id: "HH890123",
      name: "Mountain Retreat",
      slug: "mountain-retreat",
      available: true,
      type: "rent",
      propertyImg: p5,
      shortDescription:
        "Secluded cabin in the mountains, ideal for nature lovers.",
      pricePerMonth: 2500,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqft: 2000,
      listedDate: "2024-06-30",
      details: {
        description:
          "Rustic charm with modern amenities, hiking trails nearby.",
        detailImg: [
          "/images/details/mountain_retreat_1.jpg",
          "/images/details/mountain_retreat_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/mountain_retreat_1.jpg",
          "/images/details/thumbnails/mountain_retreat_2.jpg",
        ],
        propertyDetails: {
          unitId: "HH890123",
          propertyType: "Cabin",
          sizeSqft: 2000,
          rooms: 5,
          bedrooms: 3,
          price: 2500,
          status: "Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 1,
        },
        amenitiesFeatures: ["Smoke Alarm", "Fireplace", "Parking", "WiFi"],
        mapLocation: {
          latitude: 13.806717,
          longitude: 100.513186,
        },
      },
    },
    {
      id: "II901234",
      name: "Urban Loft",
      slug: "urban-loft",
      available: true,
      type: "rent",
      propertyImg: p2,
      shortDescription: "Stylish loft apartment in the heart of the city.",
      pricePerMonth: 2200,
      bedrooms: 2,
      bathrooms: 1,
      sizeSqft: 1100,
      listedDate: "2024-11-05",
      details: {
        description: "Open floor plan, high ceilings, and a rooftop terrace.",
        detailImg: [
          "/images/details/urban_loft_1.jpg",
          "/images/details/urban_loft_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/urban_loft_1.jpg",
          "/images/details/thumbnails/urban_loft_2.jpg",
        ],
        propertyDetails: {
          unitId: "II901234",
          propertyType: "Loft",
          sizeSqft: 1100,
          rooms: 3,
          bedrooms: 2,
          price: 2200,
          status: "Available",
          lotSize: 0,
          bathrooms: 1,
          garages: 0,
        },
        amenitiesFeatures: ["Smoke Alarm", "Gym", "Rooftop Terrace", "Parking"],
        mapLocation: {
          latitude: 13.816717,
          longitude: 100.503186,
        },
      },
    },
    {
      id: "JJ012345",
      name: "Countryside Cottage",
      slug: "countryside-cottage",
      available: false,
      type: "rent",
      propertyImg: p4,
      shortDescription: "Charming cottage in a serene countryside setting.",
      pricePerMonth: 1800,
      bedrooms: 3,
      bathrooms: 2,
      sizeSqft: 1500,
      listedDate: "2024-07-15",
      details: {
        description:
          "Quaint interiors, beautiful gardens, and a cozy fireplace.",
        detailImg: [
          "/images/details/countryside_cottage_1.jpg",
          "/images/details/countryside_cottage_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/countryside_cottage_1.jpg",
          "/images/details/thumbnails/countryside_cottage_2.jpg",
        ],
        propertyDetails: {
          unitId: "JJ012345",
          propertyType: "Cottage",
          sizeSqft: 1500,
          rooms: 4,
          bedrooms: 3,
          price: 1800,
          status: "Not Available",
          lotSize: 0,
          bathrooms: 2,
          garages: 1,
        },
        amenitiesFeatures: ["Smoke Alarm", "Fireplace", "Garden", "WiFi"],
        mapLocation: {
          latitude: 13.826717,
          longitude: 100.493186,
        },
      },
    },
    {
      id: "KK123456",
      name: "City Center Penthouse",
      slug: "city-center-penthouse",
      available: true,
      type: "sale",
      propertyImg: p1,
      shortDescription:
        "Luxury penthouse with stunning city views and top-notch amenities.",
      pricePerMonth: 2000,
      price: 2000000,
      bedrooms: 4,
      bathrooms: 4,
      sizeSqft: 3500,
      listedDate: "2024-11-01",
      details: {
        description: "High-end finishes, private elevator, and rooftop pool.",
        detailImg: [
          "/images/details/city_center_penthouse_1.jpg",
          "/images/details/city_center_penthouse_2.jpg",
        ],
        thumbnails: [
          "/images/details/thumbnails/city_center_penthouse_1.jpg",
          "/images/details/thumbnails/city_center_penthouse_2.jpg",
        ],
        propertyDetails: {
          unitId: "KK123456",
          propertyType: "Penthouse",
          sizeSqft: 3500,
          rooms: 7,
          bedrooms: 4,
          price: 2000000,
          status: "Available",
          lotSize: 0,
          bathrooms: 4,
          garages: 2,
        },
        amenitiesFeatures: ["Smoke Alarm", "Gym", "Swimming Pool", "WiFi"],
        mapLocation: {
          latitude: 13.836717,
          longitude: 100.483186,
        },
      },
    },
  ],
  setCards: (cards) => set({ cards }),
  resetCards: () => set({ cards: [] }),
}));

export default useCardList;
