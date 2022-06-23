<template>
    <header class="header mb-2">
        <div class="container">
            <nav class="d-flex justify-content-between mb-2">
                <ul class="header__navbar-list">
                    <li class="header__navbar-item">
                        <span class="header__navbar-title--no-pointer">Connect</span>
                        <a href="" class="header__navbar-icon-link">
                        <i class="header__navbar-icon fab fa-facebook"></i>
                        </a>
                        <a href="" class="header__navbar-icon-link">
                        <i class="header__navbar-icon fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <ul class="header__navbar-list">
                <!-- <li class="header__navbar-item header__navbar-item--has-notify"> -->
                <!-- <a href="" class="header__navbar-item-link">
                  <i class="header__navbar-icon far fa-bell"></i>
                  Thông báo
                </a>
                <div class="header__notify">
                  <header class="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul class="header__notify-list">
                    <li class="header__notify-item header__notify-item--viewed">
                      <a href="" class="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1574758841-myphamohui-lgvina.png"
                          alt=""
                          class="header__notify-img"
                        />
                        <div class="header__notify-info">
                          <span class="header__notify-name"
                            >Mỹ phẩm Ohui chính hãng</span
                          >
                          <span class="header__notify-description"
                            >Mô tả mỹ phẩm Ohui chính hãng</span
                          >
                        </div>
                      </a>
                    </li>
                    <li class="header__notify-item">
                      <a href="" class="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1580794352-myphamohui-lgvina.png"
                          alt=""
                          class="header__notify-img"
                        />
                        <div class="header__notify-info">
                          <span class="header__notify-name"
                            >Xác thực chính hãng nguồn gốc các sản phẩm
                            Ohui</span
                          >
                          <span class="header__notify-description"
                            >Xác thực chính hãng nguồn gốc các sản phẩm
                            Ohui</span
                          >
                        </div>
                      </a>
                    </li>
                    <li class="header__notify-item">
                      <a href="" class="header__notify-link">
                        <img
                          src="https://img.tickid.vn/photos/resized/200x120/83-1576046204-myphamohui-lgvina.png"
                          alt=""
                          class="header__notify-img"
                        />
                        <div class="header__notify-info">
                          <span class="header__notify-name"
                            >Sale Sốc bộ dưỡng Ohui The First Tái tạo trẻ hóa da
                            SALE OFF 70%</span
                          >
                          <span class="header__notify-description"
                            >Siêu sale duy nhất 3 ngày 11-13/12/2019</span
                          >
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div class="header__notify-footer">
                    <a href="" class="header__notify-footer-btn">Xem tất cả</a>
                  </div>
                </div>
              </li> -->
              <!-- <li class="header__navbar-item">
                <a href="" class="header__navbar-item-link">
                  <i class="header__navbar-icon far fa-question-circle"></i>

                  Trợ giúp
                </a>
              </li> -->
                    <ul v-if="user == ''" class="header__navbar-list">
                        <!-- <a class="header__navbar-item header__navbar-item--strong header__navbar-item--separate" href="register">
                            Đăng ký
                        </a> -->
                        <a class="header__navbar-item header__navbar-item--strong" href="login">
                            Đăng Nhập
                        </a>
                    </ul>
                    
                    <li v-else class="header__navbar-item header__navbar-user">
                        <img src="../../assets/images/user.png" alt="" class="header__navbar-user-img"/>
                        <span class="header__navbar-user-name">{{user.username}}</span>
                        <ul class="header__navbar-user-menu dropdown-menu">
                            <li class="dropdown-item">
                                <a href="/profile">My Profile</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="">Địa chỉ của tôi</a>
                            </li>
                            <li class="dropdown-item">
                                <a href="">Đơn mua</a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li class="dropdown-item">
                                <a @click="logout" href="">Đăng xuất</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div class="mb-2">
                <div class="d-flex align-items-center">
                    <div class="text-center d-none d-sm-block col-sm-3 ">
                        <a href="/" class="fs-1 header__navbar-item">Evalley</a>
                    </div>
                    <div class="input-group me-2">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn btn-primary px-4" type="button"><i class="bi bi-search"></i></button>
                    </div>
                    <div class="col-sm-2 d-flex justify-content-center">
                        <div class="header__cart">
                            <div class="header__cart-wrap">
                                <i class="header__cart-icon fas fa-shopping-cart"></i>
                                <span class="header__cart-notice">{{cart.length}}</span>
                                <!-- No cart : header__cart-list--no-cart -->
                                <div class="header__cart-list ">
                                <!-- Nocart -->
                                <div v-if="!cart.length">
                                    <img src="../../assets/images/no-cart.png" alt="No Cart" class="header__cart-no-cart-img"/>
                                    <span class="header__cart-list-no-cart-msg">
                                        Chưa có sản phẩm
                                    </span>
                                </div>
                                <!-- Hascart -->
                                <h4 v-if="cart.length" class="header__cart-heading">Sản phẩm đã thêm</h4>
                                <!-- Cart item -->
                                <ul v-if="cart.length" class="header__cart-list-item">
                                    <li v-for="index in 5" class="header__cart-item">
                                        <img src="../../assets/images/product001.png" alt="" class="header__cart-img" />
                                        <div class="header__cart-item-info">
                                            <div class="header__cart-item-head">
                                            <a class="header__cart-item-name">
                                                Set sữa rửa mặt Ohui Prime sữa rửa mặt Ohui Prime
                                                sữa rửa mặt Ohui Prime
                                            </a>
                                            <div class="header__cart-item-price-wrap">
                                                <span class="header__cart-item-price">$32.99</span>
                                                <span class="header__cart-item-multiply">x</span>
                                                <span class="header__cart-item-qnt">2</span>
                                            </div>
                                            </div>
                                            <div class="header__cart-item-body">
                                            <span class="header__cart-item-description">Phân loại : Bạc</span>
                                            <span class="header__cart-item-remove">Xóa</span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                                <a v-if="cart.length" href="#" class="btn btn-primary header__cart-view-cart">Xem giỏ hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>    
    </header>
