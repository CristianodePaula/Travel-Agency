import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import { init } from 'ityped'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import trip from '../video/trip.mp4'
import { dataService } from '../resources/Data'
import { serviceGAnime, serviceImgAnime } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;  
`
const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit: cover;
`
const Gallery = styled(motion.div)`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 70px;
  grid-row-gap: 0px;
  position: absolute;
  ${mobile({
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '10px',
    gridRowGap: '0px'
})}
`   
const Destination = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 10px 5px 5px black;
  font-size: 10px;
  height: 250px;
  ${mobile({
    fontSize: '7px'
})}
` 
const Image = styled(motion.img)`
  height: 150px;
  width: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  ${mobile({
    height: '180px',
    width: '110px'
})}
`
const Title = styled.h1`
`
const Text = styled.div`
  display: flex;
  position: absolute;
  font-size: 30px;
  color: white;
  bottom: 5%;
  ${mobile({
    fontSize: '20px'
})}
`
export default function Service() {

  const welcome = useRef(); 

  useEffect(() => {
      init(welcome.current,{
          showCursor: false,
          backDelay: 4000,
          backSpeed: 100,
          strings: [ 'Confira nossos destinos!', 'Clique para saber mais!']
      })
  },[])      

  return (
    <>
    <Navbar />
    <Container> 
      <Video autoPlay loop muted src={trip} />
      <Gallery variants={serviceGAnime} initial='initial' animate='animate'>  
        {dataService.map((img, index) => ( 
          <div key={index} > 
          <Destination  variants={serviceImgAnime} 
           whileHover={{ scale: 1.2, opacity: 1, transition: { duration: 0.5 , delay: 0.2, ease: 'easeInOut'}}}>
            <Image src={img.imageUrl}/>
            <Title>{img.title}</Title>
          </Destination>
          </div>  
        ))}  
      </Gallery>
      <Text ref={welcome}></Text>
    </Container>
    </>
  )
}