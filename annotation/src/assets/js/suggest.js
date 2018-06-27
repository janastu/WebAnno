window.onload = (function(Annotator){

	Annotator = window.Annotator || Annotator;
	Annotator.Plugin.SuggestEdit = function (element, message) {
    var myPlugin = {};
    //console.log("plugin created")

    myPlugin.options = {
    // The CSS class to apply to drawn highlights
    suggestClass: 'annotator-editing',

    describeClass: 'annotator-describe',
    }



    myPlugin.pluginInit = function () {
    	
    	myPlugin.suggester = function(annotation){
    		console.log(this.annotator.setupAnnotation(annotation));
    	};


      this.annotator.viewer.addField({
        load: function (field, annotation) {
          field.innerHTML = message;
        }
      });



      this.annotator.editor.addField({
      	load: function (field, annotation) {
          /*field.innerHTML = "<input type='text' placeholder='suggest here' />";*/
          field.innerHTML = "<input id = 'sugCheck' type='checkbox' name='terms' /> Edit <input id = 'DesCheck' type='checkbox' name='terms' /> Describe";

        },
        submit: function (field, annotation ) {
        	//console.log("submitted" , $(field).children()[0].value, annotation);
        	//var suggtext = $(field).children()[0].value;
        	//console.log("suggested text hiiiiiiiii",suggtext);
        	//var temp = annotation;

        			if ($('#sugCheck').is(':checked') && $('#DesCheck').is(':checked')){ 
			        	annotation.suggest = true;
			        	annotation.describe = true;
			        	console.log("checked both",annotation.suggest,annotation.describe);
			        	console.log("annotated info",annotation.quote,annotation.ranges);

		        	}
		        	else if ($('#sugCheck').is(':checked')) {
		        		annotation.suggest = true;
		        		annotation.describe = false;
		      			console.log("checkedOnly suggest",annotation.suggest,annotation.describe);	
		        	}
		        	else if ($('#DesCheck').is(':checked')) {
		        		annotation.suggest = false;
		        		annotation.describe = true;
		      			console.log("checkedOnly Describe ",annotation.suggest,annotation.describe);	
		        	}
		        	else {
		        		annotation.suggest = false;
		        		annotation.describe = false;
		      			console.log("notchecked any",annotation.suggest,annotation.describe);
		        	}
		     //console.log("suggested text",suggtext);
		     /*var temp = annotation;
        	
        			if (suggtext == "" ){ 
			        	temp.suggest = false;
			            console.info("suggested text",suggtext);
 
		        	}
		        	else {
		        		temp.suggest = true;
		        		
		        	}*/

        }//submit
      });//addfield

      

      this.annotator
          .subscribe("annotationCreated", function (annotation) {
	          	if(annotation.suggest == true){
		            console.info("suggestclass value is::",myPlugin.options.suggestClass);
		            $(annotation.highlights).addClass(myPlugin.options.suggestClass);
		            console.info("The annotation for suggest: %o has just been created!", annotation);
		            new Annotation_structure(annotation);
	        		}
        		else if(annotation.describe == true){
        			console.info("suggestclass value is::",myPlugin.options.describeClass);
            		$(annotation.highlights).addClass(myPlugin.options.describeClass);
            		console.info("The annotation for describe: %o has just been created!", annotation);
        		}
        		else {
        			console.info("checkthestyle");
        		}
          })

 			.subscribe("beforeAnnotationCreated", function (annotation) {
            console.info("The BEFORE annotation: %o has just been created!", annotation)
          })

    
          /* .subscribe("annotationEditorSubmit", function (editor, annotation) {
            console.info("The annotation with editor: %o %o has just been created!", editor, annotation)
          })*/

        
  };//pluginInit

//==============================================================
Annotation_structure = function () {
  this.creator = "ashwini",
  this.body_anno =  "http://example.net/review1",
  this.type = "Annotation",
  this.motivation = "Comementing" 
  return console.log(this);

  }


//==============================================================

/*Highlighter.prototype.suggest = function () {

	console.log("checking the highlighter",this);
}*/

    // Create your plugin here. Then return it.
    return myPlugin;

}//SuggestEdit
})//closure
