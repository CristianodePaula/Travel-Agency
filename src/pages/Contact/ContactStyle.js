import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'
import contact from '../../images/contact.jpg'
import { motion } from 'framer-motion'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background:url(${contact});   
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  ${mobile({
  display: 'grid',
  flexDirection: 'column',
})}
`
export const BoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  text-items: center;
  color: white;
  text-shadow: 1px 3px 3px black;
  margin-top: 150px;
  ${mobile({
  marginTop: '100px'
})}
`
export const Local = styled(motion.h2)`
  font-size: 30px;
  ${mobile({
  fontSize: '20px'
})}
`
export const Desc = styled(motion.p)`
  font-size: 20px;
  ${mobile({
  fontSize: '15px'
})}
`
export const BoxRight = styled(motion.form)`
  display: flex;
  flex-direction: column;
  text-items: center;
  color: white;
  text-shadow: 1px 3px 3px black;
  margin-top: 150px;
  padding: 5px;
  ${mobile({
  marginTop: '-50px',

})}
`
export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 50px;
  ${mobile({
  fontSize: '20px',
  marginBottom: '20px'
})}
`
export const Input = styled.input`
  height: 30px;
  width: 450px;
  margin-bottom: 20px;
  font-size: 15px;
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: 0px;
  ::-webkit-input-placeholder {
    color: white;
    text-shadow: 2px 3px 3px black;
}
${mobile({
  fontSize: '15px',
  width: '350px'
})}
`
export const Message = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  ${mobile({
  fontSize: '15px'
})}
`
export const TextArea = styled.textarea`
  display: flex;
  height: 180px;
  width: 450px;
  margin: 0px 0px 20px;
  font-size: 20px;
  border: 1px solid #fff;
  color: white;
  background: transparent;
  resize: none;
  outline: 0px;
  ::placeholder {
      font-size: 15px;
      color: black;
}
${mobile({
  height: '100px',
  width: '350px'
})}
`
export const Button = styled.button`
  width: 100px;  
  padding: 5px;
  text-shadow: 5px 3px 3px black;
  background: transparent;
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
    &:hover {
      background: darkred;
      color: white;
      transform: scale(1.1); 
      transition: all 0.5s ease;
    }
  ${mobile({
  fontSize: '12px'
})}
`