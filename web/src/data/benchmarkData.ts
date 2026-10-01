export interface RankedDocument {
  id: string;
  name: string;
  type: string;
  is_spam: number;
  bm25: number;
  pr: number;
  gnn_spam_prob: number;
  rank_classic?: number;
  score_classic?: number;
  rank_robust?: number;
  score_robust?: number;
}

export interface DomainProfile {
  domain: string;
  type: 'Authority' | 'Academic' | 'Legitimate Commercial' | 'Black-Hat Money Page' | 'Link Farm Ring' | 'Camouflage Node';
  is_spam: boolean;
  in_degree: number;
  out_degree: number;
  reciprocity: number;
  pagerank: number;
  trustrank: number;
  dirbisage_prob: number;
  features: {
    domain_length: number;
    subdomain_depth: number;
    digit_ratio: number;
    keyword_density: number;
    anchor_diversity: number;
    camo_links_to_seeds: number;
  };
  narrative: string;
}

export const SAMPLE_DOCUMENTS: RankedDocument[] = [
  {
    id: "doc_01",
    name: "national-bank-loans.gov.uk",
    type: "Authority (.gov)",
    is_spam: 0,
    bm25: 8.9,
    pr: 0.035,
    gnn_spam_prob: 0.02
  },
  {
    id: "doc_02",
    name: "finance-consumer-advice.org.uk",
    type: "Reputable NGO",
    is_spam: 0,
    bm25: 8.4,
    pr: 0.028,
    gnn_spam_prob: 0.03
  },
  {
    id: "doc_03",
    name: "cambridge-fintech-review.ac.uk",
    type: "Academic (.ac.uk)",
    is_spam: 0,
    bm25: 7.9,
    pr: 0.040,
    gnn_spam_prob: 0.01
  },
  {
    id: "doc_04",
    name: "money-market-today.co.uk",
    type: "Commercial Legit",
    is_spam: 0,
    bm25: 8.1,
    pr: 0.022,
    gnn_spam_prob: 0.05
  },
  {
    id: "doc_05",
    name: "instant-cash-credit-99.biz",
    type: "Link Farm Money Page",
    is_spam: 1,
    bm25: 9.2,
    pr: 0.085,
    gnn_spam_prob: 0.96
  },
  {
    id: "doc_06",
    name: "approved-loans-direct-24.info",
    type: "Link Farm Supporter",
    is_spam: 1,
    bm25: 9.0,
    pr: 0.078,
    gnn_spam_prob: 0.94
  },
  {
    id: "doc_07",
    name: "quick-payday-credit-now.top",
    type: "Link Farm Camouflage",
    is_spam: 1,
    bm25: 8.8,
    pr: 0.065,
    gnn_spam_prob: 0.91
  },
  {
    id: "doc_08",
    name: "guaranteed-loan-express.cc",
    type: "Link Farm Ring",
    is_spam: 1,
    bm25: 8.7,
    pr: 0.070,
    gnn_spam_prob: 0.93
  },
  {
    id: "doc_09",
    name: "general-news-portal.co.uk",
    type: "News Portal",
    is_spam: 0,
    bm25: 6.2,
    pr: 0.030,
    gnn_spam_prob: 0.04
  },
  {
    id: "doc_10",
    name: "credit-history-guide.org",
    type: "Informational",
    is_spam: 0,
    bm25: 7.2,
    pr: 0.018,
    gnn_spam_prob: 0.06
  }
];

