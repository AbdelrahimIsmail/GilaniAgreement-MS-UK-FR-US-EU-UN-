/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { AccordOverview } from './components/AccordOverview';
import { StakeholdersTab } from './components/StakeholdersTab';
import { TreatyArticlesViewer } from './components/TreatyArticlesViewer';
import { InteractiveMapTimeline } from './components/InteractiveMapTimeline';
import { LegalDoctrineView } from './components/LegalDoctrineView';
import { DiplomaticTracker } from './components/DiplomaticTracker';
import { StakeholderDetailModal } from './components/StakeholderDetailModal';
import { BriefGeneratorModal } from './components/BriefGeneratorModal';
import { Stakeholder, StakeholderId } from './types';
import { STAKEHOLDERS } from './data/treatyData';
import { Landmark, Scale, BookOpen, ShieldCheck, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedStakeholder, setSelectedStakeholder] = useState<StakeholderId | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalStakeholder, setModalStakeholder] = useState<Stakeholder | null>(null);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState<boolean>(false);

  const handleSelectStakeholderById = (id: StakeholderId) => {
    if (STAKEHOLDERS[id]) {
      setModalStakeholder(STAKEHOLDERS[id]);
    }
  };

  const handleFilterStakeholder = (id: StakeholderId | 'ALL') => {
    setSelectedStakeholder(id);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Primary Multilateral Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedStakeholder={selectedStakeholder}
        setSelectedStakeholder={setSelectedStakeholder}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenBriefModal={() => setIsBriefModalOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <AccordOverview
            onSelectStakeholder={(s) => setModalStakeholder(s)}
            onNavigateTab={(tab) => setActiveTab(tab)}
            onOpenBriefModal={() => setIsBriefModalOpen(true)}
          />
        )}

        {activeTab === 'stakeholders' && (
          <StakeholdersTab
            selectedStakeholder={selectedStakeholder}
            onSelectStakeholder={(s) => setModalStakeholder(s)}
            onFilterStakeholder={handleFilterStakeholder}
          />
        )}

        {activeTab === 'articles' && (
          <TreatyArticlesViewer
            selectedStakeholder={selectedStakeholder}
            searchQuery={searchQuery}
            onSelectStakeholder={handleSelectStakeholderById}
          />
        )}

        {activeTab === 'cartography' && (
          <InteractiveMapTimeline
            selectedStakeholder={selectedStakeholder}
            onSelectStakeholder={handleSelectStakeholderById}
          />
        )}

        {activeTab === 'legal' && (
          <LegalDoctrineView
            onOpenBriefModal={() => setIsBriefModalOpen(true)}
            onFilterStakeholder={(id) => {
              setSelectedStakeholder(id);
              setActiveTab('stakeholders');
            }}
          />
        )}

        {activeTab === 'tracker' && (
          <DiplomaticTracker
            selectedStakeholder={selectedStakeholder}
            onSelectStakeholder={handleSelectStakeholderById}
            onOpenBriefModal={() => setIsBriefModalOpen(true)}
          />
        )}
      </main>

      {/* Institutional Diplomatic Footer */}
      <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 py-10 mt-12 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-stone-200 font-serif font-bold text-sm">
                <Landmark className="w-4 h-4 text-amber-500" />
                <span>Gilani Agreement Treaty Portal</span>
              </div>
              <p className="text-stone-400 leading-relaxed text-[11px]">
                A specialized diplomatic and public international law resource dedicated to the 1919 Tripartite Accord 
                between the Masalit Sultanate, Great Britain, and France, and modern multilateral mandates involving the US, EU, and UN.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-mono text-stone-300 uppercase tracking-wider font-semibold text-[11px]">
                Primary Signatories
              </h4>
              <ul className="space-y-1 text-[11px]">
                <li className="text-emerald-400 font-mono">MS • Masalit Sultanate (Dar Andoka)</li>
                <li className="text-blue-400 font-mono">UK • United Kingdom (Anglo-Egyptian Sudan)</li>
                <li className="text-indigo-400 font-mono">FR • France (Chad / Ouaddaï Delimitation)</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-mono text-stone-300 uppercase tracking-wider font-semibold text-[11px]">
                Multilateral Guarantors
              </h4>
              <ul className="space-y-1 text-[11px]">
                <li className="text-rose-400 font-mono">US • United States (Atrocity Determinations)</li>
                <li className="text-amber-400 font-mono">EU • European Union (EEAS & Sanctions)</li>
                <li className="text-cyan-400 font-mono">UN • United Nations (UNSC 2736 & ICC Mandates)</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-mono text-stone-300 uppercase tracking-wider font-semibold text-[11px]">
                Archival & Legal Citations
              </h4>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                The National Archives (Kew, Foreign Office FO 371) • Quai d'Orsay Diplomatic Archives • 
                UN Document System (S/RES/2736, S/RES/1593) • Vienna Convention on the Law of Treaties (Art. 62).
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 font-mono">
            <div>
              <span>1919 – 2019 Centenary Protocol Documentation • All rights reserved</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Treaties & UNSC Records</span>
              </span>
              <span>•</span>
              <button
                onClick={() => setIsBriefModalOpen(true)}
                className="text-amber-400 hover:underline flex items-center gap-1"
              >
                <FileText className="w-3 h-3" />
                <span>Generate Diplomatic Memorandum</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Stakeholder Detail Modal */}
      <StakeholderDetailModal
        stakeholder={modalStakeholder}
        onClose={() => setModalStakeholder(null)}
        onFilterThis={(id) => {
          setSelectedStakeholder(id);
          setActiveTab('stakeholders');
        }}
      />

      {/* Diplomatic Brief Generator Modal */}
      <BriefGeneratorModal
        isOpen={isBriefModalOpen}
        onClose={() => setIsBriefModalOpen(false)}
        defaultStakeholder={selectedStakeholder}
      />
    </div>
  );
}
