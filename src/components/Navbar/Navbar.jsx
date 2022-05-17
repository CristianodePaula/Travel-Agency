import React from 'react'
import {
  Container,
  Menu,
  MenuLink
} from './NavbarStyle'
import { NavLink } from 'react-router-dom'
import { navbarAnime } from '../../resources/Animations'

export default function Navbar() {
  
  return (
    <Container>
      <Menu>
        <NavLink to='/service'>
          <MenuLink
            variants={navbarAnime}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              duration: 2,
              delay: '1'
            }}
          >Destinos
          </MenuLink>
        </NavLink>
        <NavLink to='/about'>
          <MenuLink
            variants={navbarAnime}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              duration: 2,
              delay: '1.3'
            }}
          >Empresa
          </MenuLink>
        </NavLink>
        <NavLink to='/contact'>
          <MenuLink
            variants={navbarAnime}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              duration: 2,
              delay: '1.6'
            }}
          >Contato
          </MenuLink>
        </NavLink>
        <NavLink to='/'>
          <MenuLink
            variants={navbarAnime}
            initial='initial'
            animate='animate'
            transition={{
              type: 'spring',
              duration: 2,
              delay: '1.9'
            }}
          >Início
          </MenuLink>
        </NavLink>
      </Menu>
    </Container>
  )
}


