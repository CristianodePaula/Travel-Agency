import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
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
export const Menu = styled(motion.ul)`
  display: flex;
  margin: 30px;
`
export const MenuLink = styled(motion.li)`
  margin: 30px;
  list-style: none;
  font-size: 25px;
  color: white;
  width: 100px;
  text-shadow: 1px 4px 4px black;
  cursor: pointer;
  &:hover {
    color: black; 
  }
  ${mobile({
  fontSize: '17px'
})}
`