'use client'

import Image from 'next/image'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'sider header'
    'sider content'
    'sider footer';
  grid-template-columns: 200px 1fr;
  grid-template-rows: 64px 1fr;
`

const Sider = styled.div`
  grid-area: sider;
  background: rgb(34, 45, 38);
  color: #fff;
  padding-top: 64px;
`

const Header = styled.div`
  grid-area: header;
  background: gray;
`

const Content = styled.div`
  grid-area: content;
  padding: 24px 16px;
  background: rgb(248, 246, 236);
`

const Footer = styled.div`
  grid-area: footer;
  font-size: 10px;
  text-align: right;
  padding: 20px 14px;
  border-top: 1px solid rgb(226, 226, 213);
  background: rgb(248, 246, 236);
  color: #807b67;
`

const MenuItem = styled.div`
  padding: 16px;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: rgb(209, 111, 79);
  }
`

const Logo = styled.div`
  width: 160px;
  padding: 16px;
`

const App: React.FC = () => {
  return (
    <Layout>
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
        <MenuItem>Shop</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Upload</MenuItem>
        <MenuItem>Users</MenuItem>
        <MenuItem>Videos</MenuItem>
      </Sider>
      <Header />
      <Content>
        <div
          style={{
            padding: 24,
            textAlign: 'center',
            backgroundColor: 'gray'
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
    </Layout>
  )
}

export default App
