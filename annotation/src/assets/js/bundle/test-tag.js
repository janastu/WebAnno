Filter.prototype.options={appendTo:"body",
filters:[],
addAnnotationFilter:true,
isFiltered:function(input,property){var keyword,_k,_len2,_ref4;
	if(!(input&&property)){return false}
		_ref4=input.split(/\s+/);
	for(_k=0,_len2=_ref4.length;_k<_len2;_k++){
		keyword=_ref4[_k];
		if(property.indexOf(keyword)===-1){return false}}
			return true}
	};

function Filter(element,options){
	this._onPreviousClick=__bind(this._onPreviousClick,this);
	this._onNextClick=__bind(this._onNextClick,this);
	this._onFilterKeyup=__bind(this._onFilterKeyup,this);
	this._onFilterBlur=__bind(this._onFilterBlur,this);
	this._onFilterFocus=__bind(this._onFilterFocus,this);
	this.updateHighlights=__bind(this.updateHighlights,this);
	var _base;

	element=$(this.html.element).appendTo((options!=null?options.appendTo:void 0)||this.options.appendTo);
	Filter.__super__.constructor.call(this,element,options);(_base=this.options).filters||(_base.filters=[]);

	this.filter=$(this.html.filter);
	this.filters=[];
	this.current=0
}


Filter.prototype.pluginInit=function(){
		var filter,_k,_len2,_ref4;_ref4=this.options.filters;
		for(_k=0,_len2=_ref4.length;_k<_len2;_k++){filter=_ref4[_k];this.addFilter(filter)}
			this.updateHighlights();
			this._setupListeners()._insertSpacer();
		if(this.options.addAnnotationFilter===true){return this.addFilter({label:Annotator._t("Annotation"),property:"text"})}
	};

Filter.prototype.destroy=function(){
		var currentMargin,html;
		Filter.__super__.destroy.apply(this,arguments);
		html=$("html");currentMargin=parseInt(html.css("padding-top"),10)||0;
		html.css("padding-top",currentMargin-this.element.outerHeight());
		return this.element.remove()
	};


Filter.prototype._insertSpacer=function(){
	var currentMargin,html;html=$("html");
	currentMargin=parseInt(html.css("padding-top"),10)||0;html.css("padding-top",currentMargin+this.element.outerHeight());
	return this
};

Filter.prototype._setupListeners=function(){
	var event,events,_k,_len2;
	events=["annotationsLoaded","annotationCreated","annotationUpdated","annotationDeleted"];
	for(_k=0,_len2=events.length;_k<_len2;_k++){
		event=events[_k];
		this.annotator.subscribe(event,this.updateHighlights)}
		return this
};

Filter.prototype.addFilter=function(options){
	var f,filter;
	filter=$.extend({label:"",property:"",isFiltered:this.options.isFiltered},options);
	if(!function(){var _k,_len2,_ref4,_results;_ref4=this.filters;_results=[];
		for(_k=0,_len2=_ref4.length;_k<_len2;_k++){
			f=_ref4[_k];
			if(f.property===filter.property){_results.push(f)}}
				return _results}.call(this).length){filter.id="annotator-filter-"+filter.property;filter.annotations=[];

	filter.element=this.filter.clone().appendTo(this.element);
	filter.element.find("label").html(filter.label).attr("for",filter.id);
	filter.element.find("input").attr({id:filter.id,placeholder:Annotator._t("Filter by ")+filter.label+"…"});
	filter.element.find("button").hide();
	filter.element.data("filter",filter);
	this.filters.push(filter)}return this
};




Filter.prototype.updateFilter=function(filter){
	var annotation,annotations,input,property,_k,_len2,_ref4;filter.annotations=[];
	this.updateHighlights();
	this.resetHighlights();
	input=$.trim(filter.element.find("input").val());
	if(input){annotations=this.highlights.map(function(){return $(this).data("annotation")});
	_ref4=$.makeArray(annotations);
	for(_k=0,_len2=_ref4.length;_k<_len2;_k++){
		annotation=_ref4[_k];property=annotation[filter.property];
		if(filter.isFiltered(input,property)){filter.annotations.push(annotation)}}
			return this.filterHighlights()}
};


