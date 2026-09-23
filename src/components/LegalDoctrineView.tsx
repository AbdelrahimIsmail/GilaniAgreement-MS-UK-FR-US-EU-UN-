import React, { useState } from 'react';
import { Scale, BookCheck, AlertCircle, CheckCircle, HelpCircle, FileText, ChevronRight } from 'lucide-react';
import { LegalDoctrine, StakeholderId } from '../types';
import { LEGAL_DOCTRINES } from '../data/treatyData';

interface LegalDoctrineViewProps {
  onOpenBriefModal: () => void;
  onFilterStakeholder: (id: StakeholderId) => void;
}

export const LegalDoctrineView: React.FC<LegalDoctrineViewProps> = ({
  onOpenBriefModal,
  onFilterStakeholder
}) => {
  const [activeDoctrine, setActiveDoctrine] = useState<LegalDoctrine>(LEGAL_DOCTRINES[0]);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
          <Scale className="w-4 h-4" />
          <span>Public International Law & Jurisprudence</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-white">
          Legal Doctrines Governing the Gilani Agreement & Post-2019 Sovereignty
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
          Comprehensive legal analysis examining the 100-year expiration clause, the doctrine of fundamental change of circumstances 
          (*Clausula Rebus Sic Stantibus*), the tension between *Uti Possidetis* and indigenous sovereignty, and the right to self-determination 
          under the United Nations Charter.
        </p>
      </div>

      {/* Main Grid: Doctrine Selector & Deep-Dive Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Doctrine Navigation Cards */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-mono uppercase text-stone-400 tracking-wider font-semibold px-1">
            International Law Pillars
          </h3>
          {LEGAL_DOCTRINES.map((doctrine) => {
            const isSelected = activeDoctrine.id === doctrine.id;
            return (
              <div
                key={doctrine.id}
                onClick={() => setActiveDoctrine(doctrine)}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-150 ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500/80 shadow-md ring-1 ring-amber-500/40'
                    : 'bg-stone-900/70 border-stone-800 hover:bg-stone-800/80 hover:border-stone-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-800 text-amber-400 border border-stone-700">
                    {doctrine.category}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-stone-600'}`} />
                </div>
                <h4 className="text-sm font-bold text-white font-serif">{doctrine.title}</h4>
                {doctrine.latinName && (
                  <p className="text-[11px] text-stone-400 font-mono italic mt-0.5">{doctrine.latinName}</p>
                )}
              </div>
            );
          })}

          {/* Quick Action */}
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
            <h4 className="text-xs font-bold text-stone-200">Need a Formal Legal Brief?</h4>
            <p className="text-xs text-stone-400">
              Generate a formatted legal memorandum outlining the 100-year expiration arguments for multilateral distribution.
            </p>
            <button
              onClick={onOpenBriefModal}
              className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs rounded-md flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Draft Legal Memorandum</span>
            </button>
          </div>
        </div>

        {/* Right Side: Active Doctrine Analysis */}
        <div className="lg:col-span-8 bg-stone-900 border border-stone-800 rounded-xl p-6 space-y-6 shadow-sm">
          {/* Header */}
          <div className="border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-amber-400 bg-amber-950/80 border border-amber-800 px-2 py-0.5 rounded font-semibold">
                {activeDoctrine.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1">
              {activeDoctrine.title}
            </h3>
            {activeDoctrine.latinName && (
              <p className="text-xs text-stone-400 font-mono italic mt-0.5">{activeDoctrine.latinName}</p>
            )}
          </div>

          {/* Canonical Definition */}
          <div className="bg-stone-950 p-4 rounded-lg border border-stone-800 space-y-1.5">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono flex items-center gap-1.5">
              <BookCheck className="w-3.5 h-3.5" /> Canonical Legal Definition
            </h4>
            <p className="text-sm text-stone-300 leading-relaxed font-serif">
              "{activeDoctrine.definition}"
            </p>
          </div>

          {/* Application to the 1919 Gilani Accord */}
          <div className="bg-stone-800/40 p-4 rounded-lg border border-stone-800 space-y-2">
            <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> Direct Application to the Gilani Agreement (1919–2019)
            </h4>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              {activeDoctrine.applicationToGilani}
            </p>
          </div>

          {/* Dueling Legal Arguments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pro-Masalit Legal Argument */}
            <div className="bg-stone-950/70 p-4 rounded-lg border border-emerald-900/40 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                <CheckCircle className="w-4 h-4" />
                <span>Masalit Sovereign Arguments</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {activeDoctrine.argumentsProMasalit}
              </p>
            </div>

            {/* State-Centric Counter-Arguments */}
            <div className="bg-stone-950/70 p-4 rounded-lg border border-stone-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-400 font-mono">
                <HelpCircle className="w-4 h-4" />
                <span>State & Succession Counter-Arguments</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {activeDoctrine.counterArguments}
              </p>
            </div>
          </div>

          {/* International Case Citations & Statutes */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-stone-400 font-bold font-mono mb-2">
              International Treaties, Statutes & Judicial Precedents
            </h4>
            <div className="space-y-1.5">
              {activeDoctrine.internationalCitations.map((cite, idx) => (
                <div key={idx} className="text-xs bg-stone-950 p-2.5 rounded border border-stone-800 text-stone-300 font-mono flex items-start gap-2">
                  <span className="text-amber-500 font-bold">§</span>
                  <span>{cite}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Stakeholder Responsibility */}
          <div className="p-4 rounded-lg bg-stone-950 border border-stone-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-stone-400">
              Primary Guarantor Mandates: <strong className="text-stone-200">UK (Historical Penholder), FR (Border Delimiter), UN (Article 1(2) Mandate)</strong>
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onFilterStakeholder('UK')}
                className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-blue-300 font-mono text-[11px] rounded"
              >
                Inspect UK Obligations
              </button>
              <button
                onClick={() => onFilterStakeholder('UN')}
                className="px-2 py-1 bg-stone-800 hover:bg-stone-700 text-cyan-300 font-mono text-[11px] rounded"
              >
                Inspect UN Mandates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
