export interface AffiliationItem {
  id: string;
  logo: string;
  logoAlt: string;
  title: string;
  boxTitle: string;
  description: string;
  tags: string[];
}

export const affiliationItems: AffiliationItem[] = [
  {
    id: 'ipscmi',
    logo: '/images/ipscmi-affi.jpg',
    logoAlt: 'IPSCMI Logo',
    title: 'International Purchasing and Supply Chain Management Institute - IPSCMI',
    boxTitle: 'IPSCMI',
    description: 'International Purchasing and Supply Chain Management Institute (IPSCMI) is one of the renowned and prestigious institutes providing international certifications in purchasing and procurement around the globe. The prominence of the institute is well proven by the fact that over 20,000 firms opt to hire IPSCMI-certified professionals. An IPSCMI-approved certification is considered to be the golden standard in the purchasing and supply chain industry.',
    tags: ['CISCP - CISCM', 'CIVM', 'CISCP', 'CISCM', 'CICCM', 'CIWIM', 'CISM', 'CIPM', 'CIPP', 'CISCPM', 'PMPPC', 'CIVM', 'CIPA', 'CIPC', 'CISCC', 'PMPPC', 'CAIPSCM', 'CISCA'],
  },
  {
    id: 'cips',
    logo: '/images/cips.svg',
    logoAlt: 'CIPS Logo',
    title: 'The Chartered Institute of Procurement and Supply - CIPS',
    boxTitle: 'CIPS',
    description: 'The Chartered Institute of Procurement and Supply (CIPS) offers globally recognized certifications that set the standard for excellence in procurement and supply chain management. With a presence in over 150 countries and a network of 60,000 professionals, CIPS equips individuals with the skills and best practices to drive positive change and excel in the industry.',
    tags: ['CIPS Level 4', 'CIPS Level 5', 'CIPSLevel3'],
  },
  {
    id: 'cmi',
    logo: '/images/cmi-logo.svg',
    logoAlt: 'CMI Logo',
    title: 'The Chartered Management Institute (CMI)',
    boxTitle: 'CMI',
    description: 'The Chartered Management Institute (CMI) offers globally recognized certifications designed to develop leadership and management skills, empowering professionals to drive organizational success. With a focus on practical, real-world applications, CMI programs equip individuals with the tools to excel in management roles and lead high-performing teams.',
    tags: ['SPM', 'CMT'],
  },
  {
    id: 'cilt',
    logo: '/images/cilt.svg',
    logoAlt: 'CILT Logo',
    title: 'The Chartered Institute for Logistics and Transport - CILT',
    boxTitle: 'CILT',
    description: 'The Chartered Institute for Logistics and Transport (CILT) offers globally recognized certifications and memberships that provide in-depth knowledge and expertise in logistics, transport, and supply chain management. With over 30,000 members across 30+ countries, CILT equips professionals with the skills to build rewarding, internationally recognized careers in these dynamic industries.',
    tags: ['CILT Level 3', 'CILT Level 5', 'CILTLevel6', 'CILTSF'],
  },
  {
    id: 'ascm',
    logo: '/images/ascm-flow.png',
    logoAlt: 'ASCM Logo',
    title: 'Association for Supply Chain Management (ASCM)',
    boxTitle: 'ASCM',
    description: 'The Association for Supply Chain Management (ASCM) (formerly known as APICS), offers globally recognized certifications that set the standard for professional excellence in logistics and supply chain management. With a focus on research, education, and innovation, ASCM equips professionals with the skills to drive supply chain efficiency and excellence worldwide.',
    tags: ['CSCP', 'CLTD', 'CTSC', 'SRMC', 'SCPL', 'SCPC', 'SCRC', 'SCTC', 'SCWC', 'CPIM', 'FOSCM'],
  },
  {
    id: 'aps',
    logo: '/images/american-purchasing.svg',
    logoAlt: 'APS Logo',
    title: 'American Purchasing Society (APS)',
    boxTitle: 'APS',
    description: 'The American Purchasing Society (APS) offers pioneering certification programs designed to enhance procurement skills and boost business purchasing efficiency. As the first organization to create certifications for buyers and purchasing managers, APS empowers professionals to excel in their careers and drive organizational success through expert training and education.',
    tags: ['CSCP', 'CLTD', 'CTSC', 'SRMC', 'SCPL', 'SCPC', 'SCRC', 'SCTC', 'SCWC', 'CPIM', 'FOSCM'],
  },
  {
    id: 'aci',
    logo: '/images/aci.svg',
    logoAlt: 'ACI Logo',
    title: 'American Certification Institute (ACI)',
    boxTitle: 'ACI',
    description: 'The American Certification Institute (ACI) offers globally recognized certifications across a wide range of business-related courses, providing professionals with the skills and credentials to excel in their fields. With alliance partners worldwide and affiliations like IPSCMI, ACI delivers premium training, testing, and certification programs designed to enhance career prospects and industry expertise.',
    tags: ['CHRP - CHRM', 'CHRP', 'COA', 'CIFP', 'COM', 'CIRS', 'CHRM', 'CHRC'],
  },
  {
    id: 'pmi',
    logo: '/images/pmi-flow.svg',
    logoAlt: 'PMI Logo',
    title: 'The Project Management Institute (PMI)',
    boxTitle: 'PMI',
    description: 'The Project Management Institute (PMI) offers globally recognized certifications, such as PMP, designed to empower project management professionals with the skills and knowledge to thrive in the Project Economy. Through advocacy, education, and research, PMI prepares over 1.5 million professionals worldwide to lead successful projects and drive organizational success.',
    tags: ['PMP', 'RMP'],
  },
  {
    id: 'iata',
    logo: '/images/iata-flow.svg',
    logoAlt: 'IATA Logo',
    title: 'The International Air Transport Association',
    boxTitle: 'IATA',
    description: 'The International Air Transport Association (IATA) offers globally recognized certifications and training programs designed to enhance skills in aviation operations, safety, and management. With a mission to lead and serve the airline industry, IATA equips professionals with the expertise to streamline procedures, maximize efficiency, and drive cost-effective solutions in the dynamic aviation sector.',
    tags: ['PGSA', 'RAMP', 'APOP', 'CBCR', 'GOMT', 'FTTD'],
  },
  {
    id: 'peoplecert',
    logo: '/images/prople-cert.png',
    logoAlt: 'PeopleCert Logo',
    title: 'PeopleCert',
    boxTitle: 'PeopleCert',
    description: 'PeopleCert is a globally recognized certification body that sets the benchmark for excellence in business, IT, and professional skills credentials. As a trusted provider of leading programmes, PeopleCert equips learners and organizations with the tools needed to drive efficiency, innovation, and continuous improvement. With over 2 million certified individuals and a wide network of Accredited Training Organizations (ATOs), PeopleCert delivers flexible, high-quality learning experiences.',
    tags: ['LSSBB', 'LSSGB'],
  },
  {
    id: 'hrci',
    logo: '/images/hrci-flow.png',
    logoAlt: 'HRCI Logo',
    title: 'HR Certification Institute®',
    boxTitle: 'HRCI',
    description: "HR Certification Institute (HRCI), based in Alexandria, Virginia, is the world's leading credentialing and learning organization for the HR profession. For nearly 50 years, HRCI has been setting the global benchmark for HR knowledge and excellence, empowering professionals to grow and succeed in the people business.",
    tags: ['SPHRi', 'PHRi', 'GPHR', 'aPHRi'],
  },
  {
    id: 'comptia',
    logo: '/images/comptia.jpg',
    logoAlt: 'CompTIA Logo',
    title: 'The Computing Technology Industry Association (CompTIA)',
    boxTitle: 'CompTIA',
    description: 'CompTIA is more than just a certification body; it is a global advocate for the IT ecosystem. By providing market research, public policy advocacy, and industry-leading training, CompTIA empowers individuals to launch and advance their tech careers while helping organizations build secure, highly-skilled digital workforces.',
    tags: ['CompTIA Security+'],
  },
];
