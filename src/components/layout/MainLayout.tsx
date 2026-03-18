'use client'

import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Sidebar from './Sidebar'
import Header from './Header'
import AIAssistant from '../AIAssistant'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#2563eb',
          colorInfo: '#2563eb',
          borderRadius: 8,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        },
        components: {
          Menu: {
            itemSelectedBg: '#eff6ff',
            itemSelectedColor: '#2563eb',
          },
        },
      }}
    >
      <div className="min-h-screen bg-slate-50">
        {/* 侧边栏 */}
        <Sidebar />

        {/* 主内容区 */}
        <div className="ml-64">
          {/* 顶部栏 */}
          <Header />

          {/* 内容区域 */}
          <main className="pt-16 min-h-screen">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>

        {/* 全局 AI 助手 */}
        <AIAssistant />
      </div>
    </ConfigProvider>
  )
}
