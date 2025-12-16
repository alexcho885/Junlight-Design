import React, { useEffect, useState } from 'react'
import { Card, Flex, Heading, Text, Button, Stack, Spinner, Avatar, Box, Grid, Badge } from '@sanity/ui'
import { AddIcon, EnvelopeIcon, EditIcon, PublishIcon } from '@sanity/icons'
import { useClient } from 'sanity'
import { IntentLink } from 'sanity/router'

// ----------------------------------------------------------------------
// 1. Welcome Widget (早安，純光設計)
// ----------------------------------------------------------------------
export function WelcomeWidget() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? '早安' : hour < 18 ? '午安' : '晚安'

  return (
    <Card 
      radius={4} 
      padding={5} 
      style={{
        // 使用品牌 Banner 作為背景，並疊加品牌色漸層以確保文字清晰
        backgroundImage: 'linear-gradient(135deg, rgba(46, 92, 110, 0.9) 0%, rgba(224, 138, 102, 0.8) 100%), url(/images/banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white'
      }}
    >
      <Flex direction="column" align="flex-start" gap={4}>
        <Box paddingBottom={2}>
          <Heading size={4} style={{ color: 'white', fontFamily: '"Noto Serif TC", serif' }}>
            {greeting}，純光設計
          </Heading>
        </Box>
        <Text size={2} style={{ color: 'rgba(255,255,255,0.9)' }}>
          以光為名，設計每一份純粹的溫度。祝您今天工作順利！
        </Text>
      </Flex>
    </Card>
  )
}

// ----------------------------------------------------------------------
// 2. Project List Widget (最近編輯的 5 個作品)
// ----------------------------------------------------------------------
export function ProjectListWidget() {
  const client = useClient({ apiVersion: '2024-01-01' })
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "project"] | order(_updatedAt desc)[0...5] {
      _id,
      title,
      category,
      "imageUrl": mainImage.asset->url,
      _updatedAt
    }`

    client.fetch(query).then((data) => {
      setProjects(data)
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [client])

  return (
    <Card radius={3} padding={4} tone="transparent">
      <Stack space={4}>
        <Heading size={1}>最近編輯的作品</Heading>
        
        {loading ? (
          <Flex align="center" justify="center" padding={4}>
            <Spinner />
          </Flex>
        ) : projects.length === 0 ? (
          <Text size={1} muted>目前尚無作品資料</Text>
        ) : (
          <Stack space={3} as="ul" style={{ padding: 0, margin: 0 }}>
            {projects.map((project) => (
              <Card 
                key={project._id} 
                as="li" 
                padding={2} 
                radius={2} 
                shadow={1} 
                tone="default"
              >
                <Flex align="center" gap={3}>
                  <Avatar 
                    src={project.imageUrl} 
                    initials={project.title.substring(0, 1)} 
                    size={1} 
                  />
                  <Box flex={1}>
                    <Text size={1} weight="semibold">
                      {/* IntentLink 連結到編輯頁面 */}
                      <IntentLink 
                        intent="edit" 
                        params={{ id: project._id, type: 'project' }}
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        {project.title}
                      </IntentLink>
                    </Text>
                    <Text size={0} muted>{project.category}</Text>
                  </Box>
                  <Text size={0} muted>
                    <EditIcon style={{ marginRight: '4px' }} />
                    {new Date(project._updatedAt).toLocaleDateString()}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}

// ----------------------------------------------------------------------
// 3. Quick Actions Widget (快速操作)
// ----------------------------------------------------------------------
export function QuickActionsWidget() {
  return (
    <Grid columns={[1, 2]} gap={3}>
      {/* 按鈕 1: 新增作品 */}
      <Card radius={3} padding={4} tone="primary" shadow={1}>
        <Stack space={3}>
          <Flex align="center" gap={2}>
            <AddIcon style={{ fontSize: '24px' }} />
            <Heading size={1}>新增作品</Heading>
          </Flex>
          <Text size={1} muted>上傳新的設計案例到作品集。</Text>
          <Box marginTop={2}>
            <IntentLink 
              intent="create" 
              params={{ type: 'project', template: 'project' }}
              style={{ textDecoration: 'none' }}
            >
              <Button text="建立新作品" tone="primary" mode="ghost" />
            </IntentLink>
          </Box>
        </Stack>
      </Card>

      {/* 按鈕 2: 查看詢價單 (模擬) */}
      <Card radius={3} padding={4} tone="caution" shadow={1}>
        <Stack space={3}>
          <Flex align="center" gap={2}>
            <EnvelopeIcon style={{ fontSize: '24px' }} />
            <Heading size={1}>查看詢價單</Heading>
          </Flex>
          <Text size={1} muted>管理來自網站表單的聯絡訊息。</Text>
          <Box marginTop={2}>
            {/* 由於尚未建立 Inquiry Schema，這裡暫時連結到網站設定或 Gmail */}
            <Button 
              text="前往信箱查看" 
              tone="caution" 
              mode="ghost" 
              onClick={() => window.open('https://gmail.com', '_blank')}
            />
          </Box>
        </Stack>
      </Card>
    </Grid>
  )
}

// ----------------------------------------------------------------------
// 4. Vercel Status Widget (部署狀態)
// ----------------------------------------------------------------------
export function VercelStatusWidget() {
  return (
    <Card radius={3} padding={4} shadow={1} border>
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={3}>
          <Box 
            style={{ 
              width: 40, 
              height: 40, 
              backgroundColor: 'black', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 1155 1000" fill="currentColor">
              <path d="M577.344 0L1154.69 1000H0L577.344 0Z" />
            </svg>
          </Box>
          <Stack space={2}>
            <Heading size={1}>Vercel Deployment</Heading>
            <Text size={1} muted>Production</Text>
          </Stack>
        </Flex>
        
        <Flex align="center" gap={2}>
           {/* 模擬狀態，實際專案可使用 Vercel API 或 Widget */}
           <Badge tone="positive" mode="outline">● Live</Badge>
           <Text size={1} muted>Latest build: Just now</Text>
        </Flex>
      </Flex>
    </Card>
  )
}