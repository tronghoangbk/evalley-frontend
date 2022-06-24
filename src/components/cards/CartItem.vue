<template>
    <div>
        <div class="
                        row
                        mb-4
                        d-flex
                        justify-content-between
                        align-items-center
                      ">
            <div class="col-md-2 col-lg-2 col-xl-2">
                <img :src="require(`@/assets/images/${image}`)" class="img-fluid rounded-3" alt="Cotton T-shirt" />
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
                <h6 class="text-muted">{{ brand }}</h6>
                <h6 class="text-black mb-0">{{ name }}</h6>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button class="btn btn-link px-2" @click="decQuan()">
                    <i class="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" :value="quantity" type="number"
                    class="form-control form-control-sm " @input="(event) => (quantity = event.target.value)" />

                <button class="btn btn-link px-2" @click="incQuan()">
                    <i class=" fas fa-plus"></i>
                </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 class="mb-0">{{ (price*quantity).toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }} VND</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button @click="removeItem()" class="text-muted btn"><i class="fas fa-times"></i></button>
            </div>
        </div>
        <hr class="my-4" />
    </div>
</template>

<script>
export default {
    props: [
        'product_id',
        'brand',
        'name',
        'image',
        'quantity',
        'price',
    ],
    data() {
        return {

        };
    },
    methods: {
        decQuan() {
            if (this.quantity > 1) {
                this.quantity--;
                this.$parent.setQuan(this.product_id, this.quantity)
            }
        },
        incQuan() {
            this.quantity++;
            this.$parent.setQuan(this.product_id, this.quantity)
        },
        removeItem() {
            this.$parent.removeItem(this.product_id);
        }
    },
    created() {
    },
};
</script>

<style scoped>
</style>