</template>

<script>
const { BASE_URL } = require("../../utils/config");
export default {
    name: 'DefaultHeader',
    data () {
        return {
            user: '',
            cart: [{},{}],
        }
    },
    methods: {
        logout(e) {
            localStorage.removeItem('token');
        }
    },
    created() {
        var token = localStorage.getItem('token');
        if (token) {
            this.$http.post(`${BASE_URL}/user/me`,{
                token: token,
            })
            .then(response => {
                if(response.data.success){
                    this.user = response.data.user;
                    localStorage.setItem('user', JSON.stringify(this.user));
                }
            })
        }
    },
    updated() {
        if (localStorage.getItem('cart')) {
            this.cart = JSON.parse(localStorage.getItem('cart'));
        }
    }

}
</script>

<style scoped>

.header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 100;
    background-image: linear-gradient(to right, var(--primary-color), #2b3940);
}

.header__navbar {
  display: flex;
  justify-content: space-between;
}

.header__navbar-list {
  list-style: none;
  padding-left: 0;
  margin: 5px 0 0 0;
}
.header__navbar-item {
  margin: 0 8px;
  position: relative;
  min-height: 26px;
}

.header__navbar-user {
  display: flex;
  justify-items: center;
  position: relative;
}

.header__navbar-user-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.header__navbar-user-name {

  margin-left: 4px;
  font-size: 1.4rem;
  font-weight: 400;
}

.header__navbar-user:hover .header__navbar-user-menu {
  display: block;
}

.header__navbar-user-menu {
  position: absolute;
  padding-left: 0;
  z-index: 101;
  top: calc(100% + 6px);
  right: 0;
  width: 160px;
  background-color: var(--white-color);
  border-radius: 2px;
  list-style: none;
  box-shadow: 0 1px 2px #e0e0e0;
  display: none;
}


.header__navbar-user-menu::after {
  position: absolute;
  right: 0;
  top: -16px;
  width: 56%;
  height: 20px;
  content: "";
  display: block;
}

.header__navbar-user-item--separate {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.header__navbar-user-item a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.4rem;
  display: block;
  padding: 8px 16px;
}

.header__navbar-user-item a:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.header__navbar-user-item a:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.header__navbar-user-item a:hover {
  background-color: #e8e8e8;
}

.header__navbar-item--has-qr:hover .header__qr {
  display: block;
}

.header__navbar-item--has-notify:hover .header__notify {
  display: block;
}

.header__navbar-item,
.header__navbar-item-link {
  display: inline-block;
  font-size: 1.3rem;
  color: var(--white-color);
  text-decoration: none;
  font-weight: 100;
}

