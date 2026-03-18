'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Breadcrumb, Tag, Avatar, Dropdown, Popover, Tabs, Badge } from 'antd'
import type { MenuProps, TabsProps } from 'antd'
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  BellOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  AlertOutlined,
} from '@ant-design/icons'

const routeNameMap: Record<string, string> = {
  '/dashboard': '工作台首页',
  '/services': '全周期服务大厅',
  '/services/seed': '种子期',
  '/services/startup': '初创期',
  '/services/growth': '成长期',
  '/services/mature': '成熟期',
  '/products': '融资产品库',
  '/my-financing': '我的融资',
  '/data-center': '企业数据中心',
}

// Mock 消息数据
const messageData = {
  policy: [
    {
      id: 1,
      title: '国家商业航天关键技术攻关专项补贴',
      content: '申报截止日期延长至2026年6月30日',
      time: '2小时前',
      read: true,
    },
    {
      id: 2,
      title: '商业航天企业研发费用加计扣除政策',
      content: '2026年度研发费用加计扣除比例提升至100%',
      time: '1天前',
      read: true,
    },
  ],
  progress: [
    {
      id: 1,
      title: '您的【发射订单ABS】初审已通过',
      content: '请补充财务报表，截止时间：2026-04-15',
      time: '10分钟前',
      read: false,
    },
    {
      id: 2,
      title: '设备融资租赁申请审批进度',
      content: '当前处于尽职调查阶段，预计3个工作日内完成',
      time: '2小时前',
      read: true,
    },
  ],
  warning: [
    {
      id: 1,
      title: '研发信用贷款还款提醒',
      content: '下期还款日：2026-04-20，金额：¥85,000',
      time: '今天',
      read: true,
    },
  ],
}

export default function Header() {
  const pathname = usePathname()
  const [notificationOpen, setNotificationOpen] = useState(false)

  // 计算未读消息数量
  const unreadCount =
    messageData.policy.filter((m) => !m.read).length +
    messageData.progress.filter((m) => !m.read).length +
    messageData.warning.filter((m) => !m.read).length

  // 生成面包屑导航
  const getBreadcrumbItems = () => {
    const pathSegments = pathname.split('/').filter(Boolean)
    const items = [
      {
        title: '首页',
        href: '/dashboard',
      },
    ]

    let currentPath = ''
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`
      const name = routeNameMap[currentPath]
      if (name) {
        items.push({
          title: name,
          href: currentPath,
        })
      }
    })

    return items
  }

  // 用户下拉菜单
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: '个人信息',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: '系统设置',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录',
      danger: true,
    },
  ]

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      console.log('退出登录')
    }
  }

  // 渲染消息列表
  const renderMessageList = (messages: any[]) => {
    if (messages.length === 0) {
      return (
        <div className="text-center text-gray-400 py-8">
          暂无消息
        </div>
      )
    }

    return (
      <div className="space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer ${
              !msg.read ? 'bg-blue-50 border border-blue-200' : 'bg-white'
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <div className="flex items-center gap-2">
                {!msg.read && (
                  <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1"></span>
                )}
                <span className="text-sm font-medium text-gray-900">
                  {msg.title}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mb-1 line-clamp-2">
              {msg.content}
            </p>
            <span className="text-xs text-gray-400">{msg.time}</span>
          </div>
        ))}
      </div>
    )
  }

  // 消息中心 Tabs 配置
  const notificationTabs: TabsProps['items'] = [
    {
      key: 'progress',
      label: (
        <span className="flex items-center gap-1">
          <ClockCircleOutlined />
          进度提醒
          {messageData.progress.filter((m) => !m.read).length > 0 && (
            <Badge
              count={messageData.progress.filter((m) => !m.read).length}
              size="small"
            />
          )}
        </span>
      ),
      children: renderMessageList(messageData.progress),
    },
    {
      key: 'policy',
      label: (
        <span className="flex items-center gap-1">
          <FileTextOutlined />
          政策速递
        </span>
      ),
      children: renderMessageList(messageData.policy),
    },
    {
      key: 'warning',
      label: (
        <span className="flex items-center gap-1">
          <AlertOutlined />
          还款预警
        </span>
      ),
      children: renderMessageList(messageData.warning),
    },
  ]

  // 消息中心面板内容
  const notificationContent = (
    <div className="w-80">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
        <span className="text-base font-semibold text-gray-900">消息中心</span>
        <button className="text-xs text-blue-600 hover:text-blue-700">
          全部标记为已读
        </button>
      </div>
      <Tabs
        defaultActiveKey="progress"
        items={notificationTabs}
        className="notification-tabs"
      />
    </div>
  )

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between fixed top-0 right-0 left-64 z-40">
      {/* 左侧：面包屑导航 */}
      <div className="flex items-center gap-4">
        <Breadcrumb items={getBreadcrumbItems()} />
      </div>

      {/* 右侧：企业信息 + 用户信息 */}
      <div className="flex items-center gap-6">
        {/* 通知铃铛 - 添加 Popover */}
        <Popover
          content={notificationContent}
          title={null}
          trigger="click"
          open={notificationOpen}
          onOpenChange={setNotificationOpen}
          placement="bottomRight"
          overlayClassName="notification-popover"
        >
          <Badge count={unreadCount} size="small" offset={[-2, 2]}>
            <button className="relative hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <BellOutlined className="text-gray-600 text-lg" />
            </button>
          </Badge>
        </Popover>

        {/* 企业信息 */}
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg">
          <div className="flex flex-col items-end">
            <span className="text-sm font-medium text-gray-900">
              星际探索科技有限公司
            </span>
            <Tag color="blue" className="mt-1 m-0">
              成长期
            </Tag>
          </div>
        </div>

        {/* 用户信息 */}
        <Dropdown
          menu={{ items: userMenuItems, onClick: handleMenuClick }}
          placement="bottomRight"
        >
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
            <Avatar
              size="default"
              icon={<UserOutlined />}
              className="bg-blue-600"
            />
            <span className="text-sm font-medium text-gray-900">张总</span>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
