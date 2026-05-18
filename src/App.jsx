import { useState, useEffect, useRef } from "react"
import { Zap, Target, Home, Calculator, List, Bot } from "lucide-react"
import "./App.css"
 
const KNOWLEDGE_BASE = `
PROPERTY OWNERSHIP:
- Fee Simple Absolute: highest form of ownership; full control, no conditions; can sell, lease, or will freely.
- Fee Simple Defeasible: ownership that can be lost if a specified condition is violated. Two types: Fee Simple Determinable (automatically ends) and Fee Simple Subject to Condition Subsequent (grantor must act to reclaim).
- Life Estate: ownership for the duration of a person's life. Life tenant can use and profit from property but cannot waste it. The remainderman receives the property after the life tenant dies.
- Leasehold Estate: tenant's right to possess for a set time. Types: Estate for Years (specific end date), Periodic Tenancy (auto-renews), Tenancy at Will (either party can end anytime), Tenancy at Sufferance (holdover without permission).
- Joint Tenancy: co-ownership WITH right of survivorship. Requires 4 unities: Time, Title, Interest, Possession (TTIP). Deceased owner's share passes automatically to survivors, bypassing probate.
- Tenancy in Common: co-ownership WITHOUT survivorship. Each owner holds an undivided interest they can sell or will separately. Unequal shares are allowed. Most common form of co-ownership.
- Tenancy by the Entirety: married couples only; neither can sell or encumber without the other's consent.
- Community Property: in 9 states (AZ, CA, ID, LA, NV, NM, TX, WA, WI), most property acquired during marriage is owned 50/50.
- Severalty: owned by one person alone.
- Condominium: fee simple title to unit plus undivided interest in common areas.
- Co-op: residents own shares in the corporation that owns the building. No deed for the individual unit.
- MARIA test determines if personal property is a fixture: Method of attachment, Adaptability, Relationship of parties, Intention, Agreement.
- Real property includes land, everything permanently attached, and associated rights (air, mineral, water, riparian rights).
 
ENCUMBRANCES AND LIENS:
- Specific lien: affects one parcel (mortgage, mechanic's lien, property tax lien).
- General lien: affects all property of a debtor (judgment lien, IRS tax lien).
- Voluntary lien: created by owner (mortgage). Involuntary lien: by law without consent (tax lien, mechanic's lien).
- Lien priority: generally first in time, first in right. Property taxes always have highest priority.
- Mechanic's lien: filed by unpaid contractors or suppliers within a statutory period.
- Lis pendens: recorded notice that a lawsuit is pending affecting the property.
- Easement appurtenant: benefits one parcel (dominant) at expense of adjacent parcel (servient). Runs with the land.
- Easement in gross: benefits a person or company, not adjacent land. Does NOT run with the land.
- Easement by prescription: acquired by open, notorious, hostile, continuous use for statutory period.
- Easement by necessity: granted when a property is landlocked.
- License: personal, revocable right to use another's land. NOT an easement.
- Encroachment: structure physically invades another's property.
- Deed restriction (restrictive covenant): private limitation on land use. Runs with the land and binds future owners.
 
LEGAL DESCRIPTIONS:
- Metes and Bounds: compass bearings and distances from a Point of Beginning (POB). Oldest method.
- Rectangular Survey: townships (6-mile square = 36 sections). One section = 640 acres = 1 square mile.
- Lot and Block: refers to a recorded subdivision map. Most common for residential properties.
- 1 acre = 43,560 sq ft. 1 section = 640 acres. 1 township = 36 sections. 1 quarter section = 160 acres.
 
CONTRACTS:
- Essential elements: Offer, Acceptance, Consideration, Legal Capacity, Legal Purpose.
- Void: no legal effect from the start. Voidable: one party may rescind. Unenforceable: valid but cannot be enforced in court.
- Statute of Frauds: real estate contracts must be in writing to be enforceable.
- Bilateral: both parties make promises (purchase agreement). Unilateral: only one party makes a promise (option contract, open listing).
- Executory: not yet fully performed. Executed: fully performed by all parties.
- Specific performance: court orders completion because each parcel is unique.
- Liquidated damages: pre-agreed compensation for breach (often the earnest money deposit).
- Novation: substituting a new party, fully releasing the original.
- Contingency: condition that must be satisfied before contract is binding.
- Time is of the essence: all deadlines are strictly enforceable.
- Option contract: unilateral contract giving buyer the exclusive right but not obligation to purchase at agreed price within set period.
- Right of first refusal: right to match any offer before owner accepts it from someone else.
- Contract for deed (land contract): buyer takes possession and makes payments to seller; seller retains legal title until paid in full.
 
AGENCY:
- Listing agent represents the seller. Buyer's agent represents the buyer.
- Dual agency: one agent represents both parties; requires informed written consent from both.
- Designated agency: different agents within same firm represent each party separately.
- Transaction broker: assists both parties without representing either as a fiduciary.
- Sub-agent: cooperating broker acts as seller's agent even when working with a buyer.
- FIDUCIARY DUTIES (OLD CAR): Obedience, Loyalty, Disclosure, Confidentiality (survives the relationship), Accounting, Reasonable Care.
- Material fact: any fact that would affect a reasonable person's decision. Must be disclosed.
- Puffing: non-factual subjective praise. Not illegal but must not cross into false statements.
- Misrepresentation: false statement of material fact. Intentional = fraud.
- Exclusive Right to Sell: broker earns commission regardless of who sells. Most common listing type.
- Exclusive Agency: owner can sell without owing commission. One broker authorized.
- Open Listing: multiple brokers; only procuring broker earns commission. Unilateral contract.
- Net Listing: broker keeps everything above set net price. Discouraged due to conflicts of interest.
- Commingling: illegally mixing client funds with broker's personal/business funds.
- Conversion: illegally using client funds for personal use. May be criminal fraud.
- Sherman Antitrust Act: prohibits commission rate-fixing, market allocation, group boycotts among competing brokers.
 
FAIR HOUSING:
- Federal Fair Housing Act (1968, amended 1988): 7 protected classes: Race, Color, Religion, National Origin, Sex, Familial Status, Disability.
- Familial status: households with children under 18, pregnant women, persons securing custody.
- Disability: allow reasonable modifications at tenant's expense and provide reasonable accommodations.
- Exemptions: owner-occupied buildings with 4 or fewer units (Mrs. Murphy), single-family homes sold without a broker, qualified 55+/62+ senior housing.
- Steering: directing buyers/renters toward or away from areas based on protected class. Illegal.
- Blockbusting: inducing owners to sell by suggesting a protected class is moving in. Illegal.
- Redlining: refusing loans or services in areas based on race or ethnicity. Illegal.
- Civil Rights Act of 1866: prohibits discrimination based on RACE ONLY. Has absolutely NO exemptions.
- Jones v. Mayer (1968): Supreme Court upheld 1866 Act prohibition on racial discrimination.
- File HUD complaint within 1 year. Federal court lawsuit within 2 years.
- ADA: applies to commercial properties and public accommodations. Requires accessible design.
- ECOA (Regulation B): prohibits credit discrimination based on race, color, religion, national origin, sex, marital status, age.
- Disparate impact: neutral policy that disproportionately harms a protected class. Can be discriminatory without intent.
 
FINANCING:
- Mortgagor = borrower. Mortgagee = lender.
- Promissory note: personal promise to repay the debt. Creates personal liability.
- Mortgage: security instrument pledging real property as collateral. Creates a lien.
- Deed of Trust: used in many states. Three parties: trustor (borrower), beneficiary (lender), trustee (holds legal title). Allows non-judicial foreclosure.
- Conventional loan: not insured or guaranteed by the government.
- FHA loan: insured by FHA. Minimum 3.5% down. Requires MIP regardless of LTV.
- VA loan: guaranteed by VA for eligible veterans. No down payment. No PMI but requires funding fee.
- USDA loan: for eligible rural properties. Low or no down payment.
- PMI: protects the LENDER when LTV exceeds 80% on conventional loans. Can be cancelled at 80% LTV.
- Fixed-rate mortgage: rate and payment stay the same for life of loan.
- ARM: rate changes periodically based on an index. Has initial cap, periodic cap, and lifetime cap.
- Balloon mortgage: regular payments with one large lump sum due at set date.
- Amortization: gradual repayment. Early payments mostly interest; later payments mostly principal.
- Negative amortization: loan balance increases because payments do not cover interest due.
- Due-on-Sale clause: full loan balance due when property is sold. Prevents unauthorized assumption.
- Acceleration clause: lender can demand full repayment immediately upon default.
- Prepayment penalty: fee for paying off loan early.
- Subordination clause: lender accepts lower lien priority, allowing new loan to take first position.
- Deficiency judgment: when foreclosure proceeds are less than loan balance, lender sues borrower for difference.
- Foreclosure: judicial (through courts, borrower has redemption rights) or non-judicial (power of sale, faster).
- 1 discount point = 1% of the loan amount. Used to buy down the interest rate.
- Primary market: where loans are originated. Secondary market: where loans are bought and sold.
- Fannie Mae (FNMA) and Freddie Mac (FHLMC): buy conventional loans in secondary market.
- Ginnie Mae (GNMA): government agency guaranteeing FHA and VA loan securities.
- RESPA: prohibits kickbacks. Loan Estimate within 3 business days. Closing Disclosure 3 business days before closing.
- TILA (Regulation Z): requires disclosure of APR and total cost of credit.
- TRID: combined TILA-RESPA rule. Loan Estimate replaced GFE. Closing Disclosure replaced HUD-1.
- Right of rescission: 3 business days to cancel certain refinances on primary residence. Does NOT apply to purchase loans.
- APR: true cost of borrowing including rate plus fees. Always higher than stated interest rate.
 
APPRAISAL AND VALUE:
- Market Value: most probable price a willing buyer and seller agree on in an arm's-length transaction with no pressure.
- THREE APPROACHES TO VALUE:
1. Sales Comparison: compares to recent comparable sales. Most reliable for single-family residential. Based on principle of substitution.
2. Cost Approach: Replacement Cost minus Depreciation plus Land Value. Best for new construction and special-use properties. Land is never depreciated.
3. Income Approach: Value = NOI divided by Cap Rate. Best for income-producing investment properties.
- Depreciation types: Physical deterioration (wear and tear), Functional obsolescence (outdated features, can be curable or incurable), External/Economic obsolescence (outside forces, ALWAYS incurable).
- Highest and Best Use: legally permissible, physically possible, financially feasible use that produces MAXIMUM value.
- Principle of Substitution: buyer pays no more than cost of equally desirable substitute. Foundation of Sales Comparison.
- Principle of Contribution: value of component equals what it adds to the whole, not what it costs.
- Principle of Anticipation: value based on present worth of future benefits.
- Principle of Conformity: value maximized when property conforms to neighborhood character.
- Progression: lower-value property benefits from proximity to higher-value properties.
- Regression: higher-value property pulled down by proximity to lower-value properties.
- Plottage/Assemblage: combining adjacent parcels increases total value.
- CMA: prepared by a real estate agent (not an appraiser) to estimate listing price. Not a formal appraisal.
- USPAP: ethical and performance standards for licensed appraisers.
- Reconciliation: appraiser weighs results of all three approaches and arrives at final value estimate.
 
TRANSFER OF TITLE:
- Essential deed elements: competent grantor, identifiable grantee, consideration, legal description, words of conveyance, grantor's signature. Delivery and acceptance required.
- Recording provides constructive notice. Deed does NOT need to be recorded to be valid between parties.
- General Warranty Deed: warrants title against ALL defects even before grantor's ownership. Strongest protection.
- Special Warranty Deed: warrants only against defects during grantor's ownership.
- Bargain and Sale Deed: implies grantor has title but no explicit warranties.
- Quitclaim Deed: conveys only whatever interest grantor has. No warranties. Used to clear title defects.
- Sheriff's/Trustee's Deed: used in court-ordered or foreclosure sales. Little or no warranty.
- Chain of title: chronological record of all recorded documents affecting a property.
- Cloud on title: any defect that may impair validity of title. Must be cleared before a clean sale.
- Title insurance: owner's policy protects buyer; lender's policy protects mortgage holder.
- Adverse possession: open, notorious, hostile, actual, continuous possession for statutory period.
- Eminent domain: government takes property for public use and must pay just compensation. Process = condemnation.
- Inverse condemnation: government action reduces value without formal taking. Owner sues for compensation.
- Escheat: property reverts to state if owner dies without will or heirs.
- 1031 Exchange: defers capital gains taxes when investment property swapped for like-kind. Identify in 45 days, close in 180 days.
- Capital gains exclusion: primary residence up to $250,000 single or $500,000 married if lived there 2 of last 5 years.
 
LAND USE AND GOVERNMENT CONTROLS:
- Police power: government regulates land use for public health, safety, welfare. No compensation owed.
- Eminent domain: takes property for public use with just compensation.
- Zoning types: Residential, Commercial, Industrial, Agricultural.
- Nonconforming use: legally existed before zoning; allowed to continue but cannot be expanded.
- Variance: exception to zoning for undue hardship unique to that property. Does not change zoning.
- Special use permit: allows specific use not normally permitted in zone, subject to conditions.
- Spot zoning: rezoning single parcel inconsistently with surrounding area. Generally illegal.
- Buffer zone: transitional area separating incompatible land uses.
- Certificate of Occupancy (CO): issued after building passes final inspection. Authorizes occupancy.
- CERCLA (Superfund): current AND past owners liable for hazardous waste cleanup. Liability is strict, joint, and several.
- Lead paint: must disclose known hazards in homes built before 1978. Buyer has 10 days to test.
- Radon: naturally occurring radioactive gas. Tested with inexpensive kits.
- Ad valorem tax: based on assessed value. Assessed Value times Tax Rate = Annual Tax. 1 mill = $1 per $1,000.
- Special assessment: charged to properties that directly benefit from a specific public improvement.
 
LEASES AND PROPERTY MANAGEMENT:
- Gross lease: tenant pays fixed rent; landlord pays all operating expenses.
- Net lease: tenant pays base rent plus expenses. NNN = taxes, insurance, and maintenance.
- Percentage lease: tenant pays base rent plus percentage of gross sales. Common in retail.
- Ground lease: long-term lease of land only. Improvements revert to landowner at lease end.
- Constructive eviction: landlord's failure to maintain habitable conditions forces tenant to vacate.
- Periodic tenancy: automatically renews each period until one party gives proper notice.
- Tenancy at sufferance: tenant remains after lease expires without landlord's permission.
- Gross income: all potential rental income if 100% occupied.
- Effective gross income: gross income minus vacancy and credit losses.
- NOI = Effective Gross Income minus Operating Expenses. Excludes mortgage payments and depreciation.
- Operating expenses include: taxes, insurance, management fees, repairs, maintenance. NOT mortgage or depreciation.
- Security deposit: held in escrow; returned within statutory period minus lawful deductions.
- Lease assignment: tenant transfers all remaining lease rights. Original tenant may remain liable.
- Sublease: tenant transfers some but not all lease rights. Original tenant remains liable to landlord.
 
LICENSE LAW:
- Broker: can operate independently, hold client funds, supervise salespersons.
- Salesperson: must work under a licensed broker. Cannot operate independently.
- License required for: listing, selling, leasing, auctioning, property management for others for compensation.
- No license needed: owners selling own property, attorneys in legal capacity, court-appointed fiduciaries.
- E&O insurance: professional liability covering mistakes, negligence, failure to disclose. Required in many states.
- Commingling: mixing client funds with broker's personal funds. License can be revoked.
- Conversion: using client funds for personal use. Criminal fraud charges possible.
- Sherman Antitrust Act: prohibits commission rate-fixing, market allocation, group boycotts. Federal crimes.
- RESPA kickback prohibition: no fees for referrals between settlement service providers.
- Secret profit: agent receives undisclosed compensation. Violates loyalty and disclosure duties.
- Subagency: cooperating broker acts as seller's agent even when working with buyer.
- Designated agency: one agent represents seller, different agent represents buyer within same firm.
 
MATH FORMULAS AND KEY NUMBERS:
- Commission = Sale Price times Commission Rate
- LTV = Loan Amount divided by Appraised Value
- Down Payment = Purchase Price times Down Payment Percentage
- Equity = Market Value minus Outstanding Loan Balance
- Cap Rate = NOI divided by Property Value
- Property Value (Income Approach) = NOI divided by Cap Rate
- NOI = Effective Gross Income minus Operating Expenses
- GRM = Property Price divided by Monthly Gross Rent
- Monthly Interest = (Loan Balance times Annual Rate) divided by 12
- Depreciation Residential = Building Value divided by 27.5 years
- Depreciation Commercial = Building Value divided by 39 years
- Property Tax = Assessed Value times Tax Rate
- Proration Daily Rate = Annual Amount divided by 365
- Break-Even Ratio = (Expenses plus Debt Service) divided by Gross Income
- KEY NUMBERS: 1 acre = 43,560 sq ft; 1 section = 640 acres; 1 township = 36 sections; residential depreciation = 27.5 years; commercial = 39 years; FHA minimum down = 3.5%; Loan Estimate = 3 business days; Closing Disclosure = 3 business days before closing; 1031 identification = 45 days; 1031 closing = 180 days; HUD complaint = 1 year; federal court Fair Housing = 2 years; EPA radon action level = 4 pCi/L; lead paint disclosure homes built before 1978; Interstate Land Sales = 100+ lots; E-SIGN and UETA govern electronic signatures.
MANDATED DISCLOSURES:
- Seller's Disclosure: a written statement the seller provides to the buyer detailing the known condition of the property. Sellers must disclose material facts — meaning anything that could affect the value or desirability of the property in the eyes of a reasonable buyer.
- Material Fact: any fact a reasonable buyer would consider important when deciding whether to purchase and at what price. Agents have a duty to disclose material facts even if the seller does not.
- Latent Defect: a hidden defect not visible during a normal inspection that the seller knows about. Must be disclosed. Example: a basement that floods seasonally but appears dry at the time of showing.
- Patent Defect: a defect visible to the naked eye during a normal walkthrough. No special duty to disclose what any buyer can plainly see.
- Agent's Inspection Duty: in most states, the listing agent must conduct a reasonable visual inspection of the property and disclose findings. Agents cannot simply repeat the seller's claims without reasonable verification.
- Red Flag Rule: when something looks wrong, smells wrong, or seems inconsistent, an agent has a duty to investigate further rather than ignore it. Failing to investigate a red flag can create liability.
- Environmental Hazards Requiring Disclosure: lead-based paint (mandatory federal disclosure for homes built before 1978), radon, asbestos, mold, underground storage tanks, formaldehyde, urea-formaldehyde foam insulation, high-voltage power lines, contaminated soil or groundwater, nearby waste disposal sites.
- Lead-Based Paint Disclosure: federal law requires sellers of homes built before 1978 to provide a lead-based paint disclosure form and give buyers a 10-day period to conduct an inspection. Agents must ensure this form is completed.
- Stigmatized Property: a property that has a psychological impact on buyers due to past events — such as a death, crime, or alleged haunting — but no physical defect. Disclosure rules for stigmatized properties vary by state.
- Megan's Law Disclosure: some states require agents to notify buyers that they can check sex offender registries. Agents are not required to know or disclose the specific locations of registered offenders.
- Psychologically Impacted Property: property where a death, crime, or other event may affect buyer willingness to purchase. Agents should know their state's specific rules — some states prohibit asking about deaths in a home.
- Property Condition vs. Agent's Opinion: agents must distinguish between verifiable facts (which must be disclosed) and opinions or puffery (which are not binding). Saying a neighborhood is "great" is puffery. Saying there are no leaks when there are is fraud.
- Misrepresentation Types: (1) Innocent misrepresentation — false statement made without knowledge it was false; (2) Negligent misrepresentation — false statement made without reasonable investigation; (3) Fraudulent misrepresentation — intentional false statement to induce a buyer. Fraud is the most serious and can result in rescission, damages, and license loss.
- Structural Disclosures: sellers and agents must disclose known issues with roof, foundation, walls, windows, doors, gutters, and downspouts. A leaking roof that was patched must be disclosed even if it appears dry now.
- Systems Disclosures: known defects in plumbing, electrical, HVAC, and appliances that are fixtures must be disclosed.
- Zoning and Planning Disclosures: if the agent knows a property is in a flood zone, flight path, or subject to a special assessment, this must be disclosed even if the buyer does not ask.
- As-Is Sale: selling a property "as-is" does not eliminate the duty to disclose known material defects. It only means the seller will not make repairs. Buyers retain the right to inspect.
- Warranty Types: (1) Express warranty — a specific written or verbal promise about the property; (2) Implied warranty — automatically assumed, such as new construction being habitable; (3) Home warranty — a service contract covering repair or replacement of major systems and appliances.
 
TRANSFER OF TITLE — EXPANDED:
- Title Insurance: a policy protecting against losses from defects in the title that existed before the policy was issued. Two types: (1) Owner's policy — protects the buyer; (2) Lender's (mortgagee's) policy — protects the lender. Only the lender's policy is typically required; the owner's policy is optional but strongly recommended.
- Title Search: a review of public records to trace the chain of ownership and identify any claims, liens, or encumbrances on a property. Conducted before closing.
- Title Abstract: a condensed history of all recorded documents affecting the title to a specific parcel. Prepared by a title company or attorney.
- Chain of Title: the complete sequence of historical transfers of ownership from the original grant to the present owner. A break in the chain creates a cloud on title.
- Cloud on Title: any claim, lien, or encumbrance that casts doubt on the owner's ability to convey clear title. Must be resolved before a clean transfer.
- Quiet Title Action: a court proceeding used to resolve competing claims to a property and establish clear ownership.
- Deed Requirements — Essential Elements: (1) grantor with legal capacity; (2) grantee identified with reasonable certainty; (3) words of conveyance (granting clause); (4) legal description of the property; (5) consideration (can be nominal — "$1 and other good and valuable consideration"); (6) signature of the grantor; (7) delivery and acceptance. Recording is NOT required for a deed to be valid between parties, but is required to protect against third-party claims.
- General Warranty Deed: the grantor warrants the title against all defects, even those arising before the grantor owned it. Provides the broadest protection to the buyer. Most commonly used in residential sales.
- Special Warranty Deed: the grantor warrants the title only against defects that arose during their period of ownership — not before. Commonly used by corporations, estates, and foreclosures.
- Quitclaim Deed: conveys only whatever interest the grantor has, with no warranties at all. Used to clear title defects, transfer between family members, or correct errors. Provides no protection to the buyer.
- Bargain and Sale Deed: implies the grantor holds title but makes no warranty against encumbrances. Used in some states for tax sales and foreclosures.
- When Title Passes: title passes upon delivery and acceptance of the deed, not at signing or recording.
- Recording: filing documents with the county recorder to give constructive notice to the world of ownership or encumbrances. Recording protects against subsequent claims by third parties. First to record generally prevails.
- Constructive Notice: notice given to the world through recording — the public is legally assumed to know what has been recorded even if they did not actually check.
- Actual Notice: direct knowledge of a fact — the buyer was actually told or discovered the information personally.
- Intestate Succession: dying without a valid will. Property passes to heirs according to the state's laws of descent and distribution.
- Testate: dying with a valid will. The will directs how property is distributed.
- Probate: the legal process of validating a will and supervising distribution of the deceased's estate.
- Foreclosure: the legal process by which a lender forces the sale of a property when the borrower defaults. Two types: (1) Judicial foreclosure — goes through court; (2) Non-judicial foreclosure (power of sale) — lender forecloses without court involvement per the deed of trust. After foreclosure there may be a statutory redemption period during which the borrower can reclaim the property by paying what is owed.
- Short Sale: the lender agrees to accept less than the full loan balance when the property is sold. Requires lender approval. The difference may be forgiven or the borrower may still owe it (deficiency) depending on the agreement and state law.
- HUD-1 Settlement Statement: the closing disclosure form used in transactions involving federally related mortgage loans. Lists all charges and credits to the buyer and seller. Now largely replaced by the Closing Disclosure form under TRID for most transactions.
- TRID (TILA-RESPA Integrated Disclosure): rules requiring lenders to provide a Loan Estimate within 3 business days of application and a Closing Disclosure at least 3 business days before closing. Designed to help buyers understand their loan costs.
- Proration at Closing: dividing periodic expenses (property taxes, HOA dues, rent, insurance) between buyer and seller based on the closing date. The party who owes the amount pays their proportional share.
- Transfer Tax (Conveyance Tax): a tax imposed by state or local governments on the transfer of real property. Sometimes called revenue stamps or deed stamps. The rate and who pays varies by location.
- Tax-Free Exchange (1031 Exchange): allows an investor to defer capital gains taxes by reinvesting proceeds from a sold investment property into a like-kind replacement property. Must identify replacement within 45 days, close within 180 days. Primary residences do not qualify.
 
ANTITRUST LAWS IN REAL ESTATE:
- Sherman Antitrust Act: federal law prohibiting agreements that restrain trade or create monopolies. Real estate practitioners must avoid any agreements with competitors that limit competition.
- Price Fixing: an illegal agreement between competing brokers to set commission rates at a fixed level. Each brokerage must independently set its own fees. Never discuss commission rates with competing brokers.
- Market Allocation: an illegal agreement between competing brokers to divide up geographic areas or types of clients. Example: agreeing that one firm handles the north side of town while another handles the south.
- Group Boycott (Concerted Refusal to Deal): competing brokers agreeing to refuse to work with a specific company or individual. Illegal under antitrust law.
- Tie-In Arrangement: requiring a buyer to purchase one product or service as a condition of purchasing another. Example: requiring a buyer to use a specific title company as a condition of the sale.
- Per Se Violations: certain antitrust violations are automatically illegal regardless of their effect — price fixing, market allocation, and group boycotts are per se violations.
- Safe Practices: agents should never discuss commission rates with agents from competing firms, never agree to avoid certain neighborhoods or clients, and always set fees through their own broker independently.
 
ENVIRONMENTAL HAZARDS — EXPANDED:
- Lead-Based Paint: used in homes built before 1978. Hazardous when it deteriorates or is disturbed (chipping, sanding). Federal law requires disclosure and a 10-day inspection period for pre-1978 homes.
- Asbestos: a fibrous mineral used in insulation, floor tiles, and roofing before the 1980s. Dangerous when disturbed (friable). Non-friable asbestos that is in good condition is often left in place. Removal must be done by a licensed abatement contractor.
- Radon: a colorless, odorless radioactive gas that forms from the natural decay of uranium in soil. Seeps into buildings through foundation cracks. The EPA action level is 4 picocuries per liter (pCi/L). Mitigated with sub-slab depressurization systems.
- Urea-Formaldehyde Foam Insulation (UFFI): used as insulation in the 1970s. Releases formaldehyde gas, which is a health hazard. Now banned for residential use.
- Underground Storage Tanks (USTs): tanks buried underground used to store petroleum or chemicals. Leaking USTs contaminate soil and groundwater. Sellers must disclose known USTs. Properties with suspected UST contamination require environmental assessment.
- Mold: a fungal growth that thrives in moisture. Can cause health issues, especially for people with respiratory conditions. Disclosure required if seller knows of mold issues. Remediation involves fixing the moisture source first.
- Electromagnetic Fields (EMFs): generated by high-voltage power lines and electrical equipment. Some buyers are concerned about health effects. Whether these must be disclosed varies by state.
- Floodplain: land that is at risk of flooding. Properties in FEMA-designated Special Flood Hazard Areas (SFHAs) require flood insurance if the buyer is obtaining a federally backed mortgage.
- Brownfield: a previously developed property potentially contaminated by industrial or commercial use. May be eligible for cleanup grants.
- Superfund (CERCLA): federal law that imposes liability for cleanup of contaminated sites on current and former owners, operators, and those who disposed of hazardous substances — even if they did not cause the contamination. Ignorance is not a defense.
- Phase I Environmental Assessment: a review of historical records and site inspection to identify potential contamination. No soil or groundwater testing. Required by lenders before many commercial loans.
 
PROPERTY MANAGEMENT AND LANDLORD/TENANT:
- Property Manager: a person or firm hired by a property owner to oversee the day-to-day operations of a rental property. Acts as an agent of the owner. Duties include leasing, rent collection, maintenance, and tenant relations.
- Management Agreement: the contract between the property owner and property manager defining the scope of services, fees, and authority of the manager.
- Gross Lease: the landlord pays all operating expenses (taxes, insurance, maintenance). The tenant pays a flat rent. Common in residential rentals.
- Net Lease: the tenant pays base rent plus some or all operating expenses. Three types: (1) Single net — tenant pays base rent plus property taxes; (2) Double net (NN) — tenant pays base rent plus taxes and insurance; (3) Triple net (NNN) — tenant pays base rent plus taxes, insurance, and maintenance. Common in commercial real estate.
- Percentage Lease: the tenant pays a base rent plus a percentage of their gross sales above a certain threshold. Common in retail.
- Security Deposit: money collected from a tenant at the start of tenancy held as protection against damage or unpaid rent. Most states limit the amount and require return within a set number of days after move-out, with an itemized list of any deductions.
- Eviction: the legal process of removing a tenant from a property. Must follow state-mandated procedures. Self-help eviction (changing locks, removing belongings) is illegal in most states.
- Constructive Eviction: when a landlord's failure to maintain habitable conditions forces a tenant to leave. The tenant may be released from lease obligations if conditions are severe enough.
- Warranty of Habitability: an implied warranty in most states that the landlord will maintain the rental unit in a safe, livable condition — functioning heat, plumbing, weatherproofing, and freedom from pests.
- Lease Termination: a lease can be terminated by expiration, mutual agreement, breach, abandonment, condemnation, or constructive eviction. A lease for a specific term does not require notice to end — it simply expires.
- Month-to-Month Tenancy: a periodic tenancy that renews each month. Either party can terminate with proper notice (often 30 days).
- Holdover Tenant: a tenant who remains in possession after the lease expires without the landlord's consent. The landlord can treat this as a trespass (and pursue eviction) or accept rent and create a new periodic tenancy.
- Americans with Disabilities Act (ADA): requires reasonable accommodations for people with disabilities in places of public accommodation and commercial buildings. Applies to commercial property, not private residences, though Fair Housing Act covers reasonable modifications in residential.
- Capitalization Rate (Cap Rate): Net Operating Income divided by Property Value. Used to evaluate income-producing properties. A higher cap rate suggests higher return but also higher risk.
- Net Operating Income (NOI): Effective Gross Income minus Operating Expenses. Does NOT include mortgage payments (debt service).
- Gross Rent Multiplier (GRM): Sales Price divided by Gross Monthly Rent. A quick way to compare rental properties. Lower GRM = better value relative to rent.
 
MORTGAGE FRAUD AND PREDATORY LENDING:
- Mortgage Fraud: any intentional misrepresentation, misstatement, or omission on a mortgage application or related documents. Two main types: (1) Fraud for housing — borrower inflates income or assets to qualify; (2) Fraud for profit — industry insiders scheme to extract money from lenders.
- Straw Buyer: a person who applies for a mortgage on behalf of someone else who could not qualify. The actual buyer stays hidden. This is mortgage fraud.
- Inflated Appraisal: when an appraiser overstates a property's value, often in coordination with a seller or lender, to allow a larger loan. This is fraud.
- Predatory Lending: abusive lending practices that take advantage of borrowers — especially elderly, low-income, or minority borrowers — through deceptive terms, excessive fees, or unsuitable loan products.
- Steering: directing buyers or borrowers toward specific loan products or neighborhoods based on race, religion, or other protected characteristics. Illegal under Fair Housing and ECOA.
- Flipping (Illegal): buying a property and quickly reselling it at an artificially inflated price using a fraudulent appraisal, often to a straw buyer with a fake mortgage. Distinguished from legal fix-and-flip investing.
- Equity Stripping: a predatory scheme where a lender extends a loan based on home equity rather than the borrower's ability to repay, knowing the borrower will default and the lender will take the home.
- Loan Flipping: a predatory practice where a lender repeatedly refinances a borrower's loan, generating fees each time but leaving the borrower with increasing debt and diminishing equity.
- Balloon Payment Risks: some predatory loans feature low initial payments followed by a large balloon payment the borrower cannot afford. Agents should make sure buyers understand the full loan terms.
- Usury: charging an interest rate above the legal maximum set by state law. Illegal.
- Agent Responsibilities: agents should encourage clients to work with reputable lenders, review loan documents carefully, and report any suspicious loan activity. Participating in a fraudulent transaction — even unknowingly — can result in license suspension.
 
TECHNOLOGY IN REAL ESTATE:
- Electronic Signatures: legally binding in real estate transactions under the Electronic Signatures in Global and National Commerce Act (E-SIGN Act) and the Uniform Electronic Transactions Act (UETA). Both parties must consent to using electronic signatures.
- MLS (Multiple Listing Service): a database used by member brokers to share property listings and offer compensation to cooperating brokers. MLS rules govern how listings must be entered, updated, and displayed.
- Internet Advertising Rules: all online advertising must comply with fair housing laws. Ads cannot use language that signals a preference for or against any protected class. Photos and descriptions must not imply discrimination.
- Social Media and Agency: posting about a listing or client on social media without authorization may violate confidentiality duties. Agents must be careful not to inadvertently create an agency relationship through online communications.
- Data Security: agents handle sensitive personal and financial information. Proper cybersecurity practices — secure passwords, encrypted email, careful document disposal — are essential to protect clients and comply with privacy laws.
- Automated Valuation Models (AVMs): computer-generated estimates of property value using public data. Not a substitute for a licensed appraisal. Agents should educate clients on the limitations of AVMs like Zillow Zestimates.
- Virtual Tours and Remote Transactions: technology allows buyers to view properties remotely and sign documents electronically. Agents must ensure all required disclosures are still provided and all signatures are properly obtained even in a fully remote transaction.
 
SUBDIVISIONS:
- Subdivision: the division of a single parcel of land into two or more lots for sale or development. Requires approval from local government through a platting process.
- Plat Map: a recorded survey showing the division of land into lots, blocks, streets, and easements. Once recorded, the plat map becomes the legal description for the individual lots.
- Dedication: the transfer of privately owned land to public use — typically streets, parks, or utilities — as part of the subdivision approval process.
- CC&Rs (Covenants, Conditions, and Restrictions): private deed restrictions that run with the land and govern how property in a subdivision can be used. Enforced by the HOA or neighboring owners, not the government.
- HOA (Homeowners Association): an organization that manages common areas and enforces CC&Rs in a planned community, condominium, or subdivision. Members pay dues. The HOA can place a lien on a property for unpaid dues.
- Public Offering Statement: a required disclosure document given to buyers of property in a new subdivision before purchase. Contains information about the developer, the property, any restrictions, and the financial condition of the HOA.
- Interstate Land Sales Full Disclosure Act: federal law requiring developers selling lots in subdivisions of 100 or more lots across state lines to register with the Consumer Financial Protection Bureau (CFPB) and provide buyers with a Property Report at least 3 days before signing.
 
COMMERCIAL, INDUSTRIAL AND INCOME PROPERTY:
- Commercial Real Estate Categories: office, retail, industrial, multifamily (5+ units), hospitality, and special purpose.
- Office Property Classes: Class A (best quality, highest rents, newest or well-maintained), Class B (average quality, functional but not prestigious), Class C (older, lower rent, in need of renovation).
- Industrial Property Types: heavy manufacturing, light assembly, flex space (combination of office and warehouse), warehouse/distribution.
- Retail Property Types: strip mall, regional mall, power center (anchored by big-box stores), neighborhood center, lifestyle center.
- Income Approach to Value: used primarily for income-producing properties. Value = Net Operating Income divided by Cap Rate.
- Operating Expense Ratio: Operating Expenses divided by Effective Gross Income. A lower ratio indicates more efficient management.
- Vacancy and Credit Loss: an allowance subtracted from potential gross income to account for empty units and uncollected rent. Typically expressed as a percentage.
- Potential Gross Income (PGI): the total income a property would generate if 100% occupied at market rent.
- Effective Gross Income (EGI): PGI minus vacancy and credit loss allowance.
- Cash-on-Cash Return: annual pre-tax cash flow divided by total cash invested. Measures the return on actual dollars invested, not total value.
- Leverage: using borrowed money to increase potential return on investment. Positive leverage means the return on the property exceeds the cost of borrowing. Negative leverage means the opposite.
`
 
