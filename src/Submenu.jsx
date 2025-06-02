import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
 
  useEffect(()=>{
    setColumns('col-2' )
    const submenu = container.current
    const {center,bottom} = location
    submenu.style.left = `${center}px`
      submenu.style.top = `${bottom}px`
    if(links.length === 3){
      setColumns('col-3')

    }
    if(links.length > 3){
      setColumns('col-4')

    }
 }, [page, location, links ])
  return (
   <aside
  className={`absolute top-16 left-1/2 -translate-x-1/2 z-30 bg-white shadow-lg p-8 rounded-md transition-all duration-300 ease-in-out w-[600px] ${
    isSubmenuOpen ? 'block' : 'hidden'
  } relative`}
  ref={container}
>
  <span className="absolute top-[-5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-[var(--clr-white)]" />
 <section>
  <h4 className='capitalize text-2xl mb-4'>{page}</h4>
  <div
  className={`grid gap-y-1 gap-x-8 ${
    columns === 'col-2'
      ? 'grid-cols-2'
      : columns === 'col-3'
      ? 'grid-cols-3'
      : columns === 'col-4'
      ? 'grid-cols-4'
      : ''
  }`}
>
    {links.map((link, index)=> {
      const{url, icon, label}= link
      return(
        <a className='w-40 flex items-center capitalize' key={index} href={url}>
          {icon}
          {label}
        </a>
      )
    })}
  </div>
 </section>
    </aside>
  )
}

export default Submenu