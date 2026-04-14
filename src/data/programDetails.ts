import programAC from "@/assets/program-ac-refrigeration.jpg";
import programAutomobile from "@/assets/program-automobile.jpg";
import programCatering from "@/assets/program-catering.jpg";
import programCosmetology from "@/assets/program-cosmetology.jpg";
import programCrane from "@/assets/program-crane.jpg";
import programDriving from "@/assets/program-driving.jpg";
import programElectrical from "@/assets/program-electrical.jpg";
import programForklift from "@/assets/program-forklift.jpg";
import programIT from "@/assets/program-it-design.jpg";

export interface ProgramDetail {
  name: string;
  image: string;
  overview: string;
  modules: string[];
  certification: string;
  careers: string[];
}

export const programDetails: Record<string, ProgramDetail> = {
  "air-condition-refrigeration": {
    name: "Air Condition & Refrigeration",
    image: programAC,
    overview:
      "This program trains students in the installation, maintenance, and repair of air conditioning and refrigeration systems. Students gain hands-on experience with domestic and industrial cooling equipment, learning to diagnose faults, handle refrigerants safely, and ensure systems operate at peak efficiency.",
    modules: [
      "Fundamentals of Refrigeration & Air Conditioning",
      "Electrical Components & Wiring for HVAC Systems",
      "Refrigerant Handling & Safety Procedures",
      "Installation of Split & Window AC Units",
      "Troubleshooting & Fault Diagnosis",
      "Industrial Refrigeration Systems",
      "Preventive Maintenance Practices",
      "Brazing & Soldering Techniques",
    ],
    certification: "NVTI Certificate II in Refrigeration & Air Conditioning",
    careers: [
      "HVAC Technician",
      "Refrigeration Mechanic",
      "AC Installation Specialist",
      "Maintenance Technician",
      "Cold Room Technician",
      "Self-employed HVAC Contractor",
    ],
  },
  automobile: {
    name: "Automobile",
    image: programAutomobile,
    overview:
      "The Automobile program provides comprehensive training in vehicle mechanics, diagnostics, and repair. Students learn to work on engines, transmissions, braking systems, and modern vehicle electronics, preparing them for careers in the rapidly evolving automotive industry.",
    modules: [
      "Engine Mechanics & Overhaul",
      "Automotive Electrical & Electronics",
      "Brake Systems & Suspension",
      "Transmission & Drivetrain Systems",
      "Auto Air Conditioning Systems",
      "Vehicle Diagnostics & Fault Finding",
      "Fuel Systems & Emission Control",
      "Welding & Fabrication for Auto Body",
    ],
    certification: "NVTI Certificate II in Auto Mechanics",
    careers: [
      "Auto Mechanic",
      "Automotive Electrician",
      "Vehicle Diagnostic Technician",
      "Auto AC Specialist",
      "Fleet Maintenance Technician",
      "Self-employed Garage Owner",
    ],
  },
  "catering-hospitality": {
    name: "Catering & Hospitality",
    image: programCatering,
    overview:
      "This program equips students with professional skills in food preparation, kitchen management, and hospitality services. From cooking and baking to front office operations and housekeeping, students are prepared for diverse roles in hotels, restaurants, and the broader hospitality industry.",
    modules: [
      "Professional Cooking & Baking",
      "Food & Beverage Service",
      "Front Office Operations",
      "Housekeeping & Facility Management",
      "Food Safety & Hygiene (HACCP)",
      "Menu Planning & Nutrition",
      "Customer Service Excellence",
      "Event Catering & Management",
    ],
    certification: "NVTI Certificate II in Catering & Hospitality",
    careers: [
      "Chef / Cook",
      "Pastry Chef / Baker",
      "Hotel Front Desk Officer",
      "Food & Beverage Supervisor",
      "Housekeeping Manager",
      "Event Caterer",
      "Restaurant Manager",
    ],
  },
  cosmetology: {
    name: "Cosmetology (Beauty & Haircare)",
    image: programCosmetology,
    overview:
      "The Cosmetology program trains students in professional hair styling, beauty treatments, and personal grooming services. Students develop expertise in modern techniques for hair care, skincare, manicure, pedicure, and makeup application, preparing them to work in salons or launch their own beauty businesses.",
    modules: [
      "Hair Cutting & Styling Techniques",
      "Hair Colouring & Chemical Treatments",
      "Braiding & Weaving",
      "Skincare & Facial Treatments",
      "Manicure & Pedicure",
      "Professional Makeup Application",
      "Salon Management & Customer Relations",
      "Health, Safety & Sanitation in Beauty",
    ],
    certification: "NVTI Certificate II in Cosmetology",
    careers: [
      "Professional Hair Stylist",
      "Beauty Therapist",
      "Makeup Artist",
      "Nail Technician",
      "Salon Owner / Manager",
      "Bridal Stylist",
    ],
  },
  "crane-operation": {
    name: "Crane Operation",
    image: programCrane,
    overview:
      "This specialized program trains students to safely and efficiently operate various types of cranes used in construction, shipping, and industrial settings. Students learn load calculations, rigging techniques, safety protocols, and equipment maintenance to meet industry standards.",
    modules: [
      "Types of Cranes & Their Applications",
      "Crane Safety Regulations & Standards",
      "Load Chart Interpretation & Calculations",
      "Rigging & Slinging Techniques",
      "Pre-Operation Inspection Procedures",
      "Practical Crane Operation (Mobile & Tower)",
      "Signal Communication & Teamwork",
      "Emergency Procedures & Hazard Management",
    ],
    certification: "Certified Crane Operator License",
    careers: [
      "Mobile Crane Operator",
      "Tower Crane Operator",
      "Construction Equipment Operator",
      "Port / Harbour Crane Operator",
      "Rigging Supervisor",
      "Heavy Equipment Logistics Coordinator",
    ],
  },
  "driving-licensing": {
    name: "Driving & Licensing",
    image: programDriving,
    overview:
      "The Driving & Licensing program offers professional driving instruction for individuals seeking to obtain or improve their driving skills. With options for regular weekday classes, weekend sessions, and polishing courses, the program prepares students for the DVLA licensing examination and safe driving on Ghana's roads.",
    modules: [
      "Ghana Road Traffic Regulations",
      "Vehicle Controls & Basic Manoeuvres",
      "Defensive Driving Techniques",
      "Highway & Urban Driving",
      "Night Driving & Adverse Conditions",
      "Parking & Reversing Skills",
      "DVLA Test Preparation",
      "Vehicle Basic Maintenance Awareness",
    ],
    certification: "DVLA Driver's License (Class B / C)",
    careers: [
      "Professional Driver",
      "Ride-Hailing / Taxi Driver",
      "Delivery & Logistics Driver",
      "Company / Corporate Driver",
      "Driving Instructor (with further training)",
    ],
  },
  "electrical-solar": {
    name: "Electrical Installation & Solar",
    image: programElectrical,
    overview:
      "This program covers domestic and industrial electrical installations, wiring systems, and solar energy technology. Students learn to design, install, and maintain electrical systems while also gaining expertise in solar panel installation and renewable energy solutions — skills in high demand across Ghana and beyond.",
    modules: [
      "Domestic Electrical Wiring & Installation",
      "Industrial Electrical Installation",
      "Electrical Safety & Regulations",
      "Circuit Design & Load Calculations",
      "Solar Panel Installation & Sizing",
      "Inverter & Battery Systems",
      "Home & Building Automation",
      "PLC & Industrial Automation (Advanced)",
    ],
    certification: "NVTI Certificate II in Electrical Installation; Solar Installation Certificate",
    careers: [
      "Electrician",
      "Solar Installation Technician",
      "Industrial Electrician",
      "Building Automation Technician",
      "Electrical Contractor",
      "Renewable Energy Consultant",
    ],
  },
  "forklift-logistics": {
    name: "ForkLift & Logistics",
    image: programForklift,
    overview:
      "The Forklift & Logistics program trains students in the safe operation of forklifts and other material-handling equipment used in warehouses, factories, and ports. Students also learn warehousing principles, inventory management, and logistics coordination to become well-rounded professionals in the supply chain industry.",
    modules: [
      "Types of Forklifts & Their Functions",
      "Forklift Safety & Regulations",
      "Pre-Operation Inspection & Maintenance",
      "Load Handling & Stacking Techniques",
      "Warehouse Layout & Storage Systems",
      "Inventory Management Basics",
      "Practical Forklift Driving (Indoor & Outdoor)",
      "Logistics & Supply Chain Fundamentals",
    ],
    certification: "Certified Forklift Operator License",
    careers: [
      "Forklift Operator",
      "Warehouse Associate / Supervisor",
      "Logistics Coordinator",
      "Inventory Controller",
      "Port / Dock Worker",
      "Supply Chain Assistant",
    ],
  },
  "it-graphic-design": {
    name: "IT & Graphic Design",
    image: programIT,
    overview:
      "This program combines information technology fundamentals with creative graphic design skills. Students learn computer operations, Microsoft Office proficiency, and digital design tools to create professional visual content for print and digital media. Graduates are prepared for careers in the growing digital economy.",
    modules: [
      "Computer Fundamentals & Operating Systems",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Introduction to Graphic Design Principles",
      "Adobe Photoshop & Illustrator",
      "CorelDRAW & Desktop Publishing",
      "Digital Marketing & Social Media Graphics",
      "Print Design (Flyers, Banners, Brochures)",
      "Portfolio Development & Freelancing",
    ],
    certification: "NVTI Certificate in ICT; Graphic Design Proficiency Certificate",
    careers: [
      "Graphic Designer",
      "Desktop Publisher",
      "Social Media Content Creator",
      "IT Support Technician",
      "Freelance Designer",
      "Brand Identity Designer",
    ],
  },
};
