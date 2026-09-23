import React from 'react';
import { Globe2, Shield, Scale, ExternalLink, BookOpen, AlertCircle, Users } from 'lucide-react';
import { Stakeholder, StakeholderId } from '../types';
import { STAKEHOLDERS } from '../data/treatyData';

interface StakeholdersTabProps {
  selectedStakeholder: StakeholderId | 'ALL';
  onSelectStakeholder: (s: Stakeholder) => void;
  onFilterStakeholder: (id: StakeholderId | 'ALL') => void;
}

export const StakeholdersTab: React.FC<StakeholdersTabProps> = ({
  selectedStakeholder,
  onSelectStakeholder,
  onFilterStakeholder
}) => {
  const stakeholderKeys: StakeholderId[] = ['MS', 'UK', 'FR', 'US', 'EU', 'UN'];

  const displayedStakeholders = stakeholderKeys
    .map((k) => STAKEHOLDERS[k])
    .filter((s) => selectedStakeholder === 'ALL' || s.id === selectedStakeholder);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              <Globe2 className="w-4 h-4" />
              <span>Multilateral Institutional Dossiers</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              The 6 Contracting & Guarantor Entities: MS • UK • FR • US • EU • UN
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Examine the detailed diplomatic profiles, treaty obligations, historical compacts, and current active 
              mandates for each of the six entities that define the Gilani Agreement framework.
            </p>
          </div>

          {selectedStakeholder !== 'ALL' && (
            <button
              onClick={() => onFilterStakeholder('ALL')}
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-400 rounded-md text-xs font-medium border border-stone-700 transition-colors shrink-0"
            >
              Show All 6 Stakeholders
            </button>
          )}
        </div>
      </div>

      {/* Stakeholders Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {displayedStakeholders.map((s) => (
          <div
            key={s.id}
            id={`stakeholder-card-${s.id}`}
            className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm hover:border-stone-700 transition-all flex flex-col justify-between space-y-5"
          >
            <div>
              {/* Top Bar */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xl flex items-center justify-center shrink-0">
                    {s.code}
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-stone-300 uppercase tracking-wider px-2 py-0.5 rounded bg-stone-800 border border-stone-700">
                      {s.roleType}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif mt-1">{s.name}</h3>
                    {s.nativeTitle && (
                      <p className="text-xs text-stone-400 font-mono" dir="auto">{s.nativeTitle}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onSelectStakeholder(s)}
                  className="p-2 rounded-lg bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-stone-950 transition-colors"
                  title="Open Complete Dossier"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Summary */}
              <p className="text-xs text-stone-300 leading-relaxed bg-stone-800/40 p-3 rounded-lg border border-stone-800/80 mb-4">
                {s.summary}
              </p>

              {/* Historical Pact Role & Modern Mandate */}
              <div className="space-y-3">
                <div className="bg-stone-950/70 p-3.5 rounded-lg border border-stone-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-400 font-mono">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>1919 Treaty Role & Historical Compact:</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{s.historicalPactRole}</p>
                </div>

                <div className="bg-stone-950/70 p-3.5 rounded-lg border border-stone-800 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-cyan-400 font-mono">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Modern Mandate & Operational Framework:</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{s.modernMandate}</p>
                </div>

                <div className="bg-amber-950/20 p-3.5 rounded-lg border border-amber-900/40 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-400 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Stance on 100-Year Expiration (2019+):</span>
                  </div>
                  <p className="text-stone-300 leading-relaxed">{s.currentStanceOnGilani}</p>
                </div>
              </div>

              {/* Key Figures */}
              <div className="mt-4 pt-3 border-t border-stone-800">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-mono block mb-1.5 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Representative Figures:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {s.activeFigures.map((fig, idx) => (
                    <span key={idx} className="text-[11px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded border border-stone-700 font-sans">
                      {fig}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Trigger */}
            <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-400 font-mono">
                {s.keyResolutionsAndInstruments.length} Legal Instruments
              </span>
              <button
                onClick={() => onSelectStakeholder(s)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                <span>View Full Legal Instruments</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
