import styled from 'styled-components'
import { motion } from 'framer-motion'
import { mobile } from '../../resources/Responsive'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
  align-items: center;
  position: absolute;
  ${mobile({
    marginTop: '90%;'
  })}
`
export const Button = styled(motion.button)`
  height: 80px;
  width: 220px;
  background: transparent;
  font-family: 'Courgette', cursive;
  font-size: 28px;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 15px;
  color: white;    
  text-shadow: 10px 5px 5px black;
  box-shadow: 1px 3px 3px black;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: darkred;
  }
  ${mobile({
  fontSize: '22px',
  height: '60px',
  width: '180px'
})}
`