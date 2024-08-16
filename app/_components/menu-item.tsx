import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/components/theme'

export const MenuItem = styled(Link)<{ isActive?: boolean }>`
  text-decoration: none;
  display: block;
  padding: 16px;
  color: ${theme.textColorWhite};
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  background-color: ${props =>
    props.isActive ? theme.highlight : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.isActive ? theme.highlight : theme.hoverButton};
  }
`
