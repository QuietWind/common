define(['jquery'], function($) {

	Function.prototype.bind = function(obj) {

		var _this = this;

		return function() {

			_this.apply(obj, arguments);

		}
	}

	var Dialog = function(ele) {

		this.ele = $(ele);

		this.ele.click(this.evClick);
		
	};


	Dialog.prototype = {
		evClick: function() {

			this.dialog_bg_show.bind(this);

		},
		dialog_bg_show: function() {

			var dialog = $('body').load('../../page/dialog.html');
		}
	}

	Function.prototype.setThis = function(object) {
		var __method = this;
		return function() {
			__method.apply(object, arguments);
		};
	};

	return Dialog;


});