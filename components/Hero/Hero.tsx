import Image from "next/image"
import profileImg from '../../assets/images/profileImg.jpg'
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className="h-fit text-center mb-24">
        <div className="flex justify-center items-center">
            <div className="rounded-full overflow-hidden w-fit flex mt-24">
                <Image 
                    src={profileImg} 
                    height={100}
                    width={250}
                    alt="anthony-img"
                ></Image>
            </div>
        </div>
        <p className="mt-14 uppercase font-light text-slate-700 text-md">
          Anthony Chablov
        </p>
        <h1 className="mt-9 text-4xl text-slate-800 font-medium">Frontend Web Developer</h1>
        <p className="mt-12 font-light text-slate-700 text-md">
          I have a passion for software. I enjoy creating tools that make life easier for people.
        </p>
        <Button 
          className="mt-12 px-7 py-4 bg-slate-600 text-slate-100
            capitalize  hover:bg-slate-100 hover:text-slate-700 text-md
            rounded-md shadow-md" 
          variant="contained">
            Contact Me
        </Button>
    </div>
  );
}

export default Hero