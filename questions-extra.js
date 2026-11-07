/*
 * Reaglet — Advanced Question Bank
 * 20 original questions:
 * 10 multiple-correct + 10 numerical answer.
 *
 * All questions are original practice material,
 * not represented as actual ISC or JEE PYQs.
 */

window.REAGLET_QUESTIONS.push(

  // =====================================================
  // CHAPTER 1: SOLUTIONS
  // =====================================================

  {
    id: "ADV-SOL-001",
    chapter: "solutions",
    topic: "Ideal solutions",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which of the following statements about an ideal binary solution are correct?",
    options: [
      "It obeys Raoult's law throughout the composition range.",
      "Its enthalpy of mixing is zero.",
      "Its A–B interactions are significantly weaker than A–A interactions.",
      "Its volume change on mixing is zero."
    ],
    answerIndices: [0, 1, 3],
    explanation: "An ideal solution obeys Raoult's law at every composition. Its intermolecular interactions are approximately comparable, so mixing involves neither heat change nor volume change.",
    solutionSteps: [
      "Recall the two defining conditions: ΔHmix = 0 and ΔVmix = 0.",
      "Ideal solutions obey Raoult's law throughout the composition range.",
      "Unlike interactions are comparable in strength to like interactions; they are not significantly weaker.",
      "Therefore, statements A, B and D are correct."
    ]
  },

  {
    id: "ADV-SOL-002",
    chapter: "solutions",
    topic: "Molality",
    type: "numeric",
    marks: 2,
    scope: "ISC + JEE",
    prompt: "Calculate the molality of a solution containing 4.5 g of glucose (molar mass = 180 g mol⁻¹) dissolved in 100 g of water.",
    unit: "mol kg⁻¹",
    numericAnswer: 0.25,
    tolerance: 0.005,
    answerDisplay: "0.25 mol kg⁻¹",
    explanation: "Molality is the number of moles of solute divided by the mass of solvent in kilograms.",
    solutionSteps: [
      "Moles of glucose = 4.5/180 = 0.025 mol.",
      "Mass of water = 100 g = 0.100 kg.",
      "Molality = 0.025/0.100.",
      "Final answer = 0.25 mol kg⁻¹."
    ]
  },

  // =====================================================
  // CHAPTER 2: ELECTROCHEMISTRY
  // =====================================================

  {
    id: "ADV-ELE-001",
    chapter: "electrochemistry",
    topic: "Galvanic cells",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements about a functioning galvanic cell are correct?",
    options: [
      "Oxidation occurs at the anode.",
      "Reduction occurs at the cathode.",
      "Electrons flow through the external circuit from anode to cathode.",
      "Electrons pass through the salt bridge."
    ],
    answerIndices: [0, 1, 2],
    explanation: "The salt bridge provides an ionic pathway, not an electronic pathway. Electrons travel through the external wire.",
    solutionSteps: [
      "Oxidation always occurs at the anode.",
      "Reduction always occurs at the cathode.",
      "Electrons released by oxidation travel through the external circuit towards the cathode.",
      "The salt bridge maintains charge balance through movement of ions, not electrons.",
      "Thus A, B and C are correct."
    ]
  },

  {
    id: "ADV-ELE-002",
    chapter: "electrochemistry",
    topic: "Faraday's laws",
    type: "numeric",
    marks: 2,
    scope: "ISC + JEE",
    prompt: "Calculate the charge required to deposit 0.5 mol of copper from Cu²⁺ ions. Take F = 96485 C mol⁻¹.",
    unit: "C",
    numericAnswer: 96485,
    tolerance: 50,
    answerDisplay: "96485 C",
    explanation: "Each Cu²⁺ ion requires two electrons to form one Cu atom.",
    solutionSteps: [
      "Write the cathode reaction: Cu²⁺ + 2e⁻ → Cu.",
      "Each mole of copper requires 2 moles of electrons.",
      "For 0.5 mol Cu, moles of electrons = 0.5 × 2 = 1 mol.",
      "Charge Q = nF = 1 × 96485.",
      "Final answer = 96485 C."
    ]
  },

  // =====================================================
  // CHAPTER 3: CHEMICAL KINETICS
  // =====================================================

  {
    id: "ADV-KIN-001",
    chapter: "chemical-kinetics",
    topic: "First-order kinetics",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements about a first-order reaction are correct?",
    options: [
      "Its half-life is independent of initial concentration.",
      "Its rate constant has units of time⁻¹.",
      "A plot of ln[A] against time has slope −k.",
      "Its order must equal the sum of stoichiometric coefficients in the overall equation."
    ],
    answerIndices: [0, 1, 2],
    explanation: "First-order kinetics has a specific integrated rate equation. The reaction order is experimentally determined and need not equal the stoichiometric coefficients of the overall equation.",
    solutionSteps: [
      "Use t₁/₂ = 0.693/k, which contains no initial concentration.",
      "For a first-order rate law, rate = k[A], so k has units of time⁻¹.",
      "The integrated law is ln[A] = ln[A]₀ − kt; the slope is −k.",
      "Stoichiometric coefficients do not generally determine the rate law.",
      "Therefore A, B and C are correct."
    ]
  },

  {
    id: "ADV-KIN-002",
    chapter: "chemical-kinetics",
    topic: "First-order reaction",
    type: "numeric",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "A first-order reaction has a rate constant of 0.2303 min⁻¹. Calculate the time required for 90% completion.",
    unit: "min",
    numericAnswer: 10,
    tolerance: 0.1,
    answerDisplay: "10.0 min",
    explanation: "For 90% completion, 10% of the original reactant remains.",
    solutionSteps: [
      "For 90% completion, [A]t/[A]₀ = 0.10.",
      "Use the first-order law: k = (2.303/t) log([A]₀/[A]t).",
      "Substitute: 0.2303 = (2.303/t) log 10.",
      "Since log 10 = 1, t = 2.303/0.2303.",
      "Final answer ≈ 10.0 min."
    ]
  },

  // =====================================================
  // CHAPTER 4: d- AND f-BLOCK ELEMENTS
  // =====================================================

  {
    id: "ADV-DF-001",
    chapter: "d-f-block",
    topic: "Transition elements",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements are correct?",
    options: [
      "Zn²⁺ has a completely filled 3d subshell.",
      "Acidified permanganate is commonly reduced to Mn²⁺.",
      "Chromium has the configuration [Ar] 3d⁵ 4s¹.",
      "Lanthanoid contraction occurs because 4f electrons shield the nuclear charge very effectively."
    ],
    answerIndices: [0, 1, 2],
    explanation: "The 4f electrons shield poorly, causing an increase in effective nuclear attraction across the lanthanoid series.",
    solutionSteps: [
      "Zn²⁺ has configuration [Ar] 3d¹⁰, so A is correct.",
      "In acidic medium, MnO₄⁻ is reduced to Mn²⁺, so B is correct.",
      "Chromium is an electronic-configuration exception: [Ar] 3d⁵ 4s¹, so C is correct.",
      "Poor 4f shielding, not effective shielding, causes lanthanoid contraction.",
      "Hence A, B and C are correct."
    ]
  },

  {
    id: "ADV-DF-002",
    chapter: "d-f-block",
    topic: "Magnetic moment",
    type: "numeric",
    marks: 2,
    scope: "ISC + JEE",
    prompt: "Calculate the spin-only magnetic moment of an ion having two unpaired electrons. Give your answer to two decimal places.",
    unit: "BM",
    numericAnswer: 2.83,
    tolerance: 0.02,
    answerDisplay: "2.83 BM",
    explanation: "The spin-only formula is μ = √[n(n+2)] BM, where n is the number of unpaired electrons.",
    solutionSteps: [
      "Given n = 2.",
      "Use μ = √[n(n+2)] BM.",
      "μ = √[2(2+2)] = √8 BM.",
      "√8 ≈ 2.8284.",
      "Final answer = 2.83 BM."
    ]
  },

  // =====================================================
  // CHAPTER 5: COORDINATION COMPOUNDS
  // =====================================================

  {
    id: "ADV-COO-001",
    chapter: "coordination-compounds",
    topic: "Coordination chemistry",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements about coordination compounds are correct?",
    options: [
      "Ethylenediamine (en) is a bidentate ligand.",
      "CN⁻ is generally a strong-field ligand.",
      "Coordination number counts donor atoms directly attached to the central metal.",
      "An ambidentate ligand must coordinate through two donor atoms simultaneously."
    ],
    answerIndices: [0, 1, 2],
    explanation: "An ambidentate ligand can coordinate through either of two different donor atoms, but normally uses one donor atom at a time.",
    solutionSteps: [
      "en contains two nitrogen donor atoms, so it is bidentate.",
      "CN⁻ lies towards the strong-field end of the spectrochemical series.",
      "Coordination number counts directly bonded donor atoms, not ligand molecules.",
      "An ambidentate ligand uses alternative donor atoms, not necessarily both at once.",
      "A, B and C are correct."
    ]
  },

  {
    id: "ADV-COO-002",
    chapter: "coordination-compounds",
    topic: "Oxidation state",
    type: "numeric",
    marks: 2,
    scope: "ISC + JEE",
    prompt: "Find the oxidation state of cobalt in [Co(NH₃)₅Cl]Cl₂. Enter the numerical value with its sign if needed.",
    unit: "oxidation state",
    numericAnswer: 3,
    tolerance: 0,
    answerDisplay: "+3",
    explanation: "The complex ion has a charge of +2 because there are two chloride counter-ions outside the coordination sphere.",
    solutionSteps: [
      "The two chloride ions outside the bracket contribute total charge −2.",
      "Therefore, the complex ion [Co(NH₃)₅Cl] has charge +2.",
      "Let the oxidation state of cobalt be x.",
      "NH₃ is neutral and coordinated Cl has charge −1.",
      "So x + 5(0) − 1 = +2.",
      "Hence x = +3."
    ]
  },

  // =====================================================
  // CHAPTER 6: HALOALKANES AND HALOARENES
  // =====================================================

  {
    id: "ADV-HAL-001",
    chapter: "haloalkanes-haloarenes",
    topic: "Nucleophilic substitution",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements about SN1 and SN2 reactions are correct?",
    options: [
      "SN2 proceeds in one concerted step.",
      "SN2 attack usually occurs from the side opposite the leaving group.",
      "The simple SN2 rate law depends on both substrate and nucleophile concentration.",
      "SN1 reactions are generally favoured by methyl halides because methyl carbocations are very stable."
    ],
    answerIndices: [0, 1, 2],
    explanation: "Methyl carbocations are exceptionally unstable, so methyl halides favour SN2 rather than SN1 under ordinary substitution conditions.",
    solutionSteps: [
      "SN2 is a concerted mechanism with no discrete carbocation intermediate.",
      "Backside attack leads to inversion of configuration.",
      "Both RX and the nucleophile participate in the rate-determining event, giving rate = k[RX][Nu⁻].",
      "Methyl carbocations are highly unstable; tertiary substrates are much more favourable for SN1.",
      "Therefore A, B and C are correct."
    ]
  },

  {
    id: "ADV-HAL-002",
    chapter: "haloalkanes-haloarenes",
    topic: "Wurtz reaction",
    type: "numeric",
    marks: 2,
    scope: "ISC",
    prompt: "Ethyl bromide undergoes Wurtz reaction with sodium in dry ether. How many carbon atoms are present in the principal coupled alkane product?",
    unit: "carbon atoms",
    numericAnswer: 4,
    tolerance: 0,
    answerDisplay: "4",
    explanation: "Wurtz coupling joins two identical alkyl groups.",
    solutionSteps: [
      "Ethyl bromide contains the ethyl group C₂H₅–.",
      "In the Wurtz reaction, two ethyl groups couple.",
      "The product is C₂H₅–C₂H₅, or butane.",
      "Butane contains four carbon atoms."
    ]
  },

  // =====================================================
  // CHAPTER 7: ALCOHOLS, PHENOLS AND ETHERS
  // =====================================================

  {
    id: "ADV-ALC-001",
    chapter: "alcohols-phenols-ethers",
    topic: "Alcohols and phenols",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which of the following statements are correct?",
    options: [
      "Phenol reacts with aqueous NaOH to form sodium phenoxide.",
      "Ordinary ethanol does not react with aqueous NaOH to any significant extent.",
      "Phenol is more acidic than ethanol.",
      "Ethers can donate intermolecular hydrogen bonds to other ether molecules."
    ],
    answerIndices: [0, 1, 2],
    explanation: "Phenol is acidic enough to react with hydroxide, while ordinary alcohols are not. Ethers can accept hydrogen bonds but cannot donate them because they lack an O–H bond.",
    solutionSteps: [
      "Phenol has pKa around 10 and is deprotonated by aqueous hydroxide.",
      "Ethanol is much weaker as an acid, so equilibrium with hydroxide does not favour appreciable deprotonation.",
      "Phenoxide is resonance-stabilised, whereas ethoxide lacks comparable resonance stabilisation.",
      "An ether oxygen has lone pairs but no O–H bond, so it cannot donate an intermolecular hydrogen bond.",
      "A, B and C are correct."
    ]
  },

  {
    id: "ADV-ALC-002",
    chapter: "alcohols-phenols-ethers",
    topic: "Bromination of phenol",
    type: "numeric",
    marks: 1,
    scope: "ISC",
    prompt: "Phenol reacts with excess bromine water to form 2,4,6-tribromophenol. How many bromine atoms are present in one product molecule?",
    unit: "bromine atoms",
    numericAnswer: 3,
    tolerance: 0,
    answerDisplay: "3",
    explanation: "The three activated positions of phenol, namely 2, 4 and 6, are substituted by bromine.",
    solutionSteps: [
      "The –OH group strongly activates the benzene ring.",
      "It directs electrophilic substitution to the ortho and para positions.",
      "With excess bromine water, positions 2, 4 and 6 are brominated.",
      "The product contains three bromine atoms."
    ]
  },

  // =====================================================
  // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS
  // =====================================================

  {
    id: "ADV-CAR-001",
    chapter: "aldehydes-ketones-acids",
    topic: "Named reactions",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements about carbonyl reactions are correct?",
    options: [
      "Aldol condensation requires an α-hydrogen in the carbonyl compound undergoing enolate formation.",
      "Cannizzaro reaction is characteristic of aldehydes lacking α-hydrogen.",
      "Most aldehydes give a positive Tollens' test.",
      "Ordinary ketones are generally more easily oxidised by mild oxidising agents than aldehydes."
    ],
    answerIndices: [0, 1, 2],
    explanation: "Aldehydes are readily oxidised to carboxylates by mild oxidising agents. Ordinary ketones resist such oxidation because it often requires C–C bond cleavage.",
    solutionSteps: [
      "Aldol condensation proceeds through an enolate/enol, which requires an α-hydrogen.",
      "Cannizzaro reaction involves disproportionation of aldehydes without α-hydrogen.",
      "Tollens' reagent oxidises most aldehydes and deposits metallic silver.",
      "The last statement is reversed: aldehydes are generally easier to oxidise.",
      "A, B and C are correct."
    ]
  },

  {
    id: "ADV-CAR-002",
    chapter: "aldehydes-ketones-acids",
    topic: "Decarboxylation",
    type: "numeric",
    marks: 2,
    scope: "ISC + JEE",
    prompt: "Sodium butanoate is heated with soda lime. How many carbon atoms are present in the principal alkane product?",
    unit: "carbon atoms",
    numericAnswer: 3,
    tolerance: 0,
    answerDisplay: "3",
    explanation: "Soda-lime decarboxylation removes the carboxyl carbon, giving an alkane with one fewer carbon atom.",
    solutionSteps: [
      "Sodium butanoate has four carbon atoms.",
      "In soda-lime decarboxylation, the carboxylate carbon is removed.",
      "The remaining three-carbon alkyl group forms propane.",
      "Propane contains three carbon atoms."
    ]
  },

  // =====================================================
  // CHAPTER 9: ORGANIC COMPOUNDS CONTAINING NITROGEN
  // =====================================================

  {
    id: "ADV-NIT-001",
    chapter: "organic-compounds-nitrogen",
    topic: "Amines and diazonium salts",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements are correct?",
    options: [
      "The carbylamine test is given by primary amines.",
      "Hofmann bromamide degradation produces an amine with one fewer carbon atom than the amide.",
      "Aniline is commonly diazotised at 273–278 K.",
      "Sandmeyer reactions use copper(I) salts for certain substitutions of the diazonium group."
    ],
    answerIndices: [0, 1, 2, 3],
    explanation: "All four statements describe standard reactions of amines and arenediazonium salts.",
    solutionSteps: [
      "Primary amines form isocyanides in the carbylamine reaction.",
      "Hofmann degradation loses the carbonyl carbon and gives a primary amine with one fewer carbon.",
      "Low temperature helps prevent decomposition of the arenediazonium salt.",
      "CuCl, CuBr and related copper(I) reagents enable Sandmeyer substitutions.",
      "All four statements are correct."
    ]
  },

  {
    id: "ADV-NIT-002",
    chapter: "organic-compounds-nitrogen",
    topic: "Diazonium salts",
    type: "numeric",
    marks: 1,
    scope: "ISC",
    prompt: "How many nitrogen atoms are present in the diazonium functional group, Ar–N₂⁺?",
    unit: "nitrogen atoms",
    numericAnswer: 2,
    tolerance: 0,
    answerDisplay: "2",
    explanation: "The diazonium group contains two nitrogen atoms joined in the –N≡N⁺ unit.",
    solutionSteps: [
      "Write the diazonium group as Ar–N₂⁺.",
      "The subscript 2 indicates two nitrogen atoms.",
      "Final answer = 2."
    ]
  },

  // =====================================================
  // CHAPTER 10: BIOMOLECULES
  // =====================================================

  {
    id: "ADV-BIO-001",
    chapter: "biomolecules",
    topic: "Carbohydrates and proteins",
    type: "multi",
    marks: 3,
    scope: "ISC + JEE",
    prompt: "Which statements are correct?",
    options: [
      "Sucrose is a non-reducing disaccharide.",
      "Maltose is a reducing disaccharide.",
      "Cellulose contains β(1→4) glycosidic linkages.",
      "Humans digest cellulose efficiently using cellulase."
    ],
    answerIndices: [0, 1, 2],
    explanation: "Humans do not produce cellulase, so cellulose is not digested as a source of glucose. The other three statements describe standard carbohydrate structures.",
    solutionSteps: [
      "Sucrose uses both anomeric carbons in its glycosidic linkage, so it is non-reducing.",
      "Maltose retains a free anomeric carbon, so it is reducing.",
      "Cellulose consists of β-D-glucose units linked through β(1→4) bonds.",
      "Humans lack cellulase and cannot hydrolyse cellulose efficiently.",
      "A, B and C are correct."
    ]
  },

  {
    id: "ADV-BIO-002",
    chapter: "biomolecules",
    topic: "Peptide bonds",
    type: "numeric",
    marks: 1,
    scope: "ISC",
    prompt: "A linear tetrapeptide contains four amino-acid residues. How many peptide bonds does it contain?",
    unit: "peptide bonds",
    numericAnswer: 3,
    tolerance: 0,
    answerDisplay: "3",
    explanation: "A linear peptide containing n residues has n − 1 peptide bonds.",
    solutionSteps: [
      "A peptide bond joins two adjacent amino-acid residues.",
      "Four residues arranged in a linear chain require three links.",
      "Number of peptide bonds = 4 − 1 = 3."
    ]
  }

);