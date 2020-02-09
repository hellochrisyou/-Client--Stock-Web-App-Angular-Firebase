export interface Stock {
  uId?: string;
  options?: string;
  symbol?: string;
  name?: string;
  exchange?: string;
  open?: number;
  low?: number;
  high?: number;
  latestPrice?: number;
  change?: number;
  changePercent?: number;
  week52Low?: number;
  week52High?: number;
  ytdChange?: number;
}

export interface User {
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  country?: string;
}

export interface SearchHistory {
  uId?: string;
  name?: string;
}

export interface JsonString {
  jsonString: string;
}
