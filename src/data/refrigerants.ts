export type RefrigerantProfile = {
  name: string;
  slug: string;
  category: string;
  summary: string;
  equipmentTypes: readonly string[];
  confirmed: boolean;
  publicVisible: boolean;
};

export const REFRIGERANTS: readonly RefrigerantProfile[] = [
  {
    name: "R-290",
    slug: "r-290",
    category: "Hydrocarbon refrigerant",
    summary:
      "Air2Cool works with applicable commercial refrigeration systems operating with R-290 hydrocarbon refrigerant.",
    equipmentTypes: [
      "Reach-in refrigerators and freezers",
      "Refrigerated prep tables",
      "Display cases",
      "Other applicable self-contained commercial refrigeration equipment",
    ],
    confirmed: true,
    publicVisible: true,
  },
] as const;

export const PUBLIC_REFRIGERANTS = REFRIGERANTS.filter(
  (refrigerant) => refrigerant.confirmed && refrigerant.publicVisible,
);

export function getRefrigerantBySlug(slug: string) {
  return REFRIGERANTS.find((refrigerant) => refrigerant.slug === slug);
}
