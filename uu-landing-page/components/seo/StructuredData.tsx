const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UU株式会社",
  "url": "https://uu-growth.com",
  "logo": "https://uu-growth.com/logo.png",
  "description": "実行支援型グロースコンサルティング",
  "foundingDate": "2020",
  "founder": {
    "@type": "Person",
    "name": "柴田 吉史朗",
    "jobTitle": "実行支援型グロースコンサルタント",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "京都大学工学部"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@uu-growth.com"
  },
  "sameAs": [
    "https://twitter.com/uu_growth",
    "https://linkedin.com/company/uu-growth"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "Japan"
  },
  "offers": {
    "@type": "Service",
    "name": "グロースコンサルティング",
    "description": "実行支援型グロースコンサルティングサービス",
    "provider": {
      "@type": "Organization",
      "name": "UU株式会社"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Japan"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "スタートアップ企業、新規事業部門"
    }
  }
}

const serviceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "実行支援型グロースコンサルティング",
  "description": "勝てる構造作りと顧客理解から事業成長を最大化。週1-2日の併走から確実な成長を実現します。",
  "provider": {
    "@type": "Organization",
    "name": "UU株式会社",
    "url": "https://uu-growth.com"
  },
  "serviceType": "Business Consulting",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceRange": "月額100万円〜300万円",
    "priceCurrency": "JPY"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "スタートアップ企業"
  }
}

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
    </>
  )
}