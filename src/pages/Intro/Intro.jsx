import {
  Container,
  Video,
  Icon,
  Text,
  Title,
  Paragraph,
  Image
} from './IntroStyle'
import family from '../../images/family.jpg'
import airplane from '../../images/airplane.png'
import home from '../../videos/home.mp4'
import Button from '../../components/Button/Button'
import {
  introAirpAnime,
  introTitleAnime,
  introParAnime
} from '../../resources/Animations'

export default function LeadingPage01() {

  return (
    <>
      <Container>
        <Video src={home}
          autoPlay
          muted
          loop
          style={{ position: "fixed" }} />
        <Icon
          src={airplane}
          variants={introAirpAnime}
          initial='initial'
          animate='animate' />

        <Text>
          <Title
            variants={introTitleAnime}
            initial='initial'
            animate='animate'> BEM VINDOS! </Title>
          <Paragraph
            variants={introParAnime}
            initial='initial'
            animate='animate' >
            Somos a agência de turismo Boa Viagem! Atuamos em todo o mundo
            com qualidade, conforto e segurança. Confira os nossos destinos!
          </Paragraph>
          <Image src={family} />
        </Text>
        <Button />
      </Container>
    </>
  )
}

