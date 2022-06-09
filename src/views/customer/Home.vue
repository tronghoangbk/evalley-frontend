<template>
  <div class="home">
    <!-- Carousel Start -->

    <div class="container-fluid">
      <div class="row">
        <div class="d-none d-sm-none d-lg-block col-lg-3 col-xxl-2 bg-white pt-3">
          <span class="h4 text-muted">Category</span>
          <div class="accordion mt-3" id="category">
            <div v-for="(category, index) in categories" v-if="category.parent == 'root'" class="accordion-item">
              <h2 class="accordion-header" :id="'heading'+index">
                <button class="accordion-button p-2" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+index" aria-expanded="true" :aria-controls="'collapse'+index">
                  {{category.name}}
                </button>
              </h2>
              <div :id="'collapse'+index" class="accordion-collapse collapse" :aria-labelledby="'heading'+index" data-bs-parent="#category">
                <div class="accordion-body py-2">
                  <ul class="m-0">
                    <li v-for="child in categories" v-if="child.parent == category.name">
                      <a href="#">{{child.name}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="row home-filter">
            <span class="col-auto fs-6 mt-2 p-1">Sắp xếp theo</span>
            <ul class="col-auto nav nav-pills nav-fill mt-2">
              <li class="nav-item ms-1">
                <button class="nav-link btn-sm border active" href="#">Rating</button>
              </li>
              <li class="nav-item ms-2">
                <button class="nav-link btn-sm border" href="#">Top product</button>
              </li>
            </ul>
            <div class="select-input col mt-2">
              <span class="select-input__label">Giá</span>
              <i class="select-input__icon fas fa-angle-down"></i>
              <!-- List option -->
              <ul class="select-input__list">
                <li class="select-input__item">
                  <a href="#" class="select-input__link">Giá: Thấp đến Cao</a>
                </li>
                <li class="select-input__item">
                  <a href="#" class="select-input__link">Giá: Cao đến Thấp</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="mt-4 bg-white p-2 mb-n2 rounded-3 shadow bg-body rounded">
              <small class="display-6 text-muted mt-4 d-inline">On sale</small>
              <a href="" class="blockquote float-end align-middle m-2">
                  See all <i class="home-filter__page-icon fas fa-angle-right"></i>
              </a>
            </div>
          </div>
            <div class="row scrolling">
            <div 
              class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2-4 p-1"
              v-for="product in onsale"
              :key="product._id">
              <Product
                :name="product.name"
                :price_sale="product.price_sale"
                :price="product.price"
                :image="product.image"
                :brand="product.brand"
                :tag="product.tag"
                :origin="product.origin"
                :rating="product.rating"
                :quantity="product.quantity"
                :id="product._id"
                :is_favourite="product.is_favourite"
              >
              </Product>
            </div>
            </div>
          <div class="row">
          <div class="mt-2 bg-white p-2 mb-n2 rounded-3 shadow bg-body rounded">
            <small class="display-6 text-muted mt-4 d-inline">For you</small>
                <a href="" class="blockquote float-end align-middle m-2">
                    See all <i class="home-filter__page-icon fas fa-angle-right"></i>
                </a>
          </div>
          </div>
          <div class="row scrolling">
          <div
            class="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3 col-xxl-2-4 p-1"
            v-for="product in foryou"
            :key="product._id">
            <Product
              :name="product.name"
              :price_sale="product.price_sale"
              :price="product.price"
              :image="product.image"
              :brand="product.brand"
              :tag="product.tag"
              :origin="product.origin"
              :rating="product.rating"
              :quantity="product.quantity"
              :id="product._id"
              :is_favourite="product.is_favourite"
            >
            </Product>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-4">
            <li :class="page==1?'page-item disabled':'page-item'">
              <a class="page-link" @click="page-=1" tabindex="-1" aria-disabled="true">Previous</a>
            </li>
            <li v-for="index in maxPage" :class="index == page?'page-item active':'page-item'" v-if="index < page + 3 & index > page - 3"><a class="page-link" @click="page=index">{{index}}</a></li>
            <li :class="page==maxPage?'page-item disabled':'page-item'">
              <a class="page-link" @click="page+=1" tabindex="-1" aria-disabled="true">Next</a>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Product from "@/components/cards/Product.vue";
const { BASE_URL } = require("../../utils/config");

export default {
  components: {
    Product,
  },
  data() {
    return {
      page: 1,
      maxPage: 10,
      sort: "",
      category: "",
      products: [],
      onsale: [],
      result: [],
      recommended: [],
      foryou: [],
      categories: [],
    };
  },
  created() {
    this.$http.get(`${BASE_URL}/product/getall`)
      .then((res) => {
        this.products = res.data.filter(
          (product) => product.quantity > 0 && product.status === "active"
        );
        this.onsale = this.products.filter((product) => product.price_sale !== null);
        this.foryou = this.products
        /*this.products.forEach((product) => {
          if (product.sale_start < new Date() && product.sale_end > new Date() && product.price_sale != null) {
            this.onsale.push(product);
          }
        });*/
      })
      .catch((err) => {
        console.log(err);
      });
    this.$http.get(`${BASE_URL}/category/getall`)
      .then((res) => {
        this.categories = res.data;
        console.log(this.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    incPage() {
      if (this.page < this.maxPage) {
        this.page++;
      }
    },
    decPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
  },
};
</script>
<style scoped>
  .scrolling {
    overflow-x: auto;
    flex-wrap: nowrap;
  } 
  .scrolling::-webkit-scrollbar{
  width: 0;
}

.home {
  margin-top: 150px;
  position: relative;
}
@media only screen and (min-width: 1500px) {
  .col-xxl-2-4 {
    width: 20%;
  }
}
.home-filter {
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding: 12px 15px;
  border-radius: 2px;
}
.home-filter__page {
  display: flex;
  align-items: center;
  margin-left: auto;
  right: 0;
  position: relative;
}

.home-filter__page-num {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-right: 12px;
}

.home-filter__page-current {
  color: var(--primary-color);
}

.home-filter__page-control {
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  width: 72px;
  height: 36px;
}

.home-filter__page-btn {
  flex: 1;
  background-color: var(--white-color);
  display: flex;
  text-decoration: none;
}

.home-filter__page-btn--disabled {
  background-color: #f9f9f9;
  cursor: not-allowed;
}

.home-filter__page-btn--disabled .home-filter__page-icon {
  color: #ccc;
}

.home-filter__page-btn:first-child {
  border-right: 1px solid #eee;
}

.home-filter__page-icon {
  margin: auto;
  font-size: 1.5rem;
  color: #555;
}
.select-input {
  min-width: 180px;
  max-width: 300px;
  height: 40px;
  padding: 0 12px;
  border-radius: 2px;
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.select-input__label {
  font-size: 1rem;
}

.select-input__icon {
  font-size: 1.2rem;
  color: rgb(131, 131, 131);
  position: relative;
  top: 1px;
}

.select-input:hover .select-input__list {
  display: block;
}

.select-input__list {
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  border-radius: 2px;
  background-color: var(--white-color);
  padding: 10px 16px;
  list-style: none;
  display: none;
  animation: fadeIn ease-in 0.2s;
  z-index: 1;
}

.select-input__link {
  text-decoration: none;
  font-size: 1rem;
  color: var(--text-color);
  display: block;
  padding: 8px 0;
}

.select-input__link:hover {
  color: var(--primary-color);
}
</style>
