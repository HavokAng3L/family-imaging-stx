type CardObject = {
  title: string;
  body: Array<string>;
  // If list is false, it will concatenate the strings within
  // the string array and return a bigger string. <- I will find
  // a better solution later.
};

type ListItemType = string;

export type { CardObject, ListItemType };
