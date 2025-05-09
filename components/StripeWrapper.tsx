"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutPage";

const stripePromise = loadStripe("pk_test_51MKLiAJXJISDpaiuaphCVhzrp3hkCkHUxyuNfIPS4ZxH1hY8ZsH4ygvk7WKnRvHPc6xwfioqvdvf4PNfCeBFxfZP00qQgwToiN"); // Replace with your publishable key

const StripeWrapper = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={9.99} />
        </Elements>
    );
};

export default StripeWrapper;
