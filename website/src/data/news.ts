import type { Locale } from "@/lib/i18n";
import { l, type LocalizedString } from "@/lib/i18n";

interface NewsItemData {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  content: LocalizedString;
  body: LocalizedString[];
  highlights?: LocalizedString[];
  quote?: { text: LocalizedString; attribution: LocalizedString };
  tags?: string[];
  readTimeMin?: number;
  date: string;
  category: LocalizedString;
  image: string;
  author: LocalizedString;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  body: string[];
  highlights: string[];
  quote?: { text: string; attribution: string };
  tags: string[];
  readTimeMin: number;
  date: string;
  category: string;
  image: string;
  author: string;
}

interface NewsCategoryData {
  label: LocalizedString;
}

const newsCategoryData: NewsCategoryData[] = [
  { label: { en: "All", am: "Բոլորը" } },
  { label: { en: "Discovery", am: "Հայտնագործություն" } },
  { label: { en: "Observatory", am: "Աստղադիտարան" } },
  { label: { en: "Collaboration", am: "Համագործակցություն" } },
  { label: { en: "Award", am: "Մրցանակ" } },
  { label: { en: "Event", am: "Միջոցառում" } },
];

const categoryMap: Record<string, LocalizedString> = {
  Discovery: { en: "Discovery", am: "Հայտնագործություն" },
  Observatory: { en: "Observatory", am: "Աստղադիտարան" },
  Collaboration: { en: "Collaboration", am: "Համագործակցություն" },
  Award: { en: "Award", am: "Մրցանակ" },
  Event: { en: "Event", am: "Միջոցառում" },
};

