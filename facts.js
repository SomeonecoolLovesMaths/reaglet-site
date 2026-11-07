/*
 * Reaglet fact bank — expanded starter edition.
 * 180 original, syllabus-mapped fact cards (18 per ISC Class XII chapter).
 * Scope labels: ISC = core coverage; ISC + JEE = overlap useful for both.
 * These are original study notes, not copied past-paper questions.
 */
window.REAGLET_FACTS = [
  {
    "id": "SOL-001",
    "chapter": "solutions",
    "tag": "CONCENTRATION",
    "fact": "Molarity is moles of solute per litre of solution.",
    "explanation": "M = nsolute/Vsolution, with volume measured at the stated temperature. Because solution volume changes with temperature, molarity is temperature-dependent.",
    "connection": "Use molarity in dilution calculations: M₁V₁ = M₂V₂ when the amount of solute is conserved.",
    "scope": "ISC"
  },
  {
    "id": "SOL-002",
    "chapter": "solutions",
    "tag": "CONCENTRATION",
    "fact": "Molality is moles of solute per kilogram of solvent.",
    "explanation": "m = nsolute/mass of solvent in kg. It uses solvent mass rather than solution volume, so it is essentially independent of temperature.",
    "connection": "Molality is the concentration unit used directly in ΔTb = iKbm and ΔTf = iKfm.",
    "scope": "ISC"
  },
  {
    "id": "SOL-003",
    "chapter": "solutions",
    "tag": "MOLE FRACTION",
    "fact": "The mole fractions of all components in a solution add up to one.",
    "explanation": "For a binary solution, xA = nA/(nA+nB) and xB = nB/(nA+nB), hence xA+xB=1.",
    "connection": "Mole fraction is especially useful in Raoult’s law and vapour-pressure calculations.",
    "scope": "ISC"
  },
  {
    "id": "SOL-004",
    "chapter": "solutions",
    "tag": "HENRY’S LAW",
    "fact": "At a fixed temperature, the solubility of a gas in a liquid is proportional to its partial pressure.",
    "explanation": "In the convention used here, p = KH x, where x is the mole fraction of dissolved gas. A larger KH means lower solubility at the same pressure.",
    "connection": "The fizz in a freshly opened carbonated drink escapes because the pressure above the liquid suddenly falls.",
    "scope": "ISC"
  },
  {
    "id": "SOL-005",
    "chapter": "solutions",
    "tag": "HENRY’S LAW",
    "fact": "Gas solubility in water generally decreases as temperature increases.",
    "explanation": "Dissolution of many gases in water is exothermic. Heating favours the reverse process and reduces the amount of gas retained.",
    "connection": "Warm lakes can hold less dissolved oxygen, which can stress aquatic organisms.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-006",
    "chapter": "solutions",
    "tag": "RAOULT’S LAW",
    "fact": "For an ideal solution, the partial vapour pressure of a volatile component is proportional to its mole fraction.",
    "explanation": "For component A, pA = xA pA°. The total vapour pressure is the sum of the partial pressures of all volatile components.",
    "connection": "A plot of partial pressure against mole fraction is linear for an ideal binary solution.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-007",
    "chapter": "solutions",
    "tag": "IDEAL SOLUTIONS",
    "fact": "An ideal solution obeys Raoult’s law over the entire composition range.",
    "explanation": "For ideal mixing, unlike and like intermolecular interactions are comparable; ΔHmix = 0 and ΔVmix = 0.",
    "connection": "Benzene and toluene are commonly treated as an approximately ideal pair.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-008",
    "chapter": "solutions",
    "tag": "NON-IDEAL SOLUTIONS",
    "fact": "Positive deviation from Raoult’s law occurs when unlike interactions are, on balance, weaker.",
    "explanation": "The escaping tendency is greater than ideal, so the observed vapour pressure is higher. Mixing is often endothermic and accompanied by expansion.",
    "connection": "A sufficiently strong positive deviation can produce a minimum-boiling azeotrope.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-009",
    "chapter": "solutions",
    "tag": "NON-IDEAL SOLUTIONS",
    "fact": "Negative deviation from Raoult’s law occurs when unlike interactions are, on balance, stronger.",
    "explanation": "The vapour pressure is lower than the ideal prediction. Mixing is often exothermic and accompanied by contraction.",
    "connection": "A sufficiently strong negative deviation can produce a maximum-boiling azeotrope.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-010",
    "chapter": "solutions",
    "tag": "AZEOTROPES",
    "fact": "An azeotrope boils at a constant temperature without changing its liquid-vapour composition.",
    "explanation": "At the azeotropic composition, the vapour and liquid have the same composition. Ordinary fractional distillation cannot separate the mixture beyond this point.",
    "connection": "Minimum-boiling azeotropes are associated with positive deviations; maximum-boiling azeotropes with negative deviations.",
    "scope": "ISC"
  },
  {
    "id": "SOL-011",
    "chapter": "solutions",
    "tag": "COLLIGATIVE PROPERTIES",
    "fact": "Colligative properties depend on the number of dissolved particles, not their chemical identity.",
    "explanation": "For sufficiently dilute solutions, the key particle-count effects are relative lowering of vapour pressure, boiling-point elevation, freezing-point depression and osmotic pressure.",
    "connection": "Electrolyte dissociation changes the particle count and is accounted for through the van’t Hoff factor.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-012",
    "chapter": "solutions",
    "tag": "VAPOUR PRESSURE",
    "fact": "Adding a non-volatile solute lowers the vapour pressure of a solvent.",
    "explanation": "The solute reduces the mole fraction of the solvent at the liquid surface. For an ideal solution, pA = xA pA°.",
    "connection": "Relative lowering of vapour pressure is related to the mole fraction of a non-volatile solute in a dilute ideal solution.",
    "scope": "ISC"
  },
  {
    "id": "SOL-013",
    "chapter": "solutions",
    "tag": "FREEZING-POINT DEPRESSION",
    "fact": "Adding a non-volatile solute lowers the freezing point of a solvent.",
    "explanation": "The solute lowers the chemical potential of the liquid solvent. The freezing-point depression is ΔTf = iKfm for a dilute solution.",
    "connection": "Salt is spread on icy roads because it lowers the freezing point of water.",
    "scope": "ISC"
  },
  {
    "id": "SOL-014",
    "chapter": "solutions",
    "tag": "OSMOTIC PRESSURE",
    "fact": "The osmotic pressure of a dilute solution is given by π = iCRT.",
    "explanation": "Here C is the molar concentration, R is the gas constant, T is absolute temperature and i is the van’t Hoff factor.",
    "connection": "Osmotic pressure can be used to determine the molar mass of macromolecules.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-015",
    "chapter": "solutions",
    "tag": "VAN’T HOFF FACTOR",
    "fact": "The van’t Hoff factor accounts for association or dissociation of solute particles.",
    "explanation": "It is the ratio of the observed colligative property to the value calculated for no association or dissociation, at the same analytical concentration.",
    "connection": "For ideal complete dissociation of NaCl into two ions, i approaches 2.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-016",
    "chapter": "solutions",
    "tag": "ABNORMAL MOLAR MASS",
    "fact": "Association of solute molecules can make the experimentally calculated molar mass appear higher.",
    "explanation": "Association reduces the number of particles in solution, lowering the colligative effect compared with the non-associated prediction.",
    "connection": "Benzoic acid can associate as dimers in some non-polar solvents.",
    "scope": "ISC + JEE"
  },
  {
    "id": "SOL-017",
    "chapter": "solutions",
    "tag": "REVERSE OSMOSIS",
    "fact": "Reverse osmosis occurs when pressure greater than the osmotic pressure is applied to a solution.",
    "explanation": "The applied pressure forces solvent through a semipermeable membrane from the solution side towards the pure-solvent side.",
    "connection": "Reverse osmosis is used in desalination and water purification.",
    "scope": "ISC"
  },
  {
    "id": "SOL-018",
    "chapter": "solutions",
    "tag": "COLLIGATIVE PROPERTIES",
    "fact": "For a dilute solution, boiling-point elevation and freezing-point depression are proportional to molality.",
    "explanation": "The relations are ΔTb = iKbm and ΔTf = iKfm. The constants depend on the solvent.",
    "connection": "These equations are frequently used in molar-mass determination problems.",
    "scope": "ISC + JEE"
  },

  {
    "id": "ELE-001",
    "chapter": "electrochemistry",
    "tag": "CELL POTENTIAL",
    "fact": "A positive standard cell potential corresponds to a negative standard Gibbs energy change for the cell reaction.",
    "explanation": "The relationship is ΔG° = −nFE°cell. Since n and F are positive, a positive E°cell makes ΔG° negative and indicates standard-state spontaneity.",
    "connection": "Remember the sign: a galvanic cell has a positive E°cell when its reaction is written in the spontaneous direction.",
    "scope": "ISC"
  },
  {
    "id": "ELE-002",
    "chapter": "electrochemistry",
    "tag": "CONDUCTIVITY",
    "fact": "Molar conductivity generally increases on dilution.",
    "explanation": "On dilution, ions experience less interionic interaction and can move more freely. For weak electrolytes, dilution also increases the degree of ionisation substantially.",
    "connection": "The increase is usually much more pronounced for weak electrolytes than for strong electrolytes.",
    "scope": "ISC"
  },
  {
    "id": "ELE-003",
    "chapter": "electrochemistry",
    "tag": "ELECTROLYTIC CELLS",
    "fact": "Oxidation occurs at the anode and reduction occurs at the cathode.",
    "explanation": "These definitions apply to both galvanic and electrolytic cells. The signs of the electrodes differ between the two types of cell.",
    "connection": "A useful memory aid is AN OX and RED CAT: Anode Oxidation, Reduction Cathode.",
    "scope": "ISC"
  },
  {
    "id": "ELE-004",
    "chapter": "electrochemistry",
    "tag": "GALVANIC CELLS",
    "fact": "In a galvanic cell, electrons flow through the external circuit from anode to cathode.",
    "explanation": "Oxidation at the anode releases electrons. Reduction at the cathode consumes them.",
    "connection": "Conventional current in the external circuit flows in the direction opposite to electron flow.",
    "scope": "ISC"
  },
  {
    "id": "ELE-005",
    "chapter": "electrochemistry",
    "tag": "SALT BRIDGE",
    "fact": "A salt bridge maintains electrical neutrality in the two half-cells of a galvanic cell.",
    "explanation": "Anions migrate towards the anode compartment and cations towards the cathode compartment as charge builds up during operation.",
    "connection": "The salt bridge also helps complete the internal ionic circuit and reduces direct mixing of the electrolytes.",
    "scope": "ISC"
  },
  {
    "id": "ELE-006",
    "chapter": "electrochemistry",
    "tag": "NERNST EQUATION",
    "fact": "The Nernst equation relates electrode potential to the reaction quotient.",
    "explanation": "At 298 K, E = E° − (0.0591/n) log Q for a reaction involving n electrons, with Q written using activities or appropriate approximations.",
    "connection": "At equilibrium, Q = K and the cell potential becomes zero.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-007",
    "chapter": "electrochemistry",
    "tag": "EQUILIBRIUM CONSTANT",
    "fact": "The standard cell potential is related to the equilibrium constant of the cell reaction.",
    "explanation": "At 298 K, E°cell = (0.0591/n) log K. A large positive standard potential corresponds to a large equilibrium constant.",
    "connection": "This links electrochemistry directly with chemical equilibrium.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-008",
    "chapter": "electrochemistry",
    "tag": "GIBBS ENERGY",
    "fact": "Electrical work obtainable from a reversible electrochemical cell is related to Gibbs energy change.",
    "explanation": "For a cell reaction, ΔG = −nFEcell. Under standard conditions, ΔG° = −nFE°cell.",
    "connection": "A positive cell emf indicates that the cell reaction can deliver electrical work spontaneously under the stated conditions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-009",
    "chapter": "electrochemistry",
    "tag": "FARADAY’S LAWS",
    "fact": "The amount of substance deposited at an electrode is proportional to the charge passed.",
    "explanation": "One mole of electrons carries one Faraday of charge, approximately 96485 C. The stoichiometry of the half-reaction determines the charge needed per mole of product.",
    "connection": "For a species requiring z electrons per ion, one mole requires zF coulombs.",
    "scope": "ISC"
  },
  {
    "id": "ELE-010",
    "chapter": "electrochemistry",
    "tag": "ELECTROLYSIS",
    "fact": "The products of electrolysis depend on the ions present, electrode material and operating conditions.",
    "explanation": "Discharge at an electrode depends on factors such as electrode potentials, concentration, overvoltage and whether the electrodes are inert or reactive.",
    "connection": "Aqueous NaCl and molten NaCl give different cathode products because water is present only in the aqueous solution.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-011",
    "chapter": "electrochemistry",
    "tag": "SPECIFIC CONDUCTIVITY",
    "fact": "Conductivity is the reciprocal of resistivity.",
    "explanation": "κ = 1/ρ. Conductivity depends on the concentration and mobility of ions, as well as temperature.",
    "connection": "The SI unit of conductivity is S m⁻¹, although S cm⁻¹ is also commonly used in chemistry problems.",
    "scope": "ISC"
  },
  {
    "id": "ELE-012",
    "chapter": "electrochemistry",
    "tag": "MOLAR CONDUCTIVITY",
    "fact": "Molar conductivity is conductivity multiplied by the volume containing one mole of electrolyte.",
    "explanation": "For concentration C in mol m⁻³, Λm = κ/C. If C is in mol L⁻¹, use the appropriate conversion factor.",
    "connection": "Always check the units of concentration before substituting into a conductivity formula.",
    "scope": "ISC"
  },
  {
    "id": "ELE-013",
    "chapter": "electrochemistry",
    "tag": "KOHLRAUSCH’S LAW",
    "fact": "At infinite dilution, each ion contributes independently to the limiting molar conductivity of an electrolyte.",
    "explanation": "The limiting molar conductivity is the sum of the limiting ionic contributions multiplied by their stoichiometric coefficients.",
    "connection": "This allows limiting molar conductivity of weak electrolytes to be estimated from strong electrolytes.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-014",
    "chapter": "electrochemistry",
    "tag": "STRONG ELECTROLYTES",
    "fact": "The molar conductivity of a strong electrolyte increases only gradually as it is diluted.",
    "explanation": "Strong electrolytes are already largely dissociated. Dilution mainly reduces interionic interactions and increases ionic mobility.",
    "connection": "For sufficiently dilute strong electrolytes, the square-root concentration relation is often useful.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ELE-015",
    "chapter": "electrochemistry",
    "tag": "CORROSION",
    "fact": "Rusting of iron is an electrochemical process involving anodic and cathodic regions.",
    "explanation": "Iron is oxidised at anodic sites, while oxygen is reduced at cathodic sites in the presence of moisture. The resulting species ultimately form hydrated iron(III) oxides.",
    "connection": "Galvanisation protects iron by coating it with zinc, which can act as a sacrificial metal.",
    "scope": "ISC"
  },
  {
    "id": "ELE-016",
    "chapter": "electrochemistry",
    "tag": "FUEL CELLS",
    "fact": "A fuel cell converts chemical energy of continuously supplied reactants directly into electrical energy.",
    "explanation": "Unlike a conventional battery that stores a finite amount of reactants internally, a fuel cell can operate while fuel and oxidant are supplied.",
    "connection": "The hydrogen–oxygen fuel cell produces water as its overall product.",
    "scope": "ISC"
  },
  {
    "id": "ELE-017",
    "chapter": "electrochemistry",
    "tag": "BATTERIES",
    "fact": "A rechargeable battery can be driven in reverse by an external electrical source.",
    "explanation": "Charging forces the reverse of the spontaneous discharge reaction, regenerating the chemical species needed for later operation.",
    "connection": "Lead storage batteries are a standard example of secondary cells.",
    "scope": "ISC"
  },
  {
    "id": "ELE-018",
    "chapter": "electrochemistry",
    "tag": "CONCENTRATION CELLS",
    "fact": "A concentration cell generates emf because the activities or concentrations in its two half-cells differ.",
    "explanation": "The cell reaction tends to reduce the concentration difference. The electrode potentials differ according to the Nernst equation.",
    "connection": "A concentration cell can operate even when both electrodes are made of the same material.",
    "scope": "ISC + JEE"
  },

  {
    "id": "KIN-001",
    "chapter": "chemical-kinetics",
    "tag": "FIRST-ORDER REACTIONS",
    "fact": "The half-life of a first-order reaction does not depend on the initial concentration of the reactant.",
    "explanation": "For a first-order reaction, t₁/₂ = 0.693/k. The initial concentration does not appear in this expression.",
    "connection": "This makes half-life measurements especially useful when identifying first-order kinetics.",
    "scope": "ISC"
  },
  {
    "id": "KIN-002",
    "chapter": "chemical-kinetics",
    "tag": "REACTION RATE",
    "fact": "The overall order of a reaction is the sum of the powers of concentration terms in its experimentally determined rate law.",
    "explanation": "For rate = k[A]ᵐ[B]ⁿ, the overall order is m + n. These exponents are determined experimentally; they cannot generally be read from the balanced equation.",
    "connection": "Do not confuse order with molecularity, which applies to an elementary step.",
    "scope": "ISC"
  },
  {
    "id": "KIN-003",
    "chapter": "chemical-kinetics",
    "tag": "MOLECULARITY",
    "fact": "Molecularity is the number of reacting species participating in an elementary step.",
    "explanation": "It is a theoretical quantity defined for an elementary reaction step and is always a positive integer. Overall reactions may involve multiple steps.",
    "connection": "Order is experimental and can be zero or fractional, whereas molecularity cannot be zero or fractional.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-004",
    "chapter": "chemical-kinetics",
    "tag": "RATE CONSTANT",
    "fact": "The units of a rate constant depend on the overall order of the reaction.",
    "explanation": "For a rate law rate = k[A]ⁿ, the units of k are concentration^(1−n) time⁻¹. Thus a first-order rate constant has units of time⁻¹.",
    "connection": "Checking units is a quick way to identify mistakes in rate-law calculations.",
    "scope": "ISC"
  },
  {
    "id": "KIN-005",
    "chapter": "chemical-kinetics",
    "tag": "ZERO-ORDER REACTIONS",
    "fact": "For a zero-order reaction, the rate is independent of reactant concentration.",
    "explanation": "The integrated equation for A → products is [A]t = [A]₀ − kt. A plot of concentration against time is linear.",
    "connection": "The half-life of a zero-order reaction depends on the initial concentration: t₁/₂ = [A]₀/(2k).",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-006",
    "chapter": "chemical-kinetics",
    "tag": "FIRST-ORDER REACTIONS",
    "fact": "A first-order reaction gives a straight line when ln[A] is plotted against time.",
    "explanation": "The integrated rate equation is ln([A]₀/[A]t) = kt. The slope of a plot of ln[A] against time is −k.",
    "connection": "A straight-line plot is often used to determine the order experimentally.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-007",
    "chapter": "chemical-kinetics",
    "tag": "PSEUDO-FIRST ORDER",
    "fact": "A reaction involving several reactants may show pseudo-first-order kinetics if one reactant is present in large excess.",
    "explanation": "The concentration of the excess reactant changes negligibly, so its contribution can be absorbed into an observed rate constant.",
    "connection": "Hydrolysis of an ester in a large excess of water is a standard example.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-008",
    "chapter": "chemical-kinetics",
    "tag": "TEMPERATURE",
    "fact": "The rate constant of many reactions increases as temperature increases.",
    "explanation": "At higher temperature, a greater fraction of molecules has energy at least equal to the activation energy, increasing the number of effective collisions.",
    "connection": "The Arrhenius equation quantitatively describes the temperature dependence of the rate constant.",
    "scope": "ISC"
  },
  {
    "id": "KIN-009",
    "chapter": "chemical-kinetics",
    "tag": "ARRHENIUS EQUATION",
    "fact": "The Arrhenius equation is k = A e^(−Ea/RT).",
    "explanation": "A is the frequency factor, Ea is activation energy, R is the gas constant and T is absolute temperature.",
    "connection": "A plot of ln k against 1/T has slope −Ea/R.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-010",
    "chapter": "chemical-kinetics",
    "tag": "ACTIVATION ENERGY",
    "fact": "Activation energy is the energy barrier that reactants must overcome to reach the transition state.",
    "explanation": "A lower activation energy generally means a larger fraction of molecules can react at the same temperature.",
    "connection": "A catalyst provides an alternative pathway with a lower activation energy.",
    "scope": "ISC"
  },
  {
    "id": "KIN-011",
    "chapter": "chemical-kinetics",
    "tag": "CATALYSIS",
    "fact": "A catalyst changes the reaction pathway but does not change the equilibrium constant.",
    "explanation": "A catalyst lowers the activation energy for both forward and reverse reactions. It changes how quickly equilibrium is reached, not the equilibrium composition.",
    "connection": "A catalyst does not make a thermodynamically non-spontaneous reaction spontaneous.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-012",
    "chapter": "chemical-kinetics",
    "tag": "REACTION MECHANISM",
    "fact": "The slowest step in a multi-step mechanism can control the observed reaction rate.",
    "explanation": "The rate-determining step is the slow step that limits the overall rate under the mechanism's conditions.",
    "connection": "A proposed mechanism must be consistent with the experimentally observed rate law.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-013",
    "chapter": "chemical-kinetics",
    "tag": "COLLISION THEORY",
    "fact": "Not every collision between reactant molecules leads to a reaction.",
    "explanation": "For a collision to be effective, molecules must collide with sufficient energy and a suitable orientation.",
    "connection": "The steric factor in collision theory accounts approximately for orientation requirements.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-014",
    "chapter": "chemical-kinetics",
    "tag": "RATE OF REACTION",
    "fact": "Reaction rate is expressed as the change in concentration per unit time.",
    "explanation": "For aA → products, the rate of disappearance of A is −(1/a)d[A]/dt when stoichiometric normalisation is used.",
    "connection": "The negative sign ensures that the reaction rate is positive as the reactant concentration decreases.",
    "scope": "ISC"
  },
  {
    "id": "KIN-015",
    "chapter": "chemical-kinetics",
    "tag": "REACTION ORDER",
    "fact": "The order of a reaction is determined experimentally.",
    "explanation": "The stoichiometric coefficients in an overall balanced equation do not generally give the powers in the rate law unless the reaction is an elementary step.",
    "connection": "Initial-rate experiments compare how the rate changes when reactant concentrations are varied.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-016",
    "chapter": "chemical-kinetics",
    "tag": "HALF-LIFE",
    "fact": "For a first-order reaction, the time for 75% completion is twice its half-life.",
    "explanation": "After one half-life 50% remains; after two half-lives 25% remains, so 75% has reacted.",
    "connection": "For first-order reactions, equal time intervals reduce the remaining amount by the same fraction.",
    "scope": "ISC + JEE"
  },
  {
    "id": "KIN-017",
    "chapter": "chemical-kinetics",
    "tag": "TEMPERATURE COEFFICIENT",
    "fact": "The rate of many reactions increases significantly for a modest rise in temperature.",
    "explanation": "The temperature coefficient is often defined as the ratio of rate constants at temperatures differing by 10 K, for a specified range.",
    "connection": "The common approximate factor of two to three is a rule of thumb, not a universal law.",
    "scope": "ISC"
  },
  {
    "id": "KIN-018",
    "chapter": "chemical-kinetics",
    "tag": "ARRHENIUS PLOT",
    "fact": "A linear Arrhenius plot can be used to estimate the activation energy.",
    "explanation": "From ln k = ln A − Ea/(RT), plotting ln k against 1/T gives slope −Ea/R.",
    "connection": "The intercept is ln A when natural logarithms are used.",
    "scope": "ISC + JEE"
  },

  {
    "id": "DF-001",
    "chapter": "d-f-block",
    "tag": "LANTHANOID CONTRACTION",
    "fact": "The lanthanoid contraction is associated with the poor shielding effect of 4f electrons.",
    "explanation": "As nuclear charge increases across the lanthanoid series, 4f electrons shield one another imperfectly. The effective nuclear attraction increases, producing a gradual decrease in size.",
    "connection": "The similar sizes of zirconium and hafnium are a well-known consequence of lanthanoid contraction.",
    "scope": "ISC"
  },
  {
    "id": "DF-002",
    "chapter": "d-f-block",
    "tag": "COLOUR",
    "fact": "Many transition-metal ions are coloured because they can undergo d–d electronic transitions.",
    "explanation": "In a ligand field, the d orbitals split into sets of different energies. Absorption of visible light can promote an electron between these levels.",
    "connection": "Ions with d⁰ or d¹⁰ configurations generally do not show d–d transitions. Other effects can still produce colour in some compounds.",
    "scope": "ISC"
  },
  {
    "id": "DF-003",
    "chapter": "d-f-block",
    "tag": "OXIDATION STATES",
    "fact": "Transition elements commonly show variable oxidation states.",
    "explanation": "The energies of the ns and (n−1)d orbitals are relatively close, allowing different numbers of electrons to participate in bonding.",
    "connection": "Manganese shows a particularly wide range of oxidation states in its compounds.",
    "scope": "ISC"
  },
  {
    "id": "DF-004",
    "chapter": "d-f-block",
    "tag": "MAGNETISM",
    "fact": "The spin-only magnetic moment depends on the number of unpaired electrons.",
    "explanation": "For n unpaired electrons, μ = √[n(n+2)] BM in the spin-only approximation.",
    "connection": "First determine the d-electron count before calculating the number of unpaired electrons.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-005",
    "chapter": "d-f-block",
    "tag": "ELECTRONIC CONFIGURATION",
    "fact": "Chromium and copper are common exceptions to the simplest Aufbau prediction.",
    "explanation": "Cr is [Ar] 3d⁵ 4s¹ and Cu is [Ar] 3d¹⁰ 4s¹. The close energies of 3d and 4s orbitals contribute to these configurations.",
    "connection": "Remember that the 4s electrons are generally removed before 3d electrons when forming cations.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-006",
    "chapter": "d-f-block",
    "tag": "CATALYTIC ACTIVITY",
    "fact": "Many transition metals and their compounds are effective catalysts.",
    "explanation": "Variable oxidation states, adsorption of reactants and the ability to form intermediate compounds can provide alternative reaction pathways.",
    "connection": "Iron is used in the Haber process, while V₂O₅ is used in the Contact process.",
    "scope": "ISC"
  },
  {
    "id": "DF-007",
    "chapter": "d-f-block",
    "tag": "ALLOY FORMATION",
    "fact": "Transition metals readily form alloys with one another.",
    "explanation": "Their atomic sizes and crystal structures are often similar, allowing atoms of one metal to replace those of another in a metallic lattice.",
    "connection": "Stainless steel is an alloy based mainly on iron, chromium and often nickel.",
    "scope": "ISC"
  },
  {
    "id": "DF-008",
    "chapter": "d-f-block",
    "tag": "INTERSTITIAL COMPOUNDS",
    "fact": "Transition metals can form hard interstitial compounds with small atoms such as carbon and nitrogen.",
    "explanation": "Small atoms occupy spaces in the metal lattice. These compounds often have high melting points and retain metallic conductivity to varying extents.",
    "connection": "Carbides and nitrides of transition metals are used in hard materials and cutting tools.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-009",
    "chapter": "d-f-block",
    "tag": "POTASSIUM DICHROMATE",
    "fact": "Dichromate ions are orange and are powerful oxidising agents in acidic medium.",
    "explanation": "In acidic solution, Cr₂O₇²⁻ is reduced from chromium(VI) to chromium(III), which commonly gives green solutions.",
    "connection": "The colour change is useful in redox titrations involving acidified dichromate.",
    "scope": "ISC"
  },
  {
    "id": "DF-010",
    "chapter": "d-f-block",
    "tag": "PERMANGANATE",
    "fact": "Permanganate ion is a strong oxidising agent in acidic medium.",
    "explanation": "In acidic solution, MnO₄⁻ is reduced from manganese(VII) to Mn²⁺, which is nearly colourless or very pale pink in dilute solution.",
    "connection": "KMnO₄ often acts as a self-indicator in redox titrations.",
    "scope": "ISC"
  },
  {
    "id": "DF-011",
    "chapter": "d-f-block",
    "tag": "LANTHANOIDS",
    "fact": "Lanthanoids commonly show the +3 oxidation state.",
    "explanation": "The +3 state generally results from loss of two 6s electrons and one additional electron, commonly from 5d or 4f depending on the element.",
    "connection": "Some lanthanoids also show +2 or +4 states when these provide particularly favourable electronic arrangements.",
    "scope": "ISC"
  },
  {
    "id": "DF-012",
    "chapter": "d-f-block",
    "tag": "ACTINOIDS",
    "fact": "Actinoids show a wider range of oxidation states than lanthanoids.",
    "explanation": "The 5f, 6d and 7s orbitals have comparable energies, allowing different numbers of electrons to participate in bonding.",
    "connection": "Uranium exhibits several oxidation states, including +3, +4, +5 and +6.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-013",
    "chapter": "d-f-block",
    "tag": "COLOUR",
    "fact": "The colour of many transition-metal compounds depends on the ligand environment.",
    "explanation": "Changing ligands can change d-orbital splitting and therefore the energy of absorbed light.",
    "connection": "The same metal ion can have different colours in different complexes.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-014",
    "chapter": "d-f-block",
    "tag": "MAGNETIC BEHAVIOUR",
    "fact": "A species with one or more unpaired electrons is generally paramagnetic.",
    "explanation": "Unpaired electron spins contribute a net magnetic moment. A species with all electrons paired is diamagnetic in the usual elementary treatment.",
    "connection": "Determine the electronic configuration of the ion, not just the neutral atom, before assessing magnetic behaviour.",
    "scope": "ISC"
  },
  {
    "id": "DF-015",
    "chapter": "d-f-block",
    "tag": "CONTRACTION",
    "fact": "Lanthanoid contraction affects the basicity of lanthanoid hydroxides.",
    "explanation": "As the size of Ln³⁺ decreases across the series, the ionic character and basicity of Ln(OH)₃ generally decrease.",
    "connection": "The hydroxides become less basic from La(OH)₃ towards Lu(OH)₃.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-016",
    "chapter": "d-f-block",
    "tag": "OXIDISING AGENTS",
    "fact": "Acidified dichromate and permanganate are common oxidising agents in inorganic chemistry.",
    "explanation": "Both undergo reduction to lower oxidation states while oxidising another species. Their standard potentials depend on the medium and reaction conditions.",
    "connection": "Always balance redox equations in the correct medium; acidic and alkaline conditions can give different products.",
    "scope": "ISC"
  },
  {
    "id": "DF-017",
    "chapter": "d-f-block",
    "tag": "D-BLOCK TRENDS",
    "fact": "Transition elements often have high enthalpies of atomisation.",
    "explanation": "Strong metallic bonding is associated with participation of both ns and (n−1)d electrons in bonding.",
    "connection": "This contributes to their hardness, high melting points and high boiling points, although there are exceptions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "DF-018",
    "chapter": "d-f-block",
    "tag": "ELECTRONIC CONFIGURATION",
    "fact": "The d-block elements are characterised by progressive filling of d orbitals in atoms or common ions.",
    "explanation": "The general outer electronic configuration is often written as (n−1)d¹–¹⁰ ns⁰–², with exceptions.",
    "connection": "The term transition element is narrower than d-block element; a completely filled d subshell in the atom and common ions matters to the definition.",
    "scope": "ISC + JEE"
  },

  {
    "id": "COO-001",
    "chapter": "coordination-compounds",
    "tag": "COORDINATION NUMBER",
    "fact": "The coordination number counts the donor atoms directly bonded to the central metal atom or ion.",
    "explanation": "It is not necessarily the number of ligand molecules. A bidentate ligand occupies two coordination positions, while a monodentate ligand occupies one.",
    "connection": "For example, six monodentate ligands or three bidentate ligands can each give coordination number six.",
    "scope": "ISC"
  },
  {
    "id": "COO-002",
    "chapter": "coordination-compounds",
    "tag": "ISOMERISM",
    "fact": "Coordination compounds can show both structural and stereoisomerism.",
    "explanation": "Structural isomers differ in connectivity, while stereoisomers have the same connectivity but differ in the spatial arrangement of ligands.",
    "connection": "Cis–trans and optical isomerism are important stereoisomerism patterns in coordination chemistry.",
    "scope": "ISC"
  },
  {
    "id": "COO-003",
    "chapter": "coordination-compounds",
    "tag": "LIGANDS",
    "fact": "A ligand is an ion or molecule that donates an electron pair to a central metal atom or ion.",
    "explanation": "The donor atom forms a coordinate bond with the metal. Ligands may be monodentate or polydentate.",
    "connection": "NH₃, H₂O, Cl⁻ and CN⁻ are common examples of ligands.",
    "scope": "ISC"
  },
  {
    "id": "COO-004",
    "chapter": "coordination-compounds",
    "tag": "CHELATION",
    "fact": "A chelating ligand binds to a metal ion through two or more donor atoms.",
    "explanation": "The ligand forms one or more rings involving the metal centre. Chelation often increases complex stability.",
    "connection": "Ethylenediamine and EDTA are common chelating ligands.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-005",
    "chapter": "coordination-compounds",
    "tag": "AMBIDENTATE LIGANDS",
    "fact": "An ambidentate ligand can coordinate through either of two different donor atoms.",
    "explanation": "For example, NO₂⁻ can coordinate through nitrogen or oxygen, while SCN⁻ can coordinate through sulfur or nitrogen.",
    "connection": "Ambidentate ligands can give linkage isomerism.",
    "scope": "ISC"
  },
  {
    "id": "COO-006",
    "chapter": "coordination-compounds",
    "tag": "IUPAC NOMENCLATURE",
    "fact": "Ligand names are generally listed alphabetically in coordination-compound names.",
    "explanation": "Prefixes indicating the number of a ligand are not normally considered when alphabetising ligand names. The metal oxidation state is written in Roman numerals.",
    "connection": "For anionic complexes, the metal name generally ends in -ate.",
    "scope": "ISC"
  },
  {
    "id": "COO-007",
    "chapter": "coordination-compounds",
    "tag": "OXIDATION STATE",
    "fact": "The oxidation state of the central metal is found by equating the sum of ligand charges and metal charge to the complex charge.",
    "explanation": "Use the known charges of ligands such as NH₃ (0), H₂O (0), Cl⁻ (−1) and CN⁻ (−1), then solve for the metal oxidation state.",
    "connection": "Do not confuse oxidation state with coordination number.",
    "scope": "ISC"
  },
  {
    "id": "COO-008",
    "chapter": "coordination-compounds",
    "tag": "CRYSTAL FIELD THEORY",
    "fact": "In an octahedral field, the five d orbitals split into t₂g and e_g sets.",
    "explanation": "The t₂g set is lower in energy, while the e_g set is higher. The energy gap is called Δo.",
    "connection": "The magnitude of Δo helps determine whether a complex is high-spin or low-spin.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-009",
    "chapter": "coordination-compounds",
    "tag": "SPECTROCHEMICAL SERIES",
    "fact": "Ligands differ in the strength of the crystal field they produce.",
    "explanation": "The spectrochemical series arranges ligands roughly from weak-field to strong-field. Strong-field ligands produce larger splitting.",
    "connection": "CN⁻ and CO are strong-field ligands, while I⁻ is weak-field.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-010",
    "chapter": "coordination-compounds",
    "tag": "GEOMETRY",
    "fact": "Coordination number six commonly gives octahedral geometry.",
    "explanation": "In an octahedral complex, six donor atoms occupy positions around the central metal along the three Cartesian axes.",
    "connection": "Coordination number four may give tetrahedral or square-planar geometry.",
    "scope": "ISC"
  },
  {
    "id": "COO-011",
    "chapter": "coordination-compounds",
    "tag": "HYBRIDISATION",
    "fact": "Valence bond theory uses hybridisation to describe the directional bonding in coordination complexes.",
    "explanation": "Common descriptions include d²sp³ or sp³d² for octahedral complexes, and dsp² for square-planar complexes.",
    "connection": "Crystal field theory provides a more detailed account of d-orbital splitting and magnetic behaviour.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-012",
    "chapter": "coordination-compounds",
    "tag": "OPTICAL ISOMERISM",
    "fact": "Some coordination complexes exist as non-superimposable mirror images.",
    "explanation": "Such complexes are optically active enantiomers. Octahedral complexes containing chelating ligands often show this behaviour.",
    "connection": "The Δ and Λ notation is used for certain helical octahedral coordination arrangements.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-013",
    "chapter": "coordination-compounds",
    "tag": "LINKAGE ISOMERISM",
    "fact": "Linkage isomerism occurs when an ambidentate ligand coordinates through different donor atoms.",
    "explanation": "The same ligand can attach to the central metal through different atoms, producing different connectivity.",
    "connection": "Nitro and nitrito forms of a nitrite complex are classic examples.",
    "scope": "ISC"
  },
  {
    "id": "COO-014",
    "chapter": "coordination-compounds",
    "tag": "IONISATION ISOMERISM",
    "fact": "Ionisation isomers produce different ions in solution despite having the same overall composition.",
    "explanation": "An anion inside the coordination sphere exchanges places with a counter-ion outside the sphere.",
    "connection": "The isomers can be distinguished by tests for the different ions released in solution.",
    "scope": "ISC"
  },
  {
    "id": "COO-015",
    "chapter": "coordination-compounds",
    "tag": "MAGNETIC BEHAVIOUR",
    "fact": "The magnetic behaviour of many coordination complexes depends on ligand-field splitting and electron pairing.",
    "explanation": "Weak-field ligands often favour high-spin arrangements, while strong-field ligands may favour low-spin arrangements when the pairing-energy balance permits.",
    "connection": "Determine d-electron count, geometry and ligand strength before counting unpaired electrons.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-016",
    "chapter": "coordination-compounds",
    "tag": "STABILITY",
    "fact": "Chelate complexes are often more stable than comparable complexes with only monodentate ligands.",
    "explanation": "The chelate effect is largely entropic in many common cases, although enthalpic factors also contribute.",
    "connection": "EDTA forms stable complexes with many metal ions and is used in complexometric titrations.",
    "scope": "ISC + JEE"
  },
  {
    "id": "COO-017",
    "chapter": "coordination-compounds",
    "tag": "APPLICATIONS",
    "fact": "Coordination compounds have important biological and industrial roles.",
    "explanation": "Haemoglobin contains an iron coordination environment, chlorophyll contains magnesium, and many metal complexes act as catalysts.",
    "connection": "Cisplatin is a coordination compound used as an anticancer drug.",
    "scope": "ISC"
  },
  {
    "id": "COO-018",
    "chapter": "coordination-compounds",
    "tag": "FORMULA WRITING",
    "fact": "Square brackets indicate the coordination sphere in a coordination compound.",
    "explanation": "Ions outside the brackets are counter-ions and are not directly coordinated to the central metal.",
    "connection": "The coordination sphere and counter-ions must be distinguished when writing names and formulas.",
    "scope": "ISC"
  },

  {
    "id": "HAL-001",
    "chapter": "haloalkanes-haloarenes",
    "tag": "NUCLEOPHILIC SUBSTITUTION",
    "fact": "Tertiary alkyl halides commonly favour an SN1 pathway in polar protic solvents.",
    "explanation": "The rate-determining ionisation step forms a carbocation. Alkyl groups stabilise the tertiary carbocation through inductive effects and hyperconjugation.",
    "connection": "This is a trend, not an unconditional rule: substrate, solvent, nucleophile and reaction conditions all matter.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-002",
    "chapter": "haloalkanes-haloarenes",
    "tag": "HALOARENES",
    "fact": "Chlorobenzene is less reactive than chloroethane towards ordinary nucleophilic substitution.",
    "explanation": "The lone pair on chlorine is conjugated with the benzene ring, giving the C–Cl bond partial double-bond character. The carbon is also sp²-hybridised.",
    "connection": "The usual SN1 and SN2 pathways are therefore difficult for haloarenes under ordinary conditions.",
    "scope": "ISC"
  },
  {
    "id": "HAL-003",
    "chapter": "haloalkanes-haloarenes",
    "tag": "SN2 MECHANISM",
    "fact": "An SN2 reaction occurs through a single concerted step.",
    "explanation": "The nucleophile attacks from the side opposite the leaving group while the leaving group departs. The mechanism produces inversion of configuration at a stereogenic centre.",
    "connection": "Steric hindrance strongly affects the rate of SN2 reactions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-004",
    "chapter": "haloalkanes-haloarenes",
    "tag": "SN1 MECHANISM",
    "fact": "An SN1 reaction proceeds through a carbocation intermediate.",
    "explanation": "The rate-determining ionisation step is unimolecular. If a stereogenic carbocation is formed, attack from either face can lead to loss of stereochemical purity.",
    "connection": "Carbocation rearrangements may occur if a more stable carbocation can form.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-005",
    "chapter": "haloalkanes-haloarenes",
    "tag": "LEAVING GROUPS",
    "fact": "A better leaving group generally makes nucleophilic substitution easier.",
    "explanation": "A leaving group is better when it can depart as a relatively stable species. For halides, the usual leaving-group trend is I⁻ > Br⁻ > Cl⁻ >> F⁻ in common substitution contexts.",
    "connection": "Leaving-group ability is related to the stability and basicity of the departing anion.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-006",
    "chapter": "haloalkanes-haloarenes",
    "tag": "ELIMINATION",
    "fact": "Alcoholic KOH commonly promotes elimination of HX from haloalkanes.",
    "explanation": "A base removes a β-hydrogen while the halide leaves, producing an alkene. The reaction conditions influence substitution versus elimination.",
    "connection": "Aqueous KOH more often favours substitution, while alcoholic KOH and heat favour elimination.",
    "scope": "ISC"
  },
  {
    "id": "HAL-007",
    "chapter": "haloalkanes-haloarenes",
    "tag": "Zaitsev’s RULE",
    "fact": "In many β-elimination reactions, the more substituted alkene is the major product.",
    "explanation": "The more substituted alkene is often more stable due to hyperconjugation and inductive effects. This is commonly called Zaitsev’s rule.",
    "connection": "Steric effects, base size and substrate structure can produce exceptions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-008",
    "chapter": "haloalkanes-haloarenes",
    "tag": "WURTZ REACTION",
    "fact": "The Wurtz reaction couples alkyl halides using sodium metal in dry ether.",
    "explanation": "Two alkyl groups couple to form a higher alkane. The reaction is most useful for preparing symmetrical alkanes from suitable primary halides.",
    "connection": "Using two different alkyl halides generally gives a mixture of products.",
    "scope": "ISC"
  },
  {
    "id": "HAL-009",
    "chapter": "haloalkanes-haloarenes",
    "tag": "FINKELSTEIN REACTION",
    "fact": "The Finkelstein reaction converts an alkyl chloride or bromide into an alkyl iodide using NaI in acetone.",
    "explanation": "The reaction is driven forward in part by precipitation of NaCl or NaBr in acetone.",
    "connection": "It is a useful halogen-exchange reaction involving nucleophilic substitution.",
    "scope": "ISC"
  },
  {
    "id": "HAL-010",
    "chapter": "haloalkanes-haloarenes",
    "tag": "SWARTS REACTION",
    "fact": "The Swarts reaction is used to prepare alkyl fluorides from other alkyl halides.",
    "explanation": "Metallic fluorides such as AgF or certain other fluorinating agents replace chlorine or bromine with fluorine.",
    "connection": "Direct fluorination is often difficult to control because fluorine is extremely reactive.",
    "scope": "ISC"
  },
  {
    "id": "HAL-011",
    "chapter": "haloalkanes-haloarenes",
    "tag": "GRIGNARD REAGENTS",
    "fact": "Grignard reagents have the general formula RMgX and must be prepared under anhydrous conditions.",
    "explanation": "Water protonates the carbon–magnesium bond, destroying the reagent. The carbon bonded to magnesium behaves as a strong nucleophile and base.",
    "connection": "Grignard reagents are widely used to form carbon–carbon bonds with carbonyl compounds.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-012",
    "chapter": "haloalkanes-haloarenes",
    "tag": "BENZYL AND ALLYL HALIDES",
    "fact": "Benzylic and allylic carbocations are stabilised by resonance.",
    "explanation": "The positive charge can be delocalised over the adjacent π system, making ionisation more favourable than in many ordinary primary alkyl systems.",
    "connection": "This helps explain the unusually high reactivity of some benzylic and allylic halides.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-013",
    "chapter": "haloalkanes-haloarenes",
    "tag": "POLYHALOGEN COMPOUNDS",
    "fact": "Some polyhalogen compounds have important environmental or industrial consequences.",
    "explanation": "For example, certain chlorofluorocarbons can release chlorine radicals in the stratosphere, which catalyse ozone depletion.",
    "connection": "The environmental impact of a compound depends on its atmospheric lifetime, transport and chemical reactivity.",
    "scope": "ISC"
  },
  {
    "id": "HAL-014",
    "chapter": "haloalkanes-haloarenes",
    "tag": "OPTICAL ACTIVITY",
    "fact": "An SN2 reaction at a stereogenic carbon gives inversion of configuration.",
    "explanation": "Backside attack by the nucleophile reverses the arrangement of substituents around the reacting carbon, often called Walden inversion.",
    "connection": "The R/S descriptor may or may not change depending on the priority order after substitution.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-015",
    "chapter": "haloalkanes-haloarenes",
    "tag": "NUCLEOPHILICITY",
    "fact": "Nucleophilicity and basicity are related but not identical concepts.",
    "explanation": "Basicity is a thermodynamic tendency to accept a proton, while nucleophilicity describes the kinetic tendency to attack an electrophilic centre.",
    "connection": "Solvent can change the relative nucleophilicity order of halide ions.",
    "scope": "JEE Bridge"
  },
  {
    "id": "HAL-016",
    "chapter": "haloalkanes-haloarenes",
    "tag": "BENZYLIC SUBSTITUTION",
    "fact": "Benzyl halides can undergo nucleophilic substitution readily.",
    "explanation": "The benzylic position is activated by resonance stabilisation of developing positive charge and, in SN2 reactions, by favourable transition-state effects.",
    "connection": "Do not confuse benzyl halides with aryl halides: the halogen is attached to a different type of carbon.",
    "scope": "ISC + JEE"
  },
  {
    "id": "HAL-017",
    "chapter": "haloalkanes-haloarenes",
    "tag": "POLARITY",
    "fact": "The carbon–halogen bond is polar because halogens are more electronegative than carbon.",
    "explanation": "The carbon bonded to halogen is electrophilic and can be attacked by nucleophiles.",
    "connection": "Bond strength, polarisation and leaving-group ability all influence the reactivity of haloalkanes.",
    "scope": "ISC"
  },
  {
    "id": "HAL-018",
    "chapter": "haloalkanes-haloarenes",
    "tag": "HALOARENES",
    "fact": "Electron-withdrawing groups at ortho and para positions can facilitate nucleophilic aromatic substitution.",
    "explanation": "Groups such as nitro stabilise the anionic intermediate formed during addition–elimination substitution when positioned suitably relative to the leaving group.",
    "connection": "This is an important exception to the low reactivity of ordinary haloarenes.",
    "scope": "JEE Bridge"
  },

  {
    "id": "ALC-001",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ACIDITY",
    "fact": "Phenol is more acidic than ethanol because the phenoxide ion is resonance-stabilised.",
    "explanation": "After phenol loses H⁺, its negative charge is delocalised over the oxygen and aromatic ring. The ethoxide ion has no comparable resonance stabilisation.",
    "connection": "This conjugate-base stability argument is a reliable way to compare the acidity of many organic compounds.",
    "scope": "ISC"
  },
  {
    "id": "ALC-002",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ETHER CLEAVAGE",
    "fact": "Concentrated HI can cleave many ethers by breaking a carbon–oxygen bond.",
    "explanation": "The ether oxygen is first protonated. Iodide then attacks a suitable carbon, and the detailed pathway depends on whether the carbon is primary, secondary, tertiary or aryl.",
    "connection": "In an aryl–alkyl ether, cleavage generally occurs at the alkyl–oxygen bond rather than breaking the aryl–oxygen bond.",
    "scope": "ISC"
  },
  {
    "id": "ALC-003",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ALCOHOL CLASSIFICATION",
    "fact": "Alcohols are classified as primary, secondary or tertiary according to the number of carbon groups attached to the carbon bearing –OH.",
    "explanation": "A primary alcohol has one carbon group, a secondary alcohol has two and a tertiary alcohol has three attached to the hydroxyl-bearing carbon.",
    "connection": "This classification helps predict oxidation products and reaction behaviour.",
    "scope": "ISC"
  },
  {
    "id": "ALC-004",
    "chapter": "alcohols-phenols-ethers",
    "tag": "HYDROGEN BONDING",
    "fact": "Alcohols generally have higher boiling points than comparable ethers of similar molar mass.",
    "explanation": "Alcohol molecules can form intermolecular hydrogen bonds through their O–H groups, while ordinary ethers cannot donate such hydrogen bonds to one another.",
    "connection": "Hydrogen bonding also contributes to the high boiling point of water.",
    "scope": "ISC"
  },
  {
    "id": "ALC-005",
    "chapter": "alcohols-phenols-ethers",
    "tag": "DEHYDRATION",
    "fact": "Dehydration of alcohols can produce alkenes.",
    "explanation": "Under suitable acidic conditions and heat, an alcohol loses water. The mechanism and product distribution depend on the alcohol structure and conditions.",
    "connection": "In many simple cases, the more substituted alkene is favoured.",
    "scope": "ISC"
  },
  {
    "id": "ALC-006",
    "chapter": "alcohols-phenols-ethers",
    "tag": "OXIDATION",
    "fact": "Primary alcohols can be oxidised to aldehydes and further to carboxylic acids.",
    "explanation": "The product depends on the oxidising agent and reaction conditions. Secondary alcohols generally give ketones, while tertiary alcohols resist ordinary oxidation.",
    "connection": "Use controlled conditions when the aldehyde is the desired product.",
    "scope": "ISC"
  },
  {
    "id": "ALC-007",
    "chapter": "alcohols-phenols-ethers",
    "tag": "LUCAS TEST",
    "fact": "The Lucas test can distinguish many primary, secondary and tertiary alcohols by their different rates of turbidity formation.",
    "explanation": "The test uses concentrated HCl and anhydrous ZnCl₂. Tertiary alcohols generally react fastest under the standard test conditions.",
    "connection": "The observed rate is related to how readily the alcohol forms a carbocation under the reaction conditions.",
    "scope": "ISC"
  },
  {
    "id": "ALC-008",
    "chapter": "alcohols-phenols-ethers",
    "tag": "PHENOL",
    "fact": "Phenol reacts with aqueous NaOH to form sodium phenoxide.",
    "explanation": "Phenol is sufficiently acidic to react with hydroxide ions, whereas ordinary alcohols are generally not acidic enough to react with aqueous NaOH.",
    "connection": "This reaction helps distinguish phenols from many alcohols.",
    "scope": "ISC"
  },
  {
    "id": "ALC-009",
    "chapter": "alcohols-phenols-ethers",
    "tag": "KOLBE REACTION",
    "fact": "The Kolbe–Schmitt reaction converts sodium phenoxide into salicylic acid after carbonation and acidification.",
    "explanation": "Sodium phenoxide reacts with CO₂ under pressure and heat, followed by acidification, to give mainly o-hydroxybenzoic acid under the usual conditions.",
    "connection": "Salicylic acid is a precursor to aspirin.",
    "scope": "ISC"
  },
  {
    "id": "ALC-010",
    "chapter": "alcohols-phenols-ethers",
    "tag": "REIMER–TIEMANN REACTION",
    "fact": "Phenol can give salicylaldehyde through the Reimer–Tiemann reaction.",
    "explanation": "Phenol is treated with chloroform and aqueous alkali, followed by acidification. The formyl group is introduced mainly at the ortho position.",
    "connection": "The reaction is a useful example of electrophilic substitution in an activated aromatic ring.",
    "scope": "ISC"
  },
  {
    "id": "ALC-011",
    "chapter": "alcohols-phenols-ethers",
    "tag": "WILLIAMSON SYNTHESIS",
    "fact": "Williamson ether synthesis uses an alkoxide ion and an alkyl halide to prepare ethers.",
    "explanation": "The reaction generally proceeds by an SN2 mechanism, so primary alkyl halides are especially suitable.",
    "connection": "Tertiary alkyl halides often undergo elimination instead of the desired substitution.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ALC-012",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ETHER STRUCTURE",
    "fact": "Ethers contain an oxygen atom bonded to two carbon groups.",
    "explanation": "Their general structure is R–O–R′. The groups may be identical or different and may be alkyl or aryl.",
    "connection": "Ethers are generally less reactive than alcohols but can undergo cleavage with strong acids such as HI.",
    "scope": "ISC"
  },
  {
    "id": "ALC-013",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ACIDITY",
    "fact": "Electron-withdrawing substituents generally increase the acidity of phenols.",
    "explanation": "They stabilise the phenoxide ion through inductive or resonance effects, depending on their position and nature.",
    "connection": "Nitrophenols are generally more acidic than phenol; ortho and para nitro groups can stabilise the anion by resonance.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ALC-014",
    "chapter": "alcohols-phenols-ethers",
    "tag": "IODoFORM TEST",
    "fact": "Ethanol and alcohols containing the CH₃CH(OH)– group can give the iodoform test.",
    "explanation": "Under iodine and alkali, these compounds can be oxidised to or behave like methyl carbonyl compounds, eventually producing yellow CHI₃.",
    "connection": "The yellow precipitate of iodoform is a useful positive observation.",
    "scope": "ISC"
  },
  {
    "id": "ALC-015",
    "chapter": "alcohols-phenols-ethers",
    "tag": "BOILING POINT",
    "fact": "Branching generally lowers the boiling point of isomeric alcohols.",
    "explanation": "Increased branching usually reduces surface area and weakens London dispersion forces, although hydrogen bonding and molecular structure also matter.",
    "connection": "Compare isomers only after considering both intermolecular hydrogen bonding and dispersion forces.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ALC-016",
    "chapter": "alcohols-phenols-ethers",
    "tag": "PHENOL REACTIONS",
    "fact": "Phenol gives a violet, blue or other characteristic colour with neutral ferric chloride, depending on conditions and structure.",
    "explanation": "The colour arises from complex formation between Fe(III) and phenoxide-like species.",
    "connection": "The ferric chloride test is commonly used as a qualitative test for phenolic groups.",
    "scope": "ISC"
  },
  {
    "id": "ALC-017",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ACIDITY",
    "fact": "Ordinary alcohols are much weaker acids than phenols.",
    "explanation": "Alkoxide ions are not resonance-stabilised, while phenoxide ions have delocalisation of negative charge into the aromatic ring.",
    "connection": "Alcohols react with sodium metal to release hydrogen, but generally do not react with aqueous sodium hydroxide.",
    "scope": "ISC + JEE"
  },
  {
    "id": "ALC-018",
    "chapter": "alcohols-phenols-ethers",
    "tag": "ETHER PREPARATION",
    "fact": "Symmetrical ethers can be prepared by intermolecular dehydration of primary alcohols under suitable acidic conditions.",
    "explanation": "At a suitable temperature, two alcohol molecules combine with loss of water. Higher temperatures often favour alkene formation instead.",
    "connection": "This method is less suitable for preparing unsymmetrical ethers because mixtures may form.",
    "scope": "ISC"
  },

  {
    "id": "CAR-001",
    "chapter": "aldehydes-ketones-acids",
    "tag": "TOLLENS' TEST",
    "fact": "Most aldehydes give a positive Tollens' test, while ordinary ketones do not.",
    "explanation": "An aldehyde is oxidised to a carboxylate under the test conditions, while the silver(I) complex is reduced to metallic silver.",
    "connection": "The test is useful for distinguishing many aldehydes from ketones, but some special compounds can give exceptions.",
    "scope": "ISC"
  },
  {
    "id": "CAR-002",
    "chapter": "aldehydes-ketones-acids",
    "tag": "CANNIZZARO REACTION",
    "fact": "Aldehydes without an α-hydrogen can undergo the Cannizzaro reaction in concentrated alkali.",
    "explanation": "Two aldehyde molecules disproportionate: one is oxidised to a carboxylate ion and the other is reduced to an alcohol.",
    "connection": "Formaldehyde and benzaldehyde are common textbook examples.",
    "scope": "ISC"
  },
  {
    "id": "CAR-003",
    "chapter": "aldehydes-ketones-acids",
    "tag": "ALDOL CONDENSATION",
    "fact": "Aldehydes and ketones containing an α-hydrogen can undergo aldol condensation.",
    "explanation": "In dilute base, an enolate-like nucleophile adds to another carbonyl molecule, producing a β-hydroxy carbonyl compound that can dehydrate.",
    "connection": "The reaction is an important method for forming carbon–carbon bonds.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-004",
    "chapter": "aldehydes-ketones-acids",
    "tag": "NUCLEOPHILIC ADDITION",
    "fact": "The carbonyl carbon is electrophilic because the C=O bond is polarised.",
    "explanation": "Oxygen attracts electron density, leaving the carbonyl carbon partially positive and susceptible to nucleophilic attack.",
    "connection": "Aldehydes are generally more reactive than ketones towards nucleophilic addition due to steric and electronic effects.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-005",
    "chapter": "aldehydes-ketones-acids",
    "tag": "FEHLING’S TEST",
    "fact": "Many aliphatic aldehydes reduce Fehling’s solution to brick-red copper(I) oxide.",
    "explanation": "The aldehyde is oxidised while Cu²⁺ is reduced to Cu₂O in alkaline solution. Aromatic aldehydes often do not respond under ordinary test conditions.",
    "connection": "Fehling’s test is commonly used to distinguish aliphatic aldehydes from many ketones.",
    "scope": "ISC"
  },
  {
    "id": "CAR-006",
    "chapter": "aldehydes-ketones-acids",
    "tag": "IODOFORM TEST",
    "fact": "Methyl ketones generally give the iodoform test.",
    "explanation": "The CH₃CO– group undergoes haloform cleavage with iodine in alkaline solution, yielding yellow triiodomethane.",
    "connection": "Ethanol and ethanal also give the test under standard conditions.",
    "scope": "ISC"
  },
  {
    "id": "CAR-007",
    "chapter": "aldehydes-ketones-acids",
    "tag": "CARBOXYLIC ACIDS",
    "fact": "Carboxylic acids are generally more acidic than phenols and alcohols.",
    "explanation": "The carboxylate ion is stabilised by resonance, with the negative charge delocalised over two oxygen atoms.",
    "connection": "Electron-withdrawing groups increase carboxylic-acid strength by stabilising the conjugate base.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-008",
    "chapter": "aldehydes-ketones-acids",
    "tag": "ESTERIFICATION",
    "fact": "Carboxylic acids react with alcohols under acidic conditions to form esters.",
    "explanation": "The acid-catalysed esterification is reversible and produces water along with the ester.",
    "connection": "Removing water or using excess of one reactant can shift the equilibrium towards ester formation.",
    "scope": "ISC"
  },
  {
    "id": "CAR-009",
    "chapter": "aldehydes-ketones-acids",
    "tag": "HVZ REACTION",
    "fact": "The Hell–Volhard–Zelinsky reaction introduces halogen at the α-carbon of a carboxylic acid.",
    "explanation": "Carboxylic acids containing an α-hydrogen can undergo α-halogenation using halogen and phosphorus or a suitable phosphorus halide.",
    "connection": "The reaction is useful for preparing α-halo acids.",
    "scope": "ISC"
  },
  {
    "id": "CAR-010",
    "chapter": "aldehydes-ketones-acids",
    "tag": "ROSENMUND REDUCTION",
    "fact": "Rosenmund reduction converts an acyl chloride into an aldehyde.",
    "explanation": "Hydrogen is used with a poisoned palladium catalyst, commonly Pd/BaSO₄, to prevent further reduction to the alcohol.",
    "connection": "Catalyst poisoning controls the extent of reduction.",
    "scope": "ISC"
  },
  {
    "id": "CAR-011",
    "chapter": "aldehydes-ketones-acids",
    "tag": "CLEMMENSEN REDUCTION",
    "fact": "Clemmensen reduction converts a carbonyl group into a methylene group under strongly acidic conditions.",
    "explanation": "Aldehydes and ketones are reduced using zinc amalgam and concentrated hydrochloric acid.",
    "connection": "Wolff–Kishner reduction achieves a similar overall transformation under strongly basic conditions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-012",
    "chapter": "aldehydes-ketones-acids",
    "tag": "WOLFF–KISHNER REDUCTION",
    "fact": "Wolff–Kishner reduction converts aldehydes or ketones into hydrocarbons under strongly basic conditions.",
    "explanation": "The carbonyl compound forms a hydrazone with hydrazine, which is then decomposed on heating with base.",
    "connection": "It is an alternative to Clemmensen reduction when acid-sensitive functional groups are present.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-013",
    "chapter": "aldehydes-ketones-acids",
    "tag": "BENZOIN CONDENSATION",
    "fact": "Benzaldehyde can undergo benzoin condensation in the presence of suitable cyanide or thiamine catalysis.",
    "explanation": "Two aldehyde molecules combine to form an α-hydroxy ketone, benzoin.",
    "connection": "The reaction is a classic example of polarity reversal, also called umpolung.",
    "scope": "JEE Bridge"
  },
  {
    "id": "CAR-014",
    "chapter": "aldehydes-ketones-acids",
    "tag": "ACIDITY",
    "fact": "α-Hydrogens of carbonyl compounds can be relatively acidic.",
    "explanation": "Removal of an α-hydrogen gives an enolate whose negative charge is delocalised between the α-carbon and oxygen.",
    "connection": "Enolate formation is central to aldol condensation and many carbon–carbon bond-forming reactions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-015",
    "chapter": "aldehydes-ketones-acids",
    "tag": "CARBONYL TESTS",
    "fact": "Aldehydes and ketones generally react with 2,4-dinitrophenylhydrazine to form coloured precipitates.",
    "explanation": "The reagent forms a hydrazone derivative with the carbonyl group. The colour and melting point of the derivative can help identify the compound.",
    "connection": "This test detects a carbonyl group but does not by itself distinguish aldehydes from ketones.",
    "scope": "ISC"
  },
  {
    "id": "CAR-016",
    "chapter": "aldehydes-ketones-acids",
    "tag": "ACIDITY",
    "fact": "The acidity of carboxylic acids depends on substituents near the carboxyl group.",
    "explanation": "Electron-withdrawing groups stabilise the carboxylate ion and increase acidity; the effect generally decreases with distance from the carboxyl group.",
    "connection": "Trichloroacetic acid is much stronger than acetic acid due to the strong −I effect of chlorine atoms.",
    "scope": "ISC + JEE"
  },
  {
    "id": "CAR-017",
    "chapter": "aldehydes-ketones-acids",
    "tag": "DECORBOXYLATION",
    "fact": "Soda-lime decarboxylation of a sodium carboxylate generally produces an alkane with one fewer carbon atom.",
    "explanation": "Heating a sodium carboxylate with NaOH and CaO removes the carboxylate carbon as carbonate.",
    "connection": "This is a useful method for shortening a carbon chain by one carbon atom.",
    "scope": "ISC"
  },
  {
    "id": "CAR-018",
    "chapter": "aldehydes-ketones-acids",
    "tag": "KETONES",
    "fact": "Ketones generally resist oxidation by mild oxidising agents more than aldehydes do.",
    "explanation": "Oxidation of a ketone often requires breaking a carbon–carbon bond, whereas an aldehyde can be oxidised to a carboxylic acid without breaking the carbon skeleton.",
    "connection": "Strong oxidation of ketones may produce smaller carboxylic acids.",
    "scope": "ISC"
  },

  {
    "id": "NIT-001",
    "chapter": "organic-compounds-nitrogen",
    "tag": "BASICITY",
    "fact": "Aniline is less basic than ammonia because the nitrogen lone pair is delocalised into the benzene ring.",
    "explanation": "Resonance makes the lone pair less available for bonding to a proton. In ammonia, the lone pair is localised on nitrogen.",
    "connection": "When comparing amine basicity, consider both resonance and the availability of the nitrogen lone pair.",
    "scope": "ISC"
  },
  {
    "id": "NIT-002",
    "chapter": "organic-compounds-nitrogen",
    "tag": "DIAZONIUM SALTS",
    "fact": "Aromatic primary amines form diazonium salts with nitrous acid at low temperature.",
    "explanation": "For aniline, diazotisation is carried out at about 273–278 K using nitrous acid generated in situ from sodium nitrite and a mineral acid.",
    "connection": "Arenediazonium salts are useful intermediates for replacing the diazonium group with several other substituents.",
    "scope": "ISC"
  },
  {
    "id": "NIT-003",
    "chapter": "organic-compounds-nitrogen",
    "tag": "CARBYLAMINE TEST",
    "fact": "Only primary amines give the carbylamine test under ordinary conditions.",
    "explanation": "A primary amine reacts with chloroform and alcoholic KOH on heating to form an isocyanide with a very unpleasant smell.",
    "connection": "The test distinguishes primary amines from secondary and tertiary amines.",
    "scope": "ISC"
  },
  {
    "id": "NIT-004",
    "chapter": "organic-compounds-nitrogen",
    "tag": "HOFMANN BROMAMIDE",
    "fact": "Hofmann bromamide degradation converts a primary amide into a primary amine with one fewer carbon atom.",
    "explanation": "The amide reacts with bromine and aqueous alkali, and the carbonyl carbon is lost during the rearrangement.",
    "connection": "It is a useful method for shortening a carbon chain by one carbon atom.",
    "scope": "ISC"
  },
  {
    "id": "NIT-005",
    "chapter": "organic-compounds-nitrogen",
    "tag": "BASICITY",
    "fact": "Alkyl amines are generally more basic than ammonia in aqueous solution, but the order depends on solvation and structure.",
    "explanation": "Alkyl groups donate electron density to nitrogen, increasing its ability to accept a proton. Solvation and steric effects can alter the observed aqueous order.",
    "connection": "Do not use one universal basicity order without specifying the phase and solvent.",
    "scope": "ISC + JEE"
  },
  {
    "id": "NIT-006",
    "chapter": "organic-compounds-nitrogen",
    "tag": "DIAZONIUM SALTS",
    "fact": "Arenediazonium salts can undergo azo coupling with activated aromatic rings.",
    "explanation": "The diazonium ion acts as an electrophile and couples with phenols or aromatic amines, often producing intensely coloured azo compounds.",
    "connection": "Azo compounds are important as dyes.",
    "scope": "ISC"
  },
  {
    "id": "NIT-007",
    "chapter": "organic-compounds-nitrogen",
    "tag": "AMINE CLASSIFICATION",
    "fact": "Amines are classified as primary, secondary or tertiary according to the number of carbon groups attached to nitrogen.",
    "explanation": "Primary amines have one carbon group, secondary amines have two and tertiary amines have three attached to nitrogen.",
    "connection": "This classification is important in reactions with nitrous acid and in qualitative tests.",
    "scope": "ISC"
  },
  {
    "id": "NIT-008",
    "chapter": "organic-compounds-nitrogen",
    "tag": "AMIDE REDUCTION",
    "fact": "Lithium aluminium hydride can reduce amides to amines.",
    "explanation": "The carbonyl oxygen is removed in the overall reduction, converting the amide carbonyl carbon into a methylene group in the amine product.",
    "connection": "The product generally retains the carbon skeleton of the amide.",
    "scope": "JEE Bridge"
  },
  {
    "id": "NIT-009",
    "chapter": "organic-compounds-nitrogen",
    "tag": "NITRO COMPOUNDS",
    "fact": "Nitro compounds can be reduced to amines.",
    "explanation": "The nitro group, −NO₂, is reduced to −NH₂ using suitable reducing agents such as Sn/HCl or catalytic hydrogenation.",
    "connection": "Reduction of nitrobenzene gives aniline.",
    "scope": "ISC"
  },
  {
    "id": "NIT-010",
    "chapter": "organic-compounds-nitrogen",
    "tag": "DIAZONIUM REACTIONS",
    "fact": "Arenediazonium salts can be converted into aryl chlorides, bromides and nitriles.",
    "explanation": "Sandmeyer reactions use copper(I) salts to replace the diazonium group with Cl, Br or CN.",
    "connection": "The diazonium group is a versatile leaving group for aromatic substitution.",
    "scope": "ISC"
  },
  {
    "id": "NIT-011",
    "chapter": "organic-compounds-nitrogen",
    "tag": "GABRIEL SYNTHESIS",
    "fact": "Gabriel phthalimide synthesis is used to prepare primary aliphatic amines.",
    "explanation": "Potassium phthalimide undergoes alkylation with a suitable primary alkyl halide, followed by cleavage to release the primary amine.",
    "connection": "The method is not generally suitable for preparing aromatic primary amines by direct alkylation.",
    "scope": "ISC + JEE"
  },
  {
    "id": "NIT-012",
    "chapter": "organic-compounds-nitrogen",
    "tag": "AMINE BASICITY",
    "fact": "Aniline is less basic than aliphatic amines because resonance delocalises the nitrogen lone pair.",
    "explanation": "In aniline, the lone pair overlaps with the aromatic π system. Alkyl amines lack this particular delocalisation.",
    "connection": "Substituents on the benzene ring can further alter aniline basicity.",
    "scope": "ISC + JEE"
  },
  {
    "id": "NIT-013",
    "chapter": "organic-compounds-nitrogen",
    "tag": "NITROUS ACID",
    "fact": "Primary aliphatic and aromatic amines react differently with nitrous acid.",
    "explanation": "Primary aliphatic diazonium salts are unstable and usually decompose, while arenediazonium salts are sufficiently stable at low temperature to be isolated in solution.",
    "connection": "This difference is central to diazotisation chemistry.",
    "scope": "ISC"
  },
  {
    "id": "NIT-014",
    "chapter": "organic-compounds-nitrogen",
    "tag": "HINSBERG TEST",
    "fact": "The Hinsberg test can help distinguish primary, secondary and tertiary amines.",
    "explanation": "The reaction with benzenesulphonyl chloride in aqueous alkali gives products with different solubility behaviour according to the type of amine.",
    "connection": "Primary sulphonamides can dissolve in alkali because they retain an acidic N–H proton.",
    "scope": "ISC + JEE"
  },
  {
    "id": "NIT-015",
    "chapter": "organic-compounds-nitrogen",
    "tag": "AMINE REACTIONS",
    "fact": "Amines react with acids to form ammonium salts.",
    "explanation": "The nitrogen lone pair accepts a proton, forming an ammonium ion. These salts are often more water-soluble than the corresponding neutral amines.",
    "connection": "Treatment with a strong base can regenerate the free amine.",
    "scope": "ISC"
  },
  {
    "id": "NIT-016",
    "chapter": "organic-compounds-nitrogen",
    "tag": "ELECTRONIC EFFECTS",
    "fact": "Electron-donating groups generally increase the basicity of aromatic amines, while electron-withdrawing groups generally decrease it.",
    "explanation": "The substituents alter the electron density and availability of the nitrogen lone pair through resonance and inductive effects.",
    "connection": "Position matters: a substituent's resonance effect is strongest at ortho and para positions.",
    "scope": "ISC + JEE"
  },
  {
    "id": "NIT-017",
    "chapter": "organic-compounds-nitrogen",
    "tag": "QUATERNARY AMMONIUM SALTS",
    "fact": "Quaternary ammonium salts contain a positively charged nitrogen bonded to four carbon groups.",
    "explanation": "The nitrogen has four sigma bonds and no lone pair. Such salts are permanently charged under ordinary conditions.",
    "connection": "Some quaternary ammonium compounds are used as phase-transfer catalysts and surfactants.",
    "scope": "JEE Bridge"
  },
  {
    "id": "NIT-018",
    "chapter": "organic-compounds-nitrogen",
    "tag": "DIAZONIUM SALTS",
    "fact": "Arenediazonium salts are usually prepared and kept cold because they decompose at higher temperatures.",
    "explanation": "Low temperatures around 273–278 K help stabilise the diazonium salt in aqueous solution during its preparation and subsequent reactions.",
    "connection": "The instability of diazonium salts at higher temperature can be used deliberately in some substitution reactions.",
    "scope": "ISC"
  },

  {
    "id": "BIO-001",
    "chapter": "biomolecules",
    "tag": "CARBOHYDRATES",
    "fact": "Glucose is an aldohexose, while fructose is a ketohexose.",
    "explanation": "Both have molecular formula C₆H₁₂O₆, but glucose has an aldehyde group in its open-chain form and fructose has a ketone group.",
    "connection": "They are functional isomers.",
    "scope": "ISC"
  },
  {
    "id": "BIO-002",
    "chapter": "biomolecules",
    "tag": "REDUCING SUGARS",
    "fact": "Glucose is a reducing sugar because it can access an open-chain form containing an aldehyde group.",
    "explanation": "In aqueous solution, cyclic glucose is in equilibrium with a small amount of its open-chain form. This form can be oxidised by mild oxidising agents.",
    "connection": "A free anomeric carbon is an important clue when deciding whether a carbohydrate is reducing.",
    "scope": "ISC"
  },
  {
    "id": "BIO-003",
    "chapter": "biomolecules",
    "tag": "DISACCHARIDES",
    "fact": "Sucrose is a non-reducing disaccharide.",
    "explanation": "Both anomeric carbons of glucose and fructose are involved in the glycosidic linkage, so neither has a free anomeric carbon to open into a reducing form.",
    "connection": "Hydrolysis of sucrose gives glucose and fructose.",
    "scope": "ISC"
  },
  {
    "id": "BIO-004",
    "chapter": "biomolecules",
    "tag": "DISACCHARIDES",
    "fact": "Maltose is a reducing disaccharide.",
    "explanation": "One anomeric carbon remains free in maltose, allowing the molecule to access an open-chain form.",
    "connection": "Maltose is composed of two glucose units joined by an α(1→4) glycosidic linkage.",
    "scope": "ISC"
  },
  {
    "id": "BIO-005",
    "chapter": "biomolecules",
    "tag": "POLYSACCHARIDES",
    "fact": "Starch is the principal storage polysaccharide in plants.",
    "explanation": "It consists of amylose and amylopectin. Amylose is mainly linear with α(1→4) linkages, while amylopectin is branched.",
    "connection": "Iodine gives a characteristic blue-black colour with starch, especially amylose.",
    "scope": "ISC"
  },
  {
    "id": "BIO-006",
    "chapter": "biomolecules",
    "tag": "POLYSACCHARIDES",
    "fact": "Cellulose is a structural polysaccharide in plant cell walls.",
    "explanation": "Cellulose consists of β-D-glucose units joined by β(1→4) glycosidic bonds, producing straight chains that form strong fibres.",
    "connection": "Humans lack cellulase and cannot digest cellulose as a source of glucose.",
    "scope": "ISC"
  },
  {
    "id": "BIO-007",
    "chapter": "biomolecules",
    "tag": "AMINO ACIDS",
    "fact": "Amino acids can exist as zwitterions.",
    "explanation": "In a zwitterion, the amino group is protonated as –NH₃⁺ and the carboxyl group is deprotonated as –COO⁻, giving an overall neutral charge.",
    "connection": "The zwitterionic form helps explain the relatively high melting points of many amino acids.",
    "scope": "ISC"
  },
  {
    "id": "BIO-008",
    "chapter": "biomolecules",
    "tag": "PROTEINS",
    "fact": "Proteins are polymers of α-amino acids linked through peptide bonds.",
    "explanation": "The peptide linkage is an amide bond, –CO–NH–, formed through condensation between amino-acid residues.",
    "connection": "The sequence of amino acids is called the primary structure of a protein.",
    "scope": "ISC"
  },
  {
    "id": "BIO-009",
    "chapter": "biomolecules",
    "tag": "PROTEIN STRUCTURE",
    "fact": "The secondary structure of proteins includes α-helices and β-pleated sheets.",
    "explanation": "These structures are stabilised mainly by hydrogen bonding between peptide backbone groups.",
    "connection": "The tertiary structure describes the overall three-dimensional folding of a polypeptide chain.",
    "scope": "ISC + JEE"
  },
  {
    "id": "BIO-010",
    "chapter": "biomolecules",
    "tag": "ENZYMES",
    "fact": "Enzymes are biological catalysts, most of which are proteins.",
    "explanation": "They increase reaction rates by providing an alternative pathway with lower activation energy, without being consumed overall.",
    "connection": "Enzymes are generally highly specific towards their substrates and reaction conditions.",
    "scope": "ISC"
  },
  {
    "id": "BIO-011",
    "chapter": "biomolecules",
    "tag": "VITAMINS",
    "fact": "Vitamins are classified as fat-soluble or water-soluble.",
    "explanation": "Vitamins A, D, E and K are fat-soluble; vitamin C and the B-complex vitamins are water-soluble.",
    "connection": "The storage, transport and deficiency patterns differ between the two groups.",
    "scope": "ISC"
  },
  {
    "id": "BIO-012",
    "chapter": "biomolecules",
    "tag": "NUCLEIC ACIDS",
    "fact": "DNA and RNA are polymers of nucleotides.",
    "explanation": "Each nucleotide contains a nitrogenous base, a pentose sugar and a phosphate group.",
    "connection": "A nucleoside contains a base and sugar but no phosphate group.",
    "scope": "ISC"
  },
  {
    "id": "BIO-013",
    "chapter": "biomolecules",
    "tag": "NUCLEIC ACIDS",
    "fact": "DNA contains deoxyribose, while RNA contains ribose.",
    "explanation": "RNA has an additional hydroxyl group at the 2′ carbon of its sugar. This contributes to its greater chemical reactivity compared with DNA.",
    "connection": "DNA generally uses thymine, while RNA generally uses uracil.",
    "scope": "ISC + JEE"
  },
  {
    "id": "BIO-014",
    "chapter": "biomolecules",
    "tag": "PEPTIDE BOND",
    "fact": "A peptide bond is the –CO–NH– amide linkage joining amino-acid residues.",
    "explanation": "It forms between the carboxyl group of one amino acid and the amino group of another in the condensation description.",
    "connection": "The peptide bond has partial double-bond character and is approximately planar.",
    "scope": "ISC + JEE"
  },
  {
    "id": "BIO-015",
    "chapter": "biomolecules",
    "tag": "PROTEIN STRUCTURE",
    "fact": "Primary structure is the amino-acid sequence of a polypeptide.",
    "explanation": "Secondary structure includes regular local arrangements such as α-helices and β-pleated sheets, stabilised mainly by backbone hydrogen bonds.",
    "connection": "Tertiary structure is the overall three-dimensional folding of one polypeptide chain.",
    "scope": "ISC"
  },
  {
    "id": "BIO-016",
    "chapter": "biomolecules",
    "tag": "DENATURATION",
    "fact": "Denaturation disrupts the native higher-order structure of a protein without usually breaking its primary peptide-bond sequence.",
    "explanation": "Heat, extreme pH and some chemicals can disturb the interactions maintaining the folded structure.",
    "connection": "Denatured proteins often lose biological activity.",
    "scope": "ISC"
  },
  {
    "id": "BIO-017",
    "chapter": "biomolecules",
    "tag": "VITAMINS",
    "fact": "Vitamins are commonly divided into fat-soluble and water-soluble groups.",
    "explanation": "Vitamins A, D, E and K are fat-soluble; vitamin C and the B-complex vitamins are water-soluble.",
    "connection": "The storage and deficiency patterns differ between these groups.",
    "scope": "ISC"
  },
  {
    "id": "BIO-018",
    "chapter": "biomolecules",
    "tag": "DNA AND RNA",
    "fact": "DNA contains deoxyribose and usually uses the bases A, G, C and T; RNA contains ribose and uses A, G, C and U.",
    "explanation": "DNA is commonly double-stranded, while many RNA molecules are single-stranded and fold into functional structures.",
    "connection": "A pairs with T in DNA and with U in RNA; G pairs with C in both.",
    "scope": "ISC + JEE"
  }
];