import React from 'react'
import {
  Container,
  Button
} from './ButtonStyle'
import { NavLink } from 'react-router-dom'
import { introBtnAnime } from '../../resources/Animations'

export default function Buttom() {
  
  return (
    <Container>
     <NavLink to='/service'> 
        <Button 
        type="button" 
        variants={introBtnAnime} 
        initial='initial' 
        animate='animate' 
        whileHover={{scale: 0.8}}> 
          Faça um Tour 
        </Button> 
      </NavLink>
    </Container>
  )
}
