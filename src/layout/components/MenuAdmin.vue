<template >
    <div class="nav-container primary-menu">
        <div class="mobile-topbar-header">
            <div>
                <img src="../../assets/images/logo-icon.png" class="logo-icon" alt="logo icon">
            </div>
            <div>
                <h4 class="logo-text">a</h4>
            </div>
            <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
            </div>
        </div>
        <nav class="navbar navbar-expand-xl w-100">
            <ul class=" navbar-nav justify-content-start flex-grow-1 gap-1">
                <li class="nav-item">
                    
                        <a class="nav-link" >
                            <div class="parent-icon"><i class="fa-solid fa-user-tie"></i>
                            </div>
                            <div class="menu-title">ADMIN</div>
                        </a>
                 
                </li>             
               
                <li class="nav-item">
                    <router-link to="/admin/danh-sach-tu">
                        <a class="nav-link" href="/admin/danh-sach-tu">
                            <div class="parent-icon"><i class="fa-solid fa-box"></i>
                            </div>
                            <div class="menu-title">Danh Sách Tủ</div>
                        </a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/admin/danh-sach-khach-hang">
                        <a class="nav-link" href="/admin/danh-sach-khach-hang">
                            <div class="parent-icon"><i class="fa-solid fa-user"></i>
                            </div>
                            <div class="menu-title">Danh Sách Khách Hàng</div>
                        </a>
                    </router-link>
                </li>
                
              
            </ul>
        </nav>
    </div>
</template>
<script>
export default {

}
</script>
