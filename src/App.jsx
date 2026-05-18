import { useState, useEffect, useRef } from "react"
import { Zap, Target, Home, Calculator, List, Bot, CheckCircle2, XCircle, CheckCheck, X, ChevronRight, BookOpen, Brain, FlipHorizontal } from "lucide-react"
import "./App.css"
import VisualAids from "./VisualAids"
 
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
]
 
const QUIZ_QUESTIONS = [
{ category: "Ownership", question: "Which ownership type gives the most complete rights with no conditions attached?", options: ["Leasehold Estate","Life Estate","Fee Simple Absolute","Joint Tenancy"], answer: 2, explanation: "Fee Simple Absolute is the highest form of ownership — complete control with no time limits or conditions. The owner can sell, lease, mortgage, or will the property freely." },
{ category: "Ownership", question: "Two co-owners hold title with right of survivorship. When one owner passes away, their share:", options: ["Passes to their heirs via their will","Moves automatically to the surviving owner","Reverts to the state","Goes through probate"], answer: 1, explanation: "Right of survivorship in Joint Tenancy means the deceased owner's interest transfers automatically to the surviving owners — completely bypassing probate." },
{ category: "Ownership", question: "Which co-ownership form allows partners to hold unequal shares and leave them to anyone in a will?", options: ["Joint Tenancy","Tenancy by the Entirety","Tenancy in Common","Community Property"], answer: 2, explanation: "Tenancy in Common allows unequal ownership shares. Each owner can independently sell, mortgage, or will their interest to anyone — there is no right of survivorship." },
{ category: "Ownership", question: "The MARIA test is used to determine whether an item is legally considered a:", options: ["Valid deed","Fixture","Type of lien","Form of legal description"], answer: 1, explanation: "MARIA (Method of attachment, Adaptability, Relationship, Intention, Agreement) determines whether personal property has legally become part of the real property as a fixture." },
{ category: "Ownership", question: "A condo owner's legal interest includes fee simple title to their unit plus:", options: ["A leasehold interest in common areas","Corporate shares in the building","An undivided interest in all common areas","Nothing beyond their unit's four walls"], answer: 2, explanation: "Condo owners hold fee simple title to their individual unit AND share an undivided interest in all common elements — lobbies, hallways, amenities, and grounds." },
{ category: "Agency", question: "Which fiduciary duty continues to bind an agent even after the listing agreement expires?", options: ["Obedience","Loyalty","Confidentiality","Accounting"], answer: 2, explanation: "Confidentiality is the only fiduciary duty that survives the end of the agency relationship. An agent may never later disclose information that could be used against a former client." },
{ category: "Agency", question: "An agent says a home has 'the most spectacular sunsets in the entire county.' This is an example of:", options: ["Fraud","Material misrepresentation","Puffing","Steering"], answer: 2, explanation: "Puffing is non-factual, exaggerated, subjective praise. No reasonable person would rely on it as a verifiable statement of fact. It is not illegal." },
{ category: "Agency", question: "A listing agreement that guarantees the broker a commission no matter who finds the buyer is called:", options: ["Open Listing","Exclusive Agency","Exclusive Right to Sell","Net Listing"], answer: 2, explanation: "The Exclusive Right to Sell guarantees the listing broker a commission regardless of who produces the buyer — another agent, the seller themselves, or anyone else." },
{ category: "Contracts", question: "For a real estate contract to be enforceable in court, the Statute of Frauds requires it to be:", options: ["Notarized","In writing","Witnessed by two people","Reviewed by an attorney"], answer: 1, explanation: "The Statute of Frauds requires real estate contracts to be in writing to be enforceable. An oral agreement to buy or sell real property cannot be upheld in court." },
{ category: "Contracts", question: "A seller tries to back out of an accepted offer. The buyer goes to court to force the sale. This remedy is called:", options: ["Liquidated Damages","Rescission","Specific Performance","Novation"], answer: 2, explanation: "Specific Performance forces a party to complete the transaction as agreed. It is uniquely available in real estate because each property is legally considered one-of-a-kind." },
{ category: "Financing", question: "The borrower in a mortgage transaction is called the:", options: ["Mortgagee","Trustee","Mortgagor","Beneficiary"], answer: 2, explanation: "The mortgagor is the borrower who pledges the property as collateral. The mortgagee is the lender. Memory tip: mortgagOR = the One who Owes." },
{ category: "Financing", question: "PMI is purchased primarily to protect:", options: ["The borrower against job loss","The lender when the down payment is under 20%","The seller if the buyer walks away","The title company against defects"], answer: 1, explanation: "Private Mortgage Insurance (PMI) protects the lender — not the buyer — in case of default. Required on conventional loans when LTV exceeds 80%." },
{ category: "Fair Housing", question: "Which of the following is NOT one of the 7 federally protected classes under the Fair Housing Act?", options: ["Familial Status","Disability","Sexual Orientation","National Origin"], answer: 2, explanation: "Sexual Orientation is not currently a federal protected class under the Fair Housing Act. The 7 federal classes are Race, Color, Religion, National Origin, Sex, Familial Status, and Disability." },
{ category: "Fair Housing", question: "A landlord refuses to rent to a couple because they have a toddler. This violates the protected class of:", options: ["Disability","Sex","Familial Status","National Origin"], answer: 2, explanation: "Familial Status protects households with children under 18, pregnant women, and those gaining custody. Refusing to rent to families with young children is illegal discrimination." },
{ category: "Appraisal", question: "Which appraisal method is considered most reliable for a single-family home?", options: ["Cost Approach","Income Approach","Sales Comparison Approach","Gross Rent Multiplier Method"], answer: 2, explanation: "The Sales Comparison Approach is most reliable for residential properties because there are typically many recent comparable home sales available to use as benchmarks." },
{ category: "Math", question: "A property sells for $400,000 with a 5% commission. What is the total commission?", options: ["$20,000","$25,000","$40,000","$4,000"], answer: 0, explanation: "$400,000 x 0.05 = $20,000 total commission." },
{ category: "Math", question: "A home is worth $320,000 with a $200,000 loan balance. What is the owner's equity?", options: ["$200,000","$320,000","$120,000","$80,000"], answer: 2, explanation: "Equity = Market Value - Loan Balance = $320,000 - $200,000 = $120,000." },
{ category: "Math", question: "A rental property has an NOI of $60,000 and the local cap rate is 8%. What is the estimated property value?", options: ["$480,000","$750,000","$600,000","$680,000"], answer: 1, explanation: "Value = NOI / Cap Rate = $60,000 / 0.08 = $750,000." },
{ category: "Land Use", question: "A property was used as a gas station before zoning laws were passed. The zoning now prohibits it. The owner can:", options: ["Continue operating as a nonconforming use","Be immediately forced to close","Apply for a variance to continue","Rezone the property themselves"], answer: 0, explanation: "A nonconforming use that legally existed before zoning was enacted is allowed to continue. However, it typically cannot be expanded or rebuilt if substantially destroyed." },
{ category: "Land Use", question: "The government takes a private landowner's property to build a new public highway. The owner must receive:", options: ["Nothing — eminent domain requires no payment","Replacement land of equal value","Just compensation at fair market value","Payment only if they contest in court"], answer: 2, explanation: "The 5th Amendment requires the government to pay just compensation — fair market value — whenever it exercises eminent domain and takes private property for public use." },
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
{ id: "visuals", icon: <Brain size={16} />, label: "Visuals" },
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
<span className="nav-btn-icon">{t.icon}</span>
<span className="nav-btn-label">{t.label}</span>
{tab === t.id && <span className="nav-active-pip" />}
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
{tab === "visuals" && <VisualAids addXP={addXP} />}
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
<div className="score-ring" style={{ position:"relative" }}><div className="score-pct">{pct}%</div><div className="score-lbl">Score</div></div>
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
<button key={i} className={"option " + (selected !== null ? (i === q.answer ? "correct" : i === selected ? "wrong" : "") : "")} onClick={() => handleAnswer(i)} disabled={selected !== null}>
<span className="option-letter">{["A","B","C","D"][i]}</span>
<span style={{ flex:1 }}>{opt}</span>
{selected !== null && i === q.answer && <CheckCircle2 size={17} className="option-state-icon correct-icon" />}
{selected !== null && i === selected && i !== q.answer && <XCircle size={17} className="option-state-icon wrong-icon" />}
</button>
))}
</div>
{selected !== null && (
<div className={"explanation " + (selected === q.answer ? "correct-exp" : "wrong-exp")}>
<div className={"exp-header " + (selected === q.answer ? "correct-header" : "wrong-header")}>
{selected === q.answer ? <CheckCheck size={14} /> : <XCircle size={14} />}
{selected === q.answer ? "Correct!" : "Not quite — here's why:"}
</div>
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
style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: "0.85rem 1rem", textAlign: "left", color: "var(--color-text)", cursor: selected !== null ? "default" : "pointer", fontSize: "0.9rem", transition: "all 0.2s", display:"flex", alignItems:"center", gap:8 }}>
<span style={{ fontWeight: 700, color: "var(--color-muted)", flexShrink:0 }}>{["A","B","C","D"][i]}.</span>
<span style={{ flex:1 }}>{opt}</span>
{selected !== null && i === problem.correct && <CheckCircle2 size={17} style={{ color:"#34d399", flexShrink:0 }} />}
{selected !== null && i === selected && i !== problem.correct && <XCircle size={17} style={{ color:"#f87171", flexShrink:0 }} />}
</button>
)
})}
</div>
 
{showSolution && (
<div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: 12, padding: "1rem 1.2rem", marginBottom: 16 }}>
<div style={{ fontWeight: 700, color: "#22c55e", marginBottom: 8, display:"flex", alignItems:"center", gap:6 }}><CheckCheck size={15} />Step-by-Step Solution</div>
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
 
