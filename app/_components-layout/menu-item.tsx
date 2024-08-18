import Link from 'next/link'
import styled from 'styled-components'
import { theme, textColor } from '@/components/theme'

const MenuItem = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  display: block;
  padding: 16px;
  color: ${textColor.white};
  cursor: ${({ $isActive }) => ($isActive ? 'default' : 'pointer')};
  background-color: ${({ $isActive }) =>
    $isActive ? theme.highlight : 'transparent'};
  &:hover {
    background-color: ${({ $isActive }) =>
      $isActive ? theme.highlight : theme.hover};
  }
`

export default MenuItem
