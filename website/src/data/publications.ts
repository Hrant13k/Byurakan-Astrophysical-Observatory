import type { Locale } from "@/lib/i18n";
import { l, type LocalizedString } from "@/lib/i18n";

interface PublicationData {
  id: string;
  title: LocalizedString;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  abstract: LocalizedString;
  category: LocalizedString;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  abstract: string;
  category: string;
  categoryKey: string;
}

const categoryMap: Record<string, LocalizedString> = {
  "Stellar Physics": { en: "Stellar Physics", am: "Աստղային ֆիզիկա" },
  Extragalactic: { en: "Extragalactic", am: "Արտագալակտիկական" },
  Cosmology: { en: "Cosmology", am: "Տիեզաբանություն" },
  Instrumentation: { en: "Instrumentation", am: "Գործիքաշինություն" },
  "Solar Physics": { en: "Solar Physics", am: "Արեգակի ֆիզիկա" },
  Surveys: { en: "Surveys", am: "Համալսարաններ" },
};

const publicationCategoriesData: LocalizedString[] = [
  { en: "All", am: "Բոլորը" },
  categoryMap["Stellar Physics"],
  categoryMap["Extragalactic"],
  categoryMap["Cosmology"],
  categoryMap["Instrumentation"],
  categoryMap["Solar Physics"],
  categoryMap["Surveys"],
];

