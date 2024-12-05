<template>
    <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
        <div class="col mx-auto">
            <div class="my-4 text-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEU2rXvs5sNGYzb9RYhxYVXnc8G3xX9fBbw&s" width="180" alt="">
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="border p-4 rounded">
                        <div class="text-center">
                            <h3 class="">Đăng Kí Tài Khoản</h3>
                            <p>Bạn đã có tài khoản? 
                                <router-link to="/admin/dang-nhap">
                                    <a href="/admin/dang-nhap">Đăng Nhập</a> 
                                </router-link>
                            </p>
                        </div>
                        <div class="login-separater text-center mb-4">
                            <hr>
                        </div>
                        <div class="form-body">
                            <form class="row g-3">
                                <div class="col-sm-12">
                                    <label class="form-label">Họ Và Tên</label>
                                    <input type="email" v-model="khach_hang_create.ho_va_ten" class="form-control" placeholder="Nhập vào họ và tên">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Email</label>
                                    <input type="email" v-model="khach_hang_create.email" class="form-control" placeholder="Nhập vào Email">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Số Điện Thoại</label>
                                    <input type="email" v-model="khach_hang_create.so_dien_thoai" class="form-control" placeholder="Nhập vào Email">
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Mật Khẩu</label>
                                    <div class="input-group">
                                        <input type="password" v-model="khach_hang_create.password" class="form-control" placeholder="Nhập vào Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label">Nhập Lại Mật Khẩu</label>
                                    <div class="input-group">
                                        <input type="password" v-model="khach_hang_create.re_password" class="form-control" placeholder="Nhập lại Mật Khẩu">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button type="button" v-on:click="actionDangKy()" class="btn btn-primary"><i class="bx bx-user"></i>Đăng Kí</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            khach_hang_create   : {}
        }
    },
    mounted() {
       
    },
    methods: {
        actionDangKy() {
            baseRequest
                .post('admin/create', this.khach_hang_create)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.khach_hang_create = {};
                    } else {
                        toaster.error(res.data.message);
                    }
                }); 
        },

        
    },
}
</script>
<style></style>