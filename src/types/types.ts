// This file stores types for some of the components. They prevent errors when passing data between components.

type CardObject = {
  // Provides the card title
  title: string;
  // Provides the card body
  body: Array<Array<string>>;
  // If list is false, it will concatenate the strings within
  // the string array and return a bigger string. <- I will find
  // a better solution later.

  // Provides the location of the image for the card.
  imageUrl: string;
};

type ListItemType = string;

type PricingCardObject = {
  productName: string;
  productDescription: string;
  productSpecifics: Array<Array<string>>;
  productUpcoming: boolean;
  productPricing: number;
};

type MapComponentObject = {
  mapLatitude: number;
  mapLongitude: number;
};

export type { CardObject, ListItemType, PricingCardObject, MapComponentObject };
