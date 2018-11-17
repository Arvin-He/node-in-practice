var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function (req, res){
    var q = req.query.q;
    var md5Value = utility.md5(q);
    res.send(md5Value);
});

app.listen(3000, function(req, res){
    console.log('app is running at port 3000');
});


// $ node app.js
// 访问 http://localhost:3000/?q=hippo，完成。输出: 3a0689aa9e31a50b5621971fc89f0c64
// 如果直接访问 http://localhost:3000/ 会抛错,
// 可以看到，这个错误是从 crypto.js 中抛出的。
// 这是因为，当我们不传入 q 参数时，req.query.q 取到的值是 undefined，utility.md5 直接使用了这个空值，导致下层的 crypto 抛错。