.header__navbar-item,
.header__navbar-item-link,
.header__navbar-icon-link {
  display: inline-flex;
  align-items: center;
}

.header__navbar-item:hover,
.header__navbar-icon-link:hover,
.header__navbar-item-link:hover {
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
}

.header__navbar-item--strong {
  font-weight: 400;
}

.header__navbar-item--separate:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  border-left: 1px solid #fb9086;
  right: -9px;
  top: 50%;
  transform: translateY(-50%);
}

.header__navbar-icon-link {
  color: var(--white-color);
  text-decoration: none;
}

.header__navbar-icon-link:nth-child(2) {
  margin-left: 3px;
}

.header__navbar-icon {
  font-size: 1.8rem;
  margin: 0 4px;
}

.header__navbar-title--no-pointer {
  cursor: text;
  color: var(--white-color);
}

/* Header QR Code */

.header__qr {
  width: 186px;
  background-color: var(--white-color);
  position: absolute;
  left: 0;
  top: 118%;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 5px #999;
  display: none;
  animation: fadeIn ease-in 0.2s;
  z-index: 1;
}

.header__qr::before {
  position: absolute;
  left: 0;
  top: -16px;
  width: 100%;
  height: 20px;
  content: "";
  display: block;
}

.header__qr-img {
  width: 100%;
}

.header__qr-apps {
  display: flex;
  justify-content: space-between;
}

.header__qr-link:nth-child(1) {
  margin-left: 11px;
}
.header__qr-link:nth-child(2) {
  margin-right: 11px;
}

.header__qr-download-img {
  height: 16px;
}

.header__notify {
  position: absolute;
  z-index: 1;
  top: 118%;
  width: 404px;
  right: 0;
  background-color: var(--white-color);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  cursor: default;
  transform-origin: calc(100% - 32px) top;
  animation: headerNotifyGrowth ease-in 0.2s;
  display: none;
  will-change: animation, transform;
}

.header__notify::before {
  content: "";
  border-width: 20px 27px;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  position: absolute;
  right: 4px;
  top: -29px;
}

.header__notify::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  top: -16px;
  width: 90px;
  height: 20px;
}

@keyframes headerNotifyGrowth {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.header__notify-header {
  height: 40px;
  background-color: var(--white-color);
  user-select: none;
}

.header__notify-header h3 {
  color: #999;
  margin: 0 0 0 12px;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 40px;
}
.header__notify-list {
  padding-left: 0;
}
.header__notify-item {
  display: flex;
}
.header__notify-item:hover {
  background-color: #f7f7f7;
}

.header__notify-item--viewed {
  background-color: rgba(238, 75, 43, 0.08);
}
.header__notify-link {
  display: flex;
  padding: 12px;
  text-decoration: none;
  width: 100%;
}
.header__notify-img {
  width: 48px;
  object-fit: contain;
}
.header__notify-info {
  margin-left: 12px;
}
.header__notify-name {
  display: block;
  font-size: 1.4rem;
  color: var(--text-color);
  font-weight: 400;
  line-height: 1.8rem;
}
.header__notify-description {
  display: block;
  font-size: 1.2rem;
  line-height: 1.4rem;
  color: #6c757d;
  margin-top: 4px;
}

.header__notify-footer-btn {
  text-decoration: none;
  color: var(--text-color);
  padding: 10px 0;
  margin: auto;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  display: block;
}

/* Authen modal */

.auth-form {
  width: 500px;
  background-color: var(--white-color);
  border-radius: 5px;
  overflow: hidden;
}
.auth-form__container {
  padding: 0 32px;
}

.auth-form__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin-top: 10px;
}

.auth-form__heading {
  font-size: 2.2rem;
  font-weight: 400;
  color: var(--text-color);
  user-select: none;
}

.auth-form__switch-btn {
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--primary-color);
  cursor: pointer;
}

.auth-form__input {
  width: 100%;
  height: 40px;
  margin-top: 16px;
  padding: 0 12px;
  font-size: 1.4rem;
  border: 1px solid var(--border-color);
  border-radius: 2px;
  outline: none;
}

.auth-form__input:focus {
  border-color: #777;
}

.auth-form__aside {
  margin-top: 18px;
}

.auth-form__policy-text {
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: center;
  padding: 0 12px;
}

