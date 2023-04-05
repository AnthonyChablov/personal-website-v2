import React from 'react';
import Icons from '../../Common/Icons';
import Button from "@mui/material/Button";
import Link from 'next/link';

interface IProjectCard {
  subheader : string, 
  header : string,
  paragraph: string, 
  madewith: string
}

const ProjectCard = ({subheader, header, paragraph, madewith} : IProjectCard) => {
  return (
    <div className='flex'>
      <Button className="w-10/12 p-10 bg-slate-200 hover:bg-slate-300 mx-auto h-fit"
        variant='outlined'
      >
        <div className='w-full text-left'>
          <p className='text-slate-700 text-md capitalize'>{subheader}</p>
          <h1 className='text-slate-700 text-3xl capitalize'>{header}</h1>
          <p className='text-slate-700 text-md normal-case mt-7'>{paragraph}</p>
          <p className='text-slate-700 text-md capitalize mt-7 mb-5'>{madewith}</p>
          <div className=" flex space-x-4">
            <Link href="https://en.wikipedia.org/wiki/Next.js">
              <Icons type={'github'} size={30}/>
            </Link>
            <Link href="https://en.wikipedia.org/wiki/Next.js">
              <Icons type={'link'} size={30}/>
            </Link>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default ProjectCard