import React, { useState } from 'react';
import { FileCheck, ShieldAlert, CheckCircle2, Search, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { DiplomaticAction, StakeholderId } from '../types';
import { DIPLOMATIC_ACTIONS, STAKEHOLDERS } from '../data/treatyData';

interface DiplomaticTrackerProps {
  selectedStakeholder: StakeholderId | 'ALL';
  onSelectStakeholder: (id: StakeholderId) => void;
  onOpenBriefModal: () => void;
}

export const DiplomaticTracker: React.FC<DiplomaticTrackerProps> = ({
  selectedStakeholder,
  onSelectStakeholder,
  onOpenBriefModal
}) => {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [localSearch, setLocalSearch] = useState<string>('');

  const filteredActions = DIPLOMATIC_ACTIONS.filter((action) => {
    if (selectedStakeholder !== 'ALL' && action.stakeholder !== selectedStakeholder) {
      return false;
    }
    if (statusFilter !== 'ALL' && action.status !== statusFilter) {
      return false;
    }
    if (localSearch.trim() !== '') {
      const q = localSearch.toLowerCase();
      return (
        action.title.toLowerCase().includes(q) ||
        action.summary.toLowerCase().includes(q) ||
        action.significance.toLowerCase().includes(q) ||
        action.referenceDoc.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getStatusBadge = (status: DiplomaticAction['status']) => {
    switch (status) {
      case 'Enforced':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Enforced
          </span>
        );
      case 'Active Investigation':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" /> Active Investigation
          </span>
        );
      case 'Pending Enforcement':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Pending Enforcement
          </span>
        );
      case 'Diplomatic Precedent':
        return (
          <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/60 flex items-center gap-1">
            <Building2 className="w-3 h-3" /> Diplomatic Precedent
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              <FileCheck className="w-4 h-4" />
              <span>International Action & Resolution Tracker</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Multilateral Actions on Dar Masalit & The Gilani Legacy
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Monitoring official determinations, UNSC resolutions, sanctions regimes, ICC investigations, 
              and diplomatic conferences initiated by the UK, France, US, EU, UN, and the Masalit Sultanate.
            </p>
          </div>

          <button
            onClick={onOpenBriefModal}
            className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-colors shrink-0 shadow-sm"
          >
            <span>Draft Resolution Response</span>
          </button>
        </div>

        {/* Filter Bar */}
        <div className="mt-6 pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search resolutions & actions..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="pl-8 pr-3 py-1 text-xs bg-stone-800 border border-stone-700 rounded-md text-stone-200 placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-amber-500 w-56"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md px-2.5 py-1 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="ALL">All Statuses</option>
              <option value="Enforced">Enforced</option>
              <option value="Active Investigation">Active Investigation</option>
              <option value="Pending Enforcement">Pending Enforcement</option>
              <option value="Diplomatic Precedent">Diplomatic Precedent</option>
            </select>
          </div>

          <div className="text-xs text-stone-400 font-mono">
            Showing {filteredActions.length} recorded actions
          </div>
        </div>
      </div>

      {/* Action Cards List */}
      <div className="space-y-4">
        {filteredActions.map((action) => {
          const st = STAKEHOLDERS[action.stakeholder];
          return (
            <div
              key={action.id}
              className="bg-stone-900 border border-stone-800 rounded-xl p-5 hover:border-stone-700 transition-colors shadow-sm space-y-3"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectStakeholder(action.stakeholder)}
                    className="w-8 h-8 rounded-md bg-stone-800 hover:bg-amber-500 hover:text-stone-950 font-mono font-bold text-xs text-amber-400 border border-stone-700 flex items-center justify-center transition-colors"
                    title={st?.name}
                  >
                    {action.stakeholder}
                  </button>
                  <span className="text-xs font-mono text-stone-400">{action.date}</span>
                  <span className="text-xs uppercase px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-semibold border border-stone-700">
                    {action.type}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusBadge(action.status)}
                </div>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="text-base font-bold text-white font-serif">{action.title}</h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">{action.summary}</p>
              </div>

              {/* Significance & Impact */}
              <div className="bg-stone-950/70 p-3 rounded-lg border border-stone-800/80 text-xs space-y-1">
                <span className="text-amber-400 font-mono font-semibold uppercase tracking-wider block">
                  Strategic & Legal Significance:
                </span>
                <p className="text-stone-300 leading-relaxed">{action.significance}</p>
              </div>

              {/* Reference Document */}
              <div className="flex items-center justify-between text-xs text-stone-400 font-mono pt-2 border-t border-stone-800">
                <span className="truncate max-w-md">Reference: {action.referenceDoc}</span>
                <span className="text-stone-500 flex items-center gap-1">
                  <span>UN/Diplomatic Record</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
