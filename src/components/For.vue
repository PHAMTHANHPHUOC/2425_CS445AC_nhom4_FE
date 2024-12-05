<template>
    <div class="row row-cols-1 row-cols-sm row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 product-grid">
        <template v-for="(v, k) in list_san_pham1">
        <div class="col-lg">
            <div class="card ">
                    <img v-bind:src="v.hinh_anh" class="card-img-top  " alt="...">
                    <div class="card-body">
                        <h7 class="card-title cursor-pointer">{{ v.ten_san_pham }}</h7><br>
                        <div class="clearfix">
                            <p class="mb-0 float-end fw-bold"><span
                                    class="me-2 text-decoration-line-through text-secondary">{{ v.gia_ban }}đ</span><span>{{
                                        v.gia_khuyen_mai }}đ</span>
                            </p>
                        </div>
                        <div class="d-flex align-items-center mt-0 fs-6">
                            <p class="mb-0 ms-auto">{{ v.mo_ta_ngan }}</p>
                        </div>
                        <p class="mb-0 float-start"><strong>{{ v.so_luong_nhap }}</strong></p>
                    </div>
                    
                </div>
        </div>
        </template>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            list_san_pham1: [],
        }
    },
    mounted() {
        this.loadSanPham();
    },
    methods: {
        loadSanPham() {
            axios
                .get('https://osm.dzfullstack.com/api/san-pham/data')
                .then((res) => {
                    this.list_san_pham1 = res.data.data;
                });
        },
    },
}
</script>
<style></style>