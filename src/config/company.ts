export const SERVICE_COUNTIES = [
  { name: "Morris", fullName: "Morris County", slug: "morris-county" },
  { name: "Sussex", fullName: "Sussex County", slug: "sussex-county" },
  { name: "Warren", fullName: "Warren County", slug: "warren-county" },
  { name: "Essex", fullName: "Essex County", slug: "essex-county" },
  { name: "Passaic", fullName: "Passaic County", slug: "passaic-county" },
  { name: "Union", fullName: "Union County", slug: "union-county" },
  { name: "Bergen", fullName: "Bergen County", slug: "bergen-county" },
  { name: "Hunterdon", fullName: "Hunterdon County", slug: "hunterdon-county" },
  { name: "Somerset", fullName: "Somerset County", slug: "somerset-county" },
] as const;

export const COMPANY = {
  name: "Air2Cool Heating & Cooling",
  legalName: "Air2Cool Heating/AC & Refrigeration",
  foundedYear: 1998,
  servingSinceClaim: "Serving North Jersey Since 1998",
  location: {
    locality: "Wharton",
    region: "NJ",
    postalCode: "07885",
    country: "US",
  },
  phone: {
    display: "(201) 787-5657",
    href: "tel:+12017875657",
    e164: "+1-201-787-5657",
  },
  reviews: {
    minimumCount: 300,
    rating: "5.0",
    claim: "300+ 5-Star Google Reviews",
  },
  serviceCounties: SERVICE_COUNTIES,
  license: {
    masterHvacrNumber: "19HC00847000",
    // TODO: Add the NJ Master HVACR license-holder/BFR name when confirmed.
    holderName: null as string | null,
  },
} as const;

export const RESIDENTIAL_MAINTENANCE_PLAN = {
  seasonalVisitsPerYear: 2,
  priorityService: true,
  repairDiscountPercent: 20,
  partsDiscountPercent: 20,
  benefits: [
    "Two seasonal maintenance visits per covered HVAC system per year",
    "Priority service",
    "20% off eligible repairs",
    "20% off eligible replacement parts",
  ],
} as const;

export const COMMERCIAL_MAINTENANCE_PLAN = {
  visitFrequency: "agreement-specific",
  priorityService: null,
  repairDiscountPercent: 10,
  partsDiscountPercent: 10,
  description:
    "Commercial maintenance agreements are customized based on the facility, equipment type, system count, and service requirements. Commercial maintenance customers receive 10% off eligible repairs and 10% off eligible replacement parts.",
} as const;

// Backward-compatible residential alias for existing customer-facing components.
export const MAINTENANCE_PLAN = RESIDENTIAL_MAINTENANCE_PLAN;

export const PROMOTIONS = {
  houseCleaning:
    "Every qualifying new system installation includes a complimentary professional house cleaning.",
  financing:
    "0% APR financing is available up to $25,000 for qualifying customers, subject to eligibility, approval, and applicable program terms.",
} as const;

export const SERVICE_COUNTY_LIST =
  "Morris, Sussex, Warren, Essex, Passaic, Union, Bergen, Hunterdon, and Somerset counties";

export const RESPONSE_TIME_NOTE =
  "Based in Wharton, Air2Cool can often respond quickly throughout Morris County and North Jersey. Actual timing depends on technician availability, traffic, weather, and call volume.";

export const FEDERAL_HVAC_CREDIT_NOTE =
  "The former federal Section 25C Energy Efficient Home Improvement Credit does not apply to qualifying property placed in service after December 31, 2025.";

export const NJ_INCENTIVE_NOTE =
  "New Jersey Clean Energy programs and utility programs referenced for JCP&L and PSE&G customers may offer rebates or financing, subject to current program availability, equipment requirements, customer eligibility, approval, and applicable terms.";
