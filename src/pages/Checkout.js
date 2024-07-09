import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";
import { CartProvider } from '../context/cart';
import '@aws-amplify/ui-react/styles.css';
import { BookProvider } from '../context/books';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51PYtJiRtEJbkn9OwHXKxJ65PoR6HdEdZe6UHORfvjahmEEMNxRg5FGi7bq4qU7VMPajLfubxBoklnmzg3PH3caxA00tURVnHIz');

    return (
        <section className="checkout-wrapper">
            <Authenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <BookProvider><CartProvider><CheckoutForm /></CartProvider></BookProvider>
                    </section>
                </Elements>
            </Authenticator>
        </section>
    )
}

export default Checkout
