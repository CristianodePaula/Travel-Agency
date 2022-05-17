import { useEffect, useRef } from 'react'
import {
  Container,
  BackContainer,
  Background,
  Text
} from './AboutStyle'
import { init } from 'ityped'
import hoverEffect from 'hover-effect'
import Navbar from '../../components/Navbar/Navbar'
import image01 from '../../images/hotel.jpg'
import image02 from '../../images/pass.jpg'
import overlay from '../../images/overlay.png'
import Video from '../../components/Video/Video'

export default function About() {

  useEffect(() => {
    background()
  }, [])

  useEffect(() => {
    init(welcome.current, {
      showCursor: false,
      backDelay: 1000,
      backSpeed: 100,
      strings: ['Conheça nossa empresa!', 'Confira o vídeo!']
    })
  }, [])

  const welcome = useRef()

  function background() {
    new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: .3,
      image1: image01,
      image2: image02,
      displacementImage: overlay
    })
  }

  return (
    <>
      <Navbar />
      <Container>
        <BackContainer className="item">
          <Background className="item-image"></Background>
        </BackContainer>
        <Video />
        <Text ref={welcome}></Text>
      </Container>
    </>
  )
}


