'use client'

import React from 'react'
import { Button, Tag, message } from 'antd'
import {
  RocketOutlined,
  SafetyOutlined,
  DollarOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  ThunderboltOutlined,
  BankOutlined,
} from '@ant-design/icons'

const subsidyPrograms = [
  {
    name: '国家商业航天关键技术攻关专项',
    amount: '最高 200 万',
    deadline: '2026.05.30',
    tag: '重点推荐',
    tagColor: 'red',
  },
  {
    name: '地方航天产业孵化专项资金',
    amount: '最高 100 万',
    deadline: '2026.06.15',
    tag: '快速审批',
    tagColor: 'green',
  },
]

const loanConditions = [
  '依托高校或科研院所背景',
  '拥有核心技术专利或发明',
  '团队中至少 1 名博士或教授',
  '已完成技术概念验证 (POC)',
]

const insuranceFeatures = [
  { label: '研发失败赔付', value: '最高 80%' },
  { label: '关键人才流失补偿', value: '最高 50 万' },
  { label: '知识产权纠纷费用', value: '最高 30 万' },
]

export default function SeedPage() {
  const handleBatchApply = () => {
    message.success('正在为您打包申报政府补贴，预计审批周期 15-30 天')
    console.log('一键打包申报补贴')
  }

  const handleSubmitBP = () => {
    message.info('正在打开商业计划书提交页面...')
    console.log('提交商业计划书')
  }

  const handleCalculateLoan = () => {
    message.success('正在为您测算研发信用贷款额度，请稍候...')
    console.log('测算贷款额度')
    // 模拟跳转到测算页面
    setTimeout(() => {
      message.info('根据您的团队背景和技术成熟度，预估可获得额度：300-500 万元')
    }, 2000)
  }

  const handleInsuranceApply = () => {
    message.success('正在跳转至研发中断保险投保页面...')
    console.log('一键投保')
  }

  return (
    <div className="space-y-6">
      {/* 顶部专属 Banner (引导区) */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-8 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur">
                <RocketOutlined className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl font-bold">
                技术创新从 0 到 1，我们为您护航
              </h1>
            </div>
            <p className="text-blue-100 text-base leading-relaxed max-w-3xl">
              种子期是航天企业技术孵化的关键阶段。我们整合政府补贴、天使投资、研发信用贷款和风险保险，
              为您的核心技术研发提供全方位资金保障，让您专注于突破性创新。
            </p>
          </div>
          <div className="flex-shrink-0 ml-6">
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-4 text-center border border-white/30">
              <div className="text-sm text-blue-100 mb-1">当前可申请补贴数量</div>
              <div className="text-4xl font-bold">3 项</div>
              <div className="text-xs text-blue-200 mt-1">总计最高 300 万</div>
            </div>
          </div>
        </div>
      </div>

      {/* 核心产品卡片列表 (网格布局) */}
      <div className="grid grid-cols-2 gap-6">
        {/* 卡片 A：政府研发补贴 + 天使投资 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <SafetyOutlined className="text-blue-600 text-2xl" />
            <h2 className="text-xl font-bold text-gray-900">
              政府研发补贴 + 天使投资
            </h2>
            <Tag color="gold" className="ml-2">
              零成本资金
            </Tag>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            无需股权稀释，直接获得政府财政支持。我们帮您一键打包申报，大幅缩短审批流程。
          </p>

          {/* 补贴项目列表 */}
          <div className="space-y-4 mb-6">
            {subsidyPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-base font-semibold text-gray-900">
                        {program.name}
                      </h3>
                      <Tag color={program.tagColor} className="text-xs">
                        {program.tag}
                      </Tag>
                    </div>
                    <div className="text-sm text-gray-600">
                      补贴金额：
                      <span className="font-bold text-blue-600 ml-1">
                        {program.amount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>申报截止日期：{program.deadline}</span>
                  <span className="text-orange-600">剩余 45 天</span>
                </div>
              </div>
            ))}
          </div>

          {/* 天使投资配套 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="text-sm font-medium text-blue-900 mb-2">
              💡 配套天使投资通道
            </div>
            <div className="text-xs text-blue-800">
              补贴通过后，可同步申请天使投资（100-500 万），投资机构：达晨创投、中科创星、顺为资本
            </div>
          </div>

          {/* 按钮组 */}
          <div className="flex gap-3">
            <Button
              type="primary"
              size="large"
              icon={<ThunderboltOutlined />}
              onClick={handleBatchApply}
              className="flex-1 h-12 text-base font-medium"
            >
              一键打包申报
            </Button>
            <Button
              size="large"
              icon={<FileProtectOutlined />}
              onClick={handleSubmitBP}
              className="flex-1 h-12 text-base font-medium border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              提交商业计划书 (BP)
            </Button>
          </div>
        </div>

        {/* 卡片 B：研发支持信用贷款 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 mb-4">
            <BankOutlined className="text-green-600 text-2xl" />
            <h2 className="text-xl font-bold text-gray-900">
              研发支持信用贷款
            </h2>
            <Tag color="green">低利率</Tag>
          </div>

          <p className="text-sm text-gray-600 mb-6">
            专为科研背景团队设计的纯信用贷款，无需抵押物，政府贴息后利率低至 2.5%。
          </p>

          {/* 核心数据展示 */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
              <div className="text-xs text-gray-600 mb-1">最高额度</div>
              <div className="text-3xl font-bold text-green-600">500 万</div>
              <div className="text-xs text-gray-500 mt-1">纯信用，无抵押</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
              <div className="text-xs text-gray-600 mb-1">贴息后利率</div>
              <div className="text-3xl font-bold text-blue-600">2.5%</div>
              <div className="text-xs text-gray-500 mt-1">政府补贴 2% 利息</div>
            </div>
          </div>

          {/* 申请条件 */}
          <div className="mb-6">
            <div className="text-sm font-medium text-gray-900 mb-3">
              申请条件（满足任一即可）
            </div>
            <ul className="space-y-2">
              {loanConditions.map((condition, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircleOutlined className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 合作银行 */}
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="text-xs text-gray-600 mb-2">合作银行</div>
            <div className="flex gap-2">
              <Tag>国家开发银行</Tag>
              <Tag>中国银行</Tag>
              <Tag>浦发银行</Tag>
            </div>
          </div>

          {/* 按钮 */}
          <Button
            type="primary"
            size="large"
            block
            icon={<DollarOutlined />}
            onClick={handleCalculateLoan}
            className="h-12 text-base font-medium bg-green-600 hover:bg-green-700"
          >
            立即测算额度
          </Button>
        </div>

        {/* 卡片 C：研发中断保险 */}
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow col-span-2">
          <div className="flex items-start justify-between">
            {/* 左侧内容 */}
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-2 mb-4">
                <FileProtectOutlined className="text-purple-600 text-2xl" />
                <h2 className="text-xl font-bold text-gray-900">
                  研发中断保险
                </h2>
                <Tag color="purple">风险对冲</Tag>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                商业航天技术研发存在不确定性。购买研发中断保险，可对冲关键技术攻关失败、核心人才流失、知识产权纠纷等风险，
                保障企业持续运营能力。
              </p>

              {/* 保障范围 */}
              <div className="mb-6">
                <div className="text-sm font-medium text-gray-900 mb-3">
                  保障范围与赔付额度
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {insuranceFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-gray-600 mb-1">
                        {feature.label}
                      </div>
                      <div className="text-lg font-bold text-purple-600">
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 保费说明 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-lg">💰</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-900 mb-1">
                      保费标准
                    </div>
                    <div className="text-xs text-blue-800">
                      保费为融资金额的 <span className="font-bold">1.5%</span>（例如融资
                      200 万，保费仅 3 万元）。保险期限 1-3 年可选，保费可分期支付。
                    </div>
                  </div>
                </div>
              </div>

              {/* 合作机构 */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  合作保险机构：
                  <span className="text-gray-900 font-medium ml-2">
                    中国人保财险 (PICC)、太平洋保险、平安保险
                  </span>
                </div>
              </div>
            </div>

            {/* 右侧按钮与案例 */}
            <div className="w-80 flex-shrink-0">
              <Button
                type="primary"
                size="large"
                block
                icon={<SafetyOutlined />}
                onClick={handleInsuranceApply}
                className="h-12 text-base font-medium bg-purple-600 hover:bg-purple-700 mb-4"
              >
                一键投保
              </Button>

              {/* 真实案例 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
                <div className="text-sm font-medium text-purple-900 mb-2">
                  💡 真实案例
                </div>
                <div className="text-xs text-purple-800 leading-relaxed">
                  某卫星姿控技术团队在攻关过程中遇到核心算法瓶颈，研发中断 6 个月。
                  因购买了研发中断保险，获赔 <span className="font-bold">120 万元</span>，
                  用于重组技术团队和调整研发路线，最终成功突破技术难关。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部流程说明 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          种子期融资申请流程
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 text-xl font-bold">1</span>
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              提交申请材料
            </div>
            <div className="text-xs text-gray-500">
              BP、专利证明、团队背景
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl font-bold">2</span>
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              技术尽职调查
            </div>
            <div className="text-xs text-gray-500">
              专家评审、POC 验证
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 text-xl font-bold">3</span>
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              额度审批
            </div>
            <div className="text-xs text-gray-500">
              15-30 个工作日
            </div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 text-xl font-bold">4</span>
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              资金到账
            </div>
            <div className="text-xs text-gray-500">
              签约后 3-5 个工作日
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
