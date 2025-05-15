"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage(undefined);
  };

  useEffect(() => {
    if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email
    )
      return;

    const fetchClientSecret = async () => {
      const res = await fetch("/api/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: "price_1RESorJXJISDpaiuxHoPbboi", // replace with your real priceId
          customerDetails: formData,
        }),
      });

      const data = await res.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        setErrorMessage(data.error || "Failed to fetch client secret.");
      }
    };

    fetchClientSecret();
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://test123te.netlify.app/payment-success",
        payment_method_data: {
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            address: {
              city: formData.city,
              country: formData.country,
              line1: formData.address,
              postal_code: formData.postalCode,
              state: formData.state,
            },
          },
        },
      },
    });

    if (error) setErrorMessage(error.message);

    setLoading(false);
  };

  return (
      <form onSubmit={handleSubmit} className="text-black bg-black p-6 rounded shadow-md space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <input name="firstName" placeholder="First Name" onChange={handleChange} required className="p-2 border rounded" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} required className="p-2 border rounded" />
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required className="col-span-2 p-2 border rounded" />
          <input name="address" placeholder="Address" onChange={handleChange} required className="col-span-2 p-2 border rounded" />
          <input name="city" placeholder="City" onChange={handleChange} required className="p-2 border rounded" />
          <input name="state" placeholder="State" onChange={handleChange} className="p-2 border rounded" />
          <input name="postalCode" placeholder="Postal Code" onChange={handleChange} required className="p-2 border rounded" />
          <input name="country" placeholder="Country (e.g. RO, US)" onChange={handleChange} required className="p-2 border rounded" />
        </div>

        {clientSecret && <PaymentElement />}

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <button
            type="submit"
            disabled={!stripe || loading || !clientSecret}
            className="mt-4 bg-black text-white font-semibold p-3 rounded w-full disabled:opacity-50"
        >
          {loading ? "Processing..." : `Subscribe for Ron ${amount}`}
        </button>
      </form>
  );
};

export default CheckoutForm;