export const PRESET_DOMAINS: Record<string, DomainProfile> = {
  "national-bank-loans.gov.uk": {
    domain: "national-bank-loans.gov.uk",
    type: "Authority",
    is_spam: false,
    in_degree: 342,
    out_degree: 45,
    reciprocity: 0.18,
    pagerank: 0.035,
    trustrank: 0.88,
    dirbisage_prob: 0.02,
    features: {
      domain_length: 27,
      subdomain_depth: 2,
      digit_ratio: 0.0,
      keyword_density: 0.12,
      anchor_diversity: 0.78,
      camo_links_to_seeds: 0
    },
    narrative: "Authentic governmental banking authority. Enjoys natural, multi-hop organic in-citations from diverse university and civic portals."
  },
  "instant-cash-credit-99.biz": {
    domain: "instant-cash-credit-99.biz",
    type: "Black-Hat Money Page",
    is_spam: true,
    in_degree: 86,
    out_degree: 28,
    reciprocity: 0.42,
    pagerank: 0.085,
    trustrank: 0.12,
    dirbisage_prob: 0.96,
    features: {
      domain_length: 26,
      subdomain_depth: 1,
      digit_ratio: 0.08,
      keyword_density: 0.38,
      anchor_diversity: 0.22,
      camo_links_to_seeds: 5
    },
    narrative: "Target money page of a 37-node black-hat syndicate. Siphons synthetic PageRank from farm supporters and injects 5 camouflage links to gov/edu domains to mislead classical algorithms."
  },
  "cambridge-fintech-review.ac.uk": {
    domain: "cambridge-fintech-review.ac.uk",
    type: "Academic",
    is_spam: false,
    in_degree: 215,
    out_degree: 62,
    reciprocity: 0.22,
    pagerank: 0.040,
    trustrank: 0.79,
    dirbisage_prob: 0.01,
    features: {
      domain_length: 31,
      subdomain_depth: 2,
      digit_ratio: 0.0,
      keyword_density: 0.14,
      anchor_diversity: 0.85,
      camo_links_to_seeds: 0
    },
    narrative: "Legitimate university publication host. High anchor diversity, strong organic inbound citations, low commercial keyword stuffing."
  },
  "quick-payday-credit-now.top": {
    domain: "quick-payday-credit-now.top",
    type: "Camouflage Node",
    is_spam: true,
    in_degree: 64,
    out_degree: 35,
    reciprocity: 0.38,
    pagerank: 0.065,
    trustrank: 0.15,
    dirbisage_prob: 0.91,
    features: {
      domain_length: 27,
      subdomain_depth: 1,
      digit_ratio: 0.0,
      keyword_density: 0.44,
      anchor_diversity: 0.19,
      camo_links_to_seeds: 6
    },
    narrative: "High-density link farm supporter. Dense internal reciprocal linking with syndicate peers; heavily links out to Wikipedia to artificially exploit undirected GNN symmetrization."
  }
};

export const BENCHMARK_RESULTS = [
  { method: "TrustRank (VLDB\'04)", roc_auc: 0.758, pr_auc: 0.482, f1_spam: 0.461, acc: 0.812, type: "Random Walk Heuristic" },
  { method: "Logistic Regression", roc_auc: 0.812, pr_auc: 0.591, f1_spam: 0.582, acc: 0.846, type: "Linear Model" },
  { method: "Random Forest (80 trees)", roc_auc: 0.874, pr_auc: 0.695, f1_spam: 0.684, acc: 0.885, type: "Tree Ensemble" },
  { method: "Gradient Boosting", roc_auc: 0.881, pr_auc: 0.712, f1_spam: 0.701, acc: 0.892, type: "Tree Ensemble" },
  { method: "Standard GCN (ICLR\'17)", roc_auc: 0.843, pr_auc: 0.624, f1_spam: 0.612, acc: 0.865, type: "Undirected GNN" },
  { method: "Standard GraphSAGE", roc_auc: 0.885, pr_auc: 0.718, f1_spam: 0.715, acc: 0.898, type: "Undirected GNN" },
  { method: "CARE-GNN (CIKM\'20)", roc_auc: 0.915, pr_auc: 0.784, f1_spam: 0.776, acc: 0.921, type: "Reinforced GNN" },
  { method: "Dir-BiSAGE (Proposed)", roc_auc: 0.962, pr_auc: 0.884, f1_spam: 0.841, acc: 0.954, type: "Directed Dual-Channel GNN", is_best: true }
];

export const ABLATION_RESULTS = [
  { variant: "Full Dir-BiSAGE (Proposed)", roc_auc: 0.962, pr_auc: 0.884, f1_spam: 0.841, diff_pr: "0.0%", status: "Full Model" },
  { variant: "w/o Outward Channel (In-Only)", roc_auc: 0.898, pr_auc: 0.772, f1_spam: 0.725, diff_pr: "-11.2%", status: "Blind to Outbound Farm Manipulation" },
  { variant: "w/o Inward Channel (Out-Only)", roc_auc: 0.912, pr_auc: 0.795, f1_spam: 0.751, diff_pr: "-8.9%", status: "Blind to Synthetic Inbound Citations" },
  { variant: "Symmetrized Undirected ($A=A^T$)", roc_auc: 0.871, pr_auc: 0.738, f1_spam: 0.692, diff_pr: "-14.6%", status: "Directionality Collapse via Camouflage" },
  { variant: "w/o TrustRank Prior Feature", roc_auc: 0.935, pr_auc: 0.825, f1_spam: 0.783, diff_pr: "-5.9%", status: "Loss of Orthogonal Seed Bias" },
  { variant: "w/o Focal Loss (Standard CE)", roc_auc: 0.924, pr_auc: 0.791, f1_spam: 0.714, diff_pr: "-9.3%", status: "Overwhelmed by 87% Normal Class" }
];
