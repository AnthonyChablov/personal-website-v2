import { m } from 'framer-motion';
import Icons from '../../Common/Icons';
import Button from "@mui/material/Button";
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import useWindowWidth from '../../../hooks/useWindowWidth';

interface IProjectCard {
  subheader : string, 
  id: number,
  header : string,
  paragraph: string, 
  madewith: string,
  github: string,
  link: string,
  img?: StaticImageData, 
}

const ProjectCard = ({subheader, id, header, paragraph, madewith, github, link, img} : IProjectCard) => {

  const windowWidth = useWindowWidth();

  const projectCardVariants={
    hidden:{
        opacity: 0,
        x: id % 2 === 0 ? 10 : -10,
        y: -20
    },
    visible:{
        opacity: 1,
        y: 0,
        x:0,
        transition: {
        duration: 0.5,
        delay: 0.1 * id,
        ease: 'easeInOut'
        }
    }
  }

  return (
    <m.div className='flex mt-4'
      variants={projectCardVariants}
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
    >
      <Button 
        className="w-full py-10 px-10 bg-slate-200 hover:bg-slate-300 mx-auto h-fit shadow-md dark:bg-slate-900 cursor-auto"
        variant='outlined'
      >
        <div className={` w-full flex 
          ${id % 2 === 1 && 'flex-row-reverse'}`}
        >
          {/* Info */}
          <div className={`w-full text-slate-700 text-md capitalize dark:text-slate-300
              ${id % 2 === 0 
                  ? 'text-left mr-10' 
                  : 'text-right ml-10'
              }
            `}
          >
            {/* Content */}
            <Link  href={link} target="_blank">
              <p>{subheader}</p>
              <h1 className='text-3xl pt-3'>{header}</h1>
              <div className={` w-full flex 
                ${id % 2 === 1 && 'justify-end '} `
              }>
                <p className='normal-case mt-7 font-regular max-w-md'>
                  {paragraph}
                </p>
              </div>
              <p className='mt-7 mb-5'>{madewith}</p>
            </Link>
            {/* Links */}
            <div className={`pt-3 pb-3 flex space-x-5 
              ${id % 2 === 1 && 'justify-end '}`
            }>
              <Link href={github} target="_blank">
                <Icons type={'github'} size={30}/>
              </Link>
              <Link href={link} target="_blank">
                <Icons type={'link'} size={30}/>
              </Link>
            </div>
          </div>
          {/* image  */}
          <Link  href={link} target="_blank">
            <div className="collapse sm:visible">
              <div className={
                `flex items-center mt-9 shadow-md`}
              >
                <div className="rounded-md overflow-hidden hue-rotate-0 sm:h-fit 
                bg-gray-900 opacity-90 blur-xs"
                >
                  {
                    windowWidth > 768 &&
                      <Image
                        src={img}
                        alt='project image'
                        width={775}
                        height={700}
                      />
                  }
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Button>
    </m.div>
  )
}

export default ProjectCard;