import styled from 'styled-components'
import { motion } from 'framer-motion'
import family from '../img/family.jpg'
import airplane from '../img/airplane.png'
import Button from '../components/Button'
import home from '../video/home.mp4'
import {  introImgAnime , introAirpAnime, introTitleAnime, introParAnime } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh;  
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center; 

  ${mobile({
    display: 'flex',
    flexDirection: 'column'
})}
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit: cover;
`
const Icon = styled(motion.img)`
  width: 300px;
  display: flex; 
  position: absolute;
  top: 10%;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: absolute;
  color: white;
  text-shadow: 10px 5px 5px black;
`
const H2 = styled(motion.h1)`
  display: flex;
  margin-left: 10%;
  font-size: 50px;
  ${mobile({ 
    display: 'flex',
    fontSize: '35px',
    marginLeft: '20%',
    marginTop: '20%',
    alignItems: 'center'
})}
`
const P = styled(motion.p)`
  display: flex;
  max-width: 400px;
  margin-left: 17%;
  font-size: 30px;
  color: white;
  ${mobile({ 
    fontSize: '22px',
    textAlign: 'center',
})}
`
const Image = styled(motion.img)`
  width: 300px;
  height: 300px;
  margin: 600px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  box-shadow: 10px 5px 5px black;
  animation: ${introImgAnime} 3s forwards;
  ${mobile({ 
    width: '200px',
    height: '200px',
    margin: '-150px',
    marginBottom: '250px',
    alignItems: 'center',
})}
`
export default function LeadingPage01() {

  return (
  <>
    <Container>
    <Video src={home} autoPlay loop muted />
      <Icon src={airplane} variants={ introAirpAnime } initial='initial' animate='animate' />
      <Text>
        <H2 variants={ introTitleAnime } initial='initial' animate='animate'> BEM VINDOS </H2>
        <P variants={ introParAnime } initial='initial' animate='animate' > 
          Somos a agência de turismo Boa Viagem! Atuamentos em todo o mundo
          atuando com qualidade, conforto e segurança. Confira nossos pacotes! 
        </P>
        <Image src={family} />
      </Text>
      <Button />
    </Container>
  </>
  )
}





