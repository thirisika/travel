
// populars img
import Anchorage from "../images/popular/Anchorage To La Paz.jpg";
import Singapore from "../images/popular/Discover Singapore.png";
import Kiwiana from "../images/popular/Kiwiana Panorama.jpg";
import Quito from "../images/popular/Anchorage To Quito.jpg";
import Cuzco from "../images/popular/Cuzco To Anchorage.jpg";
import Ushuaia from "../images/popular/Anchorage To Ushuaia.jpg";
import Santiago from "../images/popular/Anchorage To Santiago.jpg";
import Explorer from "../images/popular/LA Explorer.jpg";

// destinations img
import tour4 from "../images/tour/Tokyo.png";
import tour5 from "../images/tour/bali-1.png";
import tour6 from "../images/tour/bangkok.png";
import tour7 from "../images/tour/cancun.png";
import tour8 from "../images/tour/nah-trang.png";
import tour9 from "../images/tour/phuket.png";
import tour10 from "../images/tour/paris.png";
import tour11 from "../images/tour/malaysia.png";



export const tourData = [
    {
      id: 0,
      title: "Discover Singapore",
      image: Singapore,
      location: "Bali",
      category: ["Escorted Tour", "Rail Tour"],
      days: "1-3 Days",
      price: 100,
      afterDiscount: 92,
      rating: "⭐⭐⭐⭐",
      reviews: 5,
    },
    {
      id: 1,
      title: "Kiwiana Panorama",
      image: Kiwiana,
      location: "Bangkok",
      category: ["River Cruise", "Wildlife"],
      days: "3-5 Days",
      price: 87,
      afterDiscount: 82,
      rating: "⭐⭐",
      reviews: 9,
    },
    {
      id: 2,
      title: "Anchorage To Quito",
      image: Quito,
      location: "Tokyo",
      category: ["Escorted Tour", "River Cruise"],
      days: "1-3 Days",
      price: 87,
      afterDiscount: 82,
      rating: "⭐⭐",
      reviews: 9,
    },
    {
      id: 3,
      title: "Anchorage To La Paz",
      image: Anchorage,
      location: "Paris",
      category: ["River Cruise", "Rail Tour"],
      days: "1-3 Days",
      price: 434,
      afterDiscount: 0,
      rating: "⭐⭐⭐",
      reviews: 20,
    },
    {
      id: 4,
      title: "Cuzco To Anchorage",
      image: Cuzco,
      location: "Phuket",
      category: ["River Cruise", "Tour & Cruise"],
      days: "5-7 Days",
      price: 395,
      afterDiscount: 0,
      rating: "⭐",
      reviews: 12,
    },
    {
      id: 5,
      title: "Anchorage To Ushuaia",
      image: Ushuaia,
      location: "Nha Trang",
      category: ["Escorted Tour", "Wildlife"],
      days: "3-5 Days",
      price: 93,
      afterDiscount: 0,
      rating: "⭐⭐⭐⭐⭐",
      reviews: 12,
    },
    {
      id: 6,
      title: "Anchorage To Santiago",
      image: Santiago,
      location: "Cancun",
      category: ["Escorted Tour", "Wildlife"],
      days: "7-10 Days",
      price: 42,
      afterDiscount: 0,
      rating: "⭐⭐⭐⭐⭐",
      reviews: 18,
    },
    {
      id: 7,
      title: "LA Explorer",
      image: Explorer,
      location: "Malaysia",
      category: ["Rail Tour", "Tour & Cruise"],
      days: "7-10 Days",
      price: 99,
      afterDiscount: 0,
      rating: "⭐⭐⭐⭐",
      reviews: 22,
    },
  ];


  export const destinationsData = [
    {
      id: 0,
      name: "Bali",
      tours: "5 tours and activities",
      image: tour5,
      link: "tour-name",
      shortDes: "",
    },
    {
      id: 1,
      name: "Tokyo",
      tours: "9 tours and activities",
      image: tour4,
      link: "tour-name",
    },
  
    {
      id: 2,
      name: "Bangkok",
      tours: "5 tours and activities",
      image: tour6,
      link: "tour-name",
    },
  
    {
      id: 3,
      name: "Cancun",
      tours: "4 tours and activities",
      image: tour7,
      link: "tour-name",
    },
    {
      id: 4,
      name: "Nha Trang",
      tours: "9 tours and activities ",
      image: tour8,
      link: "tour-name",
    },
    {
      id: 5,
      name: "Phuket",
      tours: "4 tours and activities",
      image: tour9,
      link: "tour-name",
    },
    {
      id: 6,
      name: "Paris",
      tours: "6 tours and activities",
      image: tour10,
      link: "tour-name",
    },
    {
      id: 7,
      name: "Malaysia",
      tours: "4 tours and activities",
      image: tour11,
      link: "tour-name",
    },
  ];
  

  


export const location = [
    "Bali",
    "Tokyo",
    "Bangkok",
    "Cancun",
    "Nha Trang",
    "Phuket",
    "Malaysia",
    "Paris",
  ];


  export const Categories = [
    "River Cruise", ,
    "Escorted Tour",
    "Wildlife",
    "Rail Tour",
    "Tour & Cruise",
    
  ];

  export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Days"];

  export const PriceRange = [
    "$ 0 - $50",
    "$ 50 - $ 100",
    "$ 100 - $ 200",
    "$ 200 - $ 400",
    "$ 400 - $ 800",
  ];
  
  export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

  export const footer = [
    {
      title: "About Us",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "Tours",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "Destination",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]
  
  