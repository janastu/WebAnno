((function(){
	var a=function(a,b){
		return function(){
			return a.apply(b,arguments)}},
			b=Object.prototype.hasOwnProperty,
			c=function(a,c){
				function e(){
					this.constructor=a}
				for(var d in c)b.call(c,d)&&(a[d]=c[d]);
					return e.prototype=c.prototype,
				a.prototype=new e,
				a.__super__=c.prototype,a};


			Annotator.Plugin.Touch=function(b){
				function f(b,c){this._onDocumentTap=a(this._onDocumentTap,this),
					this._onHighlightTap=a(this._onHighlightTap,this),
					this._onAdderTap=a(this._onAdderTap,this),
					this._onToggleTap=a(this._onToggleTap,this),
					this._onSelection=a(this._onSelection,this),
					this._watchForSelection=a(this._watchForSelection,this),
					f.__super__.constructor.apply(this,arguments),
					this.utils=Annotator.Plugin.Touch.utils,
					this.selection=null,
					this.document=d(document)}var d,e;return c(f,b),
					e=Annotator._t,d=Annotator.$,f.states={ON:"on",OFF:"off"},
					f.prototype.template='<div class="annotator-touch-widget annotator-touch-controls annotator-touch-hide">\n  <div class="annotator-touch-widget-inner">\n    <a class="annotator-button annotator-add annotator-focus">'+e("Annotate")+'</a>\n<a class="annotator-button annotator-touch-toggle" data-state="off">'+e("Start Annotating")+"</a>\n  </div>\n</div>",
					f.prototype.classes={hide:"annotator-touch-hide"},
					f.prototype.options={force:!1,useHighlighter:!1},
					

					f.prototype.pluginInit=function(){
						if(!Annotator.supported()||!this.options.force&&!f.isTouchDevice())return;
						return this._setupControls(),


						this.options.useHighlighter&&(this.showControls(),
							this.highlighter=new Highlighter({root:this.element[0],prefix:"annotator-selection",enable:!1,highlightStyles:!0})),
						

						this.document.delegate(".annotator-hl","tap",{preventDefault:!1},this._onHighlightTap),
						his.subscribe("selection",this._onSelection),
						this._unbindAnnotatorEvents(),this._setupAnnotatorEvents(),this._watchForSelection()},

					f.prototype.pluginDestroy=function(){this.controls&&this.controls.remove(),
						this.highlighter&&this.highlighter.disable();
						if(this.annotator)return 
							this.annotator.editor.unsubscribe("hide",this._watchForSelection)},

					f.prototype.startAnnotating=function(){return this.highlighter&&this.highlighter.enable(),
						this.toggle.attr("data-state",f.states.ON),
						this.toggle.html("Stop Annotating"),this},

					f.prototype.stopAnnotating=function(){return this.highlighter&&this.highlighter.disable(),
						this.toggle.attr("data-state",f.states.OFF),
						this.toggle.html("Start Annotating"),this},

					f.prototype.isAnnotating=function(){var a;return a=this.options.useHighlighter,
						!a||this.toggle.attr("data-state")===f.states.ON},

					f.prototype.showEditor=function(a){return this.annotator.showEditor(a,{}),this.hideControls(),this},

					f.prototype.showControls=function(){return this.controls.removeClass(this.classes.hide),this},

					f.prototype.hideControls=function(){return this.options.useHighlighter||this.controls.addClass(this.classes.hide),this},

					f.prototype._setupControls=function(){this.annotator.adder.remove(),this.controls=d(this.template).appendTo("body"),this.adder=this.controls.find(".annotator-add"),
					this.adder.bind("tap",{onTapDown:function(a){return a.stopPropagation()}},this._onAdderTap),this.toggle=this.controls.find(".annotator-touch-toggle"),this.toggle.bind({tap:this._onToggleTap});
					if(!this.options.useHighlighter)return this.toggle.hide()},


					f.prototype._setupAnnotatorEvents=function(){var a=this;return this.editor=new f.Editor(this.annotator.editor),
						this.viewer=new f.Viewer(this.annotator.viewer),
						this.annotator.editor.on("show",function(){a._clearWatchForSelection(),a.annotator.onAdderMousedown();
							if(a.highlighter)return a.highlighter.disable()}),
						this.annotator.viewer.on("show",function(){if(a.highlighter)return a.highlighter.disable()}),
						this.annotator.editor.on("hide",function(){return a.utils.nextTick(function(){return a.highlighter&&a.highlighter.enable().deselect(),a._watchForSelection()})}),
						this.annotator.viewer.on("hide",function(){return a.utils.nextTick(function(){if(a.highlighter)return a.highlighter.enable().deselect()})})},


				 	f.prototype._unbindAnnotatorEvents=function(){
				 		return this.document.unbind({mouseup:this.annotator.checkForEndSelection,
				 									mousedown:this.annotator.checkForStartSelection}),
				 		this.element.unbind("click mousedown mouseover mouseout")},

				 	f.prototype._watchForSelection=function(){var a,b,c,d=this;if(this.timer)return;
				 		return a=f.isAndroid()?300:1e3/60,b=(new Date).getTime(),
				 		c=function(){var e;return e=(new Date).getTime()-b,e>a&&(b=(new Date).getTime(),d._checkSelection()),
				 			d.timer=d.utils.requestAnimationFrame.call(window,c)},c()},

				 	f.prototype._clearWatchForSelection=function(){
				 		return this.utils.cancelAnimationFrame.call(window,this.timer),this.timer=null},

				 	f.prototype._checkSelection=function(){var a,b,c;b=window.getSelection(),
				 		a=this.selectionString,c=d.trim(b+""),
				 		b.rangeCount&&c!==this.selectionString&&(this.range=b.getRangeAt(0),this.selectionString=c);
				 		if(b.rangeCount===0||this.range&&this.range.collapsed)this.range=null,
				 			this.selectionString="";
				 		if(this.selectionString!==a)return this.publish("selection",[this.range,this])},

				 	f.prototype._onSelection=function(){return this.isAnnotating()&&this.range&&this._isValidSelection(this.range)?(this.adder.removeAttr("disabled"),
				 		this.showControls()):(this.adder.attr("disabled",""),
				 		this.hideControls())},

				 	f.prototype._isValidSelection=function(a){var b,c,e,f;
				 		return b=function(a){return d(a).parents(".annotator-wrapper").length},
				 		c=a.startOffset<a.startContainer.length,f=c&&b(a.startContainer),e=a.endOffset>0&&b(a.endContainer),f||e},

				 	f.prototype._onToggleTap=function(a){return a.preventDefault(),this.isAnnotating()?this.stopAnnotating():this.startAnnotating()},

				 	f.prototype._onAdderTap=function(a){var b,c,d,e=this;a.preventDefault();if(this.range){b=new Annotator.Range.BrowserRange(this.range),d=b.normalize().limit(this.element[0]);if(d&&!this.annotator.isAnnotator(d.commonAncestor))return c=function(a){return e.annotator.unsubscribe("beforeAnnotationCreated",c),a.quote=d.toString(),a.ranges=[d]},this.annotator.subscribe("beforeAnnotationCreated",c),this.annotator.onAdderClick(a)}},

				 	f.prototype._onHighlightTap=function(a){var b,c;b=d(a.currentTarget).parents().filter(function(){return d(this).is("a, [data-annotator-clickable]")});if(b.length)return;if(d.contains(this.element[0],a.currentTarget))return c=a.originalEvent,c&&c.touches&&(a.pageX=c.touches[0].pageX,a.pageY=c.touches[0].pageY),this.annotator.viewer.isShown()&&this.annotator.viewer.hide(),this.annotator.onHighlightMouseover(a),this.document.unbind("tap",this._onDocumentTap),this.document.bind("tap",{preventDefault:!1},this._onDocumentTap)},

				 	f.prototype._onDocumentTap=function(a){this.annotator.isAnnotator(a.target)||this.annotator.viewer.hide();if(!this.annotator.viewer.isShown())return this.document.unbind("tap",this._onDocumentTap)},

				 	f.isTouchDevice=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},

				 	f.isAndroid=function(){return/Android/i.test(window.navigator.userAgent)},f}(Annotator.Plugin),

				 	Annotator.Plugin.Touch.Editor=function(b){function g(b,c){var d=this;this.editor=b,this._onOverlayTap=a(this._onOverlayTap,this),
				 		this._onCancel=a(this._onCancel,this),this._onSubmit=a(this._onSubmit,this),
				 		this._onExpandTap=a(this._onExpandTap,this),this._triggerAndroidRedraw=a(this._triggerAndroidRedraw,this),
				 		g.__super__.constructor.call(this,this.editor.element[0],c),this.element.addClass("annotator-touch-editor"),
				 		this.element.wrapInner('<div class="annotator-touch-widget" />'),
				 		this.element.find("form").addClass("annotator-touch-widget-inner"),
				 		this.element.find(".annotator-controls a").addClass("annotator-button"),
				 		this.element.undelegate("textarea","keydown"),
				 		this.on("hide",function(){return d.element.find(":focus").blur()}),
				 		this._setupQuoteField(),
				 		this._setupAndroidRedrawHack()}var d,e,f;return c(g,b),f=Annotator._t,e=Annotator.$,
				 		d=Annotator.Plugin.Touch,
				 		g.prototype.events={click:"_onOverlayTap",".annotator-save tap":"_onSubmit",".annotator-cancel tap":"_onCancel",".annotator-quote-toggle tap":"_onExpandTap"},
				 		g.prototype.classes={expand:"annotator-touch-expand"},
				 		g.prototype.templates={quote:'<button class="annotator-quote-toggle">'+f("expand")+'</button>\n<span class="quote"></span>'},

				 		g.prototype.showQuote=function(){return this.quote.addClass(this.classes.expand),
				 			this.quote.find("button").text(f("Collapse")),this},

				 		g.prototype.hideQuote=function(){return this.quote.removeClass(this.classes.expand),
				 			this.quote.find("button").text(f("Expand")),this},

				 		g.prototype.isQuoteHidden=function(){return!this.quote.hasClass(this.classes.expand)},

				 		g.prototype._setupQuoteField=function(){var a=this;return 
				 			this.quote=e(this.editor.addField({id:"quote",load:function(b,c){
				 				return a.hideQuote(),a.quote.find("span").html(Annotator.Util.escape(c.quote||"")),
				 				a.quote.find("button").toggle(a._isTruncated())}})),
				 			this.quote.empty().addClass("annotator-item-quote"),this.quote.append(this.templates.quote)},

				 		g.prototype._setupAndroidRedrawHack=function(){var a,b,c=this;if(d.isAndroid())
				 			return b=null,a=function(){return b=null,c._triggerAndroidRedraw()},
				 			e(window).bind("scroll",function(){if(!b)return b=setTimeout(a,100)})},

				 		g.prototype._triggerAndroidRedraw=function(){return this._input||(this._input=this.element.find(":input:first")),
				 		this._default||(this._default=parseFloat(this._input.css("padding-top"))),
				 		this._multiplier=(this._multiplier||1)*-1,
				 		this._input[0].style.paddingTop=this._default+this._multiplier+"px",
				 		this._input[0].style.paddingTop=this._default-this._multiplier+"px"},

				 		g.prototype._isTruncated=function(){var a,b,c;return b=this.isQuoteHidden(),b||this.hideQuote(),
				 			c=this.quote.height(),this.showQuote(),a=this.quote.height(),b?this.hideQuote():this.showQuote(),a>c},

				 		g.prototype._onExpandTap=function(a){return a.preventDefault(),a.stopPropagation(),this.isQuoteHidden()?this.showQuote():this.hideQuote()},

				 		g.prototype._onSubmit=function(a){return a.preventDefault(),this.editor.submit()},

				 		g.prototype._onCancel=function(a){return a.preventDefault(),this.editor.hide()},

				 		g.prototype._onOverlayTap=function(a){if(a.target===this.element[0])return this.editor.hide()},g}(Annotator.Delegator),jQuery.event.special.tap={add:function(a){var b,c,d,e;return c=a.data=a.data||{},b=this,e=function(a){return c.preventDefault!==!1&&a.preventDefault(),c.onTapDown&&c.onTapDown.apply(this,arguments),c.event=a,c.touched=setTimeout(function(){return c.touched=null},c.timeout||300),jQuery(document).bind({touchend:d,mouseup:d})},d=function(e){var f;if(c.touched!=null){clearTimeout(c.touched);if(e.target===b||jQuery.contains(b,e.target))f=a.origHandler||a.handler,f.call(this,c.event);c.touched=null}return c.onTapUp&&c.onTapUp.apply(this,arguments),jQuery(document).unbind({touchstart:d,mousedown:d})},c.tapHandlers={touchstart:e,mousedown:e},a.selector?jQuery(b).delegate(a.selector,c.tapHandlers):jQuery(b).bind(c.tapHandlers)},remove:function(a){return jQuery(this).unbind(a.data.tapHandlers)}},Annotator.Delegator.natives.push("touchstart","touchmove","touchend","tap"),

				 		Annotator.Plugin.Touch.utils=function(){var a,b,c,d,e,f,g;e=["ms","moz","webkit","o"],d=window.requestAnimationFrame,a=window.cancelAnimationFrame;for(f=0,g=e.length;f<g;f++){c=e[f];if(!d)d=window[""+c+"RequestAnimationFrame"],a=window[""+c+"CancelAnimationFrame"]||window[""+c+"CancelRequestAnimationFrame"];else continue}return d||(b=0,d=function(a,c){var d,e;return d=(new Date).getTime(),e=Math.max(0,16-(d-b)),b=d+e,window.setTimeout(function(){return a(d+e)},e)}),a||(a=function(a){return clearTimeout(a)}),{requestAnimationFrame:d,cancelAnimationFrame:a,nextTick:function(a){return setTimeout(a,0)}}}(),Annotator.Plugin.Touch.Viewer=function(b){function e(b,c){this.viewer=b,this._onLoad=a(this._onLoad,this),e.__super__.constructor.call(this,this.viewer.element[0],c),this.element.unbind("click"),this.element.addClass("annotator-touch-widget annotator-touch-viewer"),this.on("load",this._onLoad)}var d;return c(e,b),d=Annotator.$,e.prototype.events={".annotator-item tap":"_onTap",".annotator-edit tap":"_onEdit",".annotator-delete tap":"_onDelete"},e.prototype.hideAllControls=function(){return this.element.find(".annotator-item").removeClass(this.viewer.classes.showControls),this},e.prototype._onLoad=function(){var a;return a=this.element.find(".annotator-controls"),a.toggleClass("annotator-controls annotator-touch-controls"),a.find("button").addClass("annotator-button")},e.prototype._onTap=function(a){var b,c;c=d(a.currentTarget),b=c.hasClass(this.viewer.classes.showControls),this.hideAllControls();if(!b)return c.addClass(this.viewer.classes.showControls)},e.prototype._onEdit=function(a){return a.preventDefault(),this.viewer.onEditClick(a)},e.prototype._onDelete=function(a){return a.preventDefault(),this.viewer.onDeleteClick(a)},e}(Annotator.Delegator)})).call(this);
