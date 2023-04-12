import {ref,type Ref} from 'vue'

/**
 * 用来做切换的钩子
 * @param initState 
 * @returns 
 */
export function useToggle(initState:boolean):[Ref<boolean>,()=>void]{
    const state=ref<boolean>(initState)
    const toggle=()=>{
        state.value=!state.value
    }
    return [state,toggle]
}