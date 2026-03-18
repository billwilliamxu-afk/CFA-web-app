'use client'

import React, { useState } from 'react'
import { Tag, Button, Upload, message } from 'antd'
import type { UploadProps } from 'antd'
import {
  CloudUploadOutlined,
  RocketOutlined,
  DollarOutlined,
  SafetyOutlined,
  ExperimentOutlined,
  ApiOutlined,
} from '@ant-design/icons'

const { Dragger } = Upload

const infrastructureAssets = [
  { label: '发射工位', color: 'blue' },
  { label: '测试平台', color: 'green' },
  { label: '加注设施', color: 'purple' },
]

export default function StartupPage() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  // 基金申请按钮事件
  const handleApplyFund = () => {
    message.success('正在提交基建基金入驻申请...')
    console.log('申请入驻使用')
  }

  const handleInvestFund = () => {
    message.info('正在跳转至社会资本跟投页面...')
    console.log('作为社会资本跟投')
  }

  // 文件上传配置
  const uploadProps: UploadProps = {
    name: 'file',
    multiple: true,
    accept: '.pdf,.jpg,.jpeg,.png',
    maxCount: 10,
    beforeUpload: (file) => {
      const isValidSize = file.size / 1024 / 1024 < 50
      if (!isValidSize) {
        message.error('文件大小不能超过 50MB')
        return Upload.LIST_IGNORE
      }

      const isValidType = [
        'application/pdf',
        'image/jpeg',
        'image/jpg',
        'image/png',
      ].includes(file.type)

      if (!isValidType) {
        message.error('仅支持 PDF / JPG / PNG 格式')
        return Upload.LIST_IGNORE
      }

      return false // 阻止自动上传，这里只做前端验证
    },
    onChange(info) {
      const { status } = info.file
      if (status === 'done') {
        message.success(`${info.file.name} 文件上传成功`)
        setUploadedFiles((prev) => [...prev, info.file.name])
      } else if (status === 'error') {
        message.error(`${info.file.name} 文件上传失败`)
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files)
    },
  }

  const handleSubmitIPApplication = () => {
    if (uploadedFiles.length === 0) {
      message.warning('请先上传专利证书文件')
      return
    }
    message.success('知识产权质押融资申请已提交，预计3个工作日内审核')
    console.log('提交的文件:', uploadedFiles)
  }

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
            <RocketOutlined className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">初创期融资服务</h1>
            <p className="text-sm text-gray-600 mt-1">
              知识产权质押 + 共享基建基金，双轮驱动企业快速成长
            </p>
          </div>
        </div>
      </div>

      {/* 模块 A：知识产权质押与基建基金 */}
      <div className="grid grid-cols-2 gap-6">
        {/* 左侧：基金申请卡片 */}
        <div className="bg-white p-6 shadow-sm rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <SafetyOutlined className="text-blue-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-900">
              国家商业航天共享基建基金
            </h2>
          </div>

          {/* 核心数字 */}
          <div className="text-center my-8">
            <div className="text-5xl font-bold text-blue-600 mb-2">
              规模：50亿
            </div>
            <div className="text-sm text-gray-500">
              专项用于商业航天基础设施建设与共享
            </div>
          </div>

          {/* 基建资产标签 */}
          <div className="flex justify-center gap-2 mb-8">
            {infrastructureAssets.map((asset) => (
              <Tag
                key={asset.label}
                color={asset.color}
                className="text-sm px-4 py-1"
              >
                {asset.label}
              </Tag>
            ))}
          </div>

          {/* 基建清单说明 */}
          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex items-start gap-2">
                <ExperimentOutlined className="text-blue-600 mt-0.5" />
                <span>提供测试平台使用权，降低企业研发成本</span>
              </div>
              <div className="flex items-start gap-2">
                <ApiOutlined className="text-blue-600 mt-0.5" />
                <span>共享发射工位，缩短项目周期</span>
              </div>
              <div className="flex items-start gap-2">
                <DollarOutlined className="text-blue-600 mt-0.5" />
                <span>社会资本可参与跟投，获得优先使用权</span>
              </div>
            </div>
          </div>

          {/* 按钮组 */}
          <div className="flex gap-3">
            <Button
              type="primary"
              size="large"
              icon={<RocketOutlined />}
              onClick={handleApplyFund}
              className="flex-1 h-12 text-base font-medium"
            >
              申请入驻使用
            </Button>
            <Button
              size="large"
              icon={<DollarOutlined />}
              onClick={handleInvestFund}
              className="flex-1 h-12 text-base font-medium border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              作为社会资本跟投
            </Button>
          </div>
        </div>

        {/* 右侧：知识产权上传专区 */}
        <div className="bg-white p-6 shadow-sm rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <CloudUploadOutlined className="text-blue-600 text-xl" />
            <h2 className="text-xl font-bold text-gray-900">
              知识产权质押融资申请
            </h2>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            上传您的专利证书、软件著作权证书或其他知识产权证明文件，我们将在
            <span className="text-blue-600 font-medium"> 3个工作日 </span>
            内完成评估并反馈融资额度。
          </div>

          {/* 拖拽上传区域 */}
          <Dragger
            {...uploadProps}
            className="mt-4"
            style={{ borderRadius: '8px' }}
          >
            <div className="py-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <CloudUploadOutlined className="text-gray-400 text-3xl" />
                </div>
              </div>
              <p className="text-base text-gray-700 font-medium mb-2">
                点击或拖拽上传专利证书
              </p>
              <p className="text-sm text-gray-500">
                支持 PDF / JPG / PNG 格式，不超过 50MB
              </p>
            </div>
          </Dragger>

          {/* 上传提示说明 */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-900 font-medium mb-2">
              💡 温馨提示
            </div>
            <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
              <li>专利需在有效期内，且无权属纠纷</li>
              <li>软件著作权需完成版权登记</li>
              <li>评估后的融资额度范围通常为专利评估价值的 60%-80%</li>
              <li>审批通过后，资金最快可在 5 个工作日内到账</li>
            </ul>
          </div>

          {/* 提交按钮 */}
          <Button
            type="primary"
            size="large"
            block
            onClick={handleSubmitIPApplication}
            className="mt-6 h-12 text-base font-medium"
          >
            提交融资申请
          </Button>
        </div>
      </div>
    </div>
  )
}
