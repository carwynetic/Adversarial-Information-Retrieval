# Dir-BiSAGE Interactive Demo Website

A modern, high-performance web demonstration application for **Dir-BiSAGE (Adversarial Information Retrieval & Directed Graph Neural Networks)**, built with React, Vite, TypeScript, and standard CSS following strict **Z-Pattern Layout** guidelines.

## 🚀 Quick Start (Local Run)

### 1. Development Mode
To run the development server locally with Hot Module Replacement (HMR):
```powershell
cd web
npm install
npm run dev
```
The server will be available at: `http://localhost:5173/`

### 2. Run Automated Unit Tests (/hs-web-testing)
Execute unit test assertions validating downstream BM25 retrieval, PageRank vulnerability, and Dir-BiSAGE spam demotion:
```powershell
npm test
```

### 3. Production Build & Preview (/hs-deploy)
To compile a type-checked, optimized production bundle and preview it locally:
```powershell
npm run build
npm run preview
```

---

## 📐 Layout Architecture: Z-Pattern Implementation

The interface follows the psychological eye-scanning **Z-Pattern**, optimized for storytelling and technical validation:

1. **Top Horizontal Sweep (Point 1 ➔ Point 2)**:
   - **Point 1 (Top-Left)**: Product branding (`Dir-BiSAGE`), project context (`IEEE SEG301`), and language switcher (`🇻🇳 VI / 🇬🇧 EN`).
   - **Point 2 (Top-Right)**: Fast navigation links, role-based authentication portal (`Better Auth`), and primary call-to-action (`Live Simulator`).

2. **Diagonal Hero Sweep (Point 2 ➔ Point 3)**:
   - Sweeps across the hero headline exposing black-hat SEO manipulation of PageRank.
   - Highlights 3 strategic KPI metrics:
     - `+40.2% PR-AUC` over classical TrustRank.
     - `(1 - P)^3` spam score collapse.
     - `100%` clean Top-3 SERP ranking.

3. **Bottom Horizontal of Hero (Point 3 ➔ Point 4)**:
   - Primary action buttons directing users to the interactive simulator or benchmark scorecard.

4. **Alternating Zig-Zag Content Rows (Repeated Z-Flow)**:
   - **Zig 1 (Left ➔ Right)**: *The Adversarial Camouflage Trap* — Interactive comparison of undirected symmetrization (`A = A + A^T`) vs directed decoupled propagation.
   - **Zag 2 (Right ➔ Left)**: *Dual-Channel Architecture* — Decoupled inward authority $\mathcal{N}_{\text{in}}(v)$ vs outward link farm discovery $\mathcal{N}_{\text{out}}(v)$.
   - **Zig 3 (Left ➔ Right)**: *Focal Loss Optimization* — Mitigating the 13% web spam class imbalance ($\gamma = 2.0, \alpha = 0.75$).
   - **Zag 4 (Right ➔ Left)**: *Downstream Search Penalization* — Mathematical formulation $S_{\text{robust}} = S_{\text{classic}} \times (1 - P_{\text{spam}})^\beta$.

5. **Interactive Laboratory (Core Playground)**:
   - **Tab 1: Downstream Search Simulator**: Live query simulation with interactive penalty exponent slider ($\beta \in [1.0, 5.0]$) and in-browser unit test runner.
   - **Tab 2: Web Host Feature Inspector**: Deep dive into 18 multi-modal graph and lexical features.
   - **Tab 3: Link Topology Visualizer**: Clickable SVG graph network illustrating camouflage edges and link farm cliques.

6. **Benchmark Scorecard & Ablation**:
   - Table I: 8-baseline comparative evaluation on WEBSPAM-UK2007.
   - Table II: Ablation study showing the -14.6% PR-AUC collapse when undirected symmetrization is used.

7. **Footer Horizon (Closing Sweep)**:
   - Clickable links to download the complete 6-page IEEE Conference Paper (PDF), 17-slide Presentation Deck (PPTX), and examine the Python codebase in `src/`.

---

## 🌐 Deployment Guidelines (/hs-deploy)

### Deploy to Vercel
```powershell
npx vercel
```
*Framework Preset: Vite, Root Directory: `web`, Build Command: `npm run build`, Output Directory: `dist`.*

### Deploy to Netlify
```powershell
npx netlify deploy --prod --dir=dist
```

### Static Hosting / Docker
Serve the static output inside `web/dist/` using any standard web server (Nginx, Caddy, or Python `http.server`).
