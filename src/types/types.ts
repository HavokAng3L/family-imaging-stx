type CardObject = {
  title: string;
  body: Array<string>;
  // If list is false, it will concatenate the strings within
  // the string array and return a bigger string. <- I will find
  // a better solution later.
};

type ListItemObject = {
  text: string;
};

export type { CardObject, ListItemObject };
