import React from 'react'
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

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const CurrencySymbol = styled.div`
  position: absolute;
  right: 10px;
  color: ${textColor.color2};
`

interface InputNumberProps {
  value: number
  onChange: (value: number) => void
}

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    // Remove non-numeric characters except decimal point
    const formattedValue = parseFloat(inputValue)

    // Only update value if it's a valid number
    if (!isNaN(formattedValue)) {
      onChange(formattedValue)
    }
  }

  return (
    <InputWrapper>
      <Input
        type="number"
        value={value || ''}
        onChange={handleChange}
        placeholder="0.00"
        step="0.01" // Allows decimal numbers with two decimal places
      />
      <CurrencySymbol>$</CurrencySymbol>
    </InputWrapper>
  )
}

export default InputNumber
