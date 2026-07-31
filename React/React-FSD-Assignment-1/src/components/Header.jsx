import React from 'react'

const Header = () => {
  return (
    <div style={{ backgroundColor: 'lightyellow', padding: '20px',height: '50px', width: '100%', border: '1px solid black', borderRadius: '5px', marginTop: '10px', textAlign: 'left' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73uDEDKslW0TXNvj-Iy-wtwUvd2qZfCQbXg&s" alt="Logo" height="50" width="50" style={{ alignItems: 'left' }} />
        <h2 style={{ color: 'lightblue', textAlign: 'center'}}>Welcome To Our Restraunt</h2>
    </div>
  )
}

export default Header