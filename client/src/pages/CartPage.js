import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Calculate total price
  const totalPrice = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item.price;
    });
    return total.toLocaleString("en-BD", {
      style: "currency",
      currency: "BDT",
    });
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    let myCart = cart.filter((item) => item._id !== pid);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
  };

  // Handle SSLCommerz Payment
  const handlePayment = async () => {
    if (!auth?.user?.address) {
      toast.error("Please update your address before making a payment!");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/payment/ssl-payment", {
        cart,
        user: auth?.user,
        amount: cart.reduce((sum, item) => sum + item.price, 0),
      });

      if (data?.GatewayPageURL) {
        window.location.href = data.GatewayPageURL; // Redirect to SSLCommerz payment page
      } else {
        toast.error("Failed to initiate payment");
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment failed. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {!auth?.user ? "Hello Guest" : `Hello ${auth?.user?.name}`}
              <p className="text-center">
                {cart?.length
                  ? `You have ${cart.length} items in your cart`
                  : "Your Cart Is Empty"}
              </p>
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* Cart Items */}
            <div className="col-md-7 p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100%"
                      height={"130px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Price : {p.price} BDT</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button className="btn btn-danger" onClick={() => removeCartItem(p._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="col-md-5 cart-summary">
              <h2>Cart Summary</h2>
              <p>Total | Checkout | Payment</p>
              <hr />
              <h4>Total: {totalPrice()}</h4>

              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4>Current Address</h4>
                    <h5>{auth?.user?.address}</h5>
                    <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                      Update Address
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button className="btn btn-outline-warning" onClick={() => navigate("/dashboard/user/profile")}>
                      Update Address
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/login", { state: "/cart" })}
                    >
                      Please Login to Checkout
                    </button>
                  )}
                </div>
              )}

              {/* SSLCommerz Payment Button */}
              {auth?.token && cart?.length > 0 && (
                <button className="btn btn-primary mt-3" onClick={handlePayment} disabled={loading}>
                  {loading ? "Processing..." : "Make Payment"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
