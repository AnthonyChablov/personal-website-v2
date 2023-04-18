import Image from "next/image"
import { motion } from "framer-motion";
import profileImg from '../../assets/images/profileImg.jpg'
import Button from '@mui/material/Button';

/* Framer motion animations */
const heroImgVariants={
  hidden:{
    opacity: 0,
    y: -20
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1,
      ease: 'easeInOut'
    }
  }
}

const heroSubHeaderVariants={
  hidden:{
    opacity: 0,
    y: -15
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.4,
      ease: 'easeInOut'
    }
  }
}

const heroHeaderVariants={
  hidden:{
    opacity: 0,
    y: -20
  },
  visible:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.4,
      ease: 'easeInOut'
    }
  }
}

const Hero = () => {
  return (
    <div className="h-fit text-center mb-24">
        <motion.div className="flex justify-center items-center"
          variants={heroImgVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="rounded-full overflow-hidden w-fit flex mt-8">
                <Image 
                    src={profileImg} 
                    height={100}
                    width={250}
                    alt="anthony-img"
                ></Image>
            </div>
        </motion.div>
        <motion.p className="mt-14 uppercase font-light text-slate-700 text-md"
          variants={heroSubHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          Anthony Chablov
        </motion.p>
        <motion.h1 className="mt-9 text-4xl text-slate-800 font-medium"
          variants={heroHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          Frontend Web Developer
        </motion.h1>
        <motion.p className="mt-12 font-light text-slate-700 text-md"
          variants={heroHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          I have a passion for software. I enjoy creating tools that make life easier for people.
        </motion.p>
        <motion.div className=""
          variants={heroHeaderVariants}
          initial="hidden"
          animate="visible"
        >
          <Button 
            className="mt-12 px-7 py-4 bg-slate-600 text-slate-100
              capitalize  hover:bg-slate-100 hover:text-slate-700 text-md
              rounded-md shadow-md" 
            variant="contained"
          >
              Contact Me
          </Button>
        </motion.div>
    </div>
  );
}

export default Hero