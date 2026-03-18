'use client'

import React from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'
import {
  DashboardOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
} from '@ant-design/icons'

export default function DataCenterPage() {
  // 融资健康度雷达图配置
  const radarOption: EChartsOption = {
    title: {
      show: false,
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#3b82f6',
      borderWidth: 1,
      textStyle: {
        color: '#333',
      },
      formatter: (params: any) => {
        const data = params.value
        const indicators = ['偿债能力', '融资效率', '风险适配', '成长支撑']
        let result = '<div style="padding: 8px;">'
        result += '<div style="font-weight: bold; margin-bottom: 8px; color: #3b82f6;">企业综合能力</div>'
        indicators.forEach((name, index) => {
          result += `<div style="margin: 4px 0;">${name}: <span style="font-weight: bold; color: #3b82f6;">${data[index]}</span> / 100</div>`
        })
        result += '</div>'
        return result
      },
    },
    legend: {
      show: false,
    },
    radar: {
      indicator: [
        { name: '偿债能力', max: 100 },
        { name: '融资效率', max: 100 },
        { name: '风险适配', max: 100 },
        { name: '成长支撑', max: 100 },
      ],
      shape: 'polygon',
      center: ['50%', '50%'],
      radius: '65%',
      splitNumber: 4,
      axisName: {
        color: '#475569',
        fontSize: 14,
        fontWeight: 500,
      },
      splitLine: {
        lineStyle: {
          color: '#cbd5e1',
          width: 1,
        },
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(241, 245, 249, 0.5)', 'rgba(226, 232, 240, 0.3)'],
        },
      },
      axisLine: {
        lineStyle: {
          color: '#cbd5e1',
        },
      },
    },
    series: [
      {
        name: '企业健康度',
        type: 'radar',
        data: [
          {
            value: [85, 70, 60, 90],
            name: '星际探索科技',
            areaStyle: {
              color: 'rgba(59, 130, 246, 0.2)',
            },
            lineStyle: {
              color: '#3b82f6',
              width: 2,
            },
            itemStyle: {
              color: '#3b82f6',
              borderColor: '#fff',
              borderWidth: 2,
            },
            emphasis: {
              lineStyle: {
                width: 3,
              },
              areaStyle: {
                color: 'rgba(59, 130, 246, 0.35)',
              },
            },
          },
        ],
      },
    ],
  }

  // 资产负债率仪表盘配置
  const gaugeOption: EChartsOption = {
    title: {
      show: false,
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#3b82f6',
      borderWidth: 1,
      textStyle: {
        color: '#333',
      },
    },
    series: [
      {
        name: '资产负债率',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        center: ['50%', '75%'],
        radius: '120%',
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 20,
            color: [
              [0.6, '#10b981'],
              [0.8, '#f59e0b'],
              [1, '#ef4444'],
            ],
          },
        },
        pointer: {
          length: '70%',
          width: 6,
          itemStyle: {
            color: '#3b82f6',
          },
        },
        axisTick: {
          distance: -20,
          length: 8,
          lineStyle: {
            color: '#cbd5e1',
            width: 1,
          },
        },
        splitLine: {
          distance: -20,
          length: 15,
          lineStyle: {
            color: '#cbd5e1',
            width: 2,
          },
        },
        axisLabel: {
          distance: 10,
          color: '#64748b',
          fontSize: 12,
          formatter: (value: number) => {
            if (value === 60) {
              return '{warning|60%}'
            }
            return value + '%'
          },
          rich: {
            warning: {
              color: '#ef4444',
              fontWeight: 'bold',
              fontSize: 13,
            },
          },
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}%',
          color: '#3b82f6',
          fontSize: 40,
          fontWeight: 'bold',
          offsetCenter: [0, '-20%'],
        },
        title: {
          offsetCenter: [0, '20%'],
          fontSize: 14,
          color: '#64748b',
        },
        data: [
          {
            value: 52,
            name: '当前资产负债率',
          },
        ],
        markLine: {
          silent: true,
          data: [
            {
              name: '警戒线',
              yAxis: 60,
              label: {
                show: true,
                formatter: '行业警戒线 60%',
                color: '#ef4444',
                fontSize: 12,
                fontWeight: 'bold',
                position: 'end',
              },
              lineStyle: {
                color: '#ef4444',
                type: 'dashed',
                width: 2,
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <DashboardOutlined className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              企业融资健康度全景分析
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              基于多维度数据模型，实时监控企业融资风险与成长潜力
            </p>
          </div>
        </div>
      </div>

      {/* 主内容区：左右分栏 */}
      <div className="grid grid-cols-2 gap-6">
        {/* 左侧：融资健康度雷达图 */}
        <div className="bg-white shadow-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ThunderboltOutlined className="text-blue-600 text-xl" />
              <h2 className="text-xl font-bold text-gray-900">
                综合能力雷达评估
              </h2>
            </div>
            <div className="text-xs text-gray-500">
              数据更新时间：2024-Q2
            </div>
          </div>

          {/* 雷达图容器 */}
          <div className="h-[400px]">
            <ReactECharts
              option={radarOption}
              style={{ height: '100%', width: '100%' }}
              opts={{ renderer: 'canvas' }}
            />
          </div>

          {/* 数据说明 */}
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">偿债能力</div>
              <div className="text-xl font-bold text-blue-600">85</div>
              <div className="text-xs text-green-600 mt-1">优秀</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">融资效率</div>
              <div className="text-xl font-bold text-blue-600">70</div>
              <div className="text-xs text-green-600 mt-1">良好</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">风险适配</div>
              <div className="text-xl font-bold text-blue-600">60</div>
              <div className="text-xs text-orange-600 mt-1">中等</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-600 mb-1">成长支撑</div>
              <div className="text-xl font-bold text-blue-600">90</div>
              <div className="text-xs text-green-600 mt-1">优秀</div>
            </div>
          </div>
        </div>

        {/* 右侧：资产负债率与动态建议 */}
        <div className="space-y-6">
          {/* 上方：资产负债率仪表盘 */}
          <div className="bg-white shadow-sm rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <SafetyOutlined className="text-blue-600 text-xl" />
                <h2 className="text-xl font-bold text-gray-900">
                  实时资产负债率监控
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">实时监控中</span>
              </div>
            </div>

            {/* 仪表盘容器 */}
            <div className="h-[250px]">
              <ReactECharts
                option={gaugeOption}
                style={{ height: '100%', width: '100%' }}
                opts={{ renderer: 'canvas' }}
              />
            </div>

            {/* 状态说明 */}
            <div className="mt-4 bg-slate-50 rounded-lg p-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-700">
                    健康区间：<span className="font-medium">0-60%</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span className="text-gray-700">
                    预警区间：<span className="font-medium">60-80%</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span className="text-gray-700">
                    风险区间：<span className="font-medium">80-100%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 下方：智能决策建议卡片 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <div className="flex items-start gap-4">
              {/* 图标 */}
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BulbOutlined className="text-blue-600 text-2xl" />
              </div>

              {/* 内容 */}
              <div className="flex-1">
                <div className="text-base font-bold text-blue-900 mb-3">
                  智能动态调整建议
                </div>
                <div className="text-sm text-blue-800 leading-relaxed">
                  系统检测到贵司<span className="font-semibold">连续两季度现金流为正</span>
                  。建议当前阶段适当
                  <span className="font-semibold">增加债权融资比例</span>
                  ，用于置换前期的高价股权融资，以进一步
                  <span className="font-semibold">优化资本结构</span>
                  ，降低综合资金成本。
                </div>

                {/* 预期效果 */}
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="text-xs font-medium text-blue-900 mb-2">
                    预期效果
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">
                        资金成本
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        ↓ 2.5%
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">
                        股权稀释
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        ↓ 15%
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3 text-center">
                      <div className="text-xs text-gray-600 mb-1">
                        杠杆优化
                      </div>
                      <div className="text-lg font-bold text-blue-600">
                        ↑ 12%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部数据概览 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          关键财务指标总览
        </h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="border-l-4 border-blue-600 pl-4">
            <div className="text-sm text-gray-600 mb-1">流动比率</div>
            <div className="text-2xl font-bold text-gray-900">2.3</div>
            <div className="text-xs text-green-600 mt-1">↑ 0.2 vs 上季度</div>
          </div>
          <div className="border-l-4 border-green-600 pl-4">
            <div className="text-sm text-gray-600 mb-1">速动比率</div>
            <div className="text-2xl font-bold text-gray-900">1.8</div>
            <div className="text-xs text-green-600 mt-1">↑ 0.15 vs 上季度</div>
          </div>
          <div className="border-l-4 border-purple-600 pl-4">
            <div className="text-sm text-gray-600 mb-1">融资可得性</div>
            <div className="text-2xl font-bold text-gray-900">78%</div>
            <div className="text-xs text-blue-600 mt-1">行业前 20%</div>
          </div>
          <div className="border-l-4 border-orange-600 pl-4">
            <div className="text-sm text-gray-600 mb-1">成长性指数</div>
            <div className="text-2xl font-bold text-gray-900">8.5</div>
            <div className="text-xs text-green-600 mt-1">↑ 1.2 vs 去年同期</div>
          </div>
        </div>
      </div>
    </div>
  )
}
