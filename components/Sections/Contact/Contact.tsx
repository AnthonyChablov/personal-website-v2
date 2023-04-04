import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SectionLayout from '../SectionLayout';


const Contact = () => {
  return (
    <section className="text-center tracking-wide" id='contact'>
        <Divider className="w-4/12 mx-auto bg-zinc-300 mt-24 mb-24"/>
        <p className="text-lg text-zinc-600">04. What's Next?</p>
        <h4 className="text-5xl font-semibold text-zinc-800 my-5 ">Get In Touch</h4>
        <p className="text-zinc-700 w-5/12 mx-auto text-md mt-10 font-light">
            I am currently looking for new opportunities 
            in web-development, my inbox is always open. Whether you have a question or just want to say 
            hi, I will get back to you as soon as possible!</p>
        <Button className='mt-12 px-8 py-3 bg-slate-700 text-slate-100 font-medium 
            capitalize  hover:bg-slate-100 hover:text-slate-700 text-md
            rounded-md shadow-md'
        >
            <p>Say Hello</p>
        </Button>
    </section>
  )
}

export default Contact