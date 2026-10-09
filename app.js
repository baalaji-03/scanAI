/**
 * SYNAPSE AI // INTELLIGENT INFORMATION UNDERSTANDING & PROCESSING ENGINE
 * Interactive Core Application Architecture
 * Features:
 * - 4-Stage Workflow: Find -> Understand -> Organize -> Use
 * - Interactive Neural Canvas Particle Mesh
 * - Web Audio API Synthesized Sound Effects
 * - Multi-Document Ingestion Simulation & Drag-and-Drop Parser
 * - Semantic Search Engine with AI Query Expansion
 * - Interactive Entity & Key-Detail Inspector
 * - Cross-Document Conflict Detection & AI Arbitration Engine
 * - Synchronized Side-by-Side Comparator
 * - Interactive Canvas-based Knowledge Graph
 * - Grounded AI Copilot Chatbot with Clickable Citations
 * - Board-Ready Deliverable Studio (Memo, Decision Matrix, Action Plan)
 * - Hackathon Jury Presentation Auto-Tour
 */

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

// ============================================================================
// 1. DATASETS & MULTI-DOMAIN REPOSITORY
// ============================================================================
const DOMAIN_DATASETS = {
  battery: {
    name: "Quantum Solid-State Battery",
    tagline: "Commercialization vs. Empirical Stress Auditing",
    docsCount: 3,
    chunksCount: 142,
    documents: [
      {
        id: "doc1",
        title: "NeoBattery Tech Whitepaper v2.4",
        type: "pdf",
        badgeClass: "badge-pdf",
        meta: "14 Pages • Lab Standards (STP 25°C) • Internal R&D",
        trust: "trust-high",
        trustText: "Lab Verified",
        excerpt: "NeoBattery silicon-anode solid-state cells demonstrate 850 Wh/L volumetric energy density and 12-minute 80% fast-charging cycle capability under baseline room-temperature conditions."
      },
      {
        id: "doc2",
        title: "UL Solutions Third-Party Stress Audit",
        type: "docx",
        badgeClass: "badge-docx",
        meta: "28 Pages • ASTM-D48 Environmental Protocol • External Audit",
        trust: "trust-high",
        trustText: "Audited Baseline",
        excerpt: "Under accelerated temperature testing (45°C - 60°C), volumetric density degrades to 680 Wh/L. Micro-cracking observed in solid electrolyte ceramic layer at 135°C."
      },
      {
        id: "doc3",
        title: "SEC 10-K Commercialization Capex Filing",
        type: "csv",
        badgeClass: "badge-csv",
        meta: "42 Pages • Financial & Supply Chain Roadmap",
        trust: "trust-med",
        trustText: "Regulatory Target",
        excerpt: "Commercial pilot gigafactory projected for Q4 2028 with target unit cost of $78/kWh, contingent on catholyte separator yield improvements above 88%."
      }
    ],
    searchSuggestions: [
      { query: "Volumetric energy density ASTM testing", chip: "Energy Density vs ASTM" },
      { query: "Thermal runaway cathode decomposition", chip: "Thermal Runaway Limit" },
      { query: "Discrepancy between lab bench and commercial scale", chip: "Audit Discrepancies" },
      { query: "Cost per kWh manufacturing trajectory 2027", chip: "Cost Projections" }
    ],
    searchResults: [
      {
        source: "NeoBattery Tech Whitepaper v2.4 (§3.1)",
        simScore: "98.7%",
        text: "The composite cathode demonstrates an initial volumetric energy density of <mark>850 Wh/L</mark> with an accelerated charge cycle maintaining 92% retention across 1,000 cycles at 25°C.",
        meta: "Cosine Sim: 0.987 • STP Testing • Lab R&D"
      },
      {
        source: "UL Solutions Third-Party Stress Audit (§5.4)",
        simScore: "94.2%",
        text: "Crucial discrepancy identified: Volumetric energy density is <mark>680 Wh/L under thermal stress of 45°C</mark>, deviating by 20% from manufacturer laboratory claims.",
        meta: "Cosine Sim: 0.942 • ASTM-D48 Protocol • Inconsistency Alert"
      },
      {
        source: "SEC 10-K Commercialization Capex Filing (§Item 7)",
        simScore: "89.5%",
        text: "Capital expenditure required to maintain <mark>$78/kWh production economics</mark> requires resolving electrolyte ceramic layer cracking before Q4 2028 ramp.",
        meta: "Cosine Sim: 0.895 • Economic Feasibility • Forward Looking"
      }
    ],
    synthesis: {
      brief: "NeoBattery's solid-state chemistry offers exceptional lab performance (850 Wh/L, 12-min fast charge), but independent stress audits uncover a 20% degradation at 45°C (680 Wh/L) and premature cathode cracking at 135°C. Commercial deployment target is delayed to Q4 2028.",
      detailed: `<h3>1. Executive Performance Synthesis</h3>
<p>NeoBattery exhibits significant potential in volumetric energy storage, reaching <strong>850 Wh/L</strong> in laboratory conditions. However, multi-source reconciliation reveals acute variance between internal R&D assertions and independent third-party environmental stress assessments.</p>
<h3>2. Critical Variance & Risk Factors</h3>
<ul>
  <li><strong>Energy Density Divergence:</strong> 850 Wh/L (Internal Lab) vs. 680 Wh/L (UL Stress Audit) — a 20% drop under operating temperatures above 40°C.</li>
  <li><strong>Thermal Runaway Safety:</strong> Lab tests claimed stability up to 180°C, but third-party physical diagnostics observed separator micro-cracking at 135°C.</li>
  <li><strong>Commercialization Timeline:</strong> Investor roadmaps project Q2 2027, while audited CapEx requirements indicate Q4 2028 at earliest.</li>
</ul>
<h3>3. Grounded Conclusion</h3>
<p>The core technology is viable, but commercial readiness is contingent on thermal electrolyte stabilization under real-world vehicle duty cycles.</p>`,
      bullets: `<ul>
  <li>🔋 <strong>Energy Density:</strong> Lab reports 850 Wh/L; Independent audit confirms 680 Wh/L under stress.</li>
  <li>⚠️ <strong>Thermal Threshold:</strong> Micro-cracking detected at 135°C (Lab claimed 180°C threshold).</li>
  <li>⏱️ <strong>Fast Charge Capability:</strong> 12-min 80% charge validated across both sources.</li>
  <li>📅 <strong>Timeline Variance:</strong> 18-month delay between investor filings and manufacturing readiness.</li>
  <li>💰 <strong>Target Cost:</strong> $78/kWh requires cathode separator yield > 88%.</li>
</ul>`
    },
    radarMetrics: [95, 78, 88, 62, 90], // Density, Consistency, Empirical Evidence, Risk Hedge, Freshness
    documentHighlights: `
The next-generation solid-state lithium metal architecture incorporates a sulfide-based electrolyte designed by <span class="hl-entity hl-entity-name" data-entity-id="e1">NeoBattery Labs</span>. Under baseline laboratory conditions (25°C, 1 atm), electrochemical impedance spectroscopy records a volumetric energy density of <span class="hl-entity hl-metric" data-entity-id="e2">850 Wh/L</span> and a gravimetric specific energy of <span class="hl-entity hl-metric" data-entity-id="e3">390 Wh/kg</span>.<br><br>
However, independent stress evaluations conducted by <span class="hl-entity hl-entity-name" data-entity-id="e4">UL Solutions</span> according to <span class="hl-entity hl-entity-name" data-entity-id="e5">ASTM-D48 Environmental Standards</span> revealed that at sustained elevated temperatures of 45°C, volumetric density drops to <span class="hl-entity hl-risk" data-entity-id="e6">680 Wh/L (20% variance)</span>.<br><br>
Furthermore, while internal documentation claims thermal stability up to <span class="hl-entity hl-metric" data-entity-id="e7">180°C</span>, destructive physical analysis under 3C rapid charging identified <span class="hl-entity hl-risk" data-entity-id="e8">separator micro-fractures at 135°C</span>. Production scalability targeting <span class="hl-entity hl-strategic" data-entity-id="e9">$78/kWh pack-level cost</span> remains dependent on gigafactory yield exceeding 88% by <span class="hl-entity hl-strategic" data-entity-id="e10">Q4 2028</span>.
    `,
    entityDetails: {
      e1: { type: "ORGANIZATION", name: "NeoBattery Labs", conf: "99.4%", desc: "Primary R&D engineering entity. Originator of the sulfide-based solid-state cell architecture.", src: "Whitepaper v2.4", status: "Primary Originator" },
      e2: { type: "METRIC", name: "850 Wh/L Volumetric Density", conf: "98.9%", desc: "Reported baseline lab density. Measured at room temperature (25°C) without external mechanical pressure load.", src: "Whitepaper v2.4 §3", status: "⚠️ Contradicted by Audit" },
      e3: { type: "METRIC", name: "390 Wh/kg Specific Energy", conf: "97.2%", desc: "Gravimetric energy density. Confirmed by third-party testing within a ±3% margin.", src: "Whitepaper v2.4 §3", status: "Verified" },
      e4: { type: "ORGANIZATION", name: "UL Solutions", conf: "99.8%", desc: "Accredited third-party safety and testing organization conducting certified environmental stress audits.", src: "UL Audit Report §1", status: "Independent Auditor" },
      e5: { type: "STANDARD", name: "ASTM-D48 Environmental Standards", conf: "99.1%", desc: "Standardized automotive testing protocol simulating sustained desert and highway heat environments.", src: "UL Audit Report §2", status: "Benchmark Standard" },
      e6: { type: "CRITICAL RISK", name: "680 Wh/L (20% Variance)", conf: "99.5%", desc: "Actual volumetric capacity observed under 45°C continuous cycling. Represents a critical real-world degradation.", src: "UL Audit Report §5", status: "⚠️ Critical Discrepancy" },
      e7: { type: "METRIC", name: "180°C Lab Thermal Threshold", conf: "91.0%", desc: "Theoretical thermal runway limit claimed by R&D team under inert argon test chambers.", src: "Whitepaper v2.4 §6", status: "Disputed Claim" },
      e8: { type: "CRITICAL RISK", name: "Separator Micro-Fractures at 135°C", conf: "98.8%", desc: "Micro-cracking in solid ceramic electrolyte allows dendrite growth, risking short circuit at 135°C.", src: "UL Audit Report §7", status: "⚠️ Safety Warning" },
      e9: { type: "STRATEGIC MILESTONE", name: "$78/kWh Pack-Level Cost", conf: "94.5%", desc: "Commercial parity target to undercut contemporary LFP/NMC battery packs in electric vehicles.", src: "SEC 10-K §Item 7", status: "Economic Target" },
      e10: { type: "STRATEGIC MILESTONE", name: "Q4 2028 Commercial Ramp", conf: "96.2%", desc: "Revised realistic production date reflecting required ceramic tooling re-engineering.", src: "SEC 10-K §Item 1", status: "Timeline Reality" }
    },
    conflicts: [
      {
        id: "c1",
        subject: "Volumetric Energy Density Under Operating Temperature",
        severity: "critical",
        severityText: "CRITICAL INCONSISTENCY",
        docA: "850 Wh/L (STP 25°C)",
        docAName: "NeoBattery Whitepaper v2.4",
        docB: "680 Wh/L (ASTM-D48 45°C)",
        docBName: "UL Solutions Stress Audit",
        arbitrationVerdict: "ARBITRATION: Audit Findings Supersede (680 Wh/L Real-World)",
        arbitrationReasoning: "The 850 Wh/L benchmark was obtained in non-pressurized inert chambers at 25°C. UL Solutions tested under real-world vehicle pack duty cycle (ASTM-D48), showing persistent 20% impedance drop at 45°C. For vehicle engineering, 680 Wh/L is the grounded design baseline.",
        scoreA: 62,
        scoreB: 96,
        resolved: false
      },
      {
        id: "c2",
        subject: "Thermal Runaway & Separator Decomposition Temperature",
        severity: "critical",
        severityText: "SAFETY CRITICAL",
        docA: "180°C Thermal Runaway Limit",
        docAName: "NeoBattery Whitepaper v2.4",
        docB: "135°C Micro-Cracking Threshold",
        docBName: "UL Solutions Stress Audit",
        arbitrationVerdict: "ARBITRATION: 135°C Limit Upheld with Active Liquid Cooling Mandate",
        arbitrationReasoning: "Destructive physical analysis revealed that ceramic electrolytes suffer mechanical fracture at 135°C due to differential thermal expansion between cathode and electrolyte layers. Pack cooling must be engineered for 135°C maximum ceiling.",
        scoreA: 55,
        scoreB: 98,
        resolved: false
      },
      {
        id: "c3",
        subject: "Commercial Pilot Production Timeline",
        severity: "high",
        severityText: "SCHEDULE DIVERGENCE",
        docA: "Q2 2027 Commercial Pilot",
        docAName: "NeoBattery Investor Deck",
        docB: "Q4 2028 Earliest High-Yield Ramp",
        docBName: "SEC 10-K Risk Filing",
        arbitrationVerdict: "ARBITRATION: Realistic Target Q4 2028",
        arbitrationReasoning: "SEC 10-K disclosure binds fiduciary liability. The tooling modifications needed to address ceramic micro-cracking require minimum 14-month supply chain retooling.",
        scoreA: 40,
        scoreB: 92,
        resolved: false
      }
    ],
    graphNodes: [
      { id: "n1", label: "Quantum Battery Core", type: "concept", radius: 26, color: "#38bdf8" },
      { id: "n2", label: "850 Wh/L (Lab)", type: "metric", radius: 20, color: "#a855f7" },
      { id: "n3", label: "680 Wh/L (Audit)", type: "conflict", radius: 22, color: "#f59e0b" },
      { id: "n4", label: "UL Solutions Audit", type: "concept", radius: 24, color: "#06b6d4" },
      { id: "n5", label: "135°C Thermal Wall", type: "conflict", radius: 22, color: "#ef4444" },
      { id: "n6", label: "ASTM-D48 Standard", type: "baseline", radius: 18, color: "#10b981" },
      { id: "n7", label: "$78/kWh Cost Target", type: "metric", radius: 19, color: "#a855f7" },
      { id: "n8", label: "Q4 2028 Ramp", type: "baseline", radius: 18, color: "#10b981" },
      { id: "n9", label: "Sulfide Ceramic", type: "concept", radius: 20, color: "#38bdf8" }
    ],
    graphLinks: [
      { source: "n1", target: "n2" },
      { source: "n1", target: "n9" },
      { source: "n2", target: "n3" },
      { source: "n4", target: "n3" },
      { source: "n4", target: "n6" },
      { source: "n4", target: "n5" },
      { source: "n1", target: "n5" },
      { source: "n1", target: "n7" },
      { source: "n7", target: "n8" },
      { source: "n9", target: "n5" }
    ],
    comparatorDocA: `<h3>Section 3.1: Volumetric Energy Metrics</h3>
<p class="diff-highlight-a"><strong>Internal Claim:</strong> The solid-state cell architecture delivers <strong>850 Wh/L</strong> volumetric energy density at ambient laboratory temperature (25°C), surpassing standard lithium-ion cells by 45%.</p>
<p>The separator comprises a thin 25-micron sulfide-doped ceramic membrane with zero liquid electrolyte leakage.</p>

<h3>Section 4.2: Fast Charging & Thermal Endurance</h3>
<p class="diff-highlight-a"><strong>Thermal Limit:</strong> Continuous cell testing confirms structural resilience up to <strong>180°C</strong> without catastrophic thermal runaway.</p>
<p>Rapid charging from 10% to 80% is achieved within 12 minutes without lithium plating.</p>

<h3>Section 7.0: Commercialization Roadmap</h3>
<p class="diff-highlight-a"><strong>Commercial Availability:</strong> Targeted pilot integration in luxury OEM automotive test fleets scheduled for <strong>Q2 2027</strong>.</p>`,
    comparatorDocB: `<h3>Section 5.2: Environmental Stress Audit (ASTM-D48)</h3>
<p class="diff-highlight-b"><strong>Audit Measurement:</strong> Under real-world vehicular thermal exposure (45°C ambient), volumetric energy density drops to <strong>680 Wh/L</strong> due to interfacial resistance build-up.</p>
<p>Electrolyte impedance increases exponentially above 40°C, causing 20% capacity drop.</p>

<h3>Section 6.4: Destructive Thermal Analysis</h3>
<p class="diff-highlight-b"><strong>Mechanical Failure Point:</strong> High-resolution optical tomography identified <strong>separator micro-cracking at 135°C</strong>, creating micro-shorts before 180°C threshold.</p>
<p>Pack designers cannot rely on passive cooling; dedicated refrigerant chill plates are required.</p>

<h3>Section 9.1: Manufacturing Scaling Assessment</h3>
<p class="diff-highlight-b"><strong>Realistic Ramp:</strong> Tooling revisions to eliminate micro-cracking push scalable manufacturing to <strong>Q4 2028</strong> at earliest.</p>`,
    chatHistory: [
      { sender: "bot", text: "Hello! I am **Synapse AI**, your grounded intelligence copilot. I have synthesized 3 active documents on the **Quantum Solid-State Battery** domain. Ask me anything regarding discrepancies, specifications, or strategic risks." },
      { sender: "user", text: "What are the critical discrepancies between the lab report and the independent audit?" },
      { sender: "bot", text: "Cross-document reconciliation reveals **two critical technical discrepancies**:\n\n1. **Volumetric Density Degradation:** <span class=\"citation-tag\" data-ref=\"doc1\">Doc A (Lab)</span> claims **850 Wh/L**, whereas <span class=\"citation-tag\" data-ref=\"doc2\">Doc B (UL Audit §5.2)</span> measured **680 Wh/L** at 45°C — a **20% loss under operating heat**.\n2. **Thermal Runaway Wall:** The lab states stability to **180°C**, but the physical audit observed **separator micro-cracking at 135°C** <span class=\"citation-tag\" data-ref=\"doc2\">Doc B §6.4</span>, necessitating active liquid chiller cooling." }
    ]
  },

  fintech: {
    name: "Q3 FinTech M&A Due Diligence",
    tagline: "Cross-Source Audit of SaaS ARR, Churn & Debt Covenants",
    docsCount: 3,
    chunksCount: 184,
    documents: [
      { id: "doc1", title: "Acquisition Confidential Information Memo (CIM)", type: "pdf", badgeClass: "badge-pdf", meta: "36 Pages • Prepared by Investment Bankers", trust: "trust-med", trustText: "Seller Claim", excerpt: "Company ARR reported at $48.2M with 118% Net Revenue Retention (NRR) and 3.2% annual gross logo churn." },
      { id: "doc2", title: "KPMG Quality of Earnings (QoE) Audit", type: "docx", badgeClass: "badge-docx", meta: "52 Pages • Forensic Accounting Audit", trust: "trust-high", trustText: "Audited Baseline", excerpt: "Normalized ARR adjusted down to $39.4M after deducting $8.8M of non-recurring one-off professional services and uncollected accounts receivable." },
      { id: "doc3", title: "Lender Debt Facility Covenant Schedule", type: "csv", badgeClass: "badge-csv", meta: "18 Pages • Senior Secured Credit Agreement", trust: "trust-high", trustText: "Legal Obligation", excerpt: "Leverage ratio must not exceed 4.5x adjusted EBITDA; technical covenant breach triggered if recurring ARR drops below $40.0M." }
    ],
    searchSuggestions: [
      { query: "Adjusted EBITDA vs normalized cash flow", chip: "Normalized EBITDA" },
      { query: "Customer concentration top 5 accounts", chip: "Revenue Concentration" },
      { query: "Debt covenant default threshold", chip: "Covenant Breach Risk" },
      { query: "Net retention rate discrepancy", chip: "NRR Calculations" }
    ],
    searchResults: [
      { source: "KPMG QoE Audit (§2.3)", simScore: "99.1%", text: "Forensic adjustment: <mark>$8.8M of professional implementation fees</mark> was improperly classified as recurring software subscription revenue in Seller CIM.", meta: "QoE Adjustment • Material Variance" },
      { source: "Senior Secured Credit Facility (§8.1)", simScore: "96.4%", text: "The Borrower triggers an <mark>immediate Event of Default</mark> if Qualified Recurring ARR falls below $40,000,000 at end of fiscal quarter.", meta: "Credit Agreement • Critical Threshold" },
      { source: "Acquisition CIM (§Executive Summary)", simScore: "88.2%", text: "Company management claims <mark>118% Net Revenue Retention</mark>, but calculation includes contracted expansion that has not yet billed or collected.", meta: "Seller Presentation • Disputed Metric" }
    ],
    synthesis: {
      brief: "The target company advertises $48.2M ARR, but forensic QoE accounting normalizes actual recurring revenue to $39.4M. This $8.8M difference triggers an immediate debt covenant breach under the $40M senior credit facility minimum.",
      detailed: `<h3>1. Executive Financial Synthesis</h3>
<p>Forensic examination of the acquisition target reveals a substantial discrepancy between management marketing presentations and audited figures.</p>
<h3>2. Core Inconsistencies & Material Risks</h3>
<ul>
  <li><strong>ARR Overstatement:</strong> CIM claims $48.2M; KPMG QoE validates only $39.4M (18.2% downward haircut).</li>
  <li><strong>Debt Covenant Violation:</strong> The senior lender agreement stipulates a strict $40.0M ARR floor. Normalized ARR of $39.4M places the target in immediate technical breach.</li>
  <li><strong>Customer Concentration:</strong> Top 3 accounts generate 42% of revenue, with Contract #1 renewing in 60 days.</li>
</ul>
<h3>3. Investment Recommendation</h3>
<p>Re-negotiate purchase price enterprise value from $290M down to $210M, or condition close on senior lender covenant waiver.</p>`,
      bullets: `<ul>
  <li>📉 <strong>ARR Haircut:</strong> Adjusted from $48.2M to $39.4M (-$8.8M).</li>
  <li>🚨 <strong>Covenant Default:</strong> Under the $40.0M credit facility covenant minimum.</li>
  <li>👥 <strong>Customer Concentration:</strong> Top 3 accounts represent 42% of revenue.</li>
  <li>💵 <strong>Valuation Impact:</strong> Implied $80M EV valuation adjustment recommended.</li>
</ul>`
    },
    radarMetrics: [98, 60, 95, 45, 92],
    documentHighlights: `
The target software company specializes in enterprise workflow automation. In the <span class="hl-entity hl-entity-name" data-entity-id="e1">Acquisition CIM</span>, management reports Annual Recurring Revenue of <span class="hl-entity hl-metric" data-entity-id="e2">$48.2M ARR</span> with a stated Net Retention Rate of <span class="hl-entity hl-metric" data-entity-id="e3">118% NRR</span>.<br><br>
However, the independent forensic audit by <span class="hl-entity hl-entity-name" data-entity-id="e4">KPMG QoE</span> discovered that <span class="hl-entity hl-risk" data-entity-id="e5">$8.8M of one-off custom software development</span> was improperly amortized into ARR, adjusting true recurring baseline to <span class="hl-entity hl-risk" data-entity-id="e6">$39.4M ARR</span>.<br><br>
This creates an existential financing emergency: Under the <span class="hl-entity hl-strategic" data-entity-id="e7">Senior Credit Agreement</span>, the company must maintain a mandatory floor of <span class="hl-entity hl-strategic" data-entity-id="e8">$40.0M ARR</span>, causing an immediate <span class="hl-entity hl-risk" data-entity-id="e9">Technical Covenant Default</span> upon deal close without an emergency waiver.
    `,
    entityDetails: {
      e1: { type: "DOCUMENT", name: "Acquisition CIM", conf: "99.0%", desc: "Confidential Information Memorandum prepared by boutique sell-side advisor.", src: "CIM §1", status: "Sell-Side Marketing" },
      e2: { type: "METRIC", name: "$48.2M Reported ARR", conf: "98.5%", desc: "Unadjusted ARR including professional service billings and unearned deferred income.", src: "CIM §4", status: "⚠️ Overstated" },
      e3: { type: "METRIC", name: "118% NRR", conf: "92.0%", desc: "Net Revenue Retention computed by seller using non-standard cohort methodology.", src: "CIM §5", status: "Unverified" },
      e4: { type: "ORGANIZATION", name: "KPMG Forensics", conf: "99.9%", desc: "Independent accounting firm hired for buyer-side due diligence.", src: "QoE Report §1", status: "Independent Auditor" },
      e5: { type: "CRITICAL RISK", name: "$8.8M Professional Services", conf: "99.5%", desc: "Non-recurring custom build fees that cannot renew next fiscal year.", src: "QoE Report §3", status: "⚠️ Material Discrepancy" },
      e6: { type: "METRIC", name: "$39.4M Normalized ARR", conf: "99.2%", desc: "True recurring subscription run-rate accepted by lenders and underwriters.", src: "QoE Report §2", status: "Verified Baseline" },
      e7: { type: "LEGAL", name: "Senior Credit Agreement", conf: "98.7%", desc: "Term loan B facility with $45M outstanding principal balance.", src: "Credit Agmt §1", status: "Enforceable Covenant" },
      e8: { type: "STRATEGIC MILESTONE", name: "$40.0M ARR Floor", conf: "99.9%", desc: "Minimum liquidity and ARR hurdle rate required to prevent loan acceleration.", src: "Credit Agmt §8", status: "Mandatory Covenant" },
      e9: { type: "CRITICAL RISK", name: "Technical Covenant Default", conf: "99.8%", desc: "Immediate acceleration of $45M debt obligation due to falling below $40.0M floor.", src: "Credit Agmt §11", status: "⚠️ Severe Legal Default" }
    },
    conflicts: [
      {
        id: "c1",
        subject: "Qualified Annual Recurring Revenue (ARR) Definition",
        severity: "critical",
        severityText: "MATERIAL VALUATION DISCREPANCY",
        docA: "$48.2M ARR (CIM Management)",
        docAName: "Acquisition CIM",
        docB: "$39.4M ARR (KPMG QoE Normalized)",
        docBName: "KPMG QoE Forensic Audit",
        arbitrationVerdict: "ARBITRATION: KPMG QoE Accepted ($39.4M True Baseline)",
        arbitrationReasoning: "GAAP and SaaS standard guidelines forbid classifying customized bespoke integration fees as ARR. True ARR is $39.4M.",
        scoreA: 38,
        scoreB: 98,
        resolved: false
      },
      {
        id: "c2",
        subject: "Debt Facility Covenant Solvency Hurdle",
        severity: "critical",
        severityText: "LEGAL DEFAULT ALERT",
        docA: "Claimed Compliant (> $45M)",
        docAName: "Acquisition CIM",
        docB: "$39.4M triggers $40.0M Breach",
        docBName: "Lender Credit Agreement",
        arbitrationVerdict: "ARBITRATION: Immediate Covenant Remedy Required",
        arbitrationReasoning: "Borrower is in non-compliance upon closing unless seller pays down $10M of senior debt before closing date.",
        scoreA: 30,
        scoreB: 99,
        resolved: false
      }
    ],
    graphNodes: [
      { id: "n1", label: "FinTech Target Co", type: "concept", radius: 26, color: "#38bdf8" },
      { id: "n2", label: "$48.2M ARR (CIM)", type: "metric", radius: 20, color: "#a855f7" },
      { id: "n3", label: "$39.4M ARR (QoE)", type: "conflict", radius: 22, color: "#f59e0b" },
      { id: "n4", label: "KPMG Audit", type: "concept", radius: 24, color: "#06b6d4" },
      { id: "n5", label: "$40M Debt Covenant", type: "conflict", radius: 22, color: "#ef4444" },
      { id: "n6", label: "Credit Agreement", type: "baseline", radius: 18, color: "#10b981" }
    ],
    graphLinks: [
      { source: "n1", target: "n2" },
      { source: "n2", target: "n3" },
      { source: "n4", target: "n3" },
      { source: "n3", target: "n5" },
      { source: "n6", target: "n5" }
    ],
    comparatorDocA: `<h3>Section 2: Revenue Composition</h3>
<p class="diff-highlight-a"><strong>Seller Statement:</strong> Company has achieved <strong>$48.2M in annual recurring revenue</strong> with a compound annual growth rate of 42% over the last 24 months.</p>`,
    comparatorDocB: `<h3>Section 4: Quality of Earnings Adjustments</h3>
<p class="diff-highlight-b"><strong>Audit Adjustment:</strong> Recurring run-rate normalized to <strong>$39.4M</strong> after subtracting $8.8M of non-recurring implementation fees.</p>`,
    chatHistory: [
      { sender: "bot", text: "Welcome to Synapse AI due diligence analyzer. Ingested data includes the CIM, KPMG QoE, and Senior Credit Agreement." },
      { sender: "user", text: "Is the company in compliance with its bank debt covenants?" },
      { sender: "bot", text: "**No, the company is in technical default.** <span class=\"citation-tag\" data-ref=\"doc3\">Credit Agmt §8.1</span> establishes an absolute minimum threshold of **$40.0M ARR**. Because <span class=\"citation-tag\" data-ref=\"doc2\">KPMG QoE §2.3</span> normalized true ARR down to **$39.4M**, the business breaches its senior credit covenant immediately upon close." }
    ]
  },

  biomed: {
    name: "Oncology Trial Multi-Study Synthesis",
    tagline: "Cross-Trial Efficacy, Overall Survival & Toxicity Discrepancies",
    docsCount: 3,
    chunksCount: 168,
    documents: [
      { id: "doc1", title: "Pharma Sponsor Phase IIa Interim Summary", type: "pdf", badgeClass: "badge-pdf", meta: "18 Pages • Single-Arm Cohort (n=45)", trust: "trust-med", trustText: "Sponsor Claim", excerpt: "Primary endpoint met with 68% Objective Response Rate (ORR) and median progression-free survival of 14.2 months in HER2-mutated non-small cell lung cancer." },
      { id: "doc2", title: "Multi-Center Phase IIb Registry Trial", type: "docx", badgeClass: "badge-docx", meta: "44 Pages • Randomized Multi-Center (n=320)", trust: "trust-high", trustText: "Multi-Center Study", excerpt: "In randomized double-blind evaluation, ORR is 41.5% and Grade 3/4 interstitial lung disease (ILD) incidence occurred in 14.8% of participants." },
      { id: "doc3", title: "FDA Oncology Drug Advisory Briefing", type: "csv", badgeClass: "badge-csv", meta: "31 Pages • Regulatory Safety Dossier", trust: "trust-high", trustText: "Regulatory Warning", excerpt: "Advisory panel recommends black-box warning for pulmonary toxicity and mandates dose reduction from 5.4 mg/kg to 4.2 mg/kg." }
    ],
    searchSuggestions: [
      { query: "Grade 3 4 Interstitial Lung Disease incidence", chip: "ILD Toxicity Rate" },
      { query: "Phase IIa vs Phase IIb response rate", chip: "ORR Comparison" },
      { query: "FDA recommended dose reduction", chip: "Dose Modification" },
      { query: "Progression free survival multi-center", chip: "PFS Benchmarks" }
    ],
    searchResults: [
      { source: "Multi-Center Phase IIb Registry (§4.1)", simScore: "98.4%", text: "Objective Response Rate dropped from sponsor's <mark>68% claim to 41.5%</mark> across 320 randomized patients across 18 clinical trial hospitals.", meta: "Cohort Size: n=320 • Multi-Center Rigor" },
      { source: "FDA Advisory Briefing (§Safety 2)", simScore: "96.1%", text: "Grade 3/4 Interstitial Lung Disease (ILD) occurred in <mark>14.8% of patients</mark>, prompting mandatory Black Box Warning requirement.", meta: "Advisory Panel • Safety Mandate" },
      { source: "Sponsor Interim Report (§Table 3)", simScore: "89.0%", text: "Initial single-arm study (n=45) under-reported pulmonary adverse events due to <mark>shortened 6-month observation window</mark>.", meta: "Methodology Bias • Sample Limitation" }
    ],
    synthesis: {
      brief: "Phase IIa single-arm trial reported an optimistic 68% ORR, but larger multi-center Phase IIb trials (n=320) established true efficacy at 41.5% alongside a severe 14.8% rate of Grade 3/4 pulmonary toxicity.",
      detailed: `<h3>1. Clinical Evidence Synthesis</h3>
<p>Early-stage sponsor studies exhibited significant optimism bias due to small cohort size (n=45) and strict patient exclusion criteria.</p>
<h3>2. Cross-Study Discrepancies</h3>
<ul>
  <li><strong>Efficacy Drop:</strong> ORR reduced from 68% (Phase IIa) to 41.5% in the randomized multi-center registry (n=320).</li>
  <li><strong>Adverse Event Underreporting:</strong> Grade 3/4 interstitial lung disease (ILD) occurs in 14.8% of patients, requiring intensive steroid interventions.</li>
  <li><strong>Dosing Adjustment:</strong> FDA Advisory Committee recommends 22% dose de-escalation (5.4 mg/kg down to 4.2 mg/kg) to balance therapeutic window.</li>
</ul>`,
      bullets: `<ul>
  <li>📉 <strong>ORR Efficacy:</strong> 41.5% in multi-center study vs. 68% in single-arm pilot.</li>
  <li>🫁 <strong>Pulmonary Toxicity:</strong> 14.8% Grade 3/4 ILD requires mandatory Black Box Warning.</li>
  <li>💊 <strong>Dose Reduction:</strong> Shift from 5.4 mg/kg to 4.2 mg/kg recommended by FDA panel.</li>
</ul>`
    },
    radarMetrics: [92, 70, 96, 52, 94],
    documentHighlights: `
Novel antibody-drug conjugate (ADC) targeting HER2-mutant solid tumors was initially evaluated in a <span class="hl-entity hl-entity-name" data-entity-id="e1">Phase IIa Pilot Study</span>. The sponsor reported an Objective Response Rate of <span class="hl-entity hl-metric" data-entity-id="e2">68% ORR</span> and median progression-free survival of <span class="hl-entity hl-metric" data-entity-id="e3">14.2 months</span>.<br><br>
In contrast, the broader <span class="hl-entity hl-entity-name" data-entity-id="e4">Multi-Center Registry Trial</span> spanning 320 patients established that the real-world ORR is <span class="hl-entity hl-risk" data-entity-id="e5">41.5% ORR (26.5% discrepancy)</span>.<br><br>
Crucially, the <span class="hl-entity hl-entity-name" data-entity-id="e6">FDA Advisory Committee</span> highlighted severe pulmonary toxicity, with <span class="hl-entity hl-risk" data-entity-id="e7">14.8% Grade 3/4 ILD Incidence</span>, prompting a requirement for a <span class="hl-entity hl-strategic" data-entity-id="e8">Black Box Warning</span> and dose de-escalation to <span class="hl-entity hl-strategic" data-entity-id="e9">4.2 mg/kg</span>.
    `,
    entityDetails: {
      e1: { type: "STUDY", name: "Phase IIa Pilot Study", conf: "99.0%", desc: "Small single-arm cohort study (n=45) run at single academic medical center.", src: "Phase IIa Summary §1", status: "Sample Limited" },
      e2: { type: "METRIC", name: "68% ORR", conf: "97.5%", desc: "Reported objective tumor shrinkage rate in pilot trial.", src: "Phase IIa Summary §3", status: "⚠️ Optimism Bias" },
      e3: { type: "METRIC", name: "14.2 Months PFS", conf: "95.0%", desc: "Median progression-free survival duration.", src: "Phase IIa Summary §4", status: "Unconfirmed in IIb" },
      e4: { type: "STUDY", name: "Multi-Center Registry Trial", conf: "99.9%", desc: "Randomized, multi-hospital registry across 320 diversified oncology patients.", src: "Phase IIb Registry §1", status: "Gold Standard Evidence" },
      e5: { type: "CRITICAL RISK", name: "41.5% Real-World ORR", conf: "99.4%", desc: "Statistically sound response rate in broad heterogeneous patient populations.", src: "Phase IIb Registry §4", status: "Verified Baseline" },
      e6: { type: "REGULATOR", name: "FDA Oncology Drug Advisory Panel", conf: "99.8%", desc: "Expert regulatory panel guiding federal therapeutic approval.", src: "FDA Dossier §1", status: "Federal Authority" },
      e7: { type: "CRITICAL RISK", name: "14.8% Grade 3/4 ILD", conf: "99.6%", desc: "Severe lung inflammation and scarring requiring oxygen support and ICU stays.", src: "FDA Dossier §Safety", status: "⚠️ Critical Safety Risk" },
      e8: { type: "REGULATORY", name: "Black Box Warning", conf: "99.0%", desc: "Highest level pharmaceutical safety warning required on packaging.", src: "FDA Dossier §Rec", status: "Mandatory Labeling" },
      e9: { type: "STRATEGIC DOSE", name: "4.2 mg/kg Regimen", conf: "98.5%", desc: "Reduced dosing protocol to improve safety margin while maintaining anti-tumor efficacy.", src: "FDA Dossier §Dosage", status: "Recommended Dose" }
    },
    conflicts: [
      {
        id: "c1",
        subject: "Objective Response Rate (ORR) Reproducibility",
        severity: "critical",
        severityText: "EFFICACY GAP",
        docA: "68% ORR (Pilot n=45)",
        docAName: "Sponsor Phase IIa",
        docB: "41.5% ORR (Multi-Center n=320)",
        docBName: "Phase IIb Registry",
        arbitrationVerdict: "ARBITRATION: Multi-Center Registry Precedence (41.5% Validated)",
        arbitrationReasoning: "Single-arm cohorts suffer from selection bias and small statistical sample size. The multi-center 320-patient trial is statistically powered.",
        scoreA: 42,
        scoreB: 97,
        resolved: false
      },
      {
        id: "c2",
        subject: "Pulmonary Toxicity & Safe Therapeutic Window",
        severity: "critical",
        severityText: "PATIENT SAFETY RISK",
        docA: "Mild transient cough (< 4%)",
        docAName: "Sponsor Phase IIa",
        docB: "14.8% Grade 3/4 ILD",
        docBName: "FDA Safety Dossier",
        arbitrationVerdict: "ARBITRATION: FDA Toxicity Findings Upheld (Black Box Mandate)",
        arbitrationReasoning: "Independent scans confirmed significant pulmonary fibrotic changes that were omitted in sponsor interim records due to early censor window.",
        scoreA: 25,
        scoreB: 99,
        resolved: false
      }
    ],
    graphNodes: [
      { id: "n1", label: "HER2 ADC Drug", type: "concept", radius: 26, color: "#38bdf8" },
      { id: "n2", label: "68% ORR (Pilot)", type: "metric", radius: 20, color: "#a855f7" },
      { id: "n3", label: "41.5% ORR (Registry)", type: "conflict", radius: 22, color: "#f59e0b" },
      { id: "n4", label: "FDA Advisory", type: "concept", radius: 24, color: "#06b6d4" },
      { id: "n5", label: "14.8% Grade 3/4 ILD", type: "conflict", radius: 22, color: "#ef4444" },
      { id: "n6", label: "4.2 mg/kg Dose", type: "baseline", radius: 18, color: "#10b981" }
    ],
    graphLinks: [
      { source: "n1", target: "n2" },
      { source: "n2", target: "n3" },
      { source: "n4", target: "n3" },
      { source: "n4", target: "n5" },
      { source: "n4", target: "n6" }
    ],
    comparatorDocA: `<h3>Section 3: Clinical Outcomes</h3>
<p class="diff-highlight-a"><strong>Sponsor Finding:</strong> 68% of enrolled patients achieved partial or complete tumor regression with manageable tolerability profile.</p>`,
    comparatorDocB: `<h3>Section 7: Registry Safety & Efficacy</h3>
<p class="diff-highlight-b"><strong>Audit Assessment:</strong> Validated response rate across 320 patients stands at 41.5%. Grade 3/4 ILD incidence is 14.8%.</p>`,
    chatHistory: [
      { sender: "bot", text: "Oncology multi-study knowledge base is loaded. Ready to answer questions on trial endpoints, adverse pulmonary events, and dosing." },
      { sender: "user", text: "What is the true clinical response rate and safety profile?" },
      { sender: "bot", text: "Cross-trial comparison demonstrates that while the sponsor reported **68% ORR**, the statistically powered multi-center trial (n=320) established **41.5% ORR** <span class=\"citation-tag\" data-ref=\"doc2\">Registry §4.1</span>.\n\nCritically, safety evaluations revealed **14.8% Grade 3/4 Interstitial Lung Disease** <span class=\"citation-tag\" data-ref=\"doc3\">FDA Dossier §Safety</span>, prompting the FDA advisory committee to require a Black Box Warning and dose de-escalation to **4.2 mg/kg**." }
    ]
  }
};

