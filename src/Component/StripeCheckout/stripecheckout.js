import React from 'react';

import SteipeCheckout from 'react-stripe-checkout';

import maImage from './King-Black-Crown.png';


const StripeCheckoutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const PublishableKey = "pk_test_51J8n18GJsAzGslbVPWa8ElYF7UDBZu0OJv3kurdvtJc6segaNeWYTI1zs2L5n3LqbB5eU0JrI8c3xnUOFuCimhKg00vcEjAL5c";

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');

    }

    return(
        <SteipeCheckout
        label="Pay Now"
        name="CRWN Colthng Ltd."
        billingAddress
        shippingAddress
        image={maImage}
        description={`Your total is $${price}`}
        amount= {priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={PublishableKey}
        />
    )
}

export default StripeCheckoutButton;