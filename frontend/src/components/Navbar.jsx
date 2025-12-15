import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
      <h1 className='font-bold px-3 py-4 '>Fraudly</h1>
      <div className='flex items-center justify-end gap-3 font-bold px-10'>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Features</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
        <button>login</button>
      </div>
    </div>
  )
}

export default Navbar