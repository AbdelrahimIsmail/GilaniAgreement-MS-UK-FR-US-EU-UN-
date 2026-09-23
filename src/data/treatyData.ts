import { Stakeholder, TreatyArticle, TimelineMilestone, LegalDoctrine, DiplomaticAction, GeographicLocation } from '../types';

export const STAKEHOLDERS: Record<string, Stakeholder> = {
  MS: {
    id: 'MS',
    code: 'MS',
    name: 'Masalit Sultanate (Dar Andoka / Dar Masalit)',
    nativeTitle: 'سلطنة دار مساليت (دار أندوكا)',
    roleType: 'Signatory Sovereign',
    summary: 'Sovereign indigenous sultanate centered in El Geneina. Signatory to the 1919 Gilani Agreement with Great Britain and France, which established internal autonomy and marked borders.',
    historicalPactRole: 'Contracted directly as an independent polity under Sultan Bahr al-Din (Andoka) to preserve territorial integrity, Sharia jurisdiction, and traditional governance under a conditional 100-year framework.',
    modernMandate: 'Led by Sultan Saad Abd al-Rahman Bahr al-Din. In 2021-2024 invoked the 2019 centenary expiration of the Gilani Agreement, demanding international self-determination, protection under R2P, and accountability for genocidal violence.',
    legalStanding: 'Original contracting sovereign; asserts breach of British guarantor pact, failure of Sudanese state succession, and re-emergence of unextinguished sovereign rights after 100-year duration.',
    currentStanceOnGilani: 'The 100-year Gilani Agreement reached expiration in 2019. The catastrophic failure of Sudan to protect the Masalit people nullifies condominium integration, entitling Dar Masalit to self-determination or re-attachment to Chad.',
    keyResolutionsAndInstruments: [
      '1919 Gilani Tripartite Agreement (Dar Masalit - UK - France)',
      '1922 El Geneina Administrative Convention',
      '2021 Sultan Saad Bahr al-Deen Declaration of Self-Determination',
      '2023 Geneva Memorandum on Dar Masalit Protection to UN/EU/US'
    ],
    diplomaticColor: 'emerald',
    badgeBg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    badgeBorder: 'border-emerald-500',
    badgeText: 'text-emerald-700 dark:text-emerald-300',
    activeFigures: [
      'Sultan Saad Abd al-Rahman Bahr al-Din (Current Sultan of Dar Masalit)',
      'Historic: Sultan Bahr al-Din "Andoka" (1919 Signatory)',
      'Historic: Sultan Taj al-Din (Hero of 1910 Battle of Dirweish against French forces)'
    ],
    coreInterests: [
      'Physical survival and prevention of ethnic cleansing in West Darfur',
      'Restoration of customary land tenure (Hakura system)',
      'International recognition of the 100-year Gilani Agreement expiration',
      'ICC trials for RSF/Janjaweed commanders responsible for El Geneina massacres'
    ]
  },
  UK: {
    id: 'UK',
    code: 'UK',
    name: 'United Kingdom (His Majesty’s Government / FCDO)',
    nativeTitle: 'United Kingdom of Great Britain & Northern Ireland',
    roleType: 'Colonial Co-Signatory',
    summary: 'Original colonial co-signatory to the 1919 Gilani Agreement via the Anglo-Egyptian Sudan Government. Current UN Security Council penholder on Sudan.',
    historicalPactRole: 'Negotiated by British civil-military authorities (Col. Savile, Hugh Boustead) to secure the western frontier of Sudan, absorb Dar Masalit peacefully into the Condominium, and divide spheres of influence with France.',
    modernMandate: 'Acts as UNSC Penholder drafting resolutions on Sudan (e.g., UNSC 2724, 2736); oversees sanctions, humanitarian assistance via FCDO, and historical archival records at Kew (FO 371).',
    legalStanding: 'Former administering colonial power; bound by customary international obligations regarding colonial boundary documentation and historical protectorate commitments.',
    currentStanceOnGilani: 'Recognizes historical treaty archive at the National Archives; officially adheres to post-colonial sovereign boundaries (uti possidetis juris) while actively prosecuting human rights abuses through targeted FCDO sanctions and ICC referral support.',
    keyResolutionsAndInstruments: [
      'Anglo-French Convention of 1898 & 1899 Declarations',
      '1919 Gilani Agreement (Colonial Office & Sudan Government)',
      'UNSC Resolution 1593 (Co-sponsor, ICC Referral 2005)',
      'UNSC Resolution 2736 (2024 El Fasher & Darfur Protection Penholder)'
    ],
    diplomaticColor: 'blue',
    badgeBg: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
    badgeBorder: 'border-blue-500',
    badgeText: 'text-blue-700 dark:text-blue-300',
    activeFigures: [
      'UK Foreign Secretary & Africa Minister (FCDO)',
      'UK Permanent Representative to the UN in New York',
      'British Ambassador to Sudan (operating in evacuation post)'
    ],
    coreInterests: [
      'Ceasefire enforcement and humanitarian corridors (Adré crossing)',
      'Accountability via International Criminal Court (ICC)',
      'Preventing regional contagion across Chad, CAR, and the Sahel',
      'Upholding multilateral international rules-based order'
    ]
  },
  FR: {
    id: 'FR',
    code: 'FR',
    name: 'France (French Republic / Quai d’Orsay)',
    nativeTitle: 'République française',
    roleType: 'Border Delimitation Co-Signatory',
    summary: 'Colonial co-signatory to the 1919 Gilani Agreement via French Equatorial Africa (Territoire Militaire du Tchad). Primary guarantor of Chad’s territorial integrity and border demarcation.',
    historicalPactRole: 'Following fierce military confrontations with Dar Masalit (Battles of Kirding and Dirweish, 1910), France agreed in 1919 at Gilani to demarcate the international border between French Chad (Ouaddaï) and British Dar Masalit.',
    modernMandate: 'Hosts international humanitarian conferences on Sudan and Chad (Paris Conferences). Strong military and security partnership with Chad, managing cross-border refugee stabilization at Adré.',
    legalStanding: 'Co-signatory to the tripartite border delimitation; keeper of colonial geographic surveys and treaty maps delineating Ouaddaï-Dar Masalit border posts.',
    currentStanceOnGilani: 'Emphasizes regional border stability and African Union border sanctity, while maintaining vital lifeline support for the 600,000+ Masalit refugees sheltered across the border in eastern Chad.',
    keyResolutionsAndInstruments: [
      '1919 Franco-British Declaration on Central Africa',
      '1919 Gilani Border Demarcation Protocol',
      '1924 Paris Boundary Delimitation Treaty',
      '2024 Paris International Conference on Sudan and Neighboring Countries'
    ],
    diplomaticColor: 'indigo',
    badgeBg: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
    badgeBorder: 'border-indigo-500',
    badgeText: 'text-indigo-700 dark:text-indigo-300',
    activeFigures: [
      'Minister for Europe and Foreign Affairs (Quai d’Orsay)',
      'French Special Envoy for the Horn of Africa',
      'Permanent Representative of France to the UN'
    ],
    coreInterests: [
      'Preservation of stability in Chad (Adré / Abéché security axis)',
      'Ensuring compliance with UN arms embargoes in Darfur',
      'Humanitarian relief and emergency logistics for displaced Masalit',
      'Combating transnational mercenary networks and illicit gold mining'
    ]
  },
  US: {
    id: 'US',
    code: 'US',
    name: 'United States (US Department of State & USAID)',
    nativeTitle: 'United States of America',
    roleType: 'Global Guarantor & Sanctions',
    summary: 'Primary global diplomatic mediator, key initiator of atrocity determinations, and principal financial supporter of humanitarian and accountability mechanisms.',
    historicalPactRole: 'Witness to modern Sudanese peace accords (2006 Darfur Peace Agreement, 2020 Juba Agreement); diplomatic observer of historical minority protectorates.',
    modernMandate: 'Formally determined in December 2023 that the RSF committed crimes against humanity and ethnic cleansing against the Masalit; imposed Magnitsky and OFAC sanctions on key perpetrators; led ALPS peace talks.',
    legalStanding: 'Signatory to Genocide Convention; enforcing international sanctions and War Crimes Rewards Program regarding El Geneina mass atrocities.',
    currentStanceOnGilani: 'Acknowledges the deep historical grievances and special status of the Masalit Sultanate; prioritizes an immediate cessation of hostilities, unhindered humanitarian access via Adré, and transitional justice.',
    keyResolutionsAndInstruments: [
      '2006 Darfur Peace Agreement (DPA) Witness',
      '2020 US-Sudan Bilateral Claims Settlement Act',
      'Dec 2023 US Formal Determination of War Crimes & Ethnic Cleansing in West Darfur',
      '2024 Executive Order Sanctions on RSF Commanders'
    ],
    diplomaticColor: 'rose',
    badgeBg: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30',
    badgeBorder: 'border-rose-500',
    badgeText: 'text-rose-700 dark:text-rose-300',
    activeFigures: [
      'US Secretary of State',
      'US Special Envoy for Sudan (Tom Perriello)',
      'US Ambassador to the United Nations'
    ],
    coreInterests: [
      'Dismantling RSF and SAF violence against indigenous civilian populations',
      'Guaranteeing the permanent opening of the Adré border crossing for aid',
      'Holding warlords and external sponsors legally and financially accountable',
      'Ensuring civilian representation and indigenous Masalit inclusion in peace architecture'
    ]
  },
  EU: {
    id: 'EU',
    code: 'EU',
    name: 'European Union (EEAS & European Commission)',
    nativeTitle: 'European External Action Service / Commission européenne',
    roleType: 'Regional Multilateral Body',
    summary: 'Supranational union providing major humanitarian funding, arms embargo frameworks, and targeted restrictive sanctions on Sudan belligerents.',
    historicalPactRole: 'Successor body encompassing European signatory states (UK historically, France currently); champion of international treaty compliance and human rights norms.',
    modernMandate: 'Enforces EU autonomous sanctions against RSF financiers and entities destabilizing West Darfur; funds cross-border aid in Chad; supports the International Criminal Court (ICC).',
    legalStanding: 'Bound by EU Common Foreign and Security Policy (CFSP) frameworks and international humanitarian law treaties; key party in international donor coordination.',
    currentStanceOnGilani: 'Strongly condemns the targeted killings and ethnically motivated violence against the Masalit; advocates for international protection and strict accountability while maintaining humanitarian lifelines.',
    keyResolutionsAndInstruments: [
      '1994/2004 EU Arms Embargo on Sudan',
      '2024 Council Regulation on Restrictive Measures on Sudan',
      'European Parliament Resolution 2023/2905(RSP) on Masalit Persecution',
      'EU Global Human Rights Sanctions Regime (EU Magnitsky)'
    ],
    diplomaticColor: 'amber',
    badgeBg: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/30',
    badgeBorder: 'border-amber-500',
    badgeText: 'text-amber-700 dark:text-amber-300',
    activeFigures: [
      'EU High Representative for Foreign Affairs and Security Policy',
      'EU Special Representative for the Horn of Africa',
      'European Commissioner for Crisis Management'
    ],
    coreInterests: [
      'Targeting conflict gold exploitation and illicit weapons supply chains',
      'Support for ICC Prosecutor Karim Khan’s investigation into El Geneina atrocities',
      'Civilian protection and refugee integration support in Eastern Chad',
      'Rule of law and multilateral human rights compliance'
    ]
  },
  UN: {
    id: 'UN',
    code: 'UN',
    name: 'United Nations (UNSC, OHCHR & Special Advisers)',
    nativeTitle: 'الأمم المتحدة / Organisation des Nations Unies',
    roleType: 'International Legal Authority',
    summary: 'Global custodian of international law, the UN Charter, the Genocide Convention, and the Responsibility to Protect (R2P).',
    historicalPactRole: 'Heir to the League of Nations mandates and decolonization frameworks (UN Charter Chapters XI and XII regarding self-determination and territorial integrity).',
    modernMandate: 'Investigating war crimes and genocide via the International Commission of Inquiry, Panel of Experts on the Sudan, and the International Criminal Court under UNSC Res 1593.',
    legalStanding: 'Supreme international legal forum; oversees binding Chapter VII resolutions and the International Court of Justice (ICJ).',
    currentStanceOnGilani: 'Addresses the existential threat faced by the Masalit; reports confirm systematic destruction of Masalit identity and leadership; enforces arms embargoes and mandates unhindered humanitarian access.',
    keyResolutionsAndInstruments: [
      'UN Charter Article 1(2) & Chapter XI (Right of Self-Determination)',
      'UNSC Resolution 1593 (2005) - Darfur Referral to ICC',
      'UNSC Resolution 2724 (2024) - Sudan Hostilities Ceasefire',
      'UNSC Resolution 2736 (2024) - Protection of Civilians in Darfur',
      'Reports of the UN Panel of Experts on Sudan (S/2024/65)'
    ],
    diplomaticColor: 'cyan',
    badgeBg: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
    badgeBorder: 'border-cyan-500',
    badgeText: 'text-cyan-700 dark:text-cyan-300',
    activeFigures: [
      'UN Secretary-General António Guterres',
      'UN High Commissioner for Human Rights (OHCHR)',
      'UN Special Adviser on the Prevention of Genocide (Alice Wairimu Nderitu)',
      'ICC Prosecutor Karim Khan KC'
    ],
    coreInterests: [
      'Preventing full-scale genocide and mass atrocities in Darfur',
      'Securing humanitarian corridors under International Humanitarian Law (IHL)',
      'Executing arrest warrants for war criminals at the ICC in The Hague',
      'Promoting sustainable peace with guaranteed minority rights'
    ]
  }
};

