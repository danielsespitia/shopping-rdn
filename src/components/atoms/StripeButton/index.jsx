// Packages
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JONvzBftZR0K3aQvrHm2xz5PnFI7q1IftAP2YF7oV0p6Q0E3ffJmEQpD6aYZWQrSg9b09f6hlqmEOipUzf0rDWg00pVqgldBj';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Shopping RDN"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
