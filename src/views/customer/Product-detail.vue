<template>
  <div class="container-fluid container-product">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <div class="images p-3">
                <img :src="require(`@/assets/images/${image}`)" alt="" class="header__cart-img" />
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
                  <span class="text-uppercase text-muted brand">Brand: {{ brand }}</span>
                  <h5 class="text-uppercase">
                    {{ name }}
                  </h5>
                  <h7 class="text-uppercase">Origin: {{ origin }}</h7>
                  <p></p>
                  <h7 class="text-uppercase">Quantity Left:{{ quantity }}</h7>
                  <p></p>
                  <div v-if="is_sale" class="price d-flex flex-row align-items-center">
                    <span class="text-uppercase me-2">Price: </span>
                    <span class="act-price me-2">
                      {{
                      
                          price_sale
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                      }}VND</span>
                    <div class="ml-2">
                      <small class="dis-price me-2">
                        {{
                            price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                        }}VND</small>
                      <span> {{ sale_off_percent }}% OFF</span>
                    </div>
                  </div>
                  <div v-if="!is_sale" class="price d-flex flex-row align-items-center">
                    <span class="text-uppercase">Price:</span>
                    <span class="act-price">{{
                        " " +
                        price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    }}VND
                    </span>
                  </div>
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
                  <input type="number" class="form-control" min="1" :value="quantitytoadd"
                    @input="(event) => (quantitytoadd = event.target.value)" />
                  <button @click="quantitytoadd++" type="button" class="btn btn-warning">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div class="cart mt-4 align-items-center">
                  <button class="btn btn-danger text-uppercase mr-2 px-4" @click="addToCart()">
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
    <div class="container-fluid mt-5 mb-5">
      <div class="row height d-flex justify-content-center align-items-center">
        <div class="col-sm-10 col-md-10 col-lg-">
          <div class="card-cmt">
            <div class="p-3">
              <h4>Comments</h4>
            </div>
            <div class="mt-3 d-flex flex-row align-items-center p-5 form-color">
              <img src="https://i.imgur.com/zQZSWrt.jpg" width="50" class="rounded-circle mr-2 item-cmt" margin="50" />
              <textarea class="form-control item-cmt" aria-label="With textarea "
                @input="(event) => (textCmt = event.target.value)"></textarea>
              <button class="btn btn-danger mr-2 px-2 item-cmt">Send</button>
            </div>
            <Comment :comment="'Greate Service!!!'" :user_name="'Hoang Pham'" :avatar="'user.png'" :time="'12mins ago'">
            </Comment>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/cards/Comment.vue";
const { BASE_URL } = require("../../utils/config");
export default {
  components: {
    Comment,
  },
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
      textCmt: null,
      product_id: null,
    };
  },
  methods: {
    decQuan() {
      if (this.quantitytoadd > 1) {
        this.quantitytoadd--;
      }
    },
    addToCart() {
      var mycart = JSON.parse(localStorage.getItem('mycart')) || [];
      if (this.price_sale == null) {
        if (!mycart.find(element => element.product_id === this.product_id)) {
          mycart.push({ product_id: this.product_id, quantity: this.quantitytoadd, name: this.name, brand: this.brand, price: this.price, image: this.image});
        }
        else{
          const item = mycart.find(element => element.product_id===this.product_id);
          item.quantity += this.quantitytoadd;
        }
      } else {
        if (!mycart.find(element => element.product_id === this.product_id)) {
          mycart.push({ product_id: this.product_id, quantity: this.quantitytoadd, name: this.name, brand: this.brand, price: this.price_sale, image: this.image });
        }
        else{
          const item = mycart.find(element => element.product_id===this.product_id);
          item.quantity += this.quantitytoadd;
        }
      }
      localStorage.setItem('mycart', JSON.stringify(mycart))
    }

  },
  created() {
    // localStorage.clear();
    this.product_id = this.$route.params.id;
    this.$http
      .get(`${BASE_URL}/product/detail/${this.product_id}`)
      .then((res) => {
        this.image = "product001.png";
        this.name = res.data.name;
        this.brand = res.data.brand;
        this.price = res.data.price;
        this.price_sale = res.data.price_sale;
        this.origin = res.data.origin;
        this.description = res.data.description;
        this.quantity = res.data.quantity;
        if (this.price_sale != null) {
          this.sale_off_percent = Math.floor(
            (1 - this.price_sale / this.price) * 100
          );
          this.is_sale = true;
        } else {
          this.is_sale = false;
          this.price_sale = this.price;
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

label.radio input:checked+span {
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
  background-color: #F9EBC8;
  border: none;
}

.form-color {
  background-color: #FEFBE7;
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
