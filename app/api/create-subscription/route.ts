import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const cookieStore = cookies();
    let customerId = cookieStore.get('customerId')?.value;

    const { priceId, customerDetails } = await req.json();

    const customer = await stripe.customers.create({
      name: `${customerDetails.firstName} ${customerDetails.lastName}`,
      email: customerDetails.email,
      address: {
        line1: customerDetails.address,
        city: customerDetails.city,
        state: customerDetails.state,
        postal_code: customerDetails.postalCode,
        country: customerDetails.country,
      },
    });


    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: priceId }],
      payment_behavior: 'default_incomplete',
      payment_settings: {
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
    });

    const clientSecret = subscription.latest_invoice?.payment_intent?.client_secret;

    return NextResponse.json({
      subscriptionId: subscription.id,
      clientSecret,
      appearance: {
        theme: 'night',
        labels: 'floating'
      },
      loader: 'auto',
    });
  } catch (error: any) {
    console.error('[Stripe Error]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
