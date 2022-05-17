import React, { useEffect, useRef } from 'react'
import {
  Container,
  Video,
  Gallery,
  Destination,
  Image,
  Title,
  Text
} from './ServiceStyle'
import { init } from 'ityped'
import Navbar from '../../components/Navbar/Navbar'
import trip from '../../videos/trip.mp4'
import { dataService } from '../../data/Data'
import {
  serviceGAnime,
  serviceImgAnime
} from '../../resources/Animations'

export default function Service() {

  const welcome = useRef();

  useEffect(() => {
    init(welcome.current, {
      showCursor: false,
      backDelay: 4000,
      backSpeed: 100,
      strings: ['Confira nossos destinos!', 'Clique para saber mais!']
    })
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Video autoPlay loop muted src={trip} />
        <Gallery
          variants={serviceGAnime}
          initial='initial'
          animate='animate'>
          {dataService.map((img, index) => (
            <div key={index} >
              <Destination
                variants={serviceImgAnime}
                whileHover={{
                  scale: 1.2,
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    delay: 0.2,
                    ease: 'easeInOut'
                  }
                }}>
                <Image src={img.imageUrl} />
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