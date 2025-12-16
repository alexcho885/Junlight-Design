import { EnvelopeIcon } from '@sanity/icons'

export default {
  name: 'inquiry',
  title: '客戶詢價單 (Inquiry)',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    {
      name: 'name',
      title: '客戶姓名',
      type: 'string',
      readOnly: true, // 防止誤改客戶資料
    },
    {
      name: 'email',
      title: '聯絡信箱',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'serviceType',
      title: '需求類別',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          '品牌設計 (Logo/CI)',
          '社群行銷素材',
          '活動視覺設計',
          '短影音剪輯',
          '插畫/貼圖設計',
          '其他'
        ]
      }
    },
    {
      name: 'budget',
      title: '預算範圍',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'message',
      title: '專案描述 / 訊息內容',
      type: 'text',
      readOnly: true,
      rows: 4
    },
    {
      name: 'status',
      title: '處理狀態',
      type: 'string',
      options: {
        list: [
          { title: 'New (新進詢價)', value: 'new' },
          { title: 'Contacted (已聯繫)', value: 'contacted' },
          { title: 'Closed (已結案)', value: 'closed' },
        ],
        layout: 'radio'
      },
      initialValue: 'new',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'submittedAt',
      title: '詢價時間',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'internalNotes',
      title: '內部備註 (僅後台可見)',
      type: 'text',
      rows: 3,
      description: '紀錄與客戶的聯繫狀況或報價細節'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'serviceType',
      status: 'status',
      date: 'submittedAt'
    },
    prepare({ title, subtitle, status, date }: any) {
      // 狀態燈號對照
      const statusMap: Record<string, string> = {
        new: '🔵',
        contacted: '🟡',
        closed: '🟢'
      }
      
      const statusIcon = statusMap[status] || '⚪'
      const dateString = date ? new Date(date).toLocaleDateString() : ''
      
      return {
        title: `${statusIcon} ${title || '未知客戶'}`,
        subtitle: `${dateString} | ${subtitle || '一般諮詢'}`,
      }
    },
  },
}