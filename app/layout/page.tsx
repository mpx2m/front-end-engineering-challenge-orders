'use client'

import Image from 'next/image'
import styled from 'styled-components'

const colors = {
  backgroundColor100: 'rgb(255, 254, 246)',
  backgroundColor200: 'rgb(248, 246, 236)',
  backgroundColor300: 'rgb(242, 240, 228)',
  backgroundColor400: 'rgb(228, 226, 213)',
  textColorWhite: 'white',
  textColor100: 'rgb(50, 48, 35)',
  textColor200: 'rgb(128, 123, 103)',
  primary: 'rgb(47, 63, 58)',
  highlight: 'rgb(210, 111, 80)',
  borderColor100: 'rgb(226, 226, 213)'
}

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    'sider header'
    'sider content'
    'sider footer';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 64px 1fr auto;
  background: ${colors.backgroundColor400};
  color: ${colors.textColor100};
`

const Sider = styled.div`
  grid-area: sider;
  background: ${colors.primary};
  color: ${colors.textColorWhite};
  padding-top: 64px;
`

const Header = styled.div`
  grid-area: header;
  background: ${colors.backgroundColor100};
`

const Content = styled.div`
  grid-area: content;
  margin: 24px 16px;
  background: ${colors.backgroundColor100};
`

const Footer = styled.div`
  grid-area: footer;
  font-size: 12px;
  text-align: center;
  margin-bottom: 16px;
  color: ${colors.textColor200};
`

const MenuItem = styled.div`
  padding: 16px;
  color: ${colors.textColorWhite};
  cursor: pointer;

  &:hover {
    background-color: ${colors.highlight};
  }
`

const Logo = styled.div`
  margin-left: 16px;
  width: 160px;
  height: 80px;
  position: relative;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 6px;
  height: 64px;
`

const AvatarContainer = styled.div`
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const AvatarBody = styled.span<{ color?: string }>`
  display: inline-block;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ color }) => color || colors.primary};
  color: ${colors.textColorWhite};
  margin-right: 8px;
  font-size: 16px;
  text-align: center;
  line-height: 34px;
`

const AvatarName = styled.span`
  font-size: 14px;
  height: 34px;
  line-height: 34px;
`

interface AvatarProps {
  name: string
  color?: string
}

const Avatar: React.FC<AvatarProps> = ({ name, color }) => {
  return (
    <AvatarContainer>
      <AvatarBody color={color}>{name[0].toUpperCase()}</AvatarBody>
      <AvatarName>{name}</AvatarName>
    </AvatarContainer>
  )
}

const App: React.FC = () => {
  return (
    <Grid>
      <Sider>
        <Logo>
          <Image
            src="/images/app-logo.png"
            alt="Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Logo>
        <MenuItem>Home</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <MenuItem>Restaurants</MenuItem>
        <MenuItem>Chef</MenuItem>
      </Sider>
      <Header>
        <HeaderContent>
          <Avatar name="admin" color="rgb(72, 160, 172)" />
        </HeaderContent>
      </Header>
      <Content>
        <div
          style={{
            padding: 24,
            textAlign: 'center'
          }}
        >
          <p>long content</p>
          {Array.from({ length: 100 }, (_, index) => (
            <div key={index}>
              {index % 20 === 0 && index ? 'more' : '...'}
              <br />
            </div>
          ))}
        </div>
      </Content>
      <Footer>Fancy Food ©{new Date().getFullYear()} Created by Alan</Footer>
    </Grid>
  )
}

export default App
