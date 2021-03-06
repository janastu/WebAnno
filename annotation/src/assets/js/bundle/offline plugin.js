
((function(){
	var a,b,c=function(a,b){
		return function(){
			return a.apply(b,arguments)}},

			d=Object.prototype.hasOwnProperty,

			e=function(a,b){
				function e(){
					this.constructor=a}
					for(var c in b)d.call(b,c)&&(a[c]=b[c]);
						return e.prototype=b.prototype,a.prototype=new e,a.__super__=b.prototype,a};
					
					Annotator.Plugin.Offline=a=function(a){	
						function g(){
							this._onOffline=c(this._onOffline,this),this._onOnline=c(this._onOnline,this);
							var a,e,f;g.__super__.constructor.apply(this,arguments),
							this.store=new g.Store,
							this.cache={},f={online:"online",
											offline:"offline",
											beforeAnnotationLoaded:"setAnnotationData",
											beforeAnnotationCreated:"setAnnotationData"};
							for(a in f){if(!d.call(f,a))continue;e=f[a],
								typeof this.options[e]=="function"&&this.on(a,b.proxy(this.options,e))}}

						var b,f; return e(g,a),
							f=Annotator._t,
							b=Annotator.$,g.ANNOTATION_PREFIX="annotation.",
							g.uuid=function(){
								return(""+Math.random()+(new Date).getTime()).slice(2)},
								g.prototype.events={annotationCreated:"_onAnnotationCreated",
													annotationUpdated:"_onAnnotationUpdated",
													annotationDeleted:"_onAnnotationDeleted"},

								g.prototype.options={
									getUniqueKey:function(a){return a.id||(a.id=g.uuid()),a.id},
									shouldLoadAnnotation:function(a){return!0}},

								g.prototype.pluginInit=function(){
									if(!Annotator.supported())return;
									return this.loadAnnotationsFromStore(),this.isOnline()?this.online():this.offline(),
									b(window).bind({online:this._onOnline,offline:this._onOffline})},


							    g.prototype.annotations=function(){return this.cache},

							    g.prototype.online=function(){return this.publish("online",[this]),this},

							    g.prototype.offline=function(){return this.publish("offline",[this]),this},

							    g.prototype.isOnline=function(){return window.navigator.onLine},

							    g.prototype.loadAnnotationsFromStore=function(){
							    		var a,b,c,d,e;c=[],b=this.store.all(g.ANNOTATION_PREFIX);
							    		for(d=0,e=b.length;d<e;d++){a=b[d];
							    			if(!this.options.shouldLoadAnnotation(a))continue;
							    			    this.publish("beforeAnnotationLoaded",[a,this]),
							    				this.publish("annotationLoaded",[a,this]),
							    				this.cache[this.keyForAnnotation(a)]=a,c.push(a)}
							    				return c.length&&this.annotator.loadAnnotations(c),this},


							    g.prototype.addAnnotation=function(a,b){var c;return b==null&&(b={}),
							    	c=this.cache[this.options.getUniqueKey(a)],
							    	!c&&this.options.shouldLoadAnnotation(a)
							    	?this.annotator.setupAnnotation(a,b.silent):this.updateStoredAnnotation(a),this},
							    
							    
							    g.prototype.removeAnnotation=function(a){return this.options.shouldLoadAnnotation(a)?this.annotator.deleteAnnotation(a):this.removeStoredAnnotation(a),this},
							    

							    g.prototype.updateStoredAnnotation=function(a){var c,d,e,f;return c=this.keyForAnnotation(a),
							    		d=this.keyForStore(a),e=this.cache[c],e?b.extend(e,a):e=this.cache[c]=a,f=b.extend({},e),delete f.highlights,this.store.set(d,f),this},
							    

							    g.prototype.removeStoredAnnotation=function(a){var b,c;return b=this.keyForAnnotation(a),c=this.keyForStore(a),this.store.remove(c),delete this.cache[b],this},
							    g.prototype.keyForAnnotation=function(a){return this.options.getUniqueKey.call(this,a,this)},
							    g.prototype.keyForStore=function(a){return g.ANNOTATION_PREFIX+this.keyForAnnotation(a)},
							    g.prototype._onOnline=function(a){return this.online()},
							    g.prototype._onOffline=function(a){return this.offline()},
							    g.prototype._onAnnotationCreated=function(a){return this.updateStoredAnnotation(a)},
							    g.prototype._onAnnotationUpdated=function(a){return this.updateStoredAnnotation(a)},
							    g.prototype._onAnnotationDeleted=function(a){return this.removeStoredAnnotation(a)},g}(Annotator.Plugin),
							    	

				Annotator.Plugin.Offline.Store=b=function(a){
					function b(){b.__super__.constructor.apply(this,arguments)}
					return e(b,a),
							b.KEY_PREFIX="annotator.offline/",
							b.CACHE_DELIMITER="--cache--",
							b.localStorage=window.localStorage,
							b.isSupported=function(){try{return"localStorage"in window&&window.localStorage!==null}catch(a){return!1}},
							b.now=function(){return(new Date).getTime()},
							b.prototype.all=function(a){var c,d,e,f;a==null&&(a=""),f=[],d=this.prefixed(a);
								for(c in localStorage){if(c.indexOf(d)!==0)
							    continue;e=this.get(c.slice(b.KEY_PREFIX.length)),f.push(e)}return f},
							b.prototype.get=function(a){var c;
								return c=b.localStorage.getItem(this.prefixed(a)),c&&(c=this.checkCache(c),c||this.remove(a)),JSON.parse(c)},
							b.prototype.set=function(a,c,d){c=JSON.stringify(c),d&&(c=b.now()+d+b.CACHE_DELIMITER+c);
							    try{b.localStorage.setItem(this.prefixed(a),c)}catch(e){this.publish("error",[e,this])}return this},
							b.prototype.remove=function(a){
								return b.localStorage.removeItem(this.prefixed(a)),this},
							b.prototype.clear=function(){var a,c;c=b.localStorage;
								for(a in c)a.indexOf(b.KEY_PREFIX)===0&&c.removeItem(a);return this},
							b.prototype.prefixed=function(a){return b.KEY_PREFIX+a},
							b.prototype.checkCache=function(a){var c;
							    	return a.indexOf(b.CACHE_DELIMITER)>-1&&(c=a.split(b.CACHE_DELIMITER),
							    		a=b.now()>c.shift()?null:c.join(b.CACHE_DELIMITER)),a},b}
							    		(Annotator.Delegator)})).call(this);
