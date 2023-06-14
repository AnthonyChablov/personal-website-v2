import { m } from 'framer-motion';
import Divider from '@mui/material/Divider';
import { sectionHeaderVariants } from '../../variants';

interface IHeader{
    title: string,
}

const Header = ({title} : IHeader) => {
  return (
    <m.div className='w-full pt-16'
      variants={sectionHeaderVariants}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
    >
        <h1 className='text-2xl text-left text-zinc-700 font-normal mb-5 dark:text-slate-200'>{title}</h1>
        <Divider className=" bg-zinc-300 mb-12" />
    </m.div>
  )
}

export default Header