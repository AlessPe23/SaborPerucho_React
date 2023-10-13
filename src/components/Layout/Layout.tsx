import React from 'react'
import { Footer, Navbar } from '..';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout