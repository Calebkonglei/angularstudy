/**
 * Created by Administrator on 2016/4/17.
 */
var app=angular.module('phonecatServices',['ngResource']);
app.factory('Phone',["$resource",function($resource){
    return $resource('phones/:phoneId.json',{},{
        query:{method:'GET',params:{phoneId:'phones'},
        isArray:true}
    });
}]);
