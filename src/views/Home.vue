<template>
    <div class="home">
        <!-- Carousel Start -->
        <div class="container-fluid">
            <div class="row">
                <div class="d-none d-sm-none d-lg-block col-lg-2">
                    category
                </div>
                <div class="row col">
                    <div>sort</div>
                    <div v-for="index in 50" :key="index" class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2-4">
                        <a href="#" class="home-product-item">
                        <div class="home-product-item__img" :style="{backgroundImage: 'url('+require('@/assets/images/product001.png')+')'}"></div>
                        <span class="home-product-item__name">
                            Bộ kem đặc trị vùng mắt Ohui Age Recovery Wrinkle Cut
                            Serum.
                        </span>
                        <div class="home-product-item__price">
                            <span class="home-product-item__price-old"
                            >$30.99</span
                            >
                            <span class="home-product-item__price-current"
                            >$20.99</span
                            >
                        </div>
                        <div class="home-product-item__action">
                            <span class="home-product-item__like home-product-item__like--liked" >
                            <i class="home-product-item__like-icon-empty far fa-heart" ></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart" ></i> </span>
                            <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fas fa-star" ></i>
                            <i class="home-product-item__star--gold fas fa-star" ></i>
                            <i class="home-product-item__star--gold fas fa-star" ></i>
                            <i class="home-product-item__star--gold fas fa-star" ></i>
                            <i class="fas fa-star"></i>
                            </div>
                            <div class="home-product-item__sold">88 in stock</div>
                        </div>
                        <div class="home-product-item__origin">
                            <span class="home-product-item__brand">Whoo</span>
                            <span class="home-product-item__origin-name">Hàn Quắc</span>
                        </div>
                        <div class="home-product-item__favourite">
                            <i class="fas fa-check text-light"></i>
                            <span class="text-light">Yêu thích</span>
                        </div>
                        <div class="home-product-item__sale-off">
                            <span class="home-product-item__sale-off-percent">43%</span><br/>
                            <span class="home-product-item__sale-off-label">OFF</span>
                        </div>
                        <button class="btn btn-primary w-100">Add To Cart</button>
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
      
    </div>
</template>
<script>
  const {BASE_URL} =  require('../utils/config')
  console.log(`${BASE_URL}/login`)
</script>
<style scoped>

@media only screen and (min-width: 1600px) {
  .col-xxl-2-4 {
    width: 20%;
  }
}
.home {
    margin-top: 120px;
    position: relative;
}
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
  padding-top: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.home-product-item__name {
  font-size: 1.2rem;
  font-weight: 450;
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

  font-size: 1.4rem;
  color: #666;
  text-decoration: line-through;
}
.home-product-item__price-current {
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-left: 10px;
}
.home-product-item__action {
  display: flex;
  justify-content: space-between;
  margin: 6px 10px 0;
}
.home-product-item__like {
  font-size: 1rem;
  padding-top: 3px;
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
  font-size: 1rem;
  transform: scale(1);
  transform-origin: right;
  color: #d5d5d5;
  margin: -1px 0 0 auto;
  padding-top: 3px;
}

.home-product-item__star--gold {
  color: var(--start-gold-color);
}

.home-product-item__sold {
  font-size: 1.2rem;
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
