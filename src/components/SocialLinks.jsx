import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import {  FaTwitter, FaMailBulk, FaInstagram, FaFacebook } from 'react-icons/fa'
import { mobile } from '../resources/Responsive'

const Container = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: absolute;
  align-items: center;
  ${mobile({
    top: '-1%',
    alignItems: 'flex-end'
})}
`
const IconSocial = styled(motion.a)`
  display: flex;
  font-size: 30px;
  margin: 50px -80px 0px 130px;
  cursor: pointer;
  color: white;
  &:hover {color: yellow};
  z-index: 3;
  ${mobile({
    fontSize: '20px',
    color: 'black',
    marginLeft: '140px',
    marginBottom: '15px'
})}
` 
export default function SocialLinks() {
  return (
    <Container>
      <IconSocial 
        initial={{transform: 'scale(0)'}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type: 'spring', duration: 1, delay: '3.3'}}
      ><FaTwitter /></IconSocial>

      <IconSocial 
        initial={{transform: 'scale(0)'}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type: 'spring', duration: 1, delay: '3.6'}}
      ><FaInstagram /></IconSocial>
          
      <IconSocial 
        initial={{transform: 'scale(0)'}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type: 'spring', duration: 1, delay: '3.9'}}
      ><FaMailBulk /></IconSocial>
           
      <IconSocial 
        initial={{transform: 'scale(0)'}}
        animate={{scale:[0,1,1.5,1]}}
        transition={{type: 'spring', duration: 1, delay: '4.1'}}
      ><FaFacebook /></IconSocial>
    </Container>
  )
}
