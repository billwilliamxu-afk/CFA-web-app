import type { Metadata } from 'next'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import '@/styles/globals.css'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: '航天融易达 - 企业融资平台',
  description: '商业航天全周期融资服务平台',
  keywords: '航天融资,企业融资,商业航天,融资服务',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>
        <AntdRegistry>
          <MainLayout>
            {children}
          </MainLayout>
        </AntdRegistry>
      </body>
    </html>
  )
}
