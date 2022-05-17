import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;  
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  max-width: 450px;
  max-height: 400px;
  border-radius: 10px;
  ${mobile({
    maxWidth: '380px',
    maxHeight: '250px'
  })}
`
export const VideoContainer = styled(motion.div)`
  border-radius: 10px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: center;
  box-shadow: 0px 5px 0px black;
  ${mobile({
    maxWidth: '380px',
    maxHeight: '240px'
  })}
`
