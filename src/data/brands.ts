export type BrandCategory =
  | "Residential / Light Commercial"
  | "Boilers / Hydronics"
  | "Commercial Refrigeration"
  | "Commercial / Industrial"
  | "Indoor Air Quality";

export type BrandFaq = {
  question: string;
  answer: string;
};

export type BrandProfile = {
  name: string;
  slug: string;
  category: BrandCategory;
  service: boolean;
  install: boolean;
  authorizedDealer: false;
  residential: boolean;
  lightCommercial: boolean;
  commercial: boolean;
  refrigeration: boolean;
  boilerHydronic: boolean;
  equipmentTypes: readonly string[];
  relatedServices: readonly { label: string; href: string }[];
  relatedProjects: readonly { label: string; href: string }[];
  relatedRefrigerants: readonly string[];
  publicVisible: boolean;
  indexed: boolean;
  summary: string;
  seoTitle?: string;
  seoDescription?: string;
  headline?: string;
  serviceOverview?: readonly string[];
  commonProblems?: readonly { title: string; description: string }[];
  maintenanceGuidance?: readonly string[];
  replacementGuidance?: readonly string[];
  capabilityNote?: string;
  faqs?: readonly BrandFaq[];
};

const HVAC_REPAIR_LINKS = [
  { label: "AC repair", href: "/services/ac-repair" },
  { label: "Heating repair", href: "/services/heating-repair" },
  { label: "HVAC replacement", href: "/services/hvac-installation" },
  { label: "Preventative maintenance", href: "/services/preventative-maintenance" },
] as const;

const DUCTLESS_LINKS = [
  { label: "Mini-split service", href: "/services/mini-split" },
  { label: "AC repair", href: "/services/ac-repair" },
  { label: "Cooling installation", href: "/services/cooling-installation" },
  { label: "Preventative maintenance", href: "/services/preventative-maintenance" },
] as const;

const BOILER_LINKS = [
  { label: "Boiler and heating repair", href: "/services/heating-repair" },
  { label: "Heating installation", href: "/services/heating-installation" },
  { label: "Preventative maintenance", href: "/services/preventative-maintenance" },
] as const;

const REFRIGERATION_LINKS = [
  { label: "Commercial refrigeration service", href: "/services/commercial-refrigeration" },
  { label: "Commercial HVAC service", href: "/services/commercial" },
] as const;

export const BRANDS: readonly BrandProfile[] = [
  {
    name: "Carrier",
    slug: "carrier",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Central air conditioners", "Gas furnaces", "Heat pumps", "Air handlers", "Evaporator coils", "Packaged systems", "Thermostats and zoning controls"],
    relatedServices: HVAC_REPAIR_LINKS,
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "Carrier AC, furnace, heat-pump, and matched-system diagnostics, repair, maintenance, and replacement for North Jersey homes and light-commercial properties.",
    seoTitle: "Carrier HVAC Repair & Replacement North Jersey",
    seoDescription: "Carrier AC repair, furnace repair, heat pump service and HVAC replacement in Morris County and North Jersey. Call Air2Cool at (201) 787-5657.",
    headline: "Carrier HVAC Repair & Replacement",
    serviceOverview: [
      "Carrier systems can combine outdoor condensers or heat pumps with furnaces, fan coils, evaporator coils, thermostats, and zoning controls. Air2Cool evaluates the full system instead of treating one component in isolation.",
      "For Carrier AC repair, we check airflow, electrical components, condensate management, coil condition, thermostat communication, and refrigerant-system performance where applicable before recommending a repair.",
      "When a Carrier furnace, AC, or heat pump is approaching replacement, we compare repair history, equipment condition, comfort problems, and compatibility between the indoor and outdoor equipment.",
    ],
    commonProblems: [
      { title: "AC runs but does not cool", description: "Airflow restrictions, dirty coils, electrical faults, thermostat issues, or a refrigerant-system problem can all produce similar symptoms and require diagnosis." },
      { title: "Furnace ignition or heating failure", description: "Ignition components, flame sensing, pressure switches, inducer operation, limit controls, and airflow can affect a Carrier furnace heating cycle." },
      { title: "Heat pump will not change modes", description: "Controls, sensors, reversing-valve operation, thermostat setup, or outdoor-unit faults may prevent proper heating or cooling operation." },
      { title: "Communicating or zoning control issues", description: "Matched controls and zone components need to be evaluated with the equipment configuration so a control symptom is not mistaken for a major equipment failure." },
    ],
    maintenanceGuidance: [
      "Inspect filters, blower and coil condition to protect airflow through the matched indoor equipment.",
      "Check condensate drainage during AC maintenance and verify heating safety and operation before winter.",
      "Record system performance so changes in temperature split, electrical readings, or operating behavior can be identified over time.",
    ],
    replacementGuidance: [
      "A repair can make sense when the failure is isolated, replacement parts are available, and the rest of the system is in serviceable condition.",
      "Replacement deserves consideration when failures repeat, comfort remains uneven, major components are deteriorated, or existing indoor and outdoor equipment cannot form an appropriate matched system.",
      "Air2Cool can quote Carrier AC replacement, furnace replacement, heat-pump replacement, or a complete HVAC replacement after evaluating the property and existing equipment.",
    ],
    capabilityNote: "Air2Cool services Carrier equipment but does not claim to be an authorized or factory-authorized Carrier dealer.",
    faqs: [
      { question: "Does Air2Cool provide Carrier AC repair in North Jersey?", answer: "Yes. Air2Cool diagnoses and repairs Carrier central air systems across Morris County and North Jersey, including airflow, electrical, thermostat, condensate, coil, and refrigerant-system concerns where applicable." },
      { question: "Can Air2Cool repair Carrier furnaces and heat pumps?", answer: "Yes. Air2Cool services Carrier gas furnaces and heat pumps for residential and light-commercial customers. The diagnosis depends on the model, configuration, fault history, and condition of the matched system." },
      { question: "When should I replace a Carrier HVAC system instead of repairing it?", answer: "Replacement may be worth comparing when the system has repeated failures, a major component has failed, parts are difficult to obtain, efficiency or comfort remains poor, or the indoor and outdoor equipment are no longer an appropriate match." },
      { question: "Is Air2Cool an authorized Carrier dealer?", answer: "Air2Cool services and replaces Carrier equipment, but does not represent itself as an authorized, factory-authorized, preferred, or exclusive Carrier dealer." },
    ],
  },
  {
    name: "Trane",
    slug: "trane",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: true,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Central air conditioners", "Gas furnaces", "Heat pumps", "Air handlers", "Rooftop units", "Packaged systems", "Thermostats and controls"],
    relatedServices: HVAC_REPAIR_LINKS,
    relatedProjects: [{ label: "Trane rooftop compressor replacement project", href: "/projects" }],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "Trane residential and light-commercial HVAC diagnostics, compressor and electrical repair, maintenance, and replacement in North Jersey.",
    seoTitle: "Trane HVAC Repair & Replacement North Jersey",
    seoDescription: "Trane AC, furnace, heat pump and rooftop HVAC repair or replacement in Morris County and North Jersey. Residential and light-commercial service from Air2Cool.",
    headline: "Trane HVAC Repair & Replacement",
    serviceOverview: [
      "Air2Cool services Trane split systems, furnaces, heat pumps, air handlers, packaged equipment, and light-commercial rooftop units. Our project portfolio includes a Trane three-phase scroll-compressor rooftop-unit replacement.",
      "A Trane service call starts with the operating symptom and equipment configuration. We check controls, electrical components, airflow, temperatures, compressor and fan operation, and refrigerant-system performance where applicable.",
      "For commercial Trane equipment, the diagnosis also considers three-phase power, rooftop-unit controls, economizer or ventilation components where present, and the effect of downtime on the property.",
    ],
    commonProblems: [
      { title: "Compressor or outdoor-unit failure", description: "Electrical supply, contactors, capacitors, controls, fan operation, system pressures, and compressor condition must be evaluated before condemning a compressor." },
      { title: "Rooftop unit is not conditioning the space", description: "A light-commercial RTU may have control, airflow, heating-section, compressor, economizer, or phase/power issues that require rooftop diagnosis." },
      { title: "Furnace cycles or locks out", description: "Ignition, flame proving, pressure, limits, venting, and airflow can interrupt a Trane furnace heating cycle." },
      { title: "Heat pump performance changes", description: "Sensors, defrost controls, outdoor-coil condition, auxiliary heat, airflow, and refrigerant-system operation can affect heating performance." },
    ],
    maintenanceGuidance: [
      "Keep indoor and outdoor coils, filters, and blower components in serviceable condition to protect airflow and heat transfer.",
      "Inspect rooftop equipment for drainage, panels, wiring, contactors, motors, controls, and signs of weather exposure.",
      "Test heating, cooling, thermostat, and safety operation for the equipment type and season.",
    ],
    replacementGuidance: [
      "A repair is often reasonable when the problem is isolated and the remaining equipment is in good operating condition.",
      "Compare replacement when compressor or heat-exchanger concerns combine with age, repeated outages, obsolete controls, or poor comfort.",
      "For rooftop or split-system replacement, Air2Cool evaluates capacity, electrical requirements, curb or duct connections, controls, and matched components before quoting the work.",
    ],
    capabilityNote: "Air2Cool services Trane equipment and has documented Trane rooftop-unit project experience; no manufacturer authorization is claimed.",
    faqs: [
      { question: "Does Air2Cool repair Trane air conditioners and furnaces?", answer: "Yes. Air2Cool services Trane air conditioners, furnaces, heat pumps, air handlers, packaged systems, and applicable controls across North Jersey." },
      { question: "Does Air2Cool work on commercial Trane rooftop units?", answer: "Yes. Air2Cool services light-commercial rooftop equipment and has documented a Trane three-phase scroll-compressor rooftop-unit replacement in its current project portfolio." },
      { question: "Can a failed Trane compressor be replaced?", answer: "Sometimes. The technician must confirm the compressor failure, determine whether another system condition contributed to it, verify electrical and refrigerant-circuit condition, and compare the repair with equipment replacement." },
      { question: "Is Air2Cool a factory-authorized Trane dealer?", answer: "No authorization claim is made. Air2Cool independently services and replaces Trane HVAC equipment." },
    ],
  },
  {
    name: "American Standard",
    slug: "american-standard",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Central air conditioners", "Gas furnaces", "Heat pumps", "Air handlers", "Evaporator coils", "Packaged systems", "Thermostats and controls"],
    relatedServices: HVAC_REPAIR_LINKS,
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "American Standard AC repair, furnace repair, heat-pump service, airflow diagnostics, and matched-system replacement for residential and light-commercial properties.",
    seoTitle: "American Standard HVAC Repair North Jersey",
    seoDescription: "American Standard AC repair, furnace repair, heat pump service and HVAC replacement in Morris County and North Jersey. Call Air2Cool today.",
    headline: "American Standard HVAC Repair & Replacement",
    serviceOverview: [
      "Air2Cool provides American Standard AC repair, furnace repair, and heat-pump service for central systems that may include air handlers, evaporator coils, packaged equipment, thermostats, and compatible controls.",
      "For airflow and comfort complaints, we evaluate thermostat demand, blower operation, filters, coils, duct restrictions, heating or cooling stages, outdoor-unit operation, drainage, temperatures, and electrical readings before recommending a repair.",
      "When replacement is being considered, we look at the indoor and outdoor equipment together. Equipment condition, repair history, airflow, comfort, and component compatibility all matter when comparing an isolated repair with matched-system replacement.",
    ],
    commonProblems: [
      { title: "Uneven temperatures or weak airflow", description: "Filter condition, blower setup, duct restrictions, coil condition, zoning, or control settings may contribute to room-to-room comfort problems." },
      { title: "Outdoor unit will not start", description: "Power, disconnects, contactors, capacitors, controls, safeties, motors, and compressor condition are checked in sequence." },
      { title: "Furnace starts and stops", description: "Airflow limits, flame sensing, ignition, pressure switches, venting, condensate, and thermostat behavior may cause cycling or lockout." },
      { title: "Heat pump relies heavily on auxiliary heat", description: "Outdoor temperature, defrost, sensors, airflow, thermostat configuration, and refrigeration performance can affect balance between heat-pump and auxiliary operation." },
    ],
    maintenanceGuidance: [
      "Verify filter and blower condition and inspect indoor and outdoor coils for airflow or heat-transfer restrictions.",
      "Check staged or variable-speed operation, thermostat settings, electrical components, condensate drainage, and system temperatures.",
      "Perform equipment-appropriate heating safety checks and document changes from prior visits where records are available.",
    ],
    replacementGuidance: [
      "Repair may be appropriate when the failed part is identifiable and the remaining matched system is serviceable.",
      "Replacement should be compared when recurring failures, major component deterioration, mismatched equipment, or comfort limitations make continued repair less practical.",
      "For American Standard furnace, AC, heat-pump, or matched-system replacement, Air2Cool evaluates the home, duct system, electrical service, fuel and venting requirements, and indoor/outdoor equipment compatibility before presenting options.",
    ],
    capabilityNote: "Air2Cool works on American Standard equipment as an independent HVAC contractor and does not claim factory authorization.",
    faqs: [
      { question: "Does Air2Cool repair American Standard HVAC equipment?", answer: "Yes. Air2Cool services American Standard AC systems, furnaces, heat pumps, air handlers, coils, packaged systems, and compatible controls in North Jersey." },
      { question: "Can Air2Cool replace an American Standard furnace or AC?", answer: "Yes. Air2Cool can evaluate American Standard furnace, AC, heat-pump, or complete-system replacement options based on the property and existing equipment." },
      { question: "Why is my American Standard system running but not keeping up?", answer: "Possible causes include airflow restrictions, dirty coils, thermostat or staging configuration, duct losses, electrical faults, refrigerant-system issues, or equipment capacity. Diagnosis is needed before selecting a repair." },
      { question: "Is Air2Cool an authorized American Standard dealer?", answer: "Air2Cool does not claim authorized, factory-authorized, preferred, or exclusive American Standard dealer status." },
    ],
  },
  {
    name: "Luxaire",
    slug: "luxaire",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Gas furnaces", "Central air conditioners", "Heat pumps", "Air handlers", "Evaporator coils", "Packaged systems", "Thermostats"],
    relatedServices: HVAC_REPAIR_LINKS,
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "Luxaire furnace and heating repair, plus AC, heat-pump, air-handler, and matched-system service or replacement for North Jersey properties.",
    seoTitle: "Luxaire HVAC Repair & Replacement North Jersey",
    seoDescription: "Luxaire furnace repair, AC repair, heat pump service and HVAC replacement in Morris County and North Jersey. 24/7 emergency HVAC service.",
    headline: "Luxaire HVAC Repair & Replacement",
    serviceOverview: [
      "Luxaire furnace and no-heat calls are a central part of this service, alongside repair and replacement work for Luxaire air conditioners, heat pumps, air handlers, evaporator coils, packaged systems, and standard controls.",
      "Luxaire furnace repair requires checking the full sequence from thermostat call through inducer, pressure proving, ignition, flame sensing, blower operation, and limit controls.",
      "For Luxaire cooling equipment, Air2Cool checks electrical components, fan and compressor operation, indoor airflow, coils, drainage, temperatures, and refrigerant-system performance where applicable.",
    ],
    commonProblems: [
      { title: "Furnace will not ignite", description: "Igniters, flame sensors, gas delivery, pressure switches, inducer operation, venting, control boards, and safety circuits may interrupt ignition." },
      { title: "Furnace overheats or cycles on limit", description: "Restricted filters, blower issues, dirty indoor coils, closed registers, duct restrictions, or setup problems may reduce airflow." },
      { title: "AC condenser hums or will not start", description: "Capacitors, contactors, power, controls, fan motors, or compressor condition can produce this symptom." },
      { title: "Water near the indoor equipment", description: "Condensate drains, traps, pumps, coil condition, freezing, or installation details should be checked before water damage spreads." },
    ],
    maintenanceGuidance: [
      "Inspect furnace combustion, ignition, venting, safeties, blower operation, and temperature performance where applicable.",
      "For cooling, check coil condition, drainage, electrical components, airflow, thermostat operation, and refrigerant-system performance where applicable.",
      "Replace or clean filters according to the equipment and filter type rather than waiting for a comfort complaint.",
    ],
    replacementGuidance: [
      "An isolated ignition, motor, control, or electrical repair may keep otherwise serviceable Luxaire equipment operating reliably.",
      "Compare replacement when the heat exchanger or compressor is compromised, failures recur, repair parts are impractical, or the system no longer meets the property's comfort needs.",
      "Air2Cool can evaluate furnace-only, AC-only, heat-pump, or complete matched-system replacement without assuming every failure requires new equipment.",
    ],
    capabilityNote: "Air2Cool independently services Luxaire equipment; authorized-dealer status is not claimed.",
    faqs: [
      { question: "Does Air2Cool repair Luxaire furnaces?", answer: "Yes. Air2Cool diagnoses Luxaire furnace ignition, airflow, blower, control, venting, safety, and heating-performance problems in Morris County and North Jersey." },
      { question: "Can Air2Cool repair Luxaire air conditioners and heat pumps?", answer: "Yes. Air2Cool services Luxaire central AC and heat-pump equipment, including applicable electrical, airflow, coil, drainage, control, and refrigerant-system concerns." },
      { question: "Should I replace an older Luxaire furnace?", answer: "Age alone does not decide the answer. Repair history, heat-exchanger condition, parts availability, comfort, efficiency, matched cooling equipment, and the cost of the current repair should be considered together." },
      { question: "Is Air2Cool an authorized Luxaire dealer?", answer: "No manufacturer authorization is claimed. Air2Cool services and replaces Luxaire equipment as an independent North Jersey HVAC contractor." },
    ],
  },
  {
    name: "Bosch",
    slug: "bosch",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Inverter heat pumps", "Central air conditioners", "Air handlers", "Evaporator coils", "Ducted split systems", "Thermostats and controls"],
    relatedServices: [
      { label: "Heat-pump and heating repair", href: "/services/heating-repair" },
      { label: "AC repair", href: "/services/ac-repair" },
      { label: "HVAC installation", href: "/services/hvac-installation" },
      { label: "Preventative maintenance", href: "/services/preventative-maintenance" },
    ],
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "Bosch inverter heat-pump, air-handler, central-air, control, maintenance, repair, and replacement service in North Jersey.",
    seoTitle: "Bosch Heat Pump Repair North Jersey",
    seoDescription: "Bosch heat pump repair, inverter-system diagnostics, air-handler service and replacement in Morris County and North Jersey. Call Air2Cool.",
    headline: "Bosch Heat Pump Repair & HVAC Service",
    serviceOverview: [
      "Air2Cool services Bosch inverter-driven heat pumps, ducted split systems, air handlers, evaporator coils, central cooling equipment, thermostats, and associated controls.",
      "Inverter equipment changes compressor output as conditions change, so diagnosis should include controls, sensors, airflow, electrical supply, operating temperatures, outdoor-unit behavior, and refrigerant-system performance rather than relying on a single reading.",
      "Bosch heat-pump comfort also depends on thermostat configuration, auxiliary or backup heat, duct performance, and the match between indoor and outdoor components.",
    ],
    commonProblems: [
      { title: "Outdoor unit starts but capacity seems limited", description: "Airflow, coil condition, sensors, controls, inverter operation, outdoor conditions, and refrigerant-system performance may affect delivered capacity." },
      { title: "System displays a fault or stops intermittently", description: "Recorded fault information, wiring, communication, sensors, power quality, drainage, and operating conditions help narrow an intermittent issue." },
      { title: "Auxiliary heat runs more than expected", description: "Thermostat setup, outdoor conditions, defrost, airflow, heat-pump performance, and backup-heat staging should be evaluated together." },
      { title: "Indoor comfort or humidity is inconsistent", description: "Blower setup, duct airflow, run-time behavior, thermostat settings, equipment capacity, and condensate performance can affect comfort and humidity." },
    ],
    maintenanceGuidance: [
      "Keep filters and indoor/outdoor coils clean enough for proper airflow and heat transfer.",
      "Inspect condensate drainage, electrical connections, sensors, controls, blower operation, and thermostat configuration.",
      "Check heating and cooling performance under the available operating conditions and document fault history when accessible.",
    ],
    replacementGuidance: [
      "Control, sensor, electrical, drainage, or airflow faults may be repairable without replacing the inverter equipment.",
      "Replacement may be considered after confirmed major component failure, repeated inverter or refrigerant-circuit problems, incompatible matched equipment, or persistent comfort limitations.",
      "Air2Cool evaluates load, ductwork, electrical capacity, backup heat, controls, and matched indoor/outdoor equipment before recommending a Bosch replacement configuration.",
    ],
    capabilityNote: "Air2Cool services Bosch HVAC equipment without claiming Bosch authorized-dealer status.",
    faqs: [
      { question: "Does Air2Cool repair Bosch heat pumps in North Jersey?", answer: "Yes. Air2Cool diagnoses Bosch inverter heat pumps, air handlers, controls, airflow, electrical components, drainage, and refrigerant-system performance where applicable." },
      { question: "Why does a Bosch inverter heat pump change speed?", answer: "Inverter-driven equipment adjusts compressor output in response to system demand and operating conditions. Changing sound or speed can be normal, while fault codes, loss of comfort, shutdowns, or abnormal operation warrant diagnosis." },
      { question: "Can Air2Cool replace a Bosch heat-pump system?", answer: "Yes. Air2Cool can evaluate Bosch heat-pump replacement options after checking the home's load, ductwork, electrical service, backup heat, controls, and existing indoor equipment." },
      { question: "Is Air2Cool an authorized Bosch dealer?", answer: "Air2Cool does not claim authorized or factory-authorized Bosch dealer status." },
    ],
  },
  {
    name: "Mitsubishi Electric",
    slug: "mitsubishi-electric",
    category: "Residential / Light Commercial",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Single-zone mini-splits", "Multi-zone mini-splits", "Ductless heat pumps", "Wall-mounted indoor units", "Ducted air handlers", "Branch boxes and controls"],
    relatedServices: DUCTLESS_LINKS,
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: true,
    summary: "Mitsubishi Electric ductless mini-split and heat-pump diagnostics, cleaning, repair, maintenance, and replacement in North Jersey.",
    seoTitle: "Mitsubishi Mini-Split Repair North Jersey",
    seoDescription: "Mitsubishi Electric mini split repair, maintenance and replacement for single-zone and multi-zone ductless systems in Morris County and North Jersey.",
    headline: "Mitsubishi Mini Split Repair & Service",
    serviceOverview: [
      "Air2Cool services and installs Mitsubishi Electric single-zone and multi-zone mini-splits, ductless heat pumps, wall-mounted units, applicable ducted air handlers, branch components, condensate systems, and controls.",
      "A ductless diagnosis includes the indoor-unit symptom, outdoor-unit behavior, fault history, filters and coils, blower wheel, condensate drainage, line-set condition, controls, and refrigerant-system performance where applicable.",
      "For multi-zone systems, one room's complaint may be related to that indoor unit, shared outdoor capacity, a branch component, controls, installation details, or the operation of other connected zones.",
    ],
    commonProblems: [
      { title: "Indoor head leaks water", description: "A blocked or poorly routed drain, dirty coil, pump problem, frozen coil, or installation issue can cause condensate leakage." },
      { title: "Mini-split runs but output is weak", description: "Dirty filters, indoor coil or blower buildup, outdoor-coil restrictions, control settings, sensor problems, low outdoor temperature, or a refrigerant-system concern may reduce output." },
      { title: "One zone works while another does not", description: "The affected indoor unit, communication wiring, addressing, controls, branch components, or shared outdoor-unit operation may need evaluation." },
      { title: "Unit displays a code or flashes lights", description: "The code and operating history help direct testing, but the underlying wiring, sensor, fan, control, or refrigeration fault still needs confirmation." },
    ],
    maintenanceGuidance: [
      "Clean or inspect filters, indoor coils, blower wheels, outdoor coils, and condensate pathways based on condition and equipment type.",
      "Check each zone's controls, temperature response, fan operation, and communication with the outdoor equipment.",
      "Inspect line-set protection, mounting, drainage, electrical connections, and system performance where accessible.",
    ],
    replacementGuidance: [
      "Cleaning, drainage, sensor, control, fan, or isolated zone repairs may restore an otherwise serviceable Mitsubishi system.",
      "Compare replacement when major components fail, repeated leaks or communication problems persist, parts availability is limited, or the existing zone design no longer meets the property's needs.",
      "For replacement or expansion, Air2Cool evaluates zone loads, indoor-unit placement, line-set routing, drainage, electrical requirements, and outdoor-unit capacity.",
    ],
    capabilityNote: "Air2Cool services and installs Mitsubishi Electric equipment but does not claim authorized or Diamond Contractor status.",
    faqs: [
      { question: "Does Air2Cool repair Mitsubishi mini splits?", answer: "Yes. Air2Cool repairs Mitsubishi Electric single-zone and multi-zone ductless systems in Morris County and North Jersey." },
      { question: "Can a leaking Mitsubishi indoor unit be repaired?", answer: "Often, depending on the cause. Condensate drain blockage or routing, pumps, coil freezing, dirt buildup, and installation details should be inspected before recommending a repair." },
      { question: "Does Air2Cool install Mitsubishi ductless systems?", answer: "Yes. Air2Cool installs Mitsubishi Electric ductless systems after evaluating zone loads, indoor-unit placement, outdoor capacity, line-set routing, drainage, and electrical requirements." },
      { question: "Is Air2Cool a Mitsubishi Diamond Contractor?", answer: "Air2Cool does not claim Mitsubishi Diamond Contractor, authorized-dealer, preferred, or exclusive status." },
    ],
  },
  ...[
    { name: "Lennox", slug: "lennox", ductlessPriority: false },
    { name: "Rheem", slug: "rheem", ductlessPriority: false },
    { name: "Goodman", slug: "goodman", ductlessPriority: false },
    { name: "Daikin", slug: "daikin", ductlessPriority: true },
    { name: "Fujitsu", slug: "fujitsu", ductlessPriority: true },
    { name: "LG", slug: "lg", ductlessPriority: false },
  ].map(({ name, slug, ductlessPriority }) => ({
    name,
    slug,
    category: "Residential / Light Commercial" as const,
    service: true,
    install: false,
    authorizedDealer: false as const,
    residential: true,
    lightCommercial: true,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Air conditioners", "Heat pumps", "Air handlers", "Applicable furnaces or ductless equipment"],
    relatedServices: ductlessPriority ? DUCTLESS_LINKS : HVAC_REPAIR_LINKS,
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: false,
    summary: `Air2Cool services applicable ${name} heating and cooling equipment in North Jersey.`,
  })),
  ...[
    ["NTI", "nti"],
    ["Lochinvar", "lochinvar"],
    ["Weil-McLain", "weil-mclain"],
  ].map(([name, slug]) => ({
    name,
    slug,
    category: "Boilers / Hydronics" as const,
    service: true,
    install: name === "NTI" || name === "Lochinvar",
    authorizedDealer: false as const,
    residential: true,
    lightCommercial: true,
    commercial: true,
    refrigeration: false,
    boilerHydronic: true,
    equipmentTypes: ["Hydronic boilers", "Combination boilers", "Boiler controls and circulators"],
    relatedServices: BOILER_LINKS,
    relatedProjects: name === "NTI" || name === "Lochinvar" ? [{ label: `${name} boiler projects`, href: "/projects" }] : [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: false,
    summary: `Air2Cool services ${name} boiler and hydronic heating equipment in North Jersey.`,
  })),
  ...[
    ["True Refrigeration", "true-refrigeration"],
    ["Heatcraft", "heatcraft"],
    ["Hussmann", "hussmann"],
    ["Beverage-Air", "beverage-air"],
    ["Manitowoc", "manitowoc"],
  ].map(([name, slug]) => ({
    name,
    slug,
    category: "Commercial Refrigeration" as const,
    service: true,
    install: false,
    authorizedDealer: false as const,
    residential: false,
    lightCommercial: false,
    commercial: true,
    refrigeration: true,
    boilerHydronic: false,
    equipmentTypes: ["Commercial refrigeration equipment", "Applicable controls, evaporators, and condensing equipment"],
    relatedServices: REFRIGERATION_LINKS,
    relatedProjects: [],
    relatedRefrigerants: name === "True Refrigeration" ? ["r-290"] : [],
    publicVisible: true,
    indexed: false,
    summary: `Air2Cool services applicable ${name} commercial refrigeration equipment in North Jersey.`,
  })),
  {
    name: "MYCOM",
    slug: "mycom",
    category: "Commercial / Industrial",
    service: true,
    install: false,
    authorizedDealer: false,
    residential: false,
    lightCommercial: false,
    commercial: true,
    refrigeration: true,
    boilerHydronic: false,
    equipmentTypes: ["Industrial reciprocating compressors", "Large commercial refrigeration equipment"],
    relatedServices: REFRIGERATION_LINKS,
    relatedProjects: [{ label: "MYCOM F6WB reciprocating compressor overhaul on a 60-ton unit", href: "/projects" }],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: false,
    summary: "Air2Cool has confirmed experience with a MYCOM F6WB reciprocating compressor overhaul on a 60-ton unit.",
  },
  {
    name: "AprilAire",
    slug: "aprilaire",
    category: "Indoor Air Quality",
    service: true,
    install: true,
    authorizedDealer: false,
    residential: true,
    lightCommercial: false,
    commercial: false,
    refrigeration: false,
    boilerHydronic: false,
    equipmentTypes: ["Whole-home humidifiers", "Whole-home dehumidifiers", "AprilAire E080W 80-Pint Wi-Fi Dehumidifier"],
    relatedServices: [
      { label: "Whole-home humidifiers", href: "/services/humidifier" },
      { label: "Indoor air quality", href: "/services/air-quality" },
    ],
    relatedProjects: [],
    relatedRefrigerants: [],
    publicVisible: true,
    indexed: false,
    summary: "Air2Cool works with AprilAire whole-home humidity-control equipment, including the AprilAire E080W 80-Pint Wi-Fi Dehumidifier.",
  },
] as const satisfies readonly BrandProfile[];

export const PUBLIC_BRANDS = BRANDS.filter((brand) => brand.publicVisible);
export const INDEXED_BRANDS = BRANDS.filter((brand) => brand.publicVisible && brand.indexed);

export function getBrandBySlug(slug: string) {
  return BRANDS.find((brand) => brand.slug === slug);
}
