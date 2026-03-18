'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeOutlined,
  RocketOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  FileTextOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { cn } from '@/lib/utils'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const menuItems: MenuItem[] = [
  getItem(
    <Link href="/dashboard">工作台首页</Link>,
    '/dashboard',
    <HomeOutlined />,
  ),
  getItem(
    '全周期服务大厅',
    'services',
    <RocketOutlined />,
    [
      getItem(
        <Link href="/services/seed">种子期</Link>,
        '/services/seed',
      ),
      getItem(
        <Link href="/services/startup">初创期</Link>,
        '/services/startup',
      ),
      getItem(
        <Link href="/services/growth">成长期</Link>,
        '/services/growth',
      ),
      getItem(
        <Link href="/services/mature">成熟期</Link>,
        '/services/mature',
      ),
    ],
  ),
  getItem(
    <Link href="/products">融资产品库</Link>,
    '/products',
    <AppstoreOutlined />,
  ),
  getItem(
    <Link href="/my-financing">我的融资</Link>,
    '/my-financing',
    <FileTextOutlined />,
  ),
  getItem(
    <Link href="/data-center">企业数据中心</Link>,
    '/data-center',
    <DashboardOutlined />,
  ),
]

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  // 确定当前选中的菜单项和打开的子菜单
  const getSelectedKeys = () => {
    if (pathname.startsWith('/services/')) {
      return [pathname]
    }
    return [pathname]
  }

  const getOpenKeys = () => {
    if (pathname.startsWith('/services/')) {
      return ['services']
    }
    return []
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen bg-white border-r border-gray-200 transition-all duration-300 z-50',
        collapsed ? 'w-20' : 'w-64',
      )}
    >
      {/* Logo区域 */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
            <RocketOutlined className="text-white text-xl" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">航天融易达</span>
              <span className="text-xs text-gray-500">企业融资平台</span>
            </div>
          )}
        </div>
      </div>

      {/* 导航菜单 */}
      <div className="py-4">
        <Menu
          mode="inline"
          selectedKeys={getSelectedKeys()}
          defaultOpenKeys={getOpenKeys()}
          items={menuItems}
          className="border-0"
          style={{
            background: 'transparent',
          }}
        />
      </div>

      {/* 折叠按钮 */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors"
        title={collapsed ? '展开' : '收起'}
      >
        <span className="text-blue-600 text-xs">
          {collapsed ? '→' : '←'}
        </span>
      </button>
    </aside>
  )
}
