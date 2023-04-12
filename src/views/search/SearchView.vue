<script setup lang="ts">
    import OpSearch from '@/components/OpSearch.vue';
    import {ref} from 'vue'
    import {fetchSearchData} from '@/api/search'
    import type {ISearchResult} from '@/types'
    type IEmits={
        (e:'cancel'):void
    }
   const emits = defineEmits<IEmits>()

   const searchValue=ref('')
   let searchResult=ref<ISearchResult[]>([])
    const onSearch = async(v?:string|number) =>{
        const {list}=await fetchSearchData(v)        
        searchResult.value=list

   }
</script>

<template>
    <div class="search-view">
        <OpSearch
        show-action="show-action"
        v-model="searchValue"
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="emits('cancel')"
        >
    </OpSearch>
    <div class="search-view__result">
            <div class="result-item" v-for="v in searchResult" :key="v.label">
                <VanIcon name="search"></VanIcon>
                <div class="name">{{ v.label }}</div>
                <div class="count">约{{ v.resultCount }}个结果</div>
            </div>
            <div class="no-result" v-if="!searchResult.length">~暂无推荐</div>
        </div>
    </div>
</template>

<style lang="scss">
.search-view{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 999;
    &__result{
        .result-item{
            display: flex;
            align-items: center;
            font-size: 12px;
            padding: 10px;
            border-radius: 1px solid var(--van-gray-1);
            .name{
                flex:1;
                padding-left: 6px;
            }
            .count{
                font-size: 12px;
                color: var(--van-gray-6);
            }
        }
    }
}
</style>