.auth-form__text-link {
  color: var(--primary-color);
  text-decoration: none;
}

.auth-form__controls {
  margin-top: 80px;
  display: flex;
  justify-content: flex-end;
}

.auth-form__controls-back {
  margin-right: 8px;
}

.auth-form__socials {
  background-color: #f5f5f5;
  padding: 16px 36px;
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
}

.auth-form__socials-icon {
  font-size: 1.8rem;
}

.auth-form__socials--facebook {
  color: var(--white-color);
  background-color: #3a5a98;
}

.auth-form__socials--facebook .auth-form__socials-icon {
  color: var(--white-color);
}

.auth-form__socials-title {
  margin: 0 36px;
}

.auth-form__socials--google {
  background-color: var(--white-color);
  color: #666;
}

.auth-form__help {
  display: flex;
  justify-content: flex-end;
}
.auth-form__help-link {
  text-decoration: none;
  font-size: 1.4rem;
  color: #939393;
}

.auth-form__help-separate {
  display: block;
  height: 22px;
  margin: 1px 16px 0;
  border-left: 1px solid #eaeaea;
}

.auth-form__help-forgot {
  color: var(--primary-color);
}

/* Header with search */

.header-with-search {
  height: var(--header-with-search-height);
  display: flex;
  align-items: center;
  margin: 0 8px;
}

.header-with-search{
  padding: 0 12px;
}


.header__mobile-search-icon{
  font-size: 2.6rem;
  color: var(--white-color);
}

.header__logo {
  width: 200px;
}

.header__logo-link {
  text-decoration: none;

  display: block;
  
}

.header__logo-img {
  width: 150px;
  color: var(--white-color);
}

/* Header search */
.header__search {
  height: 40px;
  flex: 1;
  background-color: var(--white-color);
  border-radius: 2px;
  display: flex;
  align-items: center;
}
.header__search-checkbox:checked ~ .header__search{
  display: flex;
}

.header__search-input-wrap {
  flex: 1;
  height: 100%;
  position: relative;
}

.header__search-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.4rem;
  color: var(--text-color);
  padding: 0 16px;
  border-radius: 2px;
}

.header__search-select {
  border-left: 1px solid #e8e8e8;
  padding-left: 16px;
  position: relative;
  cursor: pointer;
}

.header__search-select-label {
  font-size: 1.4rem;
  color: var(--text-color);
}
.header__search-select-icon {
  font-size: 1.4rem;
  color: rgb(131, 131, 131);
  margin: 0 16px 0 8px;
  position: relative;
  top: 1px;
}

.header__search-select:hover .header__search-option {
  display: block;
}

.header__search-option {
  position: absolute;
  margin-top: 18px;
  right: 0;
  top: calc(100% - 4px);
  width: 130px;
  list-style: none;
  box-shadow: 0 1px 2px #999;
  border-radius: 2px;
  padding-left: 0;
  display: none;
  animation: fadeIn ease-in 0.2s;
  z-index: 1;
}

.header__search-option::after {
  content: "";
  display: block;
  width: 100%;
  height: 20px;
  top: -20px;
  left: 0;
  position: absolute;
}

.header__search-option-item {
  background-color: var(--white-color);
  padding: 8px 8px;
}

.header__search-option-item:first-child {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.header__search-option-item:last-child {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.header__search-option-item:hover {
  background-color: #fafafa;
  cursor: pointer;
}

.header__search-option-item span {
  font-size: 1.4rem;
  color: var(--text-color);
  margin-left: 8px;
}

.header__search-option-item i {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin-left: 12px;
  display: none;
}

.header__search-option-item--active i {
  display: inline-block;
}

.header__search-btn {
  background-color: var(--primary-color);
  border: none;
  height: 34px;
  width: 60px;
  border-radius: 2px;
  margin-right: 3px;
  outline: none;
}

.header__search-btn:hover {
  color: #fb6445;
  cursor: pointer;
}

.header__search-btn-icon {
  font-size: 1.4rem;
  color: var(--white-color);
}

/* Search history */

.header__search-input:focus ~ .header__search-history {
  display: block;
}

.header__search-history {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  width: calc(100% - 16px);
  background-color: var(--white-color);
  border-radius: 2px;
  box-shadow: 0 1px 5px #999;
  display: none;
  overflow: hidden;
  z-index: 1;
}

.header__search-history-heading {
  margin: 6px 12px;
  font-size: 1.4rem;
  color: #999;
  font-weight: 400;
}

.header__search-history-list {
  padding: 0;
  margin: 6px 0 0;
  list-style: none;
}

.header__search-history-item {
  height: 38px;
  padding: 0 12px;
}

.header__search-history-item:hover {
  background-color: #fafafa;
}

.header__search-history-item a {
  text-decoration: none;
  font-size: 1.4rem;
  line-height: 38px;
  display: block;
  color: var(--text-color);
}

/* Header sort bar */
.header__sort-bar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  height: var(--header-sort-bar-height);
  background-color: var(--white-color);
  list-style: none;
  margin: 0;
  padding-left: 0;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  display: none;
}
.header__sort-item {
  flex: 1;
}
.header__sort-link {
  position: relative;
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.4rem;
  display: block;
  height: 100%;
  line-height: var(--header-sort-bar-height);
  text-align: center;
}
.header__sort-link::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  height: 60%;
  border-left: 1px solid var(--border-color);
  transform: translateY(-50%);
}

