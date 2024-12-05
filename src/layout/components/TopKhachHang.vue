<template>
    <header>
        <div style="background-color: aqua;" class="topbar d-flex align-items-center">
            <nav class="navbar navbar-expand">
                <router-link to="/">
                    <div class="topbar-logo-header">
                        <div class="">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThw5Qyx4IY-4bLhc3UuDVsGxUzl5yWfSuwFg&s" class="logo-icon" alt="logo icon">
                        </div>
                        <div class="">
                            <router-link to="/">
                                <h4 style="color: black; font-weight: " class="logo-text">LOCKER</h4>
                            </router-link>
                        </div>
                    </div>
                </router-link>
                <div class="mobile-toggle-menu"><i class='bx bx-menu'></i></div>
                <div class="search-bar flex-grow-1">
                    <div class="row">
                        <div class="col-lg-10">
                            
                        </div>
                        <div class="col-lg-2">
                            
                        </div>
                    </div>
                </div>
                <div class="top-menu ms-auto">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item mobile-search-icon">
                            <a class="nav-link" href="#"> <i class='bx bx-search'></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown dropdown-large">
                            <router-link to="/khach-hang/nap-tien">
                                <a class="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative">
                                    <i class="fa-solid fa-credit-card"></i>
                                </a>
                            </router-link>
                        </li>
                       
                       
                    </ul>
                </div>
                <div class="user-box dropdown">
                    <a class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret" href="#"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img style="height: 60px; width: 60px;"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO0uhwiK1yDASJ6SkO3SLFNU3dtIb4NMiBA&s" class="user-img " alt="user avatar">
                        <div class="user-info ps-3">
                            <p class="user-name mb-0"></p>
                            <p class="designattion mb-0"></p>
                        </div>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <div class="dropdown-divider mb-0"></div>
                        </li>
                        <li><a v-on:click="dangXuat()" class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-log-out-circle'></i><span>Logout</span></a>
                        </li>
                        <li><a  v-on:click="dangXuatALL()" class="dropdown-item" href="javascript:;"><i
                                    class='bx bx-log-out-circle'></i><span>LogoutAll</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>
<script>
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../core/baseRequest';
import { Axios } from "axios";
import baseRequestUser from "../../core/baseRequestUser";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
       

            
        }
    },
    mounted() {

    },
    methods: {

        dangXuat(){
            baseRequestUser
                .get('khach-hang/dang-xuat')
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.$router.push('/khach-hang/dang-nhap')
 
                    } else {
                        toaster.error(res.data.message);
                    }
                    
                })

        },
        dangXuatALL(){
            baseRequestUser
                .get('khach-hang/dang-xuat-all')
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.$router.push('/khach-hang/dang-nhap')

                    } else {
                        toaster.error(res.data.message);
                    }
                    
                })

        },
    },
}
</script>
<style>
    .logo-text {
    font-family: 'Poppins', sans-serif; /* Font chữ hiện đại */
    font-weight: 700; /* Đậm */
    font-size: 28px; /* Kích thước lớn */
    color: #333; /* Màu chữ đen nhẹ */
    letter-spacing: 2px; /* Khoảng cách giữa các ký tự */
    text-transform: uppercase; /* Chuyển thành chữ in hoa */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng chữ */
    }
    .logo-text:hover {
    color: #007bff; /* Đổi sang màu xanh lam */
    text-shadow: 3px 3px 6px rgba(0, 123, 255, 0.5); /* Hiệu ứng bóng nổi bật */
    transition: all 0.3s ease; /* Chuyển động mượt mà */
    }
</style>
