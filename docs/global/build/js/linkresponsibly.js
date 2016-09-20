/*!
 * Bootstrap v3.0.1 by @fat and @mdo
 * Copyright 2013 Twitter, Inc.
 * Licensed under /web/20160203211954/http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world by @mdo and @fat.
 */

if ("undefined" == typeof jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) { "use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
		for (var c in b)
			if (void 0 !== a.style[c]) return { end: b[c] } }
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function() { c = !0 });
		var e = function() { c || a(d).trigger(a.support.transition.end) };
		return setTimeout(e, b), this }, a(function() { a.support.transition = b() }) }(window.jQuery), + function(a) { "use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) { a(c).on("click", b, this.close) };
	c.prototype.close = function(b) {
		function c() { f.trigger("closed.bs.alert").remove() }
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c()) };
	var d = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d) }) }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
		return a.fn.alert = d, this }, a(document).on("click.bs.alert.data-api", b, c.prototype.close) }(window.jQuery), + function(a) { "use strict";
	var b = function(c, d) { this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d) };
	b.DEFAULTS = { loadingText: "loading..." }, b.prototype.setState = function(a) {
		var b = "disabled",
			c = this.$element,
			d = c.is("input") ? "val" : "html",
			e = c.data();
		a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() { "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b) }, 0) }, b.prototype.toggle = function() {
		var a = this.$element.closest('[data-toggle="buttons"]');
		if (a.length) {
			var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change"); "radio" === b.prop("type") && a.find(".active").removeClass("active") }
		this.$element.toggleClass("active") };
	var c = a.fn.button;
	a.fn.button = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof c && c;
			e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c) }) }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
		return a.fn.button = c, this }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault() }) }(window.jQuery), + function(a) { "use strict";
	var b = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this)) };
	b.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }, b.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, b.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active) }, b.prototype.to = function(b) {
		var c = this,
			d = this.getActiveIndex();
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() { c.to(b) }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b])) }, b.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, b.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next") }, b.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev") }, b.prototype.slide = function(b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		if (!e.length) {
			if (!this.options.wrap) return;
			e = this.$element.find(".item")[h]() }
		this.sliding = !0, f && this.pause();
		var j = a.Event("slide.bs.carousel", { relatedTarget: e[0], direction: g });
		if (!e.hasClass("active")) {
			if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
					var b = a(i.$indicators.children()[i.getActiveIndex()]);
					b && b.addClass("active") })), a.support.transition && this.$element.hasClass("slide")) {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() { e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger("slid") }, 0) }).emulateTransitionEnd(600) } else {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid") }
			return f && this.cycle(), this } };
	var c = a.fn.carousel;
	a.fn.carousel = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
				g = "string" == typeof c ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle() }) }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = c, this }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
		var c, d = a(this),
			e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), d.data()),
			g = d.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault() }), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() {
			var b = a(this);
			b.carousel(b.data()) }) }) }(window.jQuery), + function(a) { "use strict";
	var b = function(c, d) { this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle() };
	b.DEFAULTS = { toggle: !0 }, b.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height" }, b.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .panel > .in");
				if (c && c.length) {
					var d = c.data("bs.collapse");
					if (d && d.transitioning) return;
					c.collapse("hide"), d || c.data("bs.collapse", null) }
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() { this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
				if (!a.support.transition) return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]) } } }, b.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() { this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse") };
				return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this) } } }, b.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() };
	var c = a.fn.collapse;
	a.fn.collapse = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = c, this }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h) }) }(window.jQuery), + function(a) { "use strict";

	function b() { a(d).remove(), a(e).each(function(b) {
			var d = c(a(this));
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown")) }) }

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent() }
	var d = ".dropdown-backdrop",
		e = "[data-toggle=dropdown]",
		f = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
	f.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				if ("ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
				f.toggleClass("open").trigger("shown.bs.dropdown"), e.focus() }
			return !1 } }, f.prototype.keydown = function(b) {
		if (/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var f = c(d),
					g = f.hasClass("open");
				if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
				var h = a("[role=menu] li:not(.divider):visible a", f);
				if (h.length) {
					var i = h.index(h.filter(":focus"));
					38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus() } } } };
	var g = a.fn.dropdown;
	a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("dropdown");
			d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c) }) }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = g, this }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown) }(window.jQuery), + function(a) { "use strict";
	var b = function(b, c) { this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote) };
	b.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, b.prototype.toggle = function(a) {
		return this[this.isShown ? "hide" : "show"](a) }, b.prototype.show = function(b) {
		var c = this,
			d = a.Event("show.bs.modal", { relatedTarget: b });
		this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var d = a.support.transition && c.$element.hasClass("fade");
			c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
			var e = a.Event("shown.bs.modal", { relatedTarget: b });
			d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() { c.$element.focus().trigger(e) }).emulateTransitionEnd(300) : c.$element.focus().trigger(e) })) }, b.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()) }, b.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus() }, this)) }, b.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal") }, b.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() { a.removeBackdrop(), a.$element.trigger("hidden.bs.modal") }) }, b.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, b.prototype.backdrop = function(b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", a.proxy(function(a) { a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)) }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b() } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b() };
	var c = a.fn.modal;
	a.fn.modal = function(c, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
			f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d) }) }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
		return a.fn.modal = c, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data());
		b.preventDefault(), e.modal(f, this).one("hide", function() { c.is(":visible") && c.focus() }) }), a(document).on("show.bs.modal", ".modal", function() { a(document.body).addClass("modal-open") }).on("hidden.bs.modal", ".modal", function() { a(document.body).removeClass("modal-open") }) }(window.jQuery), + function(a) { "use strict";
	var b = function(a, b) { this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b) };
	b.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1 }, b.prototype.init = function(b, c, d) { this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focus",
					i = "hover" == g ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
		this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, b.prototype.getDefaults = function() {
		return b.DEFAULTS }, b.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, b.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, b.prototype.enter = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show), void 0) : c.show() }, b.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
		return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide), void 0) : c.hide() }, b.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(b), b.isDefaultPrevented()) return;
			var c = this.tip();
			this.setContent(), this.options.animation && c.addClass("fade");
			var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
				e = /\s?auto?\s?/i,
				f = e.test(d);
			f && (d = d.replace(e, "") || "top"), c.detach().css({ top: 0, left: 0, display: "block" }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
			var g = this.getPosition(),
				h = c[0].offsetWidth,
				i = c[0].offsetHeight;
			if (f) {
				var j = this.$element.parent(),
					k = d,
					l = document.documentElement.scrollTop || document.body.scrollTop,
					m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
					n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
					o = "body" == this.options.container ? 0 : j.offset().left;
				d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d) }
			var p = this.getCalculatedOffset(d, g, h, i);
			this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type) } }, b.prototype.applyPlacement = function(a, b) {
		var c, d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
			var k = 0;
			a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, "left") } else this.replaceArrow(j - f, j, "top");
		c && d.offset(a) }, b.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "") }, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, b.prototype.hide = function() {
		function b() { "in" != c.hoverState && d.detach() }
		var c = this,
			d = this.tip(),
			e = a.Event("hide.bs." + this.type);
		return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger("hidden.bs." + this.type), this) }, b.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, b.prototype.hasContent = function() {
		return this.getTitle() }, b.prototype.getPosition = function() {
		var b = this.$element[0];
		return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : { width: b.offsetWidth, height: b.offsetHeight }, this.$element.offset()) }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, b.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, b.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template) }, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, b.prototype.validate = function() { this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null) }, b.prototype.enable = function() { this.enabled = !0 }, b.prototype.disable = function() { this.enabled = !1 }, b.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, b.prototype.toggle = function(b) {
		var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, b.prototype.destroy = function() { this.hide().$element.off("." + this.type).removeData("bs." + this.type) };
	var c = a.fn.tooltip;
	a.fn.tooltip = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof c && c;
			e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = c, this } }(window.jQuery), + function(a) { "use strict";
	var b = function(a, b) { this.init("popover", a, b) };
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
		return b.DEFAULTS }, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, b.prototype.hasContent = function() {
		return this.getTitle() || this.getContent() }, b.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow") }, b.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip };
	var c = a.fn.popover;
	a.fn.popover = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof c && c;
			e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
		return a.fn.popover = c, this } }(window.jQuery), + function(a) { "use strict";

	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process() }
	b.DEFAULTS = { offset: 10 }, b.prototype.refresh = function() {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#\w/.test(e) && a(e);
			return f && f.length && [
				[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
			] || null }).sort(function(a, b) {
			return a[0] - b[0] }).each(function() { c.offsets.push(this[0]), c.targets.push(this[1]) }) }, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			d = c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate") };
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = c, this }, a(window).on("load", function() { a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			b.scrollspy(b.data()) }) }) }(window.jQuery), + function(a) { "use strict";
	var b = function(b) { this.element = a(b) };
	b.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", { relatedTarget: e });
			if (b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() { b.trigger({ type: "shown.bs.tab", relatedTarget: e }) }) } } }, b.prototype.activate = function(b, c, d) {
		function e() { f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d() }
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in") };
	var c = a.fn.tab;
	a.fn.tab = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]() }) }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
		return a.fn.tab = c, this }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) { b.preventDefault(), a(this).tab("show") }) }(window.jQuery), + function(a) { "use strict";
	var b = function(c, d) { this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition() };
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = { offset: 0 }, b.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, b.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var c = a(document).height(),
				d = this.$window.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom; "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
			this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({ top: document.body.offsetHeight - h - this.$element.height() })) } };
	var c = a.fn.affix;
	a.fn.affix = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof c && c;
			e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]() }) }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
		return a.fn.affix = c, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c) }) }) }(window.jQuery);