Filter.prototype.updateHighlights=function(){
	this.highlights=this.annotator.element.find(".annotator-hl:visible");
	return this.filtered=this.highlights.not(this.classes.hl.hide)
};


Filter.prototype.filterHighlights=function(){
	var activeFilters,annotation,annotations,filtered,highlights,index,uniques,_k,_len2,_ref4;
	activeFilters=$.grep(this.filters,function(filter){return!!filter.annotations.length});
	filtered=((_ref4=activeFilters[0])!=null?_ref4.annotations:void 0)||[];
	if(activeFilters.length>1){annotations=[];
		$.each(activeFilters,function(){return $.merge(annotations,this.annotations)});
		uniques=[];
		filtered=[];
		$.each(annotations,function(){
			if($.inArray(this,uniques)===-1){return uniques.push(this)}else{return filtered.push(this)}})}
	highlights=this.highlights;
	for(index=_k=0,_len2=filtered.length;_k<_len2;index=++_k){
		annotation=filtered[index];
		highlights=highlights.not(annotation.highlights)}highlights.addClass(this.classes.hl.hide);
		this.filtered=this.highlights.not(this.classes.hl.hide);
		return this
};

Filter.prototype.resetHighlights=function(){
	this.highlights.removeClass(this.classes.hl.hide);
	this.filtered=this.highlights;
	return this
};

Filter.prototype._onFilterFocus=function(event){
	var input;input=$(event.target);
	input.parent().addClass(this.classes.active);
	return input.next("button").show()
};


Filter.prototype._onFilterBlur=function(event){
	var input;
	if(!event.target.value){input=$(event.target);
		input.parent().removeClass(this.classes.active);
		return input.next("button").hide()}
};

Filter.prototype._onFilterKeyup=function(event){
	var filter;filter=$(event.target).parent().data("filter");
	if(filter){return this.updateFilter(filter)}
};


Filter.prototype._findNextHighlight=function(previous){
	var active,annotation,current,index,next,offset,operator,resetOffset;
	if(!this.highlights.length){return this}
		offset=previous?0:-1;
		resetOffset=previous?-1:0;
		operator=previous?"lt":"gt";
		active=this.highlights.not("."+this.classes.hl.hide);
		current=active.filter("."+this.classes.hl.active);
		if(!current.length){
			current=active.eq(offset)}

		annotation=current.data("annotation");
		index=active.index(current[0]);
		next=active.filter(":"+operator+"("+index+")").not(annotation.highlights).eq(resetOffset);
		if(!next.length){
			next=active.eq(resetOffset)}
			return this._scrollToHighlight(next.data("annotation").highlights)
};


Filter.prototype._onNextClick=function(event){return this._findNextHighlight()};

Filter.prototype._onPreviousClick=function(event){return this._findNextHighlight(true)};

Filter.prototype._scrollToHighlight=function(highlight){highlight=$(highlight);
	this.highlights.removeClass(this.classes.hl.active);
	highlight.addClass(this.classes.hl.active);
	return $("html, body").animate({scrollTop:highlight.offset().top-(this.element.height()+20)},150)
};

Filter.prototype._onClearClick=function(event){return $(event.target).prev("input").val("").keyup().blur()};
return Filter(Annotator.Plugin);


