<template>
  <div>
    <AuthHeader/>
    <router-view/>
  </div>
</template>

<script>
import AuthHeader from '../components/AuthHeader.vue'
export default {
  name: 'admin',
  components: {
    AuthHeader
  }
}
</script>
