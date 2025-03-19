import { useRouter } from 'next/router';
// import { OrderDetailsPage } from '@/pages/OrderDetailsPage';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;

  return; // <OrderDetailsPage orderId={id} />
}
