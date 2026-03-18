import { type ClassValue, clsx } from 'clsx'

/**
 * 工具函数：合并 Tailwind CSS 类名
 * 用于条件化组合多个 className，避免类名冲突
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

/**
 * 工具函数：格式化货币金额
 * 将数字格式化为中文货币显示（人民币 ¥）
 * @param amount - 金额数字
 * @returns 格式化后的货币字符串，如 ¥1,000,000
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * 工具函数：格式化数字
 * 将数字格式化为中文千分位显示
 * @param num - 待格式化的数字
 * @returns 格式化后的数字字符串，如 1,000,000
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('zh-CN').format(num)
}
