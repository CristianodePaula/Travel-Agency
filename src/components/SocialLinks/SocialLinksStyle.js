import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled(motion.div)`
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
export const IconSocial = styled(motion.a)`
  display: flex;
  font-size: 30px;
  margin: 50px -80px 0px 130px;
  cursor: pointer;
  color: white;
  z-index: 3;
  &:hover {
      color: darkred
  }
  ${mobile({
  fontSize: '20px',
  color: 'dimgray',
  marginLeft: '140px',
  marginBottom: '15px'
})}
`