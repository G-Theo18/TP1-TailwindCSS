import type * as Icons from "@phosphor-icons/react";

export type BenefitData = {
  icon: keyof typeof Icons;
  label: string;
  description: string;
};

export const BENEFITS: BenefitData[] = [
  {
    icon: "AirTrafficControlIcon",
    label: "Accueil à l'aéroport",
    description:
      "Un chauffeur viendra vous récupérer vous et vos bagages directement à l'aéroport, sans surcoût.",
  },
  {
    icon: "CalendarCheckIcon",
    label: "Réservation facilitée",
    description: "Réservez facilement et rapidement parmis une large gamme d'expériences à faire durant votre séjour."
  },
  {
    icon: "UserCircleCheckIcon",
    label: "Les meilleurs guides",
    description: "Nos meilleurs guides sont prêts pour vous faire vivre des expériences inoubliables durant votre séjour"
  },
  {
    icon: "SealPercent",
    label: "Des tonnes de promos",
    description: "Partez à prix réduits sur les périodes de faible affluence tout en profitant d'une expérience complète"
  }
];