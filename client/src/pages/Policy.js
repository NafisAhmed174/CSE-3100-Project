import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="container">
        <div className="row contactus d-flex align-items-center">
          <div className="col-md-6">
            <img
              src="/images/contactus.jpeg"
              alt="contactus"
              className="img-fluid w-100"
            />
          </div>
          <div className="col-md-6">
            <h2>Privacy Policy</h2>
            <p>
              At **MobileShop BD**, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <h4>1. Information We Collect</h4>
            <p>
              We collect personal details like name, email, phone number, and address when you make a purchase or sign up on our platform.
            </p>
            <h4>2. How We Use Your Information</h4>
            <p>
              - To process your orders and provide customer support.  
              - To improve our website and services.  
              - To send promotional offers and updates (you can opt out anytime).  
            </p>
            <h4>3. Data Security</h4>
            <p>
              We implement strict security measures to keep your personal data safe. Your payment information is encrypted and never stored on our servers.
            </p>
            <h4>4. Third-Party Services</h4>
            <p>
              We may use trusted third-party services (e.g., **bKash**, courier services) to fulfill your orders, but we never sell or share your data for marketing purposes.
            </p>
            <h4>5. Your Rights</h4>
            <p>
              You have the right to access, update, or delete your personal information. If you have any concerns, please contact our support team.
            </p>
            <p>
              For more details, feel free to reach out to us at **support@mobileshopbd.com**.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
