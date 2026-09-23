import React from 'react';
import { X, Shield, Globe, Scale, BookOpen, AlertCircle, ExternalLink } from 'lucide-react';
import { Stakeholder } from '../types';

interface StakeholderDetailModalProps {
  stakeholder: Stakeholder | null;
  onClose: () => void;
  onFilterThis: (id: Stakeholder['id']) => void;
}

export const StakeholderDetailModal: React.FC<StakeholderDetailModalProps> = ({
  stakeholder,
  onClose,
  onFilterThis
}) => {
  if (!stakeholder) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-stone-900 border border-stone-700 rounded-xl max-w-2xl w-full shadow-2xl overflow-hidden text-stone-100 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header with Color Accent */}
        <div className="px-6 py-5 border-b border-stone-800 bg-stone-950/80 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-bold font-mono text-xl shrink-0">
              {stakeholder.code}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-stone-800 text-amber-400 font-semibold border border-stone-700">
                  {stakeholder.roleType}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1 font-serif">{stakeholder.name}</h2>
              {stakeholder.nativeTitle && (
                <p className="text-xs text-stone-400 font-mono mt-0.5" dir="auto">{stakeholder.nativeTitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-6 py-5 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5 mb-1.5">
              <Globe className="w-3.5 h-3.5" /> Executive Summary
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed bg-stone-800/50 p-3 rounded-lg border border-stone-800">
              {stakeholder.summary}
            </p>
          </div>

          {/* Role in the 1919 Gilani Accord */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5 mb-1.5">
              <BookOpen className="w-3.5 h-3.5" /> 1919 Gilani Treaty Role & Historical Compact
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed bg-stone-800/40 p-3 rounded-lg border border-stone-800/60">
              {stakeholder.historicalPactRole}
            </p>
          </div>

          {/* Current Stance on the 100-Year Expiration (2019 - Present) */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-amber-500 font-bold flex items-center gap-1.5 mb-1.5">
              <AlertCircle className="w-3.5 h-3.5" /> Position on 100-Year Expiration & Modern Status
            </h3>
            <div className="text-sm text-stone-200 bg-amber-950/30 p-3.5 rounded-lg border border-amber-800/40 leading-relaxed">
              {stakeholder.currentStanceOnGilani}
            </div>
          </div>

          {/* Modern Mandate & Legal Standing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-stone-800/50 p-3 rounded-lg border border-stone-800">
              <h4 className="text-xs font-semibold text-stone-300 flex items-center gap-1 mb-1">
                <Shield className="w-3 h-3 text-amber-400" /> Modern Mandate
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">{stakeholder.modernMandate}</p>
            </div>
            <div className="bg-stone-800/50 p-3 rounded-lg border border-stone-800">
              <h4 className="text-xs font-semibold text-stone-300 flex items-center gap-1 mb-1">
                <Scale className="w-3 h-3 text-amber-400" /> International Legal Standing
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">{stakeholder.legalStanding}</p>
            </div>
          </div>

          {/* Active Key Figures */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
              Key Historical & Active Diplomatic Figures
            </h3>
            <div className="flex flex-wrap gap-2">
              {stakeholder.activeFigures.map((fig, idx) => (
                <span key={idx} className="text-xs bg-stone-800 text-stone-300 px-2.5 py-1 rounded-md border border-stone-700">
                  {fig}
                </span>
              ))}
            </div>
          </div>

          {/* Key Legal Instruments & Treaties */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
              Applicable Treaties, Charters & Resolutions
            </h3>
            <ul className="space-y-1.5">
              {stakeholder.keyResolutionsAndInstruments.map((inst, idx) => (
                <li key={idx} className="text-xs text-stone-300 flex items-start gap-2">
                  <span className="text-amber-500 font-mono font-bold">•</span>
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Interests */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
              Strategic & Diplomatic Priorities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {stakeholder.coreInterests.map((interest, idx) => (
                <div key={idx} className="text-xs bg-stone-950/60 text-stone-300 p-2 rounded border border-stone-800 flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between">
          <button
            onClick={() => {
              onFilterThis(stakeholder.id);
              onClose();
            }}
            className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
          >
            <span>Filter all views for {stakeholder.code}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md text-xs font-medium transition-colors"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
