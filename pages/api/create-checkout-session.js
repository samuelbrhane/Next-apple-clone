const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { bagItems } = req.body;

  const transformedItems = bagItems.map((item) => ({
    quantity: item.amount,
    price_data: {
      currency: "usd",
      unit_amount: +item.price * 100,
      product_data: {
        name: item.name,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "ET"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_HOST}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_HOST}/bag`,
  });
  res.status(200).json({ id: session.id });
};
