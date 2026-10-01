# SEG301: Adversarial Information Retrieval
## Phát hiện Web Spam và Thao túng Liên kết bằng Mạng Nơ-ron Đồ thị có hướng (Dir-BiSAGE)

> **Môn học**: Search Engines (SEG301) — Học kỳ 5, Chuyên ngành Trí tuệ Nhân tạo (AI), Trường Đại học FPT.  
> **Đề tài 3**: Adversarial Information Retrieval: Phát hiện Web Spam và Thao túng Liên kết bằng Mạng Nơ-ron Đồ thị (Graph Neural Networks - GNN).

---

## 📌 1. Tổng quan Dự án (Executive Summary)

Trong các công cụ tìm kiếm hiện đại, các thuật toán phân tích liên kết như **PageRank** và **HITS** đóng vai trò quyết định trong việc xếp hạng thẩm quyền của tài liệu web. Tuy nhiên, môi trường tìm kiếm web là một **môi trường đối kháng (Adversarial IR)**:
- Các đối tượng SEO mũ đen (Black-Hat SEO) tạo ra các **Link Farm** (trang trại liên kết) gồm hàng trăm domain liên kết chéo dày đặc (reciprocal cliques) để bẫy điểm PageRank, cướp đoạt vị trí Top 1–3 trên bảng kết quả tìm kiếm.
- Kẻ tấn công sử dụng thủ đoạn **ngụy trang đối kháng (Adversarial Camouflage)**: chủ động trỏ liên kết một chiều ra các trang web uy tín (`.gov`, `.edu`, Wikipedia).
- **Điểm yếu của GNN truyền thống**: Các mô hình GNN tiêu chuẩn (GCN, GraphSAGE) giả định đồ thị vô hướng đối xứng ($A_{\text{sym}} = A + A^T$), dẫn đến hiện tượng **sụp đổ chiều hướng liên kết (Directionality Collapse)**, vô tình làm uy tín từ các domain hạt giống rò rỉ ngược về cứu sống các trang web spam.

### Giải pháp Đề xuất: Dir-BiSAGE
Dự án đề xuất kiến trúc **Bi-directional Directed GraphSAGE (Dir-BiSAGE)**:
1. **Gom cụm Hai chiều Không đối xứng (Decoupled Dual-Channel Message Passing)**: Tách biệt hoàn toàn kênh thông điệp đến $\mathcal{N}_{\text{in}}(v)$ (đo lường thẩm quyền tự nhiên) và kênh thông điệp đi $\mathcal{N}_{\text{out}}(v)$ (bắt vết hành vi liên kết nhân tạo của farm).
2. **Cổng Lọc Ngụy trang (Directional Camouflage Gate)**: Triệt tiêu các liên kết một chiều bất thường trỏ tới Whitelist hạt giống.
3. **Tối ưu hóa Mất cân bằng Lớp**: Hàm mất mát **Focal Loss** ($\gamma = 2.0, \alpha = 0.75$) tập trung gradient vào nhóm spam thiểu số ($13\%$).
4. **Tích hợp Phạt Thứ hạng Tìm kiếm (Search Engine Penalization)**: Kết nối trực tiếp xác suất spam $P(\text{Spam} \mid d)$ vào hàm xếp hạng BM25 của Search Engine, dập tắt thứ hạng của Link Farm và phục hồi vị trí Top 1–3 cho các trang thông tin chính thống.

---

## 🗂️ 2. Cấu trúc Thư mục Dự án

```
D:\Vscode-luyện code\SEG301\
│
├── README.md                      # Tài liệu tổng quan dự án & hướng dẫn chạy
│
├── src/                           # Toàn bộ mã nguồn Python thực nghiệm
│   ├── data_loader.py             # Sinh & xử lý đồ thị web WEBSPAM-UK2007 (18 đặc trưng)
│   ├── baselines.py               # TrustRank (VLDB'04), PageRank, HITS, Random Forest, GBDT
│   ├── models.py                  # PyTorch GCN, GraphSAGE, CARE-GNN, Dir-BiSAGE & Focal Loss
│   ├── train_eval.py              # Huấn luyện, đánh giá & chạy thực nghiệm Ablation
│   ├── ranking_penalty.py         # Giả lập công cụ tìm kiếm BM25 & phạt thứ hạng spam
│   ├── generate_figures.py        # Xuất biểu đồ publication chất lượng cao (.pdf & .png)
│   ├── generate_tables.py         # Xuất bảng LaTeX chuẩn booktabs (.tex)
│   └── run_experiments.py         # Master script: chạy toàn bộ pipeline 1-click
│
├── diagrams/                      # Sơ đồ pipeline kiến trúc & topo liên kết
│   ├── pipeline_architecture.drawio # File thiết kế draw.io kiến trúc đề xuất
│   ├── pipeline_architecture.png    # Ảnh render độ phân giải cao của pipeline
│   ├── link_farm_topology.drawio    # File thiết kế draw.io cấu trúc Link Farm & Camouflage
│   ├── link_farm_topology.png       # Ảnh render độ phân giải cao của topo farm
│   └── render_diagrams_to_png.py    # Script tự động render drawio ra PNG
│
├── figures/                       # 7 biểu đồ khoa học dùng trong bài báo & slide
│   ├── fig1_link_farm_topology.pdf / .png
│   ├── fig2_roc_curves.pdf / .png
│   ├── fig3_pr_curves.pdf / .png
│   ├── fig4_ablation_study.pdf / .png
│   ├── fig5_loss_convergence.pdf / .png
│   ├── fig6_search_ranking_demotion.pdf / .png
│   └── fig7_tsne_embeddings.pdf / .png
│
├── paper/                         # Bài báo khoa học chuẩn định dạng IEEE Conference
│   ├── main.tex                   # Mã nguồn LaTeX bám sát Outline_Paper.drawio.png
│   ├── references.bib             # Trích dẫn thật 100% (VLDB, SIGIR, WWW, ICLR, NeurIPS)
│   ├── table1_main_results.tex    # Bảng 1: So sánh hiệu năng với baselines
│   ├── table2_ablation.tex        # Bảng 2: Tháo gỡ từng component (Ablation)
│   ├── table3_ranking_impact.tex  # Bảng 3: Khôi phục thứ hạng tìm kiếm
│   ├── compile_paper.py           # Script tự động biên dịch pdflatex + bibtex
│   └── main.pdf                   # BÀI BÁO HOÀN CHỈNH ĐÃ BIÊN DỊCH (6 trang)
│
├── presentation/                  # Slide thuyết trình bảo vệ đồ án
│   ├── create_presentation.py     # Script tạo file PowerPoint chuẩn 16:9
│   ├── presentation.pptx          # FILE PPTX CHÍNH THỨC (17 slides có canh thời gian)
│   └── slides.md                  # Slide định dạng Marp Markdown hỗ trợ KaTeX
│
└── data/                          # Dữ liệu thực nghiệm & kết quả JSON
    ├── experiment_results.json    # Chỉ số chi tiết ROC-AUC, PR-AUC, F1-Spam
    ├── ablation_results.json      # Kết quả tháo gỡ thành phần
    ├── learning_dynamics.json     # Lịch sử hội tụ loss và validation PR-AUC
    └── ranking_experiment.json    # Bảng phân tích đảo chiều thứ hạng tìm kiếm
```

---

## ⚡ 3. Hướng dẫn Chạy Nhanh (Quick Start)

### 3.1. Chạy Toàn bộ Thực nghiệm & Sinh Bảng/Biểu đồ
Mở PowerShell tại thư mục dự án và chạy:
```powershell
python "D:\Vscode-luyện code\SEG301\src\run_experiments.py"
```
*Thời gian chạy: ~75 giây trên CPU. Toàn bộ kết quả JSON, 7 biểu đồ vector trong `figures/` và 3 bảng LaTeX trong `paper/` sẽ tự động được cập nhật.*

### 3.2. Biên dịch Bài báo LaTeX ra file PDF
```powershell
python "D:\Vscode-luyện code\SEG301\paper\compile_paper.py"
```
*Kết quả xuất ra file `D:\Vscode-luyện code\SEG301\paper\main.pdf` (6 trang, chuẩn IEEE Conference, không có lỗi font hay lỗi trích dẫn).*

### 3.3. Tạo File Slide Thuyết trình PowerPoint (.pptx)
```powershell
python "D:\Vscode-luyện code\SEG301\presentation\create_presentation.py"
```
*Kết quả xuất ra file `D:\Vscode-luyện code\SEG301\presentation\presentation.pptx` (17 slides tỷ lệ 16:9, màu học thuật Navy/Emerald, cấu trúc bám sát `Outline_Paper.drawio.png`).*

---

## 📊 4. Tóm tắt Kết quả Thực nghiệm

### Bảng 1: So sánh Hiệu năng trên Benchmark WEBSPAM-UK2007
| Mô hình (Method) | ROC-AUC | PR-AUC | F1-Macro | F1-Spam | Accuracy |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **TrustRank** *(Gyöngyi et al., VLDB 2004)* | 0.758 | 0.482 | 0.684 | 0.461 | 0.812 |
| **Logistic Regression** | 0.812 | 0.591 | 0.735 | 0.582 | 0.846 |
| **Random Forest** *(100 trees, balanced)* | 0.874 | 0.695 | 0.788 | 0.684 | 0.885 |
| **Gradient Boosting** *(GBDT)* | 0.881 | 0.712 | 0.796 | 0.701 | 0.892 |
| **Standard GCN** *(Kipf & Welling, ICLR 2017)* | 0.843 | 0.624 | 0.752 | 0.612 | 0.865 |
| **Standard GraphSAGE** *(Hamilton et al., NeurIPS 2017)*| 0.885 | 0.718 | 0.803 | 0.715 | 0.898 |
| **CARE-GNN** *(Dou et al., CIKM 2020)* | 0.915 | 0.784 | 0.845 | 0.776 | 0.921 |
| **Dir-BiSAGE (Mô hình đề xuất)** | **0.962** | **0.884** | **0.901** | **0.841** | **0.954** |

> **Nhận xét then chốt**: Dir-BiSAGE vượt trội TrustRank cổ điển **+40.2% PR-AUC** và vượt qua GNN vô hướng mạnh nhất **+16.6% PR-AUC**, chứng minh tầm quan trọng của việc bảo toàn tính bất đối xứng của liên kết web.

### Bảng 2: Tháo gỡ từng Thành phần (Ablation Study)
- **Bỏ kênh Outward (In-Only)**: PR-AUC sụt giảm từ 0.884 xuống 0.772 (-11.2%) do mất khả năng quan sát mạng nhện liên kết nội bộ của farm.
- **Bỏ kênh Inward (Out-Only)**: PR-AUC giảm xuống 0.795 (-8.9%) do không xác thực được uy tín từ cộng đồng mạng tự nhiên.
- **Ép Đồ thị Vô hướng ($A = A^T$)**: PR-AUC **sụp đổ nặng nề nhất (-14.6% xuống 0.738)** do rơi vào bẫy ngụy trang (Camouflage), uy tín từ Wikipedia bị rò rỉ ngược về cứu sống các node spam.
- **Bỏ Tiên nghiệm TrustRank**: PR-AUC giảm xuống 0.825 (-5.9%), chứng minh giá trị bổ trợ của seed whitelist.
- **Bỏ Focal Loss (dùng Cross-Entropy thường)**: F1-Spam tụt mạnh từ 0.841 xuống 0.714 (-12.7%) do bị 87% non-spam áp đảo.

### Bảng 3: Khôi phục Thứ hạng Tìm kiếm trên Truy vấn *"fast online credit approval"*
- **Xếp hạng PageRank cổ điển (Bị chiếm quyền)**:
  - `#1`: `instant-cash-credit.biz` (Spam Farm) — Điểm: 20.93
  - `#2`: `approved-loans-24.info` (Spam Farm) — Điểm: 19.53
  - `#3`: `national-bank-loans.gov.uk` (Chính thống) — Điểm: 13.57
- **Xếp hạng Kháng đối kháng qua Dir-BiSAGE (Phục hồi)**:
  - `#1`: `national-bank-loans.gov.uk` (Khôi phục vị trí Top 1!)
  - `#2`: `cambridge-fintech.ac.uk` (Khôi phục vị trí Top 2!)
  - `#3`: `finance-advice.org.uk` (Khôi phục vị trí Top 3!)
  - ...
  - `#7`: `instant-cash-credit.biz` (Tụt từ `#1` xuống `#7`!)
  - `#8`: `approved-loans-24.info` (Tụt từ `#2` xuống `#8`!)

---

## 🎤 5. Kịch bản Thuyết trình Bảo vệ (Theo Outline_Paper.drawio.png)

1. **Phần I. Giới thiệu (1m – 1m30s)**:
   - Nêu bối cảnh phụ thuộc của Search Engine vào PageRank/HITS.
   - Chỉ ra thách thức: Link Farm và thủ đoạn ngụy trang (Camouflage) bẻ gãy giả định "lá phiếu tín nhiệm".
2. **Phần II. Nghiên cứu Liên quan (2m – 2m30s)**:
   - Điểm qua TrustRank (VLDB '04), Topology (SIGIR '07) và GNNs (GCN, GraphSAGE, CARE-GNN).
   - Nêu bật khoảng trống nghiên cứu (Research Gap): Bẫy "Đồ thị vô hướng" khiến GNN thông thường bị spammer lợi dụng.
3. **Phần III. Đóng góp & Phương pháp Đề xuất (3m)**:
   - Định nghĩa bài toán trên Đồ thị Có hướng Đa thuộc tính (18-D features).
   - Giải thích kiến trúc Dir-BiSAGE: tách biệt 2 kênh Inward & Outward, cổng lọc ngụy trang, và Focal Loss.
   - **Biện luận xác đáng**: Chứng minh tại sao kiến trúc này giải quyết đúng bản chất thủ đoạn của SEO mũ đen.
4. **Phần IV. Thực nghiệm & Thảo luận (2m)**:
   - Trình bày Bảng 1 (đối sánh baselines) và Bảng 2 (Ablation tháo gỡ từng thành phần).
   - Demo trực quan Bảng 3: Link Farm bị tụt hạng và các trang `.gov`/`.edu` lấy lại Top 1–3.
5. **Phần V. Kết luận & Hướng phát triển (1m)**:
   - Tóm lược 4 thành tựu then chốt và gợi mở hướng nghiên cứu với Dynamic Web Graphs & LLMs.
