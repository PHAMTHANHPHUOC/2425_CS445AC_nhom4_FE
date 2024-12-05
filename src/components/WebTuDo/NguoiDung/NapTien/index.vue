<template>
    <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO0uhwiK1yDASJ6SkO3SLFNU3dtIb4NMiBA&s"
                            alt="Quản trị viên" class="rounded-circle p-1 bg-primary" width="110">
                        <div class="mt-3">
                            <h4>
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">{{ profile.ho_va_ten }}</font>
                                </font>

                            </h4>
                            <button v-on:click="muaHang(), Object.assign(Thong_Tin_ck)" class="btn btn-outline-info "
                                data-bs-toggle="modal" data-bs-target="#exampleExtraLargeModal">Nạp Tiền Vào Ví Điện
                                Tử</button>

                        </div>
                    </div>
                    <hr class="my-4">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                            <h6 class="mb-0"> <i class="fa-solid fa-lock m-1"></i>

                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;"> Đổi Mật Khẩu</font>
                                </font>
                            </h6>
                            <span class="text-secondary">
                                <font style="vertical-align: inherit;">
                                    <button v-on:click="Object.assign(edit_khach_hang, value)" data-bs-toggle="modal"
                                        data-bs-target="#doiMatKhauKhachHangModal" class="btn btn-outline-info "><i
                                            class="fa-solid fa-right-from-bracket"></i></button>
                                </font>
                            </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap mt-3">
                            <h6 class="mb-0"><i class="fa-solid fa-file-code m-1"></i>

                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Mã Pin Tủ Đã Thuê</font>
                                </font>
                            </h6>
                            <span class="text-secondary">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">
                                        <button v-on:click="Object.assign(list_pin, v)" data-bs-toggle="modal"
                                            data-bs-target="#danhsachpin" class="btn btn-outline-info "><i
                                                class="fa-solid fa-right-from-bracket"></i></button>
                                    </font>
                                </font>
                            </span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap mt-3">
                            <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="feather feather-globe me-2 icon-inline">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="2" y1="12" x2="22" y2="12"></line>
                                    <path
                                        d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                                    </path>
                                </svg>

                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Trang mạng</font>
                                </font>
                            </h6>
                            <span class="text-secondary">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">https://webtudo.com</font>
                                </font>
                            </span>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card" style="height: 460px;">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Họ và tên :</font>
                                </font>
                            </h6>
                        </div>
                        <div class="col-sm-9 text-secondary">

                            <input v-model="profile.ho_va_ten" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">E-mail :</font>
                                </font>
                            </h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="text" v-model="profile.email" class="form-control ">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Điện thoại :</font>
                                </font>
                            </h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input v-model="profile.so_dien_thoai" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">
                                <font style="vertical-align: inherit;">
                                    <font style="vertical-align: inherit;">Tổng Tiền Trong Tài Khoản :</font>
                                </font>
                            </h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <div class="card accordion-flush ">
                                <h5 class="m-2 text-danger ">{{ formatToVND(profile.tong_tien) }}</h5>
                            </div>
                        </div>
                    </div>
                    <button v-on:click="updateProfile()" class="btn btn-info ">Xác Nhận</button>

                </div>
            </div>

        </div>
    </div>
    <div class="modal fade" id="exampleExtraLargeModal" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title">Xác Nhận Thanh Toán</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mt-2 text-center ">
                        <img v-bind:src="Thong_Tin_ck.link_qr_code" alt="">
                        <h3 class="text-danger ">*Chú Ý: Chuyển đúng cú pháp, sai nội dung bị chuyển qua ID khác Chúng
                            Tôi không chịu trách nhiệm</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="doiMatKhauKhachHangModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Đổi Mật Khẩu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Mật Khẩu Mới</label>
                        <input v-model="new_password" type="password" class="form-control"
                            placeholder="Nhập vào mật khẩu mới">
                        <label class="form-label">Nhập Lại Mật Khẩu Mới</label>
                        <input v-model="re_password" type="password" class="form-control"
                            placeholder="Nhập lại mật khẩu mới">

                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                        v-on:click="actionDoiMatKhauTaiKhoan()">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="danhsachpin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Danh Sách Mã Pin</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <template v-for="(v, k) in list_pin">
                        <div class="row">
                            <div class="col">
                                <label for="">
                                    <h5>{{ v.ten_san_pham }}</h5>
                                </label>
                            </div>
                            <div style="margin-top: 4px; " class="col">{{ v.pin_active
                                }}</div>
                        </div>


                    </template>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import baseRequestUser from '../../../../core/baseRequestUser';
import axios from 'axios';
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ position: "top-right" });
export default {
    data() {
        return {
            profile: {},
            thong_tin: {},
            Thong_Tin_ck: {},
            edit_khach_hang: {},
            new_password: "",
            re_password: "",
            list_pin: [],
            edit_khach_hang: {},
        }
    },
    mounted() {
        this.loadDataKhachHang();
        this.loadDataCk();
        this.loadPin();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDataKhachHang() {
            baseRequestUser
                .get('khach-hang/thong-tin')
                .then((res) => {
                    this.profile = res.data.data;
                })
        },
        loadPin() {
            baseRequestUser
                .get('tu-do/data-pin')
                .then((res) => {
                    this.list_pin = res.data.data;
                })
        },

        loadDataCk() {
            baseRequestUser
                .get('thong-tin-ck/data')
                .then((res) => {

                    this.Thong_Tin_ck = res.data.data;
                })
        },
        muaHang() {
            baseRequestUser
                .post('khach-hang/nap-tien-tk')
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        // console.log(res.data.data);
                        this.loadDataCk();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },
        actionDoiMatKhauTaiKhoan() {
            var payload = {
                'id': this.edit_khach_hang.id,
                'password': this.new_password,
                're_password': this.re_password
            }
            baseRequestUser
                .post('khach-hang/doi-mat-khau', payload)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.new_password = "";
                        this.re_password = ""
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },
        updateProfile() {
            baseRequestUser
                .post('khach-hang/update-thong-tin', this.profile)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);

                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },
    },

}
</script>
<style>
</style>
