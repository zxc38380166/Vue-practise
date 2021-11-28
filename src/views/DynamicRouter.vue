<template>
    <div>
        
    </div>
</template>
<script>
import axios from 'axios';
export default {
    created(){
        console.log(this.$route.params.id)      
        const seed = 'this.$route.params.id'    // seed 為api裡面的屬性在此以 id命名所以會取得路由中連接id的對應屬性,此時路由的id地址對應為seed屬性
        //使用axios連接api取,因為要直接帶入變數所以將地址換成模板語言
        axios.get(`https://randomuser.me/api/?seed=${seed}`).then( (res)=>{ console.log(res) } ) 
    }
}


</script>