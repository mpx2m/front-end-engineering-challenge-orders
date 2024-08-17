import styled from 'styled-components'
import { theme, bg, textColor, breakpoint } from '@/components/theme'

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'sider header'
    'sider content'
    'sider footer';
  grid-template-columns: 200px minmax(0, 1fr);
  grid-template-rows: 64px 1fr auto;
  background: ${bg.color4};
  color: ${textColor.color1};
  min-height: 100vh;
  min-width: ${breakpoint.lg};
  overflow-x: auto;
`

export const Sider = styled.div`
  grid-area: sider;
  background: ${theme.primary};
  color: ${textColor.white};
`

export const Header = styled.div`
  grid-area: header;
  background: ${bg.color1};
`

export const Content = styled.div`
  grid-area: content;
  margin: 24px 16px;
`

export const Footer = styled.div`
  grid-area: footer;
  font-size: 12px;
  text-align: center;
  margin-bottom: 16px;
  color: ${textColor.color2};
`
