import Image from "next/image"
import profileImg from '../../assets/images/profileImg.jpg'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className="h-fit text-center mb-44">
        <div className="flex justify-center">
            <div className="rounded-full overflow-hidden w-fit flex mt-40">
                <Image 
                    src={profileImg} 
                    height={100}
                    width={250}
                    alt="anthony-img"
                ></Image>
            </div>
        </div>
        <p className="mt-16 uppercase font-light text-slate-700">Anthony Chablov</p>
        <h1 className="mt-10 text-5xl text-slate-900">Frontend Web Developer</h1>
        <p className="mt-10 font-light text-slate-700">
          I have a passion for software. I enjoy creating tools that make life easier for people.
        </p>
        <Button 
          className="mt-16 px-8 py-3 bg-slate-700 text-slate-100 font-medium 
            capitalize  hover:bg-slate-100 hover:text-slate-700 text-sm
            rounded-md shadow-md" 
          variant="contained">
            Contact Me
        </Button>
    </div>
  )
}

export default Hero