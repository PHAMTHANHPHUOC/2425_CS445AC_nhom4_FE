<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered mb-0">
                        <thead>
                            <tr class="text-center">
                                <th>#</th>
                                <th>Họ Và Tên</th>
                                <th>Email</th>
                                <th>Số Điện Thoại</th>
                                <th>Tổng Tiền</th>
                                <th>Trạng Thái</th>
                                <th>Kích Hoạt</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(value, index) in list">
                                <tr class="align-middle">
                                    <th class="text-center">{{ index + 1 }}</th>
                                    <td>{{ value.ho_va_ten }}</td>
                                    <td>{{ value.email }}</td>
                                    <td class="text-center">{{ value.so_dien_thoai }}</td>
                                    <td class="text-center">{{ formatToVND(value.tong_tien) }}</td>
                                    <td class="text-center">
                                        <button v-if="value.is_block == 0" class="btn btn-success me-1" v-on:click="actionDoiTrangThaiTaiKhoan(value)">
                                            Hoạt Động
                                        </button>
                                        <button v-else class="btn btn-danger me-1" v-on:click="actionDoiTrangThaiTaiKhoan(value)">
                                            Tạm Tắt
                                        </button>
                                    </td>
                                    <td class="text-center">
                                        <button v-if="value.is_active == 0" class="btn btn-warning me-1" v-on:click="actionKichHoatTaiKhoan(value)">
                                            Chưa Kích Hoạt
                                        </button>
                                        <button v-else class="btn btn-primary me-1">
                                            Đã Kích Hoạt
                                        </button>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-primary me-1" data-bs-toggle="dropdown">Cập Nhật</button>
                                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">
                                            <a class="dropdown-item" v-on:click="Object.assign(edit_khach_hang, value)" data-bs-toggle="modal" data-bs-target="#capNhatKhachhangModal">Cập Nhật Khách hàng</a>
                                            <a class="dropdown-item" v-on:click="Object.assign(edit_khach_hang, value)" data-bs-toggle="modal" data-bs-target="#doiMatKhauKhachHangModal">Cập Nhật Mật Khẩu</a>
                                        </div>
                                        <button class="btn btn-danger" v-on:click="Object.assign(delete_khach_hang, value)" data-bs-toggle="modal" data-bs-target="#xoaKhachhangModal">Xóa</button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="capNhatKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập Nhật Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Họ và Tên</label>
                        <input v-model="edit_khach_hang.ho_va_ten" type="text" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Email</label>
                        <input v-model="edit_khach_hang.email" type="email" class="form-control">
                    </div>
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Số Điện Thoại</label>
                        <input v-model="edit_khach_hang.so_dien_thoai" type="text" class="form-control">
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="actionCapNhatTaiKhoan()">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="xoaKhachhangModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Xóa Khách Hàng</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-white">Cảnh Báo!</h6>
                                <div class="text-white">Bạn Có chắc chắn xóa tài khoản <b>{{ delete_khach_hang.ho_va_ten }}</b> này không!</div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="actionXoaTaiKhoan()">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="doiMatKhauKhachHangModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Đổi Mật Khẩu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 mb-2">
                        <label class="form-label">Mật Khẩu Mới</label>
                        <input v-model="new_password" type="text" class="form-control" placeholder="Nhập vào mật khẩu mới">
                        <label class="form-label">Nhập Lại Mật Khẩu Mới</label>
                        <input v-model="re_password" type="text" class="form-control" placeholder="Nhập vào mật khẩu mới">
                       
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="actionDoiMatKhauTaiKhoan()">Xác Nhận</button>
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
            list                : [],
            edit_khach_hang     : {},
            delete_khach_hang   : {},
            new_password        : "",
            re_password        : "",
        }
    },
    mounted() {
        this.loadDataKhachHang();
    },
    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        loadDataKhachHang() {
            baseRequest
                .get('admin/khach-hang/data')
                .then((res) => {
                    this.list = res.data.data;
                })
        },

        actionKichHoatTaiKhoan(value){
            baseRequest
                .post('admin/khach-hang/kich-hoat-tai-khoan', value)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },

        actionDoiTrangThaiTaiKhoan(value){
            baseRequest
                .post('admin/khach-hang/doi-trang-thai', value)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },

        actionCapNhatTaiKhoan(){
            baseRequest
                .post('admin/khach-hang/update', this.edit_khach_hang)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },

        actionXoaTaiKhoan(){
            baseRequest
                .post('admin/khach-hang/delete', this.delete_khach_hang)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.loadDataKhachHang();
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        },

        actionDoiMatKhauTaiKhoan() {
            var payload = {
                'id'       : this.edit_khach_hang.id,
                'password' : this.new_password,
                're_password' : this.re_password

            }
            baseRequest
                .post('admin/doi-mat-khau', payload)
                .then((res) => {
                    if(res.data.status) {
                        toaster.success(res.data.message);
                        this.new_password = "";
                        this.re_password = "";
                    } else {
                        toaster.error(res.data.message);
                    }
                })
        }
    },
}
</script>
<style scoped>
/* CSS cho card */
.card {
    margin-bottom: 20px; /* Khoảng cách dưới của card */
    border: 1px solid #e3e3e3; /* Đường viền của card */
    border-radius: 10px; /* Độ cong góc của card */
}

.card-body {
    padding: 20px; /* Khoảng cách padding bên trong card */
}

/* CSS cho table trong card */
.table {
    border-collapse: collapse; /* Loại bỏ khoảng cách giữa các ô */
    width: 100%; /* Chiều rộng của bảng */
}

.table th,
.table td {
    padding: 10px; /* Khoảng cách padding bên trong ô */
    border: 1px solid #dee2e6; /* Đường viền của ô */
}

.table th {
    background-color: #f5f5f5; /* Màu nền của ô tiêu đề */
}

/* CSS cho modal */
.modal-content {
    border-radius: 10px; /* Độ cong góc của modal */
}

.modal-header {
    border-bottom: none; /* Loại bỏ đường viền dưới của header modal */
}

.modal-footer {
    border-top: none; /* Loại bỏ đường viền trên của footer modal */
}

/* CSS cho dropdown menu */
.dropdown-menu {
    border-radius: 5px; /* Độ cong góc của dropdown menu */
}

.dropdown-item {
    padding: 10px 20px; /* Khoảng cách padding bên trong mỗi item của dropdown menu */
}

/* CSS cho alert */
.alert {
    border-radius: 10px; /* Độ cong góc của alert */
}
</style>
