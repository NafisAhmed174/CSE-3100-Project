import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="pnf-title">404</h1>
            <h2 className="text-fail">Sorry, we couldn't find the requested page.</h2>
            <h4 className="text-black">You are lost!</h4>
            <Link to="/" className="pnf-btn">Go to Home</Link>
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img src="/images/lost_zoro2.jpg" alt="Lost Zoro" className="img-fluid" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
