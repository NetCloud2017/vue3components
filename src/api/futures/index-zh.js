export const zh_futures = [
    //   交易所期货数据

    //  使用接口

    // 获取新浪-国内期货实时行情数据
    "futures_zh_spot",
    //    获取新浪-内盘分时数据
    "futures_zh_minute_sina",

    // 未使用接口

    //   中国金融期货交易所每日交易数据
    "get_cffex_daily",
    //   中国金融期货交易所前20会员持仓数据明细
    "get_cffex_rank_table",
    //    郑州商品交易所每日交易数据
    "get_czce_daily",
    //   获取郑州商品交易所前20会员持仓数据明细
    "get_czce_rank_table",
    //   获取大连商品交易所每日交易数据
    "get_dce_daily",
    //   获取上海国际能源交易中心每日交易数据
    "get_ine_daily",
    //   获取新加坡交易所每日交易数据
    "futures_sgx_daily",
    //  获取大连商品交易所前20会员持仓数据明细
    "get_dce_rank_table",
    //   获取中国金融期货交易所每日基差数据
    "get_futures_daily",
    //   获取四个期货交易所前5   10   15   20会员持仓排名数据
    "get_rank_sum",
    //   获取每日四个期货交易所前5   10   15   20会员持仓排名数据
    "get_rank_sum_daily",
    //   大连商品交易所前 20 会员持仓排名数据
    "futures_dce_position_rank",
    //   获取大宗商品注册仓单数据
    "get_receipt",
    //   获取某一天某品种(主力和次主力)或固定两个合约的展期收益率
    "get_roll_yield",
    //   获取展期收益率
    "get_roll_yield_bar",
    //   获取上海期货交易所每日交易数据
    "get_shfe_daily",
    //   获取上海期货交易所前20会员持仓数据明细
    "get_shfe_rank_table",
    //   获取上海期货交易所日成交均价数据
    "get_shfe_v_wap",
    //    获取具体交易日大宗商品现货价格及相应基差数据
    "futures_spot_price",
    //    获取具体交易日大宗商品现货价格及相应基差数据-该接口补充历史数据
    "futures_spot_price_previous",
    //    获取一段交易日大宗商品现货价格及相应基差数据
    "futures_spot_price_daily",
    //    郑州商品交易所-交易数据-仓单日报
    "futures_czce_warehouse_receipt",
    //   上海期货交易所-交易数据-仓单日报
    "futures_shfe_warehouse_receipt",
    //    大连商品交易所-交易数据-仓单日报
    "futures_dce_warehouse_receipt",
    //   国泰君安-交易日历

    // 期货可查数据
    "futures_rule",

    // 获取期货可查-指数-数值数据
    "get_qhkc_index",
    // 获取期货可查-指数-累计盈亏数据
    "get_qhkc_index_profit_loss",
    // 获取期货可查-指数-大资金动向数据
    "get_qhkc_index_trend",
    //  获取期货可查-资金-净持仓分布数据
    "get_qhkc_fund_bs",
    // 获取期货可查-资金-总持仓分布数据
    "get_qhkc_fund_position",
    // 获取期货可查-资金-净持仓变化分布数据
    "get_qhkc_fund_position_change",
    //  获取期货可查-工具-外盘比价数据
    "get_qhkc_tool_foreign",
    //  获取期货可查-工具-各地区经济数据
    "get_qhkc_tool_gdp",

    //   中国银行间市场交易所数据

    //  获取中国银行间市场交易商协会-债券数据
    "get_bond_bank",

    //  提供英为财情数据接口
    //    提供英为财情-股票指数-全球股指与期货指数数据
    "index_investing_global",
    //  提供英为财情-股票指数-全球股指与期货指数数据-URL版本
    "index_investing_global_from_url",
    //  提供英为财情-债券数据-全球政府债券行情与收益率数据
    "bond_investing_global",

    // 交易所商品期权数据
    // 提供大连商品交易所商品期权数据
    "option_dce_daily",
    //   提供郑州商品交易所商品期权数据
    "option_czce_daily",
    // 提供上海期货交易所商品期权数据
    "option_shfe_daily",

    // 期货-仓单有效期
    //  期货仓单有效期数据
    "get_receipt_date",

    //  新浪财经-期货
    //  获取新浪-外盘期货实时行情数据
    "futures_foreign_commodity_realtime",
    //   获取新浪-外盘期货历史行情数据
    "futures_foreign_hist",
    //  获取新浪-外盘期货合约详情
    "futures_foreign_detail",

    // 河北空气质量数据(期货-钢铁)
    //    河北空气质量数据
    "air_quality_hebei",

    // 南华期货-南华指数-波动率指数
    //    波动率指数
    "futures_nh_volatility_index",

    // 南华期货-南华指数-价格指数
    // 价格指数
    "futures_price_index_nh",

    // 南华期货-南华指数-收益率指数
    // 收益率指数
    "futures_return_index_nh",

    // 中国期货市场监控中心
    //  中国期货市场监控中心-指数
    "futures_index_cscidx",

    //南华期货
    //  相关系数矩阵
    "futures_correlation_nh",
    //  板块指数涨跌
    "futures_board_index_nh",
    //  品种指数涨跌
    "futures_variety_index_nh",

    // 期货品种字典
    //  期货品种字典
    "futures_hq_subscribe_exchange_symbol",

    // 期货手续费
    //  期货手续费
    "futures_comm_info",

    // 期货交割和期转现
    // 郑商所期转现
    "futures_to_spot_czce",
    //  上期所期转现
    "futures_to_spot_shfe",
    // 大商所期转现
    "futures_to_spot_dce",
    //  大商所交割统计
    "futures_delivery_dce",
    //  郑商所交割统计
    "futures_delivery_czce",
    //  上期所交割统计
    "futures_delivery_shfe",
    //  大商所交割配对
    "futures_delivery_match_dce",
    // 郑商所交割配对
    "futures_delivery_match_czce",

    // 期货合约详情
    // 期货合约详情
    "futures_contract_detail",

    // 国债期货可交割券相关指标
    //  国债期货可交割券相关指标
    "bond_futures_deliverable_coupons",

    // 商品期货库存数据
    //  库存数据-东方财富
    "futures_inventory_em",
    //  库存数据-99期货
    "futures_inventory_99",

    // 美国商品期货交易委员会
    // 外汇类非商业持仓报告
    "macro_usa_cftc_nc_holding",
    //   商品类非商业持仓报告
    "macro_usa_cftc_c_holding",
    //   外汇类商业持仓报告
    "macro_usa_cftc_merchant_currency_holding",
    //    商品类商业持仓报告
    "macro_usa_cftc_merchant_goods_holding",

    // 期货连续合约
    // 获取新浪期货连续合约的历史数据
    "futures_main_sina",

    // 鸡蛋价格
    // 各年度产区鸡蛋价格走势
    "futures_egg_price_yearly",
    //  2015-2021年鸡蛋价格走势图
    "futures_egg_price",
    // 各主产区鸡蛋均价
    "futures_egg_price_area",

    // 养猪数据中心
    // 生猪信息
    "futures_pig_info",
    //  生猪价格排行
    "futures_pig_rank",
];
