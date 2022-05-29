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
    const {BASE_URL} =  require('../utils/config')
    
    export default {
        components: {
            Product
        },
        data(){
            return {
                onsale: [
                    {name: "productname",
                    price: "19.99",
                    image: require('@/assets/images/product001.png'),
                    brand: "Whoo",
                    origin: "Hàn Quốc",
                    tag: "New",
                    rating: 2,
                    quantity: 88,
                    price_sale: "10",
                    id: "5e9f9c9c9c9c9c9c9c9c9c9",
                    is_favourite: true,
                    },
                    {name: "productname",
                    price: "19.99",
                    image: require('@/assets/images/product001.png'),
                    brand: "Whoo",
                    origin: "Hàn Quốc",
                    tag: "New",
                    rating: 2,
                    quantity: 88,
                    price_sale: "10",
                    id: "5e9f9c9c9c9c9c9c9c9c9c9",
                    is_favourite: true,
                    },
                ],
            }
        },
        created(){
            this.getOnSale()
        },
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

</style>
