# 航天融易达 - 企业端

商业航天全周期融资服务平台 PC 端网站

## 技术栈

- **框架**: Next.js 14 (App Router) + React 18 + TypeScript
- **组件库**: Ant Design 5.x
- **样式**: Tailwind CSS
- **图表**: ECharts
- **状态管理**: Zustand

## 开发进度

- ✅ Phase 1: 初始化项目结构与 B2B 标准 Layout
- ⏳ Phase 2: 工作台首页 (Dashboard)
- ⏳ Phase 3: 核心业务组件 (初创期 & 成长期)
- ⏳ Phase 4: 企业数据中心 (可视化大屏)

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
aerospace-finance-web/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   ├── components/             # React 组件
│   │   ├── layout/            # 布局组件
│   │   ├── dashboard/         # 工作台组件
│   │   ├── business/          # 业务组件
│   │   └── charts/            # 图表组件
│   ├── lib/                   # 工具函数
│   └── styles/                # 样式文件
├── public/                    # 静态资源
└── package.json
```

## 设计规范

- **主色调**: 科技蓝 (#2563eb)
- **背景色**: 高级浅灰 (#f8fafc)
- **卡片样式**: 纯白背景 + 微弱阴影 + 圆角
- **排版**: 严谨对齐，精确间距

## 许可证

MIT
