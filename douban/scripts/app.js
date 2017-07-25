	//1.新建模块
	var yike=angular.module('yike',["controllers","ngRoute"]);
	//2.模块创建后立刻在根作用域上绑定toggle方法
	//run模块。一旦创建成功立刻执行
	yike.run(['$rootScope',function($rootScope){
		$rootScope.collapsed=false;
		//toggle() 1将collapsed的值取反
		//将导航栏的内容进行移动
		$rootScope.toggle=function(){
			var dds = document.querySelectorAll('dd');
			$rootScope.collapsed=!$rootScope.collapsed;
			//找到所有的dd节点 改变transform的值
			if ($rootScope.collapsed) {
				for(var i=0;i<dds.length;i++){
					dds[i].style.transform="translate(0)";
					dds[i].style.transitionDuration=(i+1)*0.4+"s";
					}
				}else{
					for(var i=dds.length-1;i>=0;i--){
					dds[i].style.transform="translate(-100%)";
					dds[i].style.transitionDuration=(dds.length-i+1)*0.5+"s";
					}
				}
		}
	}]);
	//为了解决angularjs自动升级导致的版本内容不一致，导致路由点击时内容经过转换
	//需要去掉附加的请求头
	yike.config(function($locationProvider){
		$locationProvider.hashPrefix("");
	});
	//配置路由
	yike.config(["$routeProvider",function($routeProvider){
       $routeProvider.when('/today',{
          templateUrl:"./views/today.html",
          controller:"todayContro"
            })
          .when('/older',{
          templateUrl:"./views/older.html",
          controller:"olderContro"
          })
          .otherwise({
          	redirectTo:"/today"
          })   
      }]);