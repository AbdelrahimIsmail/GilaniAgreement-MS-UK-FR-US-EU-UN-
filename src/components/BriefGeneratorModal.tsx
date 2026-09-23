import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText, Send, Sparkles, Hash, SlidersHorizontal } from 'lucide-react';
import { StakeholderId } from '../types';
import { STAKEHOLDERS } from '../data/treatyData';
import { NumberingStyle, getAlphabetLetter } from '../utils/numbering';

interface BriefGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultStakeholder?: StakeholderId | 'ALL';
}

interface DocumentClause {
  clauseIndex: number;
  title: string;
  text: string;
  subClauses: {
    subClauseIndex: number;
    title: string;
    text: string;
  }[];
}

interface DocumentSection {
  sectionIndex: number;
  title: string;
  clauses: DocumentClause[];
}

export const BriefGeneratorModal: React.FC<BriefGeneratorModalProps> = ({
  isOpen,
  onClose,
  defaultStakeholder = 'ALL'
}) => {
  if (!isOpen) return null;

  const [selectedStakeholders, setSelectedStakeholders] = useState<StakeholderId[]>(
    defaultStakeholder === 'ALL'
      ? ['MS', 'UK', 'FR', 'US', 'EU', 'UN']
      : [defaultStakeholder]
  );
  const [priorityTopic, setPriorityTopic] = useState<'expiration' | 'humanitarian' | 'accountability' | 'self_determination' | 'comprehensive'>('expiration');
  const [numberingStyle, setNumberingStyle] = useState<NumberingStyle>('decimal');
  const [classification, setClassification] = useState<string>('DIPLOMATIC MEMORANDUM / PUBLIC RECORD');
  const [copied, setCopied] = useState(false);

  const toggleStakeholder = (id: StakeholderId) => {
    if (selectedStakeholders.includes(id)) {
      if (selectedStakeholders.length > 1) {
        setSelectedStakeholders(selectedStakeholders.filter((s) => s !== id));
      }
    } else {
      setSelectedStakeholders([...selectedStakeholders, id]);
    }
  };

  const formatSectionHeader = (secIdx: number, title: string, style: NumberingStyle): string => {
    switch (style) {
      case 'decimal':
        return `${secIdx}.0 ${title.toUpperCase()}`;
      case 'legal':
        return `SECTION ${secIdx}: ${title.toUpperCase()}`;
      case 'diplomatic':
        return `PART ${secIdx} — ${title.toUpperCase()}`;
    }
  };

  const formatClauseHeader = (secIdx: number, clIdx: number, title: string, style: NumberingStyle): string => {
    switch (style) {
      case 'decimal':
        return `  ${secIdx}.${clIdx} ${title}`;
      case 'legal':
        return `  § ${secIdx}.${clIdx} ${title}`;
      case 'diplomatic':
        return `  Clause ${secIdx}.${clIdx}: ${title}`;
    }
  };

  const formatSubClauseLine = (secIdx: number, clIdx: number, subIdx: number, title: string, text: string, style: NumberingStyle): string => {
    switch (style) {
      case 'decimal':
        return `    ${secIdx}.${clIdx}.${subIdx} [${title}]: ${text}`;
      case 'legal':
        return `    § ${secIdx}.${clIdx}(${getAlphabetLetter(subIdx)}) [${title}]: ${text}`;
      case 'diplomatic':
        return `    Sub-clause ${secIdx}.${clIdx}-${getAlphabetLetter(subIdx)} (${title}): ${text}`;
    }
  };

  const getStructuredDocument = (): DocumentSection[] => {
    // Build structured sections based on priority topic
    const sections: DocumentSection[] = [];

    // SECTION 1: PREAMBLE & HISTORICAL SIGNATORY BASIS
    const preambleClauses: DocumentClause[] = [
      {
        clauseIndex: 1,
        title: 'Historical Signatory Authority & Tripartite Accord',
        text: 'The High Contracting Parties recognize the sovereign authority of the Gilani Agreement concluded in late 1919 between Sultan Bahr al-Din (Andoka), the British Sudan Administration, and French Equatorial Africa.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Sovereign Signatories',
            text: 'Dar Masalit was engaged as an independent indigenous Sultanate possessing recognized Hakura domains and sovereign contracting capacity.'
          },
          {
            subClauseIndex: 2,
            title: 'Centenary Horizon Benchmark',
            text: 'The operational covenant was established with a 100-year operational duration (1919–2019), reaching definitive expiration in late 2019 without constitutional renewal.'
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Customary Frontier Inviolability & Humanitarian Arteries',
        text: 'Affirming Article 3 of the 1919 Gilani Agreement consecrating unhindered cross-border transit between Adré (Ouaddaï, Chad) and El Geneina (Dar Masalit).',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Adré Corridor Sanctity',
            text: 'The Adré–El Geneina transit line constitutes an established treaty passage guaranteed under international humanitarian law.'
          },
          {
            subClauseIndex: 2,
            title: 'UNSC Resolution 2736 Adherence',
            text: 'Compliance with UN Security Council Resolution 2736 (2024) mandating immediate civilian protection and unrestricted humanitarian passage.'
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'International Legal Norms & Universal Accountability',
        text: 'Recalling United Nations Security Council Resolution 1593 (2005) referring the situation in Darfur to the International Criminal Court (ICC).',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Rome Statute Mandate',
            text: 'State obligations to cooperate unconditionally with the ICC Prosecutor in investigating ethnic cleansing, war crimes, and crimes against humanity.'
          },
          {
            subClauseIndex: 2,
            title: 'Multilateral Atrocity Determinations',
            text: 'Formal 2023 determinations by the US State Department and EU Council regarding targeted genocidal campaigns against the Masalit population.'
          }
        ]
      }
    ];

    sections.push({
      sectionIndex: 1,
      title: 'Legal & Historical Preamble',
      clauses: preambleClauses
    });

    // SECTION 2: OPERATIVE FINDINGS & TREATY ANALYSIS
    const findingsClauses: DocumentClause[] = [];

    if (priorityTopic === 'expiration' || priorityTopic === 'comprehensive') {
      findingsClauses.push({
        clauseIndex: 1,
        title: 'Centenary Expiration and Constitutional Vacuum',
        text: 'The 100-year treaty period established in 1919 reached its definitive expiration in late 2019 without constitutional renewal or Masalit plebiscite.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Absence of Democratic Re-ratification',
            text: 'Neither the Khartoum central authority nor colonial successors conducted sovereign consultations to extend the 1919 integration pact.'
          },
          {
            subClauseIndex: 2,
            title: 'Doctrine of Clausula Rebus Sic Stantibus',
            text: 'Under VCLT Article 62, state-sponsored campaigns of extermination destroy the essential factual foundation of the 1919 integration compact.'
          },
          {
            subClauseIndex: 3,
            title: 'Sultan Saad Bahr al-Din Declaration (2021)',
            text: 'The legitimate customary leadership has formally reserved its sovereign right of self-determination under UN Charter Article 1(2).'
          }
        ]
      });
    }

    if (priorityTopic === 'humanitarian' || priorityTopic === 'comprehensive') {
      findingsClauses.push({
        clauseIndex: priorityTopic === 'comprehensive' ? 2 : 1,
        title: 'Cross-Border Displacement & Humanitarian Interdiction',
        text: 'Catastrophic forced displacement across the Chad–Sudan border threatens the survival of the Masalit people.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Displacement Baseline in Eastern Chad',
            text: 'Over 600,000 Masalit and indigenous civilians remain displaced in the Ouaddaï border region, dependent upon cross-border relief.'
          },
          {
            subClauseIndex: 2,
            title: 'Unlawful Blockades of the Adré Route',
            text: 'Military and paramilitary interference with food, water, and medical convoys directly violates Common Article 3 of the Geneva Conventions.'
          }
        ]
      });
    }

    if (priorityTopic === 'accountability' || priorityTopic === 'comprehensive') {
      findingsClauses.push({
        clauseIndex: priorityTopic === 'comprehensive' ? 3 : (findingsClauses.length + 1),
        title: 'Systematic Erasure of Masalit Sultanate Leadership',
        text: 'Evidence collected by the UN Panel of Experts and the ICC confirms targeted executions aimed at eradicating indigenous governance.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Assassination of Customary Elders & Cadis',
            text: 'Deliberate targeting of tribal notables, omindas, and legal archivists to dissolve the legal continuity of Dar Masalit.'
          },
          {
            subClauseIndex: 2,
            title: 'Expropriation of Customary Hakuras',
            text: 'Systematic burning of villages and demographic colonization of ancestral Masalit lands in violation of international law.'
          }
        ]
      });
    }

    if (priorityTopic === 'self_determination') {
      findingsClauses.push({
        clauseIndex: 1,
        title: 'Inherent Indigenous Right to Self-Determination',
        text: 'The Masalit nation meets all objective criteria for remedial self-determination under established international jurisprudence.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Distinct Indigenous Nationhood',
            text: 'Unbroken historical monarchy, distinct language, ancestral Hakura system, and sovereign treaty capacity recognized by European powers.'
          },
          {
            subClauseIndex: 2,
            title: 'Remedial Secession Doctrine',
            text: 'Where an administering state subjects an indigenous nation to systematic destruction, remedial independence becomes a recognized remedy of last resort.'
          }
        ]
      });
    }

    // Ensure at least one clause
    if (findingsClauses.length === 0) {
      findingsClauses.push({
        clauseIndex: 1,
        title: 'Treaty Breaches & Sovereign State Crisis',
        text: 'Multilateral findings demonstrate irreversible breakdown of the 1919 protective covenant.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'State Protection Collapse',
            text: 'Total failure of sovereign protection triggers international guarantor scrutiny.'
          }
        ]
      });
    }

    sections.push({
      sectionIndex: 2,
      title: 'Current Findings & Legal Analysis',
      clauses: findingsClauses
    });

    // SECTION 3: RECOMMENDED MULTILATERAL DIPLOMATIC ACTIONS
    const actionClauses: DocumentClause[] = [
      {
        clauseIndex: 1,
        title: 'Convocation of the MS-UK-FR-US-EU-UN Consultative Forum',
        text: 'Immediate assembly of the original treaty co-signatories (UK, FR) and contemporary guarantors (US, EU, UN) alongside the Masalit Sultanate.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Tripartite-Plus Diplomatic Conference',
            text: 'Convene an extraordinary summit in London, Paris, or Geneva to review the post-centenary status of Dar Masalit.'
          },
          {
            subClauseIndex: 2,
            title: 'Direct Masalit Sultanate Standing',
            text: 'Guarantee autonomous representation for the Council of the Masalit Sultanate in all international peace talks and donor conferences.'
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Permanent Guarantee of the Adré Humanitarian Corridor',
        text: 'Enforce uninterrupted cross-border access between Eastern Chad and El Geneina under international observation.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Multilateral Monitoring Mission',
            text: 'Deploy an international civil monitoring presence at the Adré frontier crossing point to prevent military obstruction.'
          },
          {
            subClauseIndex: 2,
            title: 'Paris Conference Pledges Execution',
            text: 'Accelerate the disbursement of humanitarian aid pledges to support displaced communities in Abéché, Adré, and West Darfur.'
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Enforcement of Universal Accountability & Sanctions',
        text: 'Coordinated implementation of multilateral sanctions and legal accountability mechanisms.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Coordinated Restrictive Sanctions',
            text: 'Imposition of synchronized EU, US, and UK asset freezes and travel bans on paramilitary leaders and illicit gold conduits.'
          },
          {
            subClauseIndex: 2,
            title: 'Execution of ICC Arrest Warrants',
            text: 'Full multilateral cooperation with ICC Prosecutor Karim Khan in executing warrants for atrocities committed in El Geneina.'
          }
        ]
      },
      {
        clauseIndex: 4,
        title: 'Customary Land Restitution & Protection Commission',
        text: 'Establishment of an international legal apparatus to reverse forced demographic engineering.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Hakura Property Restitution Tribunal',
            text: 'Form a specialized commission applying the Pinheiro Principles to restore ancestral estates to displaced Masalit owners.'
          },
          {
            subClauseIndex: 2,
            title: 'International Civilian Protection Mandate',
            text: 'Evaluate options under Chapter VII of the UN Charter for deploying civilian protection personnel to prevent further massacres.'
          }
        ]
      }
    ];

    sections.push({
      sectionIndex: 3,
      title: 'Mandated Multilateral Actions & Recommendations',
      clauses: actionClauses
    });

    return sections;
  };

  const getBriefContent = (): string => {
    const dateStr = 'September 19, 2026';
    const refNum = `DIP/MS-UK-FR-US-EU-UN/2026-${Math.floor(Math.random() * 899 + 100)}`;
    const addressedTo = selectedStakeholders.map((s) => `${s} (${STAKEHOLDERS[s]?.name})`).join('\n   • ');

    const sections = getStructuredDocument();

    const formattedSections = sections.map((sec) => {
      const header = `--------------------------------------------------------------------------------\n${formatSectionHeader(sec.sectionIndex, sec.title, numberingStyle)}\n--------------------------------------------------------------------------------`;
      
      const clausesText = sec.clauses.map((cl) => {
        const clHeader = formatClauseHeader(sec.sectionIndex, cl.clauseIndex, cl.title, numberingStyle);
        const clBody = `    "${cl.text}"`;
        
        const subClausesText = cl.subClauses.map((sub) => {
          return formatSubClauseLine(sec.sectionIndex, cl.clauseIndex, sub.subClauseIndex, sub.title, sub.text, numberingStyle);
        }).join('\n');

        return `${clHeader}\n${clBody}\n${subClausesText}`;
      }).join('\n\n');

      return `${header}\n\n${clausesText}`;
    }).join('\n\n');

    return `================================================================================
${classification}
================================================================================
DOCUMENT REFERENCE: ${refNum}
DATE: ${dateStr}
SUBJECT: DIPLOMATIC & LEGAL MEMORANDUM CONCERNING THE 1919 GILANI AGREEMENT 
         AND THE MULTILATERAL FRAMEWORK (MS-UK-FR-US-EU-UN)
NUMBERING SCHEME: AUTOMATIC HIERARCHICAL (${numberingStyle.toUpperCase()})

ADDRESSED TO THE HIGH CONTRACTING PARTIES & MULTILATERAL GUARANTORS:
   • ${addressedTo}

${formattedSections}

--------------------------------------------------------------------------------
ISSUED BY ORDER OF THE MULTILATERAL STUDY GROUP ON THE GILANI AGREEMENT
IN ACCORDANCE WITH THE PRINCIPLES OF THE UN CHARTER AND CUSTOMARY TREATY LAW.
CODIFIED WITH AUTOMATIC CLAUSE & SUB-CLAUSE NUMBERING FOR ALL PARTICIPATING BODIES.
================================================================================`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getBriefContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-stone-900 border border-stone-700 rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden text-stone-100 animate-in fade-in duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 bg-stone-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <span>Multilateral Diplomatic Brief Generator</span>
                <span className="text-xs font-mono font-normal text-amber-400 bg-amber-950/80 border border-amber-800/60 px-2 py-0.5 rounded">
                  MS-UK-FR-US-EU-UN
                </span>
              </h2>
              <p className="text-xs text-stone-400 font-mono">
                Gilani Agreement Framework • Automated Hierarchical Clause & Sub-clause Numbering
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Controls */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Stakeholder Selection */}
          <div>
            <label className="text-xs font-mono uppercase text-amber-400 font-bold block mb-2">
              Select Recipient High Contracting Parties & Guarantors:
            </label>
            <div className="flex flex-wrap gap-2">
              {(['MS', 'UK', 'FR', 'US', 'EU', 'UN'] as StakeholderId[]).map((id) => {
                const isSelected = selectedStakeholders.includes(id);
                return (
                  <button
                    key={id}
                    onClick={() => toggleStakeholder(id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-400'
                        : 'bg-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <span>{id}</span>
                    <span className="font-normal font-sans text-[11px] opacity-80">
                      ({id === 'MS' ? 'Masalit' : id === 'UK' ? 'UK FCDO' : id === 'FR' ? 'France' : id === 'US' ? 'US State' : id === 'EU' ? 'EEAS' : 'UNSC'})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Automatic Numbering Scheme & Priority Focus Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-stone-950/60 p-3.5 rounded-lg border border-stone-800">
            {/* Automatic Numbering Style */}
            <div>
              <label className="text-xs font-mono uppercase text-amber-400 font-bold flex items-center gap-1 mb-1.5">
                <Hash className="w-3.5 h-3.5" />
                <span>Automatic Numbering Scheme:</span>
              </label>
              <select
                value={numberingStyle}
                onChange={(e) => setNumberingStyle(e.target.value as NumberingStyle)}
                className="w-full bg-stone-800 border border-stone-700 rounded-md px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
              >
                <option value="decimal">Standard Decimal (1.0 → 1.1 → 1.1.1)</option>
                <option value="legal">Legal Statutory (§ 1 → § 1.1 → § 1.1(a))</option>
                <option value="diplomatic">Treaty Protocol (Part I → Clause 1.1 → Sub-cl. 1.1-a)</option>
              </select>
              <span className="text-[10px] text-stone-500 mt-1 block">
                Formats all levels of clauses automatically
              </span>
            </div>

            {/* Priority Focus */}
            <div>
              <label className="text-xs font-mono uppercase text-stone-400 font-bold flex items-center gap-1 mb-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Priority Focus Area:</span>
              </label>
              <select
                value={priorityTopic}
                onChange={(e) => setPriorityTopic(e.target.value as any)}
                className="w-full bg-stone-800 border border-stone-700 rounded-md px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="expiration">100-Year Expiration & Rebus Sic Stantibus</option>
                <option value="humanitarian">Adré Cross-Border Transit & Humanitarian Corridor</option>
                <option value="accountability">Atrocity Accountability & ICC War Crimes</option>
                <option value="self_determination">Right to Self-Determination (UN Charter Art. 1(2))</option>
                <option value="comprehensive">Full Comprehensive Dossier (All Mandates)</option>
              </select>
            </div>

            {/* Classification */}
            <div>
              <label className="text-xs font-mono uppercase text-stone-400 font-bold block mb-1.5">
                Classification Header:
              </label>
              <select
                value={classification}
                onChange={(e) => setClassification(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 rounded-md px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="DIPLOMATIC MEMORANDUM / PUBLIC RECORD">DIPLOMATIC MEMORANDUM / PUBLIC RECORD</option>
                <option value="LEGAL BRIEF / CONFIDENTIAL CONSULTATION">LEGAL BRIEF / CONFIDENTIAL CONSULTATION</option>
                <option value="UN SECURITY COUNCIL CIRCULATION MEMO">UN SECURITY COUNCIL CIRCULATION MEMO</option>
              </select>
            </div>
          </div>

          {/* Numbering Level Legend */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-stone-400 bg-stone-900 px-3 py-2 rounded border border-stone-800">
            <span className="text-amber-400 font-bold uppercase">Active Numbering Hierarchy:</span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
              Level 1 (Section): {numberingStyle === 'decimal' ? '1.0' : numberingStyle === 'legal' ? 'SECTION 1' : 'PART 1'}
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
              Level 2 (Clause): {numberingStyle === 'decimal' ? '1.1' : numberingStyle === 'legal' ? '§ 1.1' : 'Clause 1.1'}
            </span>
            <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
              Level 3 (Sub-clause): {numberingStyle === 'decimal' ? '1.1.1' : numberingStyle === 'legal' ? '§ 1.1(a)' : 'Sub-clause 1.1-a'}
            </span>
          </div>

          {/* Output Document Preview */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono uppercase text-stone-400 font-bold flex items-center gap-1.5">
                <span>Codified Diplomatic Document Output</span>
                <span className="text-[10px] text-amber-400 font-normal">({numberingStyle} formatting)</span>
              </span>
              <span className="text-[11px] text-stone-500 font-mono">Monospace Format with Automated Numbering</span>
            </div>
            <pre className="bg-stone-950 p-4 rounded-lg border border-stone-800 text-stone-300 font-mono text-[11px] leading-relaxed overflow-x-auto whitespace-pre-wrap select-all max-h-80">
              {getBriefContent()}
            </pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-md text-xs flex items-center gap-1.5 transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Numbered Document!' : 'Copy Numbered Document'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md text-xs flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Memo</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-md text-xs font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