const data: NewsItemData[] = [
  {
    id: "new-spectroscopic-survey",
    title: {
      en: "BAO Launches New Spectroscopic Survey of Northern Sky",
      am: "ԲԱԹ-ը սկսում է հյուսիսային երկնքի նոր սպեկտրոսկոպիկ համալսարան",
    },
    excerpt: {
      en: "The observatory begins a comprehensive spectroscopic survey using upgraded instrumentation on the 2.6m telescope, targeting over 10,000 objects.",
      am: "Աստղադիտարանը սկսում է համապարփակ սպեկտրոսկոպիկ համալսարան՝ օգտագործելով 2.6մ հեռադիտակի արդիականացված գործիքները՝ թիրախավորելով ավելի քան 10,000 օբյեկտ։",
    },
    content: {
      en: "Byurakan Astrophysical Observatory has commenced a major new spectroscopic survey of the northern sky using recently upgraded instrumentation on its 2.6m telescope. The survey will target over 10,000 stellar and extragalactic objects over the next three years, building on the legacy of the historic First and Second Byurakan Surveys.",
      am: "Բյուրականի աստղաֆիզիկական աստղադիտարանը սկսել է հյուսիսային երկնքի նոր խոշոր սպեկտրոսկոպիկ համալսարան՝ օգտագործելով իր 2.6մ հեռադիտակի վերջերս արդիականացված գործիքները։ Համալսարանը կթիրախավորի ավելի քան 10,000 աստղային և արտագալակտիկական օբյեկտներ հաջորդ երեք տարվա ընթացքում՝ հիմնվելով պատմական Առաջին և Երկրորդ Բյուրականի համալսարանների ժառանգության վրա։",
    },
    body: [
      {
        en: "Byurakan Astrophysical Observatory has commenced a major new spectroscopic survey of the northern sky using recently upgraded instrumentation on its 2.6m telescope. The survey will target over 10,000 stellar and extragalactic objects over the next three years, building on the legacy of the historic First and Second Byurakan Surveys.",
        am: "Բյուրականի աստղաֆիզիկական աստղադիտարանը սկսել է հյուսիսային երկնքի նոր խոշոր սպեկտրոսկոպիկ համալսարան՝ օգտագործելով իր 2.6մ հեռադիտակի վերջերս արդիականացված գործիքները։ Համալսարանը կթիրախավորի ավելի քան 10,000 աստղային և արտագալակտիկական օբյեկտներ հաջորդ երեք տարվա ընթացքում։",
      },
      {
        en: "The program focuses on three science pillars: emission-line stars in the Milky Way disk, candidate AGN identified from cross-matching DFBS with WISE and Gaia, and compact galaxies in the Markarian catalog that remain unclassified. Observations are scheduled in roughly 90 bright and grey nights per year.",
        am: "Ծրագիրը կենտրոնանում է երեք գիտական սյուների վրա՝ Ծիր Կաթինի սկավառակում էմիսիոն գծով աստղեր, AGN թեկնածուներ, որոնք բացահայտվել են DFBS-ի՝ WISE-ի և Gaia-ի հետ խաչաձև համապատասխանեցման միջոցով, և դասակարգման չենթարկված կոմպակտ գալակտիկաներ Մարկարյանի կատալոգից։ Դիտումները նախատեսված են տարեկան մոտ 90 պայծառ և մոխրագույն գիշերների ընթացքում։",
      },
      {
        en: "Data products will be released to the community through the Armenian Virtual Observatory in coordination with the International Virtual Observatory Alliance. A first public data release is expected in late 2026.",
        am: "Տվյալները հանրությանը մատչելի կդարձվեն Հայկական վիրտուալ աստղադիտարանի միջոցով՝ համակարգված Միջազգային վիրտուալ աստղադիտարանների դաշինքի հետ։ Առաջին հրապարակային տվյալների հրապարակումն ակնկալվում է 2026 թ. վերջին։",
      },
    ],
    highlights: [
      { en: "10,000+ stellar and extragalactic targets over three years", am: "10,000+ աստղային և արտագալակտիկական թիրախ երեք տարվա ընթացքում" },
      { en: "Builds directly on the DFBS plate archive", am: "Անմիջական շարունակությունն է DFBS թիթեղների արխիվի" },
      { en: "First public data release planned for late 2026", am: "Առաջին հրապարակային տվյալների հրապարակումը՝ 2026 թ. վերջին" },
    ],
    tags: ["Spectroscopy", "DFBS", "Survey", "2.6m Telescope"],
    readTimeMin: 3,
    date: "2025-12-15",
    category: categoryMap["Observatory"],
    image: "/images/telescope1.jpg",
    author: { en: "BAO Press Office", am: "ԲԱԹ մամուլի ծառայություն" },
  },
  {
    id: "markarian-galaxy-discovery",
    title: {
      en: "New Class of Ultra-Compact Markarian Galaxies Identified",
      am: "Հայտնաբերվեց ուլտրակոմպակտ Մարկարյանի գալակտիկաների նոր դաս",
    },
    excerpt: {
      en: "Researchers identify a previously unknown class of ultra-compact galaxies in the Markarian catalog, shedding new light on galaxy formation.",
      am: "Հետազոտողները հայտնաբերել են ուլտրակոմպակտ գալակտիկաների նախկինում անհայտ դաս Մարկարյանի ցուցակում՝ նոր լույս սփռելով գալակտիկաների ձևավորման վրա։",
    },
    content: {
      en: "A team of researchers from BAO has identified a new class of ultra-compact galaxies within the Markarian catalog. These objects, characterized by extremely high surface brightness and compact morphology, may represent a transitional phase in galaxy evolution previously unrecognized in the literature.",
      am: "ԲԱԹ-ի հետազոտողների թիմը հայտնաբերել է ուլտրակոմպակտ գալակտիկաների նոր դաս Մարկարյանի ցուցակում։ Այս օբյեկտները, որոնք բնորոշվում են չափազանց բարձր մակերևույթի պայծառությամբ և կոմպակտ մորֆոլոգիայով, կարող են ներկայացնել գալակտիկաների էվոլուցիայի անցումային փուլ։",
    },
    body: [
      {
        en: "A team of researchers from BAO has identified a previously unrecognized class of ultra-compact galaxies within the Markarian catalog. The objects, characterized by extremely high surface brightness and compact morphology, may represent a transitional evolutionary phase between starburst galaxies and quiescent ellipticals.",
        am: "ԲԱԹ-ի հետազոտողների թիմը հայտնաբերել է ուլտրակոմպակտ գալակտիկաների նախկինում չդասակարգված նոր դաս Մարկարյանի ցուցակում։ Օբյեկտները, որոնք բնորոշվում են բարձր մակերևույթի պայծառությամբ և կոմպակտ մորֆոլոգիայով, կարող են ներկայացնել էվոլյուցիոն անցումային փուլ՝ աստղածնող և հանգիստ էլիպսաձև գալակտիկաների միջև։",
      },
      {
        en: "The discovery emerged from spectroscopic follow-up of 1,200 Markarian objects. Out of these, 47 showed the distinctive combination of compact size (< 1 kpc effective radius), high central density, and blue continua that defines the new subclass.",
        am: "Հայտնագործությունը ստացվել է 1,200 Մարկարյանի օբյեկտների սպեկտրոսկոպիկ հետևողական դիտումներից։ Դրանցից 47-ը ցուցաբերեցին կոմպակտ չափերի (< 1 կպկ արդյունավետ շառավիղ), բարձր կենտրոնական խտության և կապույտ շարունակականների այն հատուկ համադրությունը, որը սահմանում է նոր ենթադասը։",
      },
      {
        en: "Follow-up observations with the Nordic Optical Telescope and Hubble archival imaging are planned to confirm the population's evolutionary context.",
        am: "Հյուսիսային օպտիկական աստղադիտակի հետ հետագա դիտումները և Hubble-ի արխիվային պատկերները պլանավորվում են՝ հաստատելու համար այս պոպուլյացիայի էվոլյուցիոն համատեքստը։",
      },
    ],
    highlights: [
      { en: "47 galaxies meet the new subclass criteria", am: "47 գալակտիկա համապատասխանում է նոր ենթադասի չափանիշներին" },
      { en: "Effective radii < 1 kpc, extreme surface brightness", am: "Արդյունավետ շառավիղ < 1 կպկ, չափազանց բարձր մակերևույթի պայծառություն" },
      { en: "Published in MNRAS 528, 3421", am: "Հրապարակված է MNRAS 528, 3421" },
    ],
    quote: {
      text: {
        en: "These objects may be the missing link we've been looking for in the starburst-to-elliptical pathway.",
        am: "Այս օբյեկտները կարող են լինել այն բացակայող օղակը, որը մենք որոնել ենք աստղածնողից էլիպսաձև գալակտիկա տանող ուղու վրա։",
      },
      attribution: { en: "Dr. Sona Farmanyan, lead author", am: "Դ-ր Սոնա Ֆարմանյան, գլխավոր հեղինակ" },
    },
    tags: ["Markarian", "Galaxies", "Extragalactic"],
    readTimeMin: 4,
    date: "2025-11-28",
    category: categoryMap["Discovery"],
    image: "/images/background.jpg",
    author: { en: "Dr. Sona Farmanyan", am: "Դ-ր Սոնա Ֆարմանյան" },
  },
  {
    id: "iau-collaboration",
    title: {
      en: "BAO Signs New Collaboration Agreement with ESO",
      am: "ԲԱԹ-ը ստորագրեց նոր համագործակցության պայմանագիր ESO-ի հետ",
    },
    excerpt: {
      en: "A landmark agreement with the European Southern Observatory opens new observational opportunities for Armenian astronomers.",
      am: "Եվրոպական Հարավային աստղադիտարանի հետ կնքված պայմանագիրը նոր դիտարկման հնարավորություններ է բացում հայ աստղագետների համար։",
    },
    content: {
      en: "Byurakan Astrophysical Observatory has signed a new collaboration agreement with the European Southern Observatory (ESO), enabling Armenian astronomers to apply for observing time on ESO's world-class facilities in Chile. This partnership marks a significant milestone in international astronomical cooperation.",
      am: "Բյուրականի աստղաֆիզիկական աստղադիտարանը ստորագրել է նոր համագործակցության պայմանագիր Եվրոպական Հարավային աստղադիտարանի (ESO) հետ՝ հնարավորություն տալով հայ աստղագետներին դիմելու ESO-ի Չիլիում գտնվող համաշխարհային մակարդակի հաստատություններում դիտարկման ժամանակ ստանալու։",
    },
    body: [
      {
        en: "Byurakan Astrophysical Observatory has signed a new cooperation agreement with the European Southern Observatory (ESO). Under the agreement, Armenian astronomers will be able to apply for observing time on ESO's flagship Very Large Telescope array and on the incoming Extremely Large Telescope (ELT) through a dedicated access route.",
        am: "Բյուրականի աստղաֆիզիկական աստղադիտարանը ստորագրել է նոր համագործակցության պայմանագիր Եվրոպական Հարավային աստղադիտարանի (ESO) հետ։ Պայմանագրի շրջանակներում հայ աստղագետները հնարավորություն կունենան դիմելու դիտարկման ժամանակի՝ ESO-ի Very Large Telescope զույգի և կառուցվող Extremely Large Telescope-ի համար՝ առանձին մուտքի ուղիով։",
      },
      {
        en: "The agreement also funds two two-year postdoctoral exchanges per year and joint graduate training at the Paranal Observatory. The first exchange cohort is expected to start in September 2026.",
        am: "Պայմանագիրը նաև ֆինանսավորում է տարեկան երկու երկտարյա հետդոկտորական փոխանակումներ և համատեղ ասպիրանտական վերապատրաստումներ Պարանալ աստղադիտարանում։ Առաջին փոխանակման խումբը ակնկալվում է սկսել 2026 թ. սեպտեմբերին։",
      },
    ],
    highlights: [
      { en: "Dedicated ESO VLT and ELT access for Armenian astronomers", am: "Հատուկ մուտք ESO VLT-ին և ELT-ին հայ աստղագետների համար" },
      { en: "Two annual postdoctoral exchanges funded through 2030", am: "Երկու տարեկան հետդոկտորական փոխանակումներ՝ ֆինանսավորված մինչև 2030 թ." },
      { en: "Joint training program at Paranal Observatory", am: "Համատեղ վերապատրաստման ծրագիր Պարանալ աստղադիտարանում" },
    ],
    tags: ["ESO", "International", "Partnership"],
    readTimeMin: 3,
    date: "2025-10-20",
    category: categoryMap["Collaboration"],
    image: "/images/img5.jpg",
    author: { en: "BAO Press Office", am: "ԲԱԹ մամուլի ծառայություն" },
  },
  {
    id: "summer-school-2025",
    title: {
      en: "12th Byurakan International Summer School Announced",
      am: "Հայտարարվեց 12-րդ Բյուրականի միջազգային ամառային դպրոցը",
    },
    excerpt: {
      en: "The renowned summer school returns with focus on data science in astronomy, welcoming students from 20+ countries.",
      am: "Հանրահայտ ամառային դպրոցը վերադառնում է՝ կենտրոնանալով աստղագիտության մեջ տվյալների գիտության վրա՝ ընդունելով 20+ երկրների ուսանողների։",
    },
    content: {
      en: "The 12th Byurakan International Summer School (BISS) has been announced for September 2025, focusing on data science applications in modern astronomy. The two-week program will welcome graduate students and early-career researchers from over 20 countries.",
      am: "12-րդ Բյուրականի միջազգային ամառային դպրոցը (BISS) հայտարարվեց 2025թ. սեպտեմբերին՝ կենտրոնանալով ժամանակակից աստղագիտության մեջ տվյալների գիտության կիրառման վրա։",
    },
    body: [
      {
        en: "The 12th Byurakan International Summer School (BISS) has been officially announced for 2025. The two-week program will take place at the observatory campus in September, with a curriculum built around data science applications in modern astronomy.",
        am: "Պաշտոնապես հայտարարվեց 12-րդ Բյուրականի միջազգային ամառային դպրոցը (BISS)՝ 2025 թվականի համար։ Երկշաբաթյա ծրագիրը կանցկացվի աստղադիտարանի տարածքում սեպտեմբերին՝ ներառելով ժամանակակից աստղագիտության մեջ տվյալների գիտության կիրառությունների շուրջ կառուցված դասընթացներ։",
      },
      {
        en: "Lecturers this year include faculty from Harvard-CfA, ESO, Heidelberg, and the Vatican Observatory. Topics span time-domain astronomy, Bayesian inference for survey data, machine-learning classification, and virtual observatory tooling.",
        am: "Այս տարվա դասախոսների շարքում են Harvard-CfA-ի, ESO-ի, Հայդելբերգի և Վատիկանի աստղադիտարանի դասախոսները։ Թեմաները ներառում են ժամանակի տիրույթի աստղագիտություն, բայեսյան եզրակացություններ համալսարանական տվյալների համար, մեքենայական ուսուցման դասակարգումներ և վիրտուալ աստղադիտարանի գործիքներ։",
      },
      {
        en: "Applications close on June 30. Limited travel support is available for participants from Eastern European and CIS countries.",
        am: "Դիմումներն ընդունվում են մինչև հունիսի 30-ը։ Արևելյան Եվրոպայի և ԱՊՀ երկրների մասնակիցների համար տրամադրվում է սահմանափակ ճամփորդական աջակցություն։",
      },
    ],
    highlights: [
      { en: "Two-week intensive, on-site at Byurakan", am: "Երկշաբաթյա ինտենսիվ, Բյուրականում" },
      { en: "Focus: data science & time-domain astronomy", am: "Կենտրոն՝ տվյալների գիտություն և ժամանակի տիրույթի աստղագիտություն" },
      { en: "Lecturers from Harvard-CfA, ESO, Heidelberg", am: "Դասախոսներ Harvard-CfA-ից, ESO-ից, Հայդելբերգից" },
      { en: "Application deadline: June 30", am: "Դիմման վերջնաժամկետ՝ հունիսի 30" },
    ],
    tags: ["BISS", "Summer School", "Education", "Data Science"],
    readTimeMin: 3,
    date: "2025-09-05",
    category: categoryMap["Event"],
    image: "/images/telescope2.webp",
    author: { en: "Education Department", am: "Կրթական բաժին" },
  },
  {
    id: "telescope-upgrade",
    title: {
      en: "2.6m Telescope Receives Major CCD Camera Upgrade",
      am: "2.6մ հեռադիտակը ստացել է CCD տեսախցիկի խոշոր արդիականացում",
    },
    excerpt: {
      en: "State-of-the-art CCD imaging system installed on the observatory's primary telescope, dramatically improving sensitivity.",
      am: "Աստղադիտարանի հիմնական հեռադիտակի վրա տեղադրվել է արդիական CCD պատկերահանման համակարգ՝ զգալիորեն բարձրացնելով զգայնությունը։",
    },
    content: {
      en: "The observatory's flagship 2.6m telescope has received a major upgrade with the installation of a new state-of-the-art CCD camera system. The new detector offers significantly improved quantum efficiency, wider field of view, and lower read noise compared to the previous system.",
      am: "Աստղադիտարանի առաջատար 2.6մ հեռադիտակը ստացել է խոշոր արդիականացում՝ նոր արդիական CCD տեսախցիկի համակարգի տեղադրմամբ։ Նոր դետեկտորն առաջարկում է զգալիորեն բարձրացված քվանտային արդյունավետություն, ավելի լայն տեսադաշտ և ավելի ցածր ընթերցման աղմուկ։",
    },
    body: [
      {
        en: "The observatory's flagship 2.6m telescope has received a major upgrade with the installation of a new state-of-the-art CCD camera system. The new detector offers significantly improved quantum efficiency, wider field of view, and lower read noise compared to the previous system.",
        am: "Աստղադիտարանի առաջատար 2.6մ հեռադիտակը ստացել է խոշոր արդիականացում՝ նոր արդիական CCD տեսախցիկի համակարգի տեղադրմամբ։",
      },
      {
        en: "Commissioning measurements yield a limiting magnitude of 24.5 in the R-band with a 30-minute exposure, roughly 1.2 magnitudes deeper than the retired camera in the same configuration.",
        am: "Գործարկման չափումները ցույց են տալիս 24.5 սահմանափակ աստղային մեծություն R-տիրույթում 30 րոպե էքսպոզիցիայով՝ մոտ 1.2 աստղային մեծությամբ ավելի խորը, քան նախորդ տեսախցիկը նույն դիրքորոշման պայմաններում։",
      },
      {
        en: "The upgrade directly enables three forthcoming programs: a deep galaxy survey, Herbig-Haro jet monitoring, and rapid transient follow-up in coordination with ZTF alerts.",
        am: "Արդիականացումն ուղղակի հնարավորություն է ընձեռում երեք առաջիկա ծրագրերի իրականացմանը՝ խորը գալակտիկական համալսարան, Հերբիգ-Հարո ջրվեժների մոնիտորինգ և արագ անցողիկ օբյեկտների հետևողական դիտարկում՝ ZTF-ի զգուշացումների հետ համակարգված։",
      },
    ],
    highlights: [
      { en: "Limiting R = 24.5 in a 30-minute exposure", am: "Սահմանափակ R = 24.5՝ 30 րոպե էքսպոզիցիայում" },
      { en: "Wider field of view with lower read noise", am: "Ավելի լայն տեսադաշտ՝ ավելի ցածր ընթերցման աղմուկով" },
      { en: "Enables ZTF-coordinated transient follow-up", am: "Հնարավորություն է տալիս ZTF-ի հետ համակարգված անցողիկ հետևողական դիտարկումների" },
    ],
    tags: ["Instrumentation", "CCD", "2.6m Telescope"],
    readTimeMin: 3,
    date: "2025-08-12",
    category: categoryMap["Observatory"],
    image: "/images/telescope1.jpg",
    author: { en: "Instrumentation Team", am: "Գործիքաշինության թիմ" },
  },
  {
    id: "young-researcher-award",
    title: {
      en: "BAO Researcher Receives International Young Astronomer Prize",
      am: "ԲԱԹ-ի հետազոտողը ստացել է միջազգային երիտասարդ աստղագետի մրցանակ",
    },
    excerpt: {
      en: "Dr. Gohar Harutyunyan recognized for outstanding contributions to cosmological research at international symposium.",
      am: "Դ-ր Գոհար Հարությունյանն արժանացել է միջազգային սիմպոզիումում տիեզաբանական հետազոտությունների բնագավառում նշանակալի ներդրման համար։",
    },
    content: {
      en: "Dr. Gohar Harutyunyan of Byurakan Astrophysical Observatory has been awarded the International Young Astronomer Prize for her outstanding contributions to the study of large-scale cosmic structure and dark energy. The award was presented at the annual IAU symposium.",
      am: "Բյուրականի աստղաֆիզիկական աստղադիտարանի Դ-ր Գոհար Հարությունյանն արժանացել է միջազգային երիտասարդ աստղագետի մրցանակի՝ տիեզամասշտաբ տիեզերական կառուցվածքի և մութ էներգիայի ուսումնասիրության բնագավառում ունեցած ներդրման համար։",
    },
    body: [
      {
        en: "Dr. Gohar Harutyunyan of Byurakan Astrophysical Observatory has been awarded the International Young Astronomer Prize at the 2025 IAU symposium in Prague. The prize recognizes her 2024 work on void-based constraints on dark energy.",
        am: "Բյուրականի Դ-ր Գոհար Հարությունյանն արժանացել է միջազգային երիտասարդ աստղագետի մրցանակի՝ 2025թ. ԱՄՄ սիմպոզիումում՝ Պրահայում։ Մրցանակը նրան շնորհվել է 2024 թ. մութ էներգիայի վերաբերյալ դատարկությունների վրա հիմնված սահմանափակումների աշխատանքի համար։",
      },
      {
        en: "The prize carries a CHF 15,000 grant and six months of observing time on the Very Large Telescope, which Dr. Harutyunyan intends to use for deep imaging of void-aligned galaxy samples.",
        am: "Մրցանակը ներառում է 15,000 CHF դրամաշնորհ և վեց ամիս դիտարկման ժամանակ Very Large Telescope-ի վրա, որը Դ-ր Հարությունյանը մտադիր է օգտագործել դատարկությունների հետ համահունչ գալակտիկաների նմուշների խորը պատկերահանման համար։",
      },
    ],
    highlights: [
      { en: "First Armenian to win the IAU Young Astronomer Prize since 2007", am: "2007 թ. ի վեր առաջին հայ դափնեկիրը ԱՄՄ երիտասարդ աստղագետի մրցանակի" },
      { en: "CHF 15,000 grant and six months of VLT time", am: "15,000 CHF դրամաշնորհ և վեց ամիս VLT ժամանակ" },
      { en: "Recognition for 2024 void-based dark-energy paper", am: "Ճանաչում՝ 2024 թ. մութ էներգիայի վերաբերյալ հոդվածի համար" },
    ],
    tags: ["Award", "Cosmology", "Dark Energy"],
    readTimeMin: 2,
    date: "2025-07-18",
    category: categoryMap["Award"],
    image: "/images/img4.jpg",
    author: { en: "BAO Press Office", am: "ԲԱԹ մամուլի ծառայություն" },
  },
];

export function getNewsCategories(locale: Locale): string[] {
  return newsCategoryData.map((c) => l(c.label, locale));
}

export function getNews(locale: Locale): NewsItem[] {
  return data.map((item) => ({
    id: item.id,
    title: l(item.title, locale),
    excerpt: l(item.excerpt, locale),
    content: l(item.content, locale),
    body: item.body.map((p) => l(p, locale)),
    highlights: (item.highlights ?? []).map((h) => l(h, locale)),
    quote: item.quote
      ? {
          text: l(item.quote.text, locale),
          attribution: l(item.quote.attribution, locale),
        }
      : undefined,
    tags: item.tags ?? [],
    readTimeMin: item.readTimeMin ?? 3,
    date: item.date,
    category: l(item.category, locale),
    image: item.image,
    author: l(item.author, locale),
  }));
}
