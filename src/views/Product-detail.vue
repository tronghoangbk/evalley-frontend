<template>
  <div class="container container-product">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="images p-3">
                <img
                  :src="require(`@/assets/images/${image}`)"
                  alt=""
                  class="header__cart-img"
                />
              </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-8">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center">
                    <i class="fa fa-long-arrow-left"></i>
                    <span class="ml-1">Back</span>
                  </div>
                  <i class="fa fa-shopping-cart text-muted"></i>
                </div>
                <div class="mt-4 mb-3">
                  <span class="text-uppercase text-muted brand"
                    >Brand: {{ brand }}</span
                  >
                  <h5 class="text-uppercase">
                    {{ name }}
                  </h5>
                  <h7 class="text-uppercase">Origin: {{ origin }}</h7>
                  <p></p>
                  <h7 class="text-uppercase">Quantity Left:{{ quantity }}</h7>
                  <p></p>
                  <div class="price d-flex flex-row align-items-center">
                    <span class="text-uppercase">Price: </span>
                    <span class="act-price"> {{price_sale}}VND</span>
                    <div class="ml-2">
                      <small class="dis-price"> {{ price }}VND</small>
                      <span> {{ sale_off_percent }}% OFF</span>
                    </div>
                  </div>
                  <!-- <div class="price d-flex flex-row align-items-center">
                    <span class="text-uppercase">Price:  </span>
                    <span class="act-price">20 VND {{price}}</span>
                  </div> -->
                </div>
                <p class="about">
                  {{ description }}
                </p>
                <div class="sizes mt-5">
                  <h6 class="text-uppercase">Size</h6>
                  <label class="radio">
                    <input type="radio" name="size" value="S" checked />
                    <span>S</span>
                  </label>
                  <label class="radio">
                    <input type="radio" name="size" value="M" /> <span>M</span>
                  </label>
                  <label class="radio">
                    <input type="radio" name="size" value="L" /> <span>L</span>
                  </label>
                  <label class="radio">
                    <input type="radio" name="size" value="XL" />
                    <span>XL</span>
                  </label>
                  <label class="radio">
                    <input type="radio" name="size" value="XXL" />
                    <span>XXL</span>
                  </label>
                </div>
                <p></p>
                <h6 class="text-uppercase">Quantity</h6>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button @click="decQuan()" type="button" class="btn btn-info">
                    <i class="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    :value="quantitytoadd"
                    @input="event => quantitytoadd = event.target.value"
                  
                  />
                  <button
                    @click="quantitytoadd ++"
                    type="button"
                    class="btn btn-warning"
                  >
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="cart mt-4 align-items-center">
                  <button class="btn btn-danger text-uppercase mr-2 px-4">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Comment Box  -->
    <div class="container mt-5 mb-5">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-sm-10 col-md-10 col-lg-">
          <div class="card-cmt">
            <div class="p-3">
              <h4>Comments</h4>
            </div>
            <div class="mt-3 d-flex flex-row align-items-center p-5 form-color">
              <img
                src="https://i.imgur.com/zQZSWrt.jpg"
                width="50"
                class="rounded-circle mr-2 item-cmt"
                margin="50"
              />
              <textarea
                class="form-control item-cmt"
                aria-label="With textarea "
                @input="event => textCmt = event.target.value"
              ></textarea>
              <button class="btn btn-danger mr-2 px-2 item-cmt">Send</button>
            </div>

            <div class="mt-2">
              <div class="d-flex flex-row p-3">
                <img
                  src="https://i.imgur.com/zQZSWrt.jpg"
                  width="40"
                  height="40"
                  class="rounded-circle mr-3"
                />
                <div class="w-100">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex flex-row align-items-center">
                      <h6>Brian selter</h6>
                    </div>
                    <small>12h ago</small>
                  </div>
                  <p class="text-justify comment-text mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <div class="d-flex flex-row user-feed">
                    <button class="btn btn-danger mr-2 px-1">
                      <i class="fas fa-comments"></i> Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "price",
    "price_sale",
    "image",
    "brand",
    "origin",
    "rating",
    "quantity",
    "id",
    "is_favourite",
    "tag",
    "description",
  ],
  data() {
    return {
      sale_off_percent: 0,
      is_sale: false,
      quantitytoadd: 1,
      textCmt: null
    };
  },
  methods: {
   decQuan(){
    if(this.quantitytoadd>1){
      this.quantitytoadd--;
    }
   }
  },
  created() {
    this.image = "product001.png";
    this.name = "T-Shirt Drew House";
    this.brand = "Drew Fashion";
    this.price = "300";
    this.price_sale = "150";
    this.description = "Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeansor trousers complete the look.Shop from a wide range oft-shirt from orianz. Pefect for your everyday use, you couldpair it with a stylish pair of jeans or trousers complete the look."; 
    if (this.price_sale != null){
            this.sale_off_percent = Math.floor((1 - this.price_sale/this.price)*100)
            this.is_sale = true
        }
        else{
            this.is_sale = false
            this.price_sale = this.price
        }
  },
};
</script>

<style scoped>
body {
  background-color: #000;
}
.card {
  border: none;
}
.product {
  background-color: #f6e3c5;
}
.brand {
  font-size: 30px;
}
.act-price {
  color: #4cacbc;
  font-weight: 700;
}
.dis-price {
  text-decoration: line-through;
}
.about {
  font-size: 15px;
}
.color {
  margin-bottom: 10px;
}
label.radio {
  cursor: pointer;
}
label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}
label.radio span {
  padding: 2px 9px;
  border: 2px solid #6cc4a1;
  display: inline-block;
  color: #6cc4a1;
  border-radius: 3px;
  text-transform: uppercase;
}
label.radio input:checked + span {
  border-color: #6cc4a1;
  background-color: #6cc4a1;
  color: #fff;
}
.btn-danger {
  background-color: #6cc4a1 !important;
  border-color: #6cc4a1 !important;
}
.btn-danger:hover {
  background-color: #4cacbc !important;
  border-color: #4cacbc !important;
}
.btn-danger:focus {
  box-shadow: none;
}
.cart i {
  margin-right: 10px;
}
.container-product {
  margin-top: 7%;
}
.price {
  font-size: 25px;
}
.btn-group {
  width: 150px;
}
.card-cmt {
  background-color: #fff;
  border: none;
}

.form-color {
  background-color: #ffff;
}

.c-badge {
  background-color: #35b69f;
  color: white;
  height: 20px;
  font-size: 11px;
  width: 92px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
}

.comment-text {
  font-size: 20px;
}

.wish {
  color: #35b69f;
}

.user-feed {
  font-size: 14px;
  margin-top: 12px;
}
.item-cmt {
  margin-right: 15px;
}
</style>
