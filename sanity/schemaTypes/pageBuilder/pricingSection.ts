export default {
  name: 'pricingSection',
  title: '價格方案區塊 (Pricing Table)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: '區塊標題',
      type: 'string',
      initialValue: '年度服務與報價',
    },
    {
      name: 'subtitle',
      title: '副標題',
      type: 'string',
    },
    {
      name: 'selectedPlans',
      title: '選擇要顯示的方案',
      description: '請選擇已建立的 Pricing Documents',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'pricing' }]
        }
      ]
    },
    {
      name: 'note',
      title: '底部備註',
      type: 'text',
      rows: 2,
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: any) {
      return {
        title: title || 'Pricing Section',
        subtitle: '價格表區塊',
      }
    },
  },
}