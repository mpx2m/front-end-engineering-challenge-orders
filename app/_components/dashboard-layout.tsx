'use client'

import { type ReactNode } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Grid, Sider, Header, Content, Footer } from '@/components/layout'
import Avatar from '@/components/avatar'
import MenuItem from './menu-item'
import Logo from './logo'
import HeaderContent from './header-content'

interface DashBoardLayoutProps {
  children: ReactNode
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = ({ children }) => {
  const pathname = usePathname()

  const menuItems = [
    { href: '/', label: 'Order' },
    { href: '/restaurants', label: 'Restaurants' },
    { href: '/chef', label: 'Chef' },
    { href: '/analysis', label: 'Analysis' }
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
            $isActive={pathname === item.href}
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
      <Content>{children}</Content>
      <Footer>Fancy Food ©{new Date().getFullYear()} Created by Alan</Footer>
    </Grid>
  )
}

export default DashBoardLayout
