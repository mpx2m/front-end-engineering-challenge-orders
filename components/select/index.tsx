import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { theme, border, textColor, bg, boxShadow } from '@/components/theme'

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
`

const SelectButton = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 8px;
  border: ${({ $isOpen }) =>
    $isOpen ? `2px solid ${theme.hover}` : `1px solid ${border.color2}`};
  cursor: pointer;
  font-size: 16px;
  position: relative;

  &:hover {
    background-color: ${({ $isOpen }) => ($isOpen ? 'transparent' : bg.color2)};
  }
`

const OptionsContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 4px;
  background-color: ${bg.white};
  box-shadow: 0 2px 8px ${boxShadow.shadow1};
  max-height: 200px;
  overflow-y: auto;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  z-index: 100;
`

const Option = styled.div<{ $isSelected: boolean }>`
  padding: 10px;
  cursor: pointer;
  font-weight: ${({ $isSelected }) => ($isSelected ? '500' : 'normal')};
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.highlight2 : 'transparent'};
  text-align: left;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? theme.highlight2 : theme.primary2};
  }
`

const Placeholder = styled.span`
  color: ${textColor.color2};
`

const Arrow = styled.span<{ $isVisible: boolean }>`
  font-size: 12px;
  font-weight: 500;
  color: ${textColor.color2};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`

const ClearButton = styled.span`
  font-size: 14px;
  font-weight: 900;
  color: ${textColor.color2};
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.2s ease;
  &:hover {
    color: ${textColor.white};
    background-color: ${textColor.gray2};
  }
`

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder?: string
  onClear?: () => void
}

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  placeholder = 'Select an option',
  onClear
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  const handleSelect = (option: string) => {
    onChange(option)
    setIsOpen(false)
  }

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation()
    onChange('')
    setIsOpen(false) // Ensure the dropdown closes when clearing the value
    if (onClear) {
      onClear()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <Container ref={containerRef}>
      <SelectButton onClick={toggleOpen} $isOpen={isOpen}>
        {value || <Placeholder>{placeholder}</Placeholder>}
        {value && <ClearButton onClick={handleClear}>✕</ClearButton>}
        <Arrow $isVisible={!value}>{isOpen ? 'ᐱ' : 'ᐯ'}</Arrow>
      </SelectButton>
      <OptionsContainer $isOpen={isOpen}>
        {options.map(option => (
          <Option
            key={option}
            onClick={() => handleSelect(option)}
            $isSelected={option === value}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  )
}

export default Select
