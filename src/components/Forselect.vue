<template>
    <div class="row">
        <div class="card">
            <div class="mt-2">
                <label>Chọn</label>
                <select name="" class="form-control mt-1">
                    <template v-for="(v, k) in list_select">
                        <option>
                            {{ v.ten_san_pham }}
                        </option>
                    </template>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            list_select: [],
        }
    },
    mounted() {
        this.loadSelect();
    },
    methods: {
        loadSelect() {
            axios
                .get('https://osm.dzfullstack.com/api/san-pham/data')
                .then((res) => {
                    this.list_select = res.data.data;
                })
        }
    },
}
</script>
<style></style>