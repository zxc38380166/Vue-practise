<template>
    <div>
        新增頁面
    </div>

    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <router-link to="/NewPage/a" class="list-group-item list-group-item-action" aria-current="true">
                    元件A
                </router-link>
                <router-link to="/NewPage/b" class="list-group-item list-group-item-action" aria-current="true">
                    元件B
                </router-link>
                <router-link to="/NewPage/name/a2b" class="list-group-item list-group-item-action" aria-current="true">
                    命名路由a2b(一個路由中加入多個元件,以name對應)
                </router-link>
                <router-link to="/NewPage/name/c2a" class="list-group-item list-group-item-action" aria-current="true">
                    命名路由c2a(一個路由中加入多個元件,以name對應)
                </router-link>
            </div>
        </div>
        <div class="col-8">
        <router-view></router-view>
        </div>
    </div>
</template>