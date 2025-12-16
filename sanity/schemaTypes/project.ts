import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: '作品集 (Project)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '專案名稱',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: '網址代稱 (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: '分類',
      type: 'string',
      options: {
        list: [
          { title: '品牌識別 (Identity)', value: 'identity' },
          { title: '公共事務 (Public)', value: 'public' },
          { title: '商業醫療 (Commercial)', value: 'commercial' },
          { title: '活動賽事 (Events)', value: 'events' },
          { title: '插畫貼圖 (Illustration)', value: 'illustration' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: '主視覺圖片',
      type: 'image',
      options: {
        hotspot: true, // 啟用焦點裁切
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '替代文字 (Alt Text)',
        }
      ]
    }),
    defineField({
      name: 'publishedAt',
      title: '發布時間',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'body',
      title: '專案詳情',
      type: 'array',
      of: [
        { type: 'block' }, // 支援文字排版
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
  ],
})