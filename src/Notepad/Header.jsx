import React from 'react'

const Header = () => {
  return (
    <>
      <h1>Notes</h1>
      <input type="text" placeholder='Search notes'  className='srcInput'/>
      <img src="assets/searchIcon.png" alt="searchIcon" className='srcIcon'/>
    </>
  )
}

export default Header
