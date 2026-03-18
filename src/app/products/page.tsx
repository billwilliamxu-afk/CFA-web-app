'use client'

import React, { useState } from 'react'
import { Radio, Tag, Button } from 'antd'
import type { RadioChangeEvent } from 'antd'
import {
  AppstoreOutlined,
  RocketOutlined,
  BankOutlined,
  SafetyOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'

type ProductCategory = 'all' | 'equity' | 'debt' | 'abs' | 'subsidy'

interface Product {
  id: number
  name: string
  category: ProductCategory
  tags: Array<{ label: string; color: string }>
  stage: string
  amount: string
  advantages: string[]
  icon: React.ReactNode
  iconBg: string
}

const products: Product[] = [
  {
    id: 1,
    name: '天使轮股权融资',
    category: 'equity',
    tags: [
      { label: '无需抵押', color: 'green' },
      { label: '稀释股权', color: 'orange' },
    ],
    stage: '种子期',
    amount: '100-500 万',
    advantages: [
      '无需资产抵押，股权融资',
      '投资机构提供资源对接',
      '适合技术驱动型团队',
      '估值灵活，快速到账',
    ],
    icon: <RocketOutlined className="text-2xl" />,
    iconBg: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    name: '研发支持信用贷款',
    category: 'debt',
    tags: [
      { label: '额度高', color: 'blue' },
      { label: '利率低', color: 'green' },
    ],
    stage: '种子期 / 初创期',
    amount: '最高 500 万',
    advantages: [
      '纯信用贷款，无需抵押',
      '政府贴息后利率低至 2.5%',
      '审批周期短，快速放款',
      '适合科研背景团队',
    ],
    icon: <BankOutlined className="text-2xl" />,
    iconBg: 'bg-green-100 text-green-600',
  },
  {
    id: 3,
    name: '知识产权质押融资',
    category: 'debt',
    tags: [
      { label: '专利抵押', color: 'purple' },
      { label: '快速审批', color: 'blue' },
    ],
    stage: '初创期',
    amount: '50-300 万',
    advantages: [
      '专利、软著等知识产权可质押',
      '无需实物资产抵押',
      '评估周期 3-5 个工作日',
      '融资额度为专利评估价值 60%-80%',
    ],
    icon: <SafetyOutlined className="text-2xl" />,
    iconBg: 'bg-purple-100 text-purple-600',
  },
  {
    id: 4,
    name: '设备融资租赁',
    category: 'debt',
    tags: [
      { label: '轻资产', color: 'cyan' },
      { label: '税收优惠', color: 'gold' },
    ],
    stage: '成长期',
    amount: '100-5000 万',
    advantages: [
      '无需一次性支付大额资金',
      '设备立即投入使用创造收入',
      '租金可作为费用抵扣',
      '租期结束可选择购买或退还',
    ],
    icon: <DollarOutlined className="text-2xl" />,
    iconBg: 'bg-cyan-100 text-cyan-600',
  },
  {
    id: 5,
    name: '发射订单 ABS',
    category: 'abs',
    tags: [
      { label: '规模大', color: 'red' },
      { label: '利率低', color: 'green' },
    ],
    stage: '成长期 / 成熟期',
    amount: '5-20 亿',
    advantages: [
      '基于已签署发射合同收益权',
      '发行规模大，利率相对较低',
      '盘活存量资产，优化资产负债表',
      '适合有稳定订单的企业',
    ],
    icon: <RocketOutlined className="text-2xl" />,
    iconBg: 'bg-orange-100 text-orange-600',
  },
  {
    id: 6,
    name: '绿色航天债券',
    category: 'debt',
    tags: [
      { label: 'ESG 认证', color: 'green' },
      { label: '期限长', color: 'blue' },
    ],
    stage: '成熟期',
    amount: '10-50 亿',
    advantages: [
      '符合国家绿色发展战略',
      '票面利率相比普通债券低 0.8-1.2%',
      '获得国际 ESG 投资者青睐',
      '融资期限可达 3-10 年',
    ],
    icon: <SafetyOutlined className="text-2xl" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 7,
    name: '政府研发补贴',
    category: 'subsidy',
    tags: [
      { label: '无需偿还', color: 'red' },
      { label: '零成本', color: 'gold' },
    ],
    stage: '种子期 / 初创期',
    amount: '50-200 万',
    advantages: [
      '无需偿还，零成本资金',
      '无需股权稀释',
      '我们提供一键打包申报服务',
      '审批周期 15-30 天',
    ],
    icon: <DollarOutlined className="text-2xl" />,
    iconBg: 'bg-red-100 text-red-600',
  },
  {
    id: 8,
    name: '跨境并购融资',
    category: 'debt',
    tags: [
      { label: '境内外联动', color: 'purple' },
      { label: '顶级投行', color: 'blue' },
    ],
    stage: '成熟期',
    amount: '5000 万 - 5 亿美元',
    advantages: [
      '境外 SPV 设立 + 银团贷款撮合',
      '顶级投行团队提供全流程服务',
      '快速获取境外核心技术和市场',
      '境内外资金闭环设计',
    ],
    icon: <BankOutlined className="text-2xl" />,
    iconBg: 'bg-indigo-100 text-indigo-600',
  },
  {
    id: 9,
    name: '研发中断保险',
    category: 'subsidy',
    tags: [
      { label: '风险对冲', color: 'purple' },
      { label: '保费低', color: 'green' },
    ],
    stage: '种子期 / 初创期',
    amount: '赔付最高 80%',
    advantages: [
      '对冲研发失败、人才流失等风险',
      '保费仅为融资金额的 1.5%',
      '合作机构：人保财险、太平洋保险',
      '保障企业持续运营能力',
    ],
    icon: <SafetyOutlined className="text-2xl" />,
    iconBg: 'bg-pink-100 text-pink-600',
  },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory>('all')

  const handleCategoryChange = (e: RadioChangeEvent) => {
    setSelectedCategory(e.target.value)
  }

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory)

  const handleViewDetail = (productName: string) => {
    console.log('查看产品详情:', productName)
  }

  return (
    <div className="space-y-6">
      {/* 顶部 Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur border border-white/20">
            <AppstoreOutlined className="text-white text-2xl" />
          </div>
          <h1 className="text-3xl font-bold">全周期融资产品库</h1>
        </div>
        <p className="text-blue-100 text-base leading-relaxed max-w-3xl">
          覆盖商业航天企业从种子期到成熟期的全生命周期融资需求，
          提供股权融资、债权融资、资产证券化、政策补贴等多元化融资工具。
        </p>
        <div className="mt-6 flex gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
            <div className="text-xs text-blue-200 mb-1">产品总数</div>
            <div className="text-2xl font-bold">{products.length}</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
            <div className="text-xs text-blue-200 mb-1">覆盖阶段</div>
            <div className="text-2xl font-bold">4 个</div>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2 border border-white/20">
            <div className="text-xs text-blue-200 mb-1">合作机构</div>
            <div className="text-2xl font-bold">50+</div>
          </div>
        </div>
      </div>

      {/* 分类导航 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">产品分类</h2>
            <p className="text-sm text-gray-600">
              筛选适合您企业当前阶段的融资产品
            </p>
          </div>
          <Radio.Group
            value={selectedCategory}
            onChange={handleCategoryChange}
            buttonStyle="solid"
            size="large"
          >
            <Radio.Button value="all">
              全部 ({products.length})
            </Radio.Button>
            <Radio.Button value="equity">
              股权融资 ({products.filter((p) => p.category === 'equity').length}
              )
            </Radio.Button>
            <Radio.Button value="debt">
              债权融资 ({products.filter((p) => p.category === 'debt').length})
            </Radio.Button>
            <Radio.Button value="abs">
              资产证券化 ({products.filter((p) => p.category === 'abs').length}
              )
            </Radio.Button>
            <Radio.Button value="subsidy">
              政策补贴 (
              {products.filter((p) => p.category === 'subsidy').length})
            </Radio.Button>
          </Radio.Group>
        </div>
      </div>

      {/* 产品瀑布流 */}
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1"
          >
            {/* 卡片头部 */}
            <div className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${product.iconBg} rounded-lg flex items-center justify-center`}
                >
                  {product.icon}
                </div>
                <div className="flex gap-2">
                  {product.tags.map((tag, index) => (
                    <Tag key={index} color={tag.color} className="m-0">
                      {tag.label}
                    </Tag>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>

              <div className="flex items-center gap-4 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">适用阶段：</span>
                  <span className="font-medium text-blue-600">
                    {product.stage}
                  </span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-600 mb-1">融资额度</div>
                <div className="text-lg font-bold text-blue-600">
                  {product.amount}
                </div>
              </div>

              {/* 核心优势 */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-2">
                  核心优势
                </div>
                <ul className="space-y-2">
                  {product.advantages.map((advantage, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs text-gray-700"
                    >
                      <CheckCircleOutlined className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 卡片底部 */}
            <div className="px-6 pb-6">
              <Button
                type="primary"
                size="large"
                block
                icon={<ArrowRightOutlined />}
                onClick={() => handleViewDetail(product.name)}
                className="group-hover:shadow-md transition-shadow"
              >
                查看详情
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* 空状态 */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <div className="text-gray-400 text-lg mb-2">暂无相关产品</div>
          <p className="text-sm text-gray-500">
            请尝试切换其他分类或查看全部产品
          </p>
        </div>
      )}
    </div>
  )
}
