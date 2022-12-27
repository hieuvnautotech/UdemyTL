import React from 'react'

function Header() {
    const headerStyle = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'red',
    }
  return (
      <header style={headerStyle}>
          <div className='container'>
              <h2>Feedback UI</h2>
          </div>
    </header>
  )
}

export default Header