import React from 'react';
import { Landmark, Clock, ArrowRight, ShieldCheck, FileText, ChevronRight, Compass } from 'lucide-react';
import { Stakeholder, StakeholderId } from '../types';
import { STAKEHOLDERS } from '../data/treatyData';

interface AccordOverviewProps {
  onSelectStakeholder: (s: Stakeholder) => void;
  onNavigateTab: (tab: string) => void;
  onOpenBriefModal: () => void;
}

export const AccordOverview: React.FC<AccordOverviewProps> = ({
  onSelectStakeholder,
  onNavigateTab,
  onOpenBriefModal
}) => {
  return (
    <div className="space-y-8">
      {/* Hero Dossier Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-stone-900 via-stone-900 to-stone-950 border border-stone-800 p-6 sm:p-8 shadow-xl overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none text-stone-100 font-serif text-9xl select-none">
          1919
        </div>

        <div className="max-w-3xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-800/60 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Landmark className="w-3.5 h-3.5" />
            <span>Tripartite Colonial Treaty & Modern Multilateral Mandate</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white tracking-tight leading-tight">
            The Gilani Agreement & The Multilateral Diplomatic Framework
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Signed in late 1919 between the <strong className="text-emerald-400">Masalit Sultanate (MS)</strong>, the{' '}
            <strong className="text-blue-400">United Kingdom (UK)</strong>, and <strong className="text-indigo-400">France (FR)</strong>, 
            the Gilani Agreement demarcated the frontier between French Chad and Anglo-Egyptian Sudan while guaranteeing 
            the internal sovereignty and judicial autonomy of the Sultanate of Dar Andoka. With its 100-year term 
            expiring in <strong>2019</strong> and widespread atrocities targeting the Masalit, the accord has re-emerged as a foundational legal 
            pillar engaging the <strong className="text-rose-400">United States (US)</strong>, <strong className="text-amber-400">European Union (EU)</strong>, 
            and <strong className="text-cyan-400">United Nations (UN)</strong>.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-stone-800/60 border border-stone-700/60 rounded-lg p-3">
              <span className="text-xs text-stone-400 font-mono block">Signing Year</span>
              <span className="text-lg font-bold text-amber-400 font-mono">1919</span>
              <span className="text-[11px] text-stone-500 block">El Geneina / Gilani</span>
            </div>
            <div className="bg-stone-800/60 border border-stone-700/60 rounded-lg p-3">
              <span className="text-xs text-stone-400 font-mono block">Treaty Horizon</span>
              <span className="text-lg font-bold text-amber-400 font-mono">100 Years</span>
              <span className="text-[11px] text-emerald-400 font-semibold block">Expired 2019</span>
            </div>
            <div className="bg-stone-800/60 border border-stone-700/60 rounded-lg p-3">
              <span className="text-xs text-stone-400 font-mono block">Co-Signatories</span>
              <span className="text-lg font-bold text-amber-400 font-mono">MS • UK • FR</span>
              <span className="text-[11px] text-stone-500 block">Tripartite Treaty</span>
            </div>
            <div className="bg-stone-800/60 border border-stone-700/60 rounded-lg p-3">
              <span className="text-xs text-stone-400 font-mono block">Modern Mandates</span>
              <span className="text-lg font-bold text-amber-400 font-mono">US • EU • UN</span>
              <span className="text-[11px] text-stone-500 block">R2P & ICC Sanctions</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              onClick={() => onNavigateTab('articles')}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm rounded-lg flex items-center gap-2 transition-all shadow-sm"
            >
              <span>Explore 1919 Treaty Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTab('legal')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs sm:text-sm rounded-lg border border-stone-700 flex items-center gap-2 transition-colors"
            >
              <span>100-Yr Expiration & Self-Determination</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBriefModal}
              className="px-4 py-2 bg-stone-950 hover:bg-stone-800 text-amber-400 border border-amber-600/40 text-xs sm:text-sm rounded-lg flex items-center gap-2 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Draft Diplomatic Communiqué</span>
            </button>
          </div>
        </div>
      </div>

      {/* The Centenary Clock & Historical Succession Card */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-6 shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>The 100-Year Centenary Doctrine (1919 – 2019)</span>
            </div>
            <h3 className="text-lg font-bold text-white font-serif">
              Why the Expiration of the 1919 Gilani Agreement Alters Sovereign Status
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Under international treaty law, when an accord incorporates a specific temporal duration—or when 
              the essential circumstances under which a protected state entered union cease to exist (*Clausula Rebus Sic Stantibus*)—the 
              underlying sovereign parties possess the legal right to revisit their constitutional alignment. The Masalit Sultanate, 
              faced with existential violence and state complicity, has asserted that its 100-year integration pact has lapsed, 
              opening the legal avenue for self-determination under UN Charter Article 1(2).
            </p>
          </div>

          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 shrink-0 w-full lg:w-72 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-stone-400">1919 Signing</span>
              <span className="text-stone-400">2019 Lapsed</span>
            </div>
            {/* Progress Visualizer */}
            <div className="w-full bg-stone-800 h-2.5 rounded-full overflow-hidden flex">
              <div className="bg-amber-500 h-full w-full"></div>
            </div>
            <div className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-amber-400 font-bold">100 Years Complete</span>
              <span className="text-emerald-400 font-bold">Lapsed (Now in Yr 107)</span>
            </div>
            <div className="text-[11px] text-stone-400 border-t border-stone-800/80 pt-2 leading-tight">
              Sultan Saad Abd al-Rahman Bahr al-Din formally cited this centenary in 2021 to declare the right to self-determination.
            </div>
          </div>
        </div>
      </div>

      {/* The 6 Pillars (MS - UK - FR - US - EU - UN) Cards Grid */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
              <span>The 6 Diplomatic & Legal Pillars</span>
              <span className="text-xs font-mono font-normal text-stone-400 bg-stone-800 px-2 py-0.5 rounded">
                MS-UK-FR-US-EU-UN
              </span>
            </h3>
            <p className="text-xs text-stone-400">
              Click any stakeholder card to inspect its comprehensive legal dossier, treaty obligations, and active initiatives.
            </p>
          </div>
          <span className="text-xs text-amber-400 font-medium">Click card for complete dossier</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(['MS', 'UK', 'FR', 'US', 'EU', 'UN'] as StakeholderId[]).map((id) => {
            const s = STAKEHOLDERS[id];
            return (
              <div
                key={id}
                onClick={() => onSelectStakeholder(s)}
                className="group cursor-pointer bg-stone-900/80 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/50 rounded-xl p-5 transition-all duration-200 hover:shadow-lg relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-sm flex items-center justify-center">
                        {s.code}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider px-2 py-0.5 rounded bg-stone-800 border border-stone-700/60">
                        {s.roleType}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {s.name}
                  </h4>
                  {s.nativeTitle && (
                    <p className="text-xs text-stone-400 font-mono mb-2" dir="auto">{s.nativeTitle}</p>
                  )}

                  <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed mt-1">
                    {s.summary}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="mt-4 pt-3 border-t border-stone-800/80 space-y-2">
                  <div className="text-[11px] text-stone-400">
                    <strong className="text-amber-400">Position on 100-Yr Expiration:</strong>{' '}
                    <span className="line-clamp-2">{s.currentStanceOnGilani}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-stone-500 font-mono">
                    <span>{s.keyResolutionsAndInstruments.length} Instruments</span>
                    <span className="text-amber-400 group-hover:underline">Open Dossier →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Strategic Tripartite & Multilateral Alignment Matrix */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
          <Compass className="w-4 h-4 text-amber-400" />
          <span>Multilateral Interconnection Matrix</span>
        </h3>
        <p className="text-xs text-stone-300 leading-relaxed">
          How the 1919 historical signatories (MS, UK, FR) interface with modern international guarantors (US, EU, UN) 
          under current international law:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-stone-300 border border-stone-800">
            <thead className="bg-stone-950 text-stone-400 uppercase font-mono text-[11px] border-b border-stone-800">
              <tr>
                <th className="px-3.5 py-2.5">Stakeholder</th>
                <th className="px-3.5 py-2.5">Colonial Era Role (1919)</th>
                <th className="px-3.5 py-2.5">Post-100-Year Stance (2019+)</th>
                <th className="px-3.5 py-2.5">Primary Enforcement Mechanism</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/60 font-sans">
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-emerald-400 font-mono">MS (Masalit Sultanate)</td>
                <td className="px-3.5 py-2">Sovereign contracting party; retained internal judiciary & boundaries</td>
                <td className="px-3.5 py-2">Invokes treaty expiration & right of self-determination or re-attachment to Chad</td>
                <td className="px-3.5 py-2 text-stone-400">UN Charter Art. 1(2), Geneva memoranda, Sultanate petitions</td>
              </tr>
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-blue-400 font-mono">UK (United Kingdom)</td>
                <td className="px-3.5 py-2">Colonial protectorate power; indirect rule covenant</td>
                <td className="px-3.5 py-2">UNSC Penholder on Sudan; maintains Kew treaty archives</td>
                <td className="px-3.5 py-2 text-stone-400">UNSC Resolutions (2724, 2736), FCDO sanctions, ICC referral</td>
              </tr>
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-indigo-400 font-mono">FR (France)</td>
                <td className="px-3.5 py-2">Demarcated Ouaddaï (Chad) – Dar Masalit border posts</td>
                <td className="px-3.5 py-2">Guarantor of Chad security; hosts Paris humanitarian conferences</td>
                <td className="px-3.5 py-2 text-stone-400">Chad bilateral defense pacts, Adré corridor logistics, EU coordination</td>
              </tr>
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-rose-400 font-mono">US (United States)</td>
                <td className="px-3.5 py-2">External observer / post-WW1 Wilsonian self-determination principle</td>
                <td className="px-3.5 py-2">Dec 2023 formal determination of Masalit ethnic cleansing & war crimes</td>
                <td className="px-3.5 py-2 text-stone-400">OFAC Magnitsky sanctions, ALPS Geneva talks, War Crimes Rewards</td>
              </tr>
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-amber-400 font-mono">EU (European Union)</td>
                <td className="px-3.5 py-2">Regional successor entity to European state treaty traditions</td>
                <td className="px-3.5 py-2">Autonomous sanctions on RSF financiers; humanitarian lifeline</td>
                <td className="px-3.5 py-2 text-stone-400">EU Council Restrictive Measures, Arms Embargo, ICC funding</td>
              </tr>
              <tr className="hover:bg-stone-800/40">
                <td className="px-3.5 py-2 font-bold text-cyan-400 font-mono">UN (United Nations)</td>
                <td className="px-3.5 py-2">Successor to League of Nations mandate & decolonization doctrines</td>
                <td className="px-3.5 py-2">Panel of Experts investigations, Special Adviser on Genocide warnings</td>
                <td className="px-3.5 py-2 text-stone-400">UNSC Chapter VII sanctions, ICC Prosecutor Karim Khan investigations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Core Principles Footnote */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800/80 text-xs text-stone-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Verified against The National Archives (Kew, FO 371), Quai d'Orsay diplomatic archives, and UN Security Council documentation.</span>
        </div>
        <button
          onClick={() => onNavigateTab('cartography')}
          className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 shrink-0"
        >
          <span>View Boundary Maps & Timeline</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
