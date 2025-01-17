import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout = ({children, title = 'Mobile Shop', description = 'Mern Stack Project', keywords = 'mern, react, node, mongoDb', author = 'Nafis Ahmed'}) => {
  return (
    <div className='layout'>
        <Helmet>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <title>{title}</title>
        </Helmet>
        <Header/>
        <main className='content'>
            <Toaster/>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default Layout;