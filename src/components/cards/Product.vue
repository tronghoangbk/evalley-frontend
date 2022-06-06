<template>
    <a :href="'/product/'+id" class="home-product-item">
        <div class="home-product-item__img" :style="{'background-image': `url(${require('@/assets/images/'+image)})`}"></div>
        <span class="home-product-item__name">{{name}}</span>
        <div class="home-product-item__price">
            <span v-if="is_sale" class="home-product-item__price-old">{{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}}đ</span>
            <span class="home-product-item__price-current">{{price_sale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}}đ</span>
        </div>
        <div class="home-product-item__action">
            <span class="home-product-item__like home-product-item__like--liked" >
            <i class="home-product-item__like-icon-empty far fa-heart" ></i>
            <i class="home-product-item__like-icon-fill fas fa-heart" ></i> </span>
            <div class="home-product-item__rating">
            <i v-for="index in 5" v-key="index" v-if="index <= rating" class="home-product-item__star--gold fas fa-star" ></i>
            <i v-else class="fas fa-star"></i>
            </div>
            <div class="home-product-item__sold">{{quantity}} in stock</div>
        </div>
        <div class="home-product-item__origin">
            <span class="home-product-item__brand">{{brand}}</span>
            <span class="home-product-item__origin-name">{{origin}}</span>
        </div>
        <div v-if="tag != ''" class="home-product-item__favourite">
            <i class="fas fa-check text-light"></i>
            <span class="text-light"> {{tag}}</span>
        </div>
        <div v-if="is_sale" class="home-product-item__sale-off">
            <span class="home-product-item__sale-off-percent">{{sale_off_percent}}%</span><br/>
            <span class="home-product-item__sale-off-label">OFF</span>
        </div>
        <button class="btn btn-primary w-100">Add To Cart</button>
    </a>
</template>
<script>
export default {
    props: [
        'name',
        'price',
        'price_sale',
        'image',
        'brand',
        'origin',
        'rating',
        'quantity',
        'id',
        'is_favourite',
        'tag',
    ],
    data(){
        return {
            sale_off_percent: 0,
            is_sale: false,
        }
    },
    methods: {
        
    },
    created(){
        if (this.price_sale != null){
            this.sale_off_percent = Math.floor((1 - this.price_sale/this.price)*100)
            this.is_sale = true
        }
        else{
            this.is_sale = false
            this.price_sale = this.price
        }
        this.image = 'product001.png'
        console.log(this.image)
    }
}
</script>
<style scoped>

.home-product-item {
    display: block;
    position: relative;
    margin-top: 10px;
    background-color: var(--white-color);
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    transition: transform linear 0.1s;
    will-change: transform;
    text-decoration: none;
}

.home-product-item:hover {
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
}
.home-product-item__img {
    padding-top: 90%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
}
.home-product-item__name {
    font-size: 1.2rem;
    color: var(--primary-color);
    line-height: 1.5rem;
    margin: 10px 10px 6px;
    height: 3rem;
    overflow: hidden;
    display: block;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.home-product-item__price {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
}
.home-product-item__price-old {
    margin-left: 10px;
    font-size: 1rem;
    color: #666;
    text-decoration: line-through;
}
.home-product-item__price-current {
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-left: 10px;
}
.home-product-item__action {
    display: flex;
    justify-content: space-between;
    margin: 6px 10px 0;
}
.home-product-item__like {
    font-size: 0.9rem;
}

.home-product-item__like--liked .home-product-item__like-icon-fill {
    display: inline-block;
}

.home-product-item__like--liked .home-product-item__like-icon-empty {
  display: none;
}

i.home-product-item__like-icon-fill {
  display: none;
  color: #f63d30;
}

.home-product-item__rating {
  font-size: 0.9rem;
  transform: scale(1);
  transform-origin: right;
  color: #d5d5d5;
  margin: -1px 0 0 auto;
}

.home-product-item__star--gold {
  color: var(--start-gold-color);
}

.home-product-item__sold {
  font-size: 1rem;
  color: #666;
  margin-left: 3px;
}

.home-product-item__origin {
  display: flex;
  margin: 3px 10px 0;
  color: #595959;
  font-size: 1.2rem;
  font-weight: 300;
}

.home-product-item__origin-name {
  margin-left: auto;
}
.home-product-item__favourite {
  position: absolute;
  top: 10px;
  left: -4px;
  color: var(--primary-color);
  background-color: currentColor;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.home-product-item__favourite::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  border-top: 3px solid currentColor;
  border-left: 3px solid transparent;
  filter: brightness(60%);
}

.home-product-item__favourite span {
  color: var(--white-color);
  padding-right: 4px;
}
.home-product-item__favourite i {
  color: var(--white-color);
  font-size: 0.9rem;
  margin: 0 2px 0 5px;
}
.home-product-item__sale-off {
 
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 46px;
  text-align: center;
  background-color: rgba(255, 216, 64, 0.92);
  border-top-right-radius: 2px;
}

.home-product-item__sale-off::after {
  content: "";
  position: absolute;
  left: 0px;
  bottom: -5px;
  border-width: 0 20px 5px;
  border-style: solid;
  color: rgba(255, 216, 64, 0.92);
  border-color: transparent currentColor transparent currentColor;
}

.home-product-item__sale-off-percent {
  color: #ee4d2d;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.9rem;
}
.home-product-item__sale-off-label {
  color: var(--white-color);
  font-size: 1rem;
  line-height: 1rem;
  position: relative;
  top: -8px;
  font-weight: 500;
}
</style>