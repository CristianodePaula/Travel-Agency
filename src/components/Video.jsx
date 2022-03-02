import React from 'react'
import styled from 'styled-components'
import VideoPlayer from 'react-video-js-player'
import { motion } from 'framer-motion'
import company from '../video/company.mp4'
import { aboutAnime } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh;
  width: 100vw;  
  display: flex;
  position: absolute;
  max-width: 500px;
  max-height: 300px;
  ${mobile({
    maxWidth: '400px',
    maxHeight: '250px'
  })}
`
const VideoContainer = styled(motion.div)`
  border-radius: 10px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
`
export default function Video() {

    const videoSrc = company
    const poster = "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  
  return (
    <Container>
      <VideoContainer variants={aboutAnime} initial='initial' animate='animate'>
        <VideoPlayer src={videoSrc} poster={poster} width='500' height='300'/>
      </VideoContainer>
    </Container>
  )
}
