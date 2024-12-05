<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-lg-11">
                    <h3>Danh Mục Sản Phẩm</h3>
                </div>
                <div class="col-lg-1">
                    <button v-on:click="  Object.assign(create_tu, v)" class="btn btn-outline-info "
                        data-bs-toggle="modal" data-bs-target="#ThemTuDo">Thêm Tủ Mới</button>

                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table">
                <table class="table table-bordered  ">
                    <thead>
                        <tr>
                            <th class="text-center">STT Tủ</th>
                            <th class="text-center">Hình Anh</th>
                            <th class="text-center">Giá Bán</th>
                            <th class="text-center">Password Tủ Đồ</th>
                            <th class="text-center">Tình Trạng</th>
                            <th class="text-center">AcTion</th>

                        </tr>
                    </thead>
                    <template v-for="(value, k) in list_tu">
                        <tbody>
                            <tr>
                                <td class=" text-center">{{ value.ten_san_pham }}</td>
                                <td class=" text-center"><img class="img-fluid " style="height: 50px; width: 50px;"
                                        v-bind:src="value.hinh_anh" alt=""></td>
                                <td class=" text-center">{{ formatToVND(value.gia_ban) }}</td>
                                <td class=" text-center">{{ value.pin_active }}</td>

                                <td class="mt-2 text-center">
                                    <button v-on:click="changeTrangThai(value)" v-if="value.is_active == 0"
                                        class="btn btn-primary" style="width: 250px;">Tủ
                                        Trống</button>
                                    <button v-on:click="changeTrangThai(value)" v-else class="btn btn-danger"
                                        style="width: 250px;">Đã Được Sử
                                        Dụng</button>
                                </td>
                                <td class="text-center">
                                    <button v-on:click="Object.assign(update_tu, value)" class="btn btn-primary m-2"
                                        data-bs-toggle="modal" data-bs-target="#uptadetu">Cập Nhật</button>
                                    <button v-on:click="Object.assign(delete_tu, value)" class="btn btn-danger "
                                        data-bs-toggle="modal" data-bs-target="#exampleWarningModal">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </table>
            </div>

        </div>
    </div>
    <div class="modal fade" id="ThemTuDo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Tủ Đồ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Tủ</label>
                    <input v-model="create_tu.ten_san_pham" type="text" class="form-control " placeholder="">
                    <label for="">Hình Anh</label>
                    <input v-model="create_tu.hinh_anh" type="text" class="form-control " placeholder="">
                    <label for="">Giá Bán</label>
                    <input v-model="create_tu.gia_ban" type="text" class="form-control " placeholder="">
                    <label for="">Password Chuyển Khoản </label>
                    <input v-model="create_tu.pin_active" type="text" class="form-control " placeholder="">
                    <label for="">Trạng Thái</label>
                    <input v-model="create_tu.has_active" type="text" class="form-control " placeholder="">
                    <label>Tình Trạng</label>
                    <select v-model="create_tu.is_active" class="form-control mt-1">
                        <option value="1">Đã Được Sử Dụng</option>
                        <option value="0">Tủ Trống</option>
                    </select>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button v-on:click="createTuDo()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="uptadetu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Cập Nhật Tủ</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label for="">Tên Tủ</label>
                    <input v-model="update_tu.ten_san_pham" type="text" class="form-control " placeholder="">
                    <label for="">Hình Anh</label>
                    <input v-model="update_tu.hinh_anh" type="text" class="form-control " placeholder="">
                    <label for="">Giá Bán</label>
                    <input v-model="update_tu.gia_ban" type="text" class="form-control " placeholder="">
                    <label for="">Password Chuyển Khoản</label>
                    <input v-model="update_tu.pin_active" type="text" class="form-control " placeholder="">
                    <label>Tình Trạng</label>
                    <select v-model="update_tu.is_active" class="form-control mt-1">
                        <option value="1">Đã Được Sử Dụng</option>
                        <option value="0">Tủ Trống</option>
                    </select>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
                    <button v-on:click="updateTu()" data-bs-dismiss="modal" type="button" class="btn btn-primary">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleWarningModal" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content bg-warning">
                <div class="modal-header border-dark">
                    <h5 class="modal-title text-dark">Xóa Tủ</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-dark">
                    <div class="alert alert-warning border-0 bg-warning alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-dark"><i class="bx bx-info-circle"></i>
                            </div>
                            <div class="ms-3">
                                <h6 class="mb-0 text-dark">Thông Báo</h6>
                                <div class="text-dark">
                                    Bạn có chắc chắn muốn xóa <b>{{ delete_tu.ten_san_pham }}</b> này
                                    không?

                                    <h5 class="text-danger ">Lưu ý: Thao Tác Này Không Thể Hoàn Tác</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer border-dark">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Thoát</button>
                    <button v-on:click="deleteTu()" data-bs-dismiss="modal" type="button" class="btn btn-dark">Xác
                        Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios, { Axios } from 'axios'
