export interface FilterCriteria {
    valueFilterType?: string;  // >, <, =, between
    minValue?: number | null;
    maxValue?: number | null;
    deliveryDate?: string | null;
  }
  