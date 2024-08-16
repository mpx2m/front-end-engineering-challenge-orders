import styled from 'styled-components'
import Image from 'next/image'
import { theme } from '@/components/theme'
import Button from '@/components/button'

const Container = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: 1fr 1fr;
  height: 500px;
`

const TextSection = styled.div`
  grid-area: text;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const Title = styled.section`
  font-style: italic;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
  text-align: center;
`

const LoremIpsum = styled.section`
  font-style: normal;
  text-align: center;
  color: ${theme.textGray100};
`

const ImageSection = styled.div`
  grid-area: image;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const BlankPage: React.FC = () => {
  return (
    <Container>
      <TextSection>
        <Title>Blank Page</Title>
        <LoremIpsum>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore.
        </LoremIpsum>
        <Button>Primary Button</Button>
      </TextSection>
      <ImageSection>
        <Image
          src="/images/blank-page.png"
          alt="Blank Page"
          width={480}
          height={297}
          priority
        />
      </ImageSection>
    </Container>
  )
}

export default BlankPage
