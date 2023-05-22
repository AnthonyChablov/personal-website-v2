import Image from "next/image"
import { motion } from "framer-motion";
import profileImg from '../../assets/images/profileImg.jpg'
import Button from '@mui/material/Button';
import useWindowWidth from "../../hooks/useWindowWidth";
import { 
  heroImgVariants, 
  heroSubHeaderVariants, 
  heroHeaderVariants, 
  heroSubHeaderMobileVariants, 
  heroHeaderMobileVariants, 
  heroImgMobileVariants 
} from "../../variants";
import Link from "next/link";

const Hero = () => {

  const width = useWindowWidth();

  return (
    <div className="h-fit text-center mb-24 mt-4 ">
        <motion.div className="flex justify-center items-center"
          variants={
            width >= 1280 
              ? heroImgVariants 
              : heroImgMobileVariants
          }
          initial="hidden"
          animate="visible"
        >
            <div className="rounded-full overflow-hidden w-fit flex mt-6">
                <Image 
                    src={profileImg} 
                    height={100}
                    width={250}
                    alt="anthony-img"
                ></Image>
            </div>
        </motion.div>
        <motion.p className="mt-14 uppercase font-light text-slate-700 text-md dark:text-slate-300"
          variants={
            width >= 1280 
              ? heroSubHeaderVariants 
              : heroSubHeaderMobileVariants
          }
          initial="hidden"
          animate="visible"
        >
          Anthony Chablov
        </motion.p>
        <motion.h1 className="mt-9 text-4xl text-slate-800 font-medium dark:text-slate-200"
          variants={
            width >= 1280 
              ? heroHeaderVariants 
              : heroHeaderMobileVariants
          }
          initial="hidden"
          animate="visible"
        >
          Frontend Web Developer
        </motion.h1>
        <motion.p className="mt-12 font-light text-slate-700 text-md dark:text-slate-300"
          variants={
            width >= 1280 
              ? heroHeaderVariants 
              : heroHeaderMobileVariants
          }
          initial="hidden"
          animate="visible"
        >
          I have a passion for software. I enjoy creating tools that make life easier for people.
        </motion.p>
        <motion.div className=""
          variants={
            width >= 1280 
              ? heroHeaderVariants 
              : heroHeaderMobileVariants
          }
          initial="hidden"
          animate="visible"
        >
          <Link href="mailto: aechablov@gmail.com">
            <Button 
              className="mt-12 px-7 py-4 bg-slate-600 text-slate-300
                capitalize  hover:bg-slate-400 hover:text-slate-700 text-[1rem] font-thin
                rounded-md shadow-md" 
              variant="contained"
            >
              <p> Contact Me </p>
            </Button>
          </Link>
        </motion.div>
    </div>
  );
}

export default Hero