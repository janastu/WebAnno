
(function() { 

  window.App = window.App || {};

 /* ===========================================*/
  
  App.init = function() {
    //console.log("init", new Date);
    
    /*
    initialize application here
    document.getElementById = window.jQuery || {};
     Declare all DOM elements
    */
    App.buttonCreater();

    /* prepare Data */
    App.data = App.getAnnos();


    /*App.$aside = document.getElementById("annotations");*/
        App.$startAnnoBtn = document.getElementById("start-anno");
        App.$exportAnnoBtn = document.getElementById("export-anno");
        App.$clearStorageBtn = document.getElementById("clear-storage");
        App.$suggestBtn = document.getElementById("sugg");
   

    /* Bind events
    App.bindEvents();*/

    /*Call Render*/
    App.render();
  }
/*=======================================*/


  App.render = function() {

    /*Render app here*/
    var nodes = App.sideAnnoTpl();
    /*for(var i = 0; i < nodes.length; i++){
            App.$aside.append(nodes[i]);
          }*/
  }

/* ===================================================*/
  App.bindEvents =  {
    startAnnoBtn: function(){
        /*alert("start button pressed");*/
        App.annoBootstrap(); 
        this.remove(); /*remove start-anno button*/
        dialog("you may start making notes"); 
      },


    exportAnnoBtn: function(){
        var newarr_check=[];
        /*alert("export button pressed");*/
        for ( var i = 0, len = localStorage.length; i < len; ++i ) {
         var check= JSON.parse(localStorage.getItem( localStorage.key( i )));
         newarr_check.push(check);
       }
        
        App.exportAnnos(newarr_check);
    },


      suggestBtn:  function() {
                
          var sel, range, suggestedtext, texta;
          if (window.getSelection) {
              sel = window.getSelection(); 
              suggestedtext = sel.toString();

              texta = test(suggestedtext);

              console.log("o/p from test",texta);
              var textb = document.createRange().createContextualFragment(texta);
              console.log("o/p from create range fragment",textb);
              var textc = document.body.append(textb);
              console.log("replaced text",textc);

             console.log(sel);
              if (sel.rangeCount) {
                  range = sel.getRangeAt(0);
                  //console.log(sel.getRangeAt(-1));
                  range.deleteContents(); //removes the contents of the Range from the document.
                  range.insertNode(document.createTextNode(textc));//The new node is inserted at the start boundary point of the Range.
               }  
            } 
      },

  
    clearStorageBtn : function() {
      var annotator = jQuery("body").data('annotator');
      
        if (annotator) {
          annotator.plugins.Offline.store.clear();
        }
      }
  }
  


  var test = function(suggested_text){
                         
                        return `<span class="strike-text">
                                          ${ suggested_text + "<br>"}
                                </span>`  
                      }

/* ======================================================================*/
  /* App.suggestion = function(){
    var input = document.createElement("input");
    input.append("type = 'text' , name = 'sugg_box'")

   }*/
   /*Implementation of Touch feature works for the TouchDevices
   [TODO]: DOM parameters  need to be dynamic ex:body */
   App.annoBootstrap = function(){

    /*jQuery("body").annotator().annotator("addPlugin", "Touch", {
        force: location.search.indexOf("force") > -1,
        useHighlighter: location.search.indexOf("highlighter") > -1
      });
      
      if (!Annotator.Plugin.Touch.isTouchDevice()) {
        if (location.search.indexOf("force") > -1) {
          jQuery("body").append("<p><a href='./index.html'>Disable Plugin in Desktop Browser</a></p>");
        } else {
          jQuery("body").append("<p><a href='./index.html?force'>Enable Plugin in Desktop Browser</a></p>");
        }
      }*/
       
      /*Below section is for Implementing the storage*/
      jQuery("body").annotator().annotator("addPlugin","Offline", {
        /* online:  function () {
         jQuery("#status").text("Online");
         },*/
         offline: function () {
         jQuery("#status").text("Offline");

         }  });

      jQuery("body").annotator().annotator("addPlugin","Tags", {
          tag: function(){
           jQuery("#status").tags("Tags"); 
         }

      });
      
      /*jQuery("body").annotator().annotator("addPlugin","suggestion", {
          suggest: function(){
           jQuery("#status").Suggestion("suggests"); 
         }
      });*/
       //App.cyancolor(annotator-hl);
     
    }


 

/* ==========================================*/

  /*app code - front end for dialog box to appear*/
  function dialog(arg) {
      var x = document.createElement("DIALOG");
      var t = document.createTextNode(arg);
      x.setAttribute("open", "open");
      x.appendChild(t);
      document.body.appendChild(x);

      /*close dialog after 3sec*/
      setTimeout(function(){ 
        x.removeAttribute("open", "open");
       /* x.setAttribute("close", "close");*/
    }, 3000);

  }

   /* Function to export the json file*/
  App.exportAnnos= function (jsonData) {

      var dataStr = JSON.stringify(jsonData);
      var dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(dataStr);
      
      var exportFileDefaultName = "data.json";
      
      var linkElement = document.createElement("a");
      linkElement.setAttribute("href", dataUri);
      linkElement.setAttribute("download",exportFileDefaultName);
      linkElement.click();
  }


//var temp1 = suggestBtn();
var suggestTemplate=function(suggested_text){
        
        return `<p id="strike-text">
                          ${ suggested_text.quote + "<br>"}
                </p>`
        
      }



       /* sidebar*/

       /* template function to build html*/
          
       var annoTemplate=function(selected_text){
        return `<ul class="nav nav-pills nav-stacked">
                <li class="list-of-annotations"> 
                  <div class="anno-sidebar-text">
                    <ul class="annotation-header">
                      <li class="annotation-text">
                          ${"Body: " + selected_text.text + "<br>" + "Target: " + selected_text.quote + "<br>" + "Tags: " + selected_text.tags}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            <br>`
      }
       /* function to iterate over data and compile with html template*/


       
      App.getAnnos=function() {
       var archive = [],
          keys = Object.keys(localStorage),
          i = 0, key;

      for (; key = keys[i]; i++) {
          archive.push( localStorage.getItem(key));
      }

      return archive;
      }
   

       /*function to render in DOM */
      App.sideAnnoTpl=function(){
      
        //console.log(App.data);

        var nodes = [];
        for(var i=0;i < App.data.length;i++){
            nodes.push(document.createRange().createContextualFragment(annoTemplate(JSON.parse(App.data[i]))));
            //console.log(App.data[i]);
          }
          return nodes;
        }


        App.buttonCreater= function(){
          var button_id = ["start-anno","export-anno","clear-storage","sugg"];
        var button_text = ["StartAnnotating","ExportAnnotation","Clear localStorage","suggest"];
        var events = ["startAnnoBtn","exportAnnoBtn","clearStorageBtn","suggestBtn"];
          for(var k=0; k< button_id.length; k++){

            button_id[k]=document.createElement("button");
            button_id[k].innerText=button_text[k];
            button_id[k].addEventListener("click", App.bindEvents[events[k]]);
            document.body.prepend(button_id[k]);


          }


        }

      

          App.dependencies= [

                          "src/assets/css/styles.css",
                          "src/assets/css/bootstrap.min.css",
                          "src/assets/js/js_libraries/annotator-full.1.2.10/annotator.min.css",
                          "src/assets/js/js_libraries/anno.touch/annotator.touch.css",
                          "src/assets/js/bundle/bundle.js"];



         /*=====================================================================================*/

            App.dependency_Fun = function (dependency) {
              var loaded = false;
              //console.log("loading started", new Date);
              var head = [], body = [];
              for(var i=0; i<dependency.length; i++){

                  if(dependency[i].substr(dependency[i].length-3) === ".js"){
                      var script = document.createElement("script"); /* Make a script DOM node*/
                        script.src = "//localhost:8080/WebAnno/annotation/"+dependency[i]; /* Set it"s src to the provided URL*/
                        script.type = "text/javascript";
                        document.head.appendChild(script); /* Add it to the end of the head section of the page (could change "head" to "body" to add it to the end of the body section instead)*/
              
                      /*head.push(script);*/
                    }
                  
                  else{
                    
                      var link = document.createElement("link"); 
                      link.rel = "stylesheet";
                      link.href = "//localhost:8080/WebAnno/annotation/"+dependency[i]; 
                      document.head.appendChild(link); 
                }

              }
              loaded = true;
              //console.log("dependency loaded", loaded, head, new Date);
              App.init();
           }
        App.dependency_Fun(App.dependencies);

/*App.init();*/

           
})();