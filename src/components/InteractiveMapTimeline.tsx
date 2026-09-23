import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Compass, Shield, ArrowRight, Layers, Info } from 'lucide-react';
import { TimelineMilestone, StakeholderId, GeographicLocation } from '../types';
import { TIMELINE_MILESTONES, GEOGRAPHIC_LOCATIONS, STAKEHOLDERS } from '../data/treatyData';

interface InteractiveMapTimelineProps {
  selectedStakeholder: StakeholderId | 'ALL';
  onSelectStakeholder: (id: StakeholderId) => void;
}

export const InteractiveMapTimeline: React.FC<InteractiveMapTimelineProps> = ({
  selectedStakeholder,
  onSelectStakeholder
}) => {
  const [activeLocation, setActiveLocation] = useState<GeographicLocation>(GEOGRAPHIC_LOCATIONS[0]);
  const [activeLayer, setActiveLayer] = useState<'all' | 'treaty1919' | 'humanitarian'>('all');
  const [selectedEra, setSelectedEra] = useState<string>('ALL');

  const filteredMilestones = TIMELINE_MILESTONES.filter((m) => {
    if (selectedStakeholder !== 'ALL' && !m.stakeholdersInvolved.includes(selectedStakeholder)) {
      return false;
    }
    if (selectedEra !== 'ALL' && m.era !== selectedEra) {
      return false;
    }
    return true;
  });

  const eras = [
    'Pre-Colonial Sovereign Era',
    'Tripartite Negotiation & Accord',
    'Condominium & Administrative Era',
    'Post-Independence & Marginalization',
    'Centenary Expiration & Modern Conflict'
  ];

  return (
    <div className="space-y-8">
      {/* Geopolitical Cartography Section */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              <Compass className="w-4 h-4" />
              <span>Cartographic & Border Registry: Chad - Sudan Frontier</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Dar Masalit & The 1919 Gilani Boundary Demarcation
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Geopolitical map illustrating the historic territorial domain of the Masalit Sultanate (Dar Andoka), 
              the 1919 Gilani demarcation line between French Chad and British Sudan, and the critical modern Adré humanitarian corridor.
            </p>
          </div>

          {/* Map Layer Selector */}
          <div className="flex items-center gap-2 shrink-0 bg-stone-950 p-1.5 rounded-lg border border-stone-800 text-xs">
            <span className="text-stone-400 px-2 flex items-center gap-1 font-mono">
              <Layers className="w-3.5 h-3.5" /> Layers:
            </span>
            <button
              onClick={() => setActiveLayer('all')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeLayer === 'all' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              All Zones
            </button>
            <button
              onClick={() => setActiveLayer('treaty1919')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeLayer === 'treaty1919' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              1919 Border
            </button>
            <button
              onClick={() => setActiveLayer('humanitarian')}
              className={`px-2.5 py-1 rounded transition-colors ${
                activeLayer === 'humanitarian' ? 'bg-amber-500 text-stone-950 font-bold' : 'text-stone-300 hover:bg-stone-800'
              }`}
            >
              Adré Corridor
            </button>
          </div>
        </div>

        {/* Interactive Map Visualizer & Location Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* SVG Map Canvas */}
          <div className="lg:col-span-8 bg-stone-950 rounded-xl p-4 border border-stone-800 relative overflow-hidden flex flex-col justify-center">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 px-2">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Coordinates: 13°27'N to 13°50'N / 20°50'E to 22°45'E</span>
              </span>
              <span className="text-amber-400 font-semibold">Scale: ~1:150,000 Tactical Zone</span>
            </div>

            {/* Stylized SVG Territorial Map */}
            <div className="relative w-full aspect-[16/10] bg-stone-900/60 rounded-lg border border-stone-800/80 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 800 500" className="w-full h-full select-none">
                <defs>
                  <linearGradient id="chadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e1e24" />
                    <stop offset="100%" stopColor="#17171c" />
                  </linearGradient>
                  <linearGradient id="sudanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#211d1b" />
                    <stop offset="100%" stopColor="#171413" />
                  </linearGradient>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#292524" strokeWidth="0.5" strokeOpacity="0.4" />
                  </pattern>
                </defs>

                {/* Grid */}
                <rect width="800" height="500" fill="url(#grid)" />

                {/* French Chad (Ouaddaï) Zone */}
                <path
                  d="M 0,0 L 380,0 L 390,200 L 400,310 L 380,500 L 0,500 Z"
                  fill="url(#chadGrad)"
                  stroke="#374151"
                  strokeWidth="1"
                />
                <text x="120" y="80" fill="#9ca3af" fontSize="16" fontFamily="serif" letterSpacing="4" opacity="0.6">
                  FRENCH CHAD (OUADDAÏ)
                </text>
                <text x="120" y="105" fill="#6b7280" fontSize="11" fontFamily="monospace">
                  Quai d'Orsay Delimitation Zone (1919)
                </text>

                {/* Dar Masalit / British Sudan Zone */}
                <path
                  d="M 380,0 L 800,0 L 800,500 L 380,500 L 400,310 L 390,200 Z"
                  fill="url(#sudanGrad)"
                  stroke="#44403c"
                  strokeWidth="1"
                />
                <text x="520" y="80" fill="#d97706" fontSize="16" fontFamily="serif" letterSpacing="3" opacity="0.7">
                  DAR MASALIT (DAR ANDOKA)
                </text>
                <text x="520" y="105" fill="#78716c" fontSize="11" fontFamily="monospace">
                  Anglo-Egyptian Protectorate (1919 Treaty)
                </text>

                {/* 1919 Gilani Boundary Line (Wadi & Border Pillars) */}
                {(activeLayer === 'all' || activeLayer === 'treaty1919') && (
                  <g>
                    <path
                      d="M 380,0 L 385,120 L 390,200 L 395,250 L 400,310 L 390,380 L 380,500"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeDasharray="6,4"
                    />
                    <text x="405" y="180" fill="#f59e0b" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      1919 Gilani Tripartite Border Demarcation
                    </text>
                  </g>
                )}

                {/* Humanitarian Corridor Lifeline: Adré to El Geneina */}
                {(activeLayer === 'all' || activeLayer === 'humanitarian') && (
                  <g>
                    <path
                      d="M 340,245 Q 450,230 560,240"
                      fill="none"
                      stroke="#06b6d4"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <text x="360" y="225" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold">
                      Adré Crossing ➔ El Geneina Humanitarian Lifeline (UNSC 2736)
                    </text>
                  </g>
                )}

                {/* Key Points / Settlements */}
                {/* Abéché */}
                <circle cx="160" cy="180" r="7" fill="#6366f1" stroke="#ffffff" strokeWidth="2" />
                <text x="175" y="185" fill="#c7d2fe" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  Abéché (FR)
                </text>

                {/* Adré */}
                <circle
                  cx="340"
                  cy="245"
                  r={activeLocation.name.includes('Adré') ? 10 : 7}
                  fill="#06b6d4"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  className="cursor-pointer"
                  onClick={() => setActiveLocation(GEOGRAPHIC_LOCATIONS[2])}
                />
                <text x="285" y="270" fill="#a5f3fc" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                  Adré (Chad Post)
                </text>

                {/* El Geneina */}
                <circle
                  cx="560"
                  cy="240"
                  r={activeLocation.name.includes('Geneina') ? 12 : 9}
                  fill="#10b981"
                  stroke="#ffffff"
                  strokeWidth="3"
                  className="cursor-pointer"
                  onClick={() => setActiveLocation(GEOGRAPHIC_LOCATIONS[0])}
                />
                <text x="580" y="245" fill="#a7f3d0" fontSize="14" fontWeight="bold" fontFamily="serif">
                  El Geneina (Masalit Seat)
                </text>

                {/* Gilani Valley */}
                <circle
                  cx="430"
                  cy="320"
                  r={activeLocation.name.includes('Gilani') ? 9 : 6}
                  fill="#f59e0b"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActiveLocation(GEOGRAPHIC_LOCATIONS[1])}
                />
                <text x="445" y="325" fill="#fde68a" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                  Gilani (1919 Treaty Site)
                </text>

                {/* Dirweish */}
                <circle
                  cx="540"
                  cy="170"
                  r={activeLocation.name.includes('Dirweish') ? 8 : 5}
                  fill="#ef4444"
                  stroke="#ffffff"
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => setActiveLocation(GEOGRAPHIC_LOCATIONS[4])}
                />
                <text x="555" y="175" fill="#fca5a5" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
                  Dirweish (1910 Battle)
                </text>
              </svg>

              {/* Map Legend Overlay */}
              <div className="absolute bottom-3 left-3 bg-stone-950/90 border border-stone-800 rounded-lg p-2.5 text-[11px] font-mono space-y-1.5 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-amber-500 inline-block border-t border-dashed"></span>
                  <span className="text-stone-300">1919 Gilani Tripartite Border</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-1 bg-cyan-500 rounded inline-block"></span>
                  <span className="text-stone-300">Adré Humanitarian Aid Transit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-stone-300">Sultanate Capital (El Geneina)</span>
                </div>
              </div>
            </div>

            {/* Quick Sector Selector Buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              {GEOGRAPHIC_LOCATIONS.map((loc) => {
                const isSelected = activeLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                        : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    <MapPin className="w-3 h-3" />
                    <span>{loc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Location Detail Dossier */}
          <div className="lg:col-span-4 bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-semibold px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                  {activeLocation.type}
                </span>
                <h3 className="text-lg font-bold text-white font-serif mt-1">{activeLocation.name}</h3>
                {activeLocation.arabicName && (
                  <p className="text-xs text-stone-400 font-mono" dir="rtl">{activeLocation.arabicName}</p>
                )}
              </div>
              <div className="text-right text-[11px] font-mono text-stone-400">
                <div>{activeLocation.coordinates.lat.toFixed(4)}° N</div>
                <div>{activeLocation.coordinates.lng.toFixed(4)}° E</div>
              </div>
            </div>

            <div className="text-xs text-stone-300 leading-relaxed bg-stone-900/60 p-3.5 rounded-lg border border-stone-800/80">
              {activeLocation.description}
            </div>

            <div className="bg-amber-950/20 border border-amber-900/40 p-3.5 rounded-lg text-xs space-y-1">
              <span className="font-semibold text-amber-400 uppercase font-mono tracking-wider block">
                Significance in Gilani Accord (1919):
              </span>
              <p className="text-stone-300 leading-relaxed">
                {activeLocation.treatyRelevance}
              </p>
            </div>

            <div className="text-[11px] text-stone-400 border-t border-stone-800 pt-3 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Click markers or settlement chips to switch focus.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Historical & Centenary Chronology Timeline */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              <Calendar className="w-4 h-4" />
              <span>Diplomatic Chronology: 1898 – Present</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              The Historical Arc: Sovereignty, Accord & Expiration
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Trace the continuous legal and geopolitical continuum from the pre-colonial victories of Sultan Taj al-Din 
              to the 1919 Gilani Tripartite Accord, the 2019 centenary milestone, and current UNSC resolutions.
            </p>
          </div>

          {/* Era Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <select
              id="timeline-era-filter"
              value={selectedEra}
              onChange={(e) => setSelectedEra(e.target.value)}
              className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="ALL">All Historical Eras</option>
              {eras.map((era) => (
                <option key={era} value={era}>{era}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-stone-800 ml-4 pl-6 space-y-8">
          {filteredMilestones.map((milestone) => (
            <div key={milestone.id} id={milestone.id} className="relative group">
              {/* Timeline Pin */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-stone-900 border-2 border-amber-500 group-hover:border-amber-400 group-hover:scale-125 transition-all"></div>

              {/* Milestone Box */}
              <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3 hover:border-stone-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base sm:text-lg font-bold font-mono text-amber-400">
                      {milestone.year}
                    </span>
                    {milestone.exactDate && (
                      <span className="text-xs text-stone-400 font-mono">
                        ({milestone.exactDate})
                      </span>
                    )}
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-300 border border-stone-700">
                      {milestone.location}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                    {milestone.era}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white font-serif">
                  {milestone.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  {milestone.description}
                </p>

                {milestone.keyQuote && (
                  <blockquote className="text-xs text-amber-300 italic border-l-2 border-amber-500 pl-3 py-1 bg-amber-950/20 rounded-r">
                    {milestone.keyQuote}
                  </blockquote>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-stone-800/80 text-xs">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-stone-500 font-mono text-[11px]">Involved Parties:</span>
                    {milestone.stakeholdersInvolved.map((sId) => (
                      <button
                        key={sId}
                        onClick={() => onSelectStakeholder(sId)}
                        className="px-2 py-0.5 rounded bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-stone-950 font-mono text-[11px] font-bold transition-colors border border-stone-700"
                        title={STAKEHOLDERS[sId]?.name}
                      >
                        {sId}
                      </button>
                    ))}
                  </div>

                  <div className="text-stone-400 text-[11px] font-mono flex items-center gap-2">
                    <span className="text-stone-500">Legal Doctrine:</span>
                    <span className="text-amber-400 font-medium">{milestone.legalPrinciple}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
