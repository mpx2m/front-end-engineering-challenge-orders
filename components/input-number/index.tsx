import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-flex; /* Changed from flex to inline-flex for inline display */
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  width: auto; /* Allow width to adjust based on content */
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
`

const Input = styled.input`
  letter-spacing: 1px;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  flex: 1;
  text-align: right;
  padding-right: 30px;
  width: 100%; /* Ensure input takes full width of the container */
`

const CurrencySymbol = styled.div`
  position: absolute;
  right: 10px;
  font-size: 16px;
  color: #333;
`

const InputNumber: React.FC = () => {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    const formattedValue = inputValue
      .replace(/[^0-9.]/g, '') // Remove non-numeric and non-period characters
      .replace(/(\..*)\./g, '$1') // Allow only one decimal point
      .replace(/^(\d*\.)(\d{2}).*$/, '$1$2') // Limit to two decimal places

    console.log(inputValue)
    setValue(formattedValue)
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="0.00"
        />
        <CurrencySymbol>$</CurrencySymbol>
      </InputWrapper>
    </Container>
  )
}

export default InputNumber