;/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(s, H, f, w) {
	var K = f("html"),
		q = f(s),
		p = f(H),
		b = f.fancybox = function() { b.open.apply(this, arguments) },
		J = navigator.userAgent.match(/msie/i),
		C = null,
		t = H.createTouch !== w,
		u = function(a) {
			return a && a.hasOwnProperty && a instanceof f },
		r = function(a) {
			return a && "string" === f.type(a) },
		F = function(a) {
			return r(a) && 0 < a.indexOf("%") },
		m = function(a, d) {
			var e = parseInt(a, 10) || 0;
			d && F(a) && (e *= b.getViewport()[d] / 100);
			return Math.ceil(e) },
		x = function(a, b) {
			return m(a, b) + "px" };
	f.extend(b, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !t,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: 0.5,
			leftRatio: 0.5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3E3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
			iframe: { scrolling: "auto", preload: !0 },
			swf: { wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always" },
			keys: { next: { 13: "left", 34: "up", 39: "left", 40: "up" }, prev: { 8: "right", 33: "down", 37: "right", 38: "down" }, close: [27], play: [32], toggle: [70] },
			direction: { next: "left", prev: "right" },
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
					(J ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: { overlay: !0, title: !0 },
			onCancel: f.noop,
			beforeLoad: f.noop,
			afterLoad: f.noop,
			beforeShow: f.noop,
			afterShow: f.noop,
			beforeChange: f.noop,
			beforeClose: f.noop,
			afterClose: f.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: { timer: null, isActive: !1 },
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(a, d) {
			if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = u(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
				var l = {},
					g, h, k, n, m;
				"object" === f.type(c) && (c.nodeType && (c = f(c)), u(c) ? (l = { href: c.data("fancybox-href") || c.attr("href"), title: f("<div/>").text(c.data("fancybox-title") || c.attr("title")).html(), isDom: !0, element: c },
					f.metadata && f.extend(!0, l, c.metadata())) : l = c);
				g = d.href || l.href || (r(c) ? c : null);
				h = d.title !== w ? d.title : l.title || "";
				n = (k = d.content || l.content) ? "html" : d.type || l.type;
				!n && l.isDom && (n = c.data("fancybox-type"), n || (n = (n = c.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
				r(g) && (n || (b.isImage(g) ? n = "image" : b.isSWF(g) ? n = "swf" : "#" === g.charAt(0) ? n = "inline" : r(c) && (n = "html", k = c)), "ajax" === n && (m = g.split(/\s+/, 2), g = m.shift(), m = m.shift()));
				k || ("inline" === n ? g ? k = f(r(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : l.isDom && (k = c) :
					"html" === n ? k = g : n || g || !l.isDom || (n = "inline", k = c));
				f.extend(l, { href: g, type: n, content: k, title: h, selector: m });
				a[e] = l
			}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== w && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
		},
		cancel: function() {
			var a = b.coming;
			a && !1 === b.trigger("onCancel") || (b.hideLoading(), a && (b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
				b.coming = null, b.current || b._afterZoomOut(a)))
		},
		close: function(a) { b.cancel();!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (b.isOpen && !0 !== a ? (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]()) : (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()))) },
		play: function(a) {
			var d = function() { clearTimeout(b.player.timer) },
				e = function() {
					d();
					b.current && b.player.isActive &&
						(b.player.timer = setTimeout(b.next, b.current.playSpeed))
				},
				c = function() { d();
					p.unbind(".player");
					b.player.isActive = !1;
					b.trigger("onPlayEnd") };
			!0 === a || !b.player.isActive && !1 !== a ? b.current && (b.current.loop || b.current.index < b.group.length - 1) && (b.player.isActive = !0, p.bind({ "onCancel.player beforeClose.player": c, "onUpdate.player": e, "beforeLoad.player": d }), e(), b.trigger("onPlayStart")) : c()
		},
		next: function(a) {
			var d = b.current;
			d && (r(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next")) },
		prev: function(a) {
			var d =
				b.current;
			d && (r(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
		},
		jumpto: function(a, d, e) {
			var c = b.current;
			c && (a = m(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== w && (b.cancel(), b._start(a))) },
		reposition: function(a, d) {
			var e = b.current,
				c = e ? e.wrap : null,
				l;
			c && (l = b._getPosition(d), a && "scroll" === a.type ? (delete l.position, c.stop(!0, !0).animate(l, 200)) : (c.css(l), e.pos = f.extend({}, e.dim, l))) },
		update: function(a) {
			var d = a && a.originalEvent && a.originalEvent.type,
				e = !d || "orientationchange" === d;
			e && (clearTimeout(C), C = null);
			b.isOpen && !C && (C = setTimeout(function() {
				var c = b.current;
				c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), C = null) }, e && !t ? 0 : 300)) },
		toggle: function(a) {
			b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, t && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
				b.trigger("onUpdate")), b.update())
		},
		hideLoading: function() { p.unbind(".loading");
			f("#fancybox-loading").remove() },
		showLoading: function() {
			var a, d;
			b.hideLoading();
			a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
			p.bind("keydown.loading", function(a) { 27 === (a.which || a.keyCode) && (a.preventDefault(), b.cancel()) });
			b.defaults.fixed || (d = b.getViewport(), a.css({ position: "absolute", top: 0.5 * d.h + d.y, left: 0.5 * d.w + d.x }));
			b.trigger("onLoading") },
		getViewport: function() {
			var a = b.current &&
				b.current.locked || !1,
				d = { x: q.scrollLeft(), y: q.scrollTop() };
			a && a.length ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = t && s.innerWidth ? s.innerWidth : q.width(), d.h = t && s.innerHeight ? s.innerHeight : q.height());
			return d
		},
		unbindEvents: function() { b.wrap && u(b.wrap) && b.wrap.unbind(".fb");
			p.unbind(".fb");
			q.unbind(".fb") },
		bindEvents: function() {
			var a = b.current,
				d;
			a && (q.bind("orientationchange.fb" + (t ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
				var c =
					e.which || e.keyCode,
					l = e.target || e.srcElement;
				if (27 === c && b.coming) return !1;
				e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || l && (l.type || f(l).is("[contenteditable]")) || f.each(d, function(d, l) {
					if (1 < a.group.length && l[c] !== w) return b[d](l[c]), e.preventDefault(), !1;
					if (-1 < f.inArray(c, l)) return b[d](), e.preventDefault(), !1 })
			}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, l, g) {
				for (var h = f(d.target || null), k = !1; h.length && !(k || h.is(".fancybox-skin") || h.is(".fancybox-wrap"));) k = h[0] && !(h[0].style.overflow &&
					"hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
				0 !== c && !k && 1 < b.group.length && !a.canShrink && (0 < g || 0 < l ? b.prev(0 < g ? "down" : "left") : (0 > g || 0 > l) && b.next(0 > g ? "up" : "right"), d.preventDefault())
			}))
		},
		trigger: function(a, d) {
			var e, c = d || b.coming || b.current;
			if (c) {
				f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
				if (!1 === e) return !1;
				c.helpers && f.each(c.helpers, function(d, e) {
					if (e &&
						b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
				})
			}
			p.trigger(a)
		},
		isImage: function(a) {
			return r(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i) },
		isSWF: function(a) {
			return r(a) && a.match(/\.(swf)((\?|#).*)?$/i) },
		_start: function(a) {
			var d = {},
				e, c;
			a = m(a);
			e = b.group[a] || null;
			if (!e) return !1;
			d = f.extend(!0, {}, b.opts, e);
			e = d.margin;
			c = d.padding;
			"number" === f.type(e) && (d.margin = [e, e, e, e]);
			"number" === f.type(c) && (d.padding = [c, c,
				c, c
			]);
			d.modal && f.extend(!0, d, { closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: { overlay: { closeClick: !1 } } });
			d.autoSize && (d.autoWidth = d.autoHeight = !0);
			"auto" === d.width && (d.autoWidth = !0);
			"auto" === d.height && (d.autoHeight = !0);
			d.group = b.group;
			d.index = a;
			b.coming = d;
			if (!1 === b.trigger("beforeLoad")) b.coming = null;
			else {
				c = d.type;
				e = d.href;
				if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
				b.isActive = !0;
				if ("image" ===
					c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
				"image" === c && (d.aspectRatio = !0);
				"iframe" === c && t && (d.scrolling = "scroll");
				d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (t ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
				f.extend(d, { skin: f(".fancybox-skin", d.wrap), outer: f(".fancybox-outer", d.wrap), inner: f(".fancybox-inner", d.wrap) });
				f.each(["Top", "Right", "Bottom", "Left"], function(a, b) { d.skin.css("padding" + b, x(d.padding[a])) });
				b.trigger("onReady");
				if ("inline" === c || "html" === c) {
					if (!d.content || !d.content.length) return b._error("content") } else if (!e) return b._error("href");
				"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
			}
		},
		_error: function(a) { f.extend(b.coming, { type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: a, content: b.coming.tpl.error });
			b._afterLoad() },
		_loadImage: function() {
			var a = b.imgPreload = new Image;
			a.onload = function() {
				this.onload = this.onerror = null;
				b.coming.width =
					this.width / b.opts.pixelRatio;
				b.coming.height = this.height / b.opts.pixelRatio;
				b._afterLoad()
			};
			a.onerror = function() { this.onload = this.onerror = null;
				b._error("image") };
			a.src = b.coming.href;
			!0 !== a.complete && b.showLoading()
		},
		_loadAjax: function() {
			var a = b.coming;
			b.showLoading();
			b.ajaxLoad = f.ajax(f.extend({}, a.ajax, { url: a.href, error: function(a, e) { b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading() }, success: function(d, e) { "success" === e && (a.content = d, b._afterLoad()) } })) },
		_loadIframe: function() {
			var a = b.coming,
				d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", t ? "auto" : a.iframe.scrolling).attr("src", a.href);
			f(a.wrap).bind("onReset", function() {
				try { f(this).find("iframe").hide().attr("src", "//about:blank").end().empty() } catch (a) {} });
			a.iframe.preload && (b.showLoading(), d.one("load", function() { f(this).data("ready", 1);
				t || f(this).bind("load.fb", b.update);
				f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
				b._afterLoad() }));
			a.content = d.appendTo(a.inner);
			a.iframe.preload ||
				b._afterLoad()
		},
		_preloadImages: function() {
			var a = b.group,
				d = b.current,
				e = a.length,
				c = d.preload ? Math.min(d.preload, e - 1) : 0,
				f, g;
			for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href) },
		_afterLoad: function() {
			var a = b.coming,
				d = b.current,
				e, c, l, g, h;
			b.hideLoading();
			if (a && !1 !== b.isActive)
				if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
				else {
					d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
					b.unbindEvents();
					e = a.content;
					c = a.type;
					l = a.scrolling;
					f.extend(b, { wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d });
					g = a.href;
					switch (c) {
						case "inline":
						case "ajax":
						case "html":
							a.selector ? e = f("<div>").html(e).find(a.selector) : u(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
								f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
							}));
							break;
						case "image":
							e = a.tpl.image.replace(/\{href\}/g, g);
							break;
						case "swf":
							e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) { e += '<param name="' + a + '" value="' + b + '"></param>';
								h += " " + a + '="' + b + '"' }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
					}
					u(e) && e.parent().is(a.inner) || a.inner.append(e);
					b.trigger("beforeShow");
					a.inner.css("overflow", "yes" === l ? "scroll" : "no" === l ? "hidden" : l);
					b._setDimension();
					b.reposition();
					b.isOpen = !1;
					b.coming = null;
					b.bindEvents();
					if (!b.isOpened) f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
					else if (d.prevMethod) b.transitions[d.prevMethod]();
					b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
					b._preloadImages()
				}
		},
		_setDimension: function() {
			var a = b.getViewport(),
				d = 0,
				e = !1,
				c = !1,
				e = b.wrap,
				l = b.skin,
				g = b.inner,
				h = b.current,
				c = h.width,
				k = h.height,
				n = h.minWidth,
				v = h.minHeight,
				p = h.maxWidth,
				q = h.maxHeight,
				t = h.scrolling,
				r = h.scrollOutside ? h.scrollbarWidth : 0,
				y = h.margin,
				z = m(y[1] + y[3]),
				s = m(y[0] + y[2]),
				w, A, u, D, B, G, C, E, I;
			e.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
			y = m(l.outerWidth(!0) - l.width());
			w = m(l.outerHeight(!0) - l.height());
			A = z + y;
			u = s + w;
			D = F(c) ? (a.w - A) * m(c) / 100 : c;
			B = F(k) ? (a.h - u) * m(k) / 100 : k;
			if ("iframe" === h.type) {
				if (I = h.content, h.autoHeight && 1 === I.data("ready")) try {
					I[0].contentWindow.document.location && (g.width(D).height(9999), G = I.contents().find("body"), r && G.css("overflow-x",
						"hidden"), B = G.outerHeight(!0))
				} catch (H) {}
			} else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(D), h.autoHeight || g.height(B), h.autoWidth && (D = g.width()), h.autoHeight && (B = g.height()), g.removeClass("fancybox-tmp");
			c = m(D);
			k = m(B);
			E = D / B;
			n = m(F(n) ? m(n, "w") - A : n);
			p = m(F(p) ? m(p, "w") - A : p);
			v = m(F(v) ? m(v, "h") - u : v);
			q = m(F(q) ? m(q, "h") - u : q);
			G = p;
			C = q;
			h.fitToView && (p = Math.min(a.w - A, p), q = Math.min(a.h - u, q));
			A = a.w - z;
			s = a.h - s;
			h.aspectRatio ? (c > p && (c = p, k = m(c / E)), k > q && (k = q, c = m(k * E)), c < n && (c = n, k = m(c /
				E)), k < v && (k = v, c = m(k * E))) : (c = Math.max(n, Math.min(c, p)), h.autoHeight && "iframe" !== h.type && (g.width(c), k = g.height()), k = Math.max(v, Math.min(k, q)));
			if (h.fitToView)
				if (g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height(), h.aspectRatio)
					for (;
						(a > A || z > s) && c > n && k > v && !(19 < d++);) k = Math.max(v, Math.min(q, k - 10)), c = m(k * E), c < n && (c = n, k = m(c / E)), c > p && (c = p, k = m(c / E)), g.width(c).height(k), e.width(c + y), a = e.width(), z = e.height();
				else c = Math.max(n, Math.min(c, c - (a - A))), k = Math.max(v, Math.min(k, k - (z - s)));
			r && "auto" === t && k < B &&
				c + y + r < A && (c += r);
			g.width(c).height(k);
			e.width(c + y);
			a = e.width();
			z = e.height();
			e = (a > A || z > s) && c > n && k > v;
			c = h.aspectRatio ? c < G && k < C && c < D && k < B : (c < G || k < C) && (c < D || k < B);
			f.extend(h, { dim: { width: x(a), height: x(z) }, origWidth: D, origHeight: B, canShrink: e, canExpand: c, wPadding: y, hPadding: w, wrapSpace: z - l.outerHeight(!0), skinSpace: l.height() - k });
			!I && h.autoHeight && k > v && k < q && !c && g.height("auto")
		},
		_getPosition: function(a) {
			var d = b.current,
				e = b.getViewport(),
				c = d.margin,
				f = b.wrap.width() + c[1] + c[3],
				g = b.wrap.height() + c[0] + c[2],
				c = {
					position: "absolute",
					top: c[0],
					left: c[3]
				};
			d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
			c.top = x(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
			c.left = x(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
			return c
		},
		_afterZoomIn: function() {
			var a = b.current;
			a && ((b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
				f(d.target).is("a") || f(d.target).parent().is("a") ||
					(d.preventDefault(), b[a.closeClick ? "close" : "next"]())
			}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) { a.preventDefault();
				b.close() }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), a.loop || a.index !== a.group.length - 1) ? b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play(!0)) : b.play(!1))
		},
		_afterZoomOut: function(a) { a = a || b.current;
			f(".fancybox-wrap").trigger("onReset").remove();
			f.extend(b, { group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null });
			b.trigger("afterClose", a) }
	});
	b.transitions = {
		getOrigPosition: function() {
			var a = b.current,
				d = a.element,
				e = a.orig,
				c = {},
				f = 50,
				g = 50,
				h = a.hPadding,
				k = a.wPadding,
				n = b.getViewport();
			!e && a.isDom && d.is(":visible") && (e = d.find("img:first"), e.length || (e = d));
			u(e) ? (c = e.offset(), e.is("img") &&
				(f = e.outerWidth(), g = e.outerHeight())) : (c.top = n.y + (n.h - g) * a.topRatio, c.left = n.x + (n.w - f) * a.leftRatio);
			if ("fixed" === b.wrap.css("position") || a.locked) c.top -= n.y, c.left -= n.x;
			return c = { top: x(c.top - h * a.topRatio), left: x(c.left - k * a.leftRatio), width: x(f + k), height: x(g + h) }
		},
		step: function(a, d) {
			var e, c, f = d.prop;
			c = b.current;
			var g = c.wrapSpace,
				h = c.skinSpace;
			if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](m("width" ===
				f ? c : c - g * e)), b.inner[f](m("width" === f ? c : c - g * e - h * e))
		},
		zoomIn: function() {
			var a = b.current,
				d = a.pos,
				e = a.openEffect,
				c = "elastic" === e,
				l = f.extend({ opacity: 1 }, d);
			delete l.position;
			c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
			b.wrap.css(d).animate(l, { duration: "none" === e ? 0 : a.openSpeed, easing: a.openEasing, step: c ? this.step : null, complete: b._afterZoomIn }) },
		zoomOut: function() {
			var a = b.current,
				d = a.closeEffect,
				e = "elastic" === d,
				c = { opacity: 0.1 };
			e && (c = this.getOrigPosition(), a.closeOpacity &&
				(c.opacity = 0.1));
			b.wrap.animate(c, { duration: "none" === d ? 0 : a.closeSpeed, easing: a.closeEasing, step: e ? this.step : null, complete: b._afterZoomOut })
		},
		changeIn: function() {
			var a = b.current,
				d = a.nextEffect,
				e = a.pos,
				c = { opacity: 1 },
				f = b.direction,
				g;
			e.opacity = 0.1; "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = x(m(e[g]) - 200), c[g] = "+=200px") : (e[g] = x(m(e[g]) + 200), c[g] = "-=200px")); "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, { duration: a.nextSpeed, easing: a.nextEasing, complete: b._afterZoomIn }) },
		changeOut: function() {
			var a = b.previous,
				d = a.prevEffect,
				e = { opacity: 0.1 },
				c = b.direction; "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
			a.wrap.animate(e, { duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function() { f(this).trigger("onReset").remove() } }) }
	};
	b.helpers.overlay = {
		defaults: { closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !t, fixed: !0 },
		overlay: null,
		fixed: !1,
		el: f("html"),
		create: function(a) {
			var d;
			a = f.extend({}, this.defaults, a);
			this.overlay &&
				this.close();
			d = b.coming ? b.coming.parent : a.parent;
			this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(d && d.lenth ? d : "body");
			this.fixed = !1;
			a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function(a) {
			var d = this;
			a = f.extend({}, this.defaults, a);
			this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
			this.fixed || (q.bind("resize.overlay", f.proxy(this.update, this)), this.update());
			a.closeClick && this.overlay.bind("click.overlay",
				function(a) {
					if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1 });
			this.overlay.css(a.css).show()
		},
		close: function() { q.unbind("resize.overlay");
			this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), this.el.removeClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
			f(".fancybox-overlay").remove().hide();
			f.extend(this, { overlay: null, fixed: !1 }) },
		update: function() {
			var a = "100%",
				b;
			this.overlay.width(a).height("100%");
			J ? (b = Math.max(H.documentElement.offsetWidth, H.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > q.width() && (a = p.width());
			this.overlay.width(a).height(p.height())
		},
		onReady: function(a, b) {
			var e = this.overlay;
			f(".fancybox-overlay").stop(!0, !0);
			e || this.create(a);
			a.locked && this.fixed && b.fixed && (b.locked = this.overlay.append(b.wrap), b.fixed = !1);!0 === a.showEarly && this.beforeShow.apply(this, arguments) },
		beforeShow: function(a, b) {
			b.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && f("*").filter(function() {
				return "fixed" ===
					f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin"), this.scrollV = q.scrollTop(), this.scrollH = q.scrollLeft(), this.el.addClass("fancybox-lock"), q.scrollTop(this.scrollV).scrollLeft(this.scrollH));
			this.open(a)
		},
		onUpdate: function() { this.fixed || this.update() },
		afterClose: function(a) { this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this)) }
	};
	b.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function(a) {
			var d = b.current,
				e = d.title,
				c = a.type;
			f.isFunction(e) && (e = e.call(d.element, d));
			if (r(e) && "" !== f.trim(e)) {
				d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
				switch (c) {
					case "inside":
						c = b.skin;
						break;
					case "outside":
						c = b.wrap;
						break;
					case "over":
						c = b.inner;
						break;
					default:
						c = b.skin, d.appendTo("body"), J && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(m(d.css("margin-bottom"))) }
				d["top" === a.position ? "prependTo" :
					"appendTo"](c)
			}
		}
	};
	f.fn.fancybox = function(a) {
		var d, e = f(this),
			c = this.selector || "",
			l = function(g) {
				var h = f(this).blur(),
					k = d,
					l, m;
				g.ctrlKey || g.altKey || g.shiftKey || g.metaKey || h.is(".fancybox-wrap") || (l = a.groupAttr || "data-fancybox-group", m = h.attr(l), m || (l = "rel", m = h.get(0)[l]), m && "" !== m && "nofollow" !== m && (h = c.length ? f(c) : e, h = h.filter("[" + l + '="' + m + '"]'), k = h.index(this)), a.index = k, !1 !== b.open(h, a) && g.preventDefault()) };
		a = a || {};
		d = a.index || 0;
		c && !1 !== a.live ? p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')",
			"click.fb-start", l) : e.unbind("click.fb-start").bind("click.fb-start", l);
		this.filter("[data-fancybox-start=1]").trigger("click");
		return this
	};
	p.ready(function() {
		var a, d;
		f.scrollbarWidth === w && (f.scrollbarWidth = function() {
			var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				b = a.children(),
				b = b.innerWidth() - b.height(99).innerWidth();
			a.remove();
			return b });
		f.support.fixedPosition === w && (f.support.fixedPosition = function() {
			var a = f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
				b = 20 === a[0].offsetTop || 15 === a[0].offsetTop;
			a.remove();
			return b
		}());
		f.extend(b.defaults, { scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body") });
		a = f(s).width();
		K.addClass("fancybox-lock-test");
		d = f(s).width();
		K.removeClass("fancybox-lock-test");
		f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px !important;}</style>").appendTo("head")
	})
})(window, document, jQuery);
;var dp = $('#drawingArea');

dp
	.css({ position: 'relative' })
	.on("mousemove mousedown mouseup", draw_a_box);

draw = false;

var ieEight = '';
var droppedURL;

function draw_a_box(e) {
	var position = dp.position();
	containerOffset = dp.offset().left;

	var pageX = e.pageX - containerOffset,
		pageY = e.pageY - 30,
		dpLast = dp.find('.hotspot.last'),
		dpLast_data = dpLast.data();

	if (e.type === 'mousemove') {

		// If ".hotspot.last" doesn't exist, create it.
		if (dpLast.length < 1) {
			$('<div class="hotspot last"></div>').appendTo(dp);
		}

		var drawCSS = {};

		// If drawing is initiated.
		if (draw) {

			// xLeft
			if (dpLast_data.pageX > pageX) {
				drawCSS['right'] = dp.width() - dpLast_data.pageX,
					drawCSS['left'] = 'auto',
					drawCSS['width'] = dpLast_data.pageX - pageX;
			}
			// xRight
			else if (dpLast_data.pageX < pageX) {
				drawCSS['left'] = dpLast_data.pageX,
					drawCSS['right'] = 'auto',
					drawCSS['width'] = pageX - dpLast_data.pageX;
			}

			// yUp
			if (dpLast_data.pageY > pageY) {
				drawCSS['bottom'] = dp.height() - dpLast_data.pageY,
					drawCSS['top'] = 'auto',
					drawCSS['height'] = dpLast_data.pageY - pageY;
			}
			// yDown
			else if (dpLast_data.pageY < pageY) {
				drawCSS['top'] = dpLast_data.pageY,
					drawCSS['bottom'] = 'auto',
					drawCSS['height'] = pageY - dpLast_data.pageY;
			}

		}

		if (!draw && dpLast.length > 0) {
			dpLast.css({
				top: pageY,
				left: pageX
			});
		}

		if (draw) {
			$('.holding').remove();
			dpLast.css(drawCSS);
		}

	}

	if (e.type === 'mousedown') {
		e.preventDefault();
		draw = true;
		dpLast.data({ "pageX": pageX, "pageY": pageY });
	} else if (e.type === 'mouseup') {
		draw = false;
		dpLast.addClass('holding');
		dpLast.removeClass('last');
	}
}

function convertResponsive() {

	var link = $('.input-field').val();

	var type = $('.linkType.active').html();
	if (type == 'URL') {
		type = 'href';
	} else if (type == 'Function') {
		type = 'onclick';
	} else {
		alert("Select type of hotspot");
	}

	if ($('.holding').length == 0) {
		alert('Drag Out Hotspot');
	} else if (link == '' || link == null || link == undefined) {
		alert('Enter Hotspot link');
	} else {
		var box = $('.holding'),
			$image = $('#drawingArea img:first'),
			position = box.position();

		var hotspot = [box.width(), box.height(), position.left, position.top, link];

		hotspot[0] = 100 * (hotspot[0] / $image.width());
		hotspot[1] = 100 * (hotspot[1] / $image.height());
		hotspot[2] = 100 * (hotspot[2] / $image.width());
		hotspot[3] = 100 * (hotspot[3] / $image.height());

		for (var i = 0; i < (hotspot.length - 1); i++) {
			hotspot[i] = (parseFloat(hotspot[i]).toFixed(1)) + "%";
		}

		$image.after('\n' + '<a ' + type + '="' + hotspot[4] + '" class="rim-hotspot" style="width:' + hotspot[0] + ';height:' + hotspot[1] + ';left:' + hotspot[2] + ';top:' + hotspot[3] + ';position:absolute;cursor:pointer">' + ieEight + '</a>');
		$('.holding').remove();
		$('.last').remove();
		displayCode();
		addDelete();
	}

}

function removeHolding() {
	$('.holding').remove();
	$('.last').remove();
}

function displayCode() {

	var displayCode = $('#drawingArea').html();
	var res = displayCode.replace(droppedURL, "IMG_PATH");
	$('.display-code-here').html("<pre class='prettyprint lan-html'><xmp>" + res + "</xmp></pre>");
	prettyPrint();

}

$('.linkType').on('click', function() {
	if (!$(this).is('.active')) {
		$('.active').removeClass('active');
		$(this).addClass('active');
		changePlaceholder();
	}
});

$('.ie').on('click', function() {
	if ($(this).is('.btn-success')) {
		$(this).removeClass('btn-success');
		$(this).html('IE8');
		ieEight = '';
	} else {
		$(this).addClass('btn-success');
		$(this).html('IE8 <i class="fa fa-check"></i>');
		ieEight = '<img src="http://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif">';
	}
});

function changePlaceholder() {
	selectedBtn = $('.linkType.active').html();
	if (selectedBtn == 'URL') {
		$('.input-field').attr("placeholder", "http://www.google.com");
	} else {
		$('.input-field').attr("placeholder", "functionName()")
	}
}
$('.submit-link').on('click', function() {
	var linkURL = $('.link-url').val();
	replaceBg(linkURL, false);
});

function replaceBg(img, dropped) {
	if (dropped) {
		droppedURL = img;
	}
	console.log(droppedURL);
	$('#rim-img-load').hide();
	$('#drawingArea').html('<img id="main-image" src="' + img + '" width="100%" style="position:relative">');
}

function addDelete() {
	$('.rim-hotspot').on({
		mouseenter: function() {
			$(this).on('click', function(e) {
				e.preventDefault();
				var confirmDelete = confirm("Delete Hotspot?");
				if (confirmDelete) {
					$(this).removeAttr("href").remove();
					$(this).removeAttr("onclick").remove();
					$('.holding').remove();
					$('.last').remove();
					displayCode();
				} else {
					return false;
				}
			});
		},
		mouseleave: function() {
			$(this).removeClass('delete');
		}
	});
}

function clearAll() {
	$('#drawingArea img').All().remove();
	displayCode();
}
;var filterThemes = function() {
	var themes = document.getElementsByClassName('js-theme') || [];
	var filters = document.getElementsByClassName('js-theme-filter') || [];

	// Filter by theme types
	[].forEach.call(filters, function(filter) {
		filter.addEventListener('click', function(event) {
			event.preventDefault();
			selectTab(this);
			[].forEach.call(themes, function(theme) {
				theme.classList.remove('fadeInUp');
				window.setTimeout(function() {
					if (filter.getAttribute('data-filter') && filter.getAttribute('data-filter') != theme.getAttribute('data-theme-type')) {
						theme.classList.add('-hide');
					} else {
						theme.classList.remove('-hide');
						theme.classList.add('fadeInUp');
					}
				}, 100);
			});
			if (window.ga) {
				ga('send', 'event', 'Filter', 'click', filter.getAttribute('data-filter') || 'all');
			}
		})
	});
}

var selectTab = function(elem) {
	var filters = document.getElementsByClassName('js-theme-filter') || [];
	[].forEach.call(filters, function(filter) {
		if (filter == elem) {
			filter.classList.add('-selected');
		} else {
			filter.classList.remove('-selected');
		}
	});
}

var trackDownload = function() {
	var downloadLinks = document.getElementsByClassName('js-download-theme') || [];

	// Click tracking with Google Analytics
	[].forEach.call(downloadLinks, function(link) {
		link.addEventListener('click', function(event) {
			if (window.ga) {
				ga('send', 'event', 'Download', 'click', link.getAttribute('data-theme-id'));
			}
		});
	});
}

document.addEventListener("DOMContentLoaded", function() {
	filterThemes();
	trackDownload();
}, false);
;/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript */
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);s[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,s,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(l=(o.className.match(e)||[,""])[1],s=t.languages[l]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l);var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:l,grammar:s,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s="Array"===t.util.type(s)?s:[s];for(var o=0;o<s.length;++o){var u=s[o],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));;
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/};;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript},alias:"language-javascript"}});;
