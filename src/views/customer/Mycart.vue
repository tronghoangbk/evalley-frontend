<template>
  <section class="h-100 h-custom mt-5" style="background-color: #6cc4a1">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12">
          <div class="card card-registration card-registration-2" style="border-radius: 15px">
            <div class="card-body p-0">
              <div class="row g-0">
                <div class="col-lg-8">
                  <div class="p-5">
                    <div class="
                        d-flex
                        justify-content-between
                        align-items-center
                        mb-5
                      ">
                      <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                      <h6 class="mb-0 text-muted">{{ numberOfItem }} items</h6>
                    </div>
                    <hr class="my-4" />
                    <CartItem v-for="cart in this.mycart" :key="cart" :product_id=cart.product_id :brand=cart.brand
                      :name=cart.name :price=cart.price :image=cart.image :quantity=cart.quantity>
                    </CartItem>
                    <div class="pt-5">
                      <h6 class="mb-0">
                        <a href="#!" class="text-body"><i class="fas fa-long-arrow-alt-left me-2"></i>Back
                          to shop</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 bg-grey">
                  <div class="p-5">
                    <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                    <hr class="my-4" />

                    <div class="d-flex justify-content-between mb-4">
                      <h5 class="text-uppercase">{{ numberOfItem}} items</h5>
                      <h5>{{totalPrice.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}} VND</h5>
                    </div>

                    <h5 class="text-uppercase mb-3">Shipping</h5>

                    <div class="mb-4 pb-2">
                      <select class="select">
                        <option value="1">Standard-Delivery- VND5.00</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </div>

                    <h5 class="text-uppercase mb-3">Give code</h5>

                    <div class="mb-5">
                      <div class="form-outline">
                        <label for="vouchercode" class="form-label">Choose your code from the list:</label>
                        <input class="form-control" list="voucher" name="browser" id="browser" />
                        <datalist id="voucher">
                          <option value="MAGIAM30- giam gia 20%"></option>
                          <option value="KHUYENMAI"></option>
                          <option value="DON0DONG"></option>
                        </datalist>
                      </div>
                    </div>
                    <hr class="my-4" />

                    <div class="d-flex justify-content-between mb-5">
                      <h5 class="text-uppercase">Total price</h5>
                      <h5>VND 137.00</h5>
                    </div>

                    <button type="button" class="btn btn-block btn-lg pay-btn">
                      TO PAYMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CartItem from "@/components/cards/CartItem.vue";
const { BASE_URL } = require("../../utils/config");
export default {
  components: {
    CartItem,
  },
  created() {
    this.mycart = JSON.parse(localStorage.getItem('mycart')) || [];
    this.setTotal();
  },
  data() {
    return {
      mycart: null,
      numberOfItem: 0,
      totalPrice:0,
    };
  },
  methods: {
    removeItem(product_id) { 
      this.mycart = this.mycart.filter(item => item.product_id != product_id)
      this.setTotal()
    },
    setQuan(product_id, quantity){
      const item = this.mycart.find(element => element.product_id===product_id);
      item.quantity = quantity;
      this.setTotal()
    },
    setTotal(){
      if (this.numberOfItem != 0){
        this.numberOfItem=0
        this.mycart.forEach(item => this.numberOfItem += item.quantity)
      }
      else{
        this.mycart.forEach(item => this.numberOfItem += item.quantity)
      }
      if (this.totalPrice!=0){
        this.totalPrice = 0;
        this.mycart.forEach(item => this.totalPrice += (item.quantity*item.price))
      }
      else{
        this.mycart.forEach(item => this.totalPrice += (item.quantity*item.price))
      }
    }
  }
}
</script>

<style scoped>
@media (min-width: 1025px) {
  .h-custom {
    height: 100vh !important;
  }
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.card-registration .select-arrow {
  top: 13px;
}

.bg-grey {
  background-color: #eae8e8;
}

@media (min-width: 992px) {
  .card-registration-2 .bg-grey {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

@media (max-width: 991px) {
  .card-registration-2 .bg-grey {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
}

.pay-btn {
  background-color: #f6e3c5;
}

.pay-btn:hover {
  background-color: #4cacbc;
}
</style>