const FLASHCARDS = [
{ id: 1, category: "Ownership", term: "Fee Simple Absolute", definition: "The most complete form of property ownership — full control with no conditions or time limits. The owner can sell, lease, mortgage, or leave it to heirs without any restrictions." },
{ id: 2, category: "Ownership", term: "Fee Simple Defeasible", definition: "Ownership that can automatically end if a specified condition is violated. Example: land granted 'as long as it is used as a park' — use it for anything else and ownership ends." },
{ id: 3, category: "Ownership", term: "Life Estate", definition: "Ownership that lasts only for the duration of someone's life. The life tenant can use and profit from the property but cannot permanently destroy or waste it. A remainderman inherits after." },
{ id: 4, category: "Ownership", term: "Joint Tenancy", definition: "Co-ownership with right of survivorship. Requires 4 unities: Time, Title, Interest, Possession (TTIP). When one owner dies, their share passes automatically to surviving owners, skipping probate." },
{ id: 5, category: "Ownership", term: "Tenancy in Common", definition: "Co-ownership without survivorship rights. Each owner holds an undivided interest and can independently sell, mortgage, or will their share to anyone. Unequal ownership percentages are allowed." },
{ id: 6, category: "Ownership", term: "Tenancy by the Entirety", definition: "A form of co-ownership available only to married couples. Neither spouse can sell, transfer, or encumber the property without the other's full consent." },
{ id: 7, category: "Ownership", term: "Community Property", definition: "In 9 states, most assets acquired during marriage are owned equally (50/50) by both spouses, regardless of whose name is on the title or who earned the money." },
{ id: 8, category: "Ownership", term: "Severalty", definition: "Ownership by a single individual with no co-owners. The owner has complete, undivided control over the property." },
{ id: 9, category: "Ownership", term: "Condominium", definition: "The owner holds fee simple title to their individual unit AND shares an undivided interest in all common areas such as lobbies, hallways, grounds, and amenities." },
{ id: 10, category: "Ownership", term: "Co-op (Cooperative)", definition: "Residents purchase shares in the corporation that owns the entire building. There is no individual deed — each owner receives a proprietary lease for their specific unit." },
{ id: 11, category: "Ownership", term: "MARIA Test", definition: "Determines whether personal property has legally become a fixture (real property): Method of attachment, Adaptability to the property, Relationship of the parties, Intention, Agreement." },
{ id: 12, category: "Ownership", term: "Riparian Rights", definition: "The right of a landowner whose property borders a river or stream to use the flowing water. The owner may use the water but cannot unreasonably interfere with other riparian owners." },
{ id: 13, category: "Ownership", term: "Littoral Rights", definition: "The rights of a landowner whose property borders a lake, sea, or ocean. Similar to riparian rights but applies to non-flowing bodies of water." },
{ id: 14, category: "Ownership", term: "Air Rights", definition: "The property owner's legal right to use and control the space above their land. Air rights can be sold or leased separately from surface rights." },
{ id: 15, category: "Ownership", term: "Mineral Rights", definition: "The ownership right to underground resources such as oil, gas, coal, and minerals. Mineral rights can be severed from surface rights and sold or leased separately." },
{ id: 16, category: "Encumbrances", term: "Easement Appurtenant", definition: "An easement that benefits one parcel (dominant tenement) at the expense of an adjacent parcel (servient tenement). It runs with the land and transfers automatically when either property is sold." },
{ id: 17, category: "Encumbrances", term: "Easement in Gross", definition: "An easement that benefits a specific person or company rather than adjacent land. A utility company's power line easement is a classic example. It does NOT run with the land." },
{ id: 18, category: "Encumbrances", term: "Easement by Prescription", definition: "An easement acquired by using someone else's land openly, notoriously, hostilely, and continuously for the statutory period — similar to adverse possession but for use rights only." },
{ id: 19, category: "Encumbrances", term: "Mechanic's Lien", definition: "A specific, involuntary lien filed against a property by a contractor, subcontractor, or supplier who provided labor or materials but was not paid. Must be filed within a statutory deadline." },
{ id: 20, category: "Encumbrances", term: "Lis Pendens", definition: "A recorded notice warning the public that a lawsuit is currently pending that may affect title to the property. It puts all future buyers on constructive notice of the dispute." },
{ id: 21, category: "Encumbrances", term: "Encroachment", definition: "When a structure, fence, or improvement physically extends from one property onto a neighboring property without the neighbor's permission." },
{ id: 22, category: "Encumbrances", term: "Deed Restriction", definition: "A private limitation on land use that is recorded in the deed or subdivision plat. Also called a restrictive covenant. Runs with the land and binds future owners." },
{ id: 23, category: "Deeds & Title", term: "General Warranty Deed", definition: "Provides the strongest protection for the buyer. The grantor guarantees title against ALL defects and claims — even those that arose before the grantor ever owned the property." },
{ id: 24, category: "Deeds & Title", term: "Special Warranty Deed", definition: "The grantor guarantees title only against defects that arose during their ownership. It does not cover any claims from previous owners." },
{ id: 25, category: "Deeds & Title", term: "Quitclaim Deed", definition: "Transfers only whatever interest the grantor currently holds — which may be nothing at all. Contains zero warranties. Commonly used to clear title defects or transfer between family members." },
{ id: 26, category: "Deeds & Title", term: "Bargain and Sale Deed", definition: "Implies the grantor holds title and has the right to convey, but makes no explicit promises or warranties about the condition of the title." },
{ id: 27, category: "Deeds & Title", term: "Adverse Possession", definition: "Gaining legal title to land by occupying it in a way that is open, notorious, hostile, actual, and continuous for the state's statutory period. Some states require payment of property taxes." },
{ id: 28, category: "Deeds & Title", term: "Constructive Notice", definition: "The legal presumption that everyone is aware of any document properly recorded in the public record — even if they have never personally seen it." },
{ id: 29, category: "Deeds & Title", term: "Title Insurance", definition: "Protection against losses from hidden title defects. An owner's policy protects the buyer; a lender's policy (required by most lenders) protects the mortgage holder." },
{ id: 30, category: "Deeds & Title", term: "1031 Exchange", definition: "An IRS provision allowing an investor to defer capital gains taxes by swapping one investment property for a like-kind replacement. Must identify the new property in 45 days and close within 180 days." },
{ id: 31, category: "Deeds & Title", term: "Escheat", definition: "The process by which property reverts to the state when the owner dies without a valid will and has no identifiable heirs. The state becomes the owner of last resort." },
{ id: 32, category: "Deeds & Title", term: "Cloud on Title", definition: "Any document, claim, lien, or defect in the public record that may impair or cast doubt on the validity of a property's title. Must be resolved before the property can be cleanly sold." },
{ id: 33, category: "Agency", term: "Fiduciary Duty (OLD CAR)", definition: "The duties owed by an agent to their client: Obedience, Loyalty, Disclosure, Confidentiality (survives after the agency ends), Accounting, and Reasonable Care." },
{ id: 34, category: "Agency", term: "Dual Agency", definition: "One agent or brokerage represents both the buyer and the seller in the same transaction. Legal in most states but requires informed written consent from both parties." },
{ id: 35, category: "Agency", term: "Exclusive Right to Sell", definition: "The most common listing agreement. The broker earns a commission no matter who finds the buyer — the listing broker, another agent, or even the seller themselves." },
{ id: 36, category: "Agency", term: "Exclusive Agency Listing", definition: "Only one broker is authorized, but the owner retains the right to sell the property themselves without owing a commission. The broker earns a commission only if they produce the buyer." },
{ id: 37, category: "Agency", term: "Open Listing", definition: "The owner may list with several brokers simultaneously. Only the broker who personally produces the ready, willing, and able buyer earns a commission. It is a unilateral contract." },
{ id: 38, category: "Agency", term: "Net Listing", definition: "The broker's compensation equals everything received above the seller's agreed minimum net price. Legal in some states but discouraged because of potential conflicts of interest." },
{ id: 39, category: "Agency", term: "Blockbusting", definition: "The illegal act of inducing property owners to sell by making representations that members of a protected class are moving into the neighborhood. Also called panic peddling." },
{ id: 40, category: "Agency", term: "Steering", definition: "Illegally directing prospective buyers or renters toward or away from certain neighborhoods based on a protected characteristic such as race, religion, or national origin." },
{ id: 41, category: "Agency", term: "Commingling", definition: "The illegal practice of mixing a client's funds (earnest money, security deposits) with the broker's personal or business operating account. A serious license law violation." },
{ id: 42, category: "Agency", term: "Puffing", definition: "Exaggerated, non-factual, subjective statements about a property. Not illegal, but must not cross into making false statements of verifiable fact." },
{ id: 43, category: "Contracts", term: "Statute of Frauds", definition: "A law requiring certain contracts — including real estate purchase agreements and leases longer than one year — to be in writing to be enforceable in a court of law." },
{ id: 44, category: "Contracts", term: "Specific Performance", definition: "A court remedy forcing a breaching party to complete a real estate transaction as agreed. Available in real estate because every parcel of land is legally considered unique." },
{ id: 45, category: "Contracts", term: "Contingency", definition: "A condition written into a contract that must be satisfied before the contract becomes fully binding. Common types: financing contingency, home inspection contingency, appraisal contingency." },
{ id: 46, category: "Contracts", term: "Novation", definition: "Replacing one contracting party with a new party, completely releasing the original party from all obligations. All parties must agree to the substitution." },
{ id: 47, category: "Contracts", term: "Time is of the Essence", definition: "A contract clause making all specified deadlines strictly enforceable. Missing a deadline — even by one day — can legally constitute a breach of contract." },
{ id: 48, category: "Contracts", term: "Earnest Money", definition: "A good-faith deposit made by the buyer to demonstrate serious intent to purchase. Held in escrow. If the buyer defaults without a valid reason, the seller may keep it as liquidated damages." },
{ id: 49, category: "Contracts", term: "Option Contract", definition: "A unilateral contract giving the buyer the exclusive right — but NOT the obligation — to purchase a property at an agreed price within a set time period. The seller is bound; the buyer can choose not to exercise it." },
{ id: 50, category: "Contracts", term: "Right of First Refusal", definition: "Gives a party the right to match any offer the owner receives before accepting it from someone else. It is not a right to buy — only a right to match terms if the owner decides to sell." },
{ id: 51, category: "Contracts", term: "Contract for Deed", definition: "Also called a land contract or installment sale. The buyer takes possession and makes payments directly to the seller, but the seller retains legal title until the full purchase price is paid." },
{ id: 52, category: "Contracts", term: "Liquidated Damages", definition: "A pre-agreed amount of compensation specified in the contract that one party will pay if they breach. In real estate, the earnest money deposit is most commonly identified as liquidated damages." },
{ id: 53, category: "Financing", term: "Amortization", definition: "The gradual repayment of a mortgage through scheduled regular payments. In early years, most of each payment covers interest. Over time, more of each payment goes toward reducing the principal." },
{ id: 54, category: "Financing", term: "Loan-to-Value (LTV)", definition: "A ratio comparing the loan amount to the appraised property value. LTV = Loan divided by Value. Lenders use it to assess risk — higher LTV means higher risk to the lender." },
{ id: 55, category: "Financing", term: "PMI", definition: "Private Mortgage Insurance — protects the LENDER (not the borrower) against default. Required on conventional loans when the down payment is less than 20% (LTV over 80%)." },
{ id: 56, category: "Financing", term: "FHA Loan", definition: "A government-backed loan insured by the Federal Housing Administration. Requires as little as 3.5% down but mandates a Mortgage Insurance Premium (MIP) for the life of the loan in most cases." },
{ id: 57, category: "Financing", term: "VA Loan", definition: "A loan guaranteed by the Department of Veterans Affairs for eligible service members and veterans. No down payment required, no PMI, but a one-time funding fee is charged at closing." },
{ id: 58, category: "Financing", term: "Acceleration Clause", definition: "A mortgage provision giving the lender the right to demand the entire remaining loan balance be paid immediately if the borrower defaults on their payments." },
{ id: 59, category: "Financing", term: "Due-on-Sale Clause", definition: "Requires the full mortgage balance to be paid off when the property is sold or transferred. Prevents the buyer from assuming the seller's existing loan without lender approval." },
{ id: 60, category: "Financing", term: "Discount Points", definition: "Prepaid interest paid at closing to lower the mortgage interest rate. One point = 1% of the loan amount. More points paid upfront results in a lower monthly payment over the loan's life." },
{ id: 61, category: "Financing", term: "Secondary Mortgage Market", definition: "Where already-originated loans are bought and sold. Fannie Mae and Freddie Mac purchase conventional loans; Ginnie Mae backs FHA and VA loan securities. This frees up capital for new loans." },
{ id: 62, category: "Financing", term: "RESPA", definition: "The Real Estate Settlement Procedures Act. Prohibits kickbacks and unearned fees. Requires a Loan Estimate within 3 business days of application and a Closing Disclosure 3 days before settlement." },
{ id: 63, category: "Financing", term: "Deed of Trust", definition: "A security instrument used in many states instead of a mortgage. Involves three parties: the trustor (borrower), the beneficiary (lender), and a neutral trustee who holds legal title until the loan is repaid." },
{ id: 64, category: "Financing", term: "Negative Amortization", definition: "Occurs when monthly loan payments are less than the interest accruing on the balance. The unpaid interest is added to the principal, causing the loan balance to grow over time despite making payments." },
{ id: 65, category: "Financing", term: "Balloon Mortgage", definition: "A loan with regular payments that do not fully pay off the balance, ending in one large lump-sum payment due at a set date. Often used by borrowers expecting to refinance or sell before the balloon is due." },
{ id: 66, category: "Financing", term: "Deficiency Judgment", definition: "A court judgment against a borrower for the remaining loan balance after a foreclosure sale does not generate enough proceeds to fully pay off the mortgage." },
{ id: 67, category: "Financing", term: "Subordination Clause", definition: "A mortgage provision where a lender agrees to accept a lower lien priority position, allowing a new loan to take first position. Commonly used when refinancing or adding construction financing." },
{ id: 68, category: "Appraisal", term: "Sales Comparison Approach", definition: "Estimates value by comparing the subject property to recently sold comparable properties nearby. Adjustments are made for differences. Most reliable method for single-family residential homes." },
{ id: 69, category: "Appraisal", term: "Cost Approach", definition: "Estimates value as: Replacement Cost of Improvements minus Depreciation plus Land Value. Best for new construction and special-use properties like schools and churches that rarely sell." },
{ id: 70, category: "Appraisal", term: "Income Approach", definition: "Converts a property's income into a value estimate using: Value = NOI divided by Cap Rate. The most appropriate method for income-producing investment properties like apartment buildings." },
{ id: 71, category: "Appraisal", term: "Functional Obsolescence", definition: "A loss in property value from outdated or inadequate design features within the property — such as a 4-bedroom home with only one bathroom. Can be curable or incurable." },
{ id: 72, category: "Appraisal", term: "External Obsolescence", definition: "A loss in value caused by factors entirely outside the property itself — such as a new highway nearby or a declining neighborhood. It is always considered incurable." },
{ id: 73, category: "Appraisal", term: "Highest and Best Use", definition: "The use of a property that is legally permissible, physically possible, financially feasible, AND produces the maximum property value. Appraisers determine this before valuing any property." },
{ id: 74, category: "Appraisal", term: "Principle of Substitution", definition: "A foundational appraisal principle stating that a buyer will pay no more for a property than the cost of acquiring an equally desirable substitute. This principle underlies the Sales Comparison Approach." },
{ id: 75, category: "Appraisal", term: "Principle of Contribution", definition: "The value of any component of a property is measured by how much it adds to the overall property value — not by its cost. A $50,000 pool may only add $20,000 in value to a home." },
{ id: 76, category: "Appraisal", term: "Plottage and Assemblage", definition: "Assemblage is combining two or more adjacent parcels into one. Plottage is the increased value that results — the combined parcel is worth more than the sum of the individual lots." },
{ id: 77, category: "Fair Housing", term: "7 Protected Classes", definition: "The Fair Housing Act prohibits discrimination based on: Race, Color, Religion, National Origin, Sex, Familial Status, and Disability. Familial Status and Disability were added by the 1988 amendment." },
{ id: 78, category: "Fair Housing", term: "Mrs. Murphy Exemption", definition: "An exemption from the Fair Housing Act for owners of buildings with 4 or fewer units who live in one of those units. The owner may personally choose tenants — but CANNOT use a broker or place discriminatory advertising." },
{ id: 79, category: "Fair Housing", term: "Disparate Impact", definition: "A legal theory where a facially neutral policy is considered discriminatory if it disproportionately and negatively affects members of a protected class — even without any discriminatory intent." },
{ id: 80, category: "Fair Housing", term: "ECOA", definition: "The Equal Credit Opportunity Act. Prohibits lenders from discriminating in credit decisions based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance. Implemented by Regulation B." },
{ id: 81, category: "Fair Housing", term: "ADA", definition: "The Americans with Disabilities Act. Requires commercial properties and places of public accommodation to provide accessible facilities and remove barriers. Does not generally apply to private residential housing." },
{ id: 82, category: "Land Use", term: "Police Power", definition: "The government's authority to regulate private property to protect public health, safety, and welfare. The legal basis for zoning, building codes, and environmental laws. No compensation is owed to the owner." },
{ id: 83, category: "Land Use", term: "Eminent Domain", definition: "The constitutional right of government to take private property for public use. The owner must receive just compensation at fair market value. The legal process of taking is called condemnation." },
{ id: 84, category: "Land Use", term: "Inverse Condemnation", definition: "When a government action reduces a property's value without formally taking it, the owner may sue the government for compensation. The owner initiates the action — the opposite of normal condemnation." },
{ id: 85, category: "Land Use", term: "Nonconforming Use", definition: "A property use that legally existed before zoning regulations were enacted. It is allowed to continue but typically cannot be expanded, rebuilt after major damage, or changed to a different nonconforming use." },
{ id: 86, category: "Land Use", term: "Special Use Permit", definition: "Permission granted by a zoning authority to allow a specific use not normally permitted in a zone, subject to conditions. Examples: a daycare center in a residential zone or a drive-through in a standard commercial zone." },
{ id: 87, category: "Land Use", term: "Spot Zoning", definition: "The rezoning of a single parcel in a way that is inconsistent with the surrounding area's zoning and serves only the parcel owner's interest. Generally considered illegal because it lacks a legitimate public purpose." },
{ id: 88, category: "Land Use", term: "Ad Valorem Tax", definition: "A property tax based on the assessed value of the property. Calculated as: Assessed Value times Tax Rate. One mill equals $1 per $1,000 of assessed value, or $0.001 per dollar." },
{ id: 89, category: "Leases", term: "Gross Lease", definition: "A lease where the tenant pays a fixed rent and the landlord covers most or all operating expenses including taxes, insurance, and maintenance. Common in residential rentals." },
{ id: 90, category: "Leases", term: "Net Lease", definition: "A lease where the tenant pays base rent plus some portion of the property's operating expenses. Types include Single Net (N), Double Net (NN), and Triple Net (NNN), each adding more tenant responsibilities." },
{ id: 91, category: "Leases", term: "Triple Net (NNN) Lease", definition: "A lease where the tenant pays base rent plus all three nets: property taxes, building insurance, and maintenance costs. The landlord receives a truly net income with minimal expenses." },
{ id: 92, category: "Leases", term: "Percentage Lease", definition: "A lease requiring the tenant to pay a fixed base rent plus a percentage of their gross sales. Most commonly used in retail settings and shopping centers." },
{ id: 93, category: "Leases", term: "Ground Lease", definition: "A long-term lease of land only. The tenant builds improvements on the land and may own those improvements during the lease term. At the end of the lease, improvements typically revert to the landowner." },
{ id: 94, category: "Leases", term: "Constructive Eviction", definition: "When a landlord's failure to maintain habitable conditions forces a tenant to vacate. The tenant is not formally removed but is effectively driven out. The tenant may be relieved of further rent obligations." },
{ id: 95, category: "Leases", term: "Periodic Tenancy", definition: "A leasehold that automatically renews for successive equal periods until one party gives proper advance notice to terminate. Examples: month-to-month, week-to-week." },
{ id: 96, category: "Leases", term: "Tenancy at Sufferance", definition: "Occurs when a tenant remains in possession after their lease expires without the landlord's permission. The landlord may treat them as a trespasser or choose to accept rent and create a periodic tenancy." },
{ id: 97, category: "License Law", term: "Conversion", definition: "The illegal act of using a client's funds (such as earnest money or security deposits) for the broker's own personal or business purposes. Goes beyond commingling and may constitute criminal fraud." },
{ id: 98, category: "License Law", term: "Sherman Antitrust Act", definition: "A federal law prohibiting anti-competitive business practices. In real estate, it forbids brokers from agreeing to fix commission rates (price-fixing) or dividing up market areas (market allocation)." },
{ id: 99, category: "License Law", term: "Errors and Omissions Insurance", definition: "Professional liability insurance for real estate licensees that covers claims arising from mistakes, negligence, or failure to disclose material facts. Protects the agent if a client sues over a transaction error." },
{ id: 100, category: "License Law", term: "Subagency", definition: "When a listing broker authorizes another broker to act as the seller's agent. The cooperating broker becomes a subagent of the seller — even if working with the buyer — and owes fiduciary duties to the seller." },
{ id: 101, category: "Disclosures", term: "Material Fact", definition: "Any fact a reasonable buyer would consider important when deciding whether to purchase a property or at what price. Agents have a legal duty to disclose all known material facts regardless of whether the buyer asks." },
{ id: 102, category: "Disclosures", term: "Latent Defect", definition: "A hidden defect not visible during a normal property inspection that the seller knows about. Must always be disclosed. Example: a basement that floods seasonally but appears dry during showings." },
{ id: 103, category: "Disclosures", term: "Patent Defect", definition: "A defect that is visible to the naked eye during a normal walkthrough. No special duty to disclose what any buyer can plainly see themselves." },
{ id: 104, category: "Disclosures", term: "Seller's Disclosure", definition: "A written statement provided by the seller to the buyer detailing the known condition of the property. Covers structural issues, systems, environmental hazards, and other material facts." },
{ id: 105, category: "Disclosures", term: "Fraudulent Misrepresentation", definition: "An intentional false statement made to induce a buyer into a transaction. The most serious form of misrepresentation — can result in rescission, damages, and loss of license." },
{ id: 106, category: "Disclosures", term: "Stigmatized Property", definition: "A property with a psychological impact on buyers due to past events such as a death, crime, or alleged haunting — but no physical defect. Disclosure rules vary by state." },
{ id: 107, category: "Disclosures", term: "Lead-Based Paint Disclosure", definition: "Federal law requires sellers of homes built before 1978 to provide a lead-based paint disclosure form and give buyers a 10-day period to conduct an inspection before being bound to the contract." },
{ id: 108, category: "Disclosures", term: "As-Is Sale", definition: "The seller will not make repairs, but is still required to disclose all known material defects. Selling as-is does not eliminate the duty to disclose — buyers retain the right to inspect." },
{ id: 109, category: "Disclosures", term: "Red Flag Rule", definition: "When something appears inconsistent or suspicious, the agent has a duty to investigate further rather than ignore it. Failing to investigate a red flag can create liability even without intentional wrongdoing." },
{ id: 110, category: "Disclosures", term: "Warranty of Habitability", definition: "An implied warranty in most states that a landlord will maintain a rental unit in safe, livable condition — including functioning heat, plumbing, weatherproofing, and freedom from pests." },
{ id: 111, category: "Transfer of Title", term: "General Warranty Deed", definition: "The grantor warrants the title against all defects, even those arising before their period of ownership. Provides the broadest protection to the buyer. Most commonly used in residential sales." },
{ id: 112, category: "Transfer of Title", term: "Special Warranty Deed", definition: "The grantor warrants title only against defects that arose during their own period of ownership — not before. Commonly used by corporations, estates, and in foreclosure sales." },
{ id: 113, category: "Transfer of Title", term: "Quitclaim Deed", definition: "Conveys only whatever interest the grantor has, with no warranties whatsoever. Provides no protection to the buyer. Used to clear title defects, transfer between family members, or correct recording errors." },
{ id: 114, category: "Transfer of Title", term: "Title Insurance", definition: "A policy protecting against losses from title defects that existed before the policy was issued. Owner's policy protects the buyer; lender's (mortgagee's) policy protects the lender. Only the lender's policy is typically required." },
{ id: 115, category: "Transfer of Title", term: "Cloud on Title", definition: "Any claim, lien, or encumbrance that casts doubt on the owner's ability to convey clear title. Must be resolved before a clean transfer can take place." },
{ id: 116, category: "Transfer of Title", term: "Quiet Title Action", definition: "A court proceeding used to resolve competing claims to a property and establish clear, undisputed ownership. Filed when there is a cloud on title that cannot be resolved otherwise." },
{ id: 117, category: "Transfer of Title", term: "Constructive Notice", definition: "Notice given to the world through public recording. Everyone is legally assumed to know what is in the public record, even if they did not personally check. First to record generally prevails." },
{ id: 118, category: "Transfer of Title", term: "Short Sale", definition: "The lender agrees to accept less than the full loan balance when the property is sold. Requires lender approval. The forgiven amount may be taxable or the borrower may still owe a deficiency depending on state law." },
{ id: 119, category: "Transfer of Title", term: "1031 Exchange", definition: "Allows an investor to defer capital gains taxes by reinvesting proceeds from a sold investment property into a like-kind replacement. Must identify replacement within 45 days and close within 180 days. Primary residences do not qualify." },
{ id: 120, category: "Transfer of Title", term: "TRID", definition: "TILA-RESPA Integrated Disclosure rules requiring lenders to provide a Loan Estimate within 3 business days of application and a Closing Disclosure at least 3 business days before closing." },
{ id: 121, category: "Environmental", term: "Radon", definition: "A colorless, odorless radioactive gas that forms from the natural decay of uranium in soil. Seeps into buildings through foundation cracks. The EPA action level is 4 picocuries per liter (pCi/L). Mitigated with sub-slab depressurization." },
{ id: 122, category: "Environmental", term: "Asbestos", definition: "A fibrous mineral used in insulation, floor tiles, and roofing before the 1980s. Dangerous when disturbed (friable). Non-friable asbestos in good condition is often left in place. Removal requires a licensed abatement contractor." },
{ id: 123, category: "Environmental", term: "CERCLA (Superfund)", definition: "Federal law imposing cleanup liability on current and former owners, operators, and those who disposed of hazardous substances at a contaminated site — even if they did not cause the contamination. Ignorance is not a defense." },
{ id: 124, category: "Environmental", term: "Underground Storage Tank (UST)", definition: "A buried tank used to store petroleum or chemicals. Leaking USTs contaminate soil and groundwater. Sellers must disclose known USTs. Suspected contamination requires an environmental assessment." },
{ id: 125, category: "Environmental", term: "Phase I Environmental Assessment", definition: "A review of historical records and site inspection to identify potential contamination — no soil or groundwater testing. Required by lenders before many commercial loans. Identifies recognized environmental conditions (RECs)." },
{ id: 126, category: "Environmental", term: "Lead-Based Paint", definition: "Used in homes built before 1978. Hazardous when it deteriorates or is disturbed through chipping, sanding, or renovation. Federal law requires disclosure and a 10-day inspection period before the buyer is bound." },
{ id: 127, category: "Antitrust", term: "Price Fixing", definition: "An illegal agreement between competing brokers to set commission rates at a fixed level. Each brokerage must independently set its own fees. Even discussing commissions with a competitor is dangerous." },
{ id: 128, category: "Antitrust", term: "Market Allocation", definition: "An illegal agreement between competitors to divide up geographic areas or types of clients. Example: one firm handles one side of the city while another handles the other side. Per se violation of antitrust law." },
{ id: 129, category: "Antitrust", term: "Group Boycott", definition: "An agreement between competing brokers to refuse to work with a specific company or individual. Also called a concerted refusal to deal. Illegal per se under antitrust law." },
{ id: 130, category: "Antitrust", term: "Tie-In Arrangement", definition: "Requiring a buyer to purchase one product or service as a condition of purchasing another. Example: requiring a buyer to use a specific title company as a condition of the real estate sale." },
{ id: 131, category: "Property Management", term: "Net Operating Income (NOI)", definition: "Effective Gross Income minus all operating expenses. Does NOT include mortgage payments or debt service. Used as the basis for the income approach to value." },
{ id: 132, category: "Property Management", term: "Capitalization Rate (Cap Rate)", definition: "Net Operating Income divided by Property Value. Used to evaluate and compare income-producing properties. A higher cap rate suggests higher return but also higher perceived risk." },
{ id: 133, category: "Property Management", term: "Triple Net (NNN) Lease", definition: "A commercial lease where the tenant pays base rent plus all three nets: property taxes, building insurance, and maintenance costs. The landlord receives a truly net income with minimal management responsibility." },
{ id: 134, category: "Property Management", term: "Gross Rent Multiplier (GRM)", definition: "Sales Price divided by Gross Monthly Rent. A quick way to compare rental properties. Lower GRM indicates better value relative to the rent the property generates." },
{ id: 135, category: "Property Management", term: "Eviction", definition: "The legal process of removing a tenant from a property. Must follow state-mandated procedures. Self-help eviction — such as changing locks or removing belongings — is illegal in most states." },
{ id: 136, category: "Property Management", term: "Constructive Eviction", definition: "When a landlord's failure to maintain habitable conditions forces a tenant to leave voluntarily. The tenant is not formally removed but is effectively driven out and may be relieved of further rent obligations." },
{ id: 137, category: "Mortgage Fraud", term: "Straw Buyer", definition: "A person who applies for a mortgage on behalf of someone else who could not qualify on their own. The actual buyer's identity is concealed. This is mortgage fraud and a federal crime." },
{ id: 138, category: "Mortgage Fraud", term: "Predatory Lending", definition: "Abusive lending practices that take advantage of borrowers through deceptive terms, excessive fees, or unsuitable loan products. Common targets are elderly, low-income, or minority borrowers." },
{ id: 139, category: "Mortgage Fraud", term: "Equity Stripping", definition: "A predatory scheme where a lender extends a loan based on home equity rather than the borrower's ability to repay, knowing the borrower will default and the lender will foreclose and take the home." },
{ id: 140, category: "Mortgage Fraud", term: "Loan Flipping", definition: "A predatory practice where a lender repeatedly refinances a borrower's loan, generating fees each time while leaving the borrower with increasing debt and diminishing equity." },
{ id: 141, category: "Subdivisions", term: "Plat Map", definition: "A recorded survey showing the division of land into lots, blocks, streets, and easements. Once recorded, the plat map becomes the legal description for individual lots within the subdivision." },
{ id: 142, category: "Subdivisions", term: "Dedication", definition: "The transfer of privately owned land to public use — typically streets, parks, or utility easements — as part of the subdivision approval process. The public body must formally accept the dedication." },
{ id: 143, category: "Subdivisions", term: "Interstate Land Sales Full Disclosure Act", definition: "Federal law requiring developers selling lots in subdivisions of 100 or more lots across state lines to register with the CFPB and provide buyers with a Property Report at least 3 days before signing." },
{ id: 144, category: "Commercial", term: "Class A Office", definition: "The highest quality commercial office space — newest or well-maintained buildings in prime locations commanding the highest rents. Attract prestigious tenants and institutional investors." },
{ id: 145, category: "Commercial", term: "Cash-on-Cash Return", definition: "Annual pre-tax cash flow divided by the total cash invested. Measures the return on actual dollars invested rather than total property value. Useful for comparing leveraged investments." },
{ id: 146, category: "Commercial", term: "Effective Gross Income (EGI)", definition: "Potential Gross Income minus vacancy and credit loss allowance. Represents the realistic income a property is expected to generate accounting for empty units and uncollected rent." },
{ id: 147, category: "Commercial", term: "Percentage Lease", definition: "A commercial lease where the tenant pays a fixed base rent plus a percentage of their gross sales above a specified breakpoint. Most commonly used in retail and shopping center leases." },
{ id: 148, category: "Technology", term: "E-SIGN Act", definition: "The Electronic Signatures in Global and National Commerce Act establishes that electronic signatures are legally binding in real estate transactions. Both parties must consent to use electronic signatures." },
{ id: 149, category: "Technology", term: "Automated Valuation Model (AVM)", definition: "A computer-generated estimate of property value using public data and algorithms. Not a substitute for a licensed appraisal. Agents should educate clients on the significant limitations of AVMs like Zillow Zestimates." },
{ id: 150, category: "Technology", term: "MLS (Multiple Listing Service)", definition: "A database used by member brokers to share property listings and offer compensation to cooperating brokers. MLS rules govern how listings must be entered, updated, displayed, and when they must be submitted after signing." },
]
 
