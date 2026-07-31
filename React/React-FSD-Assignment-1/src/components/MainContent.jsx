import React from 'react'

const MainContent = () => {
  return (
    <div style={{ backgroundColor: 'lightyellow', padding: '20px',height: '400px', width: '300px', border: '1px solid black', borderRadius: '5px', marginTop: '10px', textAlign: 'left' }}>
        <h2 style={{ color: 'blue', textAlign: 'center'}}>Student Info</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73uDEDKslW0TXNvj-Iy-wtwUvd2qZfCQbXg&s" alt="Student Image" height="100" width="100" style={{ alignItems: 'center' }} />
        <h3 style={{ color: 'green' }}>Name: Kushal Chaudhary</h3>
        <p style={{ color: 'darkred' }}>Age: 20</p>
        <p style={{ color: 'darkred' }}>Major: Computer Science and Engineering - Data Science</p> 
    </div>
  )
}

export default MainContent