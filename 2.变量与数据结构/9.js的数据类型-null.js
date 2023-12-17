var age = 0; // false
var message = ''; // false
var height; // false

var info = {}; // true

// 当使用if判断时, age,message,height会饮食转换为false, info会被饮食转换为true, 所以最好将对象类型的变量初始化值设置为null
if (info) {
  console.log('进来了');
}

info = null;

if (info) {
  console.log('进来了2');
} else {
  console.log('没进来2'); // 没进来2
}
