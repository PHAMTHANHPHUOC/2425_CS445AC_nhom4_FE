<template>
    <div class="row mb-4 border border-primary-subtle" >
        <div class="card">
            
            <div class="card-header text-center">
                <h4 class="logo-text">Danh Sách Tủ </h4>
            </div>
            <div class="card-body">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid ">
                    <template v-for="(v, k) in list_tu">
                        <div class="col align-items-stretch mb-3">
                                <div class="card h-100">
                                    <img v-bind:src="v.hinh_anh" style="min-height: 315px;" class="card-img-top" alt="...">
                                    <div class="">
                                        <div class="position-absolute top-0 end-0 m-3 product-discount"></div>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title cursor-pointer logo-text1">{{ v.ten_san_pham }}</h6> 
                                       
                                        <div class="clearfix">                                                                                   
                                            <h6><p class="mb-0  fw-bold"><span class="me-2 text-prymary text-secondary">Giá:{{ formatToVND(v.gia_ban) }}</span></p></h6>
                                        </div>

                                        <div class="d-flex align-items-center mt-3 fs-6">
                                            <button v-if="v.is_active == 0" v-on:click="Object.assign(create_thanh_toan, v)"
                                                class=" btn btn-primary form-control" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal">Thuê Sản Phẩm</button>
                                            <button v-else class=" btn btn-danger   disabled  form-control">Tủ Đã Được Thuê</button>
                                            
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </template>
					
				</div>
            </div>
        </div>
        
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xác Nhận Thanh Toán</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered accordion ">
                        <thead>
                            <tr>
                                <th>Danh Mục</th>
                                <th>Tổng Tiền Trong Tài Khoản</th>
                                <th>Tổng Tiền Cần Thanh Toán</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Thuê Tủ</b></td>
                                <td>{{ formatToVND(profile.tong_tien) }}</td>
                                <td>{{ formatToVND(create_thanh_toan.gia_ban) }} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button v-on:click="thanhToan()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Xác
                        Nhận</button>
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
import Toasted from 'vue-toasted';
export default {
    data() {
        return {
            list_tu: [],
            pin: {},
            profile: {},
            create_thanh_toan: {},
            update_pin_active: {},
        }
    },
    mounted() {
        this.getDataTu();
        this.getProfile();
        const toaster = createToaster({
            position: "top-right",
            timeout: 20000, // Thời gian hiển thị: 5000 miligiây (5 giây)
            icon: {
                iconPack: "fontawesome",
                iconSize: "lg", // Kích thước biểu tượng lớn (lg)
            },
        });
    },
    methods: {

        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        getProfile() {
            baseRequestUser
                .get('khach-hang/thong-tin')
                .then((res) => {
                    this.profile = res.data.data;

                })
        },

        getDataTu() {
            baseRequestUser
                .get('tu-do/data')
                .then((res) => {
                    this.list_tu = res.data.data;
                })
        },


        thanhToan() {
            baseRequestUser
                .post('tu-do/thanh-toan', this.create_thanh_toan)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.getDataTu();
                        this.getProfile();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },
        updatePinActive() {
            baseRequestUser
                .post('khach-hang/update-ma-pin', this.create_thanh_toan)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.getDataTu();
                        this.getProfile();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },



    }
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
    .logo-text1 {
    font-family: 'Poppins', sans-serif; /* Font chữ hiện đại */
    font-weight: 600; /* Đậm */
    font-size: 18px; /* Kích thước lớn */
    color: #333; /* Màu chữ đen nhẹ */
    letter-spacing: 2px; /* Khoảng cách giữa các ký tự */
    text-transform: uppercase; /* Chuyển thành chữ in hoa */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Hiệu ứng bóng chữ */
    }
</style>
