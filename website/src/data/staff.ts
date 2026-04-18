import type { Locale } from "@/lib/i18n";
import { l, type LocalizedString } from "@/lib/i18n";

interface StaffMemberData {
  id: string;
  name: string;
  title: LocalizedString;
  department: LocalizedString;
  specialization: LocalizedString;
  email: string;
  bio: LocalizedString;
  longBio: LocalizedString[];
  researchInterests: LocalizedString[];
  education: LocalizedString[];
  career: LocalizedString[];
  awards?: LocalizedString[];
  publications: number;
  joinedYear?: number;
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  department: string;
  specialization: string;
  email: string;
  bio: string;
  longBio: string[];
  researchInterests: string[];
  education: string[];
  career: string[];
  awards: string[];
  publications: number;
  joinedYear?: number;
}

interface DepartmentData {
  label: LocalizedString;
}

const departmentData: DepartmentData[] = [
  { label: { en: "All", am: "Բոլորը" } },
  { label: { en: "Stellar Physics", am: "Աստղային ֆիզիկա" } },
  { label: { en: "Extragalactic Astronomy", am: "Արտագալակտիկական աստղագիտություն" } },
  { label: { en: "Cosmology", am: "Տիեզաբանություն" } },
  { label: { en: "Solar Physics", am: "Արեգակի ֆիզիկա" } },
  { label: { en: "Instrumentation", am: "Գործիքաշինություն" } },
  { label: { en: "Administration", am: "Վարչական" } },
];

const departmentMap: Record<string, LocalizedString> = {
  All: { en: "All", am: "Բոլորը" },
  "Stellar Physics": { en: "Stellar Physics", am: "Աստղային ֆիզիկա" },
  "Extragalactic Astronomy": { en: "Extragalactic Astronomy", am: "Արտագալակտիկական աստղագիտություն" },
  Cosmology: { en: "Cosmology", am: "Տիեզաբանություն" },
  "Solar Physics": { en: "Solar Physics", am: "Արեգակի ֆիզիկա" },
  Instrumentation: { en: "Instrumentation", am: "Գործիքաշինություն" },
  Administration: { en: "Administration", am: "Վարչական" },
};

