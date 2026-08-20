import { CLINIC_DATA } from "@/constants/business";

export default function JsonLd() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://nityaphysiotherapy.com/#website",
        "name": "Nitya Physiotherapy Clinic",
        "alternateName": [
          "Nitya Physiotherapy",
          "Nitya Physiotherapy Clinic Gwalior",
          "nityaphysiotherapy.com"
        ],
        "url": "https://nityaphysiotherapy.com/",
        "publisher": {
          "@id": "https://nityaphysiotherapy.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://nityaphysiotherapy.com/#organization",
        "name": "Nitya Physiotherapy Clinic",
        "url": "https://nityaphysiotherapy.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nityaphysiotherapy.com/logo.png",
          "width": "1024",
          "height": "1024"
        },
        "image": "https://nityaphysiotherapy.com/logo.png"
      },
      {
        "@type": ["PhysiotherapyClinic", "LocalBusiness", "MedicalBusiness"],
        "@id": "https://nityaphysiotherapy.com/#clinic",
        "name": "Nitya Physiotherapy Clinic",
        "description": "Nitya Physiotherapy Clinic provides the best clinical physiotherapy & home visits in Gwalior, Thatipur. Personalised musculoskeletal rehabilitation led by Dr. Hemant Singh PT (BPT).",
        "url": "https://nityaphysiotherapy.com",
        "logo": "https://nityaphysiotherapy.com/logo.png",
        "image": [
          "https://nityaphysiotherapy.com/logo.png",
          "https://nityaphysiotherapy.com/images/dr-hemant-solo.jpg"
        ],
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
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}