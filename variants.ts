import { Variants } from "framer-motion";


/* Framer motion animations */
export const heroImgVariants : Variants ={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 1.8,
        ease: 'easeInOut'
        }
    }
}
  
export const heroSubHeaderVariants : Variants ={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 2,
        ease: 'easeInOut'
        }
    }
}

export const heroHeaderVariants : Variants ={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: 2.4,
        ease: 'easeInOut'
        }
    }
}

export const sidebarVariants={
    hidden:{
      opacity: 0,
      y: -10
    },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: .8,
        ease: 'easeInOut'
      }
    }
  }

export const sectionHeaderVariants={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.3,
        delay: .25,
        ease: 'easeInOut'
        }
    }
}

export const sectionSubHeaderVariants={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.3,
        delay: .3,
        ease: 'easeInOut'
        }
    }
}


export const sectionContentVariants={
    hidden:{
        opacity: 0,
        y: -15
    },
    visible:{
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        delay: .50,
        ease: 'easeInOut'
        }
    }
}

