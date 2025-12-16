import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dashboardTool } from '@sanity/dashboard'
import { schemaTypes } from './sanity/schemaTypes'
import { myTheme } from './sanity/theme' // 引入自訂主題
import { StudioLogo } from './sanity/components/StudioLogo' // 引入 Logo 元件
import { 
  WelcomeWidget, 
  ProjectListWidget, 
  QuickActionsWidget, 
  VercelStatusWidget 
} from './sanity/components/DashboardWidgets'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/studio',
  
  // 1. 修改瀏覽器分頁標題
  title: 'Jun Light Workstation',
  
  // 2. 替換 Studio Logo
  icon: StudioLogo, // 用於 Favicon 或部分縮圖 (選用)
  studio: {
    components: {
      logo: StudioLogo,
    }
  },

  // 3. 套用品牌色主題
  theme: myTheme,

  projectId,
  dataset,

  plugins: [
    structureTool(),
    dashboardTool({
      widgets: [
        {
          name: 'welcome',
          component: WelcomeWidget,
          layout: { width: 'full' }
        },
        {
          name: 'quick-actions',
          component: QuickActionsWidget,
          layout: { width: 'full' }
        },
        {
          name: 'project-list',
          component: ProjectListWidget,
          layout: { width: 'medium' }
        },
        {
          name: 'vercel-status',
          component: VercelStatusWidget,
          layout: { width: 'medium' }
        }
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
})