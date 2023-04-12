<script lang="ts" setup>
// import {Tabbar,TabbarItem} from 'vant'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const active=ref('home')
const router =useRouter()

const tiohzuan=()=>{
    router.push({
        name:active.value
    })
}
</script>


<template>
    <RouterView/>
    
    <VanTabbar v-model="active" @change="tiohzuan">
        <VanTabbarItem name="home" icon="home-o">主页</VanTabbarItem>
        <VanTabbarItem name="order" icon="bars">订单</VanTabbarItem>
        <VanTabbarItem name="me" icon="contact">我的</VanTabbarItem>
    </VanTabbar>
</template>

<style>

</style>