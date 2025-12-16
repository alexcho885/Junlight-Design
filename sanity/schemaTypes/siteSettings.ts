export default {
  name: 'siteSettings',
  title: '全站設定 (Site Settings)',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: '網站標題',
      type: 'string',
      initialValue: '純光設計 Jun Light Design',
    },
    {
      name: 'announcement',
      title: '首頁公告文字',
      type: 'string',
      description: '顯示在首頁顯眼處的最新消息',
    },
    {
      name: 'heroImage',
      title: '首頁 Banner 圖片',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contactPhone',
      title: '聯絡電話',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: '聯絡 Email',
      type: 'string',
    },
  ],
}