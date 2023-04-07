
import Divider from '@mui/material/Divider';

interface IHeader{
    title: string,
}

const Header = ({title} : IHeader) => {
  return (
    <div className='w-full pt-16'>
        <h1 className='text-2xl text-left text-zinc-700 font-normal mb-5'>{title}</h1>
        <Divider className=" bg-zinc-300 mb-12" />
    </div>
  )
}

export default Header