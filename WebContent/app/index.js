require([
], function () {
	// ブラウザーチェックとかやる？
	// 画面ブロック (ログイン画面構築を見せないようにする)
	
	// ログイン画面構築 (from login.html)
	require([
	        "dojo/dom-construct",
	        "dojo/text!app/login.html",
	        "dojo/_base/window"
	], function (domConstruct, html, win) {
		domConstruct.place(domConstruct.toDom(html), win.body());
		
		domConstruct.destroy('divLoading');
	});
});