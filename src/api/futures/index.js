import { zh_futures } from "./index-zh";

import { overseaFutures } from "./index-oversea";
export const futures = [
  //  全球大宗商品
  //  全球大宗商品数据
  "futures_global_commodity_hist",
  ...zh_futures,
  ...overseaFutures,
];
