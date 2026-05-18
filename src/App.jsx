import { useState } from "react"
 
// ─── Pre-built concept diagrams ───────────────────────────────────────────────
 
const DIAGRAMS = [
  {
    id: "ownership_types",
    category: "Ownership",
    title: "Types of Property Ownership",
    description: "The ownership hierarchy from strongest to most limited",
    svg: `<svg viewBox="0 0 700 420" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1"/>
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#22c55e;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#15803d;stop-opacity:1"/>
        </linearGradient>
        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f97316;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#c2410c;stop-opacity:1"/>
        </linearGradient>
        <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#7e22ce;stop-opacity:1"/>
        </linearGradient>
      </defs>
      <!-- Title -->
      <text x="350" y="30" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Property Ownership Types</text>
 
      <!-- Fee Simple Absolute -->
      <rect x="220" y="50" width="260" height="56" rx="12" fill="url(#g1)"/>
      <text x="350" y="75" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Fee Simple Absolute</text>
      <text x="350" y="93" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Full ownership · No conditions · Strongest form</text>
 
      <!-- Arrow down -->
      <line x1="350" y1="106" x2="350" y2="128" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4"/>
      <polygon points="344,124 356,124 350,134" fill="#3b82f6"/>
 
      <!-- Fee Simple Defeasible -->
      <rect x="220" y="134" width="260" height="56" rx="12" fill="url(#g2)"/>
      <text x="350" y="159" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Fee Simple Defeasible</text>
      <text x="350" y="177" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Ownership with conditions · Can be lost if violated</text>
 
      <!-- Split arrows -->
      <line x1="350" y1="190" x2="350" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
      <line x1="350" y1="210" x2="200" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
      <line x1="350" y1="210" x2="500" y2="210" stroke="#22c55e" stroke-width="2" stroke-dasharray="4"/>
      <polygon points="194,204 194,216 188,210" fill="#22c55e"/>
      <polygon points="506,204 506,216 512,210" fill="#22c55e"/>
 
      <!-- Determinable -->
      <rect x="50" y="216" width="180" height="52" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="140" y="238" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Determinable</text>
      <text x="140" y="253" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Ends automatically</text>
      <text x="140" y="264" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">when violated</text>
 
      <!-- Subject to Condition -->
      <rect x="470" y="216" width="180" height="52" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="560" y="236" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Subject to Condition</text>
      <text x="560" y="251" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Grantor must act</text>
      <text x="560" y="262" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">to reclaim</text>
 
      <!-- Life Estate -->
      <line x1="350" y1="190" x2="350" y2="296" stroke="#f97316" stroke-width="2" stroke-dasharray="4"/>
      <polygon points="344,292 356,292 350,302" fill="#f97316"/>
      <rect x="220" y="302" width="260" height="56" rx="12" fill="url(#g3)"/>
      <text x="350" y="327" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Life Estate</text>
      <text x="350" y="345" text-anchor="middle" fill="rgba(255,255,255,0.8)" font-family="DM Sans, sans-serif" font-size="10">Ownership for duration of a life · Remainderman inherits</text>
 
      <!-- Leasehold -->
      <line x1="350" y1="358" x2="350" y2="374" stroke="#a855f7" stroke-width="2" stroke-dasharray="4"/>
      <polygon points="344,370 356,370 350,380" fill="#a855f7"/>
      <rect x="220" y="380" width="260" height="34" rx="10" fill="url(#g4)"/>
      <text x="350" y="401" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Leasehold Estate · Possession only · Most limited</text>
    </svg>`
  },
  {
    id: "lien_priority",
    category: "Encumbrances",
    title: "Lien Priority Order",
    description: "Who gets paid first when a property is sold or foreclosed",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="28" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Lien Priority: Who Gets Paid First</text>
      <text x="350" y="48" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="12">Priority #1 is paid in full before #2 receives anything</text>
 
      <!-- Priority 1 - Property Taxes -->
      <rect x="60" y="64" width="580" height="52" rx="12" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="2"/>
      <rect x="60" y="64" width="52" height="52" rx="12" fill="#ef4444"/>
      <text x="86" y="95" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">1</text>
      <text x="300" y="86" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Property Tax Liens</text>
      <text x="300" y="104" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="11">ALWAYS first — supersedes all other liens regardless of recording date</text>
 
      <!-- Priority 2 - Special Assessments -->
      <rect x="60" y="130" width="580" height="52" rx="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <rect x="60" y="130" width="52" height="52" rx="12" fill="#f97316"/>
      <text x="86" y="161" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">2</text>
      <text x="300" y="152" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Special Assessments</text>
      <text x="300" y="170" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="11">Government charges for specific improvements (sidewalks, sewers)</text>
 
      <!-- Priority 3 - First Mortgage -->
      <rect x="60" y="196" width="580" height="52" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="60" y="196" width="52" height="52" rx="12" fill="#3b82f6"/>
      <text x="86" y="227" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">3</text>
      <text x="300" y="218" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">First Recorded Mortgage / Deed of Trust</text>
      <text x="300" y="236" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="11">First in time, first in right — recording date determines priority</text>
 
      <!-- Priority 4 - Junior Liens -->
      <rect x="60" y="262" width="580" height="52" rx="12" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/>
      <rect x="60" y="262" width="52" height="52" rx="12" fill="#a855f7"/>
      <text x="86" y="293" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">4</text>
      <text x="300" y="284" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Junior Liens (2nd Mortgage, Mechanic's Liens, Judgment Liens)</text>
      <text x="300" y="302" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="11">Paid in order recorded — may receive nothing if senior liens exhaust proceeds</text>
 
      <!-- Key rule -->
      <rect x="60" y="330" width="580" height="40" rx="10" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="1"/>
      <text x="350" y="355" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="12" font-weight="600">⚡ Key Rule: "First in time, first in right" — except property taxes which are ALWAYS #1</text>
    </svg>`
  },
  {
    id: "appraisal_approaches",
    category: "Appraisal",
    title: "3 Approaches to Value",
    description: "When to use each appraisal method and how they work",
    svg: `<svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="28" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Three Approaches to Value</text>
 
      <!-- Sales Comparison -->
      <rect x="20" y="50" width="202" height="320" rx="14" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="20" y="50" width="202" height="44" rx="14" fill="#3b82f6"/>
      <rect x="20" y="80" width="202" height="14" rx="0" fill="#3b82f6"/>
      <text x="121" y="78" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Sales Comparison</text>
      <text x="121" y="118" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">BEST FOR</text>
      <text x="121" y="136" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Single-family residential</text>
      <text x="121" y="152" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">homes</text>
      <text x="121" y="178" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">HOW IT WORKS</text>
      <text x="121" y="196" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Compare to recent</text>
      <text x="121" y="210" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">comparable sales.</text>
      <text x="121" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Adjust for differences.</text>
      <text x="121" y="252" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">KEY PRINCIPLE</text>
      <text x="121" y="268" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Substitution — buyer</text>
      <text x="121" y="282" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">pays no more than cost</text>
      <text x="121" y="296" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">of equal substitute</text>
      <rect x="40" y="318" width="162" height="36" rx="8" fill="rgba(59,130,246,0.2)"/>
      <text x="121" y="341" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">CMA uses this approach</text>
 
      <!-- Cost Approach -->
      <rect x="249" y="50" width="202" height="320" rx="14" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
      <rect x="249" y="50" width="202" height="44" rx="14" fill="#f97316"/>
      <rect x="249" y="80" width="202" height="14" rx="0" fill="#f97316"/>
      <text x="350" y="78" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Cost Approach</text>
      <text x="350" y="118" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">BEST FOR</text>
      <text x="350" y="136" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">New construction &amp;</text>
      <text x="350" y="152" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">special-use properties</text>
      <text x="350" y="178" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">FORMULA</text>
      <text x="350" y="196" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Replacement Cost</text>
      <text x="350" y="210" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">− Depreciation</text>
      <text x="350" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">+ Land Value</text>
      <text x="350" y="252" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">REMEMBER</text>
      <text x="350" y="268" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Land is NEVER</text>
      <text x="350" y="282" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">depreciated</text>
      <rect x="269" y="318" width="162" height="36" rx="8" fill="rgba(249,115,22,0.2)"/>
      <text x="350" y="331" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">Schools, churches, gov</text>
      <text x="350" y="345" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">buildings → Cost Approach</text>
 
      <!-- Income Approach -->
      <rect x="478" y="50" width="202" height="320" rx="14" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="1.5"/>
      <rect x="478" y="50" width="202" height="44" rx="14" fill="#22c55e"/>
      <rect x="478" y="80" width="202" height="14" rx="0" fill="#22c55e"/>
      <text x="579" y="78" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Income Approach</text>
      <text x="579" y="118" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">BEST FOR</text>
      <text x="579" y="136" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Income-producing</text>
      <text x="579" y="152" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">investment properties</text>
      <text x="579" y="178" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">FORMULA</text>
      <text x="579" y="196" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Value = NOI ÷ Cap Rate</text>
      <text x="579" y="218" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">NOI = EGI − Expenses</text>
      <text x="579" y="240" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">(No mortgage in NOI)</text>
      <text x="579" y="266" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">REMEMBER</text>
      <text x="579" y="282" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Higher cap rate =</text>
      <text x="579" y="296" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">higher risk + return</text>
      <rect x="498" y="318" width="162" height="36" rx="8" fill="rgba(34,197,94,0.2)"/>
      <text x="579" y="341" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">Apartments, offices,</text>
      <text x="579" y="355" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">retail → Income Approach</text>
    </svg>`
  },
  {
    id: "agency_relationships",
    category: "Agency",
    title: "Agency Relationships",
    description: "Who represents who in a real estate transaction",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="28" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Agency Relationships</text>
 
      <!-- Seller box -->
      <rect x="40" y="55" width="130" height="60" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
      <text x="105" y="82" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="14" font-weight="800">SELLER</text>
      <text x="105" y="100" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Property owner</text>
 
      <!-- Listing Agent -->
      <rect x="40" y="172" width="130" height="60" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="105" y="196" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Listing Agent</text>
      <text x="105" y="212" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Represents seller</text>
      <text x="105" y="226" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Owes OLD CAR</text>
      <line x1="105" y1="115" x2="105" y2="172" stroke="#3b82f6" stroke-width="2"/>
      <polygon points="99,168 111,168 105,178" fill="#3b82f6"/>
      <text x="115" y="148" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="9">Listing</text>
      <text x="115" y="160" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="9">Agreement</text>
 
      <!-- Buyer box -->
      <rect x="530" y="55" width="130" height="60" rx="12" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
      <text x="595" y="82" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="14" font-weight="800">BUYER</text>
      <text x="595" y="100" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Purchasing party</text>
 
      <!-- Buyer's Agent -->
      <rect x="530" y="172" width="130" height="60" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="595" y="196" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Buyer's Agent</text>
      <text x="595" y="212" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Represents buyer</text>
      <text x="595" y="226" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Owes OLD CAR</text>
      <line x1="595" y1="115" x2="595" y2="172" stroke="#22c55e" stroke-width="2"/>
      <polygon points="589,168 601,168 595,178" fill="#22c55e"/>
      <text x="605" y="148" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="9">Buyer Rep</text>
      <text x="605" y="160" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="9">Agreement</text>
 
      <!-- Transaction line -->
      <line x1="170" y1="202" x2="530" y2="202" stroke="#52525b" stroke-width="1.5" stroke-dasharray="6"/>
      <text x="350" y="196" text-anchor="middle" fill="#71717a" font-family="DM Sans, sans-serif" font-size="10">Transaction / MLS</text>
 
      <!-- Dual Agency box -->
      <rect x="260" y="55" width="180" height="60" rx="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <text x="350" y="78" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">⚠ Dual Agency</text>
      <text x="350" y="94" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">One agent represents both</text>
      <text x="350" y="108" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Requires written consent from BOTH</text>
      <line x1="350" y1="115" x2="350" y2="145" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4"/>
 
      <!-- Transaction Broker box -->
      <rect x="260" y="145" width="180" height="52" rx="12" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="350" y="167" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Transaction Broker</text>
      <text x="350" y="183" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Assists both · No fiduciary duty</text>
 
      <!-- OLD CAR reminder -->
      <rect x="40" y="300" width="620" height="64" rx="12" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" stroke-width="1"/>
      <text x="350" y="322" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Fiduciary Duties — OLD CAR</text>
      <text x="350" y="342" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="11">Obedience · Loyalty · Disclosure · Confidentiality · Accounting · Reasonable Care</text>
      <text x="350" y="358" text-anchor="middle" fill="#71717a" font-family="DM Sans, sans-serif" font-size="10">Confidentiality survives the end of the agency relationship</text>
    </svg>`
  },
  {
    id: "contract_lifecycle",
    category: "Contracts",
    title: "Contract Lifecycle",
    description: "From offer to closing — how a real estate contract progresses",
    svg: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Real Estate Contract Lifecycle</text>
 
      <!-- Step 1: Offer -->
      <rect x="20" y="50" width="100" height="64" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="70" y="76" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">1. OFFER</text>
      <text x="70" y="92" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Buyer submits</text>
      <text x="70" y="104" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">written offer</text>
 
      <line x1="120" y1="82" x2="148" y2="82" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="144,77 156,82 144,87" fill="#3b82f6"/>
 
      <!-- Step 2: Counter / Accept -->
      <rect x="155" y="50" width="100" height="64" rx="12" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1.5"/>
      <text x="205" y="73" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">2. RESPONSE</text>
      <text x="205" y="89" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Accept, reject,</text>
      <text x="205" y="101" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">or counter</text>
 
      <line x1="255" y1="82" x2="283" y2="82" stroke="#22c55e" stroke-width="1.5"/>
      <polygon points="279,77 291,82 279,87" fill="#22c55e"/>
 
      <!-- Step 3: Acceptance -->
      <rect x="290" y="50" width="100" height="64" rx="12" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="340" y="73" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">3. ACCEPTED</text>
      <text x="340" y="89" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Contract is</text>
      <text x="340" y="101" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">executory</text>
 
      <line x1="390" y1="82" x2="418" y2="82" stroke="#a855f7" stroke-width="1.5"/>
      <polygon points="414,77 426,82 414,87" fill="#a855f7"/>
 
      <!-- Step 4: Contingencies -->
      <rect x="425" y="50" width="110" height="64" rx="12" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="480" y="72" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">4. DUE DILIGENCE</text>
      <text x="480" y="87" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Inspection, financing,</text>
      <text x="480" y="99" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">appraisal contingencies</text>
 
      <line x1="535" y1="82" x2="563" y2="82" stroke="#22c55e" stroke-width="1.5"/>
      <polygon points="559,77 571,82 559,87" fill="#22c55e"/>
 
      <!-- Step 5: Closing -->
      <rect x="570" y="50" width="110" height="64" rx="12" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
      <text x="625" y="76" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">5. CLOSING</text>
      <text x="625" y="92" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Contract fully</text>
      <text x="625" y="104" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">executed · Title transfers</text>
 
      <!-- Counteroffer loop -->
      <path d="M 255 114 Q 200 150 155 114" stroke="#f97316" stroke-width="1.5" fill="none" stroke-dasharray="4"/>
      <polygon points="158,110 151,120 162,118" fill="#f97316"/>
      <text x="205" y="162" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="9">Counteroffer kills original offer</text>
 
      <!-- Key contract terms -->
      <rect x="20" y="195" width="660" height="150" rx="14" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="350" y="218" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Key Contract Terms to Know</text>
 
      <rect x="40" y="230" width="190" height="94" rx="10" fill="rgba(59,130,246,0.08)"/>
      <text x="135" y="250" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">VOID vs VOIDABLE</text>
      <text x="135" y="266" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Void = no legal effect ever</text>
      <text x="135" y="280" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Voidable = one party can rescind</text>
      <text x="135" y="294" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Unenforceable = valid but</text>
      <text x="135" y="308" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">cannot be upheld in court</text>
 
      <rect x="255" y="230" width="190" height="94" rx="10" fill="rgba(34,197,94,0.08)"/>
      <text x="350" y="250" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">REMEDIES FOR BREACH</text>
      <text x="350" y="266" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Specific Performance — force sale</text>
      <text x="350" y="280" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Liquidated Damages — keep deposit</text>
      <text x="350" y="294" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Rescission — cancel contract</text>
      <text x="350" y="308" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Novation — substitute new party</text>
 
      <rect x="470" y="230" width="190" height="94" rx="10" fill="rgba(249,115,22,0.08)"/>
      <text x="565" y="250" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">STATUTE OF FRAUDS</text>
      <text x="565" y="266" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Real estate contracts must</text>
      <text x="565" y="280" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">be IN WRITING to be</text>
      <text x="565" y="294" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">enforceable in court</text>
      <text x="565" y="308" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">(leases &gt; 1 year too)</text>
    </svg>`
  },
  {
    id: "fair_housing",
    category: "Fair Housing",
    title: "Fair Housing Protected Classes",
    description: "The 7 federal protected classes and key violations",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Fair Housing Act — Protected Classes</text>
 
      <!-- Center label -->
      <circle cx="350" cy="180" r="54" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="2"/>
      <text x="350" y="172" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="800">7 FEDERAL</text>
      <text x="350" y="188" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="800">PROTECTED</text>
      <text x="350" y="204" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="800">CLASSES</text>
 
      <!-- Race -->
      <rect x="36" y="44" width="110" height="40" rx="10" fill="rgba(239,68,68,0.2)" stroke="#ef4444" stroke-width="1.5"/>
      <text x="91" y="60" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Race</text>
      <text x="91" y="76" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">1866 Act — no exceptions</text>
      <line x1="146" y1="64" x2="296" y2="140" stroke="#ef4444" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Color -->
      <rect x="36" y="104" width="110" height="40" rx="10" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="1.5"/>
      <text x="91" y="120" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Color</text>
      <text x="91" y="136" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Original 1968 class</text>
      <line x1="146" y1="124" x2="296" y2="160" stroke="#f97316" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Religion -->
      <rect x="36" y="164" width="110" height="40" rx="10" fill="rgba(234,179,8,0.2)" stroke="#eab308" stroke-width="1.5"/>
      <text x="91" y="180" text-anchor="middle" fill="#eab308" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Religion</text>
      <text x="91" y="196" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Original 1968 class</text>
      <line x1="146" y1="184" x2="296" y2="184" stroke="#eab308" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- National Origin -->
      <rect x="36" y="224" width="110" height="40" rx="10" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="91" y="240" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">National Origin</text>
      <text x="91" y="256" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Original 1968 class</text>
      <line x1="146" y1="244" x2="296" y2="210" stroke="#22c55e" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Sex -->
      <rect x="554" y="44" width="110" height="40" rx="10" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="609" y="64" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Sex</text>
      <text x="609" y="76" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Original 1968 class</text>
      <line x1="554" y1="64" x2="404" y2="140" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Familial Status -->
      <rect x="554" y="164" width="110" height="40" rx="10" fill="rgba(168,85,247,0.2)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="609" y="180" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Familial Status</text>
      <text x="609" y="196" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Added 1988</text>
      <line x1="554" y1="184" x2="404" y2="184" stroke="#a855f7" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Disability -->
      <rect x="554" y="224" width="110" height="40" rx="10" fill="rgba(236,72,153,0.2)" stroke="#ec4899" stroke-width="1.5"/>
      <text x="609" y="240" text-anchor="middle" fill="#ec4899" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Disability</text>
      <text x="609" y="256" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Added 1988</text>
      <line x1="554" y1="244" x2="404" y2="210" stroke="#ec4899" stroke-width="1" stroke-dasharray="3" opacity="0.5"/>
 
      <!-- Bottom key violations -->
      <rect x="36" y="300" width="190" height="64" rx="10" fill="rgba(239,68,68,0.08)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
      <text x="131" y="320" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Illegal Acts</text>
      <text x="131" y="336" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Steering · Blockbusting</text>
      <text x="131" y="350" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Redlining · Discriminatory ads</text>
 
      <rect x="255" y="300" width="190" height="64" rx="10" fill="rgba(249,115,22,0.08)" stroke="rgba(249,115,22,0.3)" stroke-width="1"/>
      <text x="350" y="320" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Exemptions (Mrs. Murphy)</text>
      <text x="350" y="336" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Owner-occupied ≤4 units</text>
      <text x="350" y="350" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">NO broker · NO discriminatory ads</text>
 
      <rect x="474" y="300" width="190" height="64" rx="10" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
      <text x="569" y="320" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Filing Deadlines</text>
      <text x="569" y="336" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">HUD complaint: 1 year</text>
      <text x="569" y="350" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Federal court lawsuit: 2 years</text>
    </svg>`
  },
  {
    id: "financing_flow",
    category: "Financing",
    title: "Mortgage Basics",
    description: "Key financing terms, loan types, and how the secondary market works",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Mortgage Basics &amp; Loan Types</text>
 
      <!-- Borrower -->
      <rect x="20" y="50" width="140" height="60" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
      <text x="90" y="76" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">MORTGAGOR</text>
      <text x="90" y="94" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Borrower · Signs note</text>
 
      <!-- Arrow to lender -->
      <line x1="160" y1="80" x2="230" y2="80" stroke="#3b82f6" stroke-width="1.5"/>
      <polygon points="226,75 238,80 226,85" fill="#3b82f6"/>
      <text x="199" y="72" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="8">Promissory Note</text>
      <line x1="238" y1="94" x2="160" y2="94" stroke="#22c55e" stroke-width="1.5"/>
      <polygon points="164,89 152,94 164,99" fill="#22c55e"/>
      <text x="199" y="108" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="8">Loan Funds</text>
 
      <!-- Lender -->
      <rect x="238" y="50" width="140" height="60" rx="12" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
      <text x="308" y="76" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">MORTGAGEE</text>
      <text x="308" y="94" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Lender · Holds lien</text>
 
      <!-- Arrow to secondary -->
      <line x1="378" y1="80" x2="440" y2="80" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4"/>
      <polygon points="436,75 448,80 436,85" fill="#a855f7"/>
      <text x="414" y="70" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="8">Sells loan</text>
 
      <!-- Secondary Market -->
      <rect x="448" y="50" width="230" height="60" rx="12" fill="rgba(168,85,247,0.15)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="563" y="73" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Secondary Market</text>
      <text x="563" y="89" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Fannie Mae (FNMA) · Freddie Mac (FHLMC)</text>
      <text x="563" y="101" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Ginnie Mae (GNMA) — FHA/VA only</text>
 
      <!-- Loan Types grid -->
      <text x="350" y="142" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Loan Types Comparison</text>
 
      <!-- Conventional -->
      <rect x="20" y="155" width="152" height="100" rx="12" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="96" y="174" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Conventional</text>
      <text x="96" y="192" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">No gov't insurance</text>
      <text x="96" y="208" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">PMI if &lt;20% down</text>
      <text x="96" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">PMI cancels at 80% LTV</text>
      <text x="96" y="240" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Fannie/Freddie eligible</text>
 
      <!-- FHA -->
      <rect x="188" y="155" width="152" height="100" rx="12" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
      <text x="264" y="174" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">FHA Loan</text>
      <text x="264" y="192" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Gov't insured by FHA</text>
      <text x="264" y="208" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Min 3.5% down</text>
      <text x="264" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">MIP required always</text>
      <text x="264" y="240" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Ginnie Mae eligible</text>
 
      <!-- VA -->
      <rect x="356" y="155" width="152" height="100" rx="12" fill="rgba(34,197,94,0.1)" stroke="#22c55e" stroke-width="1.5"/>
      <text x="432" y="174" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">VA Loan</text>
      <text x="432" y="192" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Gov't guaranteed</text>
      <text x="432" y="208" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">No down payment</text>
      <text x="432" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">No PMI · Funding fee</text>
      <text x="432" y="240" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Veterans/military only</text>
 
      <!-- USDA -->
      <rect x="524" y="155" width="152" height="100" rx="12" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="1.5"/>
      <text x="600" y="174" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">USDA Loan</text>
      <text x="600" y="192" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Rural properties</text>
      <text x="600" y="208" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Low/no down payment</text>
      <text x="600" y="224" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Income limits apply</text>
      <text x="600" y="240" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Eligible rural areas only</text>
 
      <!-- Key clauses -->
      <rect x="20" y="272" width="660" height="90" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="350" y="292" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Critical Mortgage Clauses</text>
      <text x="140" y="316" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Acceleration</text>
      <text x="140" y="332" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Full balance due on default</text>
      <text x="350" y="316" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Due-on-Sale</text>
      <text x="350" y="332" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Balance due when property sold</text>
      <text x="560" y="316" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Subordination</text>
      <text x="560" y="332" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Lender accepts lower priority</text>
      <text x="140" y="354" text-anchor="middle" fill="#71717a" font-family="DM Sans, sans-serif" font-size="8">Triggers foreclosure</text>
      <text x="350" y="354" text-anchor="middle" fill="#71717a" font-family="DM Sans, sans-serif" font-size="8">Prevents unauthorized assumption</text>
      <text x="560" y="354" text-anchor="middle" fill="#71717a" font-family="DM Sans, sans-serif" font-size="8">Used when refinancing</text>
    </svg>`
  },
  {
    id: "deed_types",
    category: "Deeds & Title",
    title: "Deed Types — Protection Spectrum",
    description: "From most to least protection for the buyer",
    svg: `<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Deed Types — Buyer Protection Spectrum</text>
 
      <!-- Spectrum bar -->
      <defs>
        <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#22c55e"/>
          <stop offset="100%" style="stop-color:#ef4444"/>
        </linearGradient>
      </defs>
      <rect x="40" y="48" width="620" height="12" rx="6" fill="url(#spectrum)"/>
      <text x="40" y="76" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">MOST PROTECTION</text>
      <text x="660" y="76" text-anchor="end" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">LEAST PROTECTION</text>
 
      <!-- General Warranty -->
      <rect x="20" y="88" width="152" height="120" rx="12" fill="rgba(34,197,94,0.15)" stroke="#22c55e" stroke-width="2"/>
      <circle cx="96" cy="105" r="12" fill="#22c55e"/>
      <text x="96" y="109" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="10" font-weight="800">1</text>
      <text x="96" y="130" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">General Warranty</text>
      <text x="96" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Warrants against ALL</text>
      <text x="96" y="162" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">defects — even before</text>
      <text x="96" y="176" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">grantor owned it</text>
      <text x="96" y="198" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="8">Most common residential</text>
 
      <!-- Special Warranty -->
      <rect x="188" y="88" width="152" height="120" rx="12" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" stroke-width="1.5"/>
      <circle cx="264" cy="105" r="12" fill="#3b82f6"/>
      <text x="264" y="109" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="10" font-weight="800">2</text>
      <text x="264" y="130" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Special Warranty</text>
      <text x="264" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Warrants only during</text>
      <text x="264" y="162" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">grantor's ownership</text>
      <text x="264" y="176" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Not before</text>
      <text x="264" y="198" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="8">Corps, estates, foreclosures</text>
 
      <!-- Bargain and Sale -->
      <rect x="356" y="88" width="152" height="120" rx="12" fill="rgba(249,115,22,0.15)" stroke="#f97316" stroke-width="1.5"/>
      <circle cx="432" cy="105" r="12" fill="#f97316"/>
      <text x="432" y="109" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="10" font-weight="800">3</text>
      <text x="432" y="130" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Bargain &amp; Sale</text>
      <text x="432" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Implies grantor has</text>
      <text x="432" y="162" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">title but no explicit</text>
      <text x="432" y="176" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">warranties</text>
      <text x="432" y="198" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="8">Tax sales, foreclosures</text>
 
      <!-- Quitclaim -->
      <rect x="524" y="88" width="152" height="120" rx="12" fill="rgba(239,68,68,0.15)" stroke="#ef4444" stroke-width="1.5"/>
      <circle cx="600" cy="105" r="12" fill="#ef4444"/>
      <text x="600" y="109" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="10" font-weight="800">4</text>
      <text x="600" y="130" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="11" font-weight="700">Quitclaim</text>
      <text x="600" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">NO warranties —</text>
      <text x="600" y="162" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">conveys only what</text>
      <text x="600" y="176" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">grantor has (if anything)</text>
      <text x="600" y="198" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="8">Clear title defects, family</text>
 
      <!-- Essential deed elements -->
      <rect x="20" y="228" width="660" height="96" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <text x="350" y="250" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Essential Deed Elements (All Types)</text>
      <text x="175" y="272" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Competent grantor</text>
      <text x="350" y="272" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Identifiable grantee</text>
      <text x="525" y="272" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Legal description</text>
      <text x="175" y="292" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Words of conveyance</text>
      <text x="350" y="292" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Grantor's signature</text>
      <text x="525" y="292" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">✓ Delivery &amp; acceptance</text>
      <rect x="40" y="304" width="620" height="14" rx="4" fill="rgba(59,130,246,0.1)"/>
      <text x="350" y="315" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="9" font-weight="700">Recording NOT required for deed to be valid between parties — but protects against third-party claims</text>
    </svg>`
  },
  {
    id: "land_use_controls",
    category: "Land Use",
    title: "Government Land Use Controls",
    description: "The 4 powers government uses to control private property",
    svg: `<svg viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Government Control of Private Property</text>
 
      <!-- Police Power -->
      <rect x="20" y="50" width="320" height="130" rx="14" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" stroke-width="1.5"/>
      <rect x="20" y="50" width="320" height="38" rx="14" fill="#3b82f6"/>
      <rect x="20" y="74" width="320" height="14" rx="0" fill="#3b82f6"/>
      <text x="180" y="74" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Police Power</text>
      <text x="180" y="108" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Regulate property for public health, safety, welfare</text>
      <text x="180" y="128" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Zoning laws · Building codes · Environmental regulations</text>
      <text x="180" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Health inspections · Subdivision regulations</text>
      <rect x="40" y="158" width="280" height="16" rx="6" fill="rgba(59,130,246,0.2)"/>
      <text x="180" y="170" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="9" font-weight="700">⚡ No compensation owed to owner</text>
 
      <!-- Eminent Domain -->
      <rect x="360" y="50" width="320" height="130" rx="14" fill="rgba(239,68,68,0.1)" stroke="#ef4444" stroke-width="1.5"/>
      <rect x="360" y="50" width="320" height="38" rx="14" fill="#ef4444"/>
      <rect x="360" y="74" width="320" height="14" rx="0" fill="#ef4444"/>
      <text x="520" y="74" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Eminent Domain</text>
      <text x="520" y="108" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Government takes property for public use</text>
      <text x="520" y="128" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Process is called condemnation</text>
      <text x="520" y="148" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Inverse condemnation — owner sues when value reduced</text>
      <rect x="380" y="158" width="280" height="16" rx="6" fill="rgba(239,68,68,0.2)"/>
      <text x="520" y="170" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="9" font-weight="700">⚡ Just compensation (fair market value) MUST be paid</text>
 
      <!-- Taxation -->
      <rect x="20" y="200" width="320" height="130" rx="14" fill="rgba(249,115,22,0.1)" stroke="#f97316" stroke-width="1.5"/>
      <rect x="20" y="200" width="320" height="38" rx="14" fill="#f97316"/>
      <rect x="20" y="224" width="320" height="14" rx="0" fill="#f97316"/>
      <text x="180" y="224" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Taxation (Ad Valorem)</text>
      <text x="180" y="258" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Property taxed based on assessed value</text>
      <text x="180" y="278" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Formula: Assessed Value × Tax Rate = Tax</text>
      <text x="180" y="298" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">1 mill = $1 per $1,000 assessed value</text>
      <rect x="40" y="308" width="280" height="16" rx="6" fill="rgba(249,115,22,0.2)"/>
      <text x="180" y="320" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="9" font-weight="700">⚡ Tax lien = ALWAYS highest lien priority</text>
 
      <!-- Escheat -->
      <rect x="360" y="200" width="320" height="130" rx="14" fill="rgba(168,85,247,0.1)" stroke="#a855f7" stroke-width="1.5"/>
      <rect x="360" y="200" width="320" height="38" rx="14" fill="#a855f7"/>
      <rect x="360" y="224" width="320" height="14" rx="0" fill="#a855f7"/>
      <text x="520" y="224" text-anchor="middle" fill="#fff" font-family="DM Sans, sans-serif" font-size="13" font-weight="700">Escheat</text>
      <text x="520" y="258" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">Property reverts to state</text>
      <text x="520" y="278" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">Triggered when owner dies intestate</text>
      <text x="520" y="298" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">with no identifiable heirs</text>
      <rect x="380" y="308" width="280" height="16" rx="6" fill="rgba(168,85,247,0.2)"/>
      <text x="520" y="320" text-anchor="middle" fill="#a855f7" font-family="DM Sans, sans-serif" font-size="9" font-weight="700">⚡ State is the "owner of last resort"</text>
 
      <!-- Acronym hint -->
      <text x="350" y="348" text-anchor="middle" fill="#52525b" font-family="DM Sans, sans-serif" font-size="10">Memory: P.E.T.E. — Police Power · Eminent Domain · Taxation · Escheat</text>
    </svg>`
  },
  {
    id: "noi_calculation",
    category: "Math",
    title: "NOI Calculation Flow",
    description: "Step-by-step from gross income to net operating income",
    svg: `<svg viewBox="0 0 700 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto">
      <text x="350" y="26" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="18" font-weight="700">Net Operating Income (NOI) Flow</text>
 
      <!-- Step 1: PGI -->
      <rect x="200" y="48" width="300" height="52" rx="12" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" stroke-width="2"/>
      <text x="350" y="70" text-anchor="middle" fill="#3b82f6" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Potential Gross Income (PGI)</text>
      <text x="350" y="88" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">100% occupied at market rent · $180,000 example</text>
 
      <!-- Minus sign + vacancy -->
      <text x="350" y="120" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">−</text>
      <rect x="420" y="106" width="240" height="36" rx="8" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
      <text x="540" y="129" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="10">Vacancy &amp; Credit Loss (5%) = $9,000</text>
 
      <line x1="350" y1="126" x2="350" y2="146" stroke="#3b82f6" stroke-width="2"/>
      <polygon points="344,142 356,142 350,152" fill="#3b82f6"/>
 
      <!-- Step 2: EGI -->
      <rect x="200" y="152" width="300" height="52" rx="12" fill="rgba(34,197,94,0.2)" stroke="#22c55e" stroke-width="2"/>
      <text x="350" y="174" text-anchor="middle" fill="#22c55e" font-family="DM Sans, sans-serif" font-size="12" font-weight="700">Effective Gross Income (EGI)</text>
      <text x="350" y="192" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="10">PGI − Vacancy Loss = $171,000</text>
 
      <!-- Minus sign + expenses -->
      <text x="350" y="224" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="18" font-weight="800">−</text>
      <rect x="420" y="210" width="240" height="36" rx="8" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
      <text x="540" y="233" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="10">Operating Expenses = $72,000</text>
 
      <line x1="350" y1="230" x2="350" y2="250" stroke="#22c55e" stroke-width="2"/>
      <polygon points="344,246 356,246 350,256" fill="#22c55e"/>
 
      <!-- Step 3: NOI -->
      <rect x="180" y="256" width="340" height="60" rx="14" fill="rgba(249,115,22,0.2)" stroke="#f97316" stroke-width="2.5"/>
      <text x="350" y="280" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="14" font-weight="800">Net Operating Income (NOI)</text>
      <text x="350" y="298" text-anchor="middle" fill="#f4f4f5" font-family="DM Sans, sans-serif" font-size="11">EGI − Operating Expenses = $99,000</text>
 
      <!-- What's NOT in NOI -->
      <rect x="20" y="336" width="300" height="36" rx="10" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.3)" stroke-width="1"/>
      <text x="170" y="349" text-anchor="middle" fill="#ef4444" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">NOT included in operating expenses:</text>
      <text x="170" y="363" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Mortgage payments · Depreciation · Income taxes</text>
 
      <!-- Value from NOI -->
      <rect x="380" y="336" width="300" height="36" rx="10" fill="rgba(249,115,22,0.1)" stroke="rgba(249,115,22,0.3)" stroke-width="1"/>
      <text x="530" y="349" text-anchor="middle" fill="#f97316" font-family="DM Sans, sans-serif" font-size="10" font-weight="700">Income Approach Value Formula:</text>
      <text x="530" y="363" text-anchor="middle" fill="#a1a1aa" font-family="DM Sans, sans-serif" font-size="9">Value = NOI ÷ Cap Rate → $99,000 ÷ 0.08 = $1,237,500</text>
    </svg>`
  }
]
 
const CATEGORIES = ["All", ...Array.from(new Set(DIAGRAMS.map(d => d.category)))]
 
// ─── AI Visual Generator ───────────────────────────────────────────────────────
 
const AI_SYSTEM_PROMPT = `You are a real estate exam visual explainer. When asked to explain a concept visually, you MUST respond with a valid SVG diagram only — no prose, no markdown, no explanation outside the SVG itself.
 
Rules:
- Output ONLY raw SVG starting with <svg and ending with </svg>
- viewBox must be "0 0 700 380"
- Background is transparent (dark app — use light text colors)
- Text colors: titles #f4f4f5, body #a1a1aa, accents use #3b82f6 (blue), #22c55e (green), #f97316 (orange), #a855f7 (purple), #ef4444 (red)
- Font: DM Sans, sans-serif
- Use rectangles, arrows, connecting lines, and labels to show relationships
- Always include a title at y=26
- Keep it exam-focused — show relationships, hierarchies, or step flows
- Max complexity: ~15 labeled elements
- If you cannot create a meaningful diagram for the topic, respond with: CANNOT_VISUALIZE`
 
export default function VisualAids({ addXP }) {
  const [catFilter, setCatFilter] = useState("All")
  const [activeDiagram, setActiveDiagram] = useState(null)
  const [aiMode, setAiMode] = useState(false)
  const [aiPrompt, setAiPrompt] = useState("")
  const [aiResult, setAiResult] = useState(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState("")
  const [viewed, setViewed] = useState(new Set())
 
  const filtered = catFilter === "All" ? DIAGRAMS : DIAGRAMS.filter(d => d.category === catFilter)
 
  const openDiagram = (d) => {
    setActiveDiagram(d)
    setAiMode(false)
    setAiResult(null)
    if (!viewed.has(d.id)) {
      setViewed(prev => new Set([...prev, d.id]))
      addXP && addXP(5)
    }
  }
 
  const generateAiDiagram = async () => {
    const prompt = aiPrompt.trim()
    if (!prompt || aiLoading) return
    setAiLoading(true)
    setAiError("")
    setAiResult(null)
 
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: AI_SYSTEM_PROMPT,
          messages: [{ role: "user", content: `Create an SVG diagram explaining: ${prompt}` }]
        })
      })
      const data = await res.json()
      const text = data.content?.find(b => b.type === "text")?.text || ""
 
      if (text.includes("CANNOT_VISUALIZE")) {
        setAiError("This topic doesn't have a clear visual structure. Try asking about a process, hierarchy, or comparison.")
      } else {
        const svgMatch = text.match(/<svg[\s\S]*<\/svg>/)
        if (svgMatch) {
          setAiResult(svgMatch[0])
          addXP && addXP(10)
        } else {
          setAiError("Couldn't generate a clean diagram. Try rephrasing — e.g. 'types of easements' or 'lien priority order'.")
        }
      }
    } catch {
      setAiError("Connection error. Please try again.")
    }
    setAiLoading(false)
  }
 
  const QUICK_TOPICS = [
    "Types of easements",
    "Leasehold estate types",
    "TRID disclosure timeline",
    "Foreclosure process steps",
    "Co-ownership comparison",
    "Depreciation types",
  ]
 
  return (
    <div className="section">
      {/* Header */}
      <div className="section-header">
        <h2 className="gradient-text">Visual Aids</h2>
        <p className="muted-text">{DIAGRAMS.length} diagrams · {viewed.size} viewed · +5 XP each</p>
      </div>
 
      {/* Mode toggle */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button
          className={`btn ${!aiMode ? "btn-gradient" : "btn-ghost"}`}
          onClick={() => { setAiMode(false); setActiveDiagram(null) }}
        >
          📊 Browse Diagrams
        </button>
        <button
          className={`btn ${aiMode ? "btn-gradient" : "btn-ghost"}`}
          onClick={() => { setAiMode(true); setActiveDiagram(null) }}
        >
          ✨ Generate a Diagram
        </button>
      </div>
 
      {/* AI Generator Mode */}
      {aiMode && (
        <div className="dark-card" style={{ marginBottom: 20 }}>
          <p className="muted-text" style={{ marginBottom: 12, fontSize: "0.85rem" }}>
            Describe any real estate concept and get an AI-generated diagram. Works best with hierarchies, processes, and comparisons.
          </p>
          <div className="quick-prompts" style={{ marginBottom: 12 }}>
            {QUICK_TOPICS.map((t, i) => (
              <button key={i} className="quick-prompt-btn" onClick={() => setAiPrompt(t)}>{t}</button>
            ))}
          </div>
          <div className="chat-row">
            <input
              className="chat-input"
              placeholder="e.g. types of easements, lien priority order, foreclosure steps..."
              value={aiPrompt}
              onChange={e => setAiPrompt(e.target.value)}
              onKeyDown={e => e.key === "Enter" && generateAiDiagram()}
            />
            <button className="btn btn-gradient" onClick={generateAiDiagram} disabled={aiLoading}>
              {aiLoading ? "Generating..." : "Generate"}
            </button>
          </div>
          {aiError && (
            <p style={{ color: "#ef4444", fontSize: "0.82rem", marginTop: 10 }}>{aiError}</p>
          )}
          {aiLoading && (
            <div style={{ marginTop: 20, textAlign: "center", color: "#a1a1aa", fontSize: "0.9rem" }}>
              <div className="loading" style={{ display: "inline-block", marginRight: 8 }}>⚙️</div>
              Building your diagram...
            </div>
          )}
          {aiResult && (
            <div style={{ marginTop: 20 }}>
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 14,
                padding: "1rem",
                overflowX: "auto"
              }}
                dangerouslySetInnerHTML={{ __html: aiResult }}
              />
              <p style={{ color: "#22c55e", fontSize: "0.8rem", marginTop: 8 }}>+10 XP earned</p>
            </div>
          )}
        </div>
      )}
 
      {/* Browse Mode */}
      {!aiMode && (
        <>
          <div className="category-pills">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={"cat-pill " + (catFilter === cat ? "active" : "")}
                onClick={() => { setCatFilter(cat); setActiveDiagram(null) }}
              >
                {cat}
              </button>
            ))}
          </div>
 
          {/* Diagram grid */}
          {!activeDiagram && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 12,
              marginTop: 16
            }}>
              {filtered.map(d => (
                <button
                  key={d.id}
                  onClick={() => openDiagram(d)}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${viewed.has(d.id) ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.08)"}`,
                    borderRadius: 14,
                    padding: "1rem",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    color: "var(--color-text)"
                  }}
                >
                  <div style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#3b82f6",
                    marginBottom: 6
                  }}>
                    {d.category} {viewed.has(d.id) ? "✓" : ""}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 6 }}>{d.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "#71717a" }}>{d.description}</div>
                </button>
              ))}
            </div>
          )}
 
          {/* Active diagram view */}
          {activeDiagram && (
            <div style={{ marginTop: 16 }}>
              <button
                className="btn-ghost-sm"
                onClick={() => setActiveDiagram(null)}
                style={{ marginBottom: 16 }}
              >
                ← Back to diagrams
              </button>
              <div className="dark-card">
                <div style={{ marginBottom: 12 }}>
                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#3b82f6"
                  }}>
                    {activeDiagram.category}
                  </span>
                  <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginTop: 4, marginBottom: 4 }}>
                    {activeDiagram.title}
                  </h3>
                  <p className="muted-text" style={{ fontSize: "0.85rem" }}>{activeDiagram.description}</p>
                </div>
                <div style={{
                  background: "rgba(0,0,0,0.2)",
                  borderRadius: 12,
                  padding: "1rem",
                  overflowX: "auto"
                }}
                  dangerouslySetInnerHTML={{ __html: activeDiagram.svg }}
                />
              </div>
              {/* Navigate between diagrams */}
              <div className="card-controls" style={{ marginTop: 12 }}>
                {filtered.indexOf(activeDiagram) > 0 && (
                  <button className="btn btn-ghost" onClick={() => openDiagram(filtered[filtered.indexOf(activeDiagram) - 1])}>
                    ← Prev
                  </button>
                )}
                <span className="muted-text">
                  {filtered.indexOf(activeDiagram) + 1} / {filtered.length}
                </span>
                {filtered.indexOf(activeDiagram) < filtered.length - 1 && (
                  <button className="btn btn-gradient" onClick={() => openDiagram(filtered[filtered.indexOf(activeDiagram) + 1])}>
                    Next →
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
 
