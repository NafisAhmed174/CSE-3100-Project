import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Helmet} from "react-helmet";

const Layout = ({children, title, description, keywords, author}) => {
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
            {children}
        </main>
        <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Mobile Shop',
  description: 'Mern Stack Project',
  keywords: 'mern, react, node, mongoDb',
  author: 'Nafis Ahmed'
}

export default Layout;