export const TREATY_ARTICLES: TreatyArticle[] = [
  {
    number: 1,
    title: 'Recognition of Sovereignty & Sovereign Boundaries',
    clauseSummary: 'The High Contracting Parties recognize the borders of Dar Masalit (Dar Andoka) as distinct from the Sultanate of Wadai (Ouaddaï under French protection) and the province of Darfur.',
    originalTextSummary: 'The boundaries between French Equatorial Africa (Chad) and Anglo-Egyptian Sudan through the territory of Sultan Bahr al-Din shall follow designated watercourses, hills, and boundary pillars agreed in the Gilani valley.',
    colonialIntent: 'Establish a rigid imperial partition line preventing French westward expansion and British eastward confrontation, neutralizing a buffer frontier.',
    sultanateUnderstanding: 'Confirmation of indigenous ancestral domain (Dar Andoka) and customary Hakura land tenure free from outside intervention.',
    centenaryStatus: 'Contested Succession',
    legalImplication: 'The physical boundary remains recognized under uti possidetis juris, but the administrative legitimacy of the central Sudanese state has dissolved through genocidal actions.',
    relevantStakeholders: ['MS', 'UK', 'FR'],
    clauses: [
      {
        clauseIndex: 1,
        title: 'Delimitation of Sovereign Domain',
        text: 'The boundary between French Chad and Anglo-Egyptian Sudan through Dar Masalit shall follow mutually verified natural monuments and boundary markers.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Wadi Kaja Watercourse Delimitation',
            text: 'The northern and western frontier shall follow the watercourses of Wadi Kaja and the granite crests established in the Gilani valley.',
            legalCitation: 'Gilani Convention Protocol (1919), Art. 1(a)',
            stakeholders: ['MS', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Darfur Provincial Separation',
            text: 'The eastern demarcation shall maintain strict separation from Darfur Province, recognizing Dar Masalit as a distinct sovereign realm rather than an annexed district.',
            legalCitation: 'FO 371/4158 Sudan Frontier Dispatch',
            stakeholders: ['MS', 'UK']
          },
          {
            subClauseIndex: 3,
            title: 'Erection of Boundary Pillars',
            text: 'Permanent stone cairns and iron pillars shall be erected jointly by commissioners of the three High Contracting Parties.',
            legalCitation: '1919 Gilani Survey Records',
            stakeholders: ['MS', 'UK', 'FR']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Demarcation Survey Protocols',
        text: 'Surveys shall be conducted jointly by boundary commissioners from the British Sudan Government, French Equatorial Africa, and the Sultanate of Dar Masalit.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Tripartite Map Certification',
            text: 'All triangulation surveys, topographical maps, and boundary registrations shall bear the seal of the Sultan alongside British and French commissioners.',
            legalCitation: 'Anglo-French Delimitation Minutes',
            stakeholders: ['MS', 'UK', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Thalweg Rule for Seasonal Wadis',
            text: 'In cases of seasonal watercourse shifts, the median thalweg agreed during the dry season of 1919 shall remain the permanent border.',
            legalCitation: 'Customary Riverine Boundary Law',
            stakeholders: ['UK', 'FR']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Preservation of Hakura Land Tenure',
        text: 'Customary communal land holdings (Hakuras) of the Masalit people are recognized as inviolable indigenous property.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Inviolability of Ancestral Estates',
            text: 'Neither colonial power nor subsequent regional administration shall expropriate or reallocate ancestral Masalit estates without sovereign consent.',
            legalCitation: 'Customary Hakura Land Code',
            stakeholders: ['MS', 'UK']
          },
          {
            subClauseIndex: 2,
            title: 'Protection from Forced Resettlement',
            text: 'Customary territory shall be protected from external demographic engineering, confiscation, or military encampment.',
            legalCitation: 'VCLT Art. 62 Material Breach Doctrine',
            stakeholders: ['MS', 'UN']
          }
        ]
      }
    ]
  },
  {
    number: 2,
    title: 'Internal Autonomous Jurisdiction & Customary Law',
    clauseSummary: 'The Sultan of Dar Masalit retains internal judicial authority, customary governance (Diyya/Ajaweid), and Sharia jurisdiction over all indigenous Masalit affairs.',
    originalTextSummary: 'The British Resident at El Geneina shall not interfere with the native courts, tax collections, or internal appointments of the Sultan, maintaining a relationship of advice rather than direct rule.',
    colonialIntent: 'Implement indirect rule (Lugardian doctrine) at minimal colonial administrative cost while keeping a British liaison stationed in El Geneina.',
    sultanateUnderstanding: 'Preservation of the Sultan’s crown, royal regalia, and complete autonomy over internal laws and political succession.',
    centenaryStatus: 'Violated Sovereign Guarantee',
    legalImplication: 'Subsequent Khartoum regimes progressively dismantled customary Sultanate powers, culminating in the assassinations and displacement of Masalit elders.',
    relevantStakeholders: ['MS', 'UK'],
    clauses: [
      {
        clauseIndex: 1,
        title: 'Judicial Autonomy & Indigenous Courts',
        text: 'The Sultan of Dar Masalit retains internal jurisdiction and judicial supremacy over customary and domestic affairs.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Mahakimat al-Sultan Jurisdiction',
            text: 'Masalit native courts (Mahakimat al-Sultan) retain original and exclusive jurisdiction over civil, land, and customary penal disputes.',
            legalCitation: 'Native Courts Ordinance (Dar Masalit)',
            stakeholders: ['MS', 'UK']
          },
          {
            subClauseIndex: 2,
            title: 'Ajaweid & Diyya Restitution',
            text: 'Customary arbitration by elder councils (Ajaweid) and customary blood-money restitution (Diyya) shall remain authoritative.',
            legalCitation: 'Customary Masalit Jurisprudence',
            stakeholders: ['MS']
          },
          {
            subClauseIndex: 3,
            title: 'Sharia Judicial Independence',
            text: 'Sharia law shall be administered exclusively by Cadis appointed directly by the Sultan without British administrative veto.',
            legalCitation: '1919 Judicial Protocol § 4',
            stakeholders: ['MS', 'UK']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Status of the British Resident Liaison',
        text: 'A British liaison officer stationed in El Geneina shall act purely in an advisory capacity, forbidden from direct administration.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Prohibition of Direct Governance',
            text: 'The Resident is explicitly barred from administering direct rule, altering customary ordinances, or deposing local chiefs.',
            legalCitation: 'FO 371 Instructions to El Geneina Resident',
            stakeholders: ['UK', 'MS']
          },
          {
            subClauseIndex: 2,
            title: 'Diplomatic Channel of Communication',
            text: 'All communications between the Governor-General of Sudan and the Sultanate shall proceed via formal diplomatic correspondence.',
            legalCitation: 'Condominium Protected State Charter',
            stakeholders: ['UK', 'MS']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Dynastic Succession & Fiscal Autonomy',
        text: 'Hereditary succession and indigenous fiscal autonomy remain exclusively vested in the royal house of Bahr al-Din.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Royal House Succession Rights',
            text: 'Succession to the Sultanate throne shall be decided solely by the royal electoral college of Dar Masalit without external ratification.',
            legalCitation: 'Masalit Royal Charter of Succession',
            stakeholders: ['MS']
          },
          {
            subClauseIndex: 2,
            title: 'Customary Revenue Rights',
            text: 'Collection of customary tithes (Zakat and Ushur) is reserved to the Sultan’s treasury, free from imperial appropriation.',
            legalCitation: 'Treasury Records, Dar Masalit Archives',
            stakeholders: ['MS', 'UK']
          }
        ]
      }
    ]
  },
  {
    number: 3,
    title: 'Cross-Border Pastoralist & Commercial Transit',
    clauseSummary: 'Guaranteed freedom of movement across the newly surveyed border between Adré (French Chad) and El Geneina for customary trade, grazing, and familial ties.',
    originalTextSummary: 'Inhabitants of Dar Masalit and Wadai possessing traditional pastoral and familial links shall enjoy unhindered transit across the demarcated border posts without confiscation or hostile tariffs.',
    colonialIntent: 'Prevent tribal rebellion along the sensitive Chad-Sudan border zone while regulating livestock taxation.',
    sultanateUnderstanding: 'Maintenance of the organic social and economic continuity of the Masalit and allied peoples across their historical homeland.',
    centenaryStatus: 'Perpetual Border',
    legalImplication: 'Serves as the historical legal basis for the modern Adré humanitarian corridor, currently essential for UN/EU/US humanitarian relief delivery.',
    relevantStakeholders: ['MS', 'FR', 'UN'],
    clauses: [
      {
        clauseIndex: 1,
        title: 'Adré – El Geneina Humanitarian & Commercial Highway',
        text: 'Guaranteed freedom of unhindered civilian transit between Adré in Ouaddaï (Chad) and El Geneina in Dar Masalit.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Tariff Exemption on Essential Commodities',
            text: 'Inhabitants and traders crossing the Gilani border shall be exempt from arbitrary levies on staple grains, livestock, and medical goods.',
            legalCitation: 'Tripartite Transit Convention Art. 3',
            stakeholders: ['MS', 'FR', 'UK']
          },
          {
            subClauseIndex: 2,
            title: 'Modern Humanitarian Lifeline Status',
            text: 'The Adré–El Geneina crossing constitutes a sanctified transit corridor protected by international humanitarian law and UNSC Res 2736.',
            legalCitation: 'UNSC Resolution 2736 (2024)',
            stakeholders: ['UN', 'US', 'EU', 'MS']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Pastoralist Transhumance Protections',
        text: 'Traditional livestock migration routes (Marahil) intersecting the international border shall remain open and unimpeded.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Access to Customary Watering Points',
            text: 'Pastoralists and sedentary communities retain joint customary access to transboundary wells, hafirs, and seasonal pastures.',
            legalCitation: 'Pastoralist Convention Annex 2',
            stakeholders: ['MS', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Cross-Border Tribal Dispute Conciliation',
            text: 'Cross-border cattle or grazing disputes shall be settled jointly by Sultanate and Ouaddaï tribal chiefs at Adré.',
            legalCitation: 'Inter-Tribal Peace Compacts (Adré)',
            stakeholders: ['MS', 'FR']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Humanitarian Sanctuary & Non-Refoulement',
        text: 'Civilians fleeing persecution, armed strife, or ecological distress across the border are entitled to sanctuary.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Prohibition of Arbitrary Repatriation',
            text: 'Displaced persons seeking refuge across the frontier shall not be forcibly returned or subjected to detention.',
            legalCitation: '1951 Refugee Convention & OAU Convention',
            stakeholders: ['UN', 'EU', 'MS']
          },
          {
            subClauseIndex: 2,
            title: 'Multilateral Monitored Access',
            text: 'International humanitarian missions shall maintain unhindered oversight of humanitarian aid convoys passing through Adré.',
            legalCitation: 'Geneva Conventions Common Article 3',
            stakeholders: ['UN', 'US', 'EU']
          }
        ]
      }
    ]
  },
  {
    number: 4,
    title: 'Mutual Non-Aggression & Imperial Protection Guarantee',
    clauseSummary: 'The British Government pledges military defense and protection of Dar Masalit against external aggression in exchange for the Sultan’s alliance.',
    originalTextSummary: 'Should the territory of the Sultan be threatened by hostile invasion or armed rebellion from neighbouring sultanates, the Government of Sudan undertakes to afford military protection.',
    colonialIntent: 'Lock the Sultan into the British geopolitical orbit and exclude rival French or Ottoman influence.',
    sultanateUnderstanding: 'A solemn military pact where the British Crown serves as a security guarantor against annihilation.',
    centenaryStatus: 'Violated Sovereign Guarantee',
    legalImplication: 'Masalit legal advocates argue that the UK and international community retain residual moral and legal obligations under state succession principles when genocidal forces target the protected nation.',
    relevantStakeholders: ['MS', 'UK', 'UN'],
    clauses: [
      {
        clauseIndex: 1,
        title: 'Condominium Military Defense Shield',
        text: 'The British administration pledges armed protection of the territory of Dar Masalit against external invasion.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Obligation of Mutual Defense',
            text: 'In the event of armed aggression against the Sultanate, the British Sudan Government commits to deploying protective forces.',
            legalCitation: 'Gilani Agreement Defense Covenant',
            stakeholders: ['MS', 'UK']
          },
          {
            subClauseIndex: 2,
            title: 'Non-Incursion by Foreign Troops',
            text: 'Imperial troops are prohibited from quartering in Sultanate towns or violating civilian settlements without royal assent.',
            legalCitation: 'FO 371 Military Protocols',
            stakeholders: ['UK', 'MS']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Masalit Peaceful Non-Aggression Pact',
        text: 'Dar Masalit pledges peace and non-belligerence toward Anglo-Egyptian Sudan and French Equatorial Africa.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Frontier Pacification Commitment',
            text: 'The Sultan agrees to restrain frontier raids and maintain peaceful commerce with neighboring garrisons.',
            legalCitation: 'Treaty Article 4, Para. 2',
            stakeholders: ['MS', 'UK', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Neutrality in Foreign Imperial Conflicts',
            text: 'The Sultanate retains sovereign neutrality in conflicts external to the regional defense of Dar Masalit.',
            legalCitation: 'Pre-Independence Sovereignty Records',
            stakeholders: ['MS']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Residual Guarantor Obligations & State Succession',
        text: 'The protective covenant devolves onto successor states and creates international guarantor obligations under the Genocide Convention.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Succession Obligation of State Protection',
            text: 'The post-colonial Sudanese state inherited the binding obligation to protect all citizens from extermination.',
            legalCitation: 'International Law Commission on State Succession',
            stakeholders: ['UK', 'UN']
          },
          {
            subClauseIndex: 2,
            title: 'Breach of Protection and Responsibility to Protect',
            text: 'State-directed ethnic cleansing constitutes a total repudiation of protection, activating the international Responsibility to Protect (R2P).',
            legalCitation: 'UN World Summit Outcome (2005) R2P',
            stakeholders: ['UN', 'US', 'EU', 'UK']
          }
        ]
      }
    ]
  },
  {
    number: 5,
    title: 'The Centenary Duration & Periodic Review Clause (100-Year Term)',
    clauseSummary: 'The contractual terms of integration into Anglo-Egyptian Sudan were formulated with a recognized 100-year operational duration (1919–2019), subject to reaffirmation.',
    originalTextSummary: 'The mutual rights, privileges, and protectorate arrangements herein established shall govern the relations of the High Contracting Parties for the span of one hundred years, whereupon the sovereign terms may be revisited.',
    colonialIntent: 'Standard British colonial treaty practice for protectorate pacts with sovereign frontier rulers, providing generational stability.',
    sultanateUnderstanding: 'A conditional, non-permanent federation; if the partnership failed or expired, the Sultanate retains its inherent right to self-determination or re-attachment to neighboring Chad.',
    centenaryStatus: 'Expired (2019)',
    legalImplication: 'The 100-year term expired in 2019. In 2021, Sultan Saad Bahr al-Din formally cited this clause to declare that Dar Masalit may exercise its right to self-determination amidst ethnic cleansing.',
    relevantStakeholders: ['MS', 'UK', 'FR', 'UN', 'US', 'EU'],
    clauses: [
      {
        clauseIndex: 1,
        title: '100-Year Operational Horizon (1919 – 2019)',
        text: 'The incorporation of Dar Masalit was granted for a definite term of one hundred solar years, requiring renegotiation.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Definite Operational Term',
            text: 'The protectorate and integration compact shall govern the contracting parties for the duration of one hundred years from late 1919.',
            legalCitation: 'Gilani Convention Instrument Art. 5',
            stakeholders: ['MS', 'UK', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Requirement of Sovereign Assent for Renewal',
            text: 'Any extension or constitutional succession beyond 2019 requires express, voluntary consultation with the Masalit Sultanate.',
            legalCitation: 'Customary Treaty Renewal Doctrine',
            stakeholders: ['MS', 'UK', 'UN']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Lapse and Fundamental Change of Circumstances',
        text: 'The agreement lapsed in late 2019 without renewal, compounded by genocidal campaigns destroying the pact.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Definitive Temporal Expiration',
            text: 'The 100-year operational duration expired in late 2019 without constitutional referendum, leaving the legal status open.',
            legalCitation: 'Centenary Legal Audit (2019)',
            stakeholders: ['MS', 'UN']
          },
          {
            subClauseIndex: 2,
            title: 'Clausula Rebus Sic Stantibus Invocation',
            text: 'State-sponsored massacres of Masalit civilians extinguish the essential premise of protected integration under VCLT Article 62.',
            legalCitation: 'Vienna Convention on the Law of Treaties Art. 62',
            stakeholders: ['MS', 'UN', 'US', 'EU']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Reversion of Sovereign Self-Determination',
        text: 'Upon expiration and material breach, sovereign rights revert to the Masalit Sultanate and its people.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Right to Self-Determination under UN Charter',
            text: 'Dar Masalit possesses the inalienable right to determine its political status under Article 1(2) of the UN Charter.',
            legalCitation: 'UN Charter Art. 1(2) & ICCPR Art. 1',
            stakeholders: ['MS', 'UN', 'US']
          },
          {
            subClauseIndex: 2,
            title: 'Sultan Saad Bahr al-Din Declaration (2021)',
            text: 'Formal invocation by the Sultanate reserving sovereign prerogatives and international protective measures.',
            legalCitation: 'Sultanate Formal Proclamation (2021)',
            stakeholders: ['MS', 'UN', 'EU']
          }
        ]
      }
    ]
  },
  {
    number: 6,
    title: 'Arbitration of Imperial Disputes & Diplomatic Redress',
    clauseSummary: 'Procedures for resolving boundary disputes, inter-tribal clashes, and sovereign infractions between British Sudan, French Chad, and Dar Masalit.',
    originalTextSummary: 'Disputes arising from the interpretation or enforcement of this Accord shall be referred to a joint tripartite commission of French, British, and Sultanate representatives convened at El Geneina or Abéché.',
    colonialIntent: 'Prevent local frontier skirmishes from escalating into European diplomatic crises.',
    sultanateUnderstanding: 'Equal tripartite seat at the diplomatic table alongside the European powers.',
    centenaryStatus: 'Contested Succession',
    legalImplication: 'Forms the foundational precedent for invoking modern multilateral diplomacy (MS-UK-FR-US-EU-UN) to resolve the contemporary crisis in West Darfur.',
    relevantStakeholders: ['MS', 'UK', 'FR', 'UN'],
    clauses: [
      {
        clauseIndex: 1,
        title: 'Joint Tripartite Arbitration Commission',
        text: 'All disputes concerning boundary interpretation, customary jurisdiction, or treaty breaches shall be submitted to a tripartite commission.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Parity of Representation',
            text: 'The commission shall consist of equal plenipotentiary representation from Dar Masalit, the United Kingdom, and the French Republic.',
            legalCitation: 'Gilani Convention Tribunal Rules',
            stakeholders: ['MS', 'UK', 'FR']
          },
          {
            subClauseIndex: 2,
            title: 'Alternative Sittings at El Geneina and Abéché',
            text: 'Arbitration proceedings shall alternate between El Geneina (Dar Masalit) and Abéché (Chad) to guarantee neutrality.',
            legalCitation: 'Tripartite Protocol on Venues',
            stakeholders: ['MS', 'FR']
          }
        ]
      },
      {
        clauseIndex: 2,
        title: 'Multilateral Consultation Mechanism (MS-UK-FR-US-EU-UN)',
        text: 'Modern breaches require an expanded consultative framework uniting historical co-signatories with contemporary guarantors.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'Tripartite-Plus Diplomatic Forum',
            text: 'Convocation of an emergency consultation comprising MS, UK, FR, US, EU, and UN to address sovereign survival and cross-border protection.',
            legalCitation: 'International Multilateral Framework (2024)',
            stakeholders: ['MS', 'UK', 'FR', 'US', 'EU', 'UN']
          },
          {
            subClauseIndex: 2,
            title: 'Direct Diplomatic Standing for the Sultanate',
            text: 'Recognition of the Sultanate Council as an autonomous negotiating party in all international peace talks and donor assemblies.',
            legalCitation: 'UN Declaration on the Rights of Indigenous Peoples',
            stakeholders: ['MS', 'UN', 'EU']
          }
        ]
      },
      {
        clauseIndex: 3,
        title: 'Enforcement of International Accountability & Restitution',
        text: 'Legal redress for treaty violations, atrocities, and customary land dispossession shall be enforced through international tribunals.',
        subClauses: [
          {
            subClauseIndex: 1,
            title: 'International Criminal Court Jurisdiction',
            text: 'Mandatory state cooperation with the ICC Prosecutor under UNSC Resolution 1593 (2005) for war crimes committed in El Geneina.',
            legalCitation: 'Rome Statute of the ICC & S/RES/1593',
            stakeholders: ['UN', 'EU', 'US', 'UK']
          },
          {
            subClauseIndex: 2,
            title: 'Hakura Land Restitution Commission',
            text: 'Establishment of an international commission to reverse illegal land seizures and enforce reparations for displaced Masalit communities.',
            legalCitation: 'UN Principles on Housing and Property Restitution (Pinheiro Principles)',
            stakeholders: ['UN', 'US', 'EU', 'MS']
          }
        ]
      }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'm-1898',
    year: 1898,
    exactDate: 'Sept 2, 1898',
    era: 'Pre-Colonial Sovereign Era',
    title: 'Battle of Omdurman & Sovereign Autonomy',
    location: 'Omdurman & El Geneina',
    description: 'Following the fall of the Mahdist state to Anglo-Egyptian forces, Dar Masalit consolidates its independent sultanate under Sultan Ismail Andoka, rejecting both Mahdist remnants and colonial annexation.',
    stakeholdersInvolved: ['MS', 'UK'],
    legalPrinciple: 'Inherent indigenous sovereignty prior to colonial treaty-making.',
    sourceDoc: 'Sudan Intelligence Reports (SIR 1898-1900)'
  },
  {
    id: 'm-1910',
    year: 1910,
    exactDate: 'Nov 8, 1910',
    era: 'Pre-Colonial Sovereign Era',
    title: 'Battle of Dirweish (Wadi Kaja)',
    location: 'Dirweish, near El Geneina',
    description: 'Dar Masalit forces led by Sultan Taj al-Din decisively defeat a French colonial expeditionary force under Lieutenant-Colonel Moll. French expansion into Dar Masalit is halted, establishing Masalit military prowess.',
    stakeholdersInvolved: ['MS', 'FR'],
    legalPrinciple: 'Right of self-defense against unlawful colonial invasion.',
    keyQuote: '“The Masalit fought with extraordinary valor, forcing French and British diplomats to recognize their sovereign domain.”',
    sourceDoc: 'Archives Nationales d’Outre-Mer (ANOM), Aix-en-Provence'
  },
  {
    id: 'm-1919',
    year: 1919,
    exactDate: 'Late 1919',
    era: 'Tripartite Negotiation & Accord',
    title: 'Signing of the Gilani Agreement',
    location: 'Gilani / El Geneina',
    description: 'Tripartite accord signed between Sultan Bahr al-Din (Andoka) of Dar Masalit, the British Sudan Government, and French colonial authorities in Chad. Demarcates the Chad-Sudan border and integrates Dar Masalit conditionally into Sudan for 100 years with guaranteed internal autonomy.',
    stakeholdersInvolved: ['MS', 'UK', 'FR'],
    legalPrinciple: 'Pacta Sunt Servanda; Conditional incorporation with 100-year term.',
    keyQuote: '“An agreement determining borders, preserving internal jurisdiction, and establishing a 100-year horizon for mutual coexistence.”',
    sourceDoc: 'The National Archives (Kew, FO 371) / Gilani Convention Papers'
  },
  {
    id: 'm-1922',
    year: 1922,
    exactDate: 'Jan 1922',
    era: 'Condominium & Administrative Era',
    title: 'Formalization of El Geneina Administration',
    location: 'El Geneina',
    description: 'The Anglo-Egyptian administration stations a British Resident in El Geneina to administer foreign affairs and boundary policing, while recognizing the Sultanate’s indigenous judiciary and Hakura land holdings.',
    stakeholdersInvolved: ['MS', 'UK'],
    legalPrinciple: 'Indirect Rule doctrine & Protected State status.',
    sourceDoc: 'Civil Secretary Files, Khartoum Central Records Office'
  },
  {
    id: 'm-1956',
    year: 1956,
    exactDate: 'Jan 1, 1956',
    era: 'Post-Independence & Marginalization',
    title: 'Sudanese Independence & Succession Dilemma',
    location: 'Khartoum & West Darfur',
    description: 'Sudan gains independence from the Anglo-Egyptian Condominium. The Khartoum central government inherits administrative control over Dar Masalit without conducting a referendum or reaffirming the 1919 treaty terms.',
    stakeholdersInvolved: ['MS', 'UK', 'UN'],
    legalPrinciple: 'State succession and the doctrine of Uti Possidetis Juris vs. minority rights.',
    sourceDoc: 'UN General Assembly Decolonization Records'
  },
  {
    id: 'm-2003',
    year: 2003,
    exactDate: 'Feb 2003',
    era: 'Post-Independence & Marginalization',
    title: 'Outbreak of Darfur War & Janjaweed Campaign',
    location: 'West Darfur / El Geneina',
    description: 'The Khartoum government under Omar al-Bashir mobilizes Janjaweed militias to target indigenous non-Arab populations in Darfur, resulting in widespread massacres of Masalit villagers and the displacement of hundreds of thousands.',
    stakeholdersInvolved: ['MS', 'US', 'EU', 'UN'],
    legalPrinciple: 'Genocide Convention (1948) & Rome Statute violations.',
    sourceDoc: 'UNSC Resolution 1593 (2005) ICC Referral'
  },
  {
    id: 'm-2019',
    year: 2019,
    exactDate: 'Late 2019',
    era: 'Centenary Expiration & Modern Conflict',
    title: 'Centenary Expiration of the 1919 Gilani Agreement',
    location: 'El Geneina, London, Paris',
    description: 'The 100-year duration stipulated in the 1919 Gilani Agreement reaches its centennial mark. Concurrently, Sudan undergoes political upheaval with the fall of al-Bashir, leaving the legal constitutional status of peripheral regions open.',
    stakeholdersInvolved: ['MS', 'UK', 'FR'],
    legalPrinciple: 'Expiration of treaty duration; Clausula Rebus Sic Stantibus.',
    keyQuote: '“The one-hundred-year horizon established in 1919 has elapsed, prompting fundamental questions on sovereign compacts.”',
    sourceDoc: 'Dar Masalit Traditional Council Memorandum'
  },
  {
    id: 'm-2021',
    year: 2021,
    exactDate: 'April 2021',
    era: 'Centenary Expiration & Modern Conflict',
    title: 'Sultan Saad Bahr al-Din Declaration on Self-Determination',
    location: 'El Geneina & Abéché',
    description: 'Following renewed militia attacks on El Geneina, Sultan Saad Abd al-Rahman Bahr al-Din publicly references the expiration of the 1919 Gilani Agreement, expressing regret that the Sultanate joined Sudan rather than Chad and reserving the right to seek self-determination.',
    stakeholdersInvolved: ['MS', 'FR', 'UK', 'UN'],
    legalPrinciple: 'Remedial secession & self-determination under UN Charter Article 1(2).',
    keyQuote: '“Had we joined Chad in 1919 under the Gilani terms, our people would not be facing systematic slaughter today. The 100-year agreement has expired.”',
    sourceDoc: 'Public Address & Diplomatic Communiqué of Sultan Saad Bahr al-Din'
  },
  {
    id: 'm-2023',
    year: 2023,
    exactDate: 'April – Nov 2023',
    era: 'Centenary Expiration & Modern Conflict',
    title: 'Siege of El Geneina & Targeted Ethnic Cleansing',
    location: 'El Geneina (Dar Masalit Capital)',
    description: 'Rapid Support Forces (RSF) and allied militias unleash systematic massacres across El Geneina. West Darfur Governor Khamis Abbakar is abducted and assassinated. An estimated 10,000–15,000 civilians are killed, and over 500,000 Masalit are driven into Chad through the Adré crossing.',
    stakeholdersInvolved: ['MS', 'US', 'EU', 'UN', 'FR', 'UK'],
    legalPrinciple: 'Crimes Against Humanity, Ethnic Cleansing, and Violations of R2P.',
    sourceDoc: 'US State Department Atrocities Determination / UN Panel of Experts Report (S/2024/65)'
  },
  {
    id: 'm-2024',
    year: 2024,
    exactDate: 'March – Aug 2024',
    era: 'Centenary Expiration & Modern Conflict',
    title: 'UNSC Resolutions 2724 & 2736, and Geneva ALPS Talks',
    location: 'UN New York, Geneva, Paris',
    description: 'The UN Security Council passes Resolution 2736 demanding the cessation of sieges in Darfur and protection of civilians. The US, Switzerland, and partners host the ALPS group in Geneva securing the reopening of the Adré border crossing from Chad into Dar Masalit.',
    stakeholdersInvolved: ['MS', 'UK', 'FR', 'US', 'EU', 'UN'],
    legalPrinciple: 'International Humanitarian Access & UNSC Chapter VII oversight.',
    sourceDoc: 'UNSC S/RES/2736 (2024) / ALPS Geneva Joint Communiqué'
  }
];

