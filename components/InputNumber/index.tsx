import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  width: 250px;
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

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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

    // 正则表达式验证并格式化输入值，最多两位小数
    const formattedValue = inputValue
      .replace(/[^0-9.]/g, '') // 移除非数字和非小数点字符
      .replace(/(\..*)\./g, '$1') // 只允许一个小数点
      .replace(/^(\d*\.)(\d{2}).*$/, '$1$2') // 限制小数点后两位
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