const QUIZ_QUESTIONS = [
{ category: "Ownership", question: "Which ownership type gives the most complete rights with no conditions attached?", options: ["Leasehold Estate","Life Estate","Fee Simple Absolute","Joint Tenancy"], answer: 2, explanation: "Fee Simple Absolute is the highest form of ownership — complete control with no time limits or conditions. The owner can sell, lease, mortgage, or will the property freely." },
{ category: "Ownership", question: "Two co-owners hold title with right of survivorship. When one owner passes away, their share:", options: ["Passes to their heirs via their will","Moves automatically to the surviving owner","Reverts to the state","Goes through probate"], answer: 1, explanation: "Right of survivorship in Joint Tenancy means the deceased owner's interest transfers automatically to the surviving owners — completely bypassing probate." },
{ category: "Ownership", question: "Which co-ownership form allows partners to hold unequal shares and leave them to anyone in a will?", options: ["Joint Tenancy","Tenancy by the Entirety","Tenancy in Common","Community Property"], answer: 2, explanation: "Tenancy in Common allows unequal ownership shares. Each owner can independently sell, mortgage, or will their interest to anyone — there is no right of survivorship." },
{ category: "Ownership", question: "The MARIA test is used to determine whether an item is legally considered a:", options: ["Valid deed","Fixture","Type of lien","Form of legal description"], answer: 1, explanation: "MARIA (Method of attachment, Adaptability, Relationship, Intention, Agreement) determines whether personal property has legally become part of the real property as a fixture." },
{ category: "Ownership", question: "A condo owner's legal interest includes fee simple title to their unit plus:", options: ["A leasehold interest in common areas","Corporate shares in the building","An undivided interest in all common areas","Nothing beyond their unit's four walls"], answer: 2, explanation: "Condo owners hold fee simple title to their individual unit AND share an undivided interest in all common elements — lobbies, hallways, amenities, and grounds." },
{ category: "Ownership", question: "Which form of co-ownership is exclusively available to married couples?", options: ["Joint Tenancy","Tenancy in Common","Severalty","Tenancy by the Entirety"], answer: 3, explanation: "Tenancy by the Entirety is reserved for married couples. Neither spouse can transfer or encumber their interest without the other's full consent." },
{ category: "Ownership", question: "A property is granted 'as long as it is used as a school.' If the school closes, ownership ends. This is:", options: ["Fee Simple Absolute","Life Estate","Fee Simple Defeasible","Leasehold Estate"], answer: 2, explanation: "Fee Simple Defeasible is ownership with a condition — if the condition is violated, ownership automatically terminates and may revert to the grantor." },
{ category: "Ownership", question: "When a person owns property entirely on their own with no co-owners, this is called:", options: ["Joint Tenancy","Severalty","Tenancy in Common","Community Property"], answer: 1, explanation: "Severalty is ownership by a single individual alone. The term comes from the idea of severing all others from an interest in the property." },
{ category: "Agency", question: "Which fiduciary duty continues to bind an agent even after the listing agreement expires?", options: ["Obedience","Loyalty","Confidentiality","Accounting"], answer: 2, explanation: "Confidentiality is the only fiduciary duty that survives the end of the agency relationship. An agent may never later disclose information that could be used against a former client." },
{ category: "Agency", question: "An agent says a home has 'the most spectacular sunsets in the entire county.' This is an example of:", options: ["Fraud","Material misrepresentation","Puffing","Steering"], answer: 2, explanation: "Puffing is non-factual, exaggerated, subjective praise. No reasonable person would rely on it as a verifiable statement of fact. It is not illegal." },
{ category: "Agency", question: "A listing agreement that guarantees the broker a commission no matter who finds the buyer is called:", options: ["Open Listing","Exclusive Agency","Exclusive Right to Sell","Net Listing"], answer: 2, explanation: "The Exclusive Right to Sell guarantees the listing broker a commission regardless of who produces the buyer — another agent, the seller themselves, or anyone else." },
{ category: "Agency", question: "Dual agency requires which of the following before it can proceed?", options: ["Verbal consent from the buyer only","A court order","Informed written consent from both buyer and seller","State licensing board approval"], answer: 2, explanation: "Dual agency creates a conflict of interest. It is legal in most states only with informed written consent from both the buyer and the seller." },
{ category: "Agency", question: "An agent guides a family toward a different neighborhood based on their race. This illegal act is called:", options: ["Blockbusting","Redlining","Commingling","Steering"], answer: 3, explanation: "Steering is the illegal practice of directing buyers or renters toward or away from specific neighborhoods based on a protected characteristic such as race." },
{ category: "Agency", question: "A broker deposits a client's earnest money into their personal checking account. This violation is called:", options: ["Conversion","Commingling","Fraud","Puffing"], answer: 1, explanation: "Commingling is the illegal mixing of client funds with the broker's personal or business funds. Brokers must keep all client money in a separate escrow or trust account." },
{ category: "Agency", question: "An agent encourages homeowners to sell quickly by warning a different ethnic group is buying nearby. This is:", options: ["Steering","Redlining","Blockbusting","Spot Zoning"], answer: 2, explanation: "Blockbusting (panic peddling) is the illegal act of inducing owners to sell by making representations about a protected class entering the neighborhood." },
{ category: "Agency", question: "In an Open Listing, a commission is earned only by:", options: ["Any broker who shows the property","The listing broker regardless of who sells","The broker who actually produces the buyer","The broker with the lowest rate"], answer: 2, explanation: "In an Open Listing, multiple brokers can market the same property, but only the one who actually brings the ready, willing, and able buyer earns the commission." },
{ category: "Contracts", question: "For a real estate contract to be enforceable in court, the Statute of Frauds requires it to be:", options: ["Notarized","In writing","Witnessed by two people","Reviewed by an attorney"], answer: 1, explanation: "The Statute of Frauds requires real estate contracts to be in writing to be enforceable. An oral agreement to buy or sell real property cannot be upheld in court." },
{ category: "Contracts", question: "A seller tries to back out of an accepted offer. The buyer goes to court to force the sale. This remedy is called:", options: ["Liquidated Damages","Rescission","Specific Performance","Novation"], answer: 2, explanation: "Specific Performance forces a party to complete the transaction as agreed. It is uniquely available in real estate because each property is legally considered one-of-a-kind." },
{ category: "Contracts", question: "A contract that was illegal from the start and has no legal effect whatsoever is:", options: ["Voidable","Unenforceable","Void","Executory"], answer: 2, explanation: "A void contract has no legal effect from the beginning — it was never a valid contract. Example: a contract to perform an illegal act." },
{ category: "Contracts", question: "A buyer's offer includes a clause stating the deal only goes forward if they secure a mortgage. This clause is a:", options: ["Time is of the Essence clause","Contingency","Novation","Liquidated Damages clause"], answer: 1, explanation: "A financing contingency is a condition that must be satisfied before the contract is binding. If the buyer cannot secure a loan, they can exit without penalty." },
{ category: "Contracts", question: "A new party takes over a contract, completely releasing the original party from all liability. This is:", options: ["Assignment","Rescission","Specific Performance","Novation"], answer: 3, explanation: "Novation substitutes a new contracting party for the original one and fully releases the original party. All parties must agree to the substitution." },
{ category: "Contracts", question: "Which of the following is NOT a required element of a valid real estate contract?", options: ["Consideration","Mutual Agreement","Notarization","Legal Purpose"], answer: 2, explanation: "Notarization is NOT a required element to form a valid contract. The essentials are Offer, Acceptance, Consideration, Legal Capacity, and Legal Purpose." },
{ category: "Financing", question: "The borrower in a mortgage transaction is called the:", options: ["Mortgagee","Trustee","Mortgagor","Beneficiary"], answer: 2, explanation: "The mortgagor is the borrower who pledges the property as collateral. The mortgagee is the lender. Memory tip: mortgagOR = the One who Owes." },
{ category: "Financing", question: "PMI is purchased primarily to protect:", options: ["The borrower against job loss","The lender when the down payment is under 20%","The seller if the buyer walks away","The title company against defects"], answer: 1, explanation: "Private Mortgage Insurance (PMI) protects the lender — not the buyer — in case of default. Required on conventional loans when LTV exceeds 80%." },
{ category: "Financing", question: "One discount point paid at closing equals:", options: ["0.5% of the purchase price","1% of the purchase price","1% of the loan amount","A flat $1,000 fee"], answer: 2, explanation: "One discount point = 1% of the loan amount, paid upfront at closing. Buying points reduces the interest rate, lowering monthly payments over the life of the loan." },
{ category: "Financing", question: "If a borrower stops making payments, which mortgage clause lets the lender demand the entire balance immediately?", options: ["Subordination Clause","Prepayment Clause","Due-on-Sale Clause","Acceleration Clause"], answer: 3, explanation: "The acceleration clause gives the lender the right to call the entire remaining loan balance due immediately upon the borrower's default." },
{ category: "Financing", question: "Ginnie Mae's primary role in the secondary mortgage market is to:", options: ["Originate FHA loans directly","Back securities made of FHA and VA loans","Set conventional loan limits","Insure conventional mortgages"], answer: 1, explanation: "Ginnie Mae (GNMA) is a government agency guaranteeing mortgage-backed securities composed of FHA and VA loans, providing liquidity for lenders to make more government-backed loans." },
{ category: "Financing", question: "TRID requires lenders to deliver the Closing Disclosure to buyers at least how far in advance of closing?", options: ["1 business day","3 business days","5 business days","7 calendar days"], answer: 1, explanation: "Under TRID, the Closing Disclosure must be delivered at least 3 business days before closing, giving borrowers time to review final loan terms." },
{ category: "Financing", question: "With a standard amortizing mortgage, what happens over time?", options: ["Interest portion increases each month","Each payment stays the same but more goes to principal over time","Early payments are mostly principal","Both portions stay equal"], answer: 1, explanation: "Amortization keeps the payment constant, but the composition shifts. Early on most of the payment covers interest. As the balance falls, more of each payment reduces principal." },
{ category: "Financing", question: "A VA loan is available to:", options: ["All first-time homebuyers","Any buyer with good credit","Eligible military service members and veterans","Buyers in rural areas only"], answer: 2, explanation: "VA loans are a benefit for eligible active-duty military, veterans, and surviving spouses. They offer no down payment and no PMI, though a one-time funding fee applies." },
{ category: "Fair Housing", question: "Which of the following is NOT one of the 7 federally protected classes under the Fair Housing Act?", options: ["Familial Status","Disability","Sexual Orientation","National Origin"], answer: 2, explanation: "Sexual Orientation is not currently a federal protected class under the Fair Housing Act. The 7 federal classes are Race, Color, Religion, National Origin, Sex, Familial Status, and Disability." },
{ category: "Fair Housing", question: "A landlord refuses to rent to a couple because they have a toddler. This violates the protected class of:", options: ["Disability","Sex","Familial Status","National Origin"], answer: 2, explanation: "Familial Status protects households with children under 18, pregnant women, and those gaining custody. Refusing to rent to families with young children is illegal discrimination." },
{ category: "Fair Housing", question: "An agent tells homeowners their values will drop because another ethnic group is buying nearby. This is:", options: ["Steering","Redlining","Blockbusting","Puffing"], answer: 2, explanation: "Blockbusting (panic peddling) is inducing owners to sell by making representations about protected classes entering the neighborhood." },
{ category: "Fair Housing", question: "The Civil Rights Act of 1866 prohibits housing discrimination based on race and has:", options: ["The same exemptions as the 1968 Fair Housing Act","No exemptions whatsoever","The Mrs. Murphy exemption","An exemption for small landlords"], answer: 1, explanation: "The Civil Rights Act of 1866 has absolutely NO exemptions. Every property transaction involving racial discrimination is prohibited, no exceptions." },
{ category: "Fair Housing", question: "A tenant with a disability asks to install grab bars. The landlord must:", options: ["Pay for the modifications","Allow them at the tenant's expense","Refuse since it alters the unit","Get city approval first"], answer: 1, explanation: "The Fair Housing Act requires landlords to allow reasonable modifications for disabled tenants. The tenant pays, and the landlord may require restoration when the tenant moves out." },
{ category: "Fair Housing", question: "A Fair Housing complaint filed with HUD must be submitted within:", options: ["6 months","1 year","2 years","3 years"], answer: 1, explanation: "HUD complaints must be filed within 1 year of the alleged discriminatory act. A federal court lawsuit has a 2-year deadline." },
{ category: "Appraisal", question: "Which appraisal method is considered most reliable for a single-family home?", options: ["Cost Approach","Income Approach","Sales Comparison Approach","Gross Rent Multiplier Method"], answer: 2, explanation: "The Sales Comparison Approach is most reliable for residential properties because there are typically many recent comparable home sales available to use as benchmarks." },
{ category: "Appraisal", question: "Which appraisal approach works best for a fire station or elementary school?", options: ["Income Approach","Sales Comparison Approach","Cost Approach","GRM Method"], answer: 2, explanation: "The Cost Approach is best for special-use or public properties because they rarely sell (making comparables scarce) and they do not generate rental income." },
{ category: "Appraisal", question: "A home loses value because it has an outdated floor plan with poor room flow. This is an example of:", options: ["Physical deterioration","External obsolescence","Functional obsolescence","Curable depreciation"], answer: 2, explanation: "Functional obsolescence is a loss in value due to outdated or inadequate design features within the property itself — like an awkward floor plan or too few bathrooms." },
{ category: "Appraisal", question: "A factory opens one block away, reducing nearby home values. This depreciation is:", options: ["Physical deterioration","Functional obsolescence","External obsolescence","Curable depreciation"], answer: 2, explanation: "External obsolescence results from factors entirely outside the property — like nearby industrial uses, a highway, or neighborhood decline. It is always classified as incurable." },
{ category: "Appraisal", question: "Highest and Best Use must satisfy all of the following EXCEPT:", options: ["Legally permissible","Physically possible","Owned by the government","Financially feasible"], answer: 2, explanation: "Highest and Best Use must be legally permissible, physically possible, and financially feasible — and produce maximum value. Government ownership is not a requirement." },
{ category: "Math", question: "A property sells for $400,000 with a 5% commission. What is the total commission?", options: ["$20,000","$25,000","$40,000","$4,000"], answer: 0, explanation: "$400,000 x 0.05 = $20,000 total commission." },
{ category: "Math", question: "A home is worth $320,000 with a $200,000 loan balance. What is the owner's equity?", options: ["$200,000","$320,000","$120,000","$80,000"], answer: 2, explanation: "Equity = Market Value - Loan Balance = $320,000 - $200,000 = $120,000." },
{ category: "Math", question: "A rental property has an NOI of $60,000 and the local cap rate is 8%. What is the estimated property value?", options: ["$480,000","$750,000","$600,000","$680,000"], answer: 1, explanation: "Value = NOI / Cap Rate = $60,000 / 0.08 = $750,000." },
{ category: "Math", question: "A borrower has a $180,000 loan at 6% annual interest. What is the interest portion of the first monthly payment?", options: ["$10,800","$1,080","$900","$1,800"], answer: 2, explanation: "Annual interest = $180,000 x 0.06 = $10,800. Monthly interest = $10,800 / 12 = $900." },
{ category: "Math", question: "How many square feet are in one acre?", options: ["36,000","40,000","43,560","48,000"], answer: 2, explanation: "One acre = 43,560 square feet. This is one of the most frequently tested numbers on the real estate exam — memorize it." },
{ category: "Land Use", question: "A property was used as a gas station before zoning laws were passed. The zoning now prohibits it. The owner can:", options: ["Continue operating as a nonconforming use","Be immediately forced to close","Apply for a variance to continue","Rezone the property themselves"], answer: 0, explanation: "A nonconforming use that legally existed before zoning was enacted is allowed to continue. However, it typically cannot be expanded or rebuilt if substantially destroyed." },
{ category: "Land Use", question: "The government takes a private landowner's property to build a new public highway. The owner must receive:", options: ["Nothing — eminent domain requires no payment","Replacement land of equal value","Just compensation at fair market value","Payment only if they contest in court"], answer: 2, explanation: "The 5th Amendment requires the government to pay just compensation — fair market value — whenever it exercises eminent domain and takes private property for public use." },
{ category: "Land Use", question: "A homeowner wants to build a garage that extends beyond the required setback. They should apply for a:", options: ["Rezoning","Special use permit","Variance","Nonconforming use certificate"], answer: 2, explanation: "A variance is an exception to a specific zoning requirement granted when strict enforcement would cause unique hardship. It does not change the underlying zoning of the property." },
{ category: "Land Use", question: "A church wants to operate a food pantry in a residential zone. They should apply for a:", options: ["Variance","Special use permit","Rezoning","Certificate of occupancy"], answer: 1, explanation: "A special use permit allows a specific use not normally permitted in a zone, subject to conditions. Churches and daycares in residential zones are common examples." },
{ category: "Land Use", question: "Which government power allows local authorities to create zoning laws and building codes?", options: ["Eminent domain","Escheat","Taxation","Police power"], answer: 3, explanation: "Police power is the government's authority to regulate land use to protect public health, safety, and welfare. It is the basis for zoning laws, building codes, and environmental regulations." },
{ category: "Land Use", question: "A new building cannot be legally occupied until the owner obtains a:", options: ["Variance","Certificate of Occupancy","Special use permit","Plat approval"], answer: 1, explanation: "A Certificate of Occupancy (CO) is issued by the local authority after a building passes all required inspections. It legally authorizes the building to be occupied." },
{ category: "Deeds & Title", question: "Which of the following is NOT required for a deed to be valid?", options: ["Grantor's signature","Legal description of the property","Recording at the county office","Identifiable grantee"], answer: 2, explanation: "Recording is NOT required for a deed to be valid between the grantor and grantee. However, recording provides constructive notice and protects the buyer against future claims from third parties." },
{ category: "Deeds & Title", question: "A property owner dies without a will and has no living heirs. The property will:", options: ["Be sold at auction","Pass to the nearest neighbor","Revert to the state through escheat","Become public park land automatically"], answer: 2, explanation: "Escheat is the process by which property reverts to the state when an owner dies intestate and has no identifiable heirs." },
{ category: "Deeds & Title", question: "In a 1031 exchange, an investor has how many days to identify a replacement property?", options: ["30 days","45 days","60 days","90 days"], answer: 1, explanation: "A 1031 Like-Kind Exchange requires the investor to identify potential replacement properties within 45 days of the sale and close on the replacement within 180 days." },
{ category: "Deeds & Title", question: "To acquire title through adverse possession, the possession must be all of the following EXCEPT:", options: ["Open and notorious","Hostile and without permission","Continuous for the statutory period","Witnessed by a licensed surveyor"], answer: 3, explanation: "Adverse possession requires open, notorious, hostile, actual, and continuous possession for the statutory period. A licensed surveyor's witness is not a legal requirement." },
{ category: "Deeds & Title", question: "Which type of deed is most commonly used in a court-ordered foreclosure sale?", options: ["General Warranty Deed","Special Warranty Deed","Quitclaim Deed","Sheriff's Deed"], answer: 3, explanation: "A Sheriff's Deed (or Trustee's Deed) is used in court-ordered or foreclosure sales. It conveys the property but typically carries no warranties from the grantor." },
{ category: "Leases", question: "In a gross lease, who is responsible for paying the property's operating expenses?", options: ["The tenant pays all expenses","The landlord pays expenses; tenant pays fixed rent","Both split expenses equally","The property manager pays from reserves"], answer: 1, explanation: "In a gross lease, the tenant pays a fixed rent amount and the landlord covers all or most operating expenses such as taxes, insurance, and maintenance." },
{ category: "Leases", question: "A retail tenant pays base rent plus a percentage of their monthly sales. This is a:", options: ["Gross lease","Net lease","Percentage lease","Ground lease"], answer: 2, explanation: "A percentage lease requires the tenant to pay a base rent plus a percentage of their gross sales revenue. It is most common in retail and shopping center settings." },
{ category: "Leases", question: "In a Triple Net (NNN) lease, the tenant is responsible for:", options: ["Base rent only","Base rent plus utilities only","Base rent, taxes, insurance, and maintenance","All expenses including mortgage payments"], answer: 2, explanation: "In a Triple Net lease, the tenant pays base rent plus the three nets: property taxes, building insurance, and maintenance/operating expenses." },
{ category: "Leases", question: "A landlord refuses to fix a broken heating system in freezing weather, making the unit uninhabitable. The tenant leaves. This is called:", options: ["Actual eviction","Constructive eviction","Unlawful detainer","Lease abandonment"], answer: 1, explanation: "Constructive eviction occurs when the landlord's failure to maintain habitable conditions effectively forces the tenant to vacate. The tenant may be relieved of rent obligations." },
{ category: "Leases", question: "A lease that automatically renews for equal successive periods until one party gives proper notice is called:", options: ["Estate for years","Tenancy at will","Periodic tenancy","Tenancy at sufferance"], answer: 2, explanation: "A periodic tenancy automatically renews for the same period — month-to-month or week-to-week — until one party gives proper advance notice to terminate." },
{ category: "Leases", question: "A tenant stays in a property after their lease expires without the landlord's permission. This is called:", options: ["Periodic tenancy","Tenancy at will","Tenancy at sufferance","Holdover tenancy renewal"], answer: 2, explanation: "Tenancy at sufferance occurs when a tenant remains in possession after their lease ends without the landlord's permission." },
{ category: "Leases", question: "Which of the following is excluded when calculating NOI?", options: ["Property taxes","Insurance premiums","Mortgage payments","Routine maintenance costs"], answer: 2, explanation: "NOI excludes debt service (mortgage payments) and depreciation. It equals Gross Income minus Vacancy Loss minus Operating Expenses like taxes, insurance, and maintenance." },
{ category: "License Law", question: "A broker uses a client's earnest money deposit to pay their own office rent. This is called:", options: ["Commingling","Conversion","Subrogation","Novation"], answer: 1, explanation: "Conversion is the illegal act of using client funds for personal or business purposes. It goes beyond commingling and may constitute criminal fraud or embezzlement." },
{ category: "License Law", question: "Several competing brokers in a city agree to all charge the same 6% commission rate. This violates:", options: ["RESPA","The Fair Housing Act","The Sherman Antitrust Act","TILA"], answer: 2, explanation: "The Sherman Antitrust Act prohibits price-fixing among competitors. Brokers agreeing to set standard commission rates is illegal price-fixing." },
{ category: "License Law", question: "Which of the following activities requires a real estate license?", options: ["Selling your own home","Managing properties you personally own","Listing another person's property for compensation","Auctioning personal property"], answer: 2, explanation: "A real estate license is required to represent others in real estate transactions for compensation. Selling your own property or managing your own properties does not require a license." },
{ category: "License Law", question: "A salesperson receives a referral fee directly from a mortgage lender for sending clients their way. This most likely violates:", options: ["The Sherman Antitrust Act","RESPA","The Fair Housing Act","ECOA"], answer: 1, explanation: "RESPA prohibits kickbacks and unearned fees between settlement service providers. Accepting referral fees from lenders is a RESPA violation." },
{ category: "License Law", question: "A real estate agent represents a buyer while secretly receiving compensation from the seller without disclosing it. This is called:", options: ["Dual agency","A secret profit","Puffing","Designated agency"], answer: 1, explanation: "A secret profit occurs when an agent receives undisclosed compensation from another party. It violates the fiduciary duties of loyalty and disclosure." },
{ category: "License Law", question: "Which of the following people is typically EXEMPT from needing a real estate license?", options: ["A property manager at a complex they do not own","An attorney handling a real estate closing in their legal capacity","A person listing homes for sellers for a commission","A buyer's agent representing clients in purchases"], answer: 1, explanation: "Attorneys acting in their legal capacity during real estate transactions are typically exempt from licensing requirements. They are regulated by the state bar instead." },
{ category: "Ownership", question: "A property owner has the right to use water from a river that borders their land. This right is called:", options: ["Mineral rights","Air rights","Riparian rights","Littoral rights"], answer: 2, explanation: "Riparian rights give landowners whose property borders a river or stream the right to use the flowing water." },
{ category: "Ownership", question: "Which of the following is considered real property?", options: ["A refrigerator the seller is taking","A freestanding bookshelf","Built-in kitchen cabinets","A portable shed not attached to the foundation"], answer: 2, explanation: "Built-in cabinets are attached to the structure and are considered fixtures — real property. Freestanding or portable items that are not permanently attached remain personal property." },
{ category: "Financing", question: "A borrower takes out a loan where the interest rate is fixed for 5 years then adjusts annually. This is called a:", options: ["Balloon mortgage","Graduated payment mortgage","5/1 ARM","Wraparound mortgage"], answer: 2, explanation: "A 5/1 ARM has a fixed rate for the first 5 years, then adjusts every 1 year thereafter based on an index." },
{ category: "Financing", question: "After a foreclosure sale, the proceeds are $40,000 less than the outstanding loan balance. The lender may pursue the borrower for a:", options: ["Short sale judgment","Deficiency judgment","Lis pendens claim","Quiet title action"], answer: 1, explanation: "A deficiency judgment allows the lender to sue the borrower for the remaining balance after a foreclosure sale does not generate enough to cover the full loan amount." },
{ category: "Math", question: "A buyer puts 10% down on a $250,000 home. What is their loan amount?", options: ["$25,000","$225,000","$250,000","$200,000"], answer: 1, explanation: "Down payment = $250,000 x 10% = $25,000. Loan amount = $250,000 - $25,000 = $225,000." },
{ category: "Math", question: "A property is assessed at $180,000 and the tax rate is 2%. What are the annual property taxes?", options: ["$1,800","$3,600","$18,000","$360"], answer: 1, explanation: "Property Tax = Assessed Value x Tax Rate = $180,000 x 0.02 = $3,600 per year." },
{ category: "Math", question: "A commercial building has a depreciable value of $390,000. What is the annual depreciation for tax purposes?", options: ["$10,000","$14,182","$15,000","$10,577"], answer: 0, explanation: "Commercial depreciation = $390,000 / 39 years = $10,000 per year." },
{ category: "Math", question: "A listing agent and buyer's agent split a 6% commission equally on a $425,000 sale. How much does each broker receive?", options: ["$25,500","$12,750","$6,375","$8,500"], answer: 1, explanation: "Total commission = $425,000 x 6% = $25,500. Split equally = $25,500 / 2 = $12,750 to each broker." },
{ category: "Appraisal", question: "An agent prepares a CMA for a seller to help set a listing price. How does this differ from a formal appraisal?", options: ["A CMA is more legally binding than an appraisal","A CMA is done by a licensed agent and is not a formal appraisal; an appraisal is done by a licensed appraiser","They are the same thing with different names","An appraisal is only required for commercial properties"], answer: 1, explanation: "A CMA is prepared by a real estate agent to estimate listing or offer price. It is not a formal appraisal, which must be performed by a licensed or certified appraiser." },
{ category: "Appraisal", question: "A small home in a neighborhood of large luxury homes will likely be valued higher than it would be elsewhere. This illustrates:", options: ["Regression","Progression","Substitution","Contribution"], answer: 1, explanation: "The principle of progression states that a lower-value property benefits from being located near higher-value properties." },
{ category: "Fair Housing", question: "A newspaper ad says 'ideal for single professionals.' This language potentially violates Fair Housing because it suggests a preference against:", options: ["Single people","Families with children — Familial Status","Professionals — income discrimination","It does not violate Fair Housing"], answer: 1, explanation: "Language like 'ideal for single professionals' implies a preference against families with children, which is discrimination based on Familial Status." },
{ category: "Fair Housing", question: "Which federal law specifically prohibits discrimination in mortgage lending based on race, color, religion, national origin, sex, marital status, or age?", options: ["Fair Housing Act","Civil Rights Act of 1866","ECOA","Community Reinvestment Act"], answer: 2, explanation: "ECOA (Equal Credit Opportunity Act) specifically prohibits credit discrimination based on race, color, religion, national origin, sex, marital status, age, or receipt of public assistance." },
{ category: "Contracts", question: "A buyer pays a seller $500 for the exclusive right to purchase a property at a set price within 60 days. This is called:", options: ["A right of first refusal","An option contract","A bilateral purchase agreement","A land contract"], answer: 1, explanation: "An option contract gives the buyer the exclusive right — but not the obligation — to purchase a property at an agreed price within a set period. The seller is bound; the buyer can choose not to exercise it." },
{ category: "Contracts", question: "A buyer makes an offer. The seller responds with different terms and a different price. The original offer is now:", options: ["Still valid until the buyer responds","Automatically accepted by the seller's response","Terminated — the counteroffer acts as a rejection","Extended for 48 hours by law"], answer: 2, explanation: "A counteroffer simultaneously rejects the original offer and creates a new offer. The original offer no longer exists." },
{ category: "Contracts", question: "A buyer takes title and makes payments directly to the seller over time, while the seller retains the deed until paid in full. This is a:", options: ["Wraparound mortgage","Contract for deed (land contract)","Lease with option to buy","Assumption of mortgage"], answer: 1, explanation: "A contract for deed allows the buyer to possess and use the property while making payments to the seller, who retains legal title until the debt is paid in full." },
{ category: "Agency", question: "A seller tells their listing agent they will accept $10,000 less than the asking price. The agent must:", options: ["Tell all interested buyers","Keep this information confidential","Disclose it in the MLS listing","Tell the buyer's agent immediately"], answer: 1, explanation: "A seller's minimum acceptable price is confidential information that the listing agent cannot disclose without the seller's permission. Disclosing it violates fiduciary duty." },
{ category: "Agency", question: "Which of the following is a material fact that an agent MUST disclose to a buyer?", options: ["The seller's reason for moving","A known foundation crack that affects the property's value","The seller's minimum acceptable price","That the seller is going through a divorce"], answer: 1, explanation: "A known foundation crack is a material fact — a defect that would affect a reasonable buyer's decision or the property's value. Agents must disclose all known material facts." },
{ category: "Deeds & Title", question: "A title search reveals a gap in the chain of title from 1987 to 1992. This creates a:", options: ["Lis pendens","Cloud on title","Deed restriction","Mechanic's lien"], answer: 1, explanation: "A cloud on title is any document, claim, or defect in the record that may impair the validity of the owner's title. A gap in the chain of title creates such a cloud." },
{ category: "Fair Housing", question: "The ADA primarily applies to which type of property?", options: ["All residential rentals","Single-family homes","Commercial properties and public accommodations","Only government-owned buildings"], answer: 2, explanation: "The ADA applies to commercial facilities and places of public accommodation. It does not generally apply to private residential housing, which is covered by the Fair Housing Act." },
{ category: "Land Use", question: "The rezoning of one single parcel inconsistently with the surrounding area — benefiting only that owner — is generally considered illegal. This is called:", options: ["Variance","Special use permit","Spot zoning","Nonconforming use"], answer: 2, explanation: "Spot zoning is the illegal rezoning of a single parcel inconsistently with the surrounding area. Courts generally strike it down because it lacks a legitimate public purpose." },
{ category: "License Law", question: "A licensee assists both a buyer and seller without representing either as a fiduciary. This is known as:", options: ["Dual agency","Sub-agency","Transaction brokerage","Designated agency"], answer: 2, explanation: "A transaction broker assists both parties in completing a transaction but does not represent either as a fiduciary. Used in some states as an alternative to dual agency." },
{ category: "Disclosures", question: "A seller knows their basement floods every spring but it appears dry during showings. This is a:", options: ["Patent defect requiring no disclosure","Latent defect requiring disclosure","Stigmatized condition exempt from disclosure","Material fact only the buyer's agent must disclose"], answer: 1, explanation: "A latent defect is a hidden defect not visible during normal inspection that the seller knows about. The seller must disclose it regardless of how the property appears at the time of showing." },
{ category: "Disclosures", question: "Federal law requires sellers of homes built before 1978 to disclose the presence of:", options: ["Asbestos","Radon","Lead-based paint","Underground storage tanks"], answer: 2, explanation: "Federal law (the Residential Lead-Based Paint Hazard Reduction Act) specifically requires disclosure of known lead-based paint hazards for homes built before 1978, along with a 10-day inspection period." },
{ category: "Disclosures", question: "A seller is selling their home 'as-is.' Which statement is correct?", options: ["The seller has no duty to disclose any defects","The seller must still disclose all known material defects","The buyer waives their right to inspect","As-is sales are only legal for bank-owned properties"], answer: 1, explanation: "Selling as-is means the seller will not make repairs, but it does not eliminate the duty to disclose known material defects. Buyers still have the right to inspect the property." },
{ category: "Disclosures", question: "An agent notices water stains on the ceiling but the seller says it was a one-time issue fixed years ago. The agent should:", options: ["Accept the seller's explanation and move on","Disclose the stains to buyers as a potential issue","Say nothing since the seller addressed it","Remove the listing until the ceiling is repainted"], answer: 1, explanation: "Water stains are a red flag. An agent has a duty to investigate further and disclose potential issues even if the seller provides an explanation. This protects both the buyer and the agent from liability." },
{ category: "Disclosures", question: "Which type of misrepresentation involves an intentional false statement made to induce a buyer to purchase?", options: ["Innocent misrepresentation","Negligent misrepresentation","Fraudulent misrepresentation","Constructive misrepresentation"], answer: 2, explanation: "Fraudulent misrepresentation is the intentional deception of a buyer. It is the most serious form and can result in rescission of the contract, monetary damages, and loss of the agent's license." },
{ category: "Disclosures", question: "Disclosure requirements for a stigmatized property — such as one where a murder occurred — are:", options: ["Required federally for all properties","The same in every state","Determined by each individual state's law","Never required under any circumstances"], answer: 2, explanation: "Stigmatized property disclosure rules vary significantly by state. Some states require disclosure of deaths, others prohibit agents from volunteering the information. Agents must know their state's specific rules." },
{ category: "Transfer of Title", question: "Which deed provides the broadest protection to the buyer by warranting title against ALL defects, even those before the seller's ownership?", options: ["Quitclaim deed","Special warranty deed","Bargain and sale deed","General warranty deed"], answer: 3, explanation: "A general warranty deed warrants title against all defects regardless of when they arose — even before the seller owned the property. It provides the most protection and is most commonly used in residential sales." },
{ category: "Transfer of Title", question: "A quitclaim deed is most commonly used to:", options: ["Transfer property between strangers in an arm's length sale","Warrant title against all prior defects","Clear a title defect or transfer between family members","Convey property as part of a foreclosure sale"], answer: 2, explanation: "A quitclaim deed conveys whatever interest the grantor has with no warranties. It is commonly used to clear title clouds, transfer property between family members, or correct errors in a prior deed." },
{ category: "Transfer of Title", question: "For a deed to be valid between the parties, which of the following is NOT required?", options: ["Grantor with legal capacity","Legal description of the property","Recording at the county recorder's office","Delivery and acceptance"], answer: 2, explanation: "Recording is not required for a deed to be valid between the buyer and seller. However, recording is essential to protect against third-party claims and give constructive notice to the world." },
{ category: "Transfer of Title", question: "An investor sells a rental property and reinvests the proceeds into another investment property within the required timeframes to defer capital gains taxes. This is called a:", options: ["Short sale","1031 exchange","Sale-leaseback","Reverse exchange"], answer: 1, explanation: "A 1031 exchange allows an investor to defer capital gains taxes by reinvesting in like-kind property. The replacement property must be identified within 45 days and the transaction must close within 180 days." },
{ category: "Transfer of Title", question: "A lender's title insurance policy protects:", options: ["The buyer against title defects","The seller against undisclosed liens","The lender against losses from pre-existing title defects","Both the buyer and lender equally"], answer: 2, explanation: "A lender's (mortgagee's) title insurance policy protects only the lender against losses from title defects that existed before the policy was issued. The buyer needs a separate owner's policy for their own protection." },
{ category: "Transfer of Title", question: "Under TRID rules, the Closing Disclosure must be provided to the buyer at least how many business days before closing?", options: ["1 business day","3 business days","5 business days","7 business days"], answer: 1, explanation: "Under TRID (TILA-RESPA Integrated Disclosure) rules, the Closing Disclosure must be provided at least 3 business days before closing. This gives buyers time to review final loan terms." },
{ category: "Environmental", question: "The EPA action level for radon gas in a building is:", options: ["1 pCi/L","2 pCi/L","4 pCi/L","10 pCi/L"], answer: 2, explanation: "The EPA recommends taking action to reduce radon when levels reach 4 picocuries per liter (pCi/L) or higher. Radon is the second leading cause of lung cancer in the United States." },
{ category: "Environmental", question: "A federal law holds current and former property owners liable for hazardous waste cleanup costs even if they did not cause the contamination. This law is:", options: ["RESPA","CERCLA (Superfund)","FIRPTA","UETA"], answer: 1, explanation: "CERCLA (Comprehensive Environmental Response, Compensation, and Liability Act), known as Superfund, imposes strict liability for cleanup costs on current owners, past owners, and those who disposed of hazardous substances — regardless of fault." },
{ category: "Environmental", question: "Asbestos that is intact, undisturbed, and in good condition is generally:", options: ["Always immediately removed","Left in place and monitored","Automatically disclosed as a defect requiring price reduction","Encapsulated with lead paint"], answer: 1, explanation: "Non-friable asbestos that is in good condition is often left in place rather than disturbed. Removal is only required when asbestos is deteriorating or will be disturbed by renovation. Disturbing asbestos releases dangerous fibers." },
{ category: "Environmental", question: "A Phase I Environmental Assessment does which of the following?", options: ["Tests soil and groundwater for contamination","Reviews historical records and conducts a site inspection with no testing","Removes identified contaminants","Certifies a property as environmentally clean"], answer: 1, explanation: "A Phase I Environmental Assessment reviews historical records and performs a visual site inspection to identify recognized environmental conditions (RECs). It does NOT include physical testing of soil or groundwater." },
{ category: "Environmental", question: "Federal law requires disclosure of lead-based paint for homes built before:", options: ["1960","1968","1978","1985"], answer: 2, explanation: "The Residential Lead-Based Paint Hazard Reduction Act requires disclosure for homes built before 1978, when lead-based paint was banned for residential use. The disclosure must be given before the buyer is obligated under the contract." },
{ category: "Antitrust", question: "Two competing brokers agree that one will handle buyers north of Main Street while the other handles buyers south of Main Street. This is:", options: ["Legal if both brokers agree in writing","Illegal market allocation","Legal as long as both charge different commissions","A required practice under MLS rules"], answer: 1, explanation: "Market allocation — competitors agreeing to divide up clients, territories, or product types — is a per se violation of the Sherman Antitrust Act. It eliminates competition and is illegal regardless of how it is structured." },
{ category: "Antitrust", question: "A group of brokers agrees to stop showing listings from a discount brokerage. This is called:", options: ["Price fixing","A tie-in arrangement","A group boycott (concerted refusal to deal)","Market allocation"], answer: 2, explanation: "A group boycott (concerted refusal to deal) is an agreement between competitors to refuse to work with a specific company or individual. It is a per se violation of antitrust law." },
{ category: "Antitrust", question: "Which antitrust violation involves requiring a buyer to use a specific service provider as a condition of the real estate transaction?", options: ["Price fixing","Market allocation","Group boycott","Tie-in arrangement"], answer: 3, explanation: "A tie-in arrangement requires the purchase of one product or service as a condition of buying another. Requiring a buyer to use a specific title company, lender, or inspector as a condition of the sale is an illegal tie-in." },
{ category: "Antitrust", question: "An agent from one firm calls an agent from a competing firm to discuss the going commission rates in the area. This is:", options: ["Legal networking","Standard industry practice","A potential antitrust violation","Required for MLS participation"], answer: 2, explanation: "Discussing commission rates with competing brokers — even casually — is a potential price-fixing violation under antitrust law. Each firm must set its own fees independently without coordination with competitors." },
{ category: "Property Management", question: "Net Operating Income is calculated as:", options: ["Gross rents minus mortgage payments","Potential gross income minus all expenses including debt service","Effective gross income minus operating expenses (excluding debt service)","Total rental income plus vacancy allowance"], answer: 2, explanation: "NOI = Effective Gross Income minus Operating Expenses. Critically, mortgage payments (debt service) are NOT included in operating expenses for this calculation. NOI is used as the basis for the income approach to value." },
{ category: "Property Management", question: "A commercial tenant pays base rent plus property taxes, insurance, AND maintenance costs. This is a:", options: ["Gross lease","Single net (N) lease","Double net (NN) lease","Triple net (NNN) lease"], answer: 3, explanation: "A Triple Net (NNN) lease requires the tenant to pay base rent plus all three nets: property taxes, building insurance, and maintenance costs. The landlord receives truly net income with minimal management responsibility." },
{ category: "Property Management", question: "A landlord changes the locks on a tenant's apartment while the tenant is at work to force them out. This is called:", options: ["Legal repossession","Self-help eviction — illegal in most states","Constructive eviction","Unlawful detainer"], answer: 1, explanation: "Self-help eviction — taking physical action to remove a tenant such as changing locks, removing belongings, or shutting off utilities — is illegal in most states. Landlords must follow the formal eviction process through the courts." },
{ category: "Property Management", question: "A property generates $30,000 NOI and is valued at $400,000. What is the cap rate?", options: ["5.5%","7.5%","10%","13.3%"], answer: 1, explanation: "Cap Rate = NOI / Property Value = $30,000 / $400,000 = 0.075 = 7.5%. A higher cap rate indicates a higher return but also higher perceived risk. Lower cap rates are typical in more stable, desirable markets." },
{ category: "Mortgage Fraud", question: "A person applies for a mortgage on behalf of someone else who could not qualify. This is called:", options: ["Loan assumption","Predatory lending","A straw buyer arrangement — mortgage fraud","Seller financing"], answer: 2, explanation: "Using a straw buyer — someone who applies for a mortgage while concealing the true borrower's identity — is mortgage fraud. Both the straw buyer and the actual buyer can face criminal charges." },
{ category: "Mortgage Fraud", question: "A lender repeatedly convinces a borrower to refinance their loan, generating fees each time while the borrower's equity decreases. This is:", options: ["Loan flipping — a predatory lending practice","A legal marketing strategy","A standard refinance program","An assumable loan arrangement"], answer: 0, explanation: "Loan flipping is a predatory practice where lenders repeatedly refinance borrowers, collecting fees while eroding the borrower's equity. Each refinance may slightly lower the rate but the fees and extended term leave the borrower worse off." },
{ category: "Subdivisions", question: "A developer divides 50 acres into residential lots. Before individual lots can be sold, the developer must:", options: ["Obtain a general warranty deed for each lot","Record a plat map with the appropriate government authority","Complete all improvements before any sales","Obtain approval from the state banking commission"], answer: 1, explanation: "Before lots in a subdivision can be legally sold, the developer must have the subdivision plat approved and recorded with the appropriate local government authority. The recorded plat then provides the legal descriptions for individual lots." },
{ category: "Subdivisions", question: "A developer of a 150-lot interstate subdivision is required to provide buyers a Property Report under:", options: ["RESPA","CERCLA","The Interstate Land Sales Full Disclosure Act","The Sherman Antitrust Act"], answer: 2, explanation: "The Interstate Land Sales Full Disclosure Act requires developers selling 100 or more lots across state lines to register with the CFPB and provide buyers a Property Report at least 3 days before signing any purchase agreement." },
{ category: "Commercial", question: "Which formula correctly calculates a property's Capitalization Rate?", options: ["NOI divided by purchase price","Gross rent divided by sales price","Effective gross income divided by debt service","Sales price divided by monthly rent"], answer: 0, explanation: "Cap Rate = Net Operating Income (NOI) / Property Value. It is used to compare income-producing properties and estimate value. If you know the NOI and the cap rate, you can calculate value: Value = NOI / Cap Rate." },
{ category: "Commercial", question: "In a retail lease, the tenant pays a base rent of $2,000/month plus 5% of all gross sales over $500,000 annually. This is a:", options: ["Gross lease","Triple net lease","Percentage lease","Ground lease"], answer: 2, explanation: "A percentage lease requires the tenant to pay a base rent plus a percentage of gross sales above a specified threshold (the breakpoint). It is most commonly used in retail settings and shopping malls." },
{ category: "Technology", question: "Electronic signatures on real estate contracts are legally binding under which federal law?", options: ["RESPA","The E-SIGN Act","CERCLA","The Sherman Antitrust Act"], answer: 1, explanation: "The Electronic Signatures in Global and National Commerce Act (E-SIGN Act) establishes that electronic signatures are legally binding. Both parties must consent to using electronic signatures in the transaction." },
]
 
