import styled from 'styled-components'
import { theme, textColor } from '@/components/theme'

interface ButtonProps {
  $backgroundColor?: string
  $hoverBackgroundColor?: string
  $borderColor?: string
  color?: string
}

const BaseButton = styled.button<ButtonProps>`
  display: inline-block;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 50px;
  transition: background-color 0.15s ease-in-out;
  background-color: ${props => props.$backgroundColor || theme.primary};
  color: ${props => props.color || textColor.white};
  cursor: pointer;
  border: 1px solid ${props => props.$borderColor || 'transparent'};

  &:hover {
    background-color: ${props => props.$hoverBackgroundColor || theme.hover};
  }
`

export default BaseButton
