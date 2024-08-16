'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Grid, Sider, Header, Content, Footer } from '@/components/layout'
import { Avatar } from '@/components/avatar'
import { MenuItem } from './_components/menu-item'
import { Logo } from './_components/logo'
import { HeaderContent } from './_components/header-content'

const Page: React.FC = () => {
  const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/analytics', label: 'Analytics' },
    { href: '/restaurants', label: 'Restaurants' },
    { href: '/chef', label: 'Chef' }
  ]

  return (
    <Grid>
      <Sider style={{ paddingTop: 64 }}>
        <Logo>
          <Image
            src="/images/app-logo.png"
            alt="Logo"
            width={160}
            height={31}
            priority
          />
        </Logo>
        {menuItems.map(item => (
          <MenuItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </Sider>
      <Header>
        <HeaderContent>
          <Avatar name="admin" avatarColor="rgb(72, 160, 172)" />
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

export default Page
