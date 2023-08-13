import { PaymentGateway } from '@/types';
import PaymentOnline from './payment-online';
import PaymentOffline from './payment-offline';

const payments = {
  STRIPE: {
    name: 'Stripe',
    value: PaymentGateway.STRIPE,
    icon: '/payment-gateways/stripe.png',
    iconDark: '/payment-gateways/stripe.png',
    component: PaymentOnline,
    width: 40,
    height: 28,
  },
  PAYPAL: {
    name: 'Paypal',
    value: PaymentGateway.PAYPAL,
    icon: '/payment-gateways/paypal.png',
    iconDark: '/payment-gateways/paypal.png',
    component: PaymentOnline,
    width: 82,
    height: 21,
  },
  RAZORPAY: {
    name: 'RazorPay',
    value: PaymentGateway.RAZORPAY,
    icon: '/payment-gateways/razorpay.png',
    iconDark: '/payment-gateways/razorpay-dark.png',
    component: PaymentOnline,
    width: 82,
    height: 40,
  },
  MOLLIE: {
    name: 'Mollie',
    value: PaymentGateway.MOLLIE,
    icon: '/payment-gateways/mollie.png',
    iconDark: '/payment-gateways/mollie-dark.png',
    component: PaymentOnline,
    width: 100,
    height: 52,
  },
  PAYSTACK: {
    name: 'Paystack',
    value: PaymentGateway.PAYSTACK,
    icon: '/payment-gateways/paystack.png',
    iconDark: '/payment-gateways/paystack-dark.png',
    component: PaymentOnline,
    width: 100,
    height: 52,
  },
  BITPAY: {
    name: 'Bitpay',
    value: PaymentGateway.BITPAY,
    icon: '/payment-gateways/bitpay.png',
    iconDark: '/payment-gateways/bitpay-dark.png',
    component: PaymentOnline,
    width: 100,
    height: 52,
  },
  COINBASE: {
    name: 'Coinbase',
    value: PaymentGateway.COINBASE,
    icon: '/payment-gateways/coinbase.png',
    iconDark: '/payment-gateways/coinbase-dark.png',
    component: PaymentOnline,
    width: 100,
    height: 52,
  },
  CASH_ON_DELIVERY: {
    name: 'cash-on-delivery',
    value: PaymentGateway.CASH_ON_DELIVERY,
    icon: '/payment-gateways/cod.png',
    iconDark: '/payment-gateways/cod.png',
    component: PaymentOffline,
    width: 80,
    height: 72,
  },
};

export default payments;
