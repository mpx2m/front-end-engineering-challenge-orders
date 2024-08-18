'use client'

import styled from 'styled-components'
import { useAppStore } from '@/lib/store/provider'
import InputNumber from '@/components/input-number'
import Select from '@/components/select'
import { useState } from 'react'

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

  const [selected, setSelected] = useState('')

  const handleSelectChange = (value: string) => {
    setSelected(value)
  }

  const handleClear = () => {
    setSelected('')
  }

  const options: string[] = ['handleClear', 'handleClear2']

  return (
    <Container>
      <Title>Order Events</Title>
      <FormGroup>
        <Select
          options={options}
          placeholder="Event"
          value={selected}
          onClear={handleClear}
          onChange={handleSelectChange}
        />
        <Spacer />
        <InputNumber value={inputDollars} onChange={setInputDollars} />
      </FormGroup>
    </Container>
  )
}

export default Forms
