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
  pointer-events: none;
`

interface InputNumberProps {
  value: string
  onChange: (value: string) => void
}

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    const regex = /^\d*\.?\d{0,2}$/
    if (regex.test(inputValue)) {
      onChange(inputValue)
    }
  }

  return (
    <InputWrapper>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="0.00"
        min={0}
      />
      <CurrencySymbol>$</CurrencySymbol>
    </InputWrapper>
  )
}

export default InputNumber
