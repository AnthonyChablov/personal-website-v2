import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { sectionHeaderVariants, sectionSubHeaderVariants, sectionContentVariants } from '../../../variants';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="text-center tracking-wide pt-1" id='contact' >
        <Divider className="w-4/12 mx-auto bg-zinc-300 mt-20 mb-24"/>
        <p className="text-lg text-zinc-600">04. What's Next?</p>
        <motion.h4 className="text-4xl font-semibold text-zinc-800 my-5 "
          variants={sectionHeaderVariants}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        > 
          Get In Touch
        </motion.h4>
        <motion.p className="text-zinc-700  mx-auto text-lg mt-8 font-light"
          variants={sectionSubHeaderVariants}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          I am currently looking for new opportunities 
          in web-development, my inbox is always open. Whether you have a question or just want to say 
          hi, I will get back to you as soon as possible!
        </motion.p>
        <motion.div
          variants={sectionContentVariants}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{ once: true }}
        >
          <Link href="mailto: aechablov@gmail.com"> 
          <Button className='mt-12 px-8 py-3 bg-slate-700 text-slate-100 font-medium 
              capitalize  hover:bg-slate-100 hover:text-slate-700 text-md
              rounded-md shadow-md'
          >
            <p>
              Say Hello
            </p>
          </Button>
          </Link>
        </motion.div>
        
    </section>
  )
}



export default Contact