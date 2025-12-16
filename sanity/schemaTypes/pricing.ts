export default {
  name: 'pricing',
  title: '報價方案 (Pricing)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '方案名稱',
      type: 'string',
      description: '例如：社群圖卡、活動海報',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'price',
      title: '優惠價格',
      type: 'number',
      validation: (rule: any) => rule.required().min(0),
    },
    {
      name: 'originalPrice',
      title: '原價',
      type: 'number',
      validation: (rule: any) => rule.min(0),
    },
    {
      name: 'features',
      title: '方案特色列表',
      type: 'array',
      of: [{ type: 'string' }],
      description: '例如：高解析度檔案、包含 3 次微調',
    },
    {
      name: 'tag',
      title: '標籤',
      type: 'string',
      options: {
        list: [
          { title: '無', value: 'NONE' },
          { title: 'SALE (特價)', value: 'SALE' },
          { title: 'HOT (熱門)', value: 'HOT' },
        ],
      },
      initialValue: 'NONE',
    },
    {
      name: 'order',
      title: '排序權重',
      type: 'number',
      initialValue: 0,
      description: '數字越大越靠前',
    },
  ],
}