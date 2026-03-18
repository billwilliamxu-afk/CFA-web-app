'use client'

import React from 'react'
import { Timeline, Table, Tag, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  FileTextOutlined,
  DollarOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { formatCurrency } from '@/lib/utils'

interface FinancingRecord {
  key: string
  productName: string
  amount: number
  approvalDate: string
  status: string
  statusColor: 'success' | 'processing' | 'warning'
}

const financingRecords: FinancingRecord[] = [
  {
    key: '1',
    productName: '研发支持信用贷款',
    amount: 3000000,
    approvalDate: '2025-08-15',
    status: '正常还款中',
    statusColor: 'success',
  },
  {
    key: '2',
    productName: '知识产权质押融资',
    amount: 1500000,
    approvalDate: '2025-10-20',
    status: '正常还款中',
    statusColor: 'success',
  },
]

export default function MyFinancingPage() {
  const columns: ColumnsType<FinancingRecord> = [
    {
      title: '产品名称',
      dataIndex: 'productName',
      key: 'productName',
      render: (text) => (
        <div className="flex items-center gap-2">
          <DollarOutlined className="text-blue-600" />
          <span className="font-medium text-gray-900">{text}</span>
        </div>
      ),
    },
    {
      title: '融资金额',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => (
        <span className="font-bold text-blue-600">
          {formatCurrency(amount)}
        </span>
      ),
    },
    {
      title: '获批时间',
      dataIndex: 'approvalDate',
      key: 'approvalDate',
    },
    {
      title: '当前状态',
      dataIndex: 'status',
      key: 'status',
      render: (status, record) => (
        <Tag color={record.statusColor} icon={<CheckCircleOutlined />}>
          {status}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <div className="flex gap-2">
          <Button type="link" size="small">
            查看合同
          </Button>
          <Button type="link" size="small">
            还款计划
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <FileTextOutlined className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">我的融资</h1>
            <p className="text-sm text-gray-600 mt-1">
              实时跟踪融资申请进度，查看已获批融资台账
            </p>
          </div>
        </div>
      </div>

      {/* 上区块：进行中的申请 */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SyncOutlined className="text-blue-600 text-xl spin" />
            <h2 className="text-xl font-bold text-gray-900">进行中的申请</h2>
          </div>
          <Tag color="processing">审批中</Tag>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                设备融资租赁
              </h3>
              <p className="text-sm text-gray-600">
                申请金额：
                <span className="font-bold text-blue-600 ml-1">
                  {formatCurrency(5000000)}
                </span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-600 mb-1">申请时间</div>
              <div className="text-sm font-medium text-gray-900">
                2026-03-10
              </div>
            </div>
          </div>

          {/* 进度 Timeline */}
          <Timeline
            items={[
              {
                dot: (
                  <CheckCircleOutlined
                    style={{ fontSize: '16px', color: '#10b981' }}
                  />
                ),
                color: 'green',
                children: (
                  <div className="pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">
                        1. 提交申请
                      </span>
                      <span className="text-xs text-gray-500">
                        2026-03-10 10:30
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      已提交商业计划书、财务报表、设备采购合同
                    </p>
                  </div>
                ),
              },
              {
                dot: (
                  <CheckCircleOutlined
                    style={{ fontSize: '16px', color: '#10b981' }}
                  />
                ),
                color: 'green',
                children: (
                  <div className="pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">
                        2. 资方初审
                      </span>
                      <span className="text-xs text-gray-500">
                        2026-03-12 15:20
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      初审通过，企业资质符合要求
                    </p>
                  </div>
                ),
              },
              {
                dot: (
                  <SyncOutlined
                    spin
                    style={{ fontSize: '16px', color: '#2563eb' }}
                  />
                ),
                color: 'blue',
                children: (
                  <div className="pb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-blue-600">
                        3. 尽职调查
                      </span>
                      <Tag color="processing" className="ml-2">
                        进行中
                      </Tag>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      资方正在进行实地考察和财务尽调，预计 3 个工作日内完成
                    </p>
                    <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                      <div className="text-xs font-medium text-blue-900 mb-1">
                        💡 待办事项
                      </div>
                      <div className="text-xs text-blue-800">
                        请准备最近 6 个月的银行流水和设备供应商资质证明
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                dot: (
                  <ClockCircleOutlined
                    style={{ fontSize: '16px', color: '#94a3b8' }}
                  />
                ),
                color: 'gray',
                children: (
                  <div className="pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-500">
                        4. 终审放款
                      </span>
                      <Tag>待处理</Tag>
                    </div>
                    <p className="text-sm text-gray-500">
                      尽调完成后进入终审环节，审批通过后 3-5 个工作日内放款
                    </p>
                  </div>
                ),
              },
            ]}
            className="mt-6"
          />
        </div>

        {/* 联系人信息 */}
        <div className="bg-slate-50 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                项目对接人
              </div>
              <div className="text-xs text-gray-600">
                王经理 | 中国银行商业航天事业部
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="small">
                <span className="text-xs">📞 联系电话</span>
              </Button>
              <Button size="small">
                <span className="text-xs">✉️ 发送邮件</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 下区块：已获批融资台账 */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <SafetyOutlined className="text-green-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-900">
              已获批融资台账
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-xs text-gray-600 mb-1">累计融资总额</div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(4500000)}
              </div>
            </div>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={financingRecords}
          pagination={false}
          className="financing-table"
        />

        {/* 底部统计 */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">融资笔数</div>
              <div className="text-2xl font-bold text-gray-900">2 笔</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">累计融资</div>
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(4500000)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">已还款金额</div>
              <div className="text-2xl font-bold text-green-600">
                {formatCurrency(1200000)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">待还款金额</div>
              <div className="text-2xl font-bold text-orange-600">
                {formatCurrency(3300000)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
