window.onload = (function(Annotator){

	Annotator = window.Annotator || Annotator;
	Annotator.Plugin.SuggestEdit = function (element, message) {
    var myPlugin = {};
    //console.log("plugin created")

    myPlugin.pluginInit = function () {
      this.annotator.viewer.addField({
        load: function (field, annotation) {
          field.innerHTML = message;
        }
      });

      this.annotator.editor.addField({
      	load: function (field, annotation) {
          /*field.innerHTML = "<input type='text' placeholder='suggest here' />";*/
          field.innerHTML = "<input id = 'sugCheck' type='checkbox' name='terms' /> Suggest <input id = 'DesCheck' type='checkbox' name='terms' /> Describe";

        },
        submit: function (field, annotation ) {
        	//console.log("submitted" , $(field).children()[0].value, annotation);
        	//var suggtext = $(field).children()[0].value;
        	//console.log("suggested text hiiiiiiiii",suggtext);
        	var temp = annotation;

        			if ($('#sugCheck').is(':checked') && $('#DesCheck').is(':checked')){ 
			        	temp.suggest = true;
			        	temp.describe = true;
			        	console.log("checked",temp.suggest,temp.describe);
			        	console.log("annotate",temp.quote,temp.ranges);

		        	}
		        	else if ($('#sugCheck').is(':checked')) {
		        		temp.suggest = true;
		        		temp.describe = false;
		      			console.log("notcheck",temp.suggest,temp.describe);	
		        	}
		        	else if ($('#DesCheck').is(':checked')) {
		        		temp.suggest = false;
		        		temp.describe = true;
		      			console.log("notcheck",temp.suggest,temp.describe);	
		        	}
		        	else {
		        		temp.suggest = false;
		        		temp.describe = false;
		      			console.log("notcheck",temp.suggest,temp.describe);
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

        }
      });


      this.annotator
          .subscribe("annotationCreated", function (annotation) {
            console.info("The annotation: %o has just been created!", annotation)
          })

          /* .subscribe("annotationEditorSubmit", function (editor, annotation) {
            console.info("The annotation with editor: %o %o has just been created!", editor, annotation)
          })*/

        
  };


    // Create your plugin here. Then return it.
    return myPlugin;
}
})