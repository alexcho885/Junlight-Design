export default {
  name: 'faqSection',
  title: '常見問答區塊 (FAQ)',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: '區塊標題',
      type: 'string',
      initialValue: '常見問題 FAQ',
    },
    {
      name: 'questions',
      title: '問答列表',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: '問題 (Q)',
              type: 'string',
              validation: (rule: any) => rule.required(),
            },
            {
              name: 'answer',
              title: '回答 (A)',
              type: 'text',
              rows: 3,
              validation: (rule: any) => rule.required(),
            }
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer'
            }
          }
        }
      ]
    },
  ],
  preview: {
    select: {
      title: 'title',
      questions: 'questions'
    },
    prepare({ title, questions }: any) {
      return {
        title: title || 'FAQ Section',
        subtitle: `${questions ? questions.length : 0} 個問答`,
      }
    },
  },
}