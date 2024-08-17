import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
`

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  position: relative;
`

const OptionsContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`

const Option = styled.div<{ $isSelected: boolean }>`
  padding: 8px;
  cursor: pointer;
  font-weight: ${({ $isSelected }) => ($isSelected ? '500' : 'normal')};
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.highlight2 : 'transparent'};
  text-align: left; /* Ensure the text is left-aligned */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected
        ? theme.highlight2
        : '#f5f5f5'}; /* Hover color for selected and non-selected items */
  }
`

const Placeholder = styled.span`
  color: #999;
`

const Arrow = styled.span<{ $isVisible: boolean }>`
  font-size: 10px;
  color: #333;
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`

const ClearButton = styled.span`
  font-size: 14px;
  color: #999;
  cursor: pointer;
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px; /* Set a fixed width */
  height: 20px; /* Set a fixed height */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* Make it circular */
  background-color: transparent; /* Default background color */
  transition: background-color 0.3s ease; /* Smooth transition for background color change */

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.2); /* Darker background on hover */
  }
`

interface SelectProps {
  options: string[]
  placeholder?: string
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option'
}) => {
  const [$isOpen, set$isOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    set$isOpen(prevState => !prevState)
  }

  const handleSelect = (option: string) => {
    setSelected(option)
    set$isOpen(false)
  }

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation()
    setSelected(null)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        set$isOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <Container ref={containerRef}>
      <SelectButton onClick={toggleOpen}>
        {selected || <Placeholder>{placeholder}</Placeholder>}
        {selected && <ClearButton onClick={handleClear}>✕</ClearButton>}
        <Arrow $isVisible={!selected}>{$isOpen ? 'ᐱ' : 'ᐯ'}</Arrow>
      </SelectButton>
      <OptionsContainer $isOpen={$isOpen}>
        {options.map(option => (
          <Option
            key={option}
            onClick={() => handleSelect(option)}
            $isSelected={option === selected}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  )
}

export default Select
