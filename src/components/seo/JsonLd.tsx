import { CLINIC_DATA } from "@/constants/business";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PhysiotherapyClinic",
    "name": CLINIC_DATA.name,
    "description": "Nitya Physiotherapy provides the best physiotherapy clinic in Gwalior, Thatipur. Personalised musculoskeletal rehabilitation and home visit physiotherapy led by Dr. Hemant Singh PT (BPT).",
    "telephone": CLINIC_DATA.contact.phone,
    "email": CLINIC_DATA.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${CLINIC_DATA.location.line1}, ${CLINIC_DATA.location.line2}`,
      "addressLocality": CLINIC_DATA.location.area,
      "addressRegion": "Madhya Pradesh",
      "postalCode": CLINIC_DATA.location.pincode,
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Thatipur, Gwalior" },
      { "@type": "AdministrativeArea", "name": "Suresh Nagar, Gwalior" },
      { "@type": "City", "name": "Gwalior" }
    ],
    "medicalSpecialty": [
      "Physiotherapy",
      "Musculoskeletal",
      "SportsMedicine"
    ],
    "employee": {
      "@type": "Person",
      "name": CLINIC_DATA.practitioner.name,
      "jobTitle": "Physiotherapist",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Bachelor of Physiotherapy (BPT)"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}