export default {
  name: 'hero',
  title: '主視覺區塊 (Hero)',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: '大標題',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'tagline',
      title: '副標題 / 描述',
      type: 'text',
      rows: 2,
    },
    {
      name: 'backgroundImage',
      title: '背景圖片',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字',
        }
      ]
    },
    {
      name: 'cta',
      title: '行動呼籲按鈕 (CTA)',
      type: 'object',
      fields: [
        { name: 'text', type: 'string', title: '按鈕文字' },
        { name: 'url', type: 'string', title: '連結網址' },
        { 
          name: 'style', 
          type: 'string', 
          title: '樣式',
          options: {
            list: [
              { title: '品牌漸層色', value: 'primary' },
              { title: '白色/透明', value: 'secondary' }
            ]
          },
          initialValue: 'primary'
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({ title, media }: any) {
      return {
        title: title || 'Hero Section',
        subtitle: '主視覺區塊',
        media: media,
      }
    },
  },
}