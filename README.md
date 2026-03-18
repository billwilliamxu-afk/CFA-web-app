# 航天融易达 - 企业端

商业航天全周期融资服务平台 PC 端网站

## 技术栈

- **框架**: Next.js 14 (App Router) + React 18 + TypeScript
- **组件库**: Ant Design 5.x
- **样式**: Tailwind CSS
- **图表**: ECharts
- **状态管理**: Zustand

## 功能特性

- ✅ **工作台首页**: 智能推荐、快捷操作、企业生命周期展示
- ✅ **全周期服务大厅**: 种子期、初创期、成长期、成熟期融资方案
- ✅ **融资产品库**: 9款产品，5类分类筛选（股权/债权/ABS/政策补贴）
- ✅ **我的融资**: 实时进度追踪（Timeline）、已批融资台账（Table）
- ✅ **企业数据中心**: 雷达图财务分析、资产负债率仪表盘（ECharts）
- ✅ **全局交互**: Header消息中心（3个Tab）、AI融资顾问浮窗

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
CFA网站尝试/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── dashboard/         # 工作台首页
│   │   ├── services/          # 全周期服务大厅
│   │   │   ├── seed/         # 种子期
│   │   │   ├── startup/      # 初创期
│   │   │   ├── growth/       # 成长期
│   │   │   └── mature/       # 成熟期
│   │   ├── products/          # 融资产品库
│   │   ├── my-financing/      # 我的融资
│   │   └── data-center/       # 企业数据中心
│   ├── components/             # React 组件
│   │   ├── layout/            # Sidebar + Header + MainLayout
│   │   └── AIAssistant.tsx    # AI 融资顾问
│   ├── lib/                   # 工具函数 (formatCurrency, cn)
│   └── styles/                # 全局样式
└── package.json
```

## 设计规范

- **主色调**: 科技蓝 (#2563eb)
- **背景色**: 高级浅灰 (#f8fafc)
- **卡片样式**: 纯白背景 + 微弱阴影 + 圆角
- **排版**: 严谨对齐，精确间距

## 部署

### Vercel 部署（推荐）

1. 在 [Vercel](https://vercel.com) 使用 GitHub 账号登录
2. 导入此仓库 `billwilliamxu-afk/CFA-web-app`
3. Vercel 会自动识别 Next.js 项目并完成配置
4. 点击 Deploy，等待 2-3 分钟即可完成部署

### 本地生产环境

```bash
# 构建
npm run build

# 启动（默认端口 3000）
npm start

# 自定义端口
PORT=3002 npm start
```

## 许可证

MIT
