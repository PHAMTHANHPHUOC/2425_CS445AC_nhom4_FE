<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row mt-3">
                        <div class="col-lg-4">
                            <h5>Danh Sách Danh Mục</h5>
                        </div>
                        <div class="col-lg-8 text-end"><button class="btn  btn-outline-primary" data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">Thêm mới</button></div>
                            </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Mô tả</th>
                                <th>Số lượng nhập</th>
                                <th>Gia bán</th>
                                <th>Gia khuyến mãi</th>
                                <th>Tình Trạng</th>
                            </tr>
                        </thead>
                        <template v-for="(v, k) in list_table">
                            <tbody>
                                <tr>
                                    <th>{{ v.id }}</th>
                                    <td>{{ v.ten_san_pham }}</td>
                                    <td><img v-bind:src="v.hinh_anh" style="width: 100px;" alt=""> </td>
                                    <td>{{ v.mo_ta_ngan }}</td>
                                    <td>{{ v.so_luong_nhap }}</td>
                                    <td>{{ v.gia_ban }}</td>
                                    <td>{{ v.gia_khuyen_mai }}</td>
                                    <td><button v-if="v.tinh_trang==1" class="btn btn-success">Hoạt động</button>
                                    <button v-else class="btn btn-warning">Tạm tắt</button></td>
                                </tr>
                            </tbody>
                        </template>
                    </table>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_table: [],
        }
    },
    mounted() {
        this.loadTable();
    },
    methods: {
        loadTable() {
            axios
                .get('https://osm.dzfullstack.com/api/san-pham/data')
                .then((res) => {
                    this.list_table = res.data.data;
                })
        }
    },
}

</script>