import React, { useState } from 'react'
import styled from 'styled-components'

// 定义样式
const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  width: 250px; /* 调整宽度以适应美元符号 */
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative; /* 设置相对定位，以便子元素可以绝对定位 */
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const CurrencySymbol = styled.div`
  position: absolute;
  right: 10px; /* 可以根据需要调整 */
  font-size: 16px;
  color: #333;
`

// 定义组件
const InputNumber: React.FC = () => {
  const [value, setValue] = useState<number>(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <Container>
      <InputWrapper>
        <Input
          type="number"
          value={value}
          onChange={handleChange}
          aria-label="Amount"
        />
        <CurrencySymbol>$</CurrencySymbol>
      </InputWrapper>
    </Container>
  )
}

export default InputNumber