Annotator.Plugin.Markdown=function(_super){__extends(Markdown,_super);Markdown.prototype.events={annotationViewerTextField:"updateTextField"};function Markdown(element,options){this.updateTextField=__bind(this.updateTextField,this);if((typeof Showdown!=="undefined"&&Showdown!==null?Showdown.converter:void 0)!=null){Markdown.__super__.constructor.apply(this,arguments);this.converter=new Showdown.converter}else{console.error(Annotator._t("To use the Markdown plugin, you must include Showdown into the page first."))}}Markdown.prototype.updateTextField=function(field,annotation){var text;text=Annotator.Util.escape(annotation.text||"");return $(field).html(this.convert(text))};Markdown.prototype.convert=function(text){return this.converter.makeHtml(text)};return Markdown}(Annotator.Plugin);Annotator.Plugin.Tags=function(_super){__extends(Tags,_super);function Tags(){this.setAnnotationTags=__bind(this.setAnnotationTags,this);this.updateField=__bind(this.updateField,this);_ref4=Tags.__super__.constructor.apply(this,arguments);return _ref4}Tags.prototype.options={parseTags:function(string){var tags;string=$.trim(string);tags=[];if(string){tags=string.split(/\s+/)}return tags},stringifyTags:function(array){return array.join(" ")}};Tags.prototype.field=null;Tags.prototype.input=null;Tags.prototype.pluginInit=function(){if(!Annotator.supported()){return}this.field=this.annotator.editor.addField({label:Annotator._t("Add some tags here")+"…",load:this.updateField,submit:this.setAnnotationTags});this.annotator.viewer.addField({load:this.updateViewer});if(this.annotator.plugins.Filter){this.annotator.plugins.Filter.addFilter({label:Annotator._t("Tag"),property:"tags",isFiltered:Annotator.Plugin.Tags.filterCallback})}return this.input=$(this.field).find(":input")};Tags.prototype.parseTags=function(string){return this.options.parseTags(string)};Tags.prototype.stringifyTags=function(array){return this.options.stringifyTags(array)};Tags.prototype.updateField=function(field,annotation){var value;value="";if(annotation.tags){value=this.stringifyTags(annotation.tags)}return this.input.val(value)};Tags.prototype.setAnnotationTags=function(field,annotation){return annotation.tags=this.parseTags(this.input.val())};Tags.prototype.updateViewer=function(field,annotation){field=$(field);if(annotation.tags&&$.isArray(annotation.tags)&&annotation.tags.length){return field.addClass("annotator-tags").html(function(){var string;return string=$.map(annotation.tags,function(tag){return'<span class="annotator-tag">'+Annotator.Util.escape(tag)+"</span>"}).join(" ")})}else{return field.remove()}};return Tags}(Annotator.Plugin);Annotator.Plugin.Tags.filterCallback=function(input,tags){var keyword,keywords,matches,tag,_k,_l,_len2,_len3;if(tags==null){tags=[]}matches=0;keywords=[];if(input){keywords=input.split(/\s+/g);for(_k=0,_len2=keywords.length;_k<_len2;_k++){keyword=keywords[_k];if(tags.length){for(_l=0,_len3=tags.length;_l<_len3;_l++){tag=tags[_l];if(tag.indexOf(keyword)!==-1){matches+=1}}}}}return matches===keywords.length};Annotator.prototype.setupPlugins=function(config,options){var name,opts,pluginConfig,plugins,uri,win,_k,_len2,_results;if(config==null){config={}}if(options==null){options={}}win=Annotator.Util.getGlobal();plugins=["Unsupported","Auth","Tags","Filter","Store","AnnotateItPermissions"];if(win.Showdown){plugins.push("Markdown")}uri=win.location.href.split(/#|\?/).shift()||"";pluginConfig={Tags:{},Filter:{filters:[{label:Annotator._t("User"),property:"user"},{label:Annotator._t("Tags"),property:"tags"}]},Auth:{tokenUrl:config.tokenUrl||"http://annotateit.org/api/token"},Store:{prefix:config.storeUrl||"http://annotateit.org/api",annotationData:{uri:uri},loadFromSearch:{uri:uri}}};for(name in options){if(!__hasProp.call(options,name))continue;opts=options[name];if(__indexOf.call(plugins,name)<0){plugins.push(name)}}$.extend(true,pluginConfig,options);_results=[];for(_k=0,_len2=plugins.length;_k<_len2;_k++){name=plugins[_k];if(!(name in pluginConfig)||pluginConfig[name]){_results.push(this.addPlugin(name,pluginConfig[name]))}else{_results.push(void 0)}}return _results}}.call(this);
