'use server';

import type { CartItem } from '@/types';

export async function addItemToCart(data: CartItem) {
  console.log(data.qty);

  return { success: true, message: 'Item added to cart' };
}
