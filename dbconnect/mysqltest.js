var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost', //接続先ホスト
  user     : 'root',      //ユーザー名
  password : 'root',  //パスワード
  database : 'test_blog_app'    //DB名
});

//SQL文を書く
var sql = 'SELECT * FROM users WHERE id = ?;';
//プレースホルダに差し込むデータ
var userId = '3';

//接続します
connection.connect();

//プレースホルダー使ってSQL発行
var query = connection.query(sql, [userId]);

query
  .on('error', function(err) {
    console.log('err is: ', err );
  })

  //結果用
  .on('result', function(rows) {
    console.log('The res is: ', rows );
  })

  //終わったよう～
  .on('end', function() {
    console.log('end');
    connection.destroy(); //終了
  });