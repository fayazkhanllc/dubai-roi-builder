import tilalBuilding1 from "@/assets/tilal-building-1.jpeg";
import tilalBuilding2 from "@/assets/tilal-building-2.jpeg";
import tilalBuilding3 from "@/assets/tilal-building-3.jpeg";
import tilalBuilding4 from "@/assets/tilal-building-4.jpeg";

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceFormatted: string;
  roi: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: "Apartment" | "Villa" | "Commercial";
  location: string;
  developer: string;
  handoverDate: string;
  paymentPlan: string;
  images: string[];
  featured: boolean;
  offPlan: boolean;
  floorPlan?: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Marina Residence",
    description: "Stunning waterfront apartment with panoramic marina views, premium finishes, and world-class amenities.",
    price: 2500000,
    priceFormatted: "AED 2,500,000",
    roi: 8.5,
    bedrooms: 2,
    bathrooms: 3,
    area: 1450,
    type: "Apartment",
    location: "Dubai Marina",
    developer: "Emaar Properties",
    handoverDate: "Q4 2026",
    paymentPlan: "60/40",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    ],
    featured: true,
    offPlan: true,
  },
  {
    id: "2",
    title: "Downtown Skyline Tower",
    description: "Ultra-modern apartment in the heart of Downtown Dubai with Burj Khalifa views and premium lifestyle.",
    price: 3800000,
    priceFormatted: "AED 3,800,000",
    roi: 7.2,
    bedrooms: 3,
    bathrooms: 4,
    area: 2100,
    type: "Apartment",
    location: "Downtown Dubai",
    developer: "Emaar Properties",
    handoverDate: "Q2 2027",
    paymentPlan: "70/30",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    ],
    featured: true,
    offPlan: true,
  },
  {
    id: "3",
    title: "Business Bay Executive Suite",
    description: "Premium executive apartment with canal views, smart home features, and direct metro access.",
    price: 1800000,
    priceFormatted: "AED 1,800,000",
    roi: 9.1,
    bedrooms: 1,
    bathrooms: 2,
    area: 950,
    type: "Apartment",
    location: "Business Bay",
    developer: "Damac Properties",
    handoverDate: "Q1 2026",
    paymentPlan: "50/50",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    featured: true,
    offPlan: false,
  },
  {
    id: "4",
    title: "Palm Jumeirah Villa",
    description: "Exclusive beachfront villa with private pool, garden, and direct beach access on the iconic Palm.",
    price: 12500000,
    priceFormatted: "AED 12,500,000",
    roi: 6.8,
    bedrooms: 5,
    bathrooms: 7,
    area: 6500,
    type: "Villa",
    location: "Palm Jumeirah",
    developer: "Nakheel",
    handoverDate: "Ready",
    paymentPlan: "N/A",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    ],
    featured: true,
    offPlan: false,
  },
  {
    id: "5",
    title: "JLT Lakeside Apartment",
    description: "Modern apartment overlooking JLT lakes with excellent connectivity and vibrant community living.",
    price: 950000,
    priceFormatted: "AED 950,000",
    roi: 10.2,
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    type: "Apartment",
    location: "JLT",
    developer: "Sobha Realty",
    handoverDate: "Ready",
    paymentPlan: "N/A",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
    ],
    featured: false,
    offPlan: false,
  },
  {
    id: "6",
    title: "Sobha Hartland Villa",
    description: "Luxury villa in MBR City with lush green surroundings, private garden, and world-class amenities.",
    price: 7200000,
    priceFormatted: "AED 7,200,000",
    roi: 7.5,
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    type: "Villa",
    location: "MBR City",
    developer: "Sobha Realty",
    handoverDate: "Q3 2026",
    paymentPlan: "60/40",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
    ],
    featured: true,
    offPlan: true,
  },
  {
    id: "7",
    title: "Commercial Space — Business Bay",
    description: "Prime commercial office space in Business Bay with panoramic city views and premium fit-out.",
    price: 4500000,
    priceFormatted: "AED 4,500,000",
    roi: 8.0,
    bedrooms: 0,
    bathrooms: 2,
    area: 2800,
    type: "Commercial",
    location: "Business Bay",
    developer: "Omniyat",
    handoverDate: "Ready",
    paymentPlan: "N/A",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800",
    ],
    featured: false,
    offPlan: false,
  },
  {
    id: "8",
    title: "Dubai Hills Estate Villa",
    description: "Contemporary family villa with golf course views, smart home integration, and premium landscaping.",
    price: 5800000,
    priceFormatted: "AED 5,800,000",
    roi: 7.8,
    bedrooms: 4,
    bathrooms: 5,
    area: 3800,
    type: "Villa",
    location: "Dubai Hills",
    developer: "Emaar Properties",
    handoverDate: "Q1 2027",
    paymentPlan: "70/30",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800",
    ],
    featured: false,
    offPlan: true,
  },
  {
    id: "9",
    title: "Tilal City Commercial Building",
    description: "Premium commercial building in Tilal City, Sharjah with modern architecture, multiple floors, retail shops on ground level, and residential apartments above. Excellent investment opportunity with high rental yield.",
    price: 11000000,
    priceFormatted: "AED 11,000,000",
    roi: 8.5,
    bedrooms: 0,
    bathrooms: 8,
    area: 12000,
    type: "Commercial",
    location: "Tilal City, Sharjah",
    developer: "Qalaht Al Tilal Real Estate",
    handoverDate: "Ready",
    paymentPlan: "N/A",
    images: [
      tilalBuilding1,
      tilalBuilding2,
      tilalBuilding3,
      tilalBuilding4,
    ],
    featured: true,
    offPlan: false,
  },
];

