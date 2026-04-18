import type { Locale } from "@/lib/i18n";
import { l, type LocalizedString } from "@/lib/i18n";

interface ProgramData {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString[];
  duration: LocalizedString;
  level: LocalizedString;
  features: LocalizedString[];
  curriculum?: LocalizedString[];
  outcomes?: LocalizedString[];
  prerequisites?: LocalizedString[];
  nextSession?: LocalizedString;
  applicationDeadline?: LocalizedString;
  instructors?: LocalizedString[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  duration: string;
  level: string;
  features: string[];
  curriculum: string[];
  outcomes: string[];
  prerequisites: string[];
  nextSession: string;
  applicationDeadline: string;
  instructors: string[];
}

const data: ProgramData[] = [
  {
    id: "biss",
    title: {
      en: "Byurakan International Summer School (BISS)",
      am: "Բյուրականի միջազգային ամառային դպրոց (BISS)",
    },
    description: {
      en: "A prestigious two-week program for graduate students and early-career researchers featuring lectures by world-renowned astronomers, hands-on observational sessions, and collaborative projects.",
      am: "Հեղինակավոր երկշաբաթյա ծրագիր մագիստրանտների և սկսնակ հետազոտողների համար՝ աշխարհահռչակ աստղագետների դասախոսություններով, գործնական դիտարկման նիստերով և համատեղ նախագծերով։",
    },
    longDescription: [
      {
        en: "BISS is one of the longest-running summer schools in astronomy. Each edition gathers roughly 30 graduate students and early-career researchers for two weeks of lectures, hands-on observing, and guided research projects at the Byurakan campus on the slopes of Mount Aragats.",
        am: "BISS-ն աստղագիտության բնագավառի ամենաերկարաշունչ ամառային դպրոցներից մեկն է։ Յուրաքանչյուր տարի ամառային դպրոցը հավաքում է մոտ 30 մագիստրատուրայի ուսանողների և սկսնակ հետազոտողների՝ երկշաբաթյա դասախոսությունների, գործնական դիտարկումների և ուղեկցվող հետազոտական նախագծերի համար Արագած լեռան լանջերին գտնվող Բյուրականի տարածքում։",
      },
      {
        en: "The 2025 edition focuses on data science in modern astronomy — time-domain surveys, Bayesian inference, and machine-learning classification. Participants leave with a completed mini-project, a publishable notebook, and a global peer network.",
        am: "2025 թվականի թողարկումը կենտրոնանում է ժամանակակից աստղագիտության մեջ տվյալների գիտության վրա՝ ժամանակի տիրույթի համալսարաններ, բայեսյան եզրակացություններ և մեքենայական ուսուցման դասակարգումներ։ Մասնակիցներն ավարտում են ավարտված մինի-նախագծով, հրատարակման պատրաստ notebook-ով և գլոբալ գործընկերային ցանցով։",
      },
    ],
    duration: { en: "2 weeks (September)", am: "2 շաբաթ (սեպտեմբեր)" },
    level: { en: "Graduate / Early Career", am: "Մագիստրատուրա / Սկսնակ" },
    features: [
      { en: "Lectures by international experts", am: "Միջազգային փորձագետների դասախոսություններ" },
      { en: "Hands-on telescope observations", am: "Գործնական դիտարկումներ հեռադիտակով" },
      { en: "Data analysis workshops", am: "Տվյալների վերլուծության սեմինարներ" },
      { en: "Collaborative research projects", am: "Համատեղ հետազոտական նախագծեր" },
      { en: "Cultural excursions in Armenia", am: "Մշակութային էքսկուրսիաներ Հայաստանում" },
      { en: "Certificate of completion", am: "Ավարտման վկայական" },
    ],
    curriculum: [
      { en: "Time-domain astronomy and transient surveys", am: "Ժամանակի տիրույթի աստղագիտություն և անցողիկ երևույթների համալսարաններ" },
      { en: "Bayesian inference for astronomical data", am: "Բայեսյան եզրակացություններ աստղագիտական տվյալների համար" },
      { en: "Machine-learning classification of spectra", am: "Սպեկտրների մեքենայական ուսուցման դասակարգում" },
      { en: "Virtual Observatory and archival research", am: "Վիրտուալ աստղադիտարան և արխիվային հետազոտություն" },
      { en: "Observing runs on the 2.6m and 1m Schmidt telescopes", am: "Դիտարկումներ 2.6մ և 1մ Շմիդտ հեռադիտակներով" },
    ],
    outcomes: [
      { en: "Complete a publishable mini-research project", am: "Ավարտել հրատարակման պատրաստ մինի-հետազոտական նախագիծ" },
      { en: "Gain proficiency with survey data pipelines", am: "Ձեռք բերել տվյալների մշակման հմտություններ" },
      { en: "Build a lasting network of international peers", am: "Կառուցել միջազգային գործընկերների երկարաժամկետ ցանց" },
    ],
    prerequisites: [
      { en: "Graduate-level background in physics or astronomy", am: "Մագիստրոսական մակարդակի գիտելիքներ ֆիզիկայի կամ աստղագիտության ոլորտում" },
      { en: "Working knowledge of Python", am: "Python լեզվի գործնական իմացություն" },
    ],
    instructors: [
      { en: "Dr. Areg Mickaelian (BAO)", am: "Դ-ր Արեգ Միքայելյան (ԲԱԹ)" },
      { en: "Guest faculty from Harvard-CfA, ESO, Heidelberg", am: "Հրավիրված դասախոսներ Harvard-CfA-ից, ESO-ից, Հայդելբերգից" },
    ],
    nextSession: { en: "September 8–19, 2025", am: "Սեպտեմբերի 8–19, 2025" },
    applicationDeadline: { en: "June 30, 2025", am: "Հունիսի 30, 2025" },
  },
  {
    id: "graduate-program",
    title: {
      en: "Graduate Research Program",
      am: "Մագիստրանտական հետազոտական ծրագիր",
    },
    description: {
      en: "Full-time graduate research positions at the observatory for students pursuing MSc or PhD degrees in astrophysics, working under the supervision of senior researchers.",
      am: "Աստղադիտարանում լիարժեք հետազոտական հաստիքներ աստղաֆիզիկայի մագիստրոսի կամ թեկնածուի աստիճան հայցող ուսանողների համար՝ ավագ գիտական աշխատողների ղեկավարությամբ։",
    },
    longDescription: [
      {
        en: "BAO hosts a residential graduate research program in partnership with Yerevan State University. Students join one of seven active research groups and receive access to the 2.6m and 1m Schmidt telescopes, the DFBS plate archive, and the observatory's computing cluster.",
        am: "ԲԱԹ-ը բնակարանային մագիստրանտական հետազոտական ծրագիր է իրականացնում Երևանի պետական համալսարանի հետ գործակցությամբ։ Ուսանողները միանում են յոթ ակտիվ հետազոտական խմբերից մեկին և ստանում են մուտք 2.6մ և 1մ Շմիդտ հեռադիտակներին, DFBS թիթեղների արխիվին և աստղադիտարանի հաշվարկային կլաստերին։",
      },
      {
        en: "MSc candidates commit to a two-year project; PhD candidates complete a three-to-four-year thesis. Both tracks include a required teaching rotation in the observatory's public-outreach events.",
        am: "Մագիստրոսի թեկնածուները պարտավորվում են երկու տարվա նախագիծ իրականացնել, իսկ թեկնածուները՝ երեքից չորս տարվա ատենախոսություն։ Երկու ուղղություններն էլ ներառում են դասավանդման պարտադիր պտույտ աստղադիտարանի հանրային իրազեկման միջոցառումներում։",
      },
    ],
    duration: { en: "2-4 years", am: "2-4 տարի" },
    level: { en: "MSc / PhD", am: "Մագիստրոս / Թեկնածու" },
    features: [
      { en: "Full access to observatory facilities", am: "Աստղադիտարանի հաստատությունների լիարժեք հասանելիություն" },
      { en: "Supervision by leading researchers", am: "Առաջատար գիտնականների ղեկավարություն" },
      { en: "Stipend and accommodation support", am: "Կրթաթոշակ և կացարանային աջակցություն" },
      { en: "Publication opportunities", am: "Հրապարակման հնարավորություններ" },
      { en: "International conference participation", am: "Միջազգային գիտաժողովների մասնակցություն" },
      { en: "Thesis defense support", am: "Ատենախոսության պաշտպանության աջակցություն" },
    ],
    curriculum: [
      { en: "Supervised original research in a chosen specialization", am: "Ղեկավարվող ինքնուրույն հետազոտություն ընտրված մասնագիտացման մեջ" },
      { en: "Graduate coursework at YSU (astrophysics track)", am: "Մագիստրանտական դասընթացներ ԵՊՀ-ում (աստղաֆիզիկայի ուղղություն)" },
      { en: "Weekly group seminars and journal club", am: "Շաբաթական խմբային սեմինարներ և հոդվածների քննարկում" },
      { en: "Annual thesis progress review", am: "Ատենախոսության առաջընթացի տարեկան վերանայում" },
    ],
    outcomes: [
      { en: "Defended MSc thesis or PhD dissertation", am: "Պաշտպանված մագիստրոսական կամ թեկնածուական ատենախոսություն" },
      { en: "Minimum of one first-author publication", am: "Նվազագույնը մեկ առաջին հեղինակ հրապարակում" },
      { en: "Teaching experience through outreach rotations", am: "Դասավանդման փորձ՝ իրազեկման միջոցով" },
    ],
    prerequisites: [
      { en: "Bachelor's degree in physics, astronomy, or a related field", am: "Բակալավրի աստիճան ֆիզիկայի, աստղագիտության կամ հարակից ոլորտում" },
      { en: "Two letters of recommendation", am: "Երկու երաշխավորագիր" },
      { en: "Proposed research topic (1–2 pages)", am: "Առաջարկվող հետազոտական թեմա (1–2 էջ)" },
    ],
    nextSession: { en: "Rolling admission; cohorts start each September", am: "Շարունակական ընդունում, խմբեր սկսվում են ամեն սեպտեմբերին" },
    applicationDeadline: { en: "May 1 (for September cohort)", am: "Մայիսի 1 (սեպտեմբերի խմբի համար)" },
  },
  {
    id: "visiting-researcher",
    title: {
      en: "Visiting Researcher Program",
      am: "Հրավիրյալ հետազոտողի ծրագիր",
    },
    description: {
      en: "Short-term research visits for international astronomers seeking to use Byurakan's facilities or collaborate with our research teams.",
      am: "Կարճաժամկետ հետազոտական այցելություններ միջազգային աստղագետների համար, ովքեր ցանկանում են օգտվել Բյուրականի հաստատություններից կամ համագործակցել մեր հետազոտական թիմերի հետ։",
    },
    longDescription: [
      {
        en: "The Visiting Researcher Program is designed for postdoctoral fellows and faculty with an active research project that would benefit from Byurakan's instruments or archives. Stays range from one month to half a year and include lodging at the observatory guest house.",
        am: "Հրավիրյալ հետազոտողի ծրագիրը նախատեսված է հետդոկտորական գիտաշխատողների և դասախոսների համար, ովքեր ունեն ակտիվ հետազոտական նախագիծ, որը կշահի Բյուրականի գործիքներից կամ արխիվներից։ Մնալու ժամկետը տատանվում է մեկ ամսից մինչև կես տարի և ներառում է կացարան աստղադիտարանի հյուրատանը։",
      },
      {
        en: "The program supports around 12 visitors per year. Applications are reviewed quarterly by an internal committee and prioritize projects that complement ongoing research at BAO.",
        am: "Ծրագիրն աջակցում է տարեկան մոտ 12 այցելուների։ Դիմումները քննարկվում են ներքին հանձնաժողովի կողմից եռամսյակային կտրվածքով և առաջնահերթություն են տալիս ԲԱԹ-ում ընթացիկ հետազոտություններին լրացնող նախագծերին։",
      },
    ],
    duration: { en: "1-6 months", am: "1-6 ամիս" },
    level: { en: "Postdoc / Faculty", am: "Հետդոկտորանտ / Դասախոս" },
    features: [
      { en: "Telescope time allocation", am: "Հեռադիտակի օգտագործման ժամանակի տրամադրում" },
      { en: "Access to DFBS archive", am: "DFBS արխիվի հասանելիություն" },
      { en: "Office space and computing resources", am: "Աշխատանքային տարածք և հաշվարկային ռեսուրսներ" },
      { en: "Accommodation at observatory guest house", am: "Կացարան աստղադիտարանի հյուրանոցատնում" },
      { en: "Collaborative research opportunities", am: "Համատեղ հետազոտական հնարավորություններ" },
      { en: "Seminar presentation slot", am: "Սեմինարային զեկույցի հնարավորություն" },
    ],
    curriculum: [
      { en: "Proposal-driven telescope observing campaigns", am: "Հայտի հիման վրա հեռադիտակային դիտարկման արշավներ" },
      { en: "Archive mining of DFBS and BAO plate collections", am: "DFBS-ի և ԲԱԹ-ի թիթեղների հավաքածուների արխիվային հետազոտություն" },
      { en: "Co-advising of local graduate students", am: "Տեղական մագիստրանտների համաղեկավարում" },
      { en: "One public seminar during the stay", am: "Մեկ հանրային սեմինար այցելության ընթացքում" },
    ],
    outcomes: [
      { en: "At least one co-authored paper with BAO staff", am: "Առնվազն մեկ համահեղինակ հոդված ԲԱԹ-ի աշխատակիցների հետ" },
      { en: "Delivered seminar with recorded video archive", am: "Անցկացված սեմինար՝ տեսագրված արխիվով" },
    ],
    prerequisites: [
      { en: "PhD in astronomy, astrophysics, or a related field", am: "Աստղագիտության, աստղաֆիզիկայի կամ հարակից ոլորտի թեկնածուի աստիճան" },
      { en: "Active collaborator or host at BAO", am: "Ակտիվ համագործակից կամ ընդունող ԲԱԹ-ում" },
    ],
    nextSession: { en: "Applications reviewed quarterly", am: "Դիմումները քննարկվում են եռամսյակային կտրվածքով" },
    applicationDeadline: { en: "First day of each quarter", am: "Յուրաքանչյուր եռամսյակի առաջին օրը" },
  },
  {
    id: "public-outreach",
    title: {
      en: "Public Outreach & Education",
      am: "Հանրային կրթական ծրագրեր",
    },
    description: {
      en: "Regular public programs including stargazing nights, school visits, and science communication events aimed at inspiring the next generation of scientists.",
      am: "Կանոնավոր հանրային ծրագրեր՝ ներառյալ աստղադիտական երեկոներ, դպրոցական այցելություններ և գիտության տարածման միջոցառումներ՝ ուղղված գիտնականների նոր սերնդին ոգեշնչելուն։",
    },
    longDescription: [
      {
        en: "BAO's outreach program runs year-round and reaches roughly 8,000 visitors annually. The headline events are monthly public stargazing nights on new-moon weekends, school tours running Monday through Friday, and an annual astronomy festival held in late summer.",
        am: "ԲԱԹ-ի հանրային ծրագիրը գործում է ամբողջ տարին և տարեկան ընդգրկում է մոտ 8,000 այցելու։ Գլխավոր միջոցառումներն են ամենամսյա աստղադիտական երեկոները նոր լուսնի շաբաթ-կիրակիներին, դպրոցական շրջայցերը երկուշաբթիից ուրբաթ և ամառվա վերջին անցկացվող ամենամյա աստղագիտական փառատոնը։",
      },
      {
        en: "The program also trains secondary-school teachers through a three-day summer workshop and maintains a freely accessible online astronomy curriculum in Armenian and English.",
        am: "Ծրագիրը նաև վերապատրաստում է միջնակարգ դպրոցի ուսուցիչներին եռօրյա ամառային սեմինարի միջոցով և պահպանում է աստղագիտության հանրամատչելի առցանց ուսումնական ծրագիր հայերենով և անգլերենով։",
      },
    ],
    duration: { en: "Ongoing", am: "Շարունակական" },
    level: { en: "All Ages", am: "Բոլոր տարիքի" },
    features: [
      { en: "Monthly public stargazing nights", am: "Ամենամսյա հանրային աստղադիտական երեկոներ" },
      { en: "School group observatory tours", am: "Դպրոցական խմբերի աստղադիտարանի շրջագայություններ" },
      { en: "Astronomy club for students", am: "Աստղագիտական ակումբ ուսանողների համար" },
      { en: "Science festival participation", am: "Գիտության փառատոնների մասնակցություն" },
      { en: "Online educational resources", am: "Առցանց կրթական ռեսուրսներ" },
      { en: "Teacher training workshops", am: "Ուսուցիչների վերապատրաստման սեմինարներ" },
    ],
    curriculum: [
      { en: "Night-sky orientation and telescope demonstrations", am: "Գիշերային երկնքի կողմնորոշում և հեռադիտակային ցուցադրումներ" },
      { en: "Hands-on spectroscopy for school groups", am: "Գործնական սպեկտրոսկոպիա դպրոցական խմբերի համար" },
      { en: "Armenian-language astronomy curriculum (K-12)", am: "Հայերեն լեզվով աստղագիտության ուսումնական ծրագիր (K-12)" },
      { en: "Annual Byurakan Astronomy Festival", am: "Ամենամյա Բյուրականի աստղագիտության փառատոն" },
    ],
    outcomes: [
      { en: "Roughly 8,000 visitors engaged each year", am: "Տարեկան մոտ 8,000 ներգրավված այցելու" },
      { en: "Teacher-training cohort of 40+ annually", am: "Տարեկան 40+ ուսուցիչների վերապատրաստման խումբ" },
    ],
    nextSession: { en: "Public nights on every new-moon weekend", am: "Հանրային երեկոներ նոր լուսնի յուրաքանչյուր շաբաթ-կիրակի" },
  },
];

export function getPrograms(locale: Locale): Program[] {
  return data.map((program) => ({
    id: program.id,
    title: l(program.title, locale),
    description: l(program.description, locale),
    longDescription: program.longDescription.map((p) => l(p, locale)),
    duration: l(program.duration, locale),
    level: l(program.level, locale),
    features: program.features.map((f) => l(f, locale)),
    curriculum: (program.curriculum ?? []).map((c) => l(c, locale)),
    outcomes: (program.outcomes ?? []).map((o) => l(o, locale)),
    prerequisites: (program.prerequisites ?? []).map((p) => l(p, locale)),
    nextSession: program.nextSession ? l(program.nextSession, locale) : "",
    applicationDeadline: program.applicationDeadline
      ? l(program.applicationDeadline, locale)
      : "",
    instructors: (program.instructors ?? []).map((i) => l(i, locale)),
  }));
}
