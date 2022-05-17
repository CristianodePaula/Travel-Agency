import styled from 'styled-components'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;  
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
  display: 'flex',
  flexDirection: 'column'
})}
`
export const BackContainer = styled.div`
  width: 100vw;
`
export const Background = styled.div`
  height: 100vh;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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