<template>
    <div class="home">
        <!-- Carousel Start -->
        
        <div class="container-fluid">
            <div class="row">
                <div class="d-none d-sm-none d-lg-block col-lg-2">
                    category
                </div>
                <div class="row col">
                   <div class="row home-filter">
                        <span class="col-auto fs-5 pt-1">Sắp xếp theo</span>
                        <ul class="col-auto nav nav-pills nav-fill">
                            <li class="nav-item mx-2">
                                <button class="nav-link border me-2 active" href="#">Active</button>
                            </li>
                            <li class="nav-item mx-2">
                                <button class="nav-link border me-2" href="#">Link</button>
                            </li>
                            <li class="nav-item mx-2">
                                <button class="nav-link border me-2" href="#">Link</button>
                            </li>
                        </ul>
                        <div class="select-input col">
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
                        <div class="col-auto home-filter__page">
                            <span class="home-filter__page-num">
                                <span class="home-filter__page-current">{{page}}</span>/{{maxPage}}
                            </span>
                            <div class="home-filter__page-control">
                                <a @click="decPage" :class="page>1?'home-filter__page-btn':'home-filter__page-btn home-filter__page-btn--disabled'">
                                    <i class="home-filter__page-icon fas fa-angle-left"></i>
                                </a>
                                <a @click="incPage" :class="page !== maxPage?'home-filter__page-btn':'home-filter__page-btn home-filter__page-btn--disabled'">
                                    <i class="home-filter__page-icon fas fa-angle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4"><small class="display-6 text-muted mt-4 d-inline">On sale</small><a href="" class="blockquote float-end me-4">See all <i class="home-filter__page-icon fas fa-angle-right"></i></a></div>
                    
                    <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2-4"
                        v-for='product in onsale' :key="product._id" >
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
                            :is_favourite="product.is_favourite">
                        </Product>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        
        
      
    </div>
</template>
<script>
    import Product from '@/components/cards/Product.vue'
    const {BASE_URL} =  require('../../utils/config')
    
    export default {
        components: {
            Product
        },
        data(){
            return {
                page: 1,
                maxPage: 2,
                sort: '',
                category: '',
                products: [],
                onsale: [],
                result: [],
                recommended: [],


            }
        },
        beforeCreate(){
            this.$http.get(`${BASE_URL}/product/getall`)
            .then(res => {
                this.products = res.data.filter(product => product.quantity > 0 && product.status === 'active')
                console.log(this.products)
                console.log(this.products[0]._id)
                this.onsale = this.products.filter(product => product.price_sale !== null)
            })
            .catch(err => {
                console.log(err)
            })


        },
        methods: {
            incPage(){
                if(this.page < this.maxPage){
                    this.page++
                }
            },
            decPage(){
                if(this.page > 1){
                    this.page--
                }
            }
        }
    }
</script>
<style scoped>


.home {
    margin-top: 150px;
    position: relative;
}
@media only screen and (min-width: 1600px) {
    .col-xxl-2-4 {
        width: 20%;
    }
}


.home-filter {
  background-color: rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding: 12px 22px;
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
  font-size: 1.5rem;
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
  min-width: 100px;
  max-width: 300px;
  height: 42px;
  padding: 0 12px;
  border-radius: 2px;
  background-color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.select-input__label {
  font-size: 1.2rem;
}

.select-input__icon {
  font-size: 1.4rem;
  color: rgb(131, 131, 131);
  position: relative;
  top: 1px;
}

.select-input:hover .select-input__list{
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
  font-size: 1.4rem;
  color: var(--text-color);
  display: block;
  padding: 8px 0;
}

.select-input__link:hover{
  color: var(--primary-color);
}

</style>
