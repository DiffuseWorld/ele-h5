
module.exports = {
    plugins:{
        autoprefixer: {
            overrideBroserlist:['Android >= 4','iOS >= 7']
        },
        'postcss-pxtorem':{
            rootValue: 16,
            propList:['*'],
            selectorBlackList: [':root']
        }
    }
}