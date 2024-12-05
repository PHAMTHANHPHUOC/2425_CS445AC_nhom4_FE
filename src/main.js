import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/MasterRocker.vue'
import Auth from './Layout/Wrapper/auth.vue'
import KhachHang from './Layout/Wrapper/MasterKhachHang.vue'
import Admin from './layout/wrapper/MasterAdmin.vue'
import Toaster from "@meforma/vue-toaster";
const app = createApp(App)
app.use(router,Toaster)
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("kh-layout", KhachHang);

app.component("adm-layout", Admin);



app.mount("#app")