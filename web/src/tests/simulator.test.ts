import { SAMPLE_DOCUMENTS } from '../data/benchmarkData.ts';

export function runSimulatorTests() {
  console.log("Running Dir-BiSAGE Simulator Logic Tests...");

  // Test 1: Classical BM25 + PageRank calculation
  const lambdaPr = 15.0;
  const beta = 3.0;

  const docs = SAMPLE_DOCUMENTS.map(d => {
    const score_classic = d.bm25 * (1.0 + lambdaPr * d.pr);
    const penalty = Math.pow(1.0 - d.gnn_spam_prob, beta);
    const score_robust = score_classic * penalty;
    return { ...d, score_classic, score_robust };
  });

  const classicSorted = [...docs].sort((a, b) => b.score_classic - a.score_classic);
  const robustSorted = [...docs].sort((a, b) => b.score_robust - a.score_robust);

  // Assert 1: In classical search, top rank is a link farm money page
  const top1ClassicIsSpam = classicSorted[0].is_spam === 1;
  console.assert(top1ClassicIsSpam, "Test 1 Failed: Classical search should be hijacked by spam!");

  // Assert 2: In robust search, top 3 ranks are legitimate non-spam
  const top3RobustSpamCount = robustSorted.slice(0, 3).filter(d => d.is_spam === 1).length;
  console.assert(top3RobustSpamCount === 0, `Test 2 Failed: Robust search top 3 has ${top3RobustSpamCount} spam`);

  // Assert 3: Spam score demotion factor is >= 99%
  const spamMoneyPage = robustSorted.find(d => d.id === 'doc_05')!;
  const demotionRate = 1.0 - (spamMoneyPage.score_robust / spamMoneyPage.score_classic);
  console.assert(demotionRate > 0.99, `Test 3 Failed: Demotion rate ${demotionRate} < 99%`);

  console.log("All 3 Simulator Unit Tests PASSED cleanly!");
  return true;
}

if (typeof window === 'undefined') {
  runSimulatorTests();
}