const FORMULAS = [
{ name: "Commission", formula: "Sale Price x Commission Rate", example: "$300,000 x 6% = $18,000", color: "blue" },
{ name: "Loan-to-Value (LTV)", formula: "Loan Amount / Appraised Value x 100", example: "$240,000 / $300,000 x 100 = 80%", color: "emerald" },
{ name: "Down Payment", formula: "Purchase Price x Down Payment %", example: "$300,000 x 20% = $60,000", color: "red" },
{ name: "Equity", formula: "Market Value - Outstanding Loan Balance", example: "$350,000 - $220,000 = $130,000", color: "emerald" },
{ name: "Gross Rent Multiplier (GRM)", formula: "Property Price / Monthly Gross Rent", example: "$300,000 / $2,000 = 150", color: "blue" },
{ name: "Cap Rate", formula: "NOI / Property Value x 100", example: "$18,000 / $300,000 x 100 = 6%", color: "emerald" },
{ name: "Value (Income Approach)", formula: "NOI / Cap Rate", example: "$18,000 / 0.06 = $300,000", color: "red" },
{ name: "Net Operating Income (NOI)", formula: "Gross Income - Vacancy Loss - Operating Expenses", example: "$30,000 - $2,000 - $10,000 = $18,000", color: "blue" },
{ name: "Monthly Interest", formula: "(Loan Balance x Annual Rate) / 12", example: "($200,000 x 6%) / 12 = $1,000/mo", color: "red" },
{ name: "Depreciation (Residential)", formula: "Building Value / 27.5 years", example: "$275,000 / 27.5 = $10,000/yr", color: "blue" },
{ name: "Depreciation (Commercial)", formula: "Building Value / 39 years", example: "$390,000 / 39 = $10,000/yr", color: "emerald" },
{ name: "Property Tax", formula: "Assessed Value x Tax Rate", example: "$200,000 x 1.5% = $3,000/yr", color: "red" },
{ name: "Proration (Daily Rate)", formula: "Annual Amount / 365 days", example: "$3,650 / 365 = $10/day", color: "blue" },
{ name: "Break-Even Ratio", formula: "(Expenses + Debt Service) / Gross Income", example: "($12,000 + $15,000) / $30,000 = 90%", color: "emerald" },
]
 
