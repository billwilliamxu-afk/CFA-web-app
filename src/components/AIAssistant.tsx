'use client'

import React, { useState } from 'react'
import { Input, Button } from 'antd'
import {
  CustomerServiceOutlined,
  SendOutlined,
  CloseOutlined,
  RobotOutlined,
} from '@ant-design/icons'

interface Message {
  id: number
  type: 'bot' | 'user'
  content: string
  time: string
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content:
        '张总您好，我是您的专属融资顾问。检测到您正在关注知识产权质押，需要帮您测算额度吗？',
      time: '刚刚',
    },
  ])

  const handleSend = () => {
    if (!inputValue.trim()) return

    // 添加用户消息
    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      time: '刚刚',
    }

    // Mock 机器人回复
    const botReply: Message = {
      id: messages.length + 2,
      type: 'bot',
      content:
        '好的，我已收到您的问题。根据您的企业情况，我建议您可以考虑以下融资方案...',
      time: '刚刚',
    }

    setMessages([...messages, userMessage, botReply])
    setInputValue('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* 聊天面板 */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <RobotOutlined className="text-lg" />
              </div>
              <div>
                <div className="text-sm font-semibold">融易达智能助手</div>
                <div className="text-xs opacity-90">在线</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded transition-colors"
            >
              <CloseOutlined />
            </button>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  {msg.type === 'bot' && (
                    <div className="flex items-center gap-2 mb-1">
                      <RobotOutlined className="text-blue-600" />
                      <span className="text-xs font-medium text-gray-600">
                        AI 助手
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                  <span
                    className={`text-xs mt-1 block ${
                      msg.type === 'user'
                        ? 'text-blue-200'
                        : 'text-gray-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 输入区域 */}
          <div className="p-3 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="输入您的问题..."
                className="flex-1"
                size="large"
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleSend}
                size="large"
                disabled={!inputValue.trim()}
              />
            </div>
          </div>
        </div>
      )}

      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center group animate-bounce"
        style={{
          animation: 'bounce 2s infinite',
        }}
      >
        {isOpen ? (
          <CloseOutlined className="text-xl" />
        ) : (
          <>
            <CustomerServiceOutlined className="text-2xl" />
            {/* 呼吸光晕效果 */}
            <span className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
          </>
        )}
      </button>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  )
}
