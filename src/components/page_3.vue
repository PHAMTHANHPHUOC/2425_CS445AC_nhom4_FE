<template>
    <div class="row">
    <div class="col-4"></div>
    <div class="card col-5">
        <div class="card-header">
            <div class="card-header text-center">
                <b>DANH SÁCH INPUT</b>
            </div>
            <div class="card-body">
                <input class="form-control mt-3" type="text">
                <input class="form-control mt-3" type="number">
                <input class="form-control mt-3" type="date">
                <input class="form-control mt-3" type="time">
                <input class="form-control mt-3" type="datetime-local">
                <input class="form-control mt-3" type="password">
                <input class="form-control mt-3" type="email">
                <input class="form-control mt-3" type="tel">
                <input class="form-control mt-3" type="file">
            </div>
            <div class="card-footer text-end">
                <button class="btn btn-primary mt3" data-bs-toggle="modal" data-bs-target="#exampleModal">Nhập Liệu</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">ĐÃ XUẤT HIỆN</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input class="form-control mt-3" type="text">
                                <input class="form-control mt-3" type="number">
                                <input class="form-control mt-3" type="date">
                                <input class="form-control mt-3" type="time">
                                <input class="form-control mt-3" type="datetime-local">
                                <input class="form-control mt-3" type="password">
                                <input class="form-control mt-3" type="email">
                                <input class="form-control mt-3" type="tel">
                                <input class="form-control mt-3" type="file">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">THOÁT</button>
                                <button type="button" class="btn btn-primary">LƯU</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
</template>
<script>
export default {

}
</script>
<style></style>