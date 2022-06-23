<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
        <AdminSidebar />
        <div class="col py-3">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import AdminSidebar from '../components/partials/AdminSidebar.vue'
export default {
  name: 'admin',
  components: {
    AdminSidebar
  }
}
</script>

