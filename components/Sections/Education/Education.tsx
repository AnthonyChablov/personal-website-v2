import Divider from '@mui/material/Divider';
import Header from '../../Common/Header';
import DisplayCard from './DisplayCard/DisplayCard';

const Education = () => {

  const skills = [
    {icon :'javascript', iconSize: 35},
    {icon :'typescript', iconSize: 35},
    {icon :'react', iconSize: 45},
    {icon :'next', iconSize: 40},
    {icon :'html', iconSize: 50},
    {icon :'css', iconSize: 40},
    {icon :'scss', iconSize: 40},
    {icon :'tailwind', iconSize: 45},
    {icon :'node', iconSize: 50},
    {icon :'firebase', iconSize: 40},
    {icon :'mongoDB', iconSize: 35},
    {icon :'github', iconSize: 40},
  ];

  return (
    <section className="text-center tracking-wide mb-10 pt-16" id='education'>
      <div className="flex items-center justify-center">
        <Header title='03. Skills & Education' />
      </div>
      <div className='text-left mx-auto grid grid-cols-2 grid-rows-3 gap-7
        sm:grid-cols-3 md:grid-cols-4'>
        {
          skills.map((skill) => {
            return (
              <>
                <DisplayCard 
                  icon={skill.icon} 
                  iconSize={skill.iconSize} 
                />
              </>
            )
          })
        }
      </div>
    </section>
  )
}

export default Education