<template>
    <div>
        <button class="btn btn-secondary active" @click="push">push(有瀏覽紀錄)</button> <br>
        <button class="btn btn-secondary active" @click="replace">replace(沒有瀏覽紀錄)</button><br>
        <button class="btn btn-secondary active" @click="go">go(返回上一頁)</button><br>
        <button class="btn btn-secondary active" @click="addRoute">addRoute(增加臨時路由)</button>
    </div>
</template>
<script>
    export default {
        methods: {
            push() { // 切換到指定的路由路徑 push有瀏覽紀錄
                this.$router.push('/about')
            },
            replace() { // 切換到指定的路由路徑 replace沒有瀏覽紀錄
                this.$router.replace('/about')
            },
            go() { // 返回上一個瀏覽紀錄
                console.log(this.$router)
                this.$router.go(-1)
            },
            addRoute() {
                this.$router.addRoute({     // 呼叫此方法時,新增一個臨時的路由,重整即消除
                    path: '/newabout',
                    name: 'newAbout',
                    component: () => import('../views/About.vue')
                }, )
            }
        }
    }
</script>