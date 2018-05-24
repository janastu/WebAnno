 

 //Implementation of Touch feature works for the TouchDevices
 //[TODO]: DOM parameters  need to be dynamic ex:#content
 var start_fun=function(){
  jQuery("#content").annotator().annotator('addPlugin', 'Touch', {
      force: location.search.indexOf('force') > -1,
      useHighlighter: location.search.indexOf('highlighter') > -1
    });
    
    if (!Annotator.Plugin.Touch.isTouchDevice()) {
      if (location.search.indexOf('force') > -1) {
        jQuery("#content").append('<p><a href="./index.html">Disable Plugin in Desktop Browser</a></p>');
      } else {
        jQuery("#content").append('<p><a href="./index.html?force">Enable Plugin in Desktop Browser</a></p>');
      }
    }
     
    //Below section is for Implementing the storage
    jQuery("#content").annotator().annotator('addPlugin','Tags','Offline', {
      /* online:  function () {
       jQuery("#status").text("Online");
       },*/
       offline: function () {
       jQuery("#status").text("Offline");

       }  });
  }




//app code - front end for dialog box to appear
function dialog(arg) {
    var x = document.createElement("DIALOG");
    var t = document.createTextNode(arg);
    x.setAttribute("open", "open");
    x.appendChild(t);
    document.body.appendChild(x);

    //close dialog after 3sec
    setTimeout(function(){ 
      x.removeAttribute("open", "open");
     // x.setAttribute("close", "close");
  }, 3000);

}

//BUTTON CLICKS START ANNOTATION
    jQuery("#start-anno").click(function(){
      //alert("start button pressed");
      start_fun(); 
      this.remove(); //remove start-anno button
      dialog("you may start making notes"); 
    })


// Function to export the json file
var export_fun= function exportToJsonFile(jsonData) {

    let dataStr = JSON.stringify(jsonData);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    let exportFileDefaultName = 'data.json';
    
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download',exportFileDefaultName);
    linkElement.click();
}


//bUTTON CLICK FOR EXPORT ANNOTATION
    jQuery("#export-anno").click(function(){
      var newarr_check=[];
      //alert("export button pressed");
      //export_fun(localStorage.getItem("annotat.offline.annotation.))
      for ( var i = 0, len = localStorage.length; i < len; ++i ) {
       var check= JSON.parse(localStorage.getItem( localStorage.key( i )));
       newarr_check.push(check);
     }
     //console.log("new",newarr_check);
      export_fun(newarr_check);

    })

    
     //Clears the stored content in local storage on button click
     jQuery("#clear-storage").click(function () {
      if (annotator) {
        annotator.plugins.Offline.store.clear()
      }
    });


     // sidebar

     // template function to build html


     // function to iterate over data and compile with html template

     //function to render in DOM
     
    var annotator = jQuery("#content").data('annotator');
    