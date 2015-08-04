require([
	"dojo/dom-construct",
	"dojo/text!app/login.html",
	"dojo/_base/window"
], function (domConstruct, html, win) {
	// ブラウザーチェックとかやる？
	// 画面ブロック (ログイン画面構築を見せないようにする) → dojo overlay
	
	// ログイン画面構築 (from login.html)
	domConstruct.place(domConstruct.toDom(html), win.body());
	domConstruct.destroy('divLoading');
});