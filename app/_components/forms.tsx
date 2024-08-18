'use client'

import styled from 'styled-components'
import { useAppStore } from '@/lib/store/provider'
import InputNumber from '@/components/input-number'

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
  const inputDollars = useAppStore(state => state.inputDollars)
  const setInputDollars = useAppStore(state => state.setInputDollars)

  return (
    <Container>
      <Title>Order Events</Title>
      <FormGroup>
        <Spacer />
        <InputNumber value={inputDollars} onChange={setInputDollars} />
      </FormGroup>
    </Container>
  )
}

export default Forms
