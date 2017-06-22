/**
 * Created by LiuZihao on 2017/5/26.
 */


var Cache = (function () {
  var LRU = require("lru-cache")
      , options = { max: 500 }
      , cache = LRU(options)
  var Cache = function(){
    this.cache = cache;
  }

  Cache.prototype = {
    construct:Cache,
    set:function (url,data) {
      return this.cache.set(url,data);
    },
    get:function(url){
      return this.cache.get(url);
    }
  }
  return Cache;

})()
export default Cache