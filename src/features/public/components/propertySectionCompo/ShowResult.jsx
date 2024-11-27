import Container from "../../../../components/Container";
import PopularProperCard from "./PopularProperCard";
import ShowResultPagination from "./ShowResultPagination";

const ShowResult = () => {
  const resultList = [
    {
      id: 1,
      img: "img/product1.jpg",
      title: "Golden Pearl Condo",
      state: true,
      description:
        "Prime condo located in downtown, just 10 minutes to mall. Surrounded by lush parks, trendy cafes.",
      price: 1200,
      listedDate: "2024-11-20",
      unitId: "AA123456",
      bathroom: 2,
      bedRoom: 2,
      sqft: 50,
    },
    {
      id: 2,
      img: "img/product2.jpg",
      title: "Ocean Breeze Condo",
      state: true,
      description:
        "A serene retreat by the sea with access to a private beach and community pool.",
      price: 1500,
      listedDate: "2024-11-15",
      unitId: "BB654321",
      bathroom: 3,
      bedRoom: 3,
      sqft: 70,
    },
    {
      id: 3,
      img: "img/product3.jpg",
      title: "City Heights Condo",
      state: false,
      description:
        "Modern condo in the heart of the city, perfect for young professionals.",
      price: 1100,
      listedDate: "2024-10-30",
      unitId: "CC789012",
      bathroom: 1,
      bedRoom: 1,
      sqft: 40,
    },
    {
      id: 4,
      img: "img/product4.jpg",
      title: "Park View Condo",
      state: true,
      description:
        "Spacious condo overlooking a beautiful park, ideal for families.",
      price: 1300,
      listedDate: "2024-11-18",
      unitId: "DD345678",
      bathroom: 2,
      bedRoom: 2,
      sqft: 60,
    },
    {
      id: 5,
      img: "img/product5.jpg",
      title: "Skyline Retreat Condo",
      state: false,
      description:
        "Luxury high-rise condo with stunning city views and premium amenities.",
      price: 2000,
      listedDate: "2024-09-25",
      unitId: "EE234567",
      bathroom: 3,
      bedRoom: 4,
      sqft: 90,
    },
    {
      id: 6,
      img: "img/product6.jpg",
      title: "Urban Oasis Condo",
      state: true,
      description:
        "Trendy condo with a rooftop garden and gym access in the city center.",
      price: 1400,
      listedDate: "2024-11-10",
      unitId: "FF345678",
      bathroom: 2,
      bedRoom: 2,
      sqft: 55,
    },
    {
      id: 7,
      img: "img/product7.jpg",
      title: "Lakefront Charm Condo",
      state: true,
      description:
        "Charming condo with breathtaking lake views and private dock access.",
      price: 1700,
      listedDate: "2024-11-12",
      unitId: "GG456789",
      bathroom: 3,
      bedRoom: 3,
      sqft: 75,
    },
    {
      id: 8,
      img: "img/product8.jpg",
      title: "Eco-Friendly Condo",
      state: true,
      description:
        "Environmentally sustainable condo with energy-efficient systems.",
      price: 1250,
      listedDate: "2024-10-20",
      unitId: "HH567890",
      bathroom: 2,
      bedRoom: 2,
      sqft: 55,
    },
    {
      id: 9,
      img: "img/product9.jpg",
      title: "Suburban Comfort Condo",
      state: false,
      description:
        "Comfortable and affordable condo in a quiet suburban neighborhood.",
      price: 1000,
      listedDate: "2024-08-15",
      unitId: "II678901",
      bathroom: 1,
      bedRoom: 2,
      sqft: 45,
    },
    // {
    //   id: 10,
    //   img: "img/product10.jpg",
    //   title: "Downtown Loft Condo",
    //   state: true,
    //   description:
    //     "Stylish loft-style condo with modern design and urban convenience.",
    //   price: 1350,
    //   listedDate: "2024-11-02",
    //   unitId: "JJ789012",
    //   bathroom: 2,
    //   bedRoom: 1,
    //   sqft: 50,
    // },
    // {
    //   id: 11,
    //   img: "img/product11.jpg",
    //   title: "Mountain View Condo",
    //   state: true,
    //   description:
    //     "Cozy condo nestled in the mountains with spectacular hiking trails nearby.",
    //   price: 1600,
    //   listedDate: "2024-11-14",
    //   unitId: "KK890123",
    //   bathroom: 2,
    //   bedRoom: 2,
    //   sqft: 65,
    // },
    // {
    //   id: 12,
    //   img: "img/product12.jpg",
    //   title: "Urban Elegance Condo",
    //   state: true,
    //   description:
    //     "Elegant condo featuring high ceilings and a spacious open layout.",
    //   price: 1450,
    //   listedDate: "2024-11-05",
    //   unitId: "LL901234",
    //   bathroom: 2,
    //   bedRoom: 2,
    //   sqft: 60,
    // },
    // {
    //   id: 13,
    //   img: "img/product13.jpg",
    //   title: "Coastal Paradise Condo",
    //   state: true,
    //   description: "Exclusive coastal condo with stunning oceanfront views.",
    //   price: 1850,
    //   listedDate: "2024-09-22",
    //   unitId: "MM012345",
    //   bathroom: 3,
    //   bedRoom: 3,
    //   sqft: 80,
    // },
    // {
    //   id: 14,
    //   img: "img/product14.jpg",
    //   title: "Riverside Haven Condo",
    //   state: true,
    //   description:
    //     "Peaceful riverside condo with ample natural light and scenic trails nearby.",
    //   price: 1300,
    //   listedDate: "2024-11-03",
    //   unitId: "NN123456",
    //   bathroom: 2,
    //   bedRoom: 2,
    //   sqft: 60,
    // },
    // {
    //   id: 15,
    //   img: "img/product15.jpg",
    //   title: "Cityscape Condo",
    //   state: false,
    //   description: "Affordable city condo with all modern essentials.",
    //   price: 1150,
    //   listedDate: "2024-10-25",
    //   unitId: "OO234567",
    //   bathroom: 1,
    //   bedRoom: 1,
    //   sqft: 40,
    // },
    // {
    //   id: 16,
    //   img: "img/product16.jpg",
    //   title: "The Luxe Condo",
    //   state: true,
    //   description:
    //     "Ultra-luxurious condo in a prestigious neighborhood with 24/7 concierge.",
    //   price: 2500,
    //   listedDate: "2024-11-18",
    //   unitId: "PP345678",
    //   bathroom: 4,
    //   bedRoom: 4,
    //   sqft: 100,
    // },
    // {
    //   id: 17,
    //   img: "img/product17.jpg",
    //   title: "Modern Retreat Condo",
    //   state: true,
    //   description:
    //     "Contemporary condo with minimalist design and smart home features.",
    //   price: 1550,
    //   listedDate: "2024-10-30",
    //   unitId: "QQ456789",
    //   bathroom: 2,
    //   bedRoom: 2,
    //   sqft: 55,
    // },
    // {
    //   id: 18,
    //   img: "img/product18.jpg",
    //   title: "Harbor Front Condo",
    //   state: false,
    //   description:
    //     "Charming condo overlooking the harbor with access to nearby markets.",
    //   price: 1450,
    //   listedDate: "2024-08-10",
    //   unitId: "RR567890",
    //   bathroom: 2,
    //   bedRoom: 2,
    //   sqft: 60,
    // },
    // {
    //   id: 19,
    //   img: "img/product19.jpg",
    //   title: "Vintage Charm Condo",
    //   state: true,
    //   description: "Beautifully renovated vintage condo with modern amenities.",
    //   price: 1200,
    //   listedDate: "2024-11-06",
    //   unitId: "SS678901",
    //   bathroom: 1,
    //   bedRoom: 2,
    //   sqft: 50,
    // },
    // {
    //   id: 20,
    //   img: "img/product20.jpg",
    //   title: "Luxury Lake Condo",
    //   state: true,
    //   description: "High-end condo with lake access and an in-building spa.",
    //   price: 2200,
    //   listedDate: "2024-11-08",
    //   unitId: "TT789012",
    //   bathroom: 3,
    //   bedRoom: 3,
    //   sqft: 85,
    // },
  ];

  return (
    <div>
      <Container>
        <div className=" flex flex-col gap-16">
          <div>
            <h1>
              Show <span>5</span> of <span>21</span> results
            </h1>
          </div>
          {/* show cards section */}
          <div className="grid grid-cols-3 gap-16">
            {resultList.map((item) => (
              <PopularProperCard key={item.id} property={item} />
            ))}
          </div>
          <ShowResultPagination />
        </div>
      </Container>
    </div>
  );
};

export default ShowResult;
