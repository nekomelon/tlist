requre([
], function () {
	// ブラウザーチェックとかやる？
	// 画面ブロック (ログイン画面構築を見せないようにする)
	
	// divLoading削除 (ここ？)
	
	// ログイン画面構築 (from login.html)
	requre([
	        "dojo/dom-construct",
	        "dojo/text!app/login.html",
	        "dojo/_base/window"
	], function (domConstruct, html, win) {
		domConstruct.place(domConstruct.toDom(html), win.body());
	});
});