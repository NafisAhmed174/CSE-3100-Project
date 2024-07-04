import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"Go Back - Page Not Found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="text-fail">
          Sorry, we couldn't find the requested page.
        </h2>

        <img
          src="/images/lost_zoro2.jpg"
          alt="Lost Zoro"
          className="img-fluid"
          width="300"
          height="400"
        />

        <h4 className="text-black">You are lost!</h4>
        <Link to="/" className="pnf-btn">
          Go to Home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
