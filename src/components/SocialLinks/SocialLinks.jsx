import React from 'react'
import { 
  Container,
  IconSocial
} from './SocialLinksStyle'
import { 
  FaTwitter, 
  FaMailBulk, 
  FaInstagram, 
  FaFacebook 
} from 'react-icons/fa'

export default function SocialLinks() {
  
  return (
    <Container>
      <IconSocial
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: '3.3'
        }}>
        <FaTwitter />
      </IconSocial>
      <IconSocial
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: '3.6'
        }}>
        <FaInstagram />
      </IconSocial>
      <IconSocial
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: '3.9'
        }}>
        <FaMailBulk />
      </IconSocial>
      <IconSocial
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: '4.1'
        }}>
        <FaFacebook />
      </IconSocial>
    </Container>
  )
}
