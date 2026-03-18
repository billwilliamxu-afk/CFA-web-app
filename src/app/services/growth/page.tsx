'use client'

import React, { useState, useMemo } from 'react'
import { InputNumber, Radio, Button, Divider, message } from 'antd'
import type { RadioChangeEvent } from 'antd'
import {
  CalculatorOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import { formatCurrency, formatNumber } from '@/lib/utils'

const leaseTermOptions = [
  { label: '3年', value: 3 },
  { label: '5年', value: 5 },
  { label: '8年', value: 8 },
]

export default function GrowthPage() {
  const [equipmentPrice, setEquipmentPrice] = useState<number>(100) // 默认100万元
  const [leaseTerm, setLeaseTerm] = useState<number>(5) // 默认5年

  // 计算月租金：(设备总价 * 10000) / (期限 * 12) * 1.035
  const monthlyPayment = useMemo(() => {
    if (!equipmentPrice || equipmentPrice <= 0) {
      return 0
    }
    const totalPrice = equipmentPrice * 10000 // 转换为元
    const months = leaseTerm * 12
    const payment = (totalPrice / months) * 1.035 // 1.035 模拟利息
    return Math.round(payment)
  }, [equipmentPrice, leaseTerm])

  // 计算总利息
  const totalInterest = useMemo(() => {
    const totalPayment = monthlyPayment * leaseTerm * 12
    const principal = equipmentPrice * 10000
    return totalPayment - principal
  }, [monthlyPayment, equipmentPrice, leaseTerm])

  const handleLeaseTermChange = (e: RadioChangeEvent) => {
    setLeaseTerm(e.target.value)
  }

  const handleSubmitApplication = () => {
    if (!equipmentPrice || equipmentPrice <= 0) {
      message.warning('请输入有效的设备总价')
      return
    }
    message.success(
      `租赁申请已提交！设备总价 ${equipmentPrice} 万元，租赁期限 ${leaseTerm} 年，月供 ${formatCurrency(monthlyPayment)}`
    )
    console.log('租赁申请信息:', {
      equipmentPrice,
      leaseTerm,
      monthlyPayment,
      totalInterest,
    })
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
            <RocketOutlined className="text-green-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">成长期融资服务</h1>
            <p className="text-sm text-gray-600 mt-1">
              设备融资租赁，助力企业快速扩大产能，轻资产运营
            </p>
          </div>
        </div>
      </div>

      {/* 模块 B：设备融资租赁计算器 */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex">
          {/* 左侧：表单输入区 (40% 宽度) */}
          <div className="w-2/5 p-8 border-r border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <CalculatorOutlined className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">
                设备融资租赁计算器
              </h2>
            </div>

            <div className="space-y-6">
              {/* 设备总价输入 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  设备总价 (万元)
                </label>
                <InputNumber
                  size="large"
                  value={equipmentPrice}
                  onChange={(value) => setEquipmentPrice(value || 0)}
                  min={1}
                  max={100000}
                  step={10}
                  precision={0}
                  className="w-full"
                  placeholder="请输入设备总价"
                  addonBefore="¥"
                  addonAfter="万元"
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                  parser={(value) => Number(value!.replace(/\$\s?|(,*)/g, ''))}
                />
                <div className="text-xs text-gray-500 mt-2">
                  支持范围：1 - 100,000 万元
                </div>
              </div>

              {/* 租赁期限选择 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  租赁期限
                </label>
                <Radio.Group
                  value={leaseTerm}
                  onChange={handleLeaseTermChange}
                  optionType="button"
                  buttonStyle="solid"
                  size="large"
                  className="w-full"
                >
                  {leaseTermOptions.map((option) => (
                    <Radio.Button
                      key={option.value}
                      value={option.value}
                      className="flex-1 text-center"
                    >
                      {option.label}
                    </Radio.Button>
                  ))}
                </Radio.Group>
                <div className="text-xs text-gray-500 mt-2">
                  租期越长，月供越低，总利息越高
                </div>
              </div>

              <Divider className="my-6" />

              {/* 详细说明 */}
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-900 mb-3">
                  融资租赁优势
                </div>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircleOutlined className="text-green-600 mt-0.5" />
                    <span>无需一次性支付大额资金，缓解资金压力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleOutlined className="text-green-600 mt-0.5" />
                    <span>设备立即投入使用，快速创造收入</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleOutlined className="text-green-600 mt-0.5" />
                    <span>租金可作为费用抵扣，优化税务结构</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleOutlined className="text-green-600 mt-0.5" />
                    <span>租期结束可选择续租、退还或购买设备</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 右侧：结果与可视化区 (60% 宽度) */}
          <div className="w-3/5 bg-blue-50/50 p-8">
            <div className="space-y-6">
              {/* 月供预估 */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm text-gray-600 mb-2">月供预估</div>
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-2xl text-gray-600 font-normal ml-2">
                    / 月
                  </span>
                </div>
                <div className="text-xs text-gray-500">
                  租赁期限 {leaseTerm} 年（{leaseTerm * 12} 期），总支付{' '}
                  {formatCurrency(monthlyPayment * leaseTerm * 12)}
                </div>
              </div>

              {/* 总利息展示 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">设备本金</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatCurrency(equipmentPrice * 10000)}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">总利息费用</div>
                  <div className="text-2xl font-bold text-orange-600">
                    {formatCurrency(totalInterest)}
                  </div>
                </div>
              </div>

              {/* 资金闭环示意图 */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-sm font-medium text-gray-900 mb-4">
                  资金闭环路径
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 text-xl">🔧</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      设备创造收入
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      投入生产运营
                    </div>
                  </div>

                  <ArrowRightOutlined className="text-blue-600 text-xl mx-2" />

                  <div className="flex-1 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 text-xl">💰</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      收入覆盖租金
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      现金流平衡
                    </div>
                  </div>

                  <ArrowRightOutlined className="text-blue-600 text-xl mx-2" />

                  <div className="flex-1 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-purple-600 text-xl">📈</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      资产价值放大
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      企业估值增长
                    </div>
                  </div>
                </div>
              </div>

              {/* 案例展示 */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                <div className="text-sm font-medium mb-3">💡 真实案例</div>
                <div className="text-xs leading-relaxed opacity-95">
                  某卫星制造企业通过融资租赁引进自动化生产线（总价 500 万元），选择
                  5 年期租赁。设备投产后，年产能提升 300%，年营收增加 2000
                  万元，月租金仅占营收的 2.5%，实现了快速扩张与稳健现金流的平衡。
                </div>
              </div>

              {/* 提交按钮 */}
              <Button
                type="primary"
                size="large"
                block
                icon={<RocketOutlined />}
                onClick={handleSubmitApplication}
                className="h-14 text-base font-medium shadow-lg hover:shadow-xl transition-all"
              >
                提交租赁申请
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
