<template>
  <div class="mt-2">
    <div class="d-flex flex-row p-3">
        <!--  -->
      <img
        :src="require(`@/assets/images/${avatar}`)"
        width="40"
        height="40"
        class="rounded-circle mx-3"
      />
      <div class="w-100">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex flex-row align-items-center">
            <h6>{{user_name}}</h6>
          </div>
          <small>{{time}}</small>
        </div>
        <p class="text-justify comment-text mb-0">
          {{comment}}
        </p>
        <div class="d-flex flex-row user-feed">
          <button class="btn btn-danger mr-2 px-1">
            <i class="fas fa-comments"></i> Reply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'comment',
    'user_name',
    'avatar',
    'time'
  ],
  data() {
    return {
      
    };
  },
  methods: {
    
  },
  created () {
    // this.comment = 'Beautiful Shirt. I will be back.';
    // this.user_name = 'Justin Bieber';
    // this.time = '12h ago';
    this.avatar = 'user.png';
  },
};
</script>

<style scoped>
.comment-text {
  font-size: 20px;
}
.user-feed {
  font-size: 14px;
  margin-top: 12px;
}
.btn-danger {
  background-color: #6cc4a1 !important;
  border-color: #6cc4a1 !important;
}
.btn-danger:hover {
  background-color: #4cacbc !important;
  border-color: #4cacbc !important;
}
</style>