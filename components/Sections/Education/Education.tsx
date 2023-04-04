import Divider from '@mui/material/Divider';

const Education = () => {
  return (
    <section className="text-center tracking-wide mb-10 " id='education'>
        <div className="flex items-center justify-center">
            <h1 className='text-xl text-zinc-700 font-semibold'><span>03.</span> Education</h1>
            <Divider className="w-4/12 ml-5 bg-zinc-300 mt-24 mb-24"/>
        </div>
        <p className=' w-5/12 text-left mx-auto'>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing custom 
            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, 
            a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, 
            inclusive products and digital experiences at Upstatement for a variety of clients.
            I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            Here are a few technologies I’ve been working with recently:
        </p>
    </section>
  )
}

export default Education