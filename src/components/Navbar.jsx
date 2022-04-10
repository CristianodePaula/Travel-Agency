import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navbarAnime } from '../resources/Animations'
import { mobile } from '../resources/Responsive'

const Container = styled.div`
  height: 90px;
  width: 100vw;
  top: -40px; 
  display: flex;
  align-items: start;
  justify-content: center;
  position: fixed;
  object-fit: cover;
  overflow: hidden;
  z-index: 2;
`
const Menu = styled(motion.ul)`
  display: flex;
  margin: 30px;
`
const MenuLink = styled(motion.li)`
  margin: 30px;
  list-style: none;
  font-size: 25px;
  color: white;
  width: 100px;
  text-shadow: 10px 5px 5px black;
  cursor: pointer;
  &:hover {
    color: black; 
  }
  ${mobile({
    fontSize: '20px'
})}
`
export default function Navbar() {
  return (
    <Container>
        <Menu>
        
        <NavLink to='/service'>
          <MenuLink variants={navbarAnime} initial='initial' animate='animate'
          transition={{type: 'spring', duration: 2, delay: '1'}}
          >Destinos</MenuLink>
        </NavLink>

        <NavLink to='/about'>
          <MenuLink variants={navbarAnime} initial='initial' animate='animate'
          transition={{type: 'spring', duration: 2, delay: '1.3'}}
          >Empresa</MenuLink>
        </NavLink>

        <NavLink to='/contact'>
          <MenuLink variants={navbarAnime} initial='initial' animate='animate'
          transition={{type: 'spring', duration: 2, delay: '1.6'}}
          >Contato</MenuLink>
        </NavLink>

        <NavLink to='/'>
          <MenuLink variants={navbarAnime} initial='initial' animate='animate'
          transition={{type: 'spring', duration: 2, delay: '1.9'}}
          >Início</MenuLink>
        </NavLink>
    
        </Menu>
    </Container>
  )
}


