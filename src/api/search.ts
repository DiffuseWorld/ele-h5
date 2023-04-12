import request from './base'
import type { ISearchResultList} from '@/types'

export function fetchSearchData(key:any=''){
    return request.get<ISearchResultList,ISearchResultList>('home_search',{
        params:{_label_like: key}
    })
}