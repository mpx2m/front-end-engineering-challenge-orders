import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/components/theme'

export const MenuItem = styled(Link)<{ active?: boolean }>`
  text-decoration: none;
  display: block;
  padding: 16px;
  color: ${theme.textColorWhite};
  cursor: ${props => (props.active ? 'default' : 'pointer')};
  background-color: ${props =>
    props.active ? theme.highlight : 'transparent'};
  &:hover {
    background-color: ${props =>
      props.active ? theme.highlight : theme.hoverButton};
  }
`
