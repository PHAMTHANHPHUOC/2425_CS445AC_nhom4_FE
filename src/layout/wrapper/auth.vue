<template >
    <div class="wrapper">
        <router-view></router-view>
    </div>
</template>
<script>
import Top from '../components/Top.vue'
import Menu from '../components/Menu.vue'
import Footer from '../components/Footer.vue'
import '../../assets/js/bootstrap.bundle.min.js';
import '../../assets/js/jquery.min.js';
import '../../assets/plugins/simplebar/js/simplebar.min.js';
import '../../assets/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
import '../../assets/js/index.js';
import '../../assets/js/app.js';
export default {
    name: 'app',
    components: {

    },
}
</script>

<style>
@import '../../assets/plugins/simplebar/css/simplebar.css';
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import '../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css';
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/css/bootstrap-extended.css';
@import '../../assets/css/app.css';
@import '../../assets/css/icons.css';
@import '../../assets/css/dark-theme.css';
@import '../../assets/css/semi-dark.css';
@import '../../assets/css/header-colors.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
</style>