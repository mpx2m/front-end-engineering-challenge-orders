'use client'

import styled from 'styled-components'
import StatusPanel from './_components/status-panel'
import { bg } from '@/components/theme'
import Forms from './_components/forms'
import TableArea from './_components/table-area'

const Content = styled.div`
  margin-top: 24px;
  padding: 24px;
  background: ${bg.color1};
  min-height: 400px;
`

const Page: React.FC = () => {
  return (
    <>
      <StatusPanel />
      <Content>
        <Forms />
        <TableArea />
      </Content>
    </>
  )
}

export default Page
