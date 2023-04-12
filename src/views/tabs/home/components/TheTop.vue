<script setup lang="ts">
import type {ISearchRecomment} from '@/types'
type IProps={
    recomments: ISearchRecomment[]
};
defineProps<IProps>()
</script>

<template>
    <div class="hemo-top">
        <div class="top">
            <img src="@/assets/imgs/index_page/location.png" alt="" class="location-icon">
            <div class="location">幸福小区 （北一区东南门）</div>
            <img src="@/assets/imgs/index_page/shopcart.png" alt="" class="shopcart-icon">
            <img src="@/assets/imgs/index_page/comments.png" alt="" class="comments-icon">
        </div>
        <VanSearch 
        shape="round" 
        background="linear-gradient(to right, rgb(53,200,250),rgb(31,175,243))" 
        placeholder="世界茶饮 35减2">
            <template #right-icon>
                <div>搜索</div>
            </template>
       </VanSearch>
       <div class="search-recommentd">
            <div class="tag" v-for="v in recomments" :key="v.value">{{ v.lable }}</div>
       </div> 
    </div>
</template>

<style scoped lang="scss">
.hemo-top{
    background: linear-gradient(to right, rgb(53,200,250),rgb(31,175,243));
    color: white;
    .top{
        display: flex;
        align-items: center;
        padding: 10px 10px 0 10px;
        line-height: 15px;
        font-size: 15px;
        font-weight: bold;
        .location-icon{
            width: 24px;
            height: 24px;
        }
        .location{
            flex:1;
        }
        .shopcart-icon{
            width: 24px;
            height: 24px;
        }
        .comments-icon {
            width: 28px;
            height: 24px;
            margin-left: 10px;
        }
    }
    .search-recommentd{
        display: flex;
        padding: 0 10px 8px;
        .tag{
            font-size: 12px;
            border-radius: 10px;
            background: rgb(242,242,242,.3);
            padding: 2px 8px;
            margin-right: 10px;
        }
    }
}

</style>

<style lang="scss">
.hemo-top{
    .van-field__right-icon{
        margin-right: 0;
    }
}
</style>