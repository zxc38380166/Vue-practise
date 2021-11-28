import { createApp } from 'vue' ;
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Field,ErrorMessage,defineRule,configure}from 'vee-validate';  //defineRule為定義規則名稱 configure為設定全域規則
import {email,required,min}from '@vee-validate/rules';
import {localize,setLocale}from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
defineRule('email',email)                       //加入郵件規則
defineRule('required',required)                 //加入必填規則
defineRule('min',min)                           //加入最小規則
configure({                                     //加入多國語言系
    generateMessage: localize({'zh_TW':zhTW}),  //載入繁體中文
    validateOnInput: true,                      //輸入字元立即進行驗證            
    });
setLocale('zh_TW')                              //設定預設語言
const app = createApp(App)

app.component('Form',Form);                     //註冊三個全域元件
app.component('Field',Field);
app.component('ErrorMessage',ErrorMessage);

app.use(router);
app.mount('#app');
