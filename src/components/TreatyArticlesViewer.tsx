import React, { useState } from 'react';
import {
  BookOpen,
  Scale,
  AlertTriangle,
  CheckCircle2,
  Filter,
  Layers,
  UserCheck,
  Hash,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Printer,
  FileText,
  ListOrdered
} from 'lucide-react';
import { TreatyArticle, StakeholderId } from '../types';
import { TREATY_ARTICLES, STAKEHOLDERS } from '../data/treatyData';
import {
  NumberingStyle,
  formatArticleNumber,
  formatClauseNumber,
  formatClauseTag,
  formatSubClauseNumber,
  formatSubClauseTag
} from '../utils/numbering';

interface TreatyArticlesViewerProps {
  selectedStakeholder: StakeholderId | 'ALL';
  searchQuery: string;
  onSelectStakeholder: (id: StakeholderId) => void;
}

export const TreatyArticlesViewer: React.FC<TreatyArticlesViewerProps> = ({
  selectedStakeholder,
  searchQuery,
  onSelectStakeholder
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [numberingStyle, setNumberingStyle] = useState<NumberingStyle>('decimal');
  const [viewMode, setViewMode] = useState<'cards' | 'consolidated'>('cards');
  const [depthFilter, setDepthFilter] = useState<'all' | 'clauses' | 'articles'>('all');
  const [expandedClauses, setExpandedClauses] = useState<Record<string, boolean>>({});
  const [copiedDoc, setCopiedDoc] = useState(false);

  // Toggle individual clause expansion
  const toggleClauseExpand = (clauseKey: string) => {
    setExpandedClauses((prev) => ({
      ...prev,
      [clauseKey]: prev[clauseKey] === undefined ? false : !prev[clauseKey]
    }));
  };

  const isClauseExpanded = (clauseKey: string) => {
    return expandedClauses[clauseKey] !== false; // expanded by default
  };

  const expandAllClauses = () => {
    const allExpanded: Record<string, boolean> = {};
    TREATY_ARTICLES.forEach((art) => {
      art.clauses?.forEach((cl) => {
        allExpanded[`${art.number}-${cl.clauseIndex}`] = true;
      });
    });
    setExpandedClauses(allExpanded);
  };

  const collapseAllClauses = () => {
    const allCollapsed: Record<string, boolean> = {};
    TREATY_ARTICLES.forEach((art) => {
      art.clauses?.forEach((cl) => {
        allCollapsed[`${art.number}-${cl.clauseIndex}`] = false;
      });
    });
    setExpandedClauses(allCollapsed);
  };

  const filteredArticles = TREATY_ARTICLES.filter((article) => {
    // Stakeholder filter
    if (selectedStakeholder !== 'ALL' && !article.relevantStakeholders.includes(selectedStakeholder)) {
      return false;
    }

    // Status filter
    if (selectedStatus !== 'ALL' && article.centenaryStatus !== selectedStatus) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchSummary = article.clauseSummary.toLowerCase().includes(q);
      const matchColonial = article.colonialIntent.toLowerCase().includes(q);
      const matchSultanate = article.sultanateUnderstanding.toLowerCase().includes(q);
      const matchImplication = article.legalImplication.toLowerCase().includes(q);
      const matchClauses = article.clauses?.some(
        (cl) =>
          cl.title.toLowerCase().includes(q) ||
          cl.text.toLowerCase().includes(q) ||
          cl.subClauses?.some(
            (sc) =>
              sc.title.toLowerCase().includes(q) ||
              sc.text.toLowerCase().includes(q) ||
              sc.legalCitation?.toLowerCase().includes(q)
          )
      );
      return matchTitle || matchSummary || matchColonial || matchSultanate || matchImplication || matchClauses;
    }

    return true;
  });

  const getStatusBadge = (status: TreatyArticle['centenaryStatus']) => {
    switch (status) {
      case 'Expired (2019)':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-red-950/80 text-red-300 border border-red-800/60 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> 100-Yr Term Expired (2019)
          </span>
        );
      case 'Violated Sovereign Guarantee':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/60 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" /> Violated Sovereign Guarantee
          </span>
        );
      case 'Contested Succession':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-950/80 text-purple-300 border border-purple-800/60 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Contested Succession
          </span>
        );
      case 'Perpetual Border':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Boundary Inviolability (Adré)
          </span>
        );
    }
  };

  // Generate full consolidated text for clipboard copying / printing
  const generateConsolidatedTreatyText = (): string => {
    let output = `================================================================================
THE GILANI AGREEMENT (1919) — CODIFIED TREATY INSTRUMENT
High Contracting Parties & Multilateral Guarantors: MS-UK-FR-US-EU-UN
Numbering Scheme: ${numberingStyle.toUpperCase()} AUTOMATIC HIERARCHY
Archival Baseline: Gilani Valley, Dar Masalit (Late 1919)
================================================================================\n\n`;

    filteredArticles.forEach((art) => {
      const artHeader = formatArticleNumber(art.number, numberingStyle);
      output += `================================================================================\n`;
      output += `${artHeader.toUpperCase()}: ${art.title.toUpperCase()}\n`;
      output += `Status: ${art.centenaryStatus} | Relevant Parties: ${art.relevantStakeholders.join(', ')}\n`;
      output += `--------------------------------------------------------------------------------\n`;
      output += `Summary: "${art.clauseSummary}"\n\n`;

      if (art.clauses && art.clauses.length > 0) {
        art.clauses.forEach((cl) => {
          const clTag = formatClauseNumber(art.number, cl.clauseIndex, numberingStyle);
          output += `  ${clTag}: ${cl.title}\n`;
          output += `    "${cl.text}"\n`;

          if (cl.subClauses && cl.subClauses.length > 0) {
            cl.subClauses.forEach((sc) => {
              const scTag = formatSubClauseNumber(art.number, cl.clauseIndex, sc.subClauseIndex, numberingStyle);
              output += `      ${scTag} [${sc.title}]: ${sc.text}`;
              if (sc.legalCitation) {
                output += ` (Citation: ${sc.legalCitation})`;
              }
              output += `\n`;
            });
          }
          output += `\n`;
        });
      }
      output += `\n`;
    });

    output += `================================================================================
SIGNATORY & GUARANTOR ATTESTATION BLOCK (MS-UK-FR-US-EU-UN)
• Sultanate of Dar Masalit (MS): Sultan Bahr al-Din 'Andoka' (1919) & Crown Council
• British Sudan Administration (UK): Civil Secretary & British Resident, El Geneina
• French Republic / French Chad (FR): Plenipotentiary Commissioner, Ouaddaï / Abéché
• United States Department of State (US): International Atrocity Determinations Guarantor
• European Union External Action Service (EU): Paris Conference Pledges Guarantor
• United Nations Security Council (UN): Resolutions 1593 (2005) & 2736 (2024)
================================================================================`;

    return output;
  };

  const handleCopyConsolidated = () => {
    navigator.clipboard.writeText(generateConsolidatedTreatyText());
    setCopiedDoc(true);
    setTimeout(() => setCopiedDoc(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header & Context */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Archival Treaty Registry • Gilani Valley, Dar Masalit, 1919</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-3">
              <span>Articles & Codified Clauses of the Gilani Agreement</span>
              <span className="text-xs font-mono font-normal bg-amber-950/80 border border-amber-800/60 text-amber-300 px-2 py-0.5 rounded">
                MS-UK-FR-US-EU-UN
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-3xl leading-relaxed">
              Examine the historical articles signed between Sultan Bahr al-Din 'Andoka', the Anglo-Egyptian Sudan Government, 
              and French Equatorial Africa. All clauses and sub-clauses are codified with automated hierarchical numbering, 
              offering instant cross-referencing across imperial, sovereign, and contemporary multilateral mandates.
            </p>
          </div>

          {/* View Mode & Actions */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <div className="inline-flex rounded-lg bg-stone-950 p-1 border border-stone-800">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'cards'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive Cards</span>
              </button>
              <button
                onClick={() => setViewMode('consolidated')}
                className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold flex items-center gap-1.5 transition-colors ${
                  viewMode === 'consolidated'
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Consolidated Treaty</span>
              </button>
            </div>
          </div>
        </div>

        {/* Automatic Numbering & Formatting Toolbar */}
        <div className="mt-5 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            {/* Automatic Numbering Scheme Selector */}
            <div className="flex items-center gap-2">
              <Hash className="w-3.5 h-3.5 text-amber-400" />
              <label className="text-xs text-stone-300 font-medium font-mono">Numbering Scheme:</label>
              <select
                value={numberingStyle}
                onChange={(e) => setNumberingStyle(e.target.value as NumberingStyle)}
                className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md px-2.5 py-1.5 font-mono focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="decimal">Standard Decimal (1.0 → 1.1 → 1.1.1)</option>
                <option value="legal">Legal Statutory (§ 1 → § 1.1 → § 1.1(a))</option>
                <option value="diplomatic">Treaty Protocol (Article I → Clause 1.1 → Sub-cl. 1.1-a)</option>
              </select>
            </div>

            {/* Depth Filter */}
            {viewMode === 'cards' && (
              <div className="flex items-center gap-2">
                <ListOrdered className="w-3.5 h-3.5 text-stone-400" />
                <label className="text-xs text-stone-300 font-medium">Hierarchy Depth:</label>
                <select
                  value={depthFilter}
                  onChange={(e) => setDepthFilter(e.target.value as any)}
                  className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
                >
                  <option value="all">All Levels (Articles, Clauses & Sub-clauses)</option>
                  <option value="clauses">Levels 1 & 2 (Articles & Clauses)</option>
                  <option value="articles">Level 1 Only (Articles)</option>
                </select>
              </div>
            )}

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <label className="text-xs text-stone-300 font-medium">Status:</label>
              <select
                id="article-status-filter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-stone-800 text-stone-200 border border-stone-700 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                <option value="ALL">All Legal Statuses</option>
                <option value="Expired (2019)">Expired (2019)</option>
                <option value="Violated Sovereign Guarantee">Violated Sovereign Guarantee</option>
                <option value="Contested Succession">Contested Succession</option>
                <option value="Perpetual Border">Perpetual Border</option>
              </select>
            </div>
          </div>

          {/* Expand/Collapse All or Copy */}
          <div className="flex items-center gap-2">
            {viewMode === 'cards' && depthFilter === 'all' && (
              <div className="flex items-center gap-1">
                <button
                  onClick={expandAllClauses}
                  className="text-[11px] font-mono text-stone-400 hover:text-amber-400 px-2 py-1 rounded bg-stone-800/80 border border-stone-700 transition-colors"
                >
                  Expand All Clauses
                </button>
                <button
                  onClick={collapseAllClauses}
                  className="text-[11px] font-mono text-stone-400 hover:text-amber-400 px-2 py-1 rounded bg-stone-800/80 border border-stone-700 transition-colors"
                >
                  Collapse All
                </button>
              </div>
            )}

            {viewMode === 'consolidated' && (
              <button
                onClick={handleCopyConsolidated}
                className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-md text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                {copiedDoc ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDoc ? 'Copied Full Treaty!' : 'Copy Codified Text'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Active Filter Indicator & Level Format Legend */}
        <div className="mt-3 pt-3 border-t border-stone-800/60 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-stone-400 font-mono text-[11px]">Numbering Format Preview:</span>
            <span className="bg-stone-950 text-amber-400 px-2 py-0.5 rounded border border-stone-800 font-mono text-[11px]">
              Level 1: {formatArticleNumber(1, numberingStyle)}
            </span>
            <span className="bg-stone-950 text-amber-300 px-2 py-0.5 rounded border border-stone-800 font-mono text-[11px]">
              Level 2: {formatClauseTag(1, 1, numberingStyle)}
            </span>
            <span className="bg-stone-950 text-stone-300 px-2 py-0.5 rounded border border-stone-800 font-mono text-[11px]">
              Level 3: {formatSubClauseTag(1, 1, 1, numberingStyle)}
            </span>
          </div>

          <span className="text-stone-400 font-mono text-[11px]">
            Showing {filteredArticles.length} of 6 Articles • 18 Clauses • 42 Sub-clauses
          </span>
        </div>
      </div>

      {/* VIEW MODE 1: INTERACTIVE CARDS */}
      {viewMode === 'cards' && (
        <div className="space-y-6">
          {filteredArticles.length === 0 ? (
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-12 text-center text-stone-400">
              <BookOpen className="w-10 h-10 mx-auto mb-3 text-stone-600" />
              <p className="text-base font-semibold text-stone-300">No treaty articles match your current criteria</p>
              <p className="text-xs text-stone-500 mt-1">Try resetting the status filter or clearing your search term.</p>
            </div>
          ) : (
            filteredArticles.map((article) => {
              const articleTag = formatArticleNumber(article.number, numberingStyle);

              return (
                <div
                  key={article.number}
                  id={`treaty-article-${article.number}`}
                  className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-sm hover:border-stone-700 transition-colors"
                >
                  {/* Card Header (Level 1: Article) */}
                  <div className="bg-stone-950 px-5 py-3.5 border-b border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-serif font-bold text-xs flex items-center justify-center shrink-0">
                        {numberingStyle === 'legal' ? `§${article.number}` : article.number}
                      </span>
                      <div>
                        <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wide">
                          Level 1 • {articleTag}
                        </div>
                        <h3 className="text-base font-bold text-white font-serif">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {getStatusBadge(article.centenaryStatus)}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-5">
                    {/* Core Clause & Original Text */}
                    <div className="bg-stone-800/40 rounded-lg p-4 border border-stone-800 space-y-2">
                      <h4 className="text-xs uppercase tracking-wider text-amber-400 font-semibold font-mono">
                        Archival Article Summary
                      </h4>
                      <p className="text-sm text-stone-200 leading-relaxed font-serif">
                        "{article.clauseSummary}"
                      </p>

                      <div className="pt-2 border-t border-stone-800 text-xs text-stone-400 italic">
                        <strong className="text-stone-300 not-italic font-mono">1919 Protocol Text: </strong>
                        "{article.originalTextSummary}"
                      </div>
                    </div>

                    {/* Comparative Duality: Colonial vs Sultanate */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-stone-800/30 p-3.5 rounded-lg border border-stone-800/80 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 font-mono">
                          <Scale className="w-3.5 h-3.5" />
                          <span>British & French Colonial Intent (1919)</span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {article.colonialIntent}
                        </p>
                      </div>

                      <div className="bg-stone-800/30 p-3.5 rounded-lg border border-stone-800/80 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 font-mono">
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Masalit Sultanate Sovereign Interpretation</span>
                        </div>
                        <p className="text-xs text-stone-300 leading-relaxed">
                          {article.sultanateUnderstanding}
                        </p>
                      </div>
                    </div>

                    {/* Modern Legal Consequence & Relevance */}
                    <div className="bg-amber-950/20 border border-amber-900/40 rounded-lg p-3.5 text-xs space-y-1">
                      <span className="font-semibold text-amber-400 uppercase tracking-wider font-mono block">
                        Post-2019 Legal Consequence & Contemporary Relevance:
                      </span>
                      <p className="text-stone-300 leading-relaxed">
                        {article.legalImplication}
                      </p>
                    </div>

                    {/* CODIFIED CLAUSES & SUB-CLAUSES (LEVELS 2 & 3) */}
                    {depthFilter !== 'articles' && article.clauses && article.clauses.length > 0 && (
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono flex items-center gap-2">
                            <Hash className="w-3.5 h-3.5 text-amber-400" />
                            <span>
                              Codified Clauses & Sub-Clauses ({article.clauses.length} Clauses,{' '}
                              {article.clauses.reduce((acc, c) => acc + (c.subClauses?.length || 0), 0)} Sub-clauses)
                            </span>
                          </h4>
                          <span className="text-[10px] font-mono text-stone-400">
                            Automatic Level 2 & 3 Formatting
                          </span>
                        </div>

                        <div className="space-y-3">
                          {article.clauses.map((clause) => {
                            const clauseKey = `${article.number}-${clause.clauseIndex}`;
                            const isExpanded = isClauseExpanded(clauseKey);
                            const clauseTag = formatClauseTag(article.number, clause.clauseIndex, numberingStyle);
                            const clauseLabel = formatClauseNumber(article.number, clause.clauseIndex, numberingStyle);

                            return (
                              <div
                                key={clause.clauseIndex}
                                className="bg-stone-950/60 border border-stone-800 rounded-lg overflow-hidden transition-colors hover:border-stone-700"
                              >
                                {/* Clause Header (Level 2) */}
                                <div
                                  onClick={() => toggleClauseExpand(clauseKey)}
                                  className="px-4 py-2.5 bg-stone-900/70 border-b border-stone-800/80 flex items-center justify-between cursor-pointer hover:bg-stone-900 transition-colors select-none"
                                >
                                  <div className="flex items-center gap-2.5">
                                    <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 font-mono text-xs font-bold tracking-tight">
                                      {clauseTag}
                                    </span>
                                    <span className="text-xs font-bold text-stone-200 font-serif">
                                      {clause.title}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono text-stone-400 hidden sm:inline">
                                      {clause.subClauses?.length || 0} sub-clauses
                                    </span>
                                    {isExpanded ? (
                                      <ChevronDown className="w-4 h-4 text-stone-400" />
                                    ) : (
                                      <ChevronRight className="w-4 h-4 text-stone-400" />
                                    )}
                                  </div>
                                </div>

                                {/* Clause Body */}
                                {isExpanded && (
                                  <div className="p-4 space-y-3">
                                    <p className="text-xs text-stone-300 leading-relaxed pl-2 border-l-2 border-amber-600/40">
                                      {clause.text}
                                    </p>

                                    {/* Sub-clauses (Level 3) */}
                                    {depthFilter === 'all' && clause.subClauses && clause.subClauses.length > 0 && (
                                      <div className="pl-3 sm:pl-5 space-y-2 border-l border-stone-800">
                                        {clause.subClauses.map((subClause) => {
                                          const subClauseTag = formatSubClauseTag(
                                            article.number,
                                            clause.clauseIndex,
                                            subClause.subClauseIndex,
                                            numberingStyle
                                          );

                                          return (
                                            <div
                                              key={subClause.subClauseIndex}
                                              className="bg-stone-900/90 rounded-md p-3 border border-stone-800/70 space-y-1.5"
                                            >
                                              <div className="flex flex-wrap items-center justify-between gap-2">
                                                <div className="flex items-center gap-2">
                                                  <span className="px-1.5 py-0.5 rounded bg-stone-800 text-amber-400 font-mono text-[11px] font-bold border border-stone-700">
                                                    {subClauseTag}
                                                  </span>
                                                  <span className="text-xs font-semibold text-stone-200">
                                                    {subClause.title}
                                                  </span>
                                                </div>

                                                {subClause.legalCitation && (
                                                  <span className="text-[10px] font-mono text-stone-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                                                    Ref: {subClause.legalCitation}
                                                  </span>
                                                )}
                                              </div>

                                              <p className="text-xs text-stone-300 leading-relaxed font-sans">
                                                {subClause.text}
                                              </p>

                                              {/* Sub-clause Bound Stakeholders */}
                                              {subClause.stakeholders && (
                                                <div className="flex items-center gap-1 pt-1 text-[10px] font-mono text-stone-500">
                                                  <span>Parties:</span>
                                                  {subClause.stakeholders.map((sId) => (
                                                    <span
                                                      key={sId}
                                                      className="px-1.5 py-0.2 rounded bg-stone-800 text-stone-300 border border-stone-700 font-bold"
                                                    >
                                                      {sId}
                                                    </span>
                                                  ))}
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Stakeholder Involvement Tags */}
                    <div className="flex items-center justify-between pt-3 border-t border-stone-800 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="text-stone-500 font-mono text-[11px]">Contracting & Bound Parties:</span>
                        <div className="flex items-center gap-1">
                          {article.relevantStakeholders.map((sId) => {
                            const st = STAKEHOLDERS[sId];
                            return (
                              <button
                                key={sId}
                                onClick={() => onSelectStakeholder(sId)}
                                className="px-2 py-0.5 rounded bg-stone-800 hover:bg-amber-600 text-stone-300 hover:text-stone-950 font-mono text-[11px] font-bold transition-colors border border-stone-700"
                                title={st ? `${st.code}: ${st.name}` : sId}
                              >
                                {sId}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <span className="text-[11px] text-stone-500 font-mono">
                        Archive Reference: GA-1919-ART-0{article.number}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* VIEW MODE 2: CONSOLIDATED FORMAL TREATY DOCUMENT */}
      {viewMode === 'consolidated' && (
        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden shadow-lg">
          <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
              <FileText className="w-4 h-4" />
              <span>Full Codified Legal Instrument (MS-UK-FR-US-EU-UN)</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyConsolidated}
                className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded text-xs flex items-center gap-1 font-mono transition-colors"
              >
                {copiedDoc ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDoc ? 'Copied to Clipboard' : 'Copy Text'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs flex items-center gap-1 font-mono transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto font-mono text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-950/60">
            {/* Title Block */}
            <div className="text-center pb-6 border-b border-stone-800 space-y-2">
              <div className="text-amber-500 font-bold tracking-widest text-xs uppercase">
                Official Diplomatic & Treaty Registry Record
              </div>
              <h1 className="text-lg sm:text-2xl font-serif font-bold text-white tracking-normal">
                THE 1919 GILANI AGREEMENT CODIFIED CLAUSES
              </h1>
              <p className="text-stone-400 text-xs max-w-xl mx-auto font-sans">
                Tripartite Accord between the Sultanate of Dar Masalit, the British Sudan Administration, and French Chad, 
                with multilateral guarantor review under the MS-UK-FR-US-EU-UN diplomatic framework.
              </p>
              <div className="inline-block bg-stone-900 border border-stone-800 px-3 py-1 rounded text-xs text-stone-400">
                Numbering Format: <span className="text-amber-400 font-bold">{numberingStyle.toUpperCase()}</span> (Automatic Hierarchy)
              </div>
            </div>

            {/* Continuous Articles & Clauses */}
            <div className="space-y-8">
              {filteredArticles.map((article) => {
                const artHeader = formatArticleNumber(article.number, numberingStyle);

                return (
                  <div key={article.number} className="space-y-4 pb-6 border-b border-stone-800/80">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-800 pb-2">
                      <h2 className="text-base sm:text-lg font-serif font-bold text-white">
                        {artHeader}: {article.title}
                      </h2>
                      <span className="text-[11px] text-amber-400/90 font-mono">
                        Centenary Status: {article.centenaryStatus}
                      </span>
                    </div>

                    <p className="text-stone-300 italic font-serif text-sm">
                      "{article.clauseSummary}"
                    </p>

                    {article.clauses && article.clauses.length > 0 && (
                      <div className="space-y-4 pt-2">
                        {article.clauses.map((clause) => {
                          const clTag = formatClauseNumber(article.number, clause.clauseIndex, numberingStyle);

                          return (
                            <div key={clause.clauseIndex} className="pl-4 border-l-2 border-amber-600/30 space-y-2">
                              <div className="font-bold text-stone-200">
                                {clTag} — {clause.title}
                              </div>
                              <p className="text-stone-300 text-xs sm:text-sm">
                                {clause.text}
                              </p>

                              {clause.subClauses && clause.subClauses.length > 0 && (
                                <div className="pl-4 space-y-2 pt-1 border-l border-stone-800">
                                  {clause.subClauses.map((subClause) => {
                                    const scTag = formatSubClauseNumber(
                                      article.number,
                                      clause.clauseIndex,
                                      subClause.subClauseIndex,
                                      numberingStyle
                                    );

                                    return (
                                      <div key={subClause.subClauseIndex} className="text-xs space-y-0.5">
                                        <div className="text-amber-300/90">
                                          <span className="font-bold">{scTag}</span> [{subClause.title}]:
                                        </div>
                                        <div className="text-stone-300 font-sans pl-2">
                                          {subClause.text}
                                        </div>
                                        {subClause.legalCitation && (
                                          <div className="text-[10px] text-stone-500 font-mono pl-2">
                                            Citation: {subClause.legalCitation}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Formal Attestation */}
            <div className="pt-6 border-t border-stone-800 text-xs text-stone-400 space-y-2 bg-stone-900/60 p-4 rounded-lg">
              <div className="text-amber-400 font-bold uppercase font-mono">
                Multilateral Registry Verification Block (MS-UK-FR-US-EU-UN)
              </div>
              <p className="font-sans text-stone-300">
                This document codifies the full text of the 1919 Gilani Agreement with consistent automatic numbering 
                applied to all 6 articles, 18 clauses, and 42 sub-clauses for official circulation to the High Contracting Parties 
                and Multilateral Guarantors.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

