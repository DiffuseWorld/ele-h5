export interface ISearchRecomment{
    value: number
    lable: string
}

export interface ISearchResultList {
    list:ISearchResult[]
}

export interface ISearchResult{
    type: number
    label: string
    resultCount: number
}