export const locations = [
  "Dubai Marina",
  "Downtown Dubai",
  "Business Bay",
  "JLT",
  "Palm Jumeirah",
  "MBR City",
  "Dubai Hills",
  "JVC",
  "Dubai Creek Harbour",
  "Tilal City, Sharjah",
];

export const testimonials = [
  {
    id: "1",
    name: "James Richardson",
    role: "Property Investor, United Kingdom",
    quote: "Qalaht Al Tilal Real Estate made my UAE investment seamless. The ROI has exceeded my expectations — 9% in the first year alone. Their market knowledge is unmatched.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    verified: true,
  },
  {
    id: "2",
    name: "Fatima Al-Hassan",
    role: "Business Owner, Saudi Arabia",
    quote: "Professional, transparent, and incredibly knowledgeable about the Dubai and Sharjah markets. They helped me secure my Golden Visa through property investment with zero hassle.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    verified: true,
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Tech Entrepreneur, Singapore",
    quote: "From property selection to handover, the team was exceptional. My Business Bay apartment has been generating consistent rental income. Highly recommend for international investors.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    verified: true,
  },
  {
    id: "4",
    name: "Sarah Thompson",
    role: "Expat Resident, Australia",
    quote: "As a first-time buyer in the UAE, I needed guidance every step of the way. Qalaht Al Tilal delivered beyond my expectations — from paperwork to property handover.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    verified: true,
  },
  {
    id: "5",
    name: "Ahmed Al-Mansouri",
    role: "Real Estate Investor, Kuwait",
    quote: "I've worked with many agencies across the Gulf, but Qalaht Al Tilal stands out for their integrity and deep understanding of Sharjah's emerging markets like Tilal City.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    verified: true,
  },
  {
    id: "6",
    name: "Elena Petrova",
    role: "Investment Banker, Russia",
    quote: "Excellent service from start to finish. They helped me diversify my portfolio with premium off-plan properties. The returns have been outstanding — over 8% annually.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    verified: true,
  },
  {
    id: "7",
    name: "David Okonkwo",
    role: "Business Executive, Nigeria",
    quote: "Qalaht Al Tilal made international property buying effortless. Their team handled everything remotely and I now own two properties in Sharjah. Trustworthy and professional.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
    verified: true,
  },
];

export const teamMembers = [
  {
    name: "Wakil Khan",
    title: "CEO",
    bio: "Visionary leader driving Qalaht Al Tilal Real Estate with deep market expertise across the UAE.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300",
  },
  {
    name: "Nadia Khalil",
    title: "Head of Sales",
    bio: "Specializing in luxury properties and off-plan investments.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300",
  },
  {
    name: "Omar Rashid",
    title: "Senior Property Consultant",
    bio: "Expert in Golden Visa eligibility and investment structuring.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300",
  },
  {
    name: "Priya Sharma",
    title: "Client Relations Manager",
    bio: "Dedicated to ensuring seamless buying experiences for international clients.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300",
  },
];
