import { keyframes } from "styled-components"


export const navbarAnime = {
  initial: { 
    y: 100, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1 
  }
}

export const introImgAnime = keyframes`
  0% {
    opacity: 0;
    transform: translateY(300px)
  }
  50% {
    opacity: 0.1;
    transform: translateY(0px)
  } 
  100% {
    opacity: 0.7;
    transform: translateX(300px)
  }
`
export const introTitleAnime = {
  initial: { 
    x: "-500px",  
    opacity: 0 
  },
  animate: { 
    x: "50px", 
    opacity: 1, 
    transition: { 
      duration: 2, 
      delay: 1, 
      ease: 'easeOut'
    }} 
}

export const introParAnime = {
  initial: {
    x: "-500px", 
    y: "500px" 
  },
  animate: { 
    x: "-50px", 
    y: "0px", 
    opacity: ["0", "1"], 
    transition: { 
      duration: 2.5, 
      delay: 1, 
      ease: 'easeInOut' 
    }}
}

export const introAirpAnime = {
  initial: { 
    x: "-600px",  
    opacity: 0 
  },
  animate: { 
    x: "1000px", 
    opacity: 1, 
    transition: { 
      duration: 2, 
      ease: 'easeInOut'
    }}
}

export const introBtnAnime = {
  initial: { 
    opacity: 0, 
    scale: 0.1 
  },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 5, 
      delay: 1 
    } 
  }
}



export const serviceGAnime  = {
  initial: {},
  animate: { 
    transition: {
      delay: 1, 
      when: 'beforeChildren', 
      staggerChildren: 0.1 
    }}
}
export const serviceImgAnime = {
  initial: { y: 100 },
  animate: { y: 0, 
    opacity: 0.05, 
    transition: { duration: 1 }}
}


export const aboutAnime = {
  initial: { 
    scale: 0.1, 
    opacity: 0 
  },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      duration: 2, 
      ease: 'easeInOut'
    }}
}


export const contactLocalAnime = {
  initial: { 
    y: -200, 
    opacity: 0 
  },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 3, 
      delay: 0.5, 
      ease: 'easeInOut'
    }}
}

export const contactSocialAnime = {
  initial: { opacity: 0} ,
  animate: { 
    opacity: 1, 
    transition: { 
      duration: 6, 
      delay: 2, 
      ease: 'easeInOut'
    }}
}

export const contactFormAnime = {
  initial: { 
    opacity: 0, 
    scale: 0 
  },
  animate:{
    opacity: 1,
    scale: 1,
    rotate: -360,
    transition: { 
      duration: 4, 
      delay: 1, 
      ease: 'backInOut' 
    }}
}