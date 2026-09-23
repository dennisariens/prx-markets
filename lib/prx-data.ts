export type RecoveryType = 'Plastic' | 'Carbon' | 'Ocean' | 'Forests';

export type Project = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  place: string;
  country: string;
  region: string;
  type: RecoveryType;
  unit: string;
  standard: string;
  available: number;
  availableLabel: string;
  price: number;
  change: string;
  className: string;
  coordinates: string;
  headline: string;
  description: string;
  methodology: string;
  evidence: string;
  recoveredToDate: string;
  verifiedEvents: number;
  evidenceFiles: number;
  lastVerification: string;
  status: 'ACTIVE';
};

export type RecoveryRecord = {
  id: string;
  projectSlug: string;
  projectName: string;
  owner: string;
  quantity: number;
  unit: string;
  funded: string;
  verified: string;
  status: 'VERIFIED' | 'RETIRED';
  evidenceDocuments: number;
  verificationCount: number;
  evidenceHash: string;
  claim: string;
};

export const projects: Project[] = [
  {
    id: 'PRX-PH-001',
    slug: 'pasig-river',
    name: 'Pasig River Recovery',
    shortName: 'Pasig River',
    place: 'Metro Manila · Philippines',
    country: 'Philippines',
    region: 'Asia Pacific',
    type: 'Plastic',
    unit: 'tonne',
    standard: 'PPRS',
    available: 4218,
    availableLabel: '4,218 t',
    price: 92,
    change: '+2.4%',
    className: 'river',
    coordinates: '14.5995° N / 120.9842° E',
    headline: 'Intercepting plastic before it reaches Manila Bay.',
    description:
      'The project funds collection, sorting and responsible processing of plastic waste recovered from the Pasig River system. Recovery events are documented, independently checked and issued to the PRX registry as traceable units.',
    methodology: 'Plastic Recovery & Recycling Standard',
    evidence: 'Collection · weight · chain of custody',
    recoveredToDate: '12,480 t',
    verifiedEvents: 184,
    evidenceFiles: 2491,
    lastVerification: '14 SEP 2026',
    status: 'ACTIVE',
  },
  {
    id: 'PRX-ID-014',
    slug: 'katingan-forest',
    name: 'Katingan Forest Restoration',
    shortName: 'Katingan Forest',
    place: 'Central Kalimantan · Indonesia',
    country: 'Indonesia',
    region: 'Asia Pacific',
    type: 'Carbon',
    unit: 'tCO₂',
    standard: 'VCS + CCB',
    available: 11600,
    availableLabel: '11,600 tCO₂',
    price: 28,
    change: '−0.8%',
    className: 'forest',
    coordinates: '1.9147° S / 113.1675° E',
    headline: 'Protecting peat forest through durable local stewardship.',
    description:
      'Long-term forest protection prevents peatland degradation while supporting community livelihoods and biodiversity. Monitoring reports connect each issued unit to measured and independently reviewed outcomes.',
    methodology: 'Verified Carbon Standard + Climate, Community & Biodiversity',
    evidence: 'Satellite monitoring · field plots · audit reports',
    recoveredToDate: '48,210 tCO₂',
    verifiedEvents: 62,
    evidenceFiles: 817,
    lastVerification: '09 SEP 2026',
    status: 'ACTIVE',
  },
  {
    id: 'PRX-IN-008',
    slug: 'clean-coast-tamil-nadu',
    name: 'Clean Coast Tamil Nadu',
    shortName: 'Clean Coast',
    place: 'Tamil Nadu · India',
    country: 'India',
    region: 'Asia Pacific',
    type: 'Ocean',
    unit: 'tonne',
    standard: 'OBP',
    available: 1180,
    availableLabel: '1,180 t',
    price: 118,
    change: '+1.1%',
    className: 'coast',
    coordinates: '11.1271° N / 78.6569° E',
    headline: 'Recovering coastal plastic before it enters the Indian Ocean.',
    description:
      'Local recovery teams collect and sort ocean-bound material from vulnerable coastal areas. Weight tickets, processing receipts and chain-of-custody evidence are assembled into auditable recovery batches.',
    methodology: 'Ocean Bound Plastic Certification Standard',
    evidence: 'Collection logs · weight tickets · processor receipts',
    recoveredToDate: '3,840 t',
    verifiedEvents: 96,
    evidenceFiles: 1304,
    lastVerification: '18 SEP 2026',
    status: 'ACTIVE',
  },
  {
    id: 'PRX-BR-021',
    slug: 'atlantic-forest-corridor',
    name: 'Atlantic Forest Corridor',
    shortName: 'Atlantic Forest',
    place: 'Bahia · Brazil',
    country: 'Brazil',
    region: 'Latin America',
    type: 'Forests',
    unit: 'hectare',
    standard: 'Ecological',
    available: 8940,
    availableLabel: '8,940 ha',
    price: 41,
    change: '+0.3%',
    className: 'forest2',
    coordinates: '12.5797° S / 41.7007° W',
    headline: 'Reconnecting fragmented habitat across Brazil’s Atlantic Forest.',
    description:
      'Native forest restoration links isolated habitat while improving water retention and creating local restoration work. Each funded hectare is mapped, monitored and reviewed against the project methodology.',
    methodology: 'Native Ecosystem Restoration Protocol',
    evidence: 'Geospatial boundary · planting logs · survival surveys',
    recoveredToDate: '21,630 ha',
    verifiedEvents: 41,
    evidenceFiles: 596,
    lastVerification: '02 SEP 2026',
    status: 'ACTIVE',
  },
];

export const recoveryRecords: RecoveryRecord[] = [
  {
    id: 'PRX-26-004218',
    projectSlug: 'pasig-river',
    projectName: 'Pasig River Recovery',
    owner: 'Example Business BV',
    quantity: 10,
    unit: 'tonnes',
    funded: '16 SEP 2026',
    verified: '18 SEP 2026',
    status: 'VERIFIED',
    evidenceDocuments: 12,
    verificationCount: 1,
    evidenceHash: '0x92F4-7A12-DC81',
    claim: 'Financed 10.00 tonnes of verified plastic recovery from the Pasig River system.',
  },
  {
    id: 'PRX-26-004174',
    projectSlug: 'clean-coast-tamil-nadu',
    projectName: 'Clean Coast Tamil Nadu',
    owner: 'Northshore Goods Ltd',
    quantity: 24.5,
    unit: 'tonnes',
    funded: '11 SEP 2026',
    verified: '18 SEP 2026',
    status: 'RETIRED',
    evidenceDocuments: 18,
    verificationCount: 2,
    evidenceHash: '0x81C2-19BF-3E07',
    claim: 'Financed and retired 24.50 tonnes of verified ocean-bound plastic recovery.',
  },
  {
    id: 'PRX-26-004091',
    projectSlug: 'katingan-forest',
    projectName: 'Katingan Forest Restoration',
    owner: 'Atelier North GmbH',
    quantity: 120,
    unit: 'tCO₂',
    funded: '03 SEP 2026',
    verified: '09 SEP 2026',
    status: 'VERIFIED',
    evidenceDocuments: 9,
    verificationCount: 1,
    evidenceHash: '0x4AD9-620E-B551',
    claim: 'Financed 120 tCO₂ of independently verified peat forest protection.',
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRecord(id: string) {
  return recoveryRecords.find((record) => record.id.toLowerCase() === id.toLowerCase());
}
