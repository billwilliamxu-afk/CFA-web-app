'use client'

import React from 'react'
import { Button, Tag, message } from 'antd'
import {
  GlobalOutlined,
  SafetyOutlined,
  RiseOutlined,
  BankOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  EnvironmentOutlined,
  DollarOutlined,
} from '@ant-design/icons'

const absAssetTypes = [
  { name: '卫星星座收益权', icon: '🛰️', growth: '+35%' },
  { name: '发射设施收益权', icon: '🚀', growth: '+28%' },
  { name: '测控网络收益权', icon: '📡', growth: '+22%' },
]

const bondProducts = [
  {
    name: '绿色航天债券',
    term: '3年期',
    rate: '2.8%',
    color: 'green',
    features: ['ESG认证', '政策优先', '税收优惠'],
  },
  {
    name: '碳中和挂钩债券',
    term: '5年期',
    rate: '3.2%',
    color: 'blue',
    features: ['碳减排激励', '浮动利率', '国际认可'],
  },
]

const acquisitionTargets = [
  { name: '境外火箭发动机公司', location: '美国 / 欧洲', value: '2-5亿美元' },
  { name: '海外地面站网络', location: '澳大利亚 / 南美', value: '1-3亿美元' },
  { name: '卫星通信频段资源', location: '东南亚 / 非洲', value: '0.5-2亿美元' },
]

export default function MaturePage() {
  const handleABSIssue = () => {
    message.success('正在为您启动新一期ABS发行流程，预计审批周期 60-90 天')
    console.log('发起新一期 ABS 发行')
  }

  const handleBondApplication = () => {
    message.success('正在跳转至绿色航天债券发行申请页面...')
    console.log('债券发行申请')
  }

  const handleBondSubscription = () => {
    message.info('正在为您匹配认购机构：主权财富基金、养老金、保险资金...')
    console.log('认购意向')
  }

  const handleAcquisitionConsultation = () => {
    message.success('已提交跨境并购咨询申请，投行团队将在 48 小时内与您联系')
    console.log('发起并购咨询')
  }

  return (
    <div className="space-y-6">
      {/* 顶部专属 Banner (引导区) */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 rounded-xl p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur border border-white/20">
                <GlobalOutlined className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl font-bold">
                整合全球资源，提升企业价值
              </h1>
            </div>
            <p className="text-slate-300 text-base leading-relaxed max-w-3xl mb-2">
              成熟期资本运作与跨境扩张专属通道
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
              为已进入规模化发展阶段的航天企业提供资产证券化、债券融资、跨境并购等高级资本工具，
              助力企业打通境内外资本市场，实现价值最大化。
            </p>
          </div>
          <div className="flex-shrink-0 ml-6">
            <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4 border border-white/20">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-xs text-slate-300 mb-1">ABS 发行额度</div>
                  <div className="text-2xl font-bold">10 亿+</div>
                </div>
                <div>
                  <div className="text-xs text-slate-300 mb-1">债券利率</div>
                  <div className="text-2xl font-bold">2.8%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-300 mb-1">并购标的</div>
                  <div className="text-2xl font-bold">8 家</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 卡片 A：持续发行 ABS (资产证券化) */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-6">
          <RiseOutlined className="text-blue-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-900">
            持续发行 ABS (资产证券化)
          </h2>
          <Tag color="gold" className="ml-2">
            循环发行通道
          </Tag>
        </div>

        <div className="flex gap-8">
          {/* 左侧：存量资产管理 */}
          <div className="flex-1">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                存量资产管理与循环发行通道
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                已完成首期ABS发行的企业，可基于存量资产的持续运营收益，
                启动新一期资产证券化发行，盘活沉淀资金，优化资产负债表。
              </p>

              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <div className="text-sm font-medium text-gray-900 mb-3">
                  循环发行优势
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleOutlined className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>审批周期缩短 50%（已有评级记录）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleOutlined className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>发行成本降低 30%（复用法律文件）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleOutlined className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>投资人基础稳固（老投资者优先认购）</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircleOutlined className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>信用评级可能提升（运营数据积累）</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="text-sm font-medium text-blue-900 mb-2">
                  💡 历史发行回顾
                </div>
                <div className="text-xs text-blue-800 space-y-1">
                  <div>• 首期ABS：规模 5 亿元，票面利率 4.2%（2024年8月）</div>
                  <div>• 二期ABS：规模 8 亿元，票面利率 3.8%（2025年6月）</div>
                  <div className="text-blue-900 font-medium mt-2">
                    ➜ 建议本期发行规模：10 亿元，预期利率：3.5%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：可新增基础资产 */}
          <div className="w-96 flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                可新增的基础资产类型
              </h3>
              <div className="space-y-4">
                {absAssetTypes.map((asset, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-blue-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{asset.icon}</span>
                        <span className="text-base font-semibold text-gray-900">
                          {asset.name}
                        </span>
                      </div>
                      <Tag color="green">{asset.growth}</Tag>
                    </div>
                    <div className="text-xs text-gray-600">
                      近12个月收益增长率
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white/80 rounded-lg p-4 backdrop-blur">
                <div className="text-xs text-gray-600 mb-2">预估发行规模</div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  10-15 亿元
                </div>
                <div className="text-xs text-gray-500">
                  基于当前资产评估值与市场认购意愿
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button
            type="primary"
            size="large"
            icon={<RocketOutlined />}
            onClick={handleABSIssue}
            className="h-12 px-8 text-base font-medium"
          >
            发起新一期 ABS 发行
          </Button>
          <span className="ml-4 text-sm text-gray-500">
            预计审批周期：60-90 天 | 承销商：中金公司、中信证券
          </span>
        </div>
      </div>

      {/* 卡片 B：绿色航天债券 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-6">
          <SafetyOutlined className="text-green-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-900">绿色航天债券</h2>
          <Tag color="green">ESG 认证</Tag>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          商业航天作为战略新兴产业，符合国家绿色发展战略。通过发行绿色债券或碳中和挂钩债券，
          可获得更低的融资成本、更长的资金期限，以及ESG投资者的青睐。
        </p>

        {/* 债券产品对比 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {bondProducts.map((bond, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                bond.color === 'green'
                  ? 'from-green-50 to-emerald-50'
                  : 'from-blue-50 to-cyan-50'
              } rounded-xl p-6 border ${
                bond.color === 'green' ? 'border-green-200' : 'border-blue-200'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{bond.name}</h3>
                <Tag color={bond.color} className="text-sm">
                  {bond.term}
                </Tag>
              </div>

              <div className="mb-4">
                <div className="text-xs text-gray-600 mb-1">票面利率</div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {bond.rate}
                </div>
                <div className="text-xs text-gray-500">
                  相比普通债券低 0.8-1.2%
                </div>
              </div>

              <div className="space-y-2">
                {bond.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        bond.color === 'green' ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                    ></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 参考案例 */}
        <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border border-green-200 rounded-lg p-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-600 text-xl">📋</span>
            </div>
            <div className="flex-1">
              <div className="text-base font-bold text-green-900 mb-2">
                参考案例：海南首单航天主题债券
              </div>
              <div className="text-sm text-green-800 leading-relaxed">
                某商业卫星运营公司于 2025年7月 在海南自贸港发行
                <span className="font-bold"> 10年期绿色航天债券</span>，
                规模 <span className="font-bold">15 亿元</span>，
                票面利率 <span className="font-bold">3.0%</span>。
                募集资金专项用于低轨通信卫星星座建设，获得国际气候债券倡议组织(CBI)绿色认证。
                债券超额认购 <span className="font-bold">3.2 倍</span>，
                认购方包括主权财富基金、养老金和ESG投资机构。
              </div>
              <div className="mt-3 flex gap-3">
                <Tag color="green">CBI 绿色认证</Tag>
                <Tag color="blue">AAA 评级</Tag>
                <Tag color="purple">机构投资者占比 85%</Tag>
              </div>
            </div>
          </div>
        </div>

        {/* 底部按钮组 */}
        <div className="flex gap-4">
          <Button
            type="primary"
            size="large"
            icon={<BankOutlined />}
            onClick={handleBondApplication}
            className="h-12 px-8 text-base font-medium bg-green-600 hover:bg-green-700"
          >
            发行申请
          </Button>
          <Button
            size="large"
            icon={<DollarOutlined />}
            onClick={handleBondSubscription}
            className="h-12 px-8 text-base font-medium border-green-600 text-green-600 hover:bg-green-50"
          >
            认购意向
          </Button>
          <span className="ml-4 text-sm text-gray-500 flex items-center">
            主承销商：工商银行、建设银行 | 担保：中债增
          </span>
        </div>
      </div>

      {/* 卡片 C：跨境并购融资 */}
      <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-6">
          <GlobalOutlined className="text-purple-600 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-900">跨境并购融资</h2>
          <Tag color="purple">境内外联动</Tag>
        </div>

        <p className="text-sm text-gray-600 mb-6">
          为商业航天企业提供跨境并购财务顾问、境外SPV设立、银团贷款撮合、境外发债等全流程服务，
          助力企业通过并购快速获取境外核心技术、频段资源和市场渠道。
        </p>

        {/* 并购流程图 */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-6 border border-purple-200">
          <div className="text-base font-semibold text-gray-900 mb-4">
            跨境并购融资流程
          </div>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-purple-300">
                <span className="text-purple-600 text-2xl">🏢</span>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                设立境外 SPV
              </div>
              <div className="text-xs text-gray-600">
                新加坡 / 开曼群岛
              </div>
            </div>

            <ArrowRightOutlined className="text-purple-400 text-2xl mx-4" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-blue-300">
                <span className="text-blue-600 text-2xl">🏦</span>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                银团贷款撮合
              </div>
              <div className="text-xs text-gray-600">
                境内外联合融资
              </div>
            </div>

            <ArrowRightOutlined className="text-purple-400 text-2xl mx-4" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-green-300">
                <span className="text-green-600 text-2xl">📈</span>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                境外发债
              </div>
              <div className="text-xs text-gray-600">
                香港 / 新加坡市场
              </div>
            </div>

            <ArrowRightOutlined className="text-purple-400 text-2xl mx-4" />

            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 border-2 border-orange-300">
                <span className="text-orange-600 text-2xl">✅</span>
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                收购完成
              </div>
              <div className="text-xs text-gray-600">
                资产交割 & 整合
              </div>
            </div>
          </div>
        </div>

        {/* 两列布局：标的推荐 + 资金闭环 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 左列：标的推荐 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              优质并购标的推荐
            </h3>
            <div className="space-y-3">
              {acquisitionTargets.map((target, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-lg p-4 border border-gray-200 hover:border-purple-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <EnvironmentOutlined className="text-purple-600" />
                      <span className="text-base font-semibold text-gray-900">
                        {target.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      地理位置：{target.location}
                    </span>
                    <span className="text-purple-600 font-medium">
                      {target.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-xs font-medium text-purple-900 mb-1">
                💡 战略价值
              </div>
              <div className="text-xs text-purple-800">
                通过收购境外成熟技术公司和基础设施资源，可快速补齐技术短板、
                获取国际频段资源、拓展全球市场网络。
              </div>
            </div>
          </div>

          {/* 右列：资金闭环示意 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              资金闭环示意
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-200">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      境外 SPV 获得银团贷款
                    </div>
                    <div className="text-xs text-gray-600">
                      境内母公司提供担保，境外银行团（汇丰、渣打）提供并购贷款
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      海外资产收益还贷款
                    </div>
                    <div className="text-xs text-gray-600">
                      收购标的的运营收益（发射服务、卫星运营）用于偿还境外贷款
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">
                      境内主业支撑境外
                    </div>
                    <div className="text-xs text-gray-600">
                      境内业务现金流作为担保支撑，境外资产协同境内业务增长
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="text-xs text-blue-900 font-medium mb-2">
                  预期财务表现
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-600 mb-1">并购后ROE</div>
                    <div className="text-lg font-bold text-blue-600">18-22%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600 mb-1">协同效应</div>
                    <div className="text-lg font-bold text-green-600">+30%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="pt-6 border-t border-gray-200">
          <Button
            type="primary"
            size="large"
            icon={<GlobalOutlined />}
            onClick={handleAcquisitionConsultation}
            className="h-12 px-8 text-base font-medium bg-purple-600 hover:bg-purple-700"
          >
            发起并购咨询
          </Button>
          <span className="ml-4 text-sm text-gray-500">
            顾问团队：中金公司、高盛、摩根士丹利 | 法律顾问：君合律所
          </span>
        </div>
      </div>

      {/* 底部合规提示 */}
      <div className="bg-slate-100 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-slate-600 text-xl">⚖️</span>
          </div>
          <div className="flex-1">
            <div className="text-base font-semibold text-gray-900 mb-2">
              合规与风控提示
            </div>
            <div className="text-sm text-gray-700 space-y-1">
              <p>
                • 跨境并购需通过国家发改委和商务部审批，涉及敏感技术需经国防科工局核准
              </p>
              <p>
                • 境外融资需符合外汇管理局跨境融资宏观审慎管理要求
              </p>
              <p>
                • 建议提前进行国家安全审查预判，聘请专业法律和财务顾问
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
