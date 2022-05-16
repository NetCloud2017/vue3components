const apis = [
  //   中国银行间市场债券行情数据
  // 债券市场行情-现券市场成交行情数据
  "get_bond_market_quote",
  //     债券市场行情-现券市场做市报价数据
  "get_bond_market_trade",

  //  外汇
  //  人民币外汇即期报价数据
  "get_fx_spot_quote",
  //  人民币外汇远掉报价数据
  "get_fx_swap_quote",
  //  外币对即期报价数据
  "get_fx_pair_quote",

  //  宏观-欧洲
  // 欧洲央行决议报告
  "macro_euro_interest_rate",

  //  宏观-主要机构
  //全球最大黄金ETF—SPDR Gold Trust持仓报告-总价值
  "macro_cons_gold_amount",
  //  全球最大黄金ETF—SPDR Gold Trust持仓报告-增持/减持
  "macro_cons_gold_change",
  //  全球最大黄金ETF—SPDR Gold Trust持仓报告-总库存
  "macro_cons_gold_volume",
  //  欧佩克报告-差异
  "macro_cons_opec_month",
  //   欧佩克报告-月份
  "macro_cons_opec_near_change",
  //    全球最大白银ETF--iShares Silver Trust持仓报告-总价值
  "macro_cons_silver_amount",
  //   全球最大白银ETF--iShares Silver Trust持仓报告-增持/减持
  "macro_cons_silver_change",
  //   全球最大白银ETF--iShares Silver Trust持仓报告-总库存
  "macro_cons_silver_volume",

  //  交易所金融期权数据
  //  提供上海证券交易所期权数据
  "get_finance_option",

  // 加密货币行情
  // 提供主流加密货币行情数据接口
  "crypto_js_spot",

  // 银保监分局本级行政处罚数据
  //    获取银保监分局本级行政处罚-信息公开表
  "bank_fjcf_table_detail",

  // 已实现波动率数据
  //O-MAN已实现波动率
  "article_oman_rv",
  //    Risk-Lab已实现波动率
  "article_rlab_rv",

  // FF多因子模型数据
  //  FF当前因子
  "ff_crr",

  // 世界各地区日出和日落数据-日
  // 每日日出和日落数据
  "weather_daily",

  // 世界各地区日出和日落数据-月
  //  每月日出和日落数据
  "weather_monthly",

  //   经济政策不确定性(EPU)指数
  // 主要国家和地区的经济政策不确定性(EPU)指数
  "article_epu_index",

  // 微博指数
  // 获取3个月内的微博指数
  "weibo_index",

  // 百度指数
  // 获取百度搜索指数
  "baidu_search_index",
  //     获取百度资讯指数
  "baidu_info_index",
  //    获取百度媒体指数
  "baidu_media_index",

  // 谷歌指数
  // 获取谷歌趋势指数
  "google_index",

  // 申万行业指数
  // 申万市场表征数据
  "sw_index_representation_spot",
  //   申万一级实时行情
  "sw_index_spot",
  //    申万二级实时行情
  "sw_index_second_spot",
  //    申万一级、二级板块成份
  "sw_index_cons",
  //     申万一级、二级历史行情
  "sw_index_daily",
  //    申万一级、二级历史行情指标
  "sw_index_daily_indicator",
  //   申万三级信息
  "sw_index_third_info",
  //    申万三级信息成份
  "sw_index_third_cons",

  // 空气质量
  // 空气质量历史数据
  "air_quality_hist",
  //     空气质量排行
  "air_quality_rank",
  //    空气质量观测点历史数据
  "air_quality_watch_point",
  //   所有城市列表
  "air_city_table",

  // 财富世界五百强公司
  // 获取财富世界500强公司历年排名
  "fortune_rank",

  // 中国证券投资基金业协会-信息公示
  // 中国证券投资基金业协会-信息公示-会员信息-会员机构综合查询
  "amac_member_info",
  //   中国证券投资基金业协会-信息公示-从业人员信息-基金从业人员资格注册信息
  "amac_person_fund_org_list",
  //   中国证券投资基金业协会-信息公示-从业人员信息-债券投资交易相关人员公示
  "amac_person_bond_org_list",
  //  中国证券投资基金业协会-信息公示-私募基金管理人公示-私募基金管理人综合查询
  "amac_manager_info",
  //  中国证券投资基金业协会-信息公示-私募基金管理人公示-私募基金管理人分类公示
  "amac_manager_classify_info",
  //  中国证券投资基金业协会-信息公示-私募基金管理人公示-证券公司私募基金子公司管理人信息公示
  "amac_member_sub_info",
  //   中国证券投资基金业协会-信息公示-基金产品-私募基金管理人基金产品
  "amac_fund_info",
  //  中国证券投资基金业协会-信息公示-基金产品-证券公司集合资管产品公示
  "amac_securities_info",
  // 中国证券投资基金业协会-信息公示-基金产品-证券公司直投基金
  "amac_aoin_info",
  //  中国证券投资基金业协会-信息公示-基金产品公示-证券公司私募投资基金
  "amac_fund_sub_info",
  // 中国证券投资基金业协会-信息公示-基金产品公示-基金公司及子公司集合资管产品公示
  "amac_fund_account_info",
  //  中国证券投资基金业协会-信息公示-基金产品公示-资产支持专项计划
  "amac_fund_abs",
  //  中国证券投资基金业协会-信息公示-基金产品公示-期货公司集合资管产品公示
  "amac_futures_info",
  //  中国证券投资基金业协会-信息公示-诚信信息-已注销私募基金管理人名单
  "amac_manager_cancelled_info",

  // 全国银行间同业拆借中心-市场数据-市场行情-外汇市场行情
  // 市场行情-外汇市场行情-人民币外汇即期报价
  "fx_spot_quote",
  //    市场行情-债券市场行情-人民币外汇远掉报价
  "fx_swap_quote",
  //    市场行情-债券市场行情-外币对即期报价
  "fx_pair_quote",

  //  能源-碳排放权
  //  碳排放权-国内
  "energy_carbon_domestic",
  //    碳排放权-北京
  "energy_carbon_bj",
  //    碳排放权-深圳
  "energy_carbon_sz",
  //    碳排放权-国际
  "energy_carbon_eu",
  //    碳排放权-湖北
  "energy_carbon_hb",
  //    碳排放权-广州
  "energy_carbon_gz",

  // 生活成本
  //   获取世界各大城市生活成本数据
  "cost_living",

  // 商品现货价格指数
  //   获取商品现货价格指数
  "spot_goods",

  // 中国宏观杠杆率
  //   获取中国宏观杠杆率数据
  "macro_cnbs",

  //  金融期权
  //获取金融期权数据
  "option_finance_board",

  // 倒闭公司数据
  //  获取2014至今倒闭公司名单
  "death_company",

  // 独角兽公司数据
  // 获取独角兽公司名单
  "nicorn_company",

  //  千里马公司数据
  //  获取千里马公司名单
  "maxima_company",

  // 义乌小商品指数
  //   获取义乌小商品指数
  "index_yw",

  // 世界银行间拆借利率
  // 银行间拆借利率
  "rate_interbank",

  // 主要央行利率

  // 美联储利率决议报告
  "macro_bank_usa_interest_rate",
  //  欧洲央行决议报告
  "macro_bank_euro_interest_rate",
  //   新西兰联储决议报告
  "macro_bank_newzealand_interest_rate",
  //  中国央行决议报告
  "macro_bank_china_interest_rate",
  //  瑞士央行决议报告
  "macro_bank_switzerland_interest_rate",
  //   英国央行决议报告
  "macro_bank_english_interest_rate",
  //   澳洲联储决议报告
  "macro_bank_australia_interest_rate",
  //   日本央行决议报告
  "macro_bank_japan_interest_rate",
  //   俄罗斯央行决议报告
  "macro_bank_russia_interest_rate",
  //   印度央行决议报告
  "macro_bank_india_interest_rate",
  //   巴西央行决议报告
  "macro_bank_brazil_interest_rate",

  //  中国
  // 社会融资规模增量统计
  "macro_china_shrzgm",
  // 金十数据中心-经济指标-中国-国民经济运行状况-经济状况-中国GDP年率报告
  "macro_china_gdp_yearly",
  // 金十数据中心-经济指标-中国-国民经济运行状况-物价水平-中国CPI年率报告
  "macro_china_cpi_yearly",
  // 金十数据中心-经济指标-中国-国民经济运行状况-物价水平-中国CPI月率报告
  "macro_china_cpi_monthly",
  //  金十数据中心-经济指标-中国-国民经济运行状况-物价水平-中国PPI年率报告
  "macro_china_ppi_yearly",
  //  金十数据中心-经济指标-中国-贸易状况-以美元计算出口年率报告
  "macro_china_exports_yoy",
  //  金十数据中心-经济指标-中国-贸易状况-以美元计算进口年率
  "macro_china_imports_yoy",
  // 金十数据中心-经济指标-中国-贸易状况-以美元计算贸易帐(亿美元)
  "macro_china_trade_balance",
  //  金十数据中心-经济指标-中国-产业指标-规模以上工业增加值年率
  "macro_china_industrial_production_yoy",
  //  金十数据中心-经济指标-中国-产业指标-官方制造业PMI
  "macro_china_pmi_yearly",
  //  金十数据中心-经济指标-中国-产业指标-财新制造业PMI终值
  "macro_china_cx_pmi_yearly",
  //  金十数据中心-经济指标-中国-产业指标-财新服务业PMI
  "macro_china_cx_services_pmi_yearly",
  // 金十数据中心-经济指标-中国-产业指标-中国官方非制造业PMI
  "macro_china_non_man_pmi",
  // 金十数据中心-经济指标-中国-金融指标-外汇储备(亿美元)
  "macro_china_fx_reserves_yearly",
  //  金十数据中心-经济指标-中国-金融指标-M2货币供应年率
  "macro_china_m2_yearly",
  //  金十数据中心-经济指标-中国-金融指标-上海银行业同业拆借报告
  "macro_china_shibor_all",
  // 金十数据中心-经济指标-中国-金融指标-人民币香港银行同业拆息
  "macro_china_hk_market_info",
  //  金十数据中心-经济指标-中国-其他-中国日度沿海六大电库存数据
  "macro_china_daily_energy",
  //  金十数据中心-经济指标-中国-其他-中国人民币汇率中间价报告
  "macro_china_rmb",
  //  金十数据中心-经济指标-中国-其他-深圳融资融券报告
  "macro_china_market_margin_sz",
  // 金十数据中心-经济指标-中国-其他-上海融资融券报告
  "macro_china_market_margin_sh",
  // 金十数据中心-经济指标-中国-其他-上海黄金交易所报告
  "macro_china_au_report",
  // 发改委-中国电煤价格指数-全国综合电煤价格指数
  "macro_china_ctci",
  //  发改委-中国电煤价格指数-各价区电煤价格指数
  "macro_china_ctci_detail",
  //   发改委-中国电煤价格指数-历史电煤价格指数
  "macro_china_ctci_detail_hist",
  //  中国-利率-贷款报价利率
  "macro_china_lpr",
  //  中国-新房价指数
  "macro_china_new_house_price",
  // 中国-企业景气及企业家信心指数
  "macro_china_enterprise_boom_index",
  // 中国-全国税收收入
  "macro_china_national_tax_receipts",
  //  中国-银行理财产品发行数量
  "macro_china_bank_financing",
  //  中国-新增信贷数据
  "macro_china_new_financial_credit",
  // 中国-外汇和黄金储备
  "macro_china_fx_gold",

  //  中国-居民消费价格指数
  "macro_china_cpi",
  // 中国-国内生产总值
  "macro_china_gdp",
  // 中国-工业品出厂价格指数
  "macro_china_ppi",
  // 中国-采购经理人指数
  "macro_china_pmi",
  // 中国-城镇固定资产投资
  "macro_china_gdzctz",
  //  中国-海关进出口增减情况一览表
  "macro_china_hgjck",
  //   中国-财政收入
  "macro_china_czsr",
  //  中国-外汇贷款数据
  "macro_china_whxd",
  //   中国-本外币存款
  "macro_china_wbck",
  //   中国-货币净投放与净回笼
  "macro_china_hb",
  //   中国-央行公开市场操作
  "macro_china_gksccz",
  //   中国-债券发行
  "macro_china_bond_public",

  // 美国
  //金十数据中心-经济指标-美国-经济状况-美国GDP
  "macro_usa_gdp_monthly",
  //  金十数据中心-经济指标-美国-物价水平-美国CPI月率报告
  "macro_usa_cpi_monthly",
  //  金十数据中心-经济指标-美国-物价水平-美国核心CPI月率报告
  "macro_usa_core_cpi_monthly",
  // 金十数据中心-经济指标-美国-物价水平-美国个人支出月率报告
  "macro_usa_personal_spending",
  //  金十数据中心-经济指标-美国-物价水平-美国零售销售月率报告
  "macro_usa_retail_sales",
  // 金十数据中心-经济指标-美国-物价水平-美国进口物价指数报告
  "macro_usa_import_price",
  //  金十数据中心-经济指标-美国-物价水平-美国出口价格指数报告
  "macro_usa_export_price",
  //  金十数据中心-经济指标-美国-劳动力市场-LMCI
  "macro_usa_lmci",
  //  金十数据中心-经济指标-美国-劳动力市场-失业率-美国失业率报告
  "macro_usa_unemployment_rate",
  //  金十数据中心-经济指标-美国-劳动力市场-失业率-美国挑战者企业裁员人数报告
  "macro_usa_job_cuts",
  //  金十数据中心-经济指标-美国-劳动力市场-就业人口-美国非农就业人数报告
  "macro_usa_non_farm",
  // 金十数据中心-经济指标-美国-劳动力市场-就业人口-美国ADP就业人数报告
  "macro_usa_adp_employment",
  //  金十数据中心-经济指标-美国-劳动力市场-消费者收入与支出-美国核心PCE物价指数年率报告
  "macro_usa_core_pce_price",
  //  金十数据中心-经济指标-美国-劳动力市场-消费者收入与支出-美国实际个人消费支出季率初值报告
  "macro_usa_real_consumer_spending",
  //  金十数据中心-经济指标-美国-贸易状况-美国贸易帐报告
  "macro_usa_trade_balance",
  //  金十数据中心-经济指标-美国-贸易状况-美国经常帐报告
  "macro_usa_current_account",
  //  金十数据中心-经济指标-美国-产业指标-制造业-贝克休斯钻井报告
  "macro_usa_rig_count",

  //  金十数据中心-经济指标-美国-产业指标-制造业-美国个人支出月率报告
  // 金十数据中心-经济指标-美国-产业指标-制造业-美国生产者物价指数(PPI)报告
  "macro_usa_ppi",
  //  金十数据中心-经济指标-美国-产业指标-制造业-美国核心生产者物价指数(PPI)报告
  "macro_usa_core_ppi",
  //金十数据中心-经济指标-美国-产业指标-制造业-美国API原油库存报告
  "macro_usa_api_crude_stock",
  //金十数据中心-经济指标-美国-产业指标-制造业-美国Markit制造业PMI初值报告
  "macro_usa_pmi",
  //  金十数据中心-经济指标-美国-产业指标-制造业-美国ISM制造业PMI报告
  "macro_usa_ism_pmi",
  // 金十数据中心-经济指标-美国-产业指标-房地产-美国NAHB房产市场指数报告
  "macro_usa_nahb_house_market_index",
  //   金十数据中心-经济指标-美国-产业指标-房地产-美国新屋开工总数年化报告
  "macro_usa_house_starts",
  //   金十数据中心-经济指标-美国-产业指标-房地产-美国新屋销售总数年化报告
  "macro_usa_new_home_sales",
  //  金十数据中心-经济指标-美国-产业指标-房地产-美国营建许可总数报告
  "macro_usa_building_permits",
  //  金十数据中心-经济指标-美国-产业指标-房地产-美国成屋销售总数年化报告
  "macro_usa_exist_home_sales",
  // 金十数据中心-经济指标-美国-产业指标-房地产-美国FHFA房价指数月率报告
  "macro_usa_house_price_index",
  //  金十数据中心-经济指标-美国-产业指标-房地产-美国S&P/CS20座大城市房价指数年率报告
  "macro_usa_spcs20",
  // 金十数据中心-经济指标-美国-产业指标-房地产-美国成屋签约销售指数月率报告
  "macro_usa_pending_home_sales",
  //  金十数据中心-经济指标-美国-领先指标-美国谘商会消费者信心指数报告
  "macro_usa_cb_consumer_confidence",
  //  金十数据中心-经济指标-美国-领先指标-美国NFIB小型企业信心指数报告
  "macro_usa_nfib_small_business",
  //  金十数据中心-经济指标-美国-领先指标-美国密歇根大学消费者信心指数初值报告
  "macro_usa_michigan_consumer_sentiment",
  // 金十数据中心-经济指标-美国-其他-美国EIA原油库存报告
  "macro_usa_eia_crude_rate",
  //  金十数据中心-经济指标-美国-其他-美国初请失业金人数报告
  "macro_usa_initial_jobless",
  //  金十数据中心-经济指标-美国-其他-美国原油产量报告
  "macro_usa_crude_inner",

  // 宏观数据
  // 全球最大黄金ETF—SPDR Gold Trust持仓报告
  "macro_cons_gold_volume",
  //   全球最大黄金ETF—SPDR Gold Trust持仓报告
  "macro_cons_gold_change",
  //    全球最大黄金ETF—SPDR Gold Trust持仓报告
  "macro_cons_gold_amount",
  //  全球最大白银ETF--iShares Silver Trust持仓报告
  "macro_cons_silver_volume",
  //    全球最大白银ETF--iShares Silver Trust持仓报告
  "macro_cons_silver_change",
  //   全球最大白银ETF--iShares Silver Trust持仓报告
  "macro_cons_silver_amount",
  //   欧佩克报告-月度
  "macro_cons_opec_month",

  //  伦敦金属交易所(LME)
  // 伦敦金属交易所(LME)-持仓报告
  "macro_euro_lme_holding",
  //    伦敦金属交易所(LME)-库存报告
  "macro_euro_lme_stock",

  // 货币对-投机情绪报告
  // 货币对-投机情绪报告
  "macro_fx_sentiment",

  //  COVID-19数据接口
  //  疫情风险等级查询
  "covid_19_risk_area",
  //   COVID-19-网易
  "covid_19_163",
  //   COVID-19-丁香园
  "covid_19_dxy",
  //   COVID-19-百度
  "covid_19_baidu",
  //  COVID-19-CSSE每日数据
  "covid_19_csse_daily",
  //   COVID-19-CSSE-全球确诊
  "covid_19_csse_global_confirmed",
  //   COVID-19-CSSE-全球死亡
  "covid_19_csse_global_death",
  //   COVID-19-CSSE-全球治愈
  "covid_19_csse_global_recovered",
  //   COVID-19-CSSE-美国死亡
  "covid_19_csse_us_death",
  //   COVID-19-CSSE-美国确诊
  "covid_19_csse_us_confirmed",

  // 百度迁徙地图接口
  // 百度迁徙地图-迁入/出地详情
  "migration_area_baidu",
  //   百度迁徙地图-迁徙规模
  "migration_scale_baidu",

  //  新型肺炎-小区查询
  //  具体小区查询
  "covid_19_area_search",
  //    提供可查询的省份-城市-区一览表
  "covid_19_area_all",
  //   全国所有小区详细数据
  "covid_19_area_detail",

  // 新型肺炎-相同行程查询
  // 同程交通
  "covid_19_trip",
  //   病患轨迹
  "covid_19_trace",

  // 债券-沪深债券
  // 债券-沪深债券-历史行情数据
  "bond_zh_hs_daily",
  //   债券-沪深债券-实时行情数据
  "bond_zh_hs_spot",

  // 债券-沪深可转债
  // 债券-沪深可转债-历史行情数据
  "bond_zh_hs_cov_daily",
  //   债券-沪深可转债-实时行情数据
  "bond_zh_hs_cov_spot",
  //   债券-可转债数据一览表
  "bond_zh_cov",
  //  债券-可转债数据比价
  "bond_cov_comparison",
  //    可转债实时数据-集思录
  "bond_cov_jsl",
  //   可转债转股价变动-集思录
  "bond_conv_adj_logs_jsl",

  //  金融期权-新浪
  // 沪深300期权列表
  "option_cffex_hs300_list_sina",
  //   沪深300期权实时行情
  "option_cffex_hs300_spot_sina",
  //  沪深300期权历史行情-日频
  "option_cffex_hs300_daily_sina",
  // 上交所期权列表
  "option_sse_list_sina",
  //  上交所期权剩余到期日
  "option_sse_expire_day_sina",
  // 上交所期权代码
  "option_sse_codes_sina",
  //  上交所期权实时行情
  "option_sse_spot_price_sina",
  //  上交所期权标的物实时行情
  "option_sse_underlying_spot_price_sina",
  //  上交所期权希腊字母
  "option_sse_greeks_sina",
  //  上交所期权分钟数据
  "option_sse_minute_sina",
  //  上交所期权日频数据
  "option_sse_daily_sina",
  // 股票期权分时数据
  "option_finance_minute_sina",

  // 商品期权-新浪
  //  商品期权合约字典查询
  "option_sina_option_commodity_dict",
  // 商品期权合约查询
  "option_sina_option_commodity_contract_list",
  //  商品期权行情历史数据
  "option_sina_option_commodity_hist",

  //  微博舆情报告
  //  微博舆情报告
  "stock_js_weibo_report",

  // 自然语言处理
  //  知识图谱
  "nlp_ownthink",
  // 智能问答
  "nlp_answer",

  // 货币
  //  最新货币报价
  "currency_latest",
  //  指定历史日期的所有货币报价
  "currency_history",
  // 指定日期间的时间序列数据-需要权限
  "currency_time_series",
  //  查询所支持的货币信息
  "currency_currencies",
  // 货币换算
  "currency_convert",
  // 指定历史日期的货币对的历史报价
  "currency_hist",
  // 指定货币的所有可获取货币对的数据
  "currency_pair_map",
  //   当前所有可兑换货币对
  "currency_name_code",

  //公募基金
  //  基金基本信息
  "fund_name_em",
  //   基金申购状态
  "fund_purchase_em",
  //   开放式基金-实时数据
  "fund_open_fund_daily_em",
  //  开放式基金-历史数据
  "fund_open_fund_info_em",
  //   场内交易基金-实时数据
  "fund_etf_fund_daily_em",
  //    场内交易基金-历史数据
  "fund_etf_fund_info_em",
  //   理财型基金-实时数据
  "fund_financial_fund_daily_em",
  //    理财型基金-历史数据
  "fund_financial_fund_info_em",
  //    分级基金-实时数据
  "fund_graded_fund_daily_em",
  //  分级基金-历史数据
  "fund_graded_fund_info_em",
  //  货币型基金-实时数据
  "fund_money_fund_daily_em",
  //   货币型基金-历史数据
  "fund_money_fund_info_em",
  //  基金估值
  "fund_value_estimation_em",

  // 恐慌指数
  //  恐慌指数
  "index_vix",

  // 中国油价
  //  汽柴油历史调价信息
  "energy_oil_hist",
  //   地区油价
  "energy_oil_detail",

  // 彭博亿万富豪指数
  //  彭博亿万富豪指数
  "index_bloomberg_billionaires",
  //  彭博亿万富豪历史指数
  "index_bloomberg_billionaires_hist",

  // 交易日历
  //  新浪财经-交易日历
  "tool_trade_date_hist",

  // 基金行情
  //  基金列表
  "fund_etf_category_sina",
  //  基金行情
  "fund_etf_hist_sina",

  // 消费者信心指数
  //  消费者信心指数
  "macro_china_xfzxx",

  // 工业增加值增长
  //  工业增加值增长
  "macro_china_gyzjz",

  // 存款准备金率
  //  存款准备金率
  "macro_china_reserve_requirement_ratio",

  // 社会消费品零售总额
  //  社会消费品零售总额
  "macro_china_consumer_goods_retail",

  // 海关进出口增减情况
  //  海关进出口增减情况
  "macro_china_hgjck",

  // 全社会用电分类情况表
  //  全社会用电分类情况表
  "macro_china_society_electricity",

  // 全社会客货运输量
  //  全社会客货运输量
  "macro_china_society_traffic_volume",

  // 邮电业务基本情况
  //  邮电业务基本情况
  "macro_china_postal_telecommunicational",

  // 国际旅游外汇收入构成
  //  国际旅游外汇收入构成
  "macro_china_international_tourism_fx",

  // 民航客座率及载运率
  //  民航客座率及载运率
  "macro_china_passenger_load_factor",

  // 航贸运价指数
  //  航贸运价指数
  "macro_china_freight_index",

  // 央行货币当局资产负债
  //  央行货币当局资产负债
  "macro_china_central_bank_balance",

  // FR007利率互换曲线历史数据
  //  FR007利率互换曲线历史数据
  "macro_china_swap_rate",

  // 收盘收益率曲线历史数据
  //  收盘收益率曲线历史数据
  "bond_china_close_return",

  // 保险业经营情况
  //  保险业经营情况
  "macro_china_insurance",

  // 货币供应量
  //  货币供应量
  "macro_china_supply_of_money",

  // 央行黄金和外汇储备
  //  央行黄金和外汇储备
  "macro_china_foreign_exchange_gold",

  // 商品零售价格指数
  //  商品零售价格指数
  "macro_china_retail_price_index",

  // 新闻联播文字稿
  //  新闻联播文字稿
  "news_cctv",

  // 电影票房
  //  电影实时票房
  "movie_boxoffice_realtime",
  // 电影单日票房
  "movie_boxoffice_daily",
  // 电影单周票房
  "movie_boxoffice_weekly",
  // 电影单月票房
  "movie_boxoffice_monthly",
  //  电影年度票房
  "movie_boxoffice_yearly",
  // 电影年度首周票房
  "movie_boxoffice_yearly_first_week",
  //  电影院单日票房
  "movie_boxoffice_cinema_daily",
  //   电影院单周票房
  "movie_boxoffice_cinema_weekly",

  // 国房景气指数
  //  国房景气指数
  "macro_china_real_estate",

  // 加密货币历史数据
  //  加密货币历史数据
  "crypto_hist",
  // 加密货币货币名称
  "crypto_name_url_table",

  // 基金排行
  //  开放式基金排行
  "fund_open_fund_rank_em",
  //  场内交易基金排行
  "fund_em_exchange_rank",
  //  货币型基金排行
  "fund_em_money_rank",
  //  理财基金排行
  "fund_em_lcx_rank",
  // 香港基金排行
  "fund_em_hk_rank",

  // 回购定盘利率
  //  回购定盘利率
  "repo_rate_hist",

  // 福布斯中国榜单
  //  福布斯中国榜单
  "forbes_rank",

  // 新财富500富豪榜
  //  新财富500富豪榜
  "xincaifu_rank",

  // 胡润排行榜
  //  胡润排行榜
  "hurun_rank",

  // 东方财富-期权
  // 东方财富-期权
  "option_current_em",

  // 金十数据-新闻资讯
  // 金十数据-新闻资讯
  "js_news",

  // 国证指数
  // 国证指数-所有指数
  "index_all_cni",
  // 国证指数-指数行情
  "index_hist_cni",
  //  国证指数-样本详情
  "index_detail_cni",
  //  国证指数-历史样本
  "index_detail_hist_cni",
  //  国证指数-历史调样
  "index_detail_hist_adjust_cni",

  // 债券概览
  //  上登债券信息网-债券现券市场概览
  "bond_cash_summary_sse",
  //  上登债券信息网-债券成交概览
  "bond_deal_summary_sse",

  // 中国货币供应量
  //  中国货币供应量
  "macro_china_money_supply",

  // 基金评级
  // 基金评级-基金评级总汇
  "fund_rating_all",
  //  基金评级-上海证券评级
  "fund_rating_sh",
  // 基金评级-招商证券评级
  "fund_rating_zs",
  // 基金评级-济安金信评级
  "fund_rating_ja",

  // 基金经理
  // 基金经理-基金经理大全
  "fund_manager",

  // 中美国债收益率
  // 中美国债收益率
  "bond_zh_us_rate",

  // 比特比持仓
  //  比特比持仓
  "crypto_bitcoin_hold_report",

  // 新发基金
  //  新发基金
  "fund_new_found_em",

  // 柯桥指数
  //  柯桥纺织指数
  "index_kq_fz",
  //  柯桥时尚指数
  "index_kq_fashion",

  // Drewry 集装箱指数
  //  Drewry 集装箱指数
  "drewry_wci_index",

  // 浙江省排污权交易指数
  //  浙江省排污权交易指数
  "index_eri",

  // 中国公路物流运价指数
  // 中国公路物流运价指数
  "index_cflp_price",

  // 中国公路物流运量指数
  // 中国公路物流运量指数
  "index_cflp_volume",

  // 汽车销量
  //  盖世汽车-汽车行业制造企业数据库-销量数据
  "car_gasgoo_sale_rank",
  //  乘联会-新能源细分市场-整体市场
  "car_cpca_energy_sale",

  // 中国-香港-宏观经济指标
  //  中国-香港-消费者物价指数
  "macro_china_hk_cpi",
  //  中国-香港-消费者物价指数年率
  "macro_china_hk_cpi_ratio",
  // 中国-香港-失业率
  "macro_china_hk_rate_of_unemployment",
  //  中国-香港-香港 GDP
  "macro_china_hk_gbp",
  // 中国-香港-香港 GDP 同比
  "macro_china_hk_gbp_ratio",
  //  中国-香港-香港楼宇买卖合约数量
  "macro_china_hk_building_volume",
  // 中国-香港-香港楼宇买卖合约成交金额
  "macro_china_hk_building_amount",
  //  中国-香港-香港商品贸易差额年率
  "macro_china_hk_trade_diff_ratio",
  //  中国-香港-香港制造业 PPI 年率
  "macro_china_hk_ppi",

  // 中行人民币牌价历史数据查询
  //  中行人民币牌价历史数据查询
  "currency_boc_sina",

  // CME 比特币成交量
  //  CME 比特币成交量
  "crypto_bitcoin_cme",

  // 加密货币全球市场指数
  //  加密货币全球市场指数
  "crypto_crix",

  // 基金规模和规模趋势
  // 基金公司规模排名列表
  "fund_aum_em",
  //  基金市场管理规模走势图
  "fund_aum_trend_em",
  //  基金市场管理规模历史
  "fund_aum_hist_em",

  // 企业商品价格指数
  //  企业商品价格指数
  "macro_china_qyspjg",
  //  外商直接投资数据
  "macro_china_fdi",

  // 未决房屋销售月率
  // 未决房屋销售月率
  "macro_usa_phs",

  // 德国经济指标
  //   ifo商业景气指数
  "macro_germany_ifo",
  // 消费者物价指数月率终值
  "macro_germany_cpi_monthly",
  //   消费者物价指数年率终值
  "macro_germany_cpi_yearly",
  //  贸易帐(季调后)
  "macro_germany_trade_adjusted",
  //  GDP
  "macro_germany_gdp",
  //  实际零售销售月率
  "macro_germany_retail_sale_monthly",
  //  实际零售销售年率
  "macro_germany_retail_sale_yearly",
  //  ZEW经济景气指数
  "macro_germany_zew",

  // 瑞士-宏观
  //  瑞士-宏观-SVME采购经理人指数
  "macro_swiss_svme",
  //  瑞士-宏观-贸易帐
  "macro_swiss_trade",
  //  瑞士-宏观-消费者物价指数年率
  "macro_swiss_cpi_yearly",
  //  瑞士-宏观-GDP季率
  "macro_swiss_gdp_quarterly",
  //  瑞士-宏观-GDP年率
  "macro_swiss_gbd_yearly",
  //  瑞士-宏观-央行公布利率决议
  "macro_swiss_gbd_bank_rate",

  // 日本-宏观
  //  日本-央行公布利率决议
  "macro_japan_bank_rate",
  //  日本-全国消费者物价指数年率
  "macro_japan_cpi_yearly",
  // 日本-全国核心消费者物价指数年率
  "macro_japan_core_cpi_yearly",
  //  日本-失业率
  "macro_japan_unemployment_rate",
  //  日本-领先指标终值
  "macro_japan_head_indicator",

  // 英国-宏观
  //   英国-Halifax 房价指数月率
  "macro_uk_halifax_monthly",
  //  英国-Halifax 房价指数年率
  "macro_uk_halifax_yearly",
  //  英国-贸易帐
  "macro_uk_trade",
  //  英国-央行公布利率决议
  "macro_uk_bank_rate",
  // 英国-核心消费者物价指数年率
  "macro_uk_core_cpi_yearly",
  //  英国-核心消费者物价指数月率
  "macro_uk_core_cpi_monthly",
  //  英国-消费者物价指数年率
  "macro_uk_cpi_yearly",
  //  英国-消费者物价指数月率
  "macro_uk_cpi_monthly",
  //   英国-零售销售月率
  "macro_uk_retail_monthly",
  // 英国-零售销售年率
  "macro_uk_retail_yearly",
  //  英国-Rightmove 房价指数年率
  "macro_uk_rightmove_yearly",
  //  英国-Rightmove 房价指数月率
  "macro_uk_rightmove_monthly",
  // 英国-GDP 季率初值
  "macro_uk_gdp_quarterly",
  //  英国-GDP 年率初值
  "macro_uk_gdp_yearly",
  //  英国-失业率
  "macro_uk_unemployment_rate",

  // 宏观-澳大利亚
  // 央行公布利率决议
  "macro_australia_bank_rate",
  //  失业率
  "macro_australia_unemployment_rate",
  // 贸易帐
  "macro_australia_trade",
  //  消费者物价指数季率
  "macro_australia_cpi_quarterly",
  //  消费者物价指数年率
  "macro_australia_cpi_yearly",
  // 生产者物价指数季率
  "macro_australia_ppi_quarterly",
  // 零售销售月率
  "macro_australia_retail_rate_monthly",

  // 宏观-加拿大
  //  新屋开工
  "macro_canada_new_house_rate",
  //  失业率
  "macro_canada_unemployment_rate",
  //  贸易帐
  "macro_canada_trade",
  //  零售销售月率
  "macro_canada_retail_rate_monthly",
  //  央行公布利率决议
  "macro_canada_bank_rate",
  //  核心消费者物价指数年率
  "macro_canada_core_cpi_yearly",
  //  核心消费者物价指数月率
  "macro_canada_core_cpi_monthly",
  //  消费者物价指数年率
  "macro_canada_cpi_yearly",
  //  消费者物价指数月率
  "macro_canada_cpi_monthly",
  //  GDP 月率
  "macro_canada_gdp_monthly",

  // 奥运奖牌
  //  奥运奖牌
  "sport_olympic_hist",

  // REITs
  //  REITs-信息
  "reits_info_jsl",
  //  REITs-行情
  "reits_realtime_em",

  // 债券报表-债券发行-国债发行
  //  债券报表-债券发行-国债发行
  "bond_treasure_issue_cninfo",

  // 债券报表-债券发行-地方债发行
  //  债券报表-债券发行-地方债
  "bond_local_government_issue_cninfo",

  // 债券报表-债券发行-企业债发行
  //  债券报表-债券发行-企业债
  "bond_corporate_issue_cninfo",

  // 债券报表-债券发行-可转债发行
  //  债券报表-债券发行-可转债发行
  "bond_cov_issue_cninfo",

  // 债券报表-债券发行-可转债转股
  //  债券报表-债券发行-可转债转股
  "bond_cov_stock_issue_cninfo",

  // 基金报表-基金重仓股
  //  基金报表-基金重仓股
  "fund_report_stock_cninfo",

  // 公告大全-沪深 A 股公告
  //  公告大全-沪深 A 股公告
  "stock_notice_report",

  // 基金报表-基金行业配置
  //  基金报表-基金行业配置
  "fund_report_industry_allocation_cninfo",
  //  基金报表-基金资产配置
  "fund_report_asset_allocation_cninfo",

  // 基金规模
  //  基金规模-开放式基金
  "fund_scale_open_sina",
  // 基金规模-封闭式基金
  "fund_scale_close_sina",
  //  基金规模-分级子基金
  "fund_scale_structured_sina",

  // 指数估值
  //  指数估值
  "index_value_hist_funddb",

  // 可转债分时数据
  //  可转债分时数据
  "bond_zh_hs_cov_min",

  // 艺人
  //  艺人商业价值
  "business_value_artist",
  //  艺人流量价值
  "online_value_artist",

  // 视频
  //  电视剧集
  "video_tv",
  // 综艺节目
  "video_variety_show",

  // 电竞
  //  俱乐部排名
  "club_rank_game",
  //  选手排行榜
  "player_rank_game",

  // 基金数据-分红送配
  //  基金拆分
  "fund_cf_em",
  //  基金分红排行
  "fund_fh_rank_em",
  //  基金分红
  "fund_fh_em",

  // 基金数据-规模变动
  //  规模变动
  "fund_scale_change_em",
  // 持有人结构
  "fund_hold_structure_em",

  // 上海黄金交易所
  //  上海黄金交易所-历史行情走势
  "spot_hist_sge",
  // 上海金基准价
  "spot_golden_benchmark_sge",
  //   上海银基准价
  "spot_silver_benchmark_sge",

  // 中国食糖指数
  //  中国食糖指数
  "index_sugar_msweet",

  // 配额内进口糖估算指数
  //  配额内进口糖估算指数
  "index_inner_quote_sugar_msweet",

  // 配额外进口糖估算指数
  //  配额外进口糖估算指数
  "index_outer_quote_sugar_msweet",

  // 期权龙虎榜
  //  期权龙虎榜
  "option_lhb_em",
  //  期权价值分析
  "option_value_analysis_em",
  //  期权风险分析
  "option_risk_analysis_em",
  // 期权折溢价分析
  "option_premium_analysis_em",

  // 财新指数
  //  财新数据-指数报告-财新中国 PMI-综合 PMI
  "index_pmi_com_cx",
  //  财新数据-指数报告-财新中国 PMI-制造业 PMI
  "index_pmi_man_cx",
  //  财新数据-指数报告-财新中国 PMI-服务业 PMI
  "index_pmi_ser_cx",
  //  财新数据-指数报告-数字经济指数
  "index_dei_cx",
  //   财新数据-指数报告-产业指数
  "index_ii_cx",
  //  财新数据-指数报告-溢出指数
  "index_si_cx",
  // 财新数据-指数报告-融合指数
  "index_fi_cx",
  // 财新数据-指数报告-基础指数
  "index_bi_cx",
  //  财新数据-指数报告-中国新经济指数
  "index_nei_cx",
  //  财新数据-指数报告-劳动力投入指数
  "index_li_cx",
  //  财新数据-指数报告-资本投入指数
  "index_ci_cx",
  //  财新数据-指数报告-科技投入指数
  "index_ti_cx",
  //  财新数据-指数报告-新经济行业入职平均工资水平
  "index_neaw_cx",
  //  财新数据-指数报告-新经济入职工资溢价水平
  "index_awpr_cx",
  // 财新数据-指数报告-大宗商品指数
  "index_cci_cx",

  // 冬奥会
  //  冬奥会-历届奖牌榜
  "sport_olympic_winter_hist",

  // 指数历史数据
  //  中国股票指数历史数据
  "index_zh_a_hist",

  // 指数分时数据
  //  中国股票指数-指数分时数据
  "index_zh_a_hist_min_em",

  //投资组合-基金持仓
  //  天天基金网-基金档案-投资组合-基金持仓
  "fund_portfolio_hold_em",
  // 天天基金网-基金档案-投资组合-债券持仓
  "fund_portfolio_bond_hold_em",

  //投资组合-重大变动
  //  天天基金网-基金档案-投资组合-重大变动
  "fund_portfolio_change_em",
  //  天天基金网-基金档案-投资组合-行业配置
  "fund_portfolio_industry_allocation_em",

  //中国宏观
  //  原保险保费收入
  "macro_china_insurance_income",
  //  手机出货量
  "macro_china_mobile_number",
  // 菜篮子产品批发价格指数
  "macro_china_vegetable_basket",
  // 农产品批发价格总指数
  "macro_china_agricultural_product",
  // 农副指数
  "macro_china_agricultural_index",
  //  能源指数
  "macro_china_energy_index",
  //  大宗商品价格
  "macro_china_commodity_price_index",
  //  费城半导体指数
  "macro_global_sox_index",
  // 义乌小商品指数-电子元器件
  "macro_china_yw_electronic_index",
  //  建材指数
  "macro_china_construction_index",
  // 建材价格指数
  "macro_china_construction_price_index",
  //物流景气指数
  "macro_china_lpi_index",
  //原油运输指数
  "macro_china_bdti_index",
  // 超灵便型船运价指数
  "macro_china_bsi_index",

  //可转债溢价率分析和可转债价值分析
  //  可转债溢价率分析
  "bond_zh_cov_value_analysis",
  //  可转债价值分析
  "bond_zh_cov_value_analysis",

  //宏观-全球事件
  //  宏观-全球事件
  "news_economic_baidu",

  //停复牌
  //  停复牌
  "news_trade_notify_suspend_baidu",

  //财报发行
  //  财报发行
  "news_report_time_baidu",
];
export default apis;
