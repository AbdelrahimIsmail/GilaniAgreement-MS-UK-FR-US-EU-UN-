export type StakeholderId = 'MS' | 'UK' | 'FR' | 'US' | 'EU' | 'UN';

export interface Stakeholder {
  id: StakeholderId;
  code: string;
  name: string;
  nativeTitle: string;
  roleType: 'Signatory Sovereign' | 'Colonial Co-Signatory' | 'Border Delimitation Co-Signatory' | 'Global Guarantor & Sanctions' | 'Regional Multilateral Body' | 'International Legal Authority';
  summary: string;
  historicalPactRole: string;
  modernMandate: string;
  legalStanding: string;
  currentStanceOnGilani: string;
  keyResolutionsAndInstruments: string[];
  diplomaticColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  activeFigures: string[];
  coreInterests: string[];
}

export interface TreatySubClause {
  subClauseIndex: number;
  title: string;
  text: string;
  legalCitation?: string;
  stakeholders?: StakeholderId[];
}

export interface TreatyClause {
  clauseIndex: number;
  title: string;
  text: string;
  subClauses: TreatySubClause[];
}

export interface TreatyArticle {
  number: number;
  title: string;
  clauseSummary: string;
  originalTextSummary: string;
  colonialIntent: string;
  sultanateUnderstanding: string;
  centenaryStatus: 'Expired (2019)' | 'Contested Succession' | 'Perpetual Border' | 'Violated Sovereign Guarantee';
  legalImplication: string;
  relevantStakeholders: StakeholderId[];
  clauses?: TreatyClause[];
}

export interface TimelineMilestone {
  id: string;
  year: number;
  exactDate?: string;
  era: 'Pre-Colonial Sovereign Era' | 'Tripartite Negotiation & Accord' | 'Condominium & Administrative Era' | 'Post-Independence & Marginalization' | 'Centenary Expiration & Modern Conflict';
  title: string;
  location: string;
  description: string;
  stakeholdersInvolved: StakeholderId[];
  legalPrinciple: string;
  keyQuote?: string;
  sourceDoc: string;
}

export interface LegalDoctrine {
  id: string;
  title: string;
  latinName?: string;
  category: 'Treaty Law' | 'Territorial Sovereignty' | 'Human Rights & Atrocity Prevention' | 'Self-Determination';
  definition: string;
  applicationToGilani: string;
  argumentsProMasalit: string;
  counterArguments: string;
  internationalCitations: string[];
}

export interface DiplomaticAction {
  id: string;
  stakeholder: StakeholderId;
  date: string;
  type: 'Sanction' | 'Resolution' | 'Declaration' | 'Humanitarian Corridor' | 'ICC Investigation' | 'Parliamentary Action';
  title: string;
  summary: string;
  significance: string;
  referenceDoc: string;
  status: 'Enforced' | 'Active Investigation' | 'Pending Enforcement' | 'Diplomatic Precedent';
}

export interface GeographicLocation {
  id: string;
  name: string;
  arabicName?: string;
  type: 'Capital / Historic Seat' | 'Border Tripoint / Post' | 'Humanitarian Sanctuary' | 'Demarcated Sector';
  description: string;
  coordinates: { lat: number; lng: number };
  treatyRelevance: string;
}