const ACHIEVEMENTS = [
{ id: "first_card", name: "First Flip!", icon: "🃏", desc: "Study your first flashcard", xp: 10 },
{ id: "cards_10", name: "Flashcard Fan", icon: "📚", desc: "Study 10 flashcards", xp: 20 },
{ id: "cards_30", name: "Card Shark", icon: "🦈", desc: "Study 30 flashcards", xp: 40 },
{ id: "quiz_start", name: "Quiz Taker", icon: "📝", desc: "Complete your first quiz", xp: 25 },
{ id: "perfect_quiz", name: "Perfect Score!", icon: "🌟", desc: "Get 100% on a quiz", xp: 50 },
{ id: "quiz_50", name: "Half Century", icon: "🎯", desc: "Answer 50 quiz questions", xp: 35 },
{ id: "streak_3", name: "On Fire!", icon: "🔥", desc: "3-day streak", xp: 30 },
{ id: "formula_master", name: "Math Wizard", icon: "🧮", desc: "View all formulas", xp: 20 },
]
 
const QUIZ_CATEGORIES = ["All", ...Array.from(new Set(QUIZ_QUESTIONS.map(q => q.category)))]
const CARD_CATEGORIES = ["All", ...Array.from(new Set(FLASHCARDS.map(c => c.category)))]
 
