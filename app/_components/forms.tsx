'use client'

import { useState } from 'react'
import styled from 'styled-components'
import InputNumber2 from '@/components/input-number/index2'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 36px;
`

const FormGroup = styled.div``

const Spacer = styled.span`
  margin-right: 16px;
`

const Forms: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <Container>
      <Title>Order Events</Title>
      <FormGroup>
        <Spacer />
        <InputNumber2 value={value} onChange={setValue} />
      </FormGroup>
    </Container>
  )
}

export default Forms