export const LEGAL_DOCTRINES: LegalDoctrine[] = [
  {
    id: 'ld-1',
    title: 'Treaty Expiration & Clausula Rebus Sic Stantibus',
    latinName: 'Clausula Rebus Sic Stantibus / Vienna Convention Art. 62',
    category: 'Treaty Law',
    definition: 'The doctrine that a treaty becomes legally void or subject to termination when there is a fundamental and unforeseen change in the circumstances that constituted an essential basis of the consent of the parties.',
    applicationToGilani: 'The 1919 Gilani Agreement was predicated on the British administration providing security and preserving the Sultan’s autonomy for 100 years. The collapse of state protection into state-orchestrated genocide satisfies the highest threshold of fundamental change of circumstances.',
    argumentsProMasalit: 'The 100-year term explicitly expired in 2019 without renewal. The Sudanese state failed to uphold the core protective covenants, freeing Dar Masalit from perpetual involuntary union.',
    counterArguments: 'Succession states often claim that colonial territorial treaties create permanent borders under customary international law that survive regime changes.',
    internationalCitations: ['Vienna Convention on the Law of Treaties (1969), Articles 54, 56 & 62', 'ICJ Fisheries Jurisdiction Case (UK v. Iceland, 1973)']
  },
  {
    id: 'ld-2',
    title: 'Uti Possidetis Juris vs. Indigenous Sovereign Compacts',
    latinName: 'Uti possidetis, ita possideatis',
    category: 'Territorial Sovereignty',
    definition: 'The principle in international law that newly formed sovereign states should preserve the borders that preceded their independence to avoid chaotic territorial revision.',
    applicationToGilani: 'While the African Union (1964 Cairo Resolution) champions uti possidetis to preserve colonial frontiers, the Gilani Agreement was a tripartite compact between sovereigns, not merely an internal administrative decree.',
    argumentsProMasalit: 'Dar Masalit was an autonomous sovereign entity that conditionally federated under specific pacts; uti possidetis cannot be weaponized to shield a government committing extermination against an indigenous treaty partner.',
    counterArguments: 'Border alterations in post-colonial Africa risk opening Pandora’s box of territorial fragmentation and cross-border tribal claims.',
    internationalCitations: ['OAU Resolution on Border Disputes (AHG/Res. 16(I), Cairo 1964)', 'ICJ Burkina Faso v. Mali (1986)']
  },
  {
    id: 'ld-3',
    title: 'Right to Self-Determination & Remedial Secession',
    latinName: 'Jus Cogens / UN Charter Article 1(2)',
    category: 'Self-Determination',
    definition: 'The legal right of a distinct people to freely determine their political status and freely pursue their economic, social, and cultural development. In extreme cases of sustained genocide and total denial of internal self-determination, remedial secession is recognized.',
    applicationToGilani: 'The Masalit constitute a distinct, historically recognized nation with an unbroken hereditary sultanate, unique language, culture, and territory (Hakura). When subjected to systematic annihilation by state and paramilitary organs, self-determination is activated.',
    argumentsProMasalit: 'Sultan Saad Bahr al-Din’s 2021 declaration asserts that if Sudan cannot ensure physical survival, the Masalit people are entitled under international law to seek independence or rejoin Chad.',
    counterArguments: 'International community strongly favors territorial integrity of UN member states and prefers internal autonomy arrangements within a federated Sudan.',
    internationalCitations: ['UN Charter Art. 1(2) & 55', 'International Covenant on Civil and Political Rights (ICCPR) Art. 1', 'Supreme Court of Canada, Reference re Secession of Quebec (1998)']
  },
  {
    id: 'ld-4',
    title: 'Responsibility to Protect (R2P) & ICC Jurisdiction',
    latinName: 'Responsibility to Protect (2005 World Summit Outcome)',
    category: 'Human Rights & Atrocity Prevention',
    definition: 'The norm that state sovereignty entails a responsibility to protect its populations from genocide, war crimes, ethnic cleansing, and crimes against humanity. When a state manifestly fails, the international community must take collective action.',
    applicationToGilani: 'The massacres in El Geneina represent one of the clearest contemporary violations of R2P. The historical co-signatories (UK, France) and UN Security Council members (US) possess affirmative obligations to intervene through sanctions, embargoes, and judicial accountability.',
    argumentsProMasalit: 'Mandatory international intervention is required to secure safe return, restore ancestral lands, deploy peacekeepers to El Geneina, and support ICC arrest warrants against militia leaders.',
    counterArguments: 'Implementation of military R2P without UN Security Council consensus is constrained by geopolitical vetoes and regional resistance.',
    internationalCitations: ['UN General Assembly Resolution 60/1 (2005 World Summit Outcome)', 'UNSC Resolution 1593 (2005)', 'Rome Statute of the International Criminal Court, Articles 6, 7 & 8']
  }
];

