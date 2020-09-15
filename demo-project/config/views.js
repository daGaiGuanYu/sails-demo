module.exports.views = {
  layout: false, 
  extension: 'pug', // extension 似乎和 getRenderFn 有重复的嫌疑，但事实上，这个配置只说明 view 文件的拓展名。所以，即使使用 pug，也可以使用 ejs 后缀。
  getRenderFn(){ // 模板引擎非常多，因此这里单独搞一个方法，作为适配器
    return require('consolidate').pug
  }
}