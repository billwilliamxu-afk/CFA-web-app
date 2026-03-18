'use client'

import React from 'react'
import { Steps, Button, message } from 'antd'
import {
  RocketOutlined,
  FileSearchOutlined,
  CalculatorOutlined,
  FileTextOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { formatCurrency } from '@/lib/utils'

const lifecycleSteps = [
  {
    title: '技术孵化',
    description: '研发阶段',
  },
  {
    title: '基建加速',
    description: '设施建设',
  },
  {
    title: '产能扩张',
    description: '规模生产',
  },
  {
    title: '价值放大',
    description: '市场拓展',
  },
]

const quickActions = [
  {
    id: 'ip-assessment',
    title: '知识产权快速评估',
    description: '智能评估专利价值',
    icon: FileSearchOutlined,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'lease-calculator',
    title: '设备租赁计算器',
    description: '精准测算租赁成本',
    icon: CalculatorOutlined,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    id: 'subsidy-query',
    title: '补贴政策查询',
    description: '匹配最新扶持政策',
    icon: FileTextOutlined,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'financing-progress',
    title: '我的融资进度',
    description: '实时跟踪申请状态',
    icon: ClockCircleOutlined,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
]

export default function DashboardPage() {
  const handleApplyFinancing = () => {
    message.success('正在跳转至【发射订单ABS】产品申请页面...')
    // 这里可以添加路由跳转逻辑
    setTimeout(() => {
      console.log('跳转到融资申请页面')
    }, 1000)
  }

  const handleQuickAction = (actionId: string, actionTitle: string) => {
    message.info(`正在打开：${actionTitle}`)
    console.log('Quick action clicked:', actionId)
    // 这里可以添加具体的跳转或弹窗逻辑
  }

  return (
    <div className="space-y-6">
      {/* 1. 欢迎卡片 (Welcome Header) */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          张总，欢迎回来
        </h1>

        {/* 生命周期步骤条 */}
        <div className="mt-8">
          <Steps
            current={2}
            items={lifecycleSteps}
            className="px-4"
          />
        </div>
      </div>

      {/* 2. 智能推荐 Banner (Smart Alert) */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center justify-between gap-6">
          {/* 左侧内容 */}
          <div className="flex-1 flex items-start gap-4">
            {/* 推荐图标 */}
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <ThunderboltOutlined className="text-blue-600 text-2xl" />
            </div>

            {/* 文案内容 */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                  智能匹配
                </span>
                <span className="text-blue-900 font-medium">
                  检测到您有已签署发射合同，推荐【发射订单ABS】
                </span>
              </div>

              {/* 融资金额 */}
              <div className="mt-4">
                <div className="text-sm text-blue-700 mb-1">预估可融资金额</div>
                <div className="text-4xl font-bold text-blue-600">
                  {formatCurrency(50000000)}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧按钮 */}
          <div className="flex-shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={handleApplyFinancing}
              className="h-24 px-8 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              立即申请
            </Button>
          </div>
        </div>
      </div>

      {/* 3. 快捷入口矩阵 (Shortcut Grid) */}
      <div className="grid grid-cols-4 gap-4">
        {quickActions.map((action) => {
          const IconComponent = action.icon
          return (
            <div
              key={action.id}
              onClick={() => handleQuickAction(action.id, action.title)}
              className="bg-white rounded-xl shadow-sm h-32 p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex flex-col h-full justify-between">
                {/* 图标 */}
                <div className={`w-10 h-10 ${action.bgColor} rounded-lg flex items-center justify-center`}>
                  <IconComponent className={`${action.color} text-xl`} />
                </div>

                {/* 文字内容 */}
                <div>
                  <div className="text-base font-semibold text-gray-900 mb-1">
                    {action.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {action.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