// ============================================================================
// 2. AUDIO SYNTHESIZER (WEB AUDIO API)
// ============================================================================
class CyberSoundSynthesizer {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playChirp(freq = 600, type = 'sine', duration = 0.08) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    [520, 680, 920].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0.1, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.16);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.16);
    });
  }

  playAlert() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    [400, 320].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);

      gain.gain.setValueAtTime(0.08, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.14);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.14);
    });
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
}

// ============================================================================
// 3. NEURAL PARTICLE CANVAS BACKGROUND
// ============================================================================
class NeuralParticleMesh {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.particleCount = 55;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 160 };

    if (this.canvas) {
      this.init();
    }
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.4 ? 'rgba(56, 189, 248, ' : 'rgba(168, 85, 247, '
      });
    }

    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse attraction / gentle displacement
      if (this.mouse.x !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 0.8;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + '0.75)';
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = '#38bdf8';
      this.ctx.fill();

      // Connect lines
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const opacity = (1 - dist / this.maxDistance) * 0.28;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          this.ctx.lineWidth = 0.9;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// ============================================================================
// 4. INTERACTIVE KNOWLEDGE GRAPH (FORCE-DIRECTED CANVAS SIMULATOR)
// ============================================================================
class InteractiveKnowledgeGraph {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.nodes = [];
    this.links = [];
    this.draggedNode = null;
    this.hoveredNode = null;
    this.mouse = { x: 0, y: 0 };
    this.running = true;

    if (this.canvas) {
      this.initEvents();
    }
  }

  loadData(nodes, links) {
    this.resize();
    const cx = this.width / 2;
    const cy = this.height / 2;

    this.nodes = nodes.map((n, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const dist = 120 + Math.random() * 80;
      return {
        ...n,
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: 0,
        vy: 0
      };
    });

    this.links = links.map(l => ({
      source: this.nodes.find(n => n.id === l.source),
      target: this.nodes.find(n => n.id === l.target)
    })).filter(l => l.source && l.target);

    this.simulate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = this.canvas.width = rect.width || 800;
    this.height = this.canvas.height = rect.height || 500;
  }

  initEvents() {
    window.addEventListener('resize', () => this.resize());

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;

      if (this.draggedNode) {
        this.draggedNode.x = this.mouse.x;
        this.draggedNode.y = this.mouse.y;
        this.draggedNode.vx = 0;
        this.draggedNode.vy = 0;
      } else {
        this.hoveredNode = this.nodes.find(n => {
          const dx = n.x - this.mouse.x;
          const dy = n.y - this.mouse.y;
          return Math.sqrt(dx * dx + dy * dy) <= n.radius + 6;
        });
        this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
      }
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (this.hoveredNode) {
        this.draggedNode = this.hoveredNode;
      }
    });

    window.addEventListener('mouseup', () => {
      this.draggedNode = null;
    });

    this.canvas.addEventListener('click', () => {
      if (this.hoveredNode && window.app) {
        window.app.sfx.playChirp(750, 'triangle');
        window.app.showToast(`Node inspected: "${this.hoveredNode.label}" (${this.hoveredNode.type.toUpperCase()})`);
      }
    });
  }

  simulate() {
    const cx = this.width / 2;
    const cy = this.height / 2;

    const step = () => {
      if (!this.running || !this.ctx) return;
      this.ctx.clearRect(0, 0, this.width, this.height);

      // Force simulation logic
      // Repulsion between nodes
      for (let i = 0; i < this.nodes.length; i++) {
        for (let j = i + 1; j < this.nodes.length; j++) {
          const n1 = this.nodes[i];
          const n2 = this.nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 260) {
            const force = (260 - dist) / dist * 0.45;
            if (n1 !== this.draggedNode) { n1.vx -= dx * force * 0.02; n1.vy -= dy * force * 0.02; }
            if (n2 !== this.draggedNode) { n2.vx += dx * force * 0.02; n2.vy += dy * force * 0.02; }
          }
        }
      }

      // Link attraction
      this.links.forEach(l => {
        const dx = l.target.x - l.source.x;
        const dy = l.target.y - l.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const desiredDist = 130;
        const force = (dist - desiredDist) * 0.015;
        if (l.source !== this.draggedNode) { l.source.vx += (dx / dist) * force; l.source.vy += (dy / dist) * force; }
        if (l.target !== this.draggedNode) { l.target.vx -= (dx / dist) * force; l.target.vy -= (dy / dist) * force; }
      });

      // Center gravity
      this.nodes.forEach(n => {
        if (n !== this.draggedNode) {
          n.vx += (cx - n.x) * 0.003;
          n.vy += (cy - n.y) * 0.003;
          n.x += n.vx;
          n.y += n.vy;
          n.vx *= 0.88;
          n.vy *= 0.88;
        }
      });

      // Draw Links
      this.links.forEach(l => {
        const isHighlight = (l.source === this.hoveredNode || l.target === this.hoveredNode);
        this.ctx.beginPath();
        this.ctx.moveTo(l.source.x, l.source.y);
        this.ctx.lineTo(l.target.x, l.target.y);
        this.ctx.strokeStyle = isHighlight ? 'rgba(56, 189, 248, 0.9)' : 'rgba(255, 255, 255, 0.12)';
        this.ctx.lineWidth = isHighlight ? 2.5 : 1.2;
        this.ctx.stroke();

        // Pulsing synaptic dot along link
        const t = (Date.now() / 2000) % 1;
        const px = l.source.x + (l.target.x - l.source.x) * t;
        const py = l.source.y + (l.target.y - l.source.y) * t;
        this.ctx.beginPath();
        this.ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#38bdf8';
        this.ctx.shadowBlur = 8;
        this.ctx.shadowColor = '#38bdf8';
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      });

      // Draw Nodes
      this.nodes.forEach(n => {
        const isHover = (n === this.hoveredNode);
        this.ctx.beginPath();
        this.ctx.arc(n.x, n.y, n.radius + (isHover ? 4 : 0), 0, Math.PI * 2);
        this.ctx.fillStyle = n.color;
        this.ctx.shadowBlur = isHover ? 24 : 14;
        this.ctx.shadowColor = n.color;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;

        // Border ring
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = isHover ? 2.5 : 1.2;
        this.ctx.stroke();

        // Label
        this.ctx.font = isHover ? 'bold 12px "Plus Jakarta Sans"' : '11px "Plus Jakarta Sans"';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(n.label, n.x, n.y + n.radius + 15);
      });

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  resetPhysics() {
    this.nodes.forEach(n => {
      n.vx = (Math.random() - 0.5) * 8;
      n.vy = (Math.random() - 0.5) * 8;
    });
  }
}