const data: PublicationData[] = [
  {
    id: "pub-001",
    title: {
      en: "Spectroscopic Survey of Emission-Line Stars in the Northern Milky Way: New Discoveries from the DFBS",
      am: "Էմիսիոն գծով աստղերի սպեկտրոսկոպիկ համալսարան հյուսիսային Ծիր Կաթինում՝ նոր հայտնագործություններ DFBS-ից",
    },
    authors: ["A. M. Mickaelian", "H. V. Harutyunyan", "E. H. Nikoghosyan"],
    journal: "Astronomy & Astrophysics",
    year: 2025,
    volume: "683",
    pages: "A45",
    doi: "10.1051/0004-6361/202449123",
    abstract: {
      en: "We present results from a new spectroscopic survey of emission-line stars identified in the Digitized First Byurakan Survey. Over 1,200 new emission-line objects were confirmed through follow-up spectroscopy with the 2.6m telescope.",
      am: "Ներկայացնում ենք Առաջին Բյուրականի թվայնացված համալսարանում բացահայտված էմիսիոն գծով աստղերի նոր սպեկտրոսկոպիկ համալսարանի արդյունքները։ 2.6մ հեռադիտակի միջոցով իրականացված հետևողական սպեկտրոսկոպիայով հաստատվել են ավելի քան 1,200 նոր էմիսիոն գծով օբյեկտ:",
    },
    category: categoryMap["Surveys"],
  },
  {
    id: "pub-002",
    title: {
      en: "Ultra-Compact Markarian Galaxies: A New Population of High Surface Brightness Objects",
      am: "Ուլտրակոմպակտ Մարկարյանի գալակտիկաներ՝ բարձր մակերևույթի պայծառության օբյեկտների նոր պոպուլյացիա",
    },
    authors: ["S. V. Farmanyan", "A. M. Mickaelian", "V. H. Chavushyan"],
    journal: "Monthly Notices of the Royal Astronomical Society",
    year: 2025,
    volume: "528",
    pages: "3421-3438",
    doi: "10.1093/mnras/stae2345",
    abstract: {
      en: "We identify and characterize a new class of ultra-compact galaxies from the Markarian catalog. These objects display extreme surface brightness and compact morphology suggesting a transitional evolutionary phase.",
      am: "Հայտնաբերում և բնութագրում ենք Մարկարյանի ցուցակում ուլտրակոմպակտ գալակտիկաների նոր դաս։ Այս օբյեկտները ցուցաբերում են չափազանց բարձր մակերևույթի պայծառություն և կոմպակտ մորֆոլոգիա, ինչը հուշում է անցումային էվոլյուցիոն փուլի մասին:",
    },
    category: categoryMap["Extragalactic"],
  },
  {
    id: "pub-003",
    title: {
      en: "Long-Term Variability of T Tauri Stars in the Cygnus Star-Forming Region",
      am: "T Տաուրի տիպի աստղերի երկարաժամկետ փոփոխականությունը Կարապ համաստեղության աստղածնող շրջանում",
    },
    authors: ["T. Yu. Magakian", "H. V. Harutyunyan"],
    journal: "The Astrophysical Journal",
    year: 2025,
    volume: "961",
    pages: "L15",
    doi: "10.3847/2041-8213/ad1234",
    abstract: {
      en: "We present a 15-year photometric monitoring campaign of T Tauri stars in the Cygnus OB2 association, revealing complex variability patterns linked to disk accretion and stellar magnetic activity.",
      am: "Ներկայացնում ենք 15-ամյա ֆոտոմետրիկ մոնիտորինգի արշավի արդյունքները Կարապ OB2 ասոցիացիայում T Տաուրի աստղերի վերաբերյալ՝ բացահայտելով սկավառակային ակրեցիայի և աստղային մագնիսական ակտիվության հետ կապված բարդ փոփոխականության օրինաչափություններ:",
    },
    category: categoryMap["Stellar Physics"],
  },
  {
    id: "pub-004",
    title: {
      en: "Dark Energy Constraints from Cosmic Void Statistics in the SDSS Footprint",
      am: "Մութ էներգիայի սահմանափակումներ՝ SDSS-ի տարածքում տիեզերական դատարկությունների վիճակագրությունից",
    },
    authors: ["G. S. Harutyunyan", "A. M. Mickaelian"],
    journal: "Physical Review D",
    year: 2024,
    volume: "110",
    pages: "023512",
    doi: "10.1103/PhysRevD.110.023512",
    abstract: {
      en: "Using void statistics from the Sloan Digital Sky Survey, we derive new constraints on dark energy parameters, finding results consistent with the cosmological constant but with improved precision over previous void-based analyses.",
      am: "Օգտագործելով Sloan թվային երկնքի համալսարանի դատարկությունների վիճակագրությունը՝ նոր սահմանափակումներ ենք բերում մութ էներգիայի պարամետրերի վերաբերյալ. արդյունքները համապատասխանում են տիեզաբանական հաստատունին, սակայն ավելի ճշգրիտ են, քան նախկին դատարկությունների վրա հիմնված վերլուծությունները:",
    },
    category: categoryMap["Cosmology"],
  },
  {
    id: "pub-005",
    title: {
      en: "New Herbig-Haro Objects in the L1641 Cloud: Evidence for Episodic Jet Activity",
      am: "Նոր Հերբիգ-Հարո օբյեկտներ L1641 ամպում՝ էպիզոդիկ ջրվեժային ակտիվության վկայություն",
    },
    authors: ["T. Yu. Magakian", "E. H. Nikoghosyan", "H. V. Harutyunyan"],
    journal: "Astronomy & Astrophysics",
    year: 2024,
    volume: "679",
    pages: "A112",
    doi: "10.1051/0004-6361/202348765",
    abstract: {
      en: "We report the discovery of 14 new Herbig-Haro objects in the L1641 molecular cloud in Orion. The spatial distribution and proper motions suggest episodic jet activity from several young stellar objects.",
      am: "Հաղորդում ենք Որսորդ համաստեղության L1641 մոլեկուլային ամպում 14 նոր Հերբիգ-Հարո օբյեկտների հայտնաբերման մասին։ Տարածական բաշխումը և սեփական շարժումները վկայում են մի շարք երիտասարդ աստղային օբյեկտների էպիզոդիկ ջրվեժային ակտիվության մասին:",
    },
    category: categoryMap["Stellar Physics"],
  },
  {
    id: "pub-006",
    title: {
      en: "The First Byurakan Survey Revisited: A Machine Learning Approach to Object Classification",
      am: "Առաջին Բյուրականի համալսարանը վերանայված՝ օբյեկտների դասակարգման մեքենայական ուսուցման մոտեցում",
    },
    authors: ["A. M. Mickaelian", "S. V. Farmanyan"],
    journal: "Astronomical Journal",
    year: 2024,
    volume: "167",
    pages: "89",
    doi: "10.3847/1538-3881/ad5678",
    abstract: {
      en: "We apply modern machine learning techniques to reclassify objects in the Digitized First Byurakan Survey, achieving 95% accuracy in separating stars, galaxies, and QSOs, and discovering 230 previously misclassified objects.",
      am: "Կիրառում ենք մեքենայական ուսուցման ժամանակակից մեթոդներ՝ Առաջին Բյուրականի թվայնացված համալսարանի օբյեկտները վերադասակարգելու համար՝ հասնելով 95% ճշտության աստղերի, գալակտիկաների և քվազարների տարանջատման մեջ և հայտնաբերելով 230 նախկինում սխալ դասակարգված օբյեկտ:",
    },
    category: categoryMap["Surveys"],
  },
  {
    id: "pub-007",
    title: {
      en: "Solar Activity Cycle 25: Updated Predictions from Byurakan Solar Observations",
      am: "Արեգակնային ակտիվության 25-րդ ցիկլ՝ թարմացված կանխատեսումներ Բյուրականի արեգակնային դիտարկումներից",
    },
    authors: ["H. O. Pikichyan"],
    journal: "Solar Physics",
    year: 2024,
    volume: "299",
    pages: "45",
    doi: "10.1007/s11207-024-02345-6",
    abstract: {
      en: "Based on updated solar observations from Byurakan Observatory, we refine predictions for Solar Cycle 25, suggesting a peak amplitude 15% higher than initial forecasts with maximum expected in late 2025.",
      am: "Հիմնվելով Բյուրականի աստղադիտարանի թարմացված արեգակնային դիտարկումների վրա՝ ճշգրտում ենք 25-րդ արեգակնային ցիկլի կանխատեսումները՝ ցույց տալով, որ գագաթնակետի ամպլիտուդը 15%-ով բարձր է սկզբնական կանխատեսումներից, իսկ առավելագույնն ակնկալվում է 2025 թ. վերջին:",
    },
    category: categoryMap["Solar Physics"],
  },
  {
    id: "pub-008",
    title: {
      en: "Performance Characterization of the New CCD System on the BAO 2.6m Telescope",
      am: "ԲԱԹ 2.6մ հեռադիտակի նոր CCD համակարգի աշխատանքային բնութագրում",
    },
    authors: ["H. V. Harutyunyan", "A. M. Mickaelian"],
    journal: "Publications of the Astronomical Society of the Pacific",
    year: 2024,
    volume: "136",
    pages: "015001",
    doi: "10.1088/1538-3873/ad9012",
    abstract: {
      en: "We present the commissioning results and performance characterization of the newly installed CCD imaging system on the 2.6m telescope at Byurakan Observatory. The system achieves a limiting magnitude of 24.5 in the R-band.",
      am: "Ներկայացնում ենք Բյուրականի աստղադիտարանի 2.6մ հեռադիտակին նորակառույց CCD պատկերահանման համակարգի գործարկման արդյունքները և աշխատանքային բնութագրերը։ Համակարգը հասնում է 24.5 սահմանափակ աստղային մեծության R-տիրույթում:",
    },
    category: categoryMap["Instrumentation"],
  },
];

export function getPublications(locale: Locale): Publication[] {
  return data.map((pub) => ({
    id: pub.id,
    title: l(pub.title, locale),
    authors: pub.authors,
    journal: pub.journal,
    year: pub.year,
    volume: pub.volume,
    pages: pub.pages,
    doi: pub.doi,
    abstract: l(pub.abstract, locale),
    category: l(pub.category, locale),
    categoryKey: pub.category.en,
  }));
}

export function getPublicationCategories(locale: Locale): string[] {
  return publicationCategoriesData.map((c) => l(c, locale));
}

// Raw (English) category tokens — used for filter matching
export const publicationCategoryKeys = [
  "All",
  "Stellar Physics",
  "Extragalactic",
  "Cosmology",
  "Instrumentation",
  "Solar Physics",
  "Surveys",
] as const;
