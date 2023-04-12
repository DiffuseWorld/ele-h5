const getHomeSearchData = require('../../data/home_search')

module.exports = (req,res)=>{
    const {_label_like} = req.query
    console.log(_label_like)
    const allData = getHomeSearchData()
    const list = allData.list.filter(v=>v.label.includes(_label_like))
    console.log(list)
    return res.success({
        list
    })
}