.header__sort-item:first-child .header__sort-link::before{
  display: none;
}

.header__sort-item--active .header__sort-link{
  color: var(--primary-color);
}

/* Header cart */
.header__cart {
  width: 150px;
  text-align: center;
}

.header__cart-wrap {
  position: relative;
  display: inline-block;
  padding: 0 12px;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  -webkit-user-select: none;

}

.header__cart-wrap:hover .header__cart-list {
  display: block;
}

.header__cart-icon {
  color: var(--white-color);
  font-size: 2.2rem;
  margin-top: 6px 0;
}

.header__cart-list {
  position: absolute;
  z-index: 1;
  top: calc(100% + 10px);
  right: -5px;
  background-color: var(--white-color);
  width: 400px;
  border-radius: 2px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  display: none;
  animation: fadeIn ease-in 0.2s;
  cursor: default;
}

.header__cart-list::after {
  content: "";
  border-width: 20px 26px;
  border-style: solid;
  border-color: transparent transparent var(--white-color) transparent;
  position: absolute;
  right: 0px;
  top: -29px;
  cursor: pointer;
}


.header__cart-no-cart-img {
  width: 80%;
  margin: 10%;

}

.header__cart-list-no-cart-msg {
  font-size: 1.4rem;
  margin-top: 14px;
  color: var(--text-color);
}

.header__cart-notice {
  position: absolute;
  padding: 1px 7px;
  top: -8px;
  right: -4px;
  font-size: 1rem;
  line-height: 1rem;
  border-radius: 10px;
  border: 2px solid var(--white-color);
  color: var(--primary-color);
  background-color: var(--white-color);
  user-select: none;
  -webkit-user-select: none;
}

.header__cart-heading {
  text-align: left;
  margin: 8px 0 8px 12px;
  font-size: 1.2rem;
  color: #999;
  font-weight: 400;
}

.header__cart-list-item {
  padding-left: 0;
  list-style: none;
  max-height: 56vh;
  overflow-y: auto;
}
.header__cart-item {
  display: flex;
  align-items: center;
}

.header__cart-item:hover {
  background-color: #f8f8f8;
}

.header__cart-img {
  width: 42px;
  height: 42px;
  margin: 12px;
  border: 1px solid var(--border-color);
}

.header__cart-item-info {
  width: 100%;
  margin-right: 12px;
}
.header__cart-item-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__cart-item-name {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  overflow: hidden;
  flex: 1;
  padding-right: 16px;
  max-height: 4rem;
  margin: 0;
  color: var(--primary-color);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: left;
}

.header__cart-item-price {
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--primary-color);
}
.header__cart-item-multiply {
  font-size: 1rem;
  margin: 0 4px;
  color: #757575;
}
.header__cart-item-qnt {
  font-size: 1.2rem;
  color: #757575;
}
.header__cart-item-body {
  display: flex;
  justify-content: space-between;
}
.header__cart-item-description {
  color: #757575;
  font-size: 1rem;
  font-weight: 300;
}

.header__cart-item-remove {
  color: var(--text-color);
  font-size: 1.4rem;
}

.header__cart-item-remove:hover {
  color: var(--primary-color);
  cursor: pointer;
}

.header__cart-view-cart {
  float: right;
  margin: 0px 12px 12px 0;  
}


</style>