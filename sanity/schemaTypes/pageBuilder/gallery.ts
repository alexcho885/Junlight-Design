export default {
  name: 'gallery',
  title: '圖片藝廊 (Gallery)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: '區塊標題',
      type: 'string',
    },
    {
      name: 'layout',
      title: '排列方式',
      type: 'string',
      options: {
        list: [
          { title: '網格排列 (Grid)', value: 'grid' },
          { title: '瀑布流 (Masonry)', value: 'masonry' },
        ],
        layout: 'radio'
      },
      initialValue: 'grid',
    },
    {
      name: 'images',
      title: '圖片列表',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: '圖片說明',
            },
            {
              name: 'alt',
              type: 'string',
              title: '替代文字',
            }
          ]
        }
      ],
      validation: (rule: any) => rule.min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
      images: 'images',
    },
    prepare({ title, images }: any) {
      return {
        title: title || 'Gallery',
        subtitle: `${images ? images.length : 0} 張圖片`,
        media: images && images[0],
      }
    },
  },
}