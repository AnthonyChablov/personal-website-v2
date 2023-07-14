import { m } from 'framer-motion';
import Header from '../../Common/Header';
import {  sectionContentVariants} from '../../../variants';

const AboutMe = () => {

  const text = [
    'Welcome to my personal portfolio! ',
    'My name is Anthony, and I am a front-end web developer with a passion for creating websites that deliver great user-experiences. I believe that great design and functionality are essential to creating an effective online presence, and I strive to achieve this balance in all my projects. ',
    'My skills in HTML, CSS, JavaScript combined with my eye for detail and creativity, enable me to bring unique and engaging web experiences to life.',
    "In my free time, I enjoy exploring new design concepts and experimenting with code to push the boundaries of what's possible on the web. I am also a strong believer in collaboration, and I enjoy working with other talented individuals to bring ideas to life.",
    /* 'Here are some technologies that I have been working with: ' */
  ];
  
  const skills = ['JavaScript (ES6+)','TypeScript','React.js', 'Node.js', 'WordPress', 'Firebase' ,'MongoDb'  ,'Express.js'];
  
  return (
    <section className="text-center tracking-wide mb-10 position pt-16 text-lg" id='about'>
        <div className=" left-0">
            <div className="flex items-center" >
                <Header title={'01. About Me'}/>
            </div>
            <m.div className='text-left text-md font-normal text-slate-600 dark:text-slate-300'
              variants={sectionContentVariants}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: true }}
            >
              {text.map((text,i)=>{
                  return (
                    <div key={i}>
                      <p >{text}</p>
                      <br></br>
                    </div>
                  );
                })
              }
              <p></p>
            </m.div>
        </div>
    </section>
  )
}

export default AboutMe