export default function App() {
const [tab, setTab] = useState("dashboard")
const [xp, setXp] = useState(() => parseInt(localStorage.getItem("xp") || "0"))
const [streak, setStreak] = useState(() => parseInt(localStorage.getItem("streak") || "0"))
const [achievements, setAchievements] = useState(() => JSON.parse(localStorage.getItem("achievements") || "[]"))
const [newAchievement, setNewAchievement] = useState(null)
const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "")
const [isUnlocked, setIsUnlocked] = useState(() => localStorage.getItem("isUnlocked") === "true")
const [cardsStudied, setCardsStudied] = useState(() => parseInt(localStorage.getItem("cardsStudied") || "0"))
const [formulasViewed, setFormulasViewed] = useState(() => parseInt(localStorage.getItem("formulasViewed") || "0"))
const [totalAnswered, setTotalAnswered] = useState(() => parseInt(localStorage.getItem("totalAnswered") || "0"))
 
useEffect(() => {
localStorage.setItem("xp", xp)
localStorage.setItem("streak", streak)
localStorage.setItem("achievements", JSON.stringify(achievements))
localStorage.setItem("cardsStudied", cardsStudied)
localStorage.setItem("formulasViewed", formulasViewed)
localStorage.setItem("totalAnswered", totalAnswered)
localStorage.setItem("userName", userName)
localStorage.setItem("isUnlocked", isUnlocked)
}, [xp, streak, achievements, cardsStudied, formulasViewed, totalAnswered, userName, isUnlocked])
 
const addXP = (amount) => setXp(prev => prev + amount)
 
const unlockAchievement = (id) => {
if (!achievements.includes(id)) {
const ach = ACHIEVEMENTS.find(a => a.id === id)
if (!ach) return
setAchievements(prev => [...prev, id])
addXP(ach.xp)
setNewAchievement(ach)
setTimeout(() => setNewAchievement(null), 3000)
}
}
 
const level = Math.floor(xp / 100) + 1
const xpForLevel = xp % 100
 
const navItems = [
{ id: "dashboard", icon: <Home size={16} />, label: "Home" },
{ id: "flashcards", icon: <Zap size={16} />, label: "Flashcards" },
{ id: "quiz", icon: <Target size={16} />, label: "Quiz" },
{ id: "formulas", icon: <Calculator size={16} />, label: "Formulas" },
{ id: "terms", icon: <List size={16} />, label: "Key Terms" },
{ id: "tutor", icon: <Bot size={16} />, label: "AI Tutor" },
{ id: "math", icon: <Calculator size={16} />, label: "Math" },
]
 
const CORRECT_PASSWORD = "hayyly2025"
 
const handleUnlock = (name, password) => {
if (password === CORRECT_PASSWORD && name.trim()) {
setUserName(name.trim())
setIsUnlocked(true)
} else {
return false
}
return true
}
 
if (!isUnlocked) return <PasswordGate onUnlock={handleUnlock} />
 
