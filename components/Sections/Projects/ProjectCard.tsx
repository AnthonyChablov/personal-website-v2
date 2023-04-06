import React from 'react';
import Icons from '../../Common/Icons';
import Button from "@mui/material/Button";
import Link from 'next/link';

interface IProjectCard {
  subheader : string, 
  id: number,
  header : string,
  paragraph: string, 
  madewith: string,
  github: string,
  link: string
}

const ProjectCard = ({subheader, id, header, paragraph, madewith, github, link} : IProjectCard) => {
  return (
    <div className='flex '>
      <Button 
        className="w-full p-8 bg-slate-200 hover:bg-slate-300 mx-auto h-fit"
        variant='outlined'
      >
        <div className={`w-full text-slate-700 text-md capitalize 
          ${id % 2 === 0 ? 'text-left' : 'text-right'} `}
        >
          <p >{subheader}</p>
          <h1 className='text-3xl  pt-3'>{header}</h1>
          <p className='normal-case mt-7 font-regular'>{paragraph}</p>
          <p className='mt-7 mb-5'>{madewith}</p>
          <div className={`pt-3 pb-3 flex space-x-5 
            ${id % 2 === 1 && 'justify-end'}`
          }>
            <Link href={github} target="_blank">
              <Icons type={'github'} size={30}/>
            </Link>
            <Link href={link} target="_blank">
              <Icons type={'link'} size={30}/>
            </Link>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default ProjectCard;