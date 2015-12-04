"use strict";

/* jshint undef:true */
var myApp = angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider)
	{
		$routeProvider.when('/',
		{
			templateUrl: 'list/list.html'
		});
		$routeProvider.when('/css-shade-progressbar',
		{
			templateUrl: 'css-shade-progressbar/css-shade-progressbar.html'
		});
	});