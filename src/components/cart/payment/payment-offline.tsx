import { useTranslation } from 'next-i18next';

const PaymentOffline = () => {
  const { t } = useTranslation('common');
  return (
    <span className="text-body block text-sm">
      {t('text-payment-order-offline')}
    </span>
  );
};
export default PaymentOffline;
