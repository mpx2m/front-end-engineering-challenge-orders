import styled from 'styled-components'
import { theme } from '@/components/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'sider header'
    'sider content'
    'sider footer';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 64px 1fr auto;
  background: ${theme.backgroundColor400};
  color: ${theme.textColor100};
  min-height: 100vh;
  overflow: auto;
`

export const Sider = styled.div`
  grid-area: sider;
  background: ${theme.primary};
  color: ${theme.textColorWhite};
`

export const Header = styled.div`
  grid-area: header;
  background: ${theme.backgroundColor100};
`

export const Content = styled.div`
  grid-area: content;
  margin: 24px 16px;
  background: ${theme.backgroundColor100};
`

export const Footer = styled.div`
  grid-area: footer;
  font-size: 12px;
  text-align: center;
  margin-bottom: 16px;
  color: ${theme.textColor200};
`
