import Link from 'next/link'
import styled from 'styled-components'
import { theme, textColor } from '@/components/theme'

const MenuItem = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  display: block;
  padding: 16px;
  color: ${textColor.white};
  cursor: ${props => (props.$isActive ? 'default' : 'pointer')};
  background-color: ${props =>
    props.$isActive ? theme.highlight : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.$isActive ? theme.highlight : theme.hover};
  }
`

export default MenuItem
