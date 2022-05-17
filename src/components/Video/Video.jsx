import React from 'react'
import {
  Container, 
  VideoContainer
} from './VideoStyle'
import VideoPlayer from 'react-video-js-player'
import travel from '../../videos/clients.mp4'
import { aboutAnime } from '../../resources/Animations'

export default function Video() {

  const videoSrc = travel
  const poster = "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  
  return (
    <Container>
      <VideoContainer 
        variants={aboutAnime} 
        initial='initial' 
        animate='animate'>
        <VideoPlayer 
          src={videoSrc} 
          poster={poster} 
          width='500' 
          height='300'/>
      </VideoContainer>
    </Container>
  )
}
