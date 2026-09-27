import { ReviewItem, ServiceType } from '../types';
import fadeDetail from '../assets/images/hero_fade_detail_1790495617557.jpg';
import beardContour from '../assets/images/hero_beard_contour_1790495637343.jpg';
import cutCraft from '../assets/images/hero_cut_craft_1790495650213.jpg';
import shopInterior from '../assets/images/shop_interior_chairs_1790495666862.jpg';
import barberTools from '../assets/images/barber_tools_chrome_1790495680107.jpg';

export const BUSINESS_INFO = {
  name: "Razor's Edge Ltd",
  category: "Barber Shop",
  address: "Sector Q, DHA Phase 2, Lahore, Pakistan",
  sector: "Sector Q",
  area: "DHA Phase 2",
  city: "Lahore",
  country: "Pakistan",
  phone: "+92 321 4197477",
  phoneLink: "tel:+923214197477",
  whatsappNumber: "923214197477",
  whatsappUrl: "https://wa.me/923214197477",
  googleRating: 4.8,
  googleReviewCount: 492,
  operatingInfo: "Open · Closes 9 PM",
  mapsSearchQuery: "Razor's Edge Ltd Sector Q DHA Phase 2 Lahore",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Razor%27s+Edge+Ltd+Sector+Q+DHA+Phase+2+Lahore",
};

export const IMAGES = {
  fadeDetail,
  beardContour,
  cutCraft,
  shopInterior,
  barberTools,
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Adil Shuja",
    rating: 5,
    text: "Professional staff and good customer handling.",
    category: "staff",
    source: "Google Review"
  },
  {
    id: "rev-2",
    author: "Muhammad Zia-ur-Rehman",
    rating: 5,
    period: "Visiting for approximately 5 years",
    text: "Reported visiting for approximately 5 years and specifically praised beard trims, haircuts and the fade team, mentioning Usman bhai.",
    category: "fade",
    source: "Google Review"
  },
  {
    id: "rev-3",
    author: "Visitor Statement",
    rating: 5,
    text: "“Best environment in town for haircut like fade.” — Stated in customer feedback as a visitor's personal recommendation.",
    category: "experience",
    source: "Google Review"
  },
  {
    id: "rev-4",
    author: "Noor Ahmad",
    rating: 2,
    text: "Reported a negative experience involving approximately 30 minutes of waiting, an additional lunch break, and a later customer being prioritized.",
    category: "experience",
    source: "Google Review",
    isCritical: true
  }
];

export const SERVICES_INDEX: {
  id: ServiceType;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  focusDetails: string[];
}[] = [
  {
    id: "Haircut",
    number: "01",
    title: "HAIRCUT",
    tagline: "Scissor work, taper discipline & proportional silhouette",
    description: "Classic and contemporary hair sculpting calibrated to individual bone structure, hair growth direction, and texture. Clean perimeter lines with hand-finished balance.",
    image: IMAGES.cutCraft,
    focusDetails: ["Weight redistribution", "Hand scissor control", "Natural neckline blend"]
  },
  {
    id: "Fade",
    number: "02",
    title: "FADE",
    tagline: "Seamless tonal gradient from skin to scalp",
    description: "Precise clipper graduation tailored through low, mid, or high transition zones. Balanced against head contours with razor-finished edges and shadow-free blending.",
    image: IMAGES.fadeDetail,
    focusDetails: ["86 review mentions on listing", "Temple & nape transitions", "Zero-line skin taper"]
  },
  {
    id: "Beard Trim",
    number: "03",
    title: "BEARD TRIM",
    tagline: "Geometric jawline framing & straight-blade definition",
    description: "Sculpted beard grooming with clean cheekline demarcation, bulk balancing, mustache shaping, and hot straight razor perimeter work.",
    image: IMAGES.beardContour,
    focusDetails: ["Cheek contour symmetry", "Neckline taper", "Volume calibration"]
  },
  {
    id: "Haircut + Beard",
    number: "04",
    title: "HAIRCUT + BEARD",
    tagline: "Harmonized head-and-facial hair architecture",
    description: "Complete grooming synchronization connecting sideburn transitions with beard tapers. One continuous appointment ensuring proportional balance from crown to chin.",
    image: IMAGES.barberTools,
    focusDetails: ["Synchronized sideburn transition", "Balanced weight line", "Comprehensive finish"]
  }
];
