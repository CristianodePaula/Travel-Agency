import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { introBtnAnime } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  border-bottom: 100px;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
  align-items: flex-end;
  position: absolute;
`
const Button = styled(motion.button)`
  bottom: 15%;
  font-size: 30px;
  padding: 20px;
  background: transparent;
  color: white;    
  text-shadow: 10px 5px 5px black;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background: darkred;
  }
  ${mobile({ 
    fontSize: '22px;'
  })}
`
export default function Buttom() {
  return (
    <Container>
     <NavLink to='/service'> 
        <Button type="button" variants={introBtnAnime} initial='initial' animate='animate' whileHover={{scale: 0.8}}> Faça um Tour </Button> 
      </NavLink>
    </Container>
  )
}