return (
<div className="app">
<div className="notebook-bg" />
<div className="dark-overlay" />
<div className="orb orb-blue" />
<div className="orb orb-emerald" />
 
{newAchievement && (
<div className="achievement-toast">
<span>{newAchievement.icon}</span>
<div><strong>Achievement Unlocked!</strong><p>{newAchievement.name} +{newAchievement.xp} XP</p></div>
</div>
)}
 
<header className="header">
<div className="logo">
<div className="logo-icon">HY</div>
<div>
<div className="logo-name">Hayyly</div>
<div className="logo-sub">Pass Your Exam</div>
</div>
</div>
<div className="header-stats">
<div className="stat-pill">⚡ {xp} XP</div>
<div className="stat-pill">🔥 {streak} streak</div>
<div className="stat-pill emerald">🏆 Level {level}</div>
</div>
</header>
 
<div className="xp-bar-container">
<div className="xp-bar" style={{ width: `${xpForLevel}%` }} />
</div>
 
<nav className="nav">
{navItems.map(t => (
<button key={t.id} className={`nav-btn ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id)}>
{t.icon}<span>{t.label}</span>
</button>
))}
</nav>
 
<main className="main">
{tab === "dashboard" && <Dashboard xp={xp} streak={streak} level={level} xpForLevel={xpForLevel} achievements={achievements} cardsStudied={cardsStudied} totalAnswered={totalAnswered} setTab={setTab} name={userName} />}
{tab === "flashcards" && <Flashcards addXP={addXP} unlockAchievement={unlockAchievement} cardsStudied={cardsStudied} setCardsStudied={setCardsStudied} />}
{tab === "quiz" && <Quiz addXP={addXP} unlockAchievement={unlockAchievement} totalAnswered={totalAnswered} setTotalAnswered={setTotalAnswered} />}
{tab === "formulas" && <Formulas unlockAchievement={unlockAchievement} formulasViewed={formulasViewed} setFormulasViewed={setFormulasViewed} />}
{tab === "terms" && <KeyTerms />}
{tab === "tutor" && <AITutor />}
{tab === "math" && <MathPractice addXP={addXP} />}
</main>
</div>
)
}
 
function Dashboard({ xp, streak, level, xpForLevel, achievements, cardsStudied, totalAnswered, setTab, name }) {
return (
<div className="dashboard">
<div className="welcome-card">
<div className="welcome-badge"><span className="pulse-dot" />Study Session Active</div>
<h1 className="gradient-text">Welcome back, {name}!</h1>
<p className="welcome-sub">You are on your way to passing that real estate exam. Keep going!</p>
<button className="btn btn-gradient" style={{ marginTop: 16 }} onClick={() => setTab("flashcards")}>Start Studying</button>
</div>
 
<div className="stats-grid">
<div className="stat-card blue"><div className="stat-icon-wrap">⚡</div><div className="stat-val">{xp}</div><div className="stat-lbl">Total XP</div></div>
<div className="stat-card emerald"><div className="stat-icon-wrap">🏆</div><div className="stat-val">{level}</div><div className="stat-lbl">Level</div></div>
<div className="stat-card red"><div className="stat-icon-wrap">🔥</div><div className="stat-val">{streak}</div><div className="stat-lbl">Day Streak</div></div>
<div className="stat-card blue"><div className="stat-icon-wrap">🃏</div><div className="stat-val">{cardsStudied}</div><div className="stat-lbl">Cards Studied</div></div>
</div>
 
<div className="dark-card">
<div className="card-header"><span className="card-title">Level Progress</span><span className="emerald-text">{xpForLevel}/100 XP</span></div>
<div className="level-bar"><div className="level-fill" style={{ width: `${xpForLevel}%` }} /></div>
<p className="muted-text">Level {level} to Level {level + 1}</p>
</div>
 
<div className="dark-card">
<div className="card-header"><span className="card-title">Content Library</span></div>
<div className="stats-grid" style={{ marginTop: 8 }}>
<div className="stat-card"><div className="stat-val" style={{ fontSize: "1.2rem" }}>{FLASHCARDS.length}</div><div className="stat-lbl">Flashcards</div></div>
<div className="stat-card"><div className="stat-val" style={{ fontSize: "1.2rem" }}>{QUIZ_QUESTIONS.length}</div><div className="stat-lbl">Quiz Qs</div></div>
<div className="stat-card"><div className="stat-val" style={{ fontSize: "1.2rem" }}>{FORMULAS.length}</div><div className="stat-lbl">Formulas</div></div>
<div className="stat-card"><div className="stat-val" style={{ fontSize: "1.2rem" }}>{totalAnswered}</div><div className="stat-lbl">Answered</div></div>
</div>
</div>
 
<div className="dark-card">
<div className="card-title mb16">Achievements</div>
<div className="achievements-grid">
{ACHIEVEMENTS.map(ach => (
<div key={ach.id} className={"ach-card " + (achievements.includes(ach.id) ? "unlocked" : "locked")}>
<div className="ach-icon">{achievements.includes(ach.id) ? ach.icon : "🔒"}</div>
<div className="ach-name">{ach.name}</div>
<div className="ach-desc">{ach.desc}</div>
<div className="ach-xp">+{ach.xp} XP</div>
</div>
))}
</div>
</div>
</div>
)
}
 
function Flashcards({ addXP, unlockAchievement, cardsStudied, setCardsStudied }) {
const [catFilter, setCatFilter] = useState("All")
const [index, setIndex] = useState(0)
const [flipped, setFlipped] = useState(false)
const [studied, setStudied] = useState(new Set())
 
const filtered = catFilter === "All" ? FLASHCARDS : FLASHCARDS.filter(c => c.category === catFilter)
const card = filtered[index] || filtered[0]
 
const handleFlip = () => {
if (!flipped) {
setFlipped(true)
if (!studied.has(card.id)) {
setStudied(prev => new Set([...prev, card.id]))
addXP(5)
const n = cardsStudied + 1
setCardsStudied(n)
if (n === 1) unlockAchievement("first_card")
if (n >= 10) unlockAchievement("cards_10")
if (n >= 30) unlockAchievement("cards_30")
}
} else setFlipped(false)
}
 
const next = () => { setIndex((index + 1) % filtered.length); setFlipped(false) }
const prev = () => { setIndex((index - 1 + filtered.length) % filtered.length); setFlipped(false) }
const handleCat = (cat) => { setCatFilter(cat); setIndex(0); setFlipped(false) }
 
return (
<div className="section">
<div className="section-header">
<h2 className="gradient-text">Smart Flashcards</h2>
<p className="muted-text">{studied.size}/{FLASHCARDS.length} studied • +5 XP per new card</p>
</div>
<div className="category-pills">
{CARD_CATEGORIES.map(cat => (
<button key={cat} className={"cat-pill " + (catFilter === cat ? "active" : "")} onClick={() => handleCat(cat)}>{cat}</button>
))}
</div>
<p className="muted-text" style={{ marginBottom: 10 }}>{filtered.length} cards</p>
<div className={"flip-card " + (flipped ? "flipped" : "")} onClick={handleFlip}>
<div className="flip-inner">
<div className="flip-front">
<div className="card-badge blue-badge">{card.category}</div>
<div className="card-term">{card.term}</div>
<div className="muted-text mt8">Tap to reveal definition</div>
</div>
<div className="flip-back">
<div className="card-badge emerald-badge">DEFINITION</div>
<div className="card-def">{card.definition}</div>
</div>
</div>
</div>
<div className="card-controls">
<button className="btn btn-ghost" onClick={prev}>Prev</button>
<span className="muted-text">{index + 1} / {filtered.length}</span>
<button className="btn btn-gradient" onClick={next}>Next</button>
</div>
</div>
)
}
 
function Quiz({ addXP, unlockAchievement, totalAnswered, setTotalAnswered }) {
const [catFilter, setCatFilter] = useState("All")
const [pool, setPool] = useState([])
const [qIndex, setQIndex] = useState(0)
const [selected, setSelected] = useState(null)
const [score, setScore] = useState(0)
const [done, setDone] = useState(false)
const [started, setStarted] = useState(false)
 
const buildPool = (cat) => {
const base = cat === "All" ? QUIZ_QUESTIONS : QUIZ_QUESTIONS.filter(q => q.category === cat)
return [...base].sort(() => Math.random() - 0.5)
}
 
const startQuiz = () => {
setPool(buildPool(catFilter))
setQIndex(0); setSelected(null); setScore(0); setDone(false); setStarted(true)
}
 
const q = pool[qIndex]
 
const handleAnswer = (i) => {
if (selected !== null) return
setSelected(i)
if (i === q.answer) { addXP(10); setScore(p => p + 1) }
const next = totalAnswered + 1
setTotalAnswered(next)
if (next >= 50) unlockAchievement("quiz_50")
}
 
const handleNext = () => {
if (qIndex + 1 >= pool.length) {
setDone(true)
unlockAchievement("quiz_start")
if (score + (selected === q.answer ? 1 : 0) === pool.length) unlockAchievement("perfect_quiz")
} else {
setQIndex(qIndex + 1); setSelected(null)
}
}
 
if (!started) return (
<div className="section center-section">
<h2 className="gradient-text">Practice Exam</h2>
<p className="muted-text">{QUIZ_QUESTIONS.length} questions total • +10 XP per correct answer</p>
<div className="category-pills" style={{ justifyContent: "center" }}>
{QUIZ_CATEGORIES.map(cat => (
<button key={cat} className={"cat-pill " + (catFilter === cat ? "active" : "")} onClick={() => setCatFilter(cat)}>{cat}</button>
))}
</div>
<p className="muted-text">
{catFilter === "All" ? QUIZ_QUESTIONS.length : QUIZ_QUESTIONS.filter(q => q.category === catFilter).length} questions in this set
</p>
<button className="btn btn-gradient btn-big" onClick={startQuiz}>Start Quiz</button>
</div>
)
 
if (done) {
const pct = Math.round((score / pool.length) * 100)
return (
<div className="section center-section">
<div className="score-ring"><div className="score-pct">{pct}%</div><div className="score-lbl">Score</div></div>
<h2 className="gradient-text">{pct >= 80 ? "Outstanding!" : pct >= 60 ? "Nice Work!" : "Keep Studying!"}</h2>
<p className="muted-text">{score}/{pool.length} correct • {score * 10} XP earned</p>
<div style={{ display: "flex", gap: 10 }}>
<button className="btn btn-gradient" onClick={startQuiz}>Retry</button>
<button className="btn btn-ghost" onClick={() => setStarted(false)}>Change Category</button>
</div>
</div>
)
}
 
return (
<div className="section">
<div className="quiz-header-row">
<span className="muted-text">Question {qIndex + 1}/{pool.length} • <span style={{ color: "#3b82f6" }}>{q.category}</span></span>
<span className="emerald-text font-bold">Score: {score}</span>
</div>
<div className="progress-bar"><div className="progress-fill" style={{ width: `${(qIndex / pool.length) * 100}%` }} /></div>
<div className="dark-card">
<h3 className="question-text">{q.question}</h3>
<div className="options">
{q.options.map((opt, i) => (
<button key={i} className={"option " + (selected !== null ? (i === q.answer ? "correct" : i === selected ? "wrong" : "") : "")} onClick={() => handleAnswer(i)}>
<span className="option-letter">{["A","B","C","D"][i]}</span>{opt}
</button>
))}
</div>
{selected !== null && (
<div className={"explanation " + (selected === q.answer ? "correct-exp" : "wrong-exp")}>
<strong>{selected === q.answer ? "Correct!" : "Not quite!"}</strong>
<p>{q.explanation}</p>
</div>
)}
</div>
{selected !== null && (
<button className="btn btn-gradient" onClick={handleNext}>
{qIndex + 1 >= pool.length ? "See Results" : "Next Question"}
</button>
)}
</div>
)
}
 
function Formulas({ unlockAchievement, formulasViewed, setFormulasViewed }) {
const [viewed, setViewed] = useState(new Set())
const handleView = (i) => {
if (!viewed.has(i)) {
const n = new Set([...viewed, i])
setViewed(n)
const c = formulasViewed + 1
setFormulasViewed(c)
if (c >= FORMULAS.length) unlockAchievement("formula_master")
}
}
return (
<div className="section">
<div className="section-header">
<h2 className="gradient-text">Formulas</h2>
<p className="muted-text">Tap to expand • {viewed.size}/{FORMULAS.length} reviewed</p>
</div>
<div className="formulas-grid">
{FORMULAS.map((f, i) => <FormulaCard key={i} formula={f} onView={() => handleView(i)} />)}
</div>
</div>
)
}
 
function FormulaCard({ formula, onView }) {
const [open, setOpen] = useState(false)
return (
<div className={"formula-card " + formula.color + (open ? " open" : "")} onClick={() => { setOpen(!open); if (!open) onView() }}>
<div className="formula-name">{formula.name}</div>
{open && <div className="formula-body"><div className="formula-eq">{formula.formula}</div><div className="formula-ex">{formula.example}</div></div>}
</div>
)
}
 
function KeyTerms() {
const [search, setSearch] = useState("")
const [catFilter, setCatFilter] = useState("All")
 
const filtered = FLASHCARDS.filter(c => {
const matchCat = catFilter === "All" || c.category === catFilter
const matchText = c.term.toLowerCase().includes(search.toLowerCase()) || c.definition.toLowerCase().includes(search.toLowerCase())
return matchCat && matchText
})
 
return (
<div className="section">
<div className="section-header">
<h2 className="gradient-text">Key Terms Glossary</h2>
<p className="muted-text">{FLASHCARDS.length} terms across {CARD_CATEGORIES.length - 1} categories</p>
</div>
<input className="search-input" placeholder="Search terms or definitions..." value={search} onChange={e => setSearch(e.target.value)} />
<div className="category-pills" style={{ marginTop: 10 }}>
{CARD_CATEGORIES.map(cat => (
<button key={cat} className={"cat-pill " + (catFilter === cat ? "active" : "")} onClick={() => setCatFilter(cat)}>{cat}</button>
))}
</div>
<p className="muted-text" style={{ marginBottom: 6 }}>{filtered.length} results</p>
<div className="terms-list">
{filtered.map(card => (
<div key={card.id} className="term-item">
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
<div className="term-name">{card.term}</div>
<span style={{ fontSize: "0.65rem", background: "#27272a", color: "#71717a", padding: "2px 8px", borderRadius: 10 }}>{card.category}</span>
</div>
<div className="term-def">{card.definition}</div>
</div>
))}
</div>
</div>
)
}
 
function AITutor() {
const messagesEndRef = useRef(null)
const [messages, setMessages] = useState([
{ role: "assistant", text: "Hey! I am your real estate exam tutor. I am grounded to a verified knowledge base — I only answer from exam-tested real estate material and will not make things up. Ask me anything: concepts, formulas, laws, or how to remember tricky topics!" }
])
const [input, setInput] = useState("")
const [loading, setLoading] = useState(false)
 
 
useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }) }, [messages, loading])
 
 
 
const QUICK_PROMPTS = [
"What are the 7 Fair Housing protected classes?",
"Explain Joint Tenancy vs Tenancy in Common",
"How do I calculate a cap rate?",
"What does OLD CAR stand for?",
"Explain the 3 approaches to appraisal",
"What is blockbusting vs steering?",
]
 
const send = async (overrideText) => {
const msg = overrideText || input.trim()
if (!msg || loading) return
setInput("")
setMessages(p => [...p, { role: "user", text: msg }])
setLoading(true)
 
const groundedPrompt = "You are a real estate exam prep tutor. You must ONLY answer using the knowledge base provided below. Do not use any outside knowledge. If a question is not covered, say: That topic is not in my knowledge base — try asking about a related topic.\n\nBe concise, clear, and exam-focused. Use bullet points for lists. Mention memory tricks when helpful.\n\nKNOWLEDGE BASE:\n" + KNOWLEDGE_BASE + "\n\nStudent question: " + msg
 
try {
const res = await fetch("/api/tutor", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({ prompt: groundedPrompt })
})
const data = await res.json()
const reply = data.text || "Something went wrong — please try again."
setMessages(p => [...p, { role: "assistant", text: reply }])
} catch {
setMessages(p => [...p, { role: "assistant", text: "Connection error. Please try again." }])
}
setLoading(false)
}
 
return (
<div className="section tutor-section">
<div className="tutor-header-row">
<h2 className="gradient-text">AI Tutor</h2>
 
</div>
<div className="quick-prompts">
{QUICK_PROMPTS.map((p, i) => (
<button key={i} className="quick-prompt-btn" onClick={() => send(p)}>{p}</button>
))}
</div>
<div className="messages">
{messages.map((m, i) => (
<div key={i} className={"message " + m.role}>
<div className="bubble">{m.text}</div>
</div>
))}
{loading && <div className="message assistant"><div className="bubble loading">Thinking...</div></div>}
<div ref={messagesEndRef} />
</div>
<div className="chat-row">
<input
className="chat-input"
placeholder="Ask anything about real estate..."
value={input}
onChange={e => setInput(e.target.value)}
onKeyDown={e => e.key === "Enter" && send()}
/>
<button className="btn btn-gradient" onClick={() => send()} disabled={loading}>Send</button>
</div>
</div>
)
}
 
const MATH_PROBLEMS = [
{
  id: 1, topic: "Commission",
  problem: "A home sells for $320,000. The total commission rate is 6%, split equally between the listing and buyer's broker. How much does the listing broker earn?",
  formula: "Commission = Sale Price × Rate. Then split in half.",
  steps: ["Total commission: $320,000 × 0.06 = $19,200", "Split equally: $19,200 ÷ 2 = $9,600", "Listing broker earns $9,600"],
  answer: "$9,600",
  options: ["$19,200", "$9,600", "$8,000", "$12,000"],
  correct: 1
},
{
  id: 2, topic: "Commission Split",
  problem: "A listing broker earns a $12,000 commission and pays 40% to the buyer's broker. How much does the listing broker keep?",
  formula: "Listing broker keeps = Total Commission × (1 - Cooperating %)",
  steps: ["Buyer's broker gets: $12,000 × 0.40 = $4,800", "Listing broker keeps: $12,000 - $4,800 = $7,200", "Or: $12,000 × 0.60 = $7,200"],
  answer: "$7,200",
  options: ["$4,800", "$6,000", "$7,200", "$8,400"],
  correct: 2
},
{
  id: 3, topic: "Loan-to-Value (LTV)",
  problem: "A buyer purchases a home for $275,000 and makes a 20% down payment. What is the loan-to-value ratio?",
  formula: "LTV = Loan Amount ÷ Appraised Value × 100",
  steps: ["Down payment: $275,000 × 0.20 = $55,000", "Loan amount: $275,000 - $55,000 = $220,000", "LTV: $220,000 ÷ $275,000 × 100 = 80%"],
  answer: "80%",
  options: ["20%", "75%", "80%", "85%"],
  correct: 2
},
{
  id: 4, topic: "Down Payment",
  problem: "A buyer is purchasing a $350,000 home with an FHA loan requiring a minimum 3.5% down payment. How much is the minimum down payment?",
  formula: "Down Payment = Purchase Price × Down Payment %",
  steps: ["Down payment: $350,000 × 0.035 = $12,250", "FHA minimum down = 3.5% for qualifying borrowers"],
  answer: "$12,250",
  options: ["$10,500", "$12,250", "$17,500", "$24,500"],
  correct: 1
},
{
  id: 5, topic: "Monthly Interest",
  problem: "A borrower has a $200,000 loan at 6% annual interest. What is the interest portion of the first monthly payment?",
  formula: "Monthly Interest = Loan Balance × (Annual Rate ÷ 12)",
  steps: ["Annual interest: $200,000 × 0.06 = $12,000", "Monthly interest: $12,000 ÷ 12 = $1,000"],
  answer: "$1,000",
  options: ["$1,200", "$1,000", "$833", "$600"],
  correct: 1
},
{
  id: 6, topic: "Discount Points",
  problem: "A buyer takes out a $180,000 mortgage. The lender charges 2 discount points. How much will the buyer pay in points?",
  formula: "1 point = 1% of the loan amount",
  steps: ["1 point = $180,000 × 0.01 = $1,800", "2 points = $1,800 × 2 = $3,600"],
  answer: "$3,600",
  options: ["$1,800", "$2,400", "$3,600", "$5,400"],
  correct: 2
},
{
  id: 7, topic: "Capitalization Rate",
  problem: "A commercial property has a Net Operating Income of $45,000 and is listed for $600,000. What is the cap rate?",
  formula: "Cap Rate = NOI ÷ Property Value × 100",
  steps: ["Cap Rate = $45,000 ÷ $600,000 = 0.075", "Cap Rate = 7.5%"],
  answer: "7.5%",
  options: ["6%", "7.5%", "8%", "9%"],
  correct: 1
},
{
  id: 8, topic: "Property Value from Cap Rate",
  problem: "A property generates an NOI of $36,000. Comparable properties in the area sell at a 6% cap rate. What is the estimated property value?",
  formula: "Value = NOI ÷ Cap Rate",
  steps: ["Value = $36,000 ÷ 0.06 = $600,000"],
  answer: "$600,000",
  options: ["$360,000", "$480,000", "$600,000", "$720,000"],
  correct: 2
},
{
  id: 9, topic: "Gross Rent Multiplier",
  problem: "A rental property sells for $240,000 and generates $2,000/month in gross rent. What is the GRM?",
  formula: "GRM = Sales Price ÷ Gross Monthly Rent",
  steps: ["GRM = $240,000 ÷ $2,000 = 120"],
  answer: "120",
  options: ["60", "100", "120", "150"],
  correct: 2
},
{
  id: 10, topic: "Proration — Property Taxes",
  problem: "Annual property taxes are $3,650. The closing date is March 31. The seller owes taxes for January 1 through March 31. How much does the seller owe at closing?",
  formula: "Daily rate = Annual Amount ÷ 365. Seller's share = Daily Rate × Days Owned",
  steps: ["Daily rate: $3,650 ÷ 365 = $10/day", "Days Jan 1 – Mar 31 = 90 days", "Seller owes: $10 × 90 = $900"],
  answer: "$900",
  options: ["$300", "$600", "$900", "$1,200"],
  correct: 2
},
{
  id: 11, topic: "Proration — Prepaid Rent",
  problem: "A tenant pays $1,200/month rent on the 1st. The closing is on the 10th. The buyer is entitled to the remaining rent for the month (21 days remaining in a 30-day month). How much rent does the seller credit the buyer?",
  formula: "Daily Rent = Monthly Rent ÷ Days in Month. Credit = Daily Rate × Remaining Days",
  steps: ["Daily rent: $1,200 ÷ 30 = $40/day", "Remaining days: 21", "Buyer credit: $40 × 21 = $840"],
  answer: "$840",
  options: ["$400", "$600", "$840", "$1,200"],
  correct: 2
},
{
  id: 12, topic: "Transfer Tax",
  problem: "A state charges a transfer tax of $1.10 per $1,000 of the sales price. A home sells for $350,000. How much is the transfer tax?",
  formula: "Transfer Tax = (Sales Price ÷ 1,000) × Tax Rate per $1,000",
  steps: ["$350,000 ÷ $1,000 = 350 units", "350 × $1.10 = $385"],
  answer: "$385",
  options: ["$350", "$385", "$3,850", "$3,500"],
  correct: 1
},
{
  id: 13, topic: "Seller's Net Proceeds",
  problem: "A home sells for $400,000. The seller has an outstanding mortgage of $210,000, pays a 6% commission, and has $3,500 in closing costs. What are the seller's net proceeds?",
  formula: "Net Proceeds = Sale Price - Mortgage - Commission - Closing Costs",
  steps: ["Commission: $400,000 × 0.06 = $24,000", "Net = $400,000 - $210,000 - $24,000 - $3,500 = $162,500"],
  answer: "$162,500",
  options: ["$166,000", "$162,500", "$158,000", "$174,500"],
  correct: 1
},
{
  id: 14, topic: "Area Calculation",
  problem: "A rectangular lot is 120 feet wide and 200 feet deep. What is the lot size in acres? (1 acre = 43,560 sq ft)",
  formula: "Area = Length × Width. Acres = Square Feet ÷ 43,560",
  steps: ["Area: 120 × 200 = 24,000 sq ft", "Acres: 24,000 ÷ 43,560 = 0.55 acres"],
  answer: "0.55 acres",
  options: ["0.45 acres", "0.55 acres", "0.65 acres", "1.1 acres"],
  correct: 1
},
{
  id: 15, topic: "Depreciation — Residential",
  problem: "A residential rental property has a building value of $275,000 (land is excluded). What is the annual straight-line depreciation for tax purposes?",
  formula: "Annual Depreciation = Building Value ÷ 27.5 years",
  steps: ["$275,000 ÷ 27.5 = $10,000 per year"],
  answer: "$10,000/year",
  options: ["$7,051", "$10,000", "$14,474", "$12,500"],
  correct: 1
},
{
  id: 16, topic: "Depreciation — Commercial",
  problem: "A commercial building has a value of $390,000. What is the annual straight-line depreciation?",
  formula: "Annual Depreciation = Building Value ÷ 39 years",
  steps: ["$390,000 ÷ 39 = $10,000 per year"],
  answer: "$10,000/year",
  options: ["$10,000", "$14,181", "$7,500", "$12,000"],
  correct: 0
},
{
  id: 17, topic: "Qualifying Buyer — DTI",
  problem: "A buyer earns $6,000/month gross income. The lender allows a maximum 28% front-end debt-to-income ratio for housing costs. What is the maximum monthly housing payment?",
  formula: "Max Payment = Gross Monthly Income × Front-End DTI %",
  steps: ["$6,000 × 0.28 = $1,680/month maximum housing payment"],
  answer: "$1,680",
  options: ["$1,200", "$1,500", "$1,680", "$1,800"],
  correct: 2
},
{
  id: 18, topic: "Equity",
  problem: "A homeowner's property is worth $425,000. They have an outstanding mortgage balance of $280,000. What is their equity?",
  formula: "Equity = Market Value - Outstanding Loan Balance",
  steps: ["Equity = $425,000 - $280,000 = $145,000"],
  answer: "$145,000",
  options: ["$145,000", "$165,000", "$280,000", "$425,000"],
  correct: 0
},
{
  id: 19, topic: "Commission — Agent Split",
  problem: "A property sells for $500,000 at 6% total commission. The listing broker and buyer's broker split it 50/50. The listing agent receives 60% of their broker's share. How much does the listing agent earn?",
  formula: "Work step by step: total → broker share → agent share",
  steps: ["Total commission: $500,000 × 0.06 = $30,000", "Listing broker share: $30,000 ÷ 2 = $15,000", "Listing agent: $15,000 × 0.60 = $9,000"],
  answer: "$9,000",
  options: ["$18,000", "$15,000", "$9,000", "$6,000"],
  correct: 2
},
{
  id: 20, topic: "NOI and Operating Expenses",
  problem: "A 10-unit apartment building generates $180,000 in annual gross rent. Vacancy is 5% and operating expenses are $72,000. What is the NOI?",
  formula: "EGI = PGI - Vacancy Loss. NOI = EGI - Operating Expenses",
  steps: ["Vacancy loss: $180,000 × 0.05 = $9,000", "EGI: $180,000 - $9,000 = $171,000", "NOI: $171,000 - $72,000 = $99,000"],
  answer: "$99,000",
  options: ["$108,000", "$99,000", "$90,000", "$72,000"],
  correct: 1
},
]
 
function MathPractice({ addXP }) {
const [mode, setMode] = useState("menu")
const [currentIdx, setCurrentIdx] = useState(0)
const [selected, setSelected] = useState(null)
const [showSolution, setShowSolution] = useState(false)
const [score, setScore] = useState(0)
const [answered, setAnswered] = useState(0)
const [topic, setTopic] = useState("All")
const [xpEarned, setXpEarned] = useState(0)
 
const topics = ["All", ...Array.from(new Set(MATH_PROBLEMS.map(p => p.topic)))]
const filtered = topic === "All" ? MATH_PROBLEMS : MATH_PROBLEMS.filter(p => p.topic === topic)
 
const problem = filtered[currentIdx % filtered.length]
 
const handleAnswer = (idx) => {
if (selected !== null) return
setSelected(idx)
setShowSolution(true)
setAnswered(a => a + 1)
if (idx === problem.correct) {
setScore(s => s + 1)
setXpEarned(x => x + 15)
addXP(15)
}
}
 
const next = () => {
setSelected(null)
setShowSolution(false)
setCurrentIdx(i => i + 1)
}
 
if (mode === "menu") return (
<div className="section">
<h2 className="gradient-text">Math Practice</h2>
<p className="muted-text mb16">Master every calculation the PSI exam tests. Each problem shows the formula and step-by-step solution.</p>
<div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
{topics.map(t => (
<button key={t} className={`quick-prompt-btn ${topic === t ? "active" : ""}`} onClick={() => setTopic(t)} style={{ fontSize: "0.8rem" }}>{t}</button>
))}
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
<div className="stat-card" style={{ cursor: "pointer" }} onClick={() => { setMode("practice"); setCurrentIdx(0); }}>
<div style={{ fontSize: "2rem", marginBottom: 8 }}>🧮</div>
<div style={{ fontWeight: 700, marginBottom: 4 }}>Practice Mode</div>
<div className="muted-text" style={{ fontSize: "0.85rem" }}>Work through problems one at a time with full solutions shown after each answer.</div>
</div>
<div className="stat-card" style={{ cursor: "pointer" }} onClick={() => { setMode("quiz"); setCurrentIdx(0); setScore(0); setAnswered(0); setXpEarned(0); }}>
<div style={{ fontSize: "2rem", marginBottom: 8 }}>🎯</div>
<div style={{ fontWeight: 700, marginBottom: 4 }}>Quiz Mode</div>
<div className="muted-text" style={{ fontSize: "0.85rem" }}>Test yourself with multiple choice. Track your score and earn XP for correct answers.</div>
</div>
<div className="stat-card" style={{ cursor: "pointer" }} onClick={() => setMode("formulas")}>
<div style={{ fontSize: "2rem", marginBottom: 8 }}>📐</div>
<div style={{ fontWeight: 700, marginBottom: 4 }}>Formula Sheet</div>
<div className="muted-text" style={{ fontSize: "0.85rem" }}>Quick reference for all real estate math formulas. Review before test day.</div>
</div>
</div>
<p className="muted-text" style={{ fontSize: "0.8rem" }}>{filtered.length} problems {topic !== "All" ? `in ${topic}` : "across all topics"} · 15 XP per correct answer</p>
</div>
)
 
if (mode === "formulas") return (
<div className="section">
<button className="btn-ghost-sm" onClick={() => setMode("menu")} style={{ marginBottom: 16 }}>← Back</button>
<h2 className="gradient-text">Math Formula Sheet</h2>
<div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
{[
{ name: "Commission", f: "Sale Price × Rate", ex: "$300,000 × 6% = $18,000" },
{ name: "LTV Ratio", f: "Loan Amount ÷ Appraised Value × 100", ex: "$220,000 ÷ $275,000 = 80%" },
{ name: "Down Payment", f: "Purchase Price × Down Payment %", ex: "$300,000 × 20% = $60,000" },
{ name: "Monthly Interest", f: "Loan Balance × (Annual Rate ÷ 12)", ex: "$200,000 × (6% ÷ 12) = $1,000" },
{ name: "Discount Points", f: "1 point = 1% of loan amount", ex: "2 pts on $200,000 = $4,000" },
{ name: "Cap Rate", f: "NOI ÷ Property Value × 100", ex: "$30,000 ÷ $400,000 = 7.5%" },
{ name: "Property Value", f: "NOI ÷ Cap Rate", ex: "$30,000 ÷ 0.075 = $400,000" },
{ name: "GRM", f: "Sales Price ÷ Gross Monthly Rent", ex: "$240,000 ÷ $2,000 = 120" },
{ name: "NOI", f: "EGI − Operating Expenses (no mortgage)", ex: "$171,000 − $72,000 = $99,000" },
{ name: "EGI", f: "PGI − Vacancy & Credit Loss", ex: "$180,000 − $9,000 = $171,000" },
{ name: "Equity", f: "Market Value − Loan Balance", ex: "$425,000 − $280,000 = $145,000" },
{ name: "Proration (daily)", f: "Annual Amount ÷ 365 × Days", ex: "$3,650 ÷ 365 = $10/day" },
{ name: "Transfer Tax", f: "(Sales Price ÷ 1,000) × Rate", ex: "($350,000 ÷ 1,000) × $1.10 = $385" },
{ name: "Seller Net Proceeds", f: "Price − Mortgage − Commission − Costs", ex: "$400k − $210k − $24k − $3.5k = $162.5k" },
{ name: "Residential Depreciation", f: "Building Value ÷ 27.5 years", ex: "$275,000 ÷ 27.5 = $10,000/yr" },
{ name: "Commercial Depreciation", f: "Building Value ÷ 39 years", ex: "$390,000 ÷ 39 = $10,000/yr" },
{ name: "Area (sq ft to acres)", f: "Square Feet ÷ 43,560", ex: "24,000 ÷ 43,560 = 0.55 acres" },
{ name: "Max Housing Payment", f: "Gross Income × Front-End DTI %", ex: "$6,000 × 28% = $1,680" },
].map((f, i) => (
<div key={i} className="formula-card">
<div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: 4 }}>{f.name}</div>
<div style={{ fontFamily: "monospace", color: "var(--color-blue)", fontSize: "0.85rem", marginBottom: 4 }}>{f.f}</div>
<div className="muted-text" style={{ fontSize: "0.8rem" }}>Example: {f.ex}</div>
</div>
))}
</div>
</div>
)
 
return (
<div className="section">
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
<button className="btn-ghost-sm" onClick={() => { setMode("menu"); setCurrentIdx(0); setSelected(null); setShowSolution(false); }}>← Back</button>
<div className="muted-text" style={{ fontSize: "0.85rem" }}>
{mode === "quiz" ? `Score: ${score}/${answered} · +${xpEarned} XP` : `Problem ${(currentIdx % filtered.length) + 1} of ${filtered.length}`}
</div>
</div>
 
<div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "1.5rem", marginBottom: 16 }}>
<div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-blue)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{problem.topic}</div>
<p style={{ fontSize: "0.95rem", lineHeight: 1.65, marginBottom: 16 }}>{problem.problem}</p>
<div style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", borderRadius: 10, padding: "0.75rem 1rem", fontSize: "0.82rem", color: "var(--color-blue)" }}>
<strong>Formula:</strong> {problem.formula}
</div>
</div>
 
<div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
{problem.options.map((opt, i) => {
let bg = "rgba(255,255,255,0.03)"
let border = "rgba(255,255,255,0.08)"
if (selected !== null) {
if (i === problem.correct) { bg = "rgba(34,197,94,0.12)"; border = "rgba(34,197,94,0.4)" }
else if (i === selected && i !== problem.correct) { bg = "rgba(239,68,68,0.12)"; border = "rgba(239,68,68,0.4)" }
}
return (
<button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "0.85rem 1rem", textAlign: "left", color: "var(--color-text)", cursor: selected !== null ? "default" : "pointer", fontSize: "0.9rem", transition: "all 0.2s" }}>
<span style={{ fontWeight: 700, marginRight: 8, color: "var(--color-muted)" }}>{["A","B","C","D"][i]}.</span>{opt}
</button>
)
})}
</div>
 
{showSolution && (
<div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12, padding: "1rem 1.2rem", marginBottom: 16 }}>
<div style={{ fontWeight: 700, color: "#22c55e", marginBottom: 8 }}>Step-by-Step Solution</div>
{problem.steps.map((s, i) => (
<div key={i} style={{ fontSize: "0.88rem", marginBottom: 4, paddingLeft: 8 }}>
<span style={{ color: "var(--color-blue)", fontWeight: 700, marginRight: 6 }}>{i + 1}.</span>{s}
</div>
))}
<div style={{ marginTop: 10, fontWeight: 700, color: "#22c55e", fontSize: "0.9rem" }}>Answer: {problem.answer}</div>
</div>
)}
 
{selected !== null && (
<button className="btn btn-gradient" onClick={next}>
{currentIdx >= filtered.length - 1 ? "Start Over" : "Next Problem →"}
</button>
)}
</div>
)
}
 
function PasswordGate({ onUnlock }) {
const [name, setName] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState("")
const [loading, setLoading] = useState(false)
 
const handleSubmit = () => {
if (!name.trim()) { setError("Please enter your first name."); return }
if (!password.trim()) { setError("Please enter your access password."); return }
setLoading(true)
setTimeout(() => {
const ok = onUnlock(name, password)
if (!ok) {
setError("Incorrect password. Check your email from Hayyly.")
setLoading(false)
}
}, 600)
}
 
return (
<div style={{
minHeight: "100vh",
background: "#09090b",
display: "flex",
alignItems: "center",
justifyContent: "center",
padding: "1.5rem",
fontFamily: "'DM Sans', sans-serif"
}}>
<div style={{
width: "100%",
maxWidth: "400px",
background: "#1a1a20",
border: "1px solid rgba(255,255,255,0.08)",
borderRadius: "20px",
padding: "2.5rem",
}}>
<div style={{
width: 48, height: 48,
background: "linear-gradient(135deg, #3b82f6, #22c55e)",
borderRadius: 12,
display: "flex", alignItems: "center", justifyContent: "center",
fontWeight: 800, fontSize: "1rem", color: "#fff",
marginBottom: "1.5rem",
fontFamily: "sans-serif"
}}>HY</div>
<h2 style={{ color: "#f4f4f5", fontWeight: 800, fontSize: "1.5rem", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
Welcome to Hayyly
</h2>
<p style={{ color: "#a1a1aa", fontSize: "0.875rem", marginBottom: "2rem", lineHeight: 1.6 }}>
Enter your name and the password from your confirmation email to get started.
</p>
 
<label style={{ color: "#a1a1aa", fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>First Name</label>
<input
style={{
width: "100%", padding: "0.8rem 1rem",
background: "rgba(255,255,255,0.05)",
border: "1px solid rgba(255,255,255,0.1)",
borderRadius: 10, color: "#f4f4f5",
fontSize: "0.95rem", marginBottom: "1rem",
outline: "none", boxSizing: "border-box",
fontFamily: "inherit"
}}
placeholder="Your first name"
value={name}
onChange={e => { setName(e.target.value); setError("") }}
onKeyDown={e => e.key === "Enter" && handleSubmit()}
/>
 
<label style={{ color: "#a1a1aa", fontSize: "0.78rem", fontWeight: 500, display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Access Password</label>
<input
style={{
width: "100%", padding: "0.8rem 1rem",
background: "rgba(255,255,255,0.05)",
border: "1px solid rgba(255,255,255,0.1)",
borderRadius: 10, color: "#f4f4f5",
fontSize: "0.95rem", marginBottom: error ? "0.75rem" : "1.5rem",
outline: "none", boxSizing: "border-box",
fontFamily: "inherit"
}}
type="password"
placeholder="Password from your email"
value={password}
onChange={e => { setPassword(e.target.value); setError("") }}
onKeyDown={e => e.key === "Enter" && handleSubmit()}
/>
 
{error && <p style={{ color: "#ef4444", fontSize: "0.82rem", marginBottom: "1rem" }}>{error}</p>}
 
<button
onClick={handleSubmit}
disabled={loading}
style={{
width: "100%", padding: "0.9rem",
background: "linear-gradient(90deg, #3b82f6, #22c55e, #f97316)",
backgroundSize: "200% auto",
color: "#fff", border: "none",
borderRadius: 10, fontWeight: 700,
fontSize: "0.95rem", cursor: loading ? "not-allowed" : "pointer",
opacity: loading ? 0.7 : 1,
fontFamily: "inherit"
}}
>
{loading ? "Checking..." : "Access Hayyly →"}
</button>
 
<p style={{ color: "#52525b", fontSize: "0.75rem", textAlign: "center", marginTop: "1.5rem" }}>
Paid access only · <a href="https://hayyly.vercel.app" style={{ color: "#3b82f6", textDecoration: "none" }}>Get access</a>
</p>
</div>
</div>
)
}
