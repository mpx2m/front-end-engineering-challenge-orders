import React, { useState } from 'react'
import styled from 'styled-components'
import { theme, border, textColor, bg } from '@/components/theme'

const InputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const Input = styled.input`
  border-radius: 8px;
  letter-spacing: 1px;
  padding: 8px;
  padding-left: 12px;
  padding-right: 20px;
  border: 1px solid ${border.color2};
  background-color: transparent;

  &::placeholder {
    color: ${textColor.color2};
  }

  &:hover {
    background-color: ${bg.color2};
  }

  &:focus {
    background-color: transparent;
    border: 2px solid ${theme.hover};
    outline: none;
  }
`

const CurrencySymbol = styled.div`
  position: absolute;
  right: 10px;
  color: ${textColor.color2};
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
    <InputWrapper>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="0.00"
      />
      <CurrencySymbol>$</CurrencySymbol>
    </InputWrapper>
  )
}

export default InputNumber
