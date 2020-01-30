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
  photoUrl?: string;
  displayName?: string;
}

export interface SearchHistory {
  name?: string,
}

export interface HistoryList {
  historyList: SearchHistory[]
}

export interface JsonString {
  jsonString: String;
}