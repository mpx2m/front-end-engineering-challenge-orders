'use client'

import styled from 'styled-components'
import { bg } from '@/components/theme'

export const Container = styled.div`
  display: flex;
  background: ${bg.color1};
  padding: 20px;
  justify-content: justify-around;
`

export const Item = styled.div`
  background: ${bg.color1};
  text-align: center;
`

export const ItemTitle = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
`
export const ItemContent = styled.div`
  font-size: 24px;
`

const StatusPanel: React.FC = () => {
  const data = [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title3', content: 'content3' }
  ]

  return (
    <Container>
      {data.map(item => (
        <Item key={item.title}>
          <ItemTitle> {item.title}</ItemTitle>
          <ItemContent> {item.content}</ItemContent>
        </Item>
      ))}
    </Container>
  )
}

export default StatusPanel
