// Reusable JSON-LD structured data builders.

const BASE_URL = "https://donboscoashaiman.org";
const ORG_NAME = "Don Bosco Training Institute, Ashaiman";

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: ORG_NAME,
  alternateName: "DBTI Ashaiman",
  url: BASE_URL,
  logo: `${BASE_URL}/favicon-32x32.png`,
  image: `${BASE_URL}/og-image.jpg`,
  slogan: "Learn a Trade, Earn a Living",
  description:
    "Salesian non-profit vocational training centre in Ashaiman, Ghana, offering job-oriented technical and trade programs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tema Community 22, off Afariwa–Akosombo Road",
    addressLocality: "Ashaiman",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  sameAs: ["https://www.facebook.com/DBTECH.Gh/"],
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ORG_NAME,
  url: BASE_URL,
};

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.path}`,
  })),
});

export const courseLd = (params: {
  name: string;
  description: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: params.name,
  description: params.description,
  url: `${BASE_URL}/programs/${params.slug}`,
  provider: {
    "@type": "EducationalOrganization",
    name: ORG_NAME,
    sameAs: BASE_URL,
  },
});
