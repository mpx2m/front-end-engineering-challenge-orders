'use client'

import styled from 'styled-components'
import InputNumber from '@/components/input-number'
// import Select from '@/components/select'

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
  // const options = ['Option 1', 'Option 2', 'Option 3']

  return (
    <Container>
      <Title>Order Events</Title>
      <FormGroup>
        {/* <Select options={options} placeholder="Select an option" /> */}
        <Spacer />
        <InputNumber />
      </FormGroup>
    </Container>
  )
}

export default Forms
