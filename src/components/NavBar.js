import React from 'react'
import Link from 'next/link'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
const NavBar = () => {
  return (
    <nav className=' bg-gray-900 p-2 flex justify-between'>
        <Link href='/' className='text-white font-bold text-2xl '>demo</Link>
        <div className='text-white font-medium text-xl hover:text-slate-400 hover:cursor-pointer'
        ><ShoppingCartIcon className=' h-10 w-7 inline-block'></ShoppingCartIcon>cart
        <span>(0)</span></div>
    </nav>
  )
}

export default NavBar