<template>
  <div>
    <DefaultHeader />
    <router-view/>
  </div>
</template>

<script>
import DefaultHeader from '../components/partials/DefaultHeader.vue'
export default {
  name: 'admin',
  components: {
    DefaultHeader
  }
}
</script>