import { createToaster } from "@meforma/vue-toaster";
import baseRequest from '../../../../core/baseRequest';
const toaster = createToaster({ position: "top-right" });
axios
export default {
    data() {
        return {
            list_tu: [],
            create_tu: {},
            update_tu: {},
            delete_tu: {},
            pin_romdum: {},
            // delete_danh_muc: {},
        }
    },
    mounted() {
        this.LoadTuDo()
    },

    methods: {
        formatToVND(number) {
            number = parseInt(number);
            return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
        LoadTuDo() {
            baseRequest
                .get('tu-do/data')
                .then((res) => {
                    this.list_tu = res.data.data
                })

        },
        createTuDo() {
            baseRequest
                .post('tu-do/create', this.create_tu)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.LoadTuDo();
                    } else {
                        toaster.error(res.data.message);
                    }
                })

        },
        updateTu() {
            baseRequest
                .post('tu-do/update', this.update_tu)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success(res.data.message);
                        this.LoadTuDo();
                    } else {
                        toaster.error(res.data.message);
                    }
                })


        },
        deleteTu() {
            baseRequest
                .delete('tu-do/delete/' + this.delete_tu.id)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.LoadTuDo();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                })
        },
        changeTrangThai(value) {
            baseRequest
                .post('tu-do/change-status', value)
                .then((res) => {
                    if (res.data.status) {
                        toaster.success('Thông báo<br>' + res.data.message);
                        this.LoadTuDo();
                    } else {
                        toaster.error('Thông báo<br>' + res.data.message);
                    }
                });
        },


    },

}
</script>
<style scoped>
/* CSS cho card */
.card {
    margin-bottom: 20px;
    /* Khoảng cách dưới của card */
    border: 1px solid #e3e3e3;
    /* Đường viền của card */
    border-radius: 10px;
    /* Độ cong góc của card */
}

.card-header {
    background-color: #f5f5f5;
    /* Màu nền của card header */
    padding: 10px 20px;
    /* Khoảng cách padding bên trong card header */
    border-bottom: 1px solid #dee2e6;
    /* Đường viền dưới của card header */
    border-radius: 10px 10px 0 0;
    /* Độ cong góc của card header */
}

.card-header h3 {
    margin-bottom: 0;
    /* Loại bỏ khoảng cách dưới của tiêu đề */
}

/* CSS cho table */
.table {
    width: 100%;
    /* Chiều rộng của bảng */
}

.table th,
.table td {
    padding: 8px;
    /* Khoảng cách padding bên trong ô */
    text-align: center;
    /* Căn giữa nội dung của ô */
}

.table th {
    background-color: #f5f5f5;
    /* Màu nền của ô tiêu đề */
    font-weight: bold;
    /* Đậm chữ của tiêu đề */
}

/* CSS cho modal */
.modal-content {
    border-radius: 10px;
    /* Độ cong góc của modal content */
}

.modal-header {
    border-bottom: none;
    /* Loại bỏ đường viền dưới của header modal */
}

.modal-footer {
    border-top: none;
    /* Loại bỏ đường viền trên của footer modal */
}

.modal-body input[type="text"],
.modal-body input[type="password"],
.modal-body select {
    width: 100%;
    /* Chiều rộng của input và select trong modal body */
}

/* CSS cho button */
.btn-outline-info {
    border-color: #17a2b8;
    /* Màu viền của button outline info */
    color: #17a2b8;
    /* Màu chữ của button outline info */
}

.btn-outline-info:hover {
    background-color: #17a2b8;
    /* Màu nền của button outline info khi hover */
    color: #fff;
    /* Màu chữ của button outline info khi hover */
}



.btn-primary {
    background-color: #007bff;
    /* Màu nền của button primary */
    border-color: #007bff;
    /* Màu viền của button primary */
}

.btn-primary:hover {
    background-color: #0056b3;
    /* Màu nền của button primary khi hover */
    border-color: #0056b3;
    /* Màu viền của button primary khi hover */
}

.btn-danger {
    background-color: #dc3545;
    /* Màu nền của button danger */
    border-color: #dc3545;
    /* Màu viền của button danger */
}

.btn-danger:hover {
    background-color: #bb2d3b;
    /* Màu nền của button danger khi hover */
    border-color: #bb2d3b;
    /* Màu viền của button danger khi hover */
}
</style>
