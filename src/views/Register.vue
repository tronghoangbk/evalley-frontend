<template>
    <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4 needs-validation">
                
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-floating flex-fill mb-0">
                      <input @click="focus" type="text" v-model="username" class="form-control" required minlength="6"/>
                      <label >Username</label>
                      <div class="invalid-feedback">
                        Username must be at least 6 characters.
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-floating flex-fill mb-0">
                      <input @click="focus" type="email" v-model="email" class="form-control" required placeholder="name@example.com"/>
                      <label class="form-label">Your Email</label>
                      <div class="invalid-feedback">
                        Email is required.
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-floating flex-fill mb-0">
                      <input @click="focus" type="password" v-model="password" class="form-control" required minlength="6"/>
                      <label class="form-label">Password</label>
                      <div class="invalid-feedback">
                        Password must be at least 6 characters.
                      </div>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-floating flex-fill mb-0">
                      <input @click="focus" type="password" v-model="password2" class="form-control" required minlength="6"/>
                      <label class="form-label">Repeat your password</label>
                    </div>
                  </div>


                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg" @click="handleSubmit">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
    const {BASE_URL} =  require('../utils/config')
    export default {
        data(){
            return {
                username:'',
				email:'',
				password:'',
				password2:''
            }
        },
        methods : {
            handleSubmit(e){
                e.preventDefault()
				this.$http.post(`${BASE_URL}/user/register`,{
					username:this.username,
					email:this.email,
					password:this.password,
					password2:this.password2
				}).then(res=>{
                    console.log(res.data)
					if(res.data.success){
                        console.log(1)
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Please check your mailbox!',
                            confirmButtonColor: 'var(--primary-color)',
                            confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.value) {
                                this.$router.push('/login')
                            }
                        })
                    }
                    else{
                        console.log(2)
                        Swal.fire({
                            icon: 'info',
                            title: 'Error',
                            text: `${res.data[0].msg}`,
                            confirmButtonColor: 'var(--primary-color)',
                            confirmButtonText: 'Close',
                        });
                        
                    }
					
				}).catch(err=>{
					console.log(err)
				})
            },
            focus(){
                document.querySelectorAll('.needs-validation')[0].classList.add('was-validated')
            }
        }
    }
</script>
