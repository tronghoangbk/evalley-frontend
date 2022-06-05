<template>
    <div class="d-flex align-items-center justify-content-center vh-100">
        <div class="text-center">
            <img v-if="success" src="../assets/images/tick.png"/>
            <img v-else src="../assets/images/x.png"/>
            <p class="fs-3 m-4">{{message}}.</p>
            <a href="/login" class="btn btn-primary">Continue</a>
        </div>
    </div>
</template>

<script>
const {BASE_URL} =  require('../utils/config')
    export default {
        data(){
            return {
                message : "",
                success : false
            }
        },
        created() {
            this.$http.post(`${BASE_URL}/user/activate`, {
                username: this.$route.params.username,
                id: this.$route.params.token
            })
            .then(response => {
                this.message = response.data.message
                if (this.message == "The account has been activated") {
                    this.success = true
                }
            })
        }
    }

</script>

<style scoped>
img {
    width: 10rem;
    height: 10rem;
}
</style>
