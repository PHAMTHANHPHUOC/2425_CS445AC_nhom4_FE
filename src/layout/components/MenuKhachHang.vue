<template>
  <div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
      <div>
        <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
      </div>

      <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
      </div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class=" navbar-nav justify-content-start flex-grow-1 gap-1">


        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link" href="/">
              <div class="parent-icon"><i class="fa-solid fa-house"></i>
              </div>
              <div class="menu-title">Trang Chủ</div>
            </a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/khach-hang/nap-tien">
            <a class="nav-link" href="/khach-hang/nap-tien">
              <div class="parent-icon"><i class="fa-solid fa-credit-card"></i>
              </div>
              <div class="menu-title">Thông Tin Thanh Toán</div>
            </a>
          </router-link>
          </li>
        <!-- <li class="nav-item">
                    <router-link to="/khach-hang/hoa-don">
                        <a class="nav-link" href="/khach-hang/hoa-don">
                            <div class="parent-icon"><i class="fa-solid fa-money-bill"></i>
                            </div>
                            <div class="menu-title">Hóa Đơn Thanh Toán</div>
                        </a>
                    </router-link>
                </li> -->
      </ul>
    </nav>
  </div>
</template>
<script>
export default {

}
</script>
<style>
</style>
