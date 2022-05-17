import styled from 'styled-components'
import { motion } from 'framer-motion'
import { introImgAnime } from '../../resources/Animations'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 100vh;  
  display: flex;
  align-items: center;
  justify-content: center; 
  ${mobile({
  display: 'flex',
  flexDirection: 'column'
})}
`
export const Video = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit:cover;
  object-fit: cover;
`
export const Icon = styled(motion.img)`
  width: 300px;
  display: flex; 
  position: absolute;
  top: 10%;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  position: absolute;
  color: white;
  text-shadow: 10px 5px 5px black;
  font-family: 'Josefin Sans', sans-serif;
`
export const Title = styled(motion.h1)`
  display: flex;
  margin-left: 10%;
  font-size: 50px;
  ${mobile({
  display: 'flex',
  fontSize: '35px',
  marginLeft: '17%',
  marginTop: '20%',
  alignItems: 'center'
})}
`
export const Paragraph = styled(motion.p)`
  display: flex;
  max-width: 400px;
  margin-left: 17%;
  font-size: 30px;
  color: white;
  ${mobile({
  fontSize: '22px',
  textAlign: 'center',
  marginLeft: '20%',
})}
`
export const Image = styled(motion.img)`
  width: 300px;
  height: 300px;
  margin: 600px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  box-shadow: 10px 5px 5px black;
  animation: ${introImgAnime} 3s forwards;
  ${mobile({
  width: '200px',
  height: '200px',
  margin: '-150px',
  marginBottom: '250px',
  alignItems: 'center',
})}
`