const data: StaffMemberData[] = [
  {
    id: "areg-mickaelian",
    name: "Dr. Areg Mickaelian",
    title: { en: "Director", am: "Տնօրեն" },
    department: departmentMap["Administration"],
    specialization: {
      en: "Active Galaxies, Astronomical Surveys",
      am: "Ակտիվ գալակտիկաներ, աստղագիտական համալսարաններ",
    },
    email: "aregmick@bao.sci.am",
    bio: {
      en: "Director of the Byurakan Astrophysical Observatory since 2021. Leading researcher in active galaxies and multi-wavelength astronomical surveys with over 300 publications.",
      am: "Բյուրականի աստղաֆիզիկական աստղադիտարանի տնօրենը 2021 թվականից։ Ակտիվ գալակտիկաների և բազմաալիքային աստղագիտական համալսարանների առաջատար հետազոտող՝ ավելի քան 300 հրապարակումներով։",
    },
    longBio: [
      {
        en: "Dr. Areg Mickaelian has led the Byurakan Astrophysical Observatory since 2021, continuing a four-decade career dedicated to wide-field astronomical surveys and active galactic nuclei. He earned his PhD at Byurakan in 1992 and has since played a central role in digitizing and mining the First Byurakan Survey plates.",
        am: "Դ-ր Արեգ Միքայելյանը 2021 թվականից ղեկավարում է Բյուրականի աստղադիտարանը՝ շարունակելով չորս տասնամյակի կարիերան, որ նվիրված է լայնադաշտ աստղագիտական համալսարաններին և ակտիվ գալակտիկական միջուկներին։ Նա ստացել է իր դոկտորականը Բյուրականում 1992-ին և այդ ժամանակվանից կենտրոնական դերակատար է FBS թիթեղների թվայնացման և ուսումնասիրության գործում։",
      },
      {
        en: "Beyond research, he has chaired multiple IAU working groups and organized over a dozen international meetings hosted at the observatory. His current focus is on cross-matching DFBS with modern all-sky survey data to identify previously overlooked emission-line objects.",
        am: "Հետազոտությունից բացի՝ նա նախագահել է ԱՄՄ-ի մի շարք աշխատանքային խմբեր և կազմակերպել տասնյակից ավելի միջազգային հանդիպումներ աստղադիտարանում։ Ներկայիս նրա ուշադրությունը DFBS-ի և ժամանակակից ամբողջ երկինք ընդգրկող համալսարանների խաչաձև համապատասխանեցման վրա է՝ նոր էմիսիոն գծով օբյեկտներ հայտնաբերելու նպատակով։",
      },
    ],
    researchInterests: [
      { en: "Active galactic nuclei and quasars", am: "Ակտիվ գալակտիկական միջուկներ և քվազարներ" },
      { en: "Multi-wavelength astronomical surveys", am: "Բազմաալիքային աստղագիտական համալսարաններ" },
      { en: "Digitized photographic plate archives", am: "Թվայնացված լուսանկարչական թիթեղների արխիվներ" },
      { en: "Virtual Observatory tools", am: "Վիրտուալ աստղադիտարանի գործիքներ" },
    ],
    education: [
      { en: "PhD in Astrophysics — Byurakan Observatory, 1992", am: "Աստղաֆիզիկայի դոկտոր — Բյուրականի աստղադիտարան, 1992" },
      { en: "MSc in Physics — Yerevan State University, 1986", am: "Ֆիզիկայի մագիստրոս — Երևանի պետական համալսարան, 1986" },
    ],
    career: [
      { en: "Director, Byurakan Astrophysical Observatory (2021 — present)", am: "Տնօրեն, Բյուրականի աստղաֆիզիկական աստղադիտարան (2021 — մինչ օրս)" },
      { en: "Head of the DFBS Project (2002 — 2021)", am: "DFBS նախագծի ղեկավար (2002 — 2021)" },
      { en: "Research Associate, BAO (1992 — 2002)", am: "Գիտական աշխատող, ԲԱԹ (1992 — 2002)" },
    ],
    awards: [
      { en: "RA State Prize in Natural Sciences, 2020", am: "ՀՀ պետական մրցանակ բնական գիտությունների բնագավառում, 2020" },
      { en: "Viktor Ambartsumian Medal, 2015", am: "Վիկտոր Համբարձումյանի մեդալ, 2015" },
    ],
    publications: 312,
    joinedYear: 1992,
  },
  {
    id: "hayk-harutyunyan",
    name: "Dr. Hayk Harutyunyan",
    title: { en: "Senior Researcher", am: "Ավագ գիտական աշխատող" },
    department: departmentMap["Stellar Physics"],
    specialization: {
      en: "Stellar Evolution, Variable Stars",
      am: "Աստղային էվոլուցիա, փոփոխական աստղեր",
    },
    email: "hayk@bao.sci.am",
    bio: {
      en: "Expert in stellar evolution and variable stars. Leading the observatory's spectroscopic survey program and mentoring the next generation of Armenian astronomers.",
      am: "Աստղային էվոլուցիայի և փոփոխական աստղերի փորձագետ։ Ղեկավարում է աստղադիտարանի սպեկտրոսկոպիկ համալսարանի ծրագիրը և սպասարկում է հայ աստղագետների նոր սերնդին։",
    },
    longBio: [
      {
        en: "Dr. Hayk Harutyunyan specializes in the photometric and spectroscopic monitoring of variable stars, with an emphasis on young stellar objects and eruptive variables. His long-term monitoring campaigns have contributed some of the most detailed light curves available for T Tauri stars in Cygnus.",
        am: "Դ-ր Հայկ Հարությունյանը մասնագիտացված է փոփոխական աստղերի ֆոտոմետրիկ և սպեկտրոսկոպիկ դիտարկումների մեջ՝ շեշտը դնելով երիտասարդ աստղային օբյեկտների և ժայթքող փոփոխականների վրա։ Նրա երկարատև մոնիտորինգի արշավները տրամադրել են ամենամանրամասն լույսի կորերը Կարապ համաստեղության T Tauri աստղերի համար։",
      },
      {
        en: "He leads BAO's spectroscopic survey group and co-supervises several PhD students working on instrument calibration, time-series photometry, and accretion disk modeling.",
        am: "Նա ղեկավարում է ԲԱԹ-ի սպեկտրոսկոպիկ համալսարանի խումբը և համաղեկավարում է մի քանի դոկտորանտների, որոնք աշխատում են գործիքների չափորոշման, ժամանակային շարքերի ֆոտոմետրիայի և ակրեցիոն սկավառակների մոդելավորման վրա։",
      },
    ],
    researchInterests: [
      { en: "Pre-main-sequence stellar evolution", am: "Մինչգլխավոր շարքի աստղային էվոլուցիա" },
      { en: "Cataclysmic variables and novae", am: "Կատակլիզմիկ փոփոխականներ և նոր աստղեր" },
      { en: "Long-term photometric monitoring", am: "Երկարատև ֆոտոմետրիկ դիտարկում" },
      { en: "Spectroscopic classification", am: "Սպեկտրոսկոպիկ դասակարգում" },
    ],
    education: [
      { en: "PhD in Astrophysics — BAO, 2005", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 2005" },
      { en: "MSc in Physics — Yerevan State University, 2000", am: "Ֆիզիկայի մագիստրոս — ԵՊՀ, 2000" },
    ],
    career: [
      { en: "Senior Researcher, BAO (2015 — present)", am: "Ավագ գիտաշխատող, ԲԱԹ (2015 — մինչ օրս)" },
      { en: "Research Associate, BAO (2005 — 2015)", am: "Գիտաշխատող, ԲԱԹ (2005 — 2015)" },
    ],
    publications: 187,
    joinedYear: 2005,
  },
  {
    id: "elena-nikoghosyan",
    name: "Dr. Elena Nikoghosyan",
    title: { en: "Leading Researcher", am: "Առաջատար գիտաշխատող" },
    department: departmentMap["Stellar Physics"],
    specialization: {
      en: "Planetary Nebulae, Emission-Line Stars",
      am: "Մոլորակային միգամածություններ, էմիսիոն գծով աստղեր",
    },
    email: "elena@bao.sci.am",
    bio: {
      en: "Leading researcher specializing in planetary nebulae and emission-line stars. Has contributed significantly to the understanding of late stages of stellar evolution.",
      am: "Առաջատար գիտաշխատող՝ մասնագիտացված մոլորակային միգամածությունների և էմիսիոն գծով աստղերի ոլորտում։ Զգալի ներդրում է ունեցել աստղային էվոլուցիայի ուշ փուլերի ընկալման մեջ։",
    },
    longBio: [
      {
        en: "Dr. Elena Nikoghosyan has devoted her career to understanding how intermediate-mass stars transition into planetary nebulae. She has published foundational catalogs of emission-line stars in nearby galaxies and led several IAU-sponsored symposia in Yerevan.",
        am: "Դ-ր Ելենա Նիկողոսյանն իր կարիերան նվիրել է այն հարցի ուսումնասիրությանը, թե ինչպես են միջին զանգվածի աստղերն անցնում մոլորակային միգամածության փուլին։ Նա հրապարակել է էմիսիոն գծով աստղերի հիմնարար կատալոգներ մոտակա գալակտիկաներում և գլխավորել մի քանի ԱՄՄ-ի հովանավորությամբ անցկացված սիմպոզիումներ Երևանում։",
      },
      {
        en: "Her group collaborates closely with the Nordic Optical Telescope and runs a long-standing proposal program targeting bipolar nebulae.",
        am: "Նրա խումբը սերտորեն համագործակցում է Հյուսիսային օպտիկական աստղադիտակի հետ և վարում է երկար գործող առաջարկների ծրագիր՝ երկբևեռ միգամածությունների ուսումնասիրման նպատակով։",
      },
    ],
    researchInterests: [
      { en: "Post-AGB stars and planetary nebulae", am: "Հետ-AGB աստղեր և մոլորակային միգամածություններ" },
      { en: "Be-type stars and their circumstellar disks", am: "Be տիպի աստղեր և նրանց շրջանաստղային սկավառակները" },
      { en: "Emission-line star catalogs", am: "Էմիսիոն գծով աստղերի կատալոգներ" },
    ],
    education: [
      { en: "DSc in Physics & Mathematics — BAO, 2012", am: "Ֆիզիկամաթեմատիկական գիտությունների դոկտոր — ԲԱԹ, 2012" },
      { en: "PhD in Astrophysics — BAO, 1998", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 1998" },
    ],
    career: [
      { en: "Leading Researcher, BAO (2014 — present)", am: "Առաջատար գիտաշխատող, ԲԱԹ (2014 — մինչ օրս)" },
      { en: "Senior Researcher, BAO (2002 — 2014)", am: "Ավագ գիտաշխատող, ԲԱԹ (2002 — 2014)" },
    ],
    publications: 145,
    joinedYear: 1998,
  },
  {
    id: "tigran-magakian",
    name: "Dr. Tigran Magakian",
    title: { en: "Senior Researcher", am: "Ավագ գիտական աշխատող" },
    department: departmentMap["Stellar Physics"],
    specialization: {
      en: "Star Formation, Herbig-Haro Objects",
      am: "Աստղածագում, Հերբիգ-Հարո օբյեկտներ",
    },
    email: "tigran@bao.sci.am",
    bio: {
      en: "Renowned expert in star formation regions and Herbig-Haro objects. Discovered numerous new HH objects in the Milky Way.",
      am: "Աստղածագման շրջանների և Հերբիգ-Հարո օբյեկտների ճանաչված փորձագետ։ Հայտնաբերել է բազմաթիվ նոր HH օբյեկտներ Ծիր Կաթինում։",
    },
    longBio: [
      {
        en: "Dr. Tigran Magakian's work centers on the morphology and kinematics of Herbig-Haro jets — narrow collimated outflows from young stars. He has co-authored one of the most cited catalogs of HH objects in the northern sky.",
        am: "Դ-ր Տիգրան Մաղաքյանի աշխատանքի կենտրոնում Հերբիգ-Հարո ջրվեժների մորֆոլոգիան և կինեմատիկան են՝ երիտասարդ աստղերից դուրս գալող նեղ, կոլիմացված արտահոսքերը։ Նա համահեղինակ է հյուսիսային երկնքում HH օբյեկտների ամենահիշատակելի կատալոգներից մեկի։",
      },
      {
        en: "His recent campaigns use the 2.6m telescope to resolve the episodic jet structures that encode the history of accretion onto very young protostars.",
        am: "Նրա վերջին արշավները 2.6մ հեռադիտակով պարզաբանում են էպիզոդիկ ջրվեժային կառուցվածքները, որոնք կոդավորում են շատ երիտասարդ նախաաստղերի վրա նյութի կուտակման պատմությունը։",
      },
    ],
    researchInterests: [
      { en: "Herbig-Haro objects and protostellar jets", am: "Հերբիգ-Հարո օբյեկտներ և նախաաստղային ջրվեժներ" },
      { en: "Star-forming molecular clouds", am: "Աստղածնող մոլեկուլային ամպեր" },
      { en: "Optical spectroscopy of young stellar objects", am: "Երիտասարդ աստղային օբյեկտների օպտիկական սպեկտրոսկոպիա" },
    ],
    education: [
      { en: "PhD in Astrophysics — BAO, 1990", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 1990" },
      { en: "MSc in Physics — Yerevan State University, 1984", am: "Ֆիզիկայի մագիստրոս — ԵՊՀ, 1984" },
    ],
    career: [
      { en: "Senior Researcher, BAO (2000 — present)", am: "Ավագ գիտաշխատող, ԲԱԹ (2000 — մինչ օրս)" },
      { en: "Research Associate, BAO (1990 — 2000)", am: "Գիտաշխատող, ԲԱԹ (1990 — 2000)" },
    ],
    publications: 198,
    joinedYear: 1990,
  },
  {
    id: "vahram-chavushyan",
    name: "Dr. Vahram Chavushyan",
    title: { en: "Researcher", am: "Գիտական աշխատող" },
    department: departmentMap["Extragalactic Astronomy"],
    specialization: {
      en: "Active Galactic Nuclei, Quasars",
      am: "Ակտիվ գալակտիկական միջուկներ, քվազարներ",
    },
    email: "vahram@bao.sci.am",
    bio: {
      en: "Specializes in active galactic nuclei and quasar spectroscopy. Collaborates with international teams on multi-wavelength AGN surveys.",
      am: "Մասնագիտացված է ակտիվ գալակտիկական միջուկների և քվազարների սպեկտրոսկոպիայի ոլորտում։ Համագործակցում է միջազգային թիմերի հետ բազմաալիքային AGN համալսարանների շրջանակներում։",
    },
    longBio: [
      {
        en: "Dr. Vahram Chavushyan spent over a decade at INAOE in Mexico before returning to Byurakan. His reverberation mapping work has contributed to black-hole mass measurements in dozens of type-1 AGN.",
        am: "Դ-ր Վահրամ Չավուշյանը ավելի քան տասնամյակ անցկացրեց Մեքսիկայի INAOE-ում նախքան Բյուրական վերադառնալը։ Նրա ռեվերբերացիոն քարտեզագրման աշխատանքները նպաստել են տասնյակ 1-ին տիպի AGN-ներում սև խոռոչների զանգվածների չափմանը։",
      },
    ],
    researchInterests: [
      { en: "Reverberation mapping of AGN", am: "AGN-ների ռեվերբերացիոն քարտեզագրում" },
      { en: "Quasar variability", am: "Քվազարների փոփոխականություն" },
      { en: "Multi-wavelength blazar studies", am: "Բազմաալիքային բլազարների ուսումնասիրություններ" },
    ],
    education: [
      { en: "PhD in Astrophysics — BAO, 1995", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 1995" },
    ],
    career: [
      { en: "Researcher, BAO (2018 — present)", am: "Գիտաշխատող, ԲԱԹ (2018 — մինչ օրս)" },
      { en: "Researcher, INAOE, Mexico (2003 — 2018)", am: "Գիտաշխատող, INAOE, Մեքսիկա (2003 — 2018)" },
    ],
    publications: 156,
    joinedYear: 2018,
  },
  {
    id: "gohar-harutyunyan",
    name: "Dr. Gohar Harutyunyan",
    title: { en: "Researcher", am: "Գիտական աշխատող" },
    department: departmentMap["Cosmology"],
    specialization: {
      en: "Dark Energy, Large-Scale Structure",
      am: "Մութ էներգիա, տիեզամասշտաբ կառուցվածք",
    },
    email: "gohar@bao.sci.am",
    bio: {
      en: "Researches dark energy and the large-scale structure of the universe. Active participant in several international cosmological survey projects.",
      am: "Հետազոտում է մութ էներգիան և տիեզերքի տիեզամասշտաբ կառուցվածքը։ Ակտիվ մասնակից է մի քանի միջազգային տիեզաբանական համալսարանների նախագծերի։",
    },
    longBio: [
      {
        en: "Dr. Gohar Harutyunyan works at the intersection of observational cosmology and large-scale structure, focusing on cosmic voids as a clean probe of dark energy. Her 2024 PRD paper tightened void-based dark-energy constraints by a factor of two.",
        am: "Դ-ր Գոհար Հարությունյանը աշխատում է դիտողական տիեզաբանության և տիեզամասշտաբ կառուցվածքի հատման կետում՝ ուշադրությունը կենտրոնացնելով տիեզերական դատարկությունների վրա՝ որպես մութ էներգիայի մաքուր զոնդ։ Նրա 2024 թ. PRD-ում հոդվածը երկու անգամ ավելացրել է դատարկության վրա հիմնված մութ էներգիայի սահմանափակումների ճշգրտությունը։",
      },
    ],
    researchInterests: [
      { en: "Cosmic voids and dark energy constraints", am: "Տիեզերական դատարկություններ և մութ էներգիայի սահմանափակումներ" },
      { en: "Baryon acoustic oscillations", am: "Բարիոնային ակուստիկ տատանումներ" },
      { en: "Galaxy clustering statistics", am: "Գալակտիկաների խմբավորման վիճակագրություն" },
    ],
    education: [
      { en: "PhD in Cosmology — University of Geneva, 2019", am: "Տիեզաբանության դոկտոր — Ժնևի համալսարան, 2019" },
      { en: "MSc in Physics — Yerevan State University, 2014", am: "Ֆիզիկայի մագիստրոս — ԵՊՀ, 2014" },
    ],
    career: [
      { en: "Researcher, BAO (2020 — present)", am: "Գիտաշխատող, ԲԱԹ (2020 — մինչ օրս)" },
      { en: "Postdoctoral Fellow, University of Geneva (2019 — 2020)", am: "Հետդոկտորական գիտաշխատող, Ժնևի համալսարան (2019 — 2020)" },
    ],
    awards: [
      { en: "International Young Astronomer Prize, IAU, 2025", am: "Միջազգային երիտասարդ աստղագետի մրցանակ, ԱՄՄ, 2025" },
    ],
    publications: 92,
    joinedYear: 2020,
  },
  {
    id: "hovhannes-pikichyan",
    name: "Dr. Hovhannes Pikichyan",
    title: { en: "Senior Researcher", am: "Ավագ գիտական աշխատող" },
    department: departmentMap["Solar Physics"],
    specialization: {
      en: "Solar Activity, Space Weather",
      am: "Արեգակի ակտիվություն, տիեզական եղանակ",
    },
    email: "hovhannes@bao.sci.am",
    bio: {
      en: "Leading expert in solar activity cycles and space weather prediction. Maintains the observatory's solar observation program.",
      am: "Արեգակի ակտիվության ցիկլերի և տիեզական եղանակի կանխատեսման առաջատար փորձագետ։ Վարում է աստղադիտարանի արեգակի դիտարկման ծրագիրը։",
    },
    longBio: [
      {
        en: "Dr. Hovhannes Pikichyan has led BAO's solar patrol program for nearly two decades, delivering daily records of sunspot groups and flare activity to the international SIDC database.",
        am: "Դ-ր Հովհաննես Պիկիչյանը գրեթե երկու տասնամյակ ղեկավարում է ԲԱԹ-ի արեգակի դիտարկման ծրագիրը՝ ամենօրյա տվյալներ տրամադրելով արևաբծերի խմբերի և բռնկումների ակտիվության մասին միջազգային SIDC տվյալների բազային։",
      },
    ],
    researchInterests: [
      { en: "Solar cycle prediction", am: "Արեգակի ցիկլի կանխատեսում" },
      { en: "Coronal mass ejections and space weather", am: "Պսակային զանգվածի արտահոսքեր և տիեզական եղանակ" },
      { en: "Radiative transfer modeling", am: "Ճառագայթային փոխանցման մոդելավորում" },
    ],
    education: [
      { en: "PhD in Astrophysics — BAO, 1988", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 1988" },
    ],
    career: [
      { en: "Senior Researcher, BAO (1998 — present)", am: "Ավագ գիտաշխատող, ԲԱԹ (1998 — մինչ օրս)" },
    ],
    publications: 134,
    joinedYear: 1988,
  },
  {
    id: "sona-farmanyan",
    name: "Dr. Sona Farmanyan",
    title: { en: "Researcher", am: "Գիտական աշխատող" },
    department: departmentMap["Extragalactic Astronomy"],
    specialization: {
      en: "Galaxy Morphology, Photometry",
      am: "Գալակտիկաների մորֆոլոգիա, ֆոտոմետրիա",
    },
    email: "sona@bao.sci.am",
    bio: {
      en: "Focuses on galaxy morphology and surface photometry. Contributed to several catalogs of galaxies and their classification.",
      am: "Կենտրոնացած է գալակտիկաների մորֆոլոգիայի և մակերեսի ֆոտոմետրիայի վրա։ Ներդրում է ունեցել գալակտիկաների մի քանի կատալոգների և դրանց դասակարգման մեջ։",
    },
    longBio: [
      {
        en: "Dr. Sona Farmanyan leads the classification effort for ultra-compact Markarian galaxies. Her 2025 MNRAS paper introduced a new morphological subclass that is now the subject of follow-up observations at several observatories.",
        am: "Դ-ր Սոնա Ֆարմանյանը ղեկավարում է ուլտրակոմպակտ Մարկարյանի գալակտիկաների դասակարգման աշխատանքները։ Նրա 2025 թ. MNRAS-ի հոդվածը ներկայացրեց նոր մորֆոլոգիական ենթադաս, որն այժմ մի քանի աստղադիտարաններում հետևողական դիտարկումների առարկա է։",
      },
    ],
    researchInterests: [
      { en: "Ultra-compact galaxy morphology", am: "Ուլտրակոմպակտ գալակտիկաների մորֆոլոգիա" },
      { en: "Surface photometry techniques", am: "Մակերեսի ֆոտոմետրիայի մեթոդներ" },
      { en: "Markarian galaxy classification", am: "Մարկարյանի գալակտիկաների դասակարգում" },
    ],
    education: [
      { en: "PhD in Astrophysics — BAO, 2016", am: "Աստղաֆիզիկայի դոկտոր — ԲԱԹ, 2016" },
      { en: "MSc in Physics — Yerevan State University, 2011", am: "Ֆիզիկայի մագիստրոս — ԵՊՀ, 2011" },
    ],
    career: [
      { en: "Researcher, BAO (2016 — present)", am: "Գիտաշխատող, ԲԱԹ (2016 — մինչ օրս)" },
    ],
    publications: 78,
    joinedYear: 2016,
  },
];

export function getDepartments(locale: Locale): string[] {
  return departmentData.map((d) => l(d.label, locale));
}

export function getStaff(locale: Locale): StaffMember[] {
  return data.map((member) => ({
    id: member.id,
    name: member.name,
    title: l(member.title, locale),
    department: l(member.department, locale),
    specialization: l(member.specialization, locale),
    email: member.email,
    bio: l(member.bio, locale),
    longBio: member.longBio.map((p) => l(p, locale)),
    researchInterests: member.researchInterests.map((r) => l(r, locale)),
    education: member.education.map((e) => l(e, locale)),
    career: member.career.map((c) => l(c, locale)),
    awards: (member.awards ?? []).map((a) => l(a, locale)),
    publications: member.publications,
    joinedYear: member.joinedYear,
  }));
}
