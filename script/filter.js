/**
 * Created by Administrator on 2016/4/17.
 */
angular.module('phonecatFilters',[]).filter('checkmark',function(){
    return function(input){
        return input?'\u2713':'\u2718';
    };
});