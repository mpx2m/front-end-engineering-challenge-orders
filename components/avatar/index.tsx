import styled from 'styled-components'
import { theme, textColor } from '@/components/theme'
import { AvatarProps } from './props'

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
  background: ${({ color }) => color || theme.primary};
  color: ${textColor.white};
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

export const Avatar: React.FC<AvatarProps> = ({ name, avatarColor }) => {
  return (
    <AvatarContainer>
      <AvatarBody color={avatarColor}>{name[0].toUpperCase()}</AvatarBody>
      <AvatarName>{name}</AvatarName>
    </AvatarContainer>
  )
}