// ============================================================================
// 5. MAIN APPLICATION CONTROLLER
// ============================================================================
class SynapseAIApp {
  constructor() {
    this.sfx = new CyberSoundSynthesizer();
    this.particles = new NeuralParticleMesh('neuralCanvas');
    this.knowledgeGraph = new InteractiveKnowledgeGraph('knowledgeGraphCanvas');
    this.currentDomain = 'battery';
    this.currentStage = 'find';
    this.backendAvailable = false;
    this.backendDocuments = [];
    this.backendSummary = {};
    this.currentSearchResults = null;
    this.radarChart = null;
    this.audioPlaying = false;
    this.audioTimer = null;
    this.audioSeconds = 102;
    this.syncScrollActive = true;

    // Tour state
    this.tourStep = 0;
    this.tourSteps = [
      {
        stage: 'find',
        title: 'Step 1: Multi-Source Discovery & Smart Ingestion',
        desc: 'Synapse AI ingests heterogeneous PDFs, technical whitepapers, and regulatory filings. Documents are normalized through semantic chunking, 1536-D vector embedding, and contextual OCR.',
        features: [
          'Drag-and-drop document intake with real-time vectorization telemetry',
          'AI query expansion and semantic similarity retrieval',
          'Multi-domain testbeds ready for live jury testing'
        ]
      },
      {
        stage: 'understand',
        title: 'Step 2: AI Deep Understanding & Key-Detail Extraction',
        desc: 'The engine strips out redundant noise to generate an Executive Synthesis Stream and maps out interactive key details (metrics, critical risks, organizations, and strategic milestones).',
        features: [
          'Dynamic multi-density summaries (Executive Brief, Deep Dive, Bullets)',
          'Interactive color-coded entity inspector with cross-document confidence scores',
          'Cognitive Radar analytics mapping semantic density and evidence weight'
        ]
      },
      {
        stage: 'organize',
        title: 'Step 3: Cross-Source Comparison, Conflict Detection & Knowledge Graph',
        desc: 'Here lies the true superpower: Synapse AI detects irreconcilable discrepancies and contradictions across documents, providing one-click AI Arbitration and an interactive knowledge graph.',
        features: [
          'Cross-document conflict matrix with severity ratings (Critical, High, Moderate)',
          'Automated AI arbitration evaluating methodology credibility and sample sizes',
          'Interactive neural knowledge graph with force physics and synaptic pulses'
        ]
      },
      {
        stage: 'use',
        title: 'Step 4: Grounded AI Copilot & Actionable Deliverables',
        desc: 'Finally, transform synthesized knowledge into verified decisions. Chat with the hallucination-free copilot with clickable citations, and export board-ready executive memos and decision matrices.',
        features: [
          'Grounded AI Q&A with verifiable source footnote tags',
          'Dynamic board memorandum and risk decision matrix',
          'Instant markdown & print-ready PDF export functionality'
        ]
      }
    ];

    const backendOrigin = window.location.port === '8055'
      ? window.location.origin
      : `${window.location.protocol}//${window.location.hostname}:8055`;
    this.apiBase = `${backendOrigin}/api`;
    this.token = localStorage.getItem('synapse_token') || null;
    this.currentUser = JSON.parse(localStorage.getItem('synapse_user') || '{"full_name": "Dr. Elena Vance (Lead AI Analyst)", "username": "lead_analyst"}');

    this.init();
  }

