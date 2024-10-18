<script>
import {products} from "@/data/data.ts"
export default {
  // props: {
  //   cartItems: {
  //     type: Array,
  //     required: true
  //   }
  // },
  data() {
    return {
      cartItems: products.slice(0, 6).map(item => ({ ...item, quantity: 1 }))
    }
  },
  methods: {
    increaseQuantity(item) {
      item.quantity += 1;
    },
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.removeFromCart(item.id);
      }

    },
    removeFromCart(id) {
      this.cartItems = this.cartItems.filter(item => item.id !== id);
      this.$emit('remove-item', id)
    },
    buyItems() {
      if (this.cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      // Example action: proceed to checkout or payment gateway
      // this.$router.push('/checkout');
    }
  },
  computed: {
    overallQuantity() {
      return this.cartItems.reduce((totalQty, item) => {
        return item.in_stock ? totalQty + item.quantity : totalQty;
      }, 0);
    },
    grandTotal() {
      return this.cartItems.reduce((total, item) => {
        return item.in_stock ? total + item.price * item.quantity : total;
      }, 0);
    }
  }
};
</script>

<template>
  <div class="cart-container">
    <div class="cart-title">
      <h1> Cart </h1>
    </div>

    <div class="cart-list-container">
      <ul v-if="cartItems.length > 0" class="cart-list">
        <li v-for="item in cartItems" :key="item.id" class="cart-list-item" :style="{ boxShadow: item.in_stock ? '1px 2px 4px rgba(0, 0, 0, 0.1)' : 'none' }">
          <div :class="{ 'product-item-info': item.in_stock, 'product-item-info-not': !item.in_stock }">
            <img :src="item.images[0].url" width="78px" height="74px" alt="phones" />
            <div>
              <h3>{{ item.name }}</h3>
              <h4 >{{item.price}}$ <span>per item</span></h4>
            </div>

            <div v-if="item.in_stock" class="if-in-stock">
              <div class="item-quantity" >
                <button @click="decreaseQuantity(item)">–</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQuantity(item)">+</button>
              </div>
              <h5 class="item-total">{{ item.price * item.quantity }}$</h5>
            </div>

            <h3 v-else-if="!item.in_stock" class="if-not-in-stock">Out of Stock</h3>
          </div>


        </li>
      </ul>
    </div>

    <div class="cart-overall">

      <div class="cart-overall-info">
        <div class="overall-quantity">
          <p class="overall-info-first">{{overallQuantity}} items</p>
          <p class="overall-info-second">{{grandTotal}}$</p>
        </div>
        <div class="overall-discount">
          <p class="overall-info-first">Discount</p>
          <p class="overall-info-second">0</p>
        </div>

        <div class="line"></div>

        <div class="overall-total">
          <p class="overall-info-first">Overall</p>
          <p class="overall-info-second">{{grandTotal}}$</p>
        </div>
      </div>
      <button class="buy-button" @click="buyItems">Buy</button>
    </div>
  </div>

</template>

<style scoped>

.cart-container {
  font-family: 'Inter', sans-serif;

  margin-top: 51px;
  position: relative;

  min-height: 800px;
  width: 1208px;
}

.cart-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;

  color: black;
}

.cart-list {
  list-style-type: none;
}

.cart-list-item {
  /* Item */

  margin-top: 15px;

  width: 876px;
  height: 72px;

  background: #FFFFFF;
  border-radius: 4px;

}

.cart-list-container {
}

.cart-list {
  padding: 0;
}

.product-item-info, .product-item-info-not {
  display: flex;
}

.product-item-info h3, .product-item-info-not h3{
  width: 536px;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: black;

  align-self: stretch;

  margin-top: 3px;
}

.product-item-info h4, .product-item-info-not h4{
  height: 18px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: #414141;
}

.product-item-info h4 span {
  height: 18px;

  /* Desc/Text/XS */
  font-family: 'Readex Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #606060;

  flex: none;
  order: 1;

  margin-left: 5px;
}

.item-quantity {

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 8px;


  margin: 15px;
  height: 40px;

  background: #70C05B;
  border-radius: 4px;

  align-self: stretch;
  color: white;
}

.product-item-info-not {
  box-shadow: none;
}
.product-item-info-not h4, .product-item-info-not h3{
  color: #bebebe;
}

.item-quantity span {
  padding: 3px;
}

.item-quantity button {
  border: none;
  background: transparent;
  color: white;
  height: 40px;

  font-size: 20px;
  font-weight: normal;

  display: flex;
  justify-content: center;
  align-content: center;


  padding: 10px;
  transition: 0.3s ease-in-out;

  border-radius: 4px;
}


.item-quantity button:hover {
  background: #599748;
}

.item-total {

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  color: #414141;
  flex-grow: 1;

  margin-left: 40px;
  margin-top: 20px;
}

.if-in-stock {
  display: flex;
}

.if-not-in-stock, p {
  /* Нет в наличии */

  width: 91px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  color: #747474;

  margin-left: 120px;
}

.not-in-stock{
  color: #6d6b6b;
}

.cart-overall {
  /* Frame 177 */

  position: absolute;
  right: 136px;
  top: 170px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 172px;
  height: 348px;
}

.overall-quantity {
  display: flex;
}

.overall-total {
  display: flex;
  justify-content: space-between;
  width: 100%;

}

.overall-discount {
  display: flex;


}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #8F8F8F;
  margin-left: 120px;
}

.overall-info-first {

  height: 24px;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #8F8F8F;
}

.overall-info-second {
  height: 27px;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  text-align: right;

  color: #414141;
}

.buy-button {
  background: none;
  /* Frame 216 */

  box-sizing: border-box;

  text-align: center;

  gap: 16px;

  width: 272px;
  height: 60px;

  border: 1px solid #000000;
  border-radius: 10px;

  flex: none;
  order: 5;
  flex-grow: 0;

  margin-left: 130px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  /* or 36px */

  color: #000000;

  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.buy-button:hover {
  background: #e5e5e5;
}


</style>