export type NumberingStyle = 'decimal' | 'legal' | 'diplomatic';

export function getRomanNumeral(num: number): string {
  const romanMap: [number, string][] = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let result = '';
  let n = num;
  for (const [val, sym] of romanMap) {
    while (n >= val) {
      result += sym;
      n -= val;
    }
  }
  return result || 'I';
}

export function getAlphabetLetter(index: number): string {
  // index is 1-based: 1 -> 'a', 2 -> 'b', etc.
  const code = 96 + Math.max(1, index);
  return String.fromCharCode(code);
}

export function getLowerRoman(num: number): string {
  const romanMap: [number, string][] = [
    [10, 'x'],
    [9, 'ix'],
    [5, 'v'],
    [4, 'iv'],
    [1, 'i'],
  ];
  let result = '';
  let n = num;
  for (const [val, sym] of romanMap) {
    while (n >= val) {
      result += sym;
      n -= val;
    }
  }
  return result || 'i';
}

/**
 * Level 1: Article / Primary Section Number
 */
export function formatArticleNumber(articleNum: number, style: NumberingStyle = 'decimal'): string {
  switch (style) {
    case 'decimal':
      return `Article ${articleNum}`;
    case 'legal':
      return `Art. § ${articleNum}`;
    case 'diplomatic':
      return `Article ${getRomanNumeral(articleNum)}`;
  }
}

/**
 * Level 2: Clause Number
 */
export function formatClauseNumber(articleNum: number, clauseIndex: number, style: NumberingStyle = 'decimal'): string {
  switch (style) {
    case 'decimal':
      return `Clause ${articleNum}.${clauseIndex}`;
    case 'legal':
      return `§ ${articleNum}.${clauseIndex}`;
    case 'diplomatic':
      return `Clause ${articleNum}.${clauseIndex}`;
  }
}

/**
 * Pure short identifier for Clause (e.g. "1.1", "§ 1.1")
 */
export function formatClauseTag(articleNum: number, clauseIndex: number, style: NumberingStyle = 'decimal'): string {
  switch (style) {
    case 'decimal':
      return `${articleNum}.${clauseIndex}`;
    case 'legal':
      return `§ ${articleNum}.${clauseIndex}`;
    case 'diplomatic':
      return `Cl. ${articleNum}.${clauseIndex}`;
  }
}

/**
 * Level 3: Sub-clause Number
 */
export function formatSubClauseNumber(
  articleNum: number,
  clauseIndex: number,
  subClauseIndex: number,
  style: NumberingStyle = 'decimal'
): string {
  switch (style) {
    case 'decimal':
      return `Sub-clause ${articleNum}.${clauseIndex}.${subClauseIndex}`;
    case 'legal':
      return `§ ${articleNum}.${clauseIndex}(${getAlphabetLetter(subClauseIndex)})`;
    case 'diplomatic':
      return `Sub-clause ${articleNum}.${clauseIndex}-${getAlphabetLetter(subClauseIndex)}`;
  }
}

/**
 * Pure short identifier for Sub-clause (e.g. "1.1.1", "§ 1.1(a)", "Sub-cl. 1.1(a)")
 */
export function formatSubClauseTag(
  articleNum: number,
  clauseIndex: number,
  subClauseIndex: number,
  style: NumberingStyle = 'decimal'
): string {
  switch (style) {
    case 'decimal':
      return `${articleNum}.${clauseIndex}.${subClauseIndex}`;
    case 'legal':
      return `§ ${articleNum}.${clauseIndex}(${getAlphabetLetter(subClauseIndex)})`;
    case 'diplomatic':
      return `(${getAlphabetLetter(subClauseIndex)})`;
  }
}

/**
 * Level 4: Paragraph / Paragraph Item Number (if needed)
 */
export function formatParagraphTag(
  articleNum: number,
  clauseIndex: number,
  subClauseIndex: number,
  paraIndex: number,
  style: NumberingStyle = 'decimal'
): string {
  switch (style) {
    case 'decimal':
      return `${articleNum}.${clauseIndex}.${subClauseIndex}.${paraIndex}`;
    case 'legal':
      return `§ ${articleNum}.${clauseIndex}(${getAlphabetLetter(subClauseIndex)})(${getLowerRoman(paraIndex)})`;
    case 'diplomatic':
      return `Para. (${getLowerRoman(paraIndex)})`;
  }
}
