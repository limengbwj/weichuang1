// (function(doc, win) {
// 	var docEl = doc.documentElement,
// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 		recalc = function() {
// 			var clientWidth = docEl.clientWidth;
// 			if(!clientWidth) return;
// 			docEl.style.fontSize = 16 * (clientWidth / 640) + 'px';
// 		};


// 	if(!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);  

(function(win) {
	var doc = win.document;
	var docEl = doc.documentElement;
	var tid;
	
	function refreshRem() {
	var width = docEl.getBoundingClientRect().width;
	var rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
	docEl.style.fontSize = rem + 'px';
	// console.log(0.14*rem);
	}
	
	win.addEventListener('resize', function() {
	clearTimeout(tid);
	tid = setTimeout(refreshRem, 10);
	}, false);
	win.addEventListener('pageshow', function(e) {
	if (e.persisted) {
	clearTimeout(tid);
	tid = setTimeout(refreshRem, 10);
	}
	}, false);
	
	refreshRem();
	
	})(window);