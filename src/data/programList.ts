import programAC from "@/assets/program-ac-refrigeration.jpg";
import programAutomobile from "@/assets/program-automobile.jpg";
import programCatering from "@/assets/program-catering.jpg";
import programCosmetology from "@/assets/program-cosmetology.jpg";
import programCrane from "@/assets/program-crane.jpg";
import programDriving from "@/assets/program-driving.jpg";
import programElectrical from "@/assets/program-electrical.jpg";
import programSolar from "@/assets/program-solar.jpg";
import programForklift from "@/assets/program-forklift.jpg";
import programIT from "@/assets/program-it-design.jpg";

export interface ProgramListItem {
  name: string;
  slug: string;
  image: string;
  short: string;
  duration: string;
}

export const programList: ProgramListItem[] = [
  {
    name: "Air Condition & Refrigeration",
    slug: "air-condition-refrigeration",
    image: programAC,
    short: "Install, service, and repair domestic and commercial cooling systems.",
    duration: "6–12 mo",
  },
  {
    name: "Automobile",
    slug: "automobile",
    image: programAutomobile,
    short: "Mechanics, auto-electrical, and air-conditioning for modern vehicles.",
    duration: "12 mo",
  },
  {
    name: "Catering & Hospitality",
    slug: "catering-hospitality",
    image: programCatering,
    short: "Cooking, baking, front office, and food & beverage service.",
    duration: "6–12 mo",
  },
  {
    name: "Cosmetology",
    slug: "cosmetology",
    image: programCosmetology,
    short: "Professional hair, beauty, and salon-business training.",
    duration: "6–12 mo",
  },
  {
    name: "Crane Operation",
    slug: "crane-operation",
    image: programCrane,
    short: "Safe operation of mobile and tower cranes for industry sites.",
    duration: "Short course",
  },
  {
    name: "Driving & Licensing",
    slug: "driving-licensing",
    image: programDriving,
    short: "Regular and weekend driving courses with road-test preparation.",
    duration: "Flexible",
  },
  {
    name: "Electrical Installation",
    slug: "electrical-installation",
    image: programElectrical,
    short: "Domestic, industrial, and building-automation electrical works.",
    duration: "12 mo",
  },
  {
    name: "Solar Energy Technology",
    slug: "solar-energy",
    image: programSolar,
    short: "Design, install, and maintain photovoltaic and off-grid systems.",
    duration: "6–12 mo",
  },
  {
    name: "Forklift & Logistics",
    slug: "forklift-logistics",
    image: programForklift,
    short: "Forklift operation, warehousing, and supply-chain fundamentals.",
    duration: "Short course",
  },
  {
    name: "IT & Graphic Design",
    slug: "it-graphic-design",
    image: programIT,
    short: "Microsoft Office, design tools, and digital workflow skills.",
    duration: "6–12 mo",
  },
];
