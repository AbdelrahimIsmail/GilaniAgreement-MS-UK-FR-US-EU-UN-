import React from 'react';
import { Shield, BookOpen, Globe2, Scale, FileText, Search, Landmark, FileCheck } from 'lucide-react';
import { StakeholderId } from '../types';
import { STAKEHOLDERS } from '../data/treatyData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedStakeholder: StakeholderId | 'ALL';
  setSelectedStakeholder: (s: StakeholderId | 'ALL') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenBriefModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedStakeholder,
  setSelectedStakeholder,
  searchQuery,
  setSearchQuery,
  onOpenBriefModal
}) => {
  const tabs = [
    { id: 'overview', label: 'Accord Overview', icon: Landmark },
    { id: 'stakeholders', label: 'MS-UK-FR-US-EU-UN Dossiers', icon: Globe2 },
    { id: 'articles', label: '1919 Treaty Articles', icon: BookOpen },
    { id: 'cartography', label: 'Cartography & Timeline', icon: Shield },
    { id: 'legal', label: 'Legal Doctrines & Expiration', icon: Scale },
    { id: 'tracker', label: 'UN & Multilateral Actions', icon: FileCheck },
  ];

  return (
    <header className="bg-stone-900 text-stone-100 border-b border-stone-800 sticky top-0 z-40 shadow-lg">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center border border-amber-500/40 shadow-inner">
            <Landmark className="w-6 h-6 text-amber-100" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/60">
                Diplomatic & Legal Framework
              </span>
              <span className="text-xs text-stone-400 font-mono">1919 – 2019 Centenary Accord</span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
              Gilani Agreement: <span className="text-amber-400 font-sans text-sm sm:text-base font-semibold">MS • UK • FR • US • EU • UN</span>
            </h1>
          </div>
        </div>

        {/* Global Search & Action */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              id="global-search-input"
              type="text"
              placeholder="Search articles, clauses, legal terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-stone-800/90 border border-stone-700 rounded-md text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs font-mono"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <button
            id="open-brief-generator-btn"
            onClick={onOpenBriefModal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-md text-xs font-medium tracking-wide shadow-sm transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Generate Diplomatic Brief</span>
          </button>
        </div>
      </div>

      {/* Stakeholder Pill Filters Bar */}
      <div className="bg-stone-950/80 border-t border-stone-800/80 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-stone-400 text-xs font-medium tracking-wider uppercase whitespace-nowrap">
              Stakeholder Filter:
            </span>
            <button
              id="filter-stakeholder-all"
              onClick={() => setSelectedStakeholder('ALL')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                selectedStakeholder === 'ALL'
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              All 6 Pillars
            </button>
            {(Object.keys(STAKEHOLDERS) as StakeholderId[]).map((id) => {
              const s = STAKEHOLDERS[id];
              const isSelected = selectedStakeholder === id;
              return (
                <button
                  id={`filter-stakeholder-${id}`}
                  key={id}
                  onClick={() => setSelectedStakeholder(id)}
                  className={`px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-300 font-bold scale-105'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                  title={`${s.code}: ${s.name}`}
                >
                  <span className="font-mono font-bold">{s.code}</span>
                  <span className="hidden sm:inline font-normal text-[11px] opacity-90 truncate max-w-[120px]">
                    {s.code === 'MS' ? 'Masalit' : s.code === 'UK' ? 'United Kingdom' : s.code === 'FR' ? 'France' : s.code === 'US' ? 'United States' : s.code === 'EU' ? 'European Union' : 'United Nations'}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-stone-400 font-mono text-[11px]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Tripartite Treaty: 1919 | Expiration Milestone: 2019 (100 yrs)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Tabs */}
      <div className="bg-stone-900 border-t border-stone-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                id={`nav-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded-md whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-stone-800 text-amber-400 shadow-sm border border-stone-700'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
