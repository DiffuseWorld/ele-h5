<script setup lang="ts">
import TheTop from './components/TheTop.vue';
import {useToggle} from '@/use/useToggle'
import SearchView from '@/views/search/SearchView.vue'

const recomments=[
    {
        value:1,
        lable: '牛腩'
    },{
        value:2,
        lable:'色拉'
    }
]

const [isSearchViewShown,toggleSearchView]=useToggle(false)

</script>

<template> 
    <div class="home-page">
        <Transition name="fade">
            <SearchView v-if="isSearchViewShown" @cancel="toggleSearchView"></SearchView>
        </Transition>
        
        <TheTop :recomments="recomments" @searchClick="toggleSearchView"/>
    </div>
</template>

<style lang="scss">

.fade-enter-active,
.fade-leave-active{
    transition: opacity .5s ease;
}
.fade-enter-from,
.fade-leave-to{
    opacity: 0;
}
</style>