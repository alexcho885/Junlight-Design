export default {
  name: 'page',
  title: '頁面 (Page Builder)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: '頁面名稱 (內部識別用)',
      type: 'string',
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'slug',
      title: '頁面網址 (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule: any) => rule.required(),
    },
    {
      name: 'pageBuilder',
      title: '頁面內容區塊',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'gallery' },
        { type: 'pricingSection' },
        { type: 'faqSection' },
        // 您可以在此處隨時擴充更多區塊
      ],
      options: {
        insertMenu: {
          showIcons: true,
        }
      }
    },
    {
      name: 'seo',
      title: 'SEO 設定',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', rows: 3, title: 'Meta Description' },
      ],
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
}