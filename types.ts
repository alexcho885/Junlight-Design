export enum PricingTag {
  SALE = 'SALE',
  HOT = 'HOT',
  NONE = 'NONE'
}

export interface PricingPlan {
  id: string;
  title: string;
  originalPrice: number;
  salePrice: number;
  tag: PricingTag;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioCategory {
  id: string;
  name: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}