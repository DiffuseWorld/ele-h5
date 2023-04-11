<script lang="ts" setup>
import {Tabbar,TabbarItem} from 'vant'
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
    <Tabbar v-model="active" @change="tiohzuan">
        <TabbarItem name="home" icon="home-o">主页</TabbarItem>
        <TabbarItem name="order" icon="bars">订单</TabbarItem>
        <TabbarItem name="me" icon="contact">我的</TabbarItem>
    </Tabbar>
</template>

<style>

</style>