export const DIPLOMATIC_ACTIONS: DiplomaticAction[] = [
  {
    id: 'da-1',
    stakeholder: 'US',
    date: 'Dec 6, 2023',
    type: 'Declaration',
    title: 'US Official Determination of War Crimes and Ethnic Cleansing in West Darfur',
    summary: 'Secretary of State Antony Blinken formally determined that members of the RSF and allied militias committed crimes against humanity and ethnic cleansing against the Masalit population in West Darfur.',
    significance: 'Elevates Masalit persecution to the highest legal tier of international crimes, triggering statutory accountability mechanisms.',
    referenceDoc: 'US Dept of State Press Statement 2023/12/06',
    status: 'Enforced'
  },
  {
    id: 'da-2',
    stakeholder: 'UN',
    date: 'June 13, 2024',
    type: 'Resolution',
    title: 'UN Security Council Resolution 2736 on Protection of Darfur Civilians',
    summary: 'Adopted with 14 votes in favor, demanding that the RSF halt the siege of El Fasher, protect civilians across Darfur, and allow unhindered cross-border humanitarian access.',
    significance: 'Binding Chapter VII-adjacent consensus reinforcing civilian protection and international monitors in western Sudan.',
    referenceDoc: 'UNSC S/RES/2736 (2024)',
    status: 'Enforced'
  },
  {
    id: 'da-3',
    stakeholder: 'EU',
    date: 'Jan 22, 2024',
    type: 'Sanction',
    title: 'EU Targeted Sanctions on Key Belligerents and Financial Entities',
    summary: 'Council of the European Union adopted restrictive measures against six entities involved in financing the conflict and committing human rights abuses in West Darfur and Khartoum.',
    significance: 'Freezes European assets and bans travel for military commanders and associated front corporations.',
    referenceDoc: 'Council Implementing Regulation (CFSP) 2024/384',
    status: 'Enforced'
  },
  {
    id: 'da-4',
    stakeholder: 'UK',
    date: 'March 8, 2024',
    type: 'Resolution',
    title: 'UNSC Resolution 2724 Drafted by the United Kingdom',
    summary: 'The UK as penholder steered the adoption of Resolution 2724, calling for an immediate cessation of hostilities during the month of Ramadan and unrestricted humanitarian lifelines.',
    significance: 'Demonstrates active UK diplomatic leadership as historical treaty guarantor at the UN Security Council.',
    referenceDoc: 'UNSC S/RES/2724 (2024)',
    status: 'Diplomatic Precedent'
  },
  {
    id: 'da-5',
    stakeholder: 'FR',
    date: 'April 15, 2024',
    type: 'Humanitarian Corridor',
    title: 'Paris International Conference for Sudan and Its Neighbors',
    summary: 'Co-hosted by France, Germany, and the EU, raising over €2 billion in humanitarian pledges and establishing high-level diplomatic pressure to keep the Chad-Sudan border open at Adré.',
    significance: 'Essential logistics forum sustaining over 600,000 Masalit refugees in Chad’s Ouaddaï region.',
    referenceDoc: 'Paris Ministerial Declaration on Sudan 2024',
    status: 'Enforced'
  },
  {
    id: 'da-6',
    stakeholder: 'MS',
    date: 'May 2023 – Ongoing',
    type: 'Declaration',
    title: 'Sultanate Diplomatic Memoranda to UN, US & European Powers',
    summary: 'Sultan Saad Abd al-Rahman Bahr al-Din and Masalit diaspora leadership submitted extensive dossiers to the UN Human Rights Council, US Congress, and EU Parliament documenting the systematic destruction of Dar Masalit.',
    significance: 'Direct assertion of indigenous sovereign voice invoking the 1919 treaty legacy and demanding international trusteeship or protected status.',
    referenceDoc: 'Memorandum of the Supreme Council of the Masalit Sultanate (Geneva/Abéché)',
    status: 'Active Investigation'
  },
  {
    id: 'da-7',
    stakeholder: 'UN',
    date: 'July 13, 2023',
    type: 'ICC Investigation',
    title: 'ICC Prosecutor Karim Khan Launches Expanded Darfur Investigation',
    summary: 'The International Criminal Court announced a priority investigation into war crimes and crimes against humanity committed in El Geneina and West Darfur, focusing on the killings of Masalit leaders.',
    significance: 'Direct international criminal accountability targeting high-ranking paramilitary generals under UNSC Resolution 1593 mandate.',
    referenceDoc: 'ICC-OTP Statement to UNSC on Darfur Situation 2023',
    status: 'Active Investigation'
  }
];

export const GEOGRAPHIC_LOCATIONS: GeographicLocation[] = [
  {
    id: 'geo-1',
    name: 'El Geneina (Al-Junaynah)',
    arabicName: 'الجنينة',
    type: 'Capital / Historic Seat',
    description: 'Capital of West Darfur and historic royal seat of the Masalit Sultanate since its transfer by Sultan Bahr al-Din Andoka. Epicenter of the 1919 Gilani negotiations and modern atrocities.',
    coordinates: { lat: 13.4500, lng: 22.4500 },
    treatyRelevance: 'The administrative heart guaranteed internal autonomy under Article 2 of the Gilani Agreement.'
  },
  {
    id: 'geo-2',
    name: 'Gilani (Gereida / Wadi Gilani Sector)',
    arabicName: 'جيلاني',
    type: 'Demarcated Sector',
    description: 'The historic negotiation ground in the western Darfur frontier where British, French, and Masalit representatives drafted the 1919 Accord.',
    coordinates: { lat: 13.3800, lng: 22.1200 },
    treatyRelevance: 'Namesake and physical signing venue of the 1919 Tripartite Accord.'
  },
  {
    id: 'geo-3',
    name: 'Adré (Ouaddaï, Chad)',
    arabicName: 'أدري',
    type: 'Border Tripoint / Post',
    description: 'Border crossing town in eastern Chad directly adjacent to El Geneina. Key transit hub designated in the 1919 demarcation and current lifeline for Masalit refugees.',
    coordinates: { lat: 13.4667, lng: 22.2000 },
    treatyRelevance: 'Established in the 1919-1924 surveys as the international boundary dividing French Equatorial Africa from British Dar Masalit.'
  },
  {
    id: 'geo-4',
    name: 'Abéché (Ouaddaï Capital, Chad)',
    arabicName: 'أبشي',
    type: 'Capital / Historic Seat',
    description: 'Historic seat of the Wadai Empire and French military headquarters during the 1910-1919 conflicts. Now the logistical center for UN and French humanitarian missions in eastern Chad.',
    coordinates: { lat: 13.8292, lng: 20.8322 },
    treatyRelevance: 'French regional command center that validated the 1919 Gilani borders.'
  },
  {
    id: 'geo-5',
    name: 'Dirweish (Wadi Kaja)',
    arabicName: 'درويش',
    type: 'Capital / Historic Seat',
    description: 'Site of the historic November 1910 battle where Masalit warriors led by Sultan Taj al-Din defeated the French force under Lt-Col Moll, preserving Sultanate independence.',
    coordinates: { lat: 13.5200, lng: 22.3800 },
    treatyRelevance: 'Military victory that compelled France and Britain to negotiate the 1919 Gilani Accord rather than attempt total conquest.'
  }
];
