'use client'

import Image from 'next/image'
import styled from 'styled-components'

const colors = {
  backgroundColor100: 'rgb(255, 254, 246)',
  backgroundColor200: 'rgb(248, 246, 236)',
  backgroundColor300: 'rgb(242, 240, 228)',
  backgroundColor400: 'rgb(228, 226, 213)',
  textColorWhite: 'white',
  textColor100: '#807b67',
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
  grid-template-rows: 64px 1fr;
  background: ${colors.backgroundColor400};
`

const Sider = styled.div`
  grid-area: sider;
  background: ${colors.primary};
  color: #${colors.textColorWhite};
  padding-top: 64px;
`

const Header = styled.div`
  grid-area: header;
  background: ${colors.highlight};
`

const Content = styled.div`
  grid-area: content;
  margin: 24px 16px;
  background: ${colors.backgroundColor100};
`

const Footer = styled.div`
  grid-area: footer;
  font-size: 10px;
  text-align: center;
  margin-bottom: 16px;
  color: ${colors.textColor100};
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
  width: 160px;
  padding: 16px;
`

const App: React.FC = () => {
  return (
    <Grid>
      <Sider>
        <Logo>
          <Image
            src="/images/app-logo.png"
            alt="Logo"
            layout="responsive"
            width={886}
            height={168}
          />
        </Logo>
        <MenuItem>Home</MenuItem>
        <MenuItem>Analytics</MenuItem>
        <MenuItem>Cloud</MenuItem>
        <MenuItem>Videos</MenuItem>
      </Sider>
      <Header />
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
