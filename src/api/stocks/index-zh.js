export const stocks = [
  // 股票-企业社会责任
  //   企业社会责任数据
  "stock_zh_a_scr_report",

  //  美股-中国概念股行情和历史数据
  //  中国概念股行情
  "stock_us_zh_spot",
  //  中国概念股历史数据
  "stock_us_zh_daily",

  // 新浪财经-港股
  //  获取港股的历史行情数据(包括前后复权因子)
  "stock_hk_spot",
  //   获取港股的实时行情数据(也可以用于获得所有港股代码)
  "stock_hk_daily",

  // 新浪财经-美股
  // 获得美股的所有股票代码
  "get_us_stock_name",
  //    获取美股行情报价
  "stock_us_spot",
  //     获取美股的历史数据(包括前复权因子)
  "stock_us_daily",
  //   获取美股的基本面数据
  "stock_us_fundamental",

  // A+H股实时行情数据和历史行情数据
  // 获取 A+H 股实时行情数据(延迟15分钟)
  "stock_zh_ah_spot",
  //    获取 A+H 股历史行情数据(日频)
  "stock_zh_ah_daily",
  //    获取 A+H 股所有股票代码
  "stock_zh_ah_name",

  // A股实时行情数据和历史行情数据
  // 获取 A 股实时行情数据
  "stock_zh_a_spot",
  //    获取 A 股历史行情数据(日频)
  "stock_zh_a_daily",
  //    获取 A 股分时历史行情数据(分钟)
  "stock_zh_a_minute",
  //    获取 A 股 CDR 历史行情数据(日频)
  "stock_zh_a_cdr_daily",

  // 科创板实时行情数据和历史行情数据
  //   获取科创板实时行情数据
  "stock_zh_kcb_spot",
  //   获取科创板历史行情数据(日频)
  "stock_zh_kcb_daily", //  指数实时行情和历史行情
  //  股票指数历史行情数据
  "stock_zh_index_daily",
  //   股票指数历史行情数据-腾讯
  "stock_zh_index_daily_tx",
  //   股票指数历史行情数据-东方财富
  "stock_zh_index_daily_em",
  //   股票指数实时行情数据
  "stock_zh_index_spot",

  // 股票分笔数据
  // A 股票分笔行情数据(近2年)-腾讯
  "stock_zh_a_tick_tx",
  //    A 股票分笔行情数据(近2年)-腾讯-当日数据
  "stock_zh_a_tick_tx_js",
  //    A 股票分笔行情数据(近5个交易日)-163
  "stock_zh_a_tick_163",

  // 机构调研数据

  // 获取机构调研数据-统计
  "stock_jgdy_tj_em",
  //  获取机构调研数据-详细
  "stock_jgdy_detail_em",

  // 股权质押数据
  // 获取股权质押市场概况
  "stock_gpzy_profile_em",
  //    获取上市公司质押比例
  "stock_gpzy_pledge_ratio_em",
  //     获取重要股东股权质押明细
  "stock_gpzy_pledge_ratio_detail_em",
  //    获取质押机构分布统计-证券公司
  "stock_em_gpzy_distribute_statistics_company",
  //    获取质押机构分布统计-银行
  "stock_em_gpzy_distribute_statistics_bank",
  //    获取上市公司质押比例-行业数据
  "stock_gpzy_industry_data_em",

  //  商誉专题数据
  //  获取A股商誉市场概况
  "stock_em_sy_profile",
  //     获取商誉减值预期明细
  "stock_em_sy_yq_list",
  //    获取个股商誉减值明细
  "stock_em_sy_jz_list",
  //    获取个股商誉明细
  "stock_em_sy_list",
  //    获取行业商誉
  "stock_em_sy_hy_list",

  //  股票账户统计数据
  //获取股票账户统计数据
  "stock_account_statistics_em",

  //   股票指数-成份股
  //股票指数-成份股-最新成份股获取
  "index_stock_cons",
  //  中证指数-成份股
  "index_stock_cons_csindex",
  //   中证指数成份股的权重
  "index_stock_cons_weight_csindex",
  // 股票指数-成份股-所有可以获取的指数表
  "index_stock_info",
  //   股票指数-成份股-所有可以获取的指数表-新浪新接口
  "index_stock_info_sina",
  //  股票指数-历史成份股
  "index_stock_hist",

  //  中国-全国股票交易统计表
  "macro_china_stock_market_cap",

  //分析师指数
  //  分析师排名
  "stock_analyst_rank_em",
  //  分析师详情
  "stock_analyst_detail_em",

  //千股千评
  //  股市关注度
  "stock_comment_em",
  //   机构参与度
  "stock_comment_detail_zlkp_jgcyd_em",
  //  综合评价-历史评分
  "stock_comment_detail_zhpj_lspf_em",
  // 市场热度-用户关注指数
  "stock_comment_detail_scrd_focus_em",
  //  市场热度-市场参与意愿
  "stock_comment_detail_scrd_desire_em",
  //  市场热度-日度市场参与意愿
  "stock_comment_detail_scrd_desire_daily_em",
  // 市场热度-市场成本
  "stock_comment_detail_scrd_cost_em",

  //沪深港通
  //  港股通成份股
  "stock_hk_ggt_components_em",
  // 沪深港通北向-净流入
  "stock_hsgt_north_net_flow_in_em",
  // 沪深港通北向-资金余额
  "stock_hsgt_north_cash_em",
  // 沪深港通北向-累计净流入
  "stock_hsgt_north_acc_flow_in_em",
  //  沪深港通南向-净流入
  "stock_hsgt_south_net_flow_in_em",
  //  沪深港通南向-资金余额
  "stock_hsgt_south_cash_em",
  // 沪深港通南向-累计净流入
  "stock_hsgt_south_acc_flow_in_em",
  // 沪深港通持股-个股排行
  "stock_hsgt_hold_stock_em",
  //  沪深港通持股-每日个股统计
  "stock_hsgt_stock_statistics_em",
  // 沪深港通持股-每日机构统计
  "stock_hsgt_institution_statistics_em",
  //  沪深港通历史数据
  "stock_hsgt_hist_em",
  //  板块排行
  "stock_hsgt_board_rank_em",

  // 两市停复牌
  //  两市停复牌数据
  "stock_tfp_em",

  // 现货与股票
  //  现货与股票接口
  "futures_spot_stock",

  // 打新收益率
  //  打新收益率
  "stock_dxsyl_em",
  //  新股申购与中签查询
  "stock_xgsglb_em",

  // 年报季报
  //  上市公司业绩预告
  "stock_yjyg_em",
  //  上市公司预约披露时间
  "stock_yysj_em",

  // 高频数据-标普500指数
  //  获取标普500指数的分钟数据
  "hf_sp_500",

  // 个股资金流
  //  个股资金流
  "stock_individual_fund_flow",
  // 个股资金流排名
  "stock_individual_fund_flow_rank",
  // 大盘资金流
  "stock_market_fund_flow",
  //  板块资金流排名
  "stock_sector_fund_flow_rank",

  // 股票基本面数据
  //  财务摘要
  "stock_financial_abstract",
  //  三大财务报表
  "stock_financial_report_sina",
  // 财务指标
  "stock_financial_analysis_indicator",
  //  股票增发
  "stock_add_stock",
  //  股票新股
  "stock_ipo_info",
  // 分红配股
  "stock_history_dividend_detail",
  //  历史分红
  "stock_history_dividend",
  //  个股历史分红
  "stock_dividents_cninfo",
  // 限售解禁
  "stock_restricted_shares",
  //  流动股东
  "stock_circulate_stock_holder",
  // 基金持股
  "stock_fund_stock_holder",
  //  主要股东
  "stock_main_stock_holder",

  // 股票板块
  //  板块行情
  "stock_sector_spot",
  //  板块详情(具体股票)
  "stock_sector_detail",

  // 股票信息
  //  深证证券交易所股票代码和简称
  "stock_info_sz_name_code",
  // 上海证券交易所股票代码和简称
  "stock_info_sh_name_code",
  //  北京证券交易所股票代码和简称
  "stock_info_bj_name_code",
  //  上海证券交易所暂停和终止上市
  "stock_info_sh_delist",
  // 深证证券交易所暂停和终止上市
  "stock_info_sz_delist",
  // 深证证券交易所股票曾用名详情
  "stock_info_sz_change_name",
  // A 股股票曾用名列表
  "stock_info_change_name",
  //  A 股股票代码和简称
  "stock_info_a_code_name",

  // 机构持股
  //  机构持股一览表
  "stock_institute_hold",
  //  机构持股详情
  "stock_institute_hold_detail",

  // 机构推荐股票
  //  机构推荐
  "stock_institute_recommend",
  //   股票评级记录
  "stock_institute_recommend_detail",

  // 股票市场总貌
  //  深圳证券交易所-市场总貌
  "stock_szse_summary",
  //   上海证券交易所-股票数据总貌
  "stock_sse_summary",
  //  上海证券交易所-每日股票情况
  "stock_sse_deal_daily",

  // 美股港股目标价
  //  美股港股目标价
  "stock_price_js",

  // 券商业绩月报
  //  券商业绩月报
  "stock_em_qsjy",

  // A 股市盈率和市净率
  //  A 股市净率
  "stock_a_pb",
  //   A 股市盈率
  "stock_a_pe",
  //  A 股市盈率和市净率
  "stock_a_pe_and_pb",
  //  A 股个股市盈率、市净率和股息率指标
  "stock_a_lg_indicator",
  //  港股股个股市盈率、市净率和股息率指标
  "stock_hk_eniu_indicator",
  //   创新高和新低的股票数量
  "stock_a_high_low_statistics",
  //  破净股统计
  "stock_a_below_net_asset_statistics",

  // 股票财务报告-预约披露
  //  股票财务报告-预约披露时间
  "stock_report_disclosure",

  // 基金持股
  //  个股-基金持股
  "stock_report_fund_hold",
  // 个股-基金持股-明细
  "stock_report_fund_hold_detail",

  // 中证指数
  //  中证指数
  "stock_zh_index_hist_csindex",
  //  中证指数-指数估值
  "stock_zh_index_value_csindex",

  // A股龙虎榜
  //  龙虎榜-每日详情
  "stock_sina_lhb_detail_daily",
  // 龙虎榜-个股上榜统计
  "stock_sina_lhb_ggtj",
  //  龙虎榜-营业上榜统计
  "stock_sina_lhb_yytj",
  //  龙虎榜-机构席位追踪
  "stock_sina_lhb_jgzz",
  //  龙虎榜-机构席位成交明细
  "stock_sina_lhb_jgmx",

  // 注册制审核
  //  注册制审核-科创板
  "stock_register_kcb",
  //  注册制审核-创业板
  "stock_register_cyb",
  //  注册制审核-达标企业
  "stock_register_db",

  // 次新股
  //  股票数据-次新股
  "stock_zh_a_new",

  // 大宗交易
  //  大宗交易-市场统计
  "stock_dzjy_sctj",
  //  大宗交易-每日明细
  "stock_dzjy_mrmx",
  //  大宗交易-每日统计
  "stock_dzjy_mrtj",
  //  大宗交易-活跃 A 股统计
  "stock_dzjy_hygtj",
  // 大宗交易-营业部排行
  "stock_dzjy_yybph",
  //  大宗交易-活跃营业部统计
  "stock_dzjy_hyyybtj",
  //  大宗交易-营业部排行
  "stock_dzjy_yybph",

  // 一致行动人
  //  股票数据-一致行动人
  "stock_yzxdr_em",

  // 新闻-个股新闻
  //  新闻-个股新闻
  "stock_news_em",

  // 融资融券
  // 上海证券交易所-融资融券汇总
  "stock_margin_sse",
  // 上海证券交易所-融资融券详情
  "stock_margin_detail_sse",

  // 盈利预测
  //  盈利预测
  "stock_profit_forecast",

  // 分红配送
  //  分红配送
  "stock_fhps_em",

  // 业绩快报
  //  业绩快报
  "stock_yjkb_em",

  // 概念板块
  //   同花顺-概念板块-成份股
  "stock_board_concept_cons_ths",
  //   同花顺-概念板块-指数日频数据
  "stock_board_concept_hist_ths",
  //  同花顺-成份股
  "stock_board_cons_ths",

  // 业绩报告
  //  业绩报告
  "stock_yjbb_em",

  // 三大表报
  //  三大表报-资产负债表
  "stock_zcfz_em",
  //  三大表报-利润表
  "stock_lrb_em",
  //  三大表报-现金流量表
  "stock_xjll_em",

  // 首发企业申报
  //  首发企业申报
  "stock_ipo_declare",

  // 行业板块
  //  同花顺-行业板块-成份股
  "stock_board_industry_cons_ths",
  //  同花顺-行业板块-指数日频数据
  "stock_board_industry_index_ths",

  // 营业部
  //   营业部排名-上榜次数最多
  "stock_lh_yyb_most",
  //  营业部排名-资金实力最强
  "stock_lh_yyb_capital",
  //  营业部排名-抱团操作实力
  "stock_lh_yyb_control",

  // 同花顺-数据中心-资金流向
  //  同花顺-数据中心-资金流向-个股资金流
  "stock_fund_flow_individual",
  //  同花顺-数据中心-资金流向-行业资金流
  "stock_fund_flow_industry",
  //  同花顺-数据中心-资金流向-概念资金流
  "stock_fund_flow_concept",
  //  同花顺-数据中心-资金流向-大单追踪
  "stock_fund_flow_big_deal",

  // 高管持股
  //  高管持股
  "stock_ggcg_em",

  // 问财-热门股票
  // 问财-热门股票
  "stock_hot_rank_wc",

  // 赚钱效应分析
  //  赚钱效应分析
  "stock_market_activity_legu",

  // 平均持仓
  // 平均持仓
  "stock_average_position_legu",

  // 增发
  //  增发
  "stock_em_qbzf",

  // 配股
  //  配股
  "stock_em_pg",

  // 涨停板行情
  //  涨停板行情-涨停股池
  "stock_zt_pool_em",
  //  涨停板行情-昨日涨停股池
  "stock_zt_pool_previous_em",
  //  涨停板行情-强势股池
  "stock_zt_pool_strong_em",
  //  涨停板行情-次新股池
  "stock_zt_pool_sub_new_em",
  //  涨停板行情-炸板股池
  "stock_zt_pool_zbgc_em",
  // 涨停板行情-跌停股池
  "stock_zt_pool_dtgc_em",

  // 两网及退市
  //  两网及退市
  "stock_staq_net_stop",

  // 股东户数
  //  股东户数
  "stock_zh_a_gdhs",
  //  股东户数详情
  "stock_zh_a_gdhs_detail_em",

  // A 股日频率数据-东方财富
  //  A 股日频率数据-东方财富
  "stock_zh_a_hist",

  // 盘口异动
  //  盘口异动
  "stock_changes_em",

  // 东方财富-概念板块
  //  概念板块-名称
  "stock_board_concept_name_em",
  //  概念板块-历史行情
  "stock_board_concept_hist_em",
  //  概念板块-分时历史行情
  "stock_board_concept_hist_min_em",
  //  概念板块-板块成份
  "stock_board_concept_cons_em",

  // 融资融券-深圳
  //  标的证券信息
  "stock_margin_underlying_info_szse",
  //   融资融券明细
  "stock_margin_detail_szse",
  //  融资融券汇总
  "stock_margin_szse",

  // 港股财报
  //  东方财富-港股-财务报表-三大报表
  "stock_financial_hk_report_em",
  // 东方财富-港股-财务分析-主要指标
  "stock_financial_hk_analysis_indicator_em",

  // 全部 A 股-等权重市盈率、中位数市盈率
  //  全部 A 股-等权重市盈率、中位数市盈率
  "stock_a_ttm_lyr",
  // 全部 A 股-等权重市净率、中位数市净率
  "stock_a_all_pb",

  // A 股分时数据
  // 东财-股票分时
  "stock_zh_a_hist_min_em",
  // 东财-股票盘前分时
  "stock_zh_a_hist_pre_min_em",

  // 港股分时数据
  // 东财-港股分时数据
  "stock_hk_hist_min_em",

  // 美股分时数据
  // 东财-美股分时数据
  "stock_us_hist_min_em",

  // 可转债详情
  //  东财-可转债详情
  "bond_zh_cov_info",

  // 风险警示板
  //  风险警示板
  "stock_zh_a_st_em",

  // 美股-粉单市场
  //  美股-粉单市场
  "stock_us_pink_spot_em",

  // 美股-知名美股
  //  美股-知名美股
  "stock_us_famous_spot_em",

  // 股票-投资评级
  //  股票-投资评级
  "stock_rank_forecast_cninfo",

  // 股票-行业市盈率
  //  股票-行业市盈率
  "stock_industry_pe_ratio_cninfo",

  // 新股-新股过会
  //  新股-新股过会
  "stock_new_gh_cninfo",

  // 新股-IPO
  //  新股-IPO
  "stock_new_ipo_cninfo",

  // 股东人数及持股集中度
  //  股东人数及持股集中度
  "stock_hold_num_cninfo",

  // 实际控制人持股变动
  //  实际控制人持股变动
  "stock_hold_control_cninfo",

  // 高管持股变动明细
  //  高管持股变动明细
  "stock_hold_management_detail_cninfo",

  // B 股实时行情数据和历史行情数据
  //  B 股实时行情数据
  "stock_zh_b_spot",
  //   B 股历史行情数据(日频)
  "stock_zh_b_daily",
  //  B 股分时历史行情数据(分钟)
  "stock_zh_b_minute",

  // 公司治理-对外担保
  //  公司治理-对外担保
  "stock_cg_guarantee_cninfo",

  // 公司治理-公司诉讼
  //  公司治理-公司诉讼
  "stock_cg_lawsuit_cninfo",

  // 公司治理-股权质押
  //  公司治理-股权质押
  "stock_cg_equity_mortgage_cninfo",

  // 沪深港通持股
  //  沪深港通持股-具体股票
  "stock_hsgt_individual_em",
  //  沪深港通持股-具体股票-详情
  "stock_hsgt_individual_detail_em",

  // IPO 受益股
  //  IPO 受益股
  "stock_ipo_benefit_ths",

  // 同花顺-数据中心-技术选股-创新高
  //  创新高
  "stock_rank_cxg_ths",
  // 创新低
  "stock_rank_cxd_ths",
  // 连续上涨
  "stock_rank_lxsz_ths",
  //  连续下跌
  "stock_rank_lxxd_ths",
  //  持续放量
  "stock_rank_cxfl_ths",
  //  持续缩量
  "stock_rank_cxsl_ths",
  //  向上突破
  "stock_rank_xstp_ths",
  // 向下突破
  "stock_rank_xxtp_ths",
  //  量价齐升
  "stock_rank_ljqs_ths",
  // 量价齐跌
  "stock_rank_ljqd_ths",
  //  险资举牌
  "stock_rank_xzjp_ths",

  // 行业板块
  //  行业板块-板块成份
  "stock_board_industry_cons_em",
  //  行业板块-历史行情
  "stock_board_industry_hist_em",
  //  行业板块-分时历史行情
  "stock_board_industry_hist_min_em",
  //  行业板块-板块名称
  "stock_board_industry_name_em",

  // 股票回购数据
  //  股票回购数据
  "stock_repurchase_em",

  // 个股信息查询
  //  个股信息查询
  "stock_individual_info_em",

  // 科创板报告
  //  科创板报告
  "stock_zh_kcb_report_em",

  // 东方财富网-数据中心-股东分析-股东持股分析
  //  股东持股分析-十大流通股东
  "stock_gdfx_free_holding_analyse_em",
  // 股东持股分析-十大股东
  "stock_gdfx_holding_analyse_em",
  //   东方财富网-个股-十大流通股东
  "stock_gdfx_free_top_10_em",
  //  东方财富网-个股-十大股东
  "stock_gdfx_top_10_em",
  // 股东持股明细-十大流通股东
  "stock_gdfx_free_holding_detail_em",
  // 股东持股明细-十大股东
  "stock_gdfx_holding_detail_em",
  //   股东持股变动统计-十大流通股东
  "stock_gdfx_free_holding_change_em",
  //   股东持股变动统计-十大股东
  "stock_gdfx_holding_change_em",
  //   股东持股统计-十大流通股东
  "stock_gdfx_free_holding_statistics_em",
  //  股东持股统计-十大股东
  "stock_gdfx_holding_statistics_em",
  //  股东协同-十大流通股东
  "stock_gdfx_free_holding_teamwork_em",
  //  股东协同-十大股东
  "stock_gdfx_holding_teamwork_em",

  // 东方财富-个股人气榜
  //  东方财富-个股人气榜-人气榜
  "stock_hot_rank_em",
  //  东方财富-个股人气榜-历史趋势及粉丝特征
  "stock_hot_rank_detail_em",
  //  东方财富-个股人气榜-实时变动
  "stock_hot_rank_detail_realtime_em",
  //  东方财富-个股人气榜-关键词
  "stock_hot_keyword_em",
  // 东方财富-个股人气榜-最新排名
  "stock_hot_rank_latest_em",
  //  东方财富-个股人气榜-相关股票
  "stock_hot_rank_relate_em",

  // 网易财经-行情首页-沪深 A 股-每日行情
  //  网易财经-行情首页-沪深 A 股-每日行情
  "stock_zh_a_hist_163",

  // 东方财富-股票数据-龙虎榜
  //  东方财富网-数据中心-龙虎榜单-龙虎榜详情
  "stock_lhb_detail_em",
  //  东方财富网-数据中心-龙虎榜单-个股上榜统计
  "stock_lhb_stock_statistic_em",
  //  东方财富网-数据中心-龙虎榜单-个股龙虎榜详情
  "stock_lhb_stock_detail_em",
  //  东方财富网-数据中心-龙虎榜单-机构买卖每日统计
  "stock_lhb_jgmmtj_em",
  //  东方财富网-数据中心-龙虎榜单-每日活跃营业部
  "stock_lhb_hyyyb_em",

  //股票热度-雪球
  //  雪球-沪深股市-热度排行榜-关注排行榜
  "stock_hot_follow_xq",
  //  雪球-沪深股市-热度排行榜-讨论排行榜
  "stock_hot_tweet_xq",
  //  雪球-沪深股市-热度排行榜-分享交易排行榜
  "stock_hot_deal_xq",

  //股票热度-淘股吧
  //  淘股吧-热门股票
  "stock_hot_tgb",

  //内部交易
  //  内部交易
  "stock_inner_trade_xq",

  //股票-三大报表
  //  东方财富-股票-财务分析-资产负债表-按报告期
  "stock_balance_sheet_by_report_em",
  //  东方财富-股票-财务分析-资产负债表-按年度
  "stock_balance_sheet_by_yearly_em",
  //  东方财富-股票-财务分析-利润表-报告期
  "stock_profit_sheet_by_report_em",
  //  东方财富-股票-财务分析-利润表-按年度
  "stock_profit_sheet_by_yearly_em",
  // 东方财富-股票-财务分析-利润表-按单季度
  "stock_profit_sheet_by_quarterly_em",
  // 东方财富-股票-财务分析-现金流量表-按报告期
  "stock_cash_flow_sheet_by_report_em",
  //  东方财富-股票-财务分析-现金流量表-按年度
  "stock_cash_flow_sheet_by_yearly_em",
  // 东方财富-股票-财务分析-现金流量表-按单季度
  "stock_cash_flow_sheet_by_quarterly_em",
];
