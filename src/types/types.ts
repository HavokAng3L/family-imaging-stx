type CardObject = {
  // Provides the card title
  title: string;
  // Provides the card body
  body: Array<string>;
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
  productSpecifics: Array<string>;
  productPrice: number;
  productUpcoming: boolean;

}

export type { CardObject, ListItemType, PricingCardObject };
