import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 100vh; 
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;  
`
export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit: cover;
`
export const Gallery = styled(motion.div)`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 70px;
  grid-row-gap: 0px;
  position: absolute;
  ${mobile({
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '20px',
  gridRowGap: '0px'
})}
`
export const Destination = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 1px 3px 3px black;
  height: 250px;
  ${mobile({
  fontSize: '7px'
})}
`
export const Image = styled(motion.img)`    
  height: 150px;
  width: 250px;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
  ${mobile({
  height: '165px',
  width: '100px'
})}
`
export const Title = styled.h1`
  font-size: 20px;
  ${mobile({
    fontSize: '14px'
  })}
`
export const Text = styled.p`
  display: flex;
  position: absolute;
  font-family: 'Courgette', cursive;
  font-size: 25px;
  color: white;
  text-shadow: 1px 3px 3px black;
  bottom: 3%;
  ${mobile({
  fontSize: '20px'
})}
`