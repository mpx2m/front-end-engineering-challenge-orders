import styled from 'styled-components'
import { textColor, bg } from '@/components/theme'
import Button from '@/components/button'
import { useRouter } from 'next/navigation'

const Container = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: 1fr 1fr;
  height: 500px;
  align-items: center;
  justify-items: center;
`

const TextSection = styled.div`
  grid-area: text;
  padding-left: 40px;
`

const Title = styled.section`
  font-style: italic;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 16px;
`

const LoremIpsum = styled.section`
  color: ${textColor.gray3};
  line-height: 1.3;
`

const ImageSection = styled.div`
  grid-area: image;
  width: 100%;
  height: 100%;
  background-image: url('/images/blank-page.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

const BlankPage: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <TextSection>
        <Title>Blank Page</Title>
        <LoremIpsum>
          This page is left blank, offering space to create something new. Enjoy
          a serving of purple sweet potato while you're at it!
        </LoremIpsum>
        <Button
          onClick={() => router.push('/')}
          style={{ marginTop: 45 }}
          color={textColor.gray3}
          $backgroundColor={bg.color1}
          $hoverBackgroundColor={bg.color2}
          $borderColor={textColor.gray1}
        >
          Back to Order
        </Button>
      </TextSection>
      <ImageSection />
    </Container>
  )
}

export default BlankPage
