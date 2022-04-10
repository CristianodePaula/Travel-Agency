import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { init } from 'ityped'
import hoverEffect from 'hover-effect'
import Navbar from '../components/Navbar'
import image from '../img/hotel1.jpg'
import image2 from '../img/pass.jpg'
import overlay from '../img/overlay.png'
import Video from '../components/Video'
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
const BackContainer = styled.div`
  width: 100vw;
`
const Background = styled.div`
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
const Text = styled.div`
  display: flex;
  position: absolute;
  font-size: 30px;
  bottom: 5%;
  color: white;
  text-shadow: 10px 5px 5px black;
  ${mobile({
    fontSize: '20px'
})}
`
export default function About() {

  useEffect(()=> {
    var backgroundAnimate = new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: .3,
      image1: image,
      image2: image2,
      displacementImage: overlay
    })
  })

  const welcome = useRef(); 

  useEffect(() => {
      init(welcome.current,{
          showCursor: false,
          backDelay: 1000,
          backSpeed: 100,
          strings: [ 'Conheça nossa empresa!', 'Confira o vídeo!']
      })
  },[])      

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

