
import Divider from '@mui/material/Divider';

interface IHeader{
    title: string,
}

const Header = ({title} : IHeader) => {
  return (
    <>
        <h1 className='text-xl text-zinc-700 font-semibold'>{title}</h1>
        <Divider className=" w-4/6 ml-5 bg-zinc-300 mt-24 mb-24"/>
    </>
  )
}

export default Header