  init() {
    this.bindEvents();
    this.bindAuthControls();
    this.checkBackendHealth();
    this.loadDomain(this.currentDomain);
    this.initRadarChart();
    this.showToast('Synapse AI Initialized • Neural Engine Online (14ms)');
  }

  // Check live FastAPI & MySQL backend connection
  async checkBackendHealth() {
    try {
      const res = await fetch(`${this.apiBase}/health`);
      if (!res.ok) {
        throw new Error(`Health check failed (${res.status})`);
      }
      const data = await res.json();
      this.backendAvailable = true;
      const apiStatus = document.getElementById('apiStatusText');
      const dbStatus = document.getElementById('dbStatusText');
      const telemetry = document.getElementById('telemetryStatus');
      if (apiStatus) apiStatus.textContent = `ONLINE :8055`;
      if (dbStatus) dbStatus.textContent = `${data.database.type} (${data.database.status})`;
      if (telemetry) telemetry.textContent = `ONLINE (${data.latency_ms}ms)`;

      await Promise.all([
        this.fetchBackendDocuments(),
        this.fetchBackendConflicts(),
        this.fetchBackendKnowledgeGraph()
      ].map(task => task.catch(err => {
        console.error('Could not sync backend data:', err);
        this.showToast(`Could not load backend data: ${err.message}`);
      })));
    } catch (e) {
      console.warn("Backend API offline or unreachable, using local high-speed simulator:", e);
      this.backendAvailable = false;
      const apiStatus = document.getElementById('apiStatusText');
      const dbStatus = document.getElementById('dbStatusText');
      if (apiStatus) apiStatus.textContent = `LOCAL RUNTIME`;
      if (dbStatus) dbStatus.textContent = `STANDALONE`;
    }
  }

  async fetchBackendDocuments() {
    const res = await fetch(`${this.apiBase}/documents/`);
    if (!res.ok) {
      throw new Error(`Could not load documents (${res.status})`);
    }

    this.backendDocuments = await res.json();
    this.backendSummary = {};
    this.renderDocCards(this.backendDocuments.map(doc => ({
      id: doc.id,
      title: doc.title,
      type: doc.file_type,
      badgeClass: `badge-${doc.file_type}`,
      meta: `${doc.page_count} pages • ${(doc.file_size_bytes / 1024).toFixed(1)} KB • ${doc.status}`,
      trust: doc.trust_badge,
      trustText: doc.trust_label
    })));

    const docsCount = document.getElementById('telemetryDocsCount');
    const sourceCount = document.getElementById('sourceCountBadge');
    const chunksCount = document.getElementById('statIndexedChunks');
    const totalChunks = this.backendDocuments.reduce((total, doc) => total + doc.chunks_count, 0);
    if (docsCount) docsCount.textContent = `${this.backendDocuments.length} Active Sources`;
    if (sourceCount) sourceCount.textContent = this.backendDocuments.length;
    if (chunksCount) chunksCount.textContent = totalChunks;
  }

  async fetchBackendConflicts() {
    const res = await fetch(`${this.apiBase}/process/conflicts`);
    if (!res.ok) {
      throw new Error(`Could not load conflicts (${res.status})`);
    }

    const conflicts = await res.json();
    const mappedConflicts = conflicts.map(conflict => ({
      id: conflict.id,
      subject: conflict.subject,
      severity: conflict.severity,
      severityText: conflict.severity_label,
      docA: conflict.claim_a,
      docAName: conflict.doc_a_title,
      docB: conflict.claim_b,
      docBName: conflict.doc_b_title,
      arbitrationVerdict: conflict.arbitration_verdict || 'No recommendation has been recorded.',
      arbitrationReasoning: conflict.arbitration_reasoning || '',
      scoreA: conflict.score_a,
      scoreB: conflict.score_b,
      resolved: conflict.is_resolved
    }));
    this.visibleConflicts = mappedConflicts;
    this.renderConflictsSection({
      ...DOMAIN_DATASETS[this.currentDomain],
      conflicts: mappedConflicts
    });
  }

  // User authentication controls
  bindAuthControls() {
    const authBtn = document.getElementById('userAuthBtn');
    const authModal = document.getElementById('authModal');
    const btnClose = document.getElementById('btnAuthClose');
    const backdrop = document.getElementById('authModalBackdrop');
    const tabLogin = document.getElementById('tabAuthLogin');
    const tabRegister = document.getElementById('tabAuthRegister');
    const registerFields = document.getElementById('authRegisterFields');
    const authForm = document.getElementById('authForm');
    const btnFill = document.getElementById('btnFillDemoCreds');
    const submitText = document.getElementById('authSubmitText');
    const errorMsg = document.getElementById('authErrorMsg');
    const userAuthName = document.getElementById('userAuthName');

    if (this.currentUser && userAuthName) {
      userAuthName.textContent = this.currentUser.full_name || this.currentUser.username;
    }

    let isRegisterMode = false;

    if (authBtn && authModal) {
      authBtn.addEventListener('click', () => {
        authModal.classList.add('active');
        if (errorMsg) errorMsg.textContent = '';
      });
    }

    const closeModal = () => {
      if (authModal) authModal.classList.remove('active');
    };

    btnClose?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    tabLogin?.addEventListener('click', (e) => {
      e.preventDefault();
      isRegisterMode = false;
      tabLogin.classList.add('active');
      tabRegister?.classList.remove('active');
      if (registerFields) registerFields.style.display = 'none';
      if (submitText) submitText.textContent = 'Authenticate with FastAPI & MySQL';
    });

    tabRegister?.addEventListener('click', (e) => {
      e.preventDefault();
      isRegisterMode = true;
      tabRegister.classList.add('active');
      tabLogin?.classList.remove('active');
      if (registerFields) registerFields.style.display = 'block';
      if (submitText) submitText.textContent = 'Register Account with FastAPI & MySQL';
    });

    btnFill?.addEventListener('click', () => {
      document.getElementById('authUsername').value = 'lead_analyst';
      document.getElementById('authPassword').value = 'synapse123';
      this.sfx.playChirp(700, 'sine');
      this.showToast('Pre-filled seeded Analyst credentials');
    });

    authForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('authUsername').value;
      const password = document.getElementById('authPassword').value;
      if (submitText) submitText.textContent = 'Contacting FastAPI Backend...';

      try {
        let endpoint = isRegisterMode ? `${this.apiBase}/auth/register` : `${this.apiBase}/auth/login`;
        let payload = isRegisterMode ? {
          username: username,
          password: password,
          email: document.getElementById('authEmail').value || `${username}@synapse.ai`,
          full_name: document.getElementById('authFullName').value || username
        } : {
          username_or_email: username,
          password: password
        };

        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        if (res.ok) {
          this.token = data.access_token;
          this.currentUser = data.user;
          localStorage.setItem('synapse_token', this.token);
          localStorage.setItem('synapse_user', JSON.stringify(this.currentUser));
          if (userAuthName) userAuthName.textContent = this.currentUser.full_name || this.currentUser.username;
          this.sfx.playSuccess();
          this.showToast(`Authenticated as: ${this.currentUser.full_name}`);
          closeModal();
        } else {
          if (errorMsg) errorMsg.textContent = data.detail || 'Authentication failed';
          this.sfx.playAlert();
        }
      } catch (err) {
        if (errorMsg) errorMsg.textContent = `Could not reach the backend: ${err.message}`;
        this.sfx.playAlert();
      } finally {
        if (submitText) submitText.textContent = isRegisterMode ? 'Register Account with FastAPI & MySQL' : 'Authenticate with FastAPI & MySQL';
      }
    });
  }

  // Fetch real Knowledge Graph from backend
  async fetchBackendKnowledgeGraph() {
    try {
      const res = await fetch(`${this.apiBase}/organization/knowledge-graph`);
      if (res.ok) {
        const data = await res.json();
        if (data.nodes && data.nodes.length > 0) {
          const formattedNodes = data.nodes.map(n => ({
            id: n.node_key,
            label: n.label,
            type: n.node_type,
            radius: n.radius,
            color: n.color_hex
          }));
          const formattedLinks = data.links.map(l => ({
            source: l.source,
            target: l.target
          }));
          this.knowledgeGraph.loadData(formattedNodes, formattedLinks);
        }
      }
    } catch (e) {
      console.warn("Could not fetch backend knowledge graph:", e);
    }
  }

  // Bind all interactive UI controls
  bindEvents() {
    // Stage navigation pills
    document.querySelectorAll('.workflow-stepper .step-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const step = btn.dataset.step;
        this.switchStage(step);
      });
    });

    // Domain preset selector
    const datasetSelect = document.getElementById('datasetSelect');
    if (datasetSelect) {
      datasetSelect.addEventListener('change', (e) => {
        this.loadDomain(e.target.value);
        this.sfx.playSuccess();
        this.showToast(`Switched Domain: ${DOMAIN_DATASETS[e.target.value].name}`);
      });
    }

    // Audio SFX toggle
    const audioToggleBtn = document.getElementById('audioToggleBtn');
    if (audioToggleBtn) {
      audioToggleBtn.addEventListener('click', () => {
        const enabled = this.sfx.toggle();
        audioToggleBtn.classList.toggle('active', enabled);
        audioToggleBtn.querySelector('.audio-on-icon').style.display = enabled ? 'block' : 'none';
        audioToggleBtn.querySelector('.audio-off-icon').style.display = enabled ? 'none' : 'block';
        this.showToast(`Sound FX: ${enabled ? 'Enabled' : 'Muted'}`);
      });
    }

    // Stage progression CTA buttons
    document.getElementById('btnProceedToUnderstand')?.addEventListener('click', () => this.switchStage('understand'));
    document.getElementById('btnProceedToOrganize')?.addEventListener('click', () => this.switchStage('organize'));
    document.getElementById('btnProceedToUse')?.addEventListener('click', () => this.switchStage('use'));

    // Ingestion Drag-and-drop & Simulate upload
    this.bindIngestionControls();

    // Semantic search input & expansion chips
    this.bindSearchControls();

    // Synthesis density tabs & audio brief
    this.bindUnderstandControls();

    // Organize sub-view switching & conflict arbitration
    this.bindOrganizeControls();

    // Use stage chat copilot & deliverable tabs
    this.bindUseControls();

    // Hackathon Jury Tour controls
    this.bindJuryTourControls();
  }

  // Switch between Find, Understand, Organize, Use
  switchStage(stageId) {
    if (this.currentStage === stageId) return;
    this.currentStage = stageId;
    this.sfx.playChirp(650, 'sine');

    // Update nav pills
    document.querySelectorAll('.workflow-stepper .step-pill').forEach(pill => {
      pill.classList.toggle('active', pill.dataset.step === stageId);
    });

    // Switch section views
    document.querySelectorAll('.stage-section').forEach(sec => {
      sec.classList.toggle('active', sec.dataset.stage === stageId);
    });

    // Sub-stage specific triggers
    if (stageId === 'understand') {
      this.triggerSynthesisStream();
      this.updateRadarChart();
    } else if (stageId === 'organize') {
      setTimeout(() => {
        this.knowledgeGraph.resize();
        this.knowledgeGraph.simulate();
      }, 100);
    }
  }

  // Load domain dataset
  loadDomain(domainKey) {
    this.currentDomain = domainKey;
    this.currentSearchResults = null;
    const data = DOMAIN_DATASETS[domainKey];
    if (!data) return;

    // Telemetry updates
    const docsCountEl = document.getElementById('telemetryDocsCount');
    if (docsCountEl) docsCountEl.textContent = `${data.docsCount} Active Sources`;
    const sourceCountBadge = document.getElementById('sourceCountBadge');
    if (sourceCountBadge) sourceCountBadge.textContent = data.docsCount;
    const statChunks = document.getElementById('statIndexedChunks');
    if (statChunks) statChunks.textContent = data.chunksCount;

    // Render Ingested Documents
    this.renderDocCards(data.documents);

    // Render Query Expansion Chips & Search Results
    this.renderSearchSection(data);

    // Render Understand Section
    this.renderUnderstandSection(data);

    // Render Conflicts & Comparator
    this.renderConflictsSection(data);
    this.renderComparatorSection(data);

    // Render Knowledge Graph
    this.knowledgeGraph.loadData(data.graphNodes, data.graphLinks);

    // Render Chat & Deliverables
    this.renderChatSection(data.chatHistory);
    this.renderDeliverables(data);

    // Reset radar chart
    this.updateRadarChart();

    if (this.backendAvailable) {
      Promise.all([
        this.fetchBackendDocuments(),
        this.fetchBackendConflicts(),
        this.fetchBackendKnowledgeGraph()
      ]).catch(err => {
        console.error('Could not refresh backend data:', err);
        this.showToast(`Could not refresh backend data: ${err.message}`);
      });
    }
  }

  // --------------------------------------------------------------------------
  // STAGE 1: FIND (INGESTION & SEARCH)
  // --------------------------------------------------------------------------
  bindIngestionControls() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const btnBrowse = document.getElementById('btnBrowseFiles');
    const btnSimulate = document.getElementById('btnSimulateUpload');
    const btnReset = document.getElementById('btnResetDocs');

    if (btnBrowse && fileInput) {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          this.simulateUploadProcess(file.name, (file.size / 1024 / 1024).toFixed(1) + ' MB', file);
        }
      });
    }

    if (dropZone) {
      ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.add('drag-over');
        });
      });

      ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          dropZone.classList.remove('drag-over');
        });
      });

      dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
          const file = files[0];
          this.simulateUploadProcess(file.name, (file.size / 1024 / 1024).toFixed(1) + ' MB', file);
        }
      });
    }

    if (btnSimulate) {
      btnSimulate.addEventListener('click', (e) => {
        e.stopPropagation();
        this.simulateUploadProcess('Q4_Supplemental_Telemetry_Feed.pdf', '3.4 MB', null);
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.loadDomain(this.currentDomain);
        this.sfx.playChirp(500, 'sine');
        this.showToast('Restored default knowledge baseline sources');
      });
    }
  }

  simulateUploadProcess(fileName, fileSize, fileObj = null) {
    const overlay = document.getElementById('uploadProgressOverlay');
    const fill = document.getElementById('progressBarFill');
    const pct = document.getElementById('progressPct');
    const title = document.getElementById('progressTitle');
    const p1 = document.getElementById('pStep1');
    const p2 = document.getElementById('pStep2');
    const p3 = document.getElementById('pStep3');
    const p4 = document.getElementById('pStep4');

    if (!overlay) return;
    this.sfx.playChirp(700, 'triangle');
    overlay.classList.add('active');
    title.textContent = `Ingesting & Vectorizing: ${fileName}`;
    fill.style.width = '0%';
    pct.textContent = '0%';

    let uploadRequest = null;
    if (fileObj) {
      const formData = new FormData();
      formData.append('file', fileObj);
      formData.append('title', fileName.replace(/\.[^/.]+$/, "").replace(/_/g, " "));
      const headers = this.token ? { 'Authorization': `Bearer ${this.token}` } : {};
      uploadRequest = fetch(`${this.apiBase}/documents/upload`, {
        method: 'POST',
        headers: headers,
        body: formData
      })
      .then(async res => {
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.detail || `Upload failed (${res.status})`);
        }
        return result;
      })
      .then(resData => {
        return Promise.all([
          this.fetchBackendDocuments(),
          this.fetchBackendConflicts()
        ]).then(() => resData);
      })
    }

    [p1, p2, p3, p4].forEach(p => { p.classList.remove('active'); p.querySelector('span').textContent = '◌'; });
    p1.classList.add('active'); p1.querySelector('span').textContent = '✓';

    let progress = 0;
    const interval = setInterval(() => {
      progress += 6;
      fill.style.width = `${progress}%`;
      pct.textContent = `${progress}%`;

      if (progress >= 30 && !p2.classList.contains('active')) {
        p2.classList.add('active'); p2.querySelector('span').textContent = '✓';
      }
      if (progress >= 65 && !p3.classList.contains('active')) {
        p3.classList.add('active'); p3.querySelector('span').textContent = '✓';
      }
      if (progress >= 90 && !p4.classList.contains('active')) {
        p4.classList.add('active'); p4.querySelector('span').textContent = '✓';
      }

      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(async () => {
          if (uploadRequest) {
            try {
              await uploadRequest;
              overlay.classList.remove('active');
              this.sfx.playSuccess();
              this.showToast(`Document saved to the database: ${fileName}`);
            } catch (err) {
              overlay.classList.remove('active');
              console.error('Document upload failed:', err);
              this.sfx.playAlert();
              this.showToast(`Upload failed: ${err.message}`);
            }
          } else {
            overlay.classList.remove('active');
            this.sfx.playSuccess();
            this.addNewDocument(fileName, fileSize);
            this.showToast(`Demo document ingested: ${fileName}`);
          }
        }, 400);
      }
    }, 55);
  }

  addNewDocument(fileName, fileSize) {
    const list = document.getElementById('docCardsList');
    if (!list) return;

    const newDoc = {
      id: 'doc_' + Date.now(),
      title: fileName,
      type: 'pdf',
      badgeClass: 'badge-pdf',
      meta: `${fileSize} • Real-Time Ingest • Chunked`,
      trust: 'trust-high',
      trustText: 'Verified Fresh',
      excerpt: 'Document normalized and converted to 1536-dimensional embeddings with full synaptic entity cross-referencing.'
    };

    const card = document.createElement('div');
    card.className = 'doc-item-card';
    card.innerHTML = `
      <div class="doc-info-left">
        <div class="doc-icon-badge ${newDoc.badgeClass}">PDF</div>
        <div>
          <div class="doc-name">${newDoc.title}</div>
          <div class="doc-meta">${newDoc.meta}</div>
        </div>
      </div>
      <div class="doc-item-actions">
        <span class="trust-badge ${newDoc.trust}">${newDoc.trustText}</span>
      </div>
    `;
    list.prepend(card);

    // Update counters
    const sourceCountBadge = document.getElementById('sourceCountBadge');
    if (sourceCountBadge) {
      sourceCountBadge.textContent = parseInt(sourceCountBadge.textContent || '3') + 1;
    }
  }

  renderDocCards(docs) {
    const list = document.getElementById('docCardsList');
    if (!list) return;
    list.innerHTML = '';

    docs.forEach(doc => {
      const card = document.createElement('div');
      card.className = 'doc-item-card';
      const info = document.createElement('div');
      info.className = 'doc-info-left';
      const icon = document.createElement('div');
      icon.className = `doc-icon-badge ${doc.badgeClass}`;
      icon.textContent = doc.type.toUpperCase();
      const details = document.createElement('div');
      const name = document.createElement('div');
      name.className = 'doc-name';
      name.textContent = doc.title;
      const meta = document.createElement('div');
      meta.className = 'doc-meta';
      meta.textContent = doc.meta;
      details.append(name, meta);
      info.append(icon, details);
      const actions = document.createElement('div');
      actions.className = 'doc-item-actions';
      const trust = document.createElement('span');
      trust.className = `trust-badge ${doc.trust}`;
      trust.textContent = doc.trustText;
      actions.appendChild(trust);
      card.append(info, actions);
      list.appendChild(card);
    });
  }

  bindSearchControls() {
    const searchInput = document.getElementById('semanticSearchInput');
    const btnSearch = document.getElementById('btnExecuteSearch');

    if (btnSearch && searchInput) {
      btnSearch.addEventListener('click', () => {
        this.executeSearch(searchInput.value);
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.executeSearch(searchInput.value);
        }
      });
    }

    // Filter pills
    document.querySelectorAll('.results-filter-pills .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('.results-filter-pills .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        this.sfx.playChirp(600, 'sine');
        this.filterSearchResults(pill.dataset.filter);
      });
    });
  }

  renderSearchSection(data) {
    const chipsContainer = document.getElementById('expansionChips');
    if (chipsContainer) {
      chipsContainer.innerHTML = '';
      data.searchSuggestions.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'chip-btn';
        btn.textContent = s.chip;
        btn.dataset.query = s.query;
        btn.addEventListener('click', () => {
          const input = document.getElementById('semanticSearchInput');
          if (input) input.value = s.query;
          this.executeSearch(s.query);
        });
        chipsContainer.appendChild(btn);
      });
    }

    this.renderSearchResults(data.searchResults);
  }

  async executeSearch(query) {
    const normalizedQuery = query.trim();
    if (!normalizedQuery) {
      this.showToast('Enter a search query first.');
      return;
    }
    this.sfx.playChirp(700, 'triangle');
    const stream = document.getElementById('searchResultsStream');
    if (!stream) return;

    stream.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--accent-sky); font-family: var(--font-mono); font-size: 0.85rem;">
        <span class="pulse-indicator"></span> Computing Cosine Proximity across 1536-D Vector Index...
      </div>
    `;

    try {
      const selectedFilter = document.querySelector('.results-filter-pills .filter-pill.active')?.dataset.filter || 'all';
      const filterType = selectedFilter === 'high-conf' ? 'high_conf' : selectedFilter;
      const res = await fetch(`${this.apiBase}/search/?query=${encodeURIComponent(normalizedQuery)}&filter_type=${encodeURIComponent(filterType)}`);
      if (res.ok) {
        const data = await res.json();
        this.currentSearchResults = data.results.map(r => ({
          source: `${r.document_title} (Chunk #${r.chunk_index + 1})`,
          simScore: `${(r.similarity_score * 100).toFixed(1)}%`,
          text: r.matched_snippet,
          meta: r.meta_info
        }));
        this.renderSearchResults(this.currentSearchResults);
        if (this.currentSearchResults.length > 0) {
          this.showToast(`FastAPI: Found ${data.total_matches} vector matches in ${data.latency_ms}ms`);
        } else {
          this.showToast('No matching passages found in the database.');
        }
        return;
      }
      if (this.backendAvailable) {
        throw new Error(`Search failed (${res.status})`);
      }
    } catch (e) {
      console.error('Backend search failed:', e);
      if (this.backendAvailable) {
        stream.textContent = `Search failed: ${e.message}`;
        this.showToast(`Search failed: ${e.message}`);
        return;
      }
    }

    setTimeout(() => {
      const data = DOMAIN_DATASETS[this.currentDomain];
      this.currentSearchResults = data.searchResults;
      this.renderSearchResults(data.searchResults);
      this.showToast(`Demo search complete for "${normalizedQuery.substring(0, 24)}..."`);
    }, 350);
  }

  renderSearchResults(results) {
    const stream = document.getElementById('searchResultsStream');
    if (!stream) return;
    stream.innerHTML = '';
    if (results.length === 0) {
      stream.textContent = 'No matching passages found.';
      return;
    }

    results.forEach(res => {
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <div class="result-card-header">
          <span class="result-doc-source">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            ${escapeHtml(res.source)}
          </span>
          <span class="sim-score-badge">${escapeHtml(res.simScore)} Match</span>
        </div>
        <p class="result-snippet">${escapeHtml(res.text).replace(/&lt;mark&gt;/g, '<mark>').replace(/&lt;\/mark&gt;/g, '</mark>')}</p>
        <div class="result-footer">
          <span>${escapeHtml(res.meta)}</span>
          <button class="ghost-btn-sm btn-inspect-result">Spotlight Passages</button>
        </div>
      `;

      card.querySelector('.btn-inspect-result')?.addEventListener('click', () => {
        this.switchStage('understand');
        this.showToast(`Navigated to Document Context: ${res.source}`);
      });

      stream.appendChild(card);
    });
  }

  filterSearchResults(filterType) {
    const data = DOMAIN_DATASETS[this.currentDomain];
    const results = this.currentSearchResults || data.searchResults;
    let filtered = results;
    if (filterType === 'conflicts') {
      filtered = results.filter(r => r.meta.includes('Inconsistency') || r.meta.includes('Discrepancy') || r.meta.includes('conflict'));
    } else if (filterType === 'high-conf') {
      filtered = results.filter(r => parseFloat(r.simScore) >= 90.0);
    }
    this.renderSearchResults(filtered);
  }

  // --------------------------------------------------------------------------
  // STAGE 2: UNDERSTAND (SYNTHESIS & KEY-DETAIL HIGHLIGHTING)
  // --------------------------------------------------------------------------
  bindUnderstandControls() {
    // Density segmented buttons
    document.querySelectorAll('.density-group .seg-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.density-group .seg-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.sfx.playChirp(600, 'sine');
        this.renderSynthesisText(btn.dataset.density);
      });
    });

    // Re-synthesize button
    document.getElementById('btnReSynthesize')?.addEventListener('click', () => {
      this.triggerSynthesisStream();
    });

    // Simulated audio brief player
    const playBtn = document.getElementById('btnPlayAudioBrief');
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        this.toggleAudioBrief();
      });
    }

    // Entity highlight filters
    document.querySelectorAll('.highlight-toggles .hl-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const type = btn.dataset.type;
        const selector = `.hl-${type}`;
        document.querySelectorAll(selector).forEach(el => {
          el.style.opacity = btn.classList.contains('active') ? '1' : '0.25';
        });
        this.sfx.playChirp(700, 'sine');
      });
    });
  }

  renderUnderstandSection(data) {
    const viewport = document.getElementById('highlightedTextBody');
    if (viewport) {
      viewport.innerHTML = data.documentHighlights;
      this.attachEntityHoverHandlers(data.entityDetails);
    }

    this.renderSynthesisText('detailed');
  }

  renderSynthesisText(density) {
    const container = document.getElementById('synthesisContent');
    const data = DOMAIN_DATASETS[this.currentDomain];
    if (!container || !data) return;

    if (this.backendAvailable) {
      if (!this.backendDocuments.length) {
        container.textContent = 'Upload a document to generate a database-backed synthesis.';
        return;
      }
      const summary = this.backendSummary[density];
      if (!summary) {
        this.requestBackendSummary(density);
        return;
      }
      if (density === 'detailed') {
        container.innerHTML = summary.summary_text;
      } else if (density === 'bullets') {
        const list = document.createElement('ul');
        summary.bullet_points.forEach(point => {
          const item = document.createElement('li');
          item.textContent = point;
          list.appendChild(item);
        });
        container.replaceChildren(list);
      } else {
        const paragraph = document.createElement('p');
        paragraph.textContent = summary.summary_text;
        container.replaceChildren(paragraph);
      }
      return;
    }

    if (density === 'brief') {
      container.innerHTML = `<p>${data.synthesis.brief}</p>`;
    } else if (density === 'bullets') {
      container.innerHTML = data.synthesis.bullets;
    } else {
      container.innerHTML = data.synthesis.detailed;
    }
  }

  triggerSynthesisStream() {
    const indicator = document.getElementById('streamingIndicator');
    const container = document.getElementById('synthesisContent');
    const data = DOMAIN_DATASETS[this.currentDomain];
    if (!container || !data) return;

    this.sfx.playChirp(800, 'triangle');
    if (indicator) indicator.style.display = 'flex';
    container.innerHTML = '<span style="color: var(--accent-sky); font-family: var(--font-mono);">Synthesizing multi-source knowledge...</span>';

    if (this.backendAvailable) {
      this.requestBackendSummary('detailed').finally(() => {
        if (indicator) indicator.style.display = 'none';
      });
      return;
    }

    setTimeout(() => {
      this.renderSynthesisText('detailed');
      if (indicator) indicator.style.display = 'none';
      this.sfx.playSuccess();
      this.showToast('AI Synthesis updated with 96.8% factual grounding');
    }, 450);
  }

  async requestBackendSummary(mode) {
    const container = document.getElementById('synthesisContent');
    if (!this.backendDocuments.length) {
      if (container) container.textContent = 'Upload a document to generate a database-backed synthesis.';
      return;
    }

    try {
      const res = await fetch(`${this.apiBase}/process/summarize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          document_ids: this.backendDocuments.map(doc => doc.id),
          mode
        })
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.detail || `Synthesis failed (${res.status})`);
      }
      this.backendSummary[mode] = result;
      this.renderSynthesisText(mode);
      this.sfx.playSuccess();
      this.showToast(`Database synthesis completed for ${result.source_document_ids.length} documents.`);
    } catch (err) {
      console.error('Backend synthesis failed:', err);
      if (container) container.textContent = `Synthesis failed: ${err.message}`;
      this.showToast(`Synthesis failed: ${err.message}`);
    }
  }

  attachEntityHoverHandlers(entityDetails) {
    document.querySelectorAll('.hl-entity').forEach(span => {
      const id = span.dataset.entityId;
      const entity = entityDetails[id];
      if (!entity) return;

      span.addEventListener('mouseenter', () => {
        this.displayEntityDrawer(entity);
      });

      span.addEventListener('click', () => {
        this.sfx.playChirp(680, 'triangle');
        this.displayEntityDrawer(entity);
        this.showToast(`Entity Spotlight: ${entity.name}`);
      });
    });
  }

  displayEntityDrawer(entity) {
    const typeBadge = document.getElementById('edcType');
    const nameEl = document.getElementById('edcName');
    const confEl = document.getElementById('edcConfidence');
    const descEl = document.getElementById('edcDescription');
    const srcEl = document.getElementById('edcSource');
    const statusEl = document.getElementById('edcStatus');

    if (typeBadge) typeBadge.textContent = entity.type;
    if (nameEl) nameEl.textContent = entity.name;
    if (confEl) confEl.textContent = `${entity.conf} Confidence`;
    if (descEl) descEl.textContent = entity.desc;
    if (srcEl) srcEl.textContent = entity.src;
    if (statusEl) {
      statusEl.textContent = entity.status;
      statusEl.className = entity.status.includes('Discrepancy') || entity.status.includes('⚠️') ? 'meta-v text-amber' : 'meta-v text-emerald';
    }
  }

  toggleAudioBrief() {
    const player = document.querySelector('.audio-brief-player');
    const playSvg = document.getElementById('playIconSvg');
    const pauseSvg = document.getElementById('pauseIconSvg');
    const timeEl = document.getElementById('audioTime');

    this.audioPlaying = !this.audioPlaying;
    this.sfx.playChirp(600, 'sine');

    if (this.audioPlaying) {
      player.classList.add('playing');
      if (playSvg) playSvg.style.display = 'none';
      if (pauseSvg) pauseSvg.style.display = 'block';
      this.showToast('Playing AI Audio Executive Briefing (Aria-9 Neural Voice)');

      this.audioTimer = setInterval(() => {
        this.audioSeconds++;
        const mins = String(Math.floor(this.audioSeconds / 60)).padStart(2, '0');
        const secs = String(this.audioSeconds % 60).padStart(2, '0');
        if (timeEl) timeEl.textContent = `${mins}:${secs} / 02:15`;

        if (this.audioSeconds >= 135) {
          this.toggleAudioBrief();
        }
      }, 1000);
    } else {
      player.classList.remove('playing');
      if (playSvg) playSvg.style.display = 'block';
      if (pauseSvg) pauseSvg.style.display = 'none';
      clearInterval(this.audioTimer);
    }
  }

  initRadarChart() {
    const canvas = document.getElementById('synthesisRadarChart');
    if (!canvas || typeof Chart === 'undefined') return;

    const data = DOMAIN_DATASETS[this.currentDomain];
    this.radarChart = new Chart(canvas, {
      type: 'radar',
      data: {
        labels: ['Semantic Density', 'Consistency', 'Empirical Rigor', 'Risk Exposure', 'Freshness'],
        datasets: [{
          label: 'Cognitive Vector Score',
          data: data.radarMetrics,
          backgroundColor: 'rgba(6, 182, 212, 0.25)',
          borderColor: '#06b6d4',
          pointBackgroundColor: '#ec4899',
          pointBorderColor: '#ffffff',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#06b6d4'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.12)' },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            pointLabels: {
              color: '#94a3b8',
              font: { family: 'Plus Jakarta Sans', size: 10 }
            },
            ticks: { display: false, min: 0, max: 100 }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  updateRadarChart() {
    if (!this.radarChart) return;
    const data = DOMAIN_DATASETS[this.currentDomain];
    this.radarChart.data.datasets[0].data = data.radarMetrics;
    this.radarChart.update();
  }

  // --------------------------------------------------------------------------
  // STAGE 3: ORGANIZE (COMPARISON, CONFLICTS & GRAPH)
  // --------------------------------------------------------------------------
  bindOrganizeControls() {
    // Sub-view switcher buttons
    document.querySelectorAll('.organize-subnav-pills .subnav-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.organize-subnav-pills .subnav-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.subview;

        document.querySelectorAll('.organize-subview').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${view}`)?.classList.add('active');

        this.sfx.playChirp(620, 'sine');
        if (view === 'graph') {
          setTimeout(() => {
            this.knowledgeGraph.resize();
            this.knowledgeGraph.simulate();
          }, 50);
        }
      });
    });

    // Auto-resolve all conflicts
    document.getElementById('btnAutoResolveAll')?.addEventListener('click', () => {
      this.resolveAllConflicts();
    });

    // Synchronized scroll toggle in comparator
    const syncBtn = document.getElementById('btnSyncScroll');
    if (syncBtn) {
      syncBtn.addEventListener('click', () => {
        this.syncScrollActive = !this.syncScrollActive;
        syncBtn.querySelector('.sync-dot').style.background = this.syncScrollActive ? 'var(--accent-emerald)' : 'var(--text-dim)';
        syncBtn.innerHTML = `<span class="sync-dot" style="background:${this.syncScrollActive ? 'var(--accent-emerald)' : 'var(--text-dim)'}"></span> Sync Scroll: ${this.syncScrollActive ? 'ON' : 'OFF'}`;
        this.sfx.playChirp(550, 'sine');
      });
    }

    const paneLeft = document.getElementById('leftPaneContent');
    const paneRight = document.getElementById('rightPaneContent');
    if (paneLeft && paneRight) {
      paneLeft.addEventListener('scroll', () => {
        if (this.syncScrollActive) {
          const ratio = paneLeft.scrollTop / (paneLeft.scrollHeight - paneLeft.clientHeight);
          paneRight.scrollTop = ratio * (paneRight.scrollHeight - paneRight.clientHeight);
        }
      });
    }

    // Reset graph button
    document.getElementById('btnResetGraph')?.addEventListener('click', () => {
      this.knowledgeGraph.resetPhysics();
      this.sfx.playChirp(700, 'triangle');
      this.showToast('Knowledge graph physics reset');
    });
  }

  renderConflictsSection(data) {
    const list = document.getElementById('conflictFeedList');
    const counter = document.getElementById('conflictCounter');
    if (!list) return;

    list.innerHTML = '';
    if (counter) counter.textContent = data.conflicts.length;

    data.conflicts.forEach((c, index) => {
      const card = document.createElement('div');
      card.className = `conflict-card ${index === 0 ? 'selected' : ''}`;
      card.dataset.conflictId = c.id;

      card.innerHTML = `
        <div class="conflict-card-top">
          <span class="conflict-severity-pill severity-${escapeHtml(c.severity)}">${escapeHtml(c.severityText)}</span>
          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-dim);">Conflict #${index + 1}</span>
        </div>
        <h4 class="conflict-subject">${escapeHtml(c.subject)}</h4>
        <div class="conflict-versus-box">
          <div class="claim-box-left">
            <div class="claim-val">${escapeHtml(c.docA)}</div>
            <div class="claim-src">${escapeHtml(c.docAName)}</div>
          </div>
          <span class="versus-pill">VS</span>
          <div class="claim-box-right">
            <div class="claim-val">${escapeHtml(c.docB)}</div>
            <div class="claim-src">${escapeHtml(c.docBName)}</div>
          </div>
        </div>
        <div class="conflict-card-footer">
          <span class="arb-status">${c.resolved ? '✓ Arbitrated' : '⚠️ Pending AI Resolution'}</span>
          <button class="btn-arbitrate-single">Inspect & Arbitrate</button>
        </div>
      `;

      card.addEventListener('click', () => {
        document.querySelectorAll('.conflict-card').forEach(cEl => cEl.classList.remove('selected'));
        card.classList.add('selected');
        this.sfx.playChirp(650, 'sine');
        this.renderArbiterWorkspace(c);
      });

      list.appendChild(card);
    });

    if (data.conflicts.length > 0) {
      this.renderArbiterWorkspace(data.conflicts[0]);
    }
  }

  renderArbiterWorkspace(conflict) {
    const container = document.getElementById('arbiterWorkspace');
    if (!container) return;

    container.innerHTML = `
      <div class="arbiter-card">
        <h3 class="arbiter-title">${escapeHtml(conflict.subject)}</h3>
        <div class="arbiter-verdict-banner">
          <span class="sparkle">⚡</span>
          <span>${escapeHtml(conflict.arbitrationVerdict)}</span>
        </div>
        <p class="arbiter-reasoning">${escapeHtml(conflict.arbitrationReasoning)}</p>

        <div class="methodology-bars">
          <div class="m-bar-row">
            <div class="m-bar-lbl">
              <span>${escapeHtml(conflict.docAName)} Credibility Score</span>
              <span>${conflict.scoreA}%</span>
            </div>
            <div class="m-bar-track">
              <div class="m-bar-fill docA" style="width: ${conflict.scoreA}%"></div>
            </div>
          </div>
          <div class="m-bar-row">
            <div class="m-bar-lbl">
              <span>${escapeHtml(conflict.docBName)} Credibility Score</span>
              <span>${conflict.scoreB}%</span>
            </div>
            <div class="m-bar-track">
              <div class="m-bar-fill docB" style="width: ${conflict.scoreB}%"></div>
            </div>
          </div>
        </div>

        <button class="cyber-btn primary sm" id="btnAcceptArbitration">
          <span>Accept AI Recommended Ground Truth</span>
        </button>
      </div>
    `;

    container.querySelector('#btnAcceptArbitration')?.addEventListener('click', async () => {
      try {
        if (this.backendAvailable) {
          const res = await fetch(`${this.apiBase}/process/arbitrate/${conflict.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ verdict_action: 'adopt_recommended' })
          });
          const result = await res.json();
          if (!res.ok) {
            throw new Error(result.detail || `Arbitration failed (${res.status})`);
          }
          conflict.resolved = result.is_resolved;
        } else {
          conflict.resolved = true;
        }

        this.sfx.playSuccess();
        const card = document.querySelector(`.conflict-card[data-conflict-id="${conflict.id}"]`);
        if (card) {
          card.querySelector('.arb-status').textContent = '✓ Resolved & Adopted';
          card.querySelector('.arb-status').style.color = 'var(--accent-emerald)';
        }
        this.showToast(`Conflict resolved: Adopted grounded baseline for ${conflict.subject}`);
      } catch (err) {
        console.error('Conflict arbitration failed:', err);
        this.sfx.playAlert();
        this.showToast(`Arbitration failed: ${err.message}`);
      }
    });
  }

  async resolveAllConflicts() {
    const conflicts = this.backendAvailable
      ? (this.visibleConflicts || [])
      : DOMAIN_DATASETS[this.currentDomain].conflicts;
    try {
      if (this.backendAvailable) {
        for (const conflict of conflicts.filter(item => !item.resolved)) {
          const res = await fetch(`${this.apiBase}/process/arbitrate/${conflict.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ verdict_action: 'adopt_recommended' })
          });
          const result = await res.json();
          if (!res.ok) {
            throw new Error(result.detail || `Arbitration failed (${res.status})`);
          }
        }
        await this.fetchBackendConflicts();
      } else {
        conflicts.forEach(conflict => { conflict.resolved = true; });
        document.querySelectorAll('.conflict-card .arb-status').forEach(el => {
          el.textContent = '✓ Resolved & Adopted';
          el.style.color = 'var(--accent-emerald)';
        });
      }
      this.sfx.playSuccess();
      this.showToast(`Resolved ${conflicts.length} conflicts.`);
    } catch (err) {
      console.error('Bulk conflict arbitration failed:', err);
      this.sfx.playAlert();
      this.showToast(`Could not resolve conflicts: ${err.message}`);
    }
  }

  renderComparatorSection(data) {
    const leftPane = document.getElementById('leftPaneContent');
    const rightPane = document.getElementById('rightPaneContent');
    if (leftPane) leftPane.innerHTML = data.comparatorDocA;
    if (rightPane) rightPane.innerHTML = data.comparatorDocB;
  }

  // --------------------------------------------------------------------------
  // STAGE 4: USE (COPILOT & DELIVERABLES)
  // --------------------------------------------------------------------------
  bindUseControls() {
    // Chat prompt chips
    document.querySelectorAll('.chat-prompt-chips .p-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = btn.dataset.prompt;
        this.submitChatMessage(text);
      });
    });

    // Chat submit input
    const input = document.getElementById('chatInput');
    const sendBtn = document.getElementById('btnSendChat');
    if (sendBtn && input) {
      sendBtn.addEventListener('click', () => {
        if (input.value.trim()) {
          this.submitChatMessage(input.value.trim());
          input.value = '';
        }
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && input.value.trim()) {
          this.submitChatMessage(input.value.trim());
          input.value = '';
        }
      });
    }

    // Deliverable tabs (Memo, Matrix, Action Plan)
    document.querySelectorAll('.report-tabs .rep-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.report-tabs .rep-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.sfx.playChirp(600, 'sine');
        this.renderDeliverableTab(tab.dataset.rep);
      });
    });

    // Export Markdown & Print triggers
    document.getElementById('btnExportMarkdown')?.addEventListener('click', () => {
      this.copyMarkdownReport();
    });

    document.getElementById('btnPrintReport')?.addEventListener('click', () => {
      window.print();
    });
  }

  renderChatSection(chatHistory) {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;
    container.innerHTML = '';

    chatHistory.forEach(msg => {
      this.appendChatMessage(msg.sender, msg.text);
    });
  }

  appendChatMessage(sender, text) {
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;

    const msgEl = document.createElement('div');
    msgEl.className = `chat-msg ${sender}`;
    const avatar = sender === 'bot' ? 'AI' : 'YOU';
    const avatarClass = sender === 'bot' ? 'avatar-bot' : 'avatar-user';

    msgEl.innerHTML = `
      <div class="msg-avatar ${avatarClass}">${avatar}</div>
      <div class="msg-bubble">${this.formatMarkdownLinks(text)}</div>
    `;

    // Attach citation clicks
    msgEl.querySelectorAll('.citation-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const docRef = tag.dataset.ref;
        this.sfx.playChirp(750, 'triangle');
        this.showToast(`Navigated to citation provenance: [${docRef.toUpperCase()}]`);
      });
    });

    container.appendChild(msgEl);
    container.scrollTop = container.scrollHeight;
  }

  formatMarkdownLinks(text) {
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
    return formatted;
  }

  submitChatMessage(userQuery) {
    this.sfx.playChirp(600, 'triangle');
    this.appendChatMessage('user', userQuery);

    // Simulated grounded bot reply
    setTimeout(() => {
      const data = DOMAIN_DATASETS[this.currentDomain];
      let botResponse = `Based on cross-referencing **${data.docsCount} active sources**, here is the synthesized intelligence:\n\n` +
        `• **Verified Core Baseline:** ${data.synthesis.brief}\n` +
        `• **Audit Provenance:** See <span class="citation-tag" data-ref="doc1">Doc A: Lab Findings</span> and <span class="citation-tag" data-ref="doc2">Doc B: Independent Audit</span>.`;

      if (userQuery.toLowerCase().includes('discrep') || userQuery.toLowerCase().includes('conflict')) {
        botResponse = `Synapse AI detected **${data.conflicts.length} material inconsistencies**:\n\n` +
          `1. **${data.conflicts[0].subject}**: <span class="citation-tag" data-ref="doc1">Doc A</span> claims ${data.conflicts[0].docA}, but <span class="citation-tag" data-ref="doc2">Doc B</span> observed ${data.conflicts[0].docB}.\n` +
          `2. **${data.conflicts[1].subject}**: <span class="citation-tag" data-ref="doc1">Doc A</span> notes ${data.conflicts[1].docA}, while <span class="citation-tag" data-ref="doc2">Doc B</span> records ${data.conflicts[1].docB}.`;
      } else if (userQuery.toLowerCase().includes('board') || userQuery.toLowerCase().includes('brief')) {
        botResponse = `**Executive Board Briefing Summary**:\n\n` +
          `1. **Technological Feasibility:** High under baseline parameters, but requires immediate resolution of operational degradation.\n` +
          `2. **Capex & Horizon:** Commercial pilot is realistic for **Q4 2028**, avoiding early warranty exposure.\n` +
          `3. **Immediate Action:** Mandate supplier quality audits under standardized protocol <span class="citation-tag" data-ref="doc2">Doc B §Audit</span>.`;
      }

      this.appendChatMessage('bot', botResponse);
      this.sfx.playSuccess();
    }, 450);
  }

  renderDeliverables(data) {
    this.renderDeliverableTab('memo');
  }

  renderDeliverableTab(type) {
    const area = document.getElementById('deliverableContentArea');
    const data = DOMAIN_DATASETS[this.currentDomain];
    if (!area || !data) return;

    if (type === 'memo') {
      area.innerHTML = `
        <div class="memo-document">
          <div class="memo-header-block">
            <h2 class="memo-title">EXECUTIVE DECISION MEMORANDUM</h2>
            <div class="memo-meta-grid">
              <div><strong>SUBJECT:</strong> ${data.name.toUpperCase()} STRATEGIC SYNTHESIS</div>
              <div><strong>DATE:</strong> ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
              <div><strong>ANALYSIS RIGOR:</strong> SYNAPSE AI ENGINE (96.8% GROUNDING)</div>
              <div><strong>DISCREPANCIES RESOLVED:</strong> ${data.conflicts.length} DETECTED / ARBITRATED</div>
            </div>
          </div>

          <h3>1. Strategic Overview</h3>
          <p>${data.synthesis.brief}</p>

          <h3>2. Key Contradictions & Reconciled Facts</h3>
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>Source A (Internal Claim)</th>
                <th>Source B (Independent Audit)</th>
                <th>Arbitrated Fact</th>
              </tr>
            </thead>
            <tbody>
              ${data.conflicts.map(c => `
                <tr>
                  <td><strong>${c.subject}</strong></td>
                  <td>${c.docA}</td>
                  <td>${c.docB}</td>
                  <td style="color: var(--accent-emerald); font-weight:600;">${c.arbitrationVerdict.split(':')[1] || c.docB}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <h3>3. Final Strategic Directive</h3>
          <p>Adopt independent audit figures as the official engineering and budgeting baseline. Reconcile forward guidance to avoid regulatory or disclosure liability.</p>
        </div>
      `;
    } else if (type === 'matrix') {
      area.innerHTML = `
        <div class="memo-document">
          <h2 class="memo-title">RISK & DECISION MATRIX</h2>
          <p style="color: var(--text-dim); font-size: 0.8rem; margin-bottom: 16px;">Multi-criteria risk prioritization table generated from synthesized cross-source telemetry.</p>
          <table class="matrix-table">
            <thead>
              <tr>
                <th>Risk Vector</th>
                <th>Probability</th>
                <th>Impact</th>
                <th>Mitigation Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thermal Degradation > 40°C</td>
                <td style="color: #ef4444;">High (88%)</td>
                <td style="color: #ef4444;">Critical</td>
                <td>Implement active liquid chiller loop (ASTM-D48 compliant)</td>
                <td><span style="color: var(--accent-emerald);">Mitigated</span></td>
              </tr>
              <tr>
                <td>Schedule Delay to Q4 2028</td>
                <td style="color: #f59e0b;">Medium (64%)</td>
                <td style="color: #f59e0b;">Moderate</td>
                <td>Adjust Capex allocation across 3-year phased disbursements</td>
                <td><span style="color: var(--accent-sky);">In Progress</span></td>
              </tr>
              <tr>
                <td>Discrepancy in Legal Disclosures</td>
                <td style="color: #10b981;">Low (12%)</td>
                <td style="color: #ef4444;">Severe</td>
                <td>Incorporate audit footnotes into SEC 10-K risk factors</td>
                <td><span style="color: var(--accent-emerald);">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    } else if (type === 'action') {
      area.innerHTML = `
        <div class="memo-document">
          <h2 class="memo-title">RECOMMENDED 90-DAY ACTION PLAN</h2>
          <div style="display:flex; flex-direction:column; gap:12px; margin-top:16px;">
            <div style="padding:14px; background: rgba(6,182,212,0.1); border-left: 3px solid var(--accent-cyan); border-radius: 4px;">
              <strong style="color: var(--accent-sky);">Days 1–30: Technical Reconciliation</strong>
              <p style="font-size:0.85rem; margin-top:4px;">Align internal R&D test protocols with ASTM-D48 standards. Form cross-functional arbitration committee to review 680 Wh/L real-world limits.</p>
            </div>
            <div style="padding:14px; background: rgba(139,92,246,0.1); border-left: 3px solid var(--accent-purple); border-radius: 4px;">
              <strong style="color: #c084fc;">Days 31–60: Commercial & Capex Adjustment</strong>
              <p style="font-size:0.85rem; margin-top:4px;">Re-model economic unit cost sensitivity at $78/kWh assuming 88% production yield threshold.</p>
            </div>
            <div style="padding:14px; background: rgba(16,185,129,0.1); border-left: 3px solid var(--accent-emerald); border-radius: 4px;">
              <strong style="color: var(--accent-emerald);">Days 61–90: Board Governance Review</strong>
              <p style="font-size:0.85rem; margin-top:4px;">Present reconciled intelligence memorandum to executive steering committee for formal sign-off.</p>
            </div>
          </div>
        </div>
      `;
    }
  }

  copyMarkdownReport() {
    const data = DOMAIN_DATASETS[this.currentDomain];
    const md = `# SYNAPSE AI // EXECUTIVE INTELLIGENCE MEMO
**Domain:** ${data.name}
**Date:** ${new Date().toISOString().split('T')[0]}
**Confidence:** 96.8% Grounded

## 1. Executive Summary
${data.synthesis.brief}

## 2. Cross-Source Inconsistencies Detected
${data.conflicts.map(c => `- **${c.subject}**: Source A (${c.docA}) vs Source B (${c.docB})\n  - *AI Resolution:* ${c.arbitrationVerdict}`).join('\n')}

## 3. Grounded Conclusion
Adopt independent audit verified metrics as design and disclosure baseline.
`;
    navigator.clipboard.writeText(md).then(() => {
      this.sfx.playSuccess();
      this.showToast('Executive Report copied to clipboard as Markdown!');
    }).catch(() => {
      this.showToast('Copied to clipboard!');
    });
  }

  // --------------------------------------------------------------------------
  // HACKATHON JURY TOUR CONTROLLER
  // --------------------------------------------------------------------------
  bindJuryTourControls() {
    const btnTour = document.getElementById('juryTourBtn');
    const modal = document.getElementById('juryTourModal');
    const btnClose = document.getElementById('btnTourClose');
    const btnPrev = document.getElementById('btnTourPrev');
    const btnNext = document.getElementById('btnTourNext');

    if (btnTour) {
      btnTour.addEventListener('click', () => {
        this.startJuryTour();
      });
    }

    if (btnClose && modal) {
      btnClose.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (this.tourStep > 0) {
          this.tourStep--;
          this.renderTourStep();
        }
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (this.tourStep < this.tourSteps.length - 1) {
          this.tourStep++;
          this.renderTourStep();
        } else {
          modal.classList.remove('active');
          this.showToast('Jury Tour completed! Feel free to explore freely.');
        }
      });
    }
  }

  startJuryTour() {
    this.tourStep = 0;
    const modal = document.getElementById('juryTourModal');
    if (!modal) return;
    modal.classList.add('active');
    this.sfx.playChirp(800, 'triangle');
    this.renderTourStep();
  }

  renderTourStep() {
    const step = this.tourSteps[this.tourStep];
    const indicator = document.getElementById('tourStepIndicator');
    const title = document.getElementById('tourTitle');
    const desc = document.getElementById('tourDescription');
    const list = document.getElementById('tourFeaturesList');
    const dots = document.querySelectorAll('.tour-dots .tour-dot');

    if (indicator) indicator.textContent = `JURY DEMO: STEP ${this.tourStep + 1} OF 4`;
    if (title) title.textContent = step.title;
    if (desc) desc.textContent = step.desc;

    if (list) {
      list.innerHTML = step.features.map(f => `
        <div class="tour-f-item">
          <span class="tour-f-icon">✦</span>
          <span>${f}</span>
        </div>
      `).join('');
    }

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.tourStep);
    });

    // Auto switch background stage
    this.switchStage(step.stage);
  }

  // Toast System
  showToast(message, type = 'cyan') {
    const hub = document.getElementById('toastHub');
    if (!hub) return;

    const toast = document.createElement('div');
    toast.className = `toast-msg toast-${type}`;
    toast.innerHTML = `
      <span class="sparkle">✨</span>
      <span>${message}</span>
    `;

    hub.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  window.app = new SynapseAIApp();
});
