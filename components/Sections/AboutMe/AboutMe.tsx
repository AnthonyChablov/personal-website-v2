import Header from '../../Common/Header';

const AboutMe = () => {
  return (
    <section className="text-center tracking-wide mb-10 position pt-14" id='about'>
        <div className=" left-0">
            <div className="flex items-center ">
                <Header title={'01. About Me'}/>
            </div>
            <p className=' w-10/12 text-left mx-auto text-md font-light '>
                Welcome to my personal portfolio! 
                <br></br><br></br>
                My name is Anthony, and I am a front-end web developer with a passion for 
                creating websites that deliver great user-experiences.
                I believe that great design and functionality are essential to creating an effective online presence, 
                and I strive to achieve this balance in all my projects. My skills in HTML, CSS, and JavaScript, 
                combined with my eye for detail and creativity, enable me to bring unique and engaging web experiences to life.
                <br></br><br></br>
                I have honed my skills through various projects, from developing responsive 
                websites to creating interactive user interfaces. I am constantly expanding my knowledge of web development 
                to keep up with the latest trends and technologies.
                In my free time, I enjoy exploring new design concepts and experimenting with code to push the boundaries 
                of what's possible on the web. I am also a strong believer in collaboration, and I enjoy working with other 
                talented individuals to bring ideas to life.
                Thank you for taking the time to learn a bit about me, and I look forward to working with 
                you to create something truly amazing.
            </p>
        </div>
    </section>
  )
}

export default AboutMe