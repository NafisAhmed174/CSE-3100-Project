import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header/>
        <main className='content' style={ { minHeight: '70vh'} }>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout;