import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div  className={`fixed inset-0 w-full h-full grid place-items-center bg-black/50 transition-all duration-300 ease-in-out ${
    isSidebarOpen ? 'visible z-20 scale-100' : 'invisible z-[-1] scale-0'
  }`}  >
      <aside className='sidebar w-[90vw] h-[95vh] max-w-[95vw] bg-white rounded-md shadow-lg relative pt-16 pb-16 px-8'>
        <button className="close-btn text-xl absolute cursor-pointer top-4 right-4" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index)=> {
            const {links,page} = item
            return(
              <article className='mb-8' key={index}>
                <h4 className='capitalize text-xl  text-purple-900'>{page}</h4>
                <div className='sidebar-sublinks grid grid-cols-[1fr_1fr] '>
                  {links.map((link, index)=>{
                    const{url, icon , label}= link
                    return(
                      <a className='flex items-center capitalize' key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar