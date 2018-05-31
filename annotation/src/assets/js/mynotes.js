
(function() { 

  window.App = window.App || {};

 /* ===========================================*/
  
  App.init = function() {
    console.log("init", new Date);
        /*
    initialize application here
    document.getElementById = window.jQuery || {};
    Declare all DOM elements
    */
    App.ctx = document.body;
    App.buttonCreater();

    /* prepare Data */
    App.data = App.getAnnos();

        App.$aside = document.getElementById("sidebar-container");
        //App.$startAnnoBtn = document.getElementById("start-anno");
        //App.$exportAnnoBtn = document.getElementById("export-anno");
        //App.$clearStorageBtn = document.getElementById("clear-storage");

    /* Bind events
    App.bindEvents();*/

    /*Call Render*/

    App.render();
   

  }
/*=======================================*/


  App.render = function() {
    /*Render app here*/
    App.$aside.innerHTML = "Looking for Annotation"; //cleaning the sidebar column in order to not relpicate old annotations
    //App.SidebarTemplate();
    var nodes = App.sideAnnoTpl();
    for(var i = 0; i < nodes.length; i++){
            App.$aside.append(nodes[i]);
          }
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
      

    clearStorageBtn : function () {
        var annotator = jQuery(App.ctx).data('annotator');
        if (annotator) {
          annotator.plugins.Offline.store.clear();
        }
      }
    }
  
  
/* ======================================================================*/

   /*Implementation of Touch feature works for the TouchDevices
   [TODO]: DOM parameters  need to be dynamic ex:body */
   App.annoBootstrap = function(){
    $(App.ctx).annotator().annotator("addPlugin", "Touch", {
        force: location.search.indexOf("force") > -1,
        useHighlighter: location.search.indexOf("highlighter") > -1
      });
      
      if (!Annotator.Plugin.Touch.isTouchDevice()) {
        if (location.search.indexOf("force") > -1) {
          $(App.ctx).append("<p><a href='./index.html'>Disable Plugin in Desktop Browser</a></p>");
        } else {
          $(App.ctx).append("<p><a href='./index.html?force'>Enable Plugin in Desktop Browser</a></p>");
        }
      }
       
      /*Below section is for Implementing the storage*/
      $(App.ctx).annotator().annotator("addPlugin","Offline", {
        /* online:  function () {
         jQuery("#status").text("Online");
         },*/
         offline: function () {
         jQuery("#status").text("Offline");

         //console.log("load offline plugin", this);

         }  
       });

      $(App.ctx).annotator().annotator("addPlugin","Tags", {
          tag: function(){
           jQuery("#status").tags("Tags"); 
         }
      });
    
     $(App.ctx).on('annotationCreated', function(anno) { 
              App.data = App.getAnnos(); //
              App.render();
              console.log(anno);
            });


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


       /* sidebar*/

    /*Function to generate HTML template for individual annotations*/
          
     var annoTemplate=function(selected_text){
        return `<ul class="nav nav-pills nav-stacked">
                <li class="list-of-annotations"> 
                  <div class="anno-sidebar-text">
                    <ul class="annotation-header list-group">
                      <li class="annotation-text">
                          ${"<strong>"+ "Body: "+"</strong>" + selected_text.text + "<br>" +"<strong>"+ "Target: "+"</strong>" + selected_text.quote + "<br>" +"<strong>"+ "Tags: "+"</strong>" + selected_text.tags}
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            <br>`
      }

/* ==================================================================================
Below function is used to iterate over annotated data and compile with html template*/
       
      App.getAnnos=function() {
               var archive = [],
                  keys = Object.keys(localStorage),
                  i = 0, key;

              for (; key = keys[i]; i++) {
                  archive.push( localStorage.getItem(key));
              }

              return archive;
      }

/* ==================================================================================
Below function is used to createTemplate for adding annotations to the sidebar Column  */
/*function to render in DOM */
      App.sideAnnoTpl=function(){
      
              console.log(App.data);

              var nodes = [];
              for(var i=0;i < App.data.length;i++){
                  nodes.push(document.createRange().createContextualFragment(annoTemplate(JSON.parse(App.data[i]))));
                }

                return nodes;
        }

/*=======================================================================*/
/*To create dynamic buttons after calling the BOOKMAEKLET */

        App.buttonCreater= function(){

                  var button_id = ["start-anno","export-anno","clear-storage"];
                  var button_text = ["StartAnnotating","ExportAnnotation","Clear localStorage"];
                  var events = ["startAnnoBtn","exportAnnoBtn","clearStorageBtn"];
                  var Annotations_list = document.createElement("h1");
                  Annotations_list.innerText = "Annotation List";
                  Annotations_list.id = "anno-list";
                 document.body.prepend(Annotations_list);

                  for(var k=0; k< button_id.length; k++){
                    button_id[k]=document.createElement("button");
                    //button_id[k].className = "btn btn-primary ";
                    button_id[k].innerText=button_text[k];
                    button_id[k].addEventListener("click", App.bindEvents[events[k]]);
                    document.body.prepend(button_id[k]);
                  }
        }

/*======================================================================
TODO: Function to create sidebar column */
   
             App.SidebarTemplate= function(){
                        var annoFrame= document.createElement("div");
                        //annoFrame.innerText= "Annotations List";
                        annoFrame.id = "sidebar-container";
                        document.body.prepend(annoFrame);
                        }


/*=====================================================================================*/
   
/*To load the dependencies during annotations
=====================================================================================*/
          App.dependencies= [

                          "src/assets/css/styles.css",
                          "src/assets/css/bootstrap.min.css",
                          "src/assets/js/js_libraries/annotator-full.1.2.10/annotator.min.css",
                          "src/assets/js/js_libraries/anno.touch/annotator.touch.css",
                          "src/assets/js/bundle/bundle.js"];

        App.dependency_Fun = function (dependency) {
                      var loaded = false;
                      console.log("loading started", new Date);
                      var head = [], body = [];
                      for(var i=0; i<dependency.length; i++){

                          if(dependency[i].substr(dependency[i].length-3) === ".js"){
                                var script = document.createElement("script"); /* Make a script DOM node*/
                                script.src = "//janastu.github.io/WebAnno/annotation/"+dependency[i];
                                //script.src = "//localhost:8080/Git_test/WebAnno/WebAnno/annotation/"+dependency[i]; /* Set it"s src to the provided URL*/
                                script.type = "text/javascript";
                                document.head.appendChild(script); /* Add it to the end of the head section of the page (could change "head" to "body" to add it to the end of the body section instead)*/
                            }
                          
                          else{
                            
                              var link = document.createElement("link"); 
                              link.rel = "stylesheet";
                              link.href = "//janastu.github.io/WebAnno/annotation/"+dependency[i];
                              //link.href = "//localhost:8080/Git_test/WebAnno/WebAnno/annotation/"+dependency[i]; 
                              document.head.appendChild(link); 
                             }
                      }

                      loaded = true;
                      console.log("dependency loaded", loaded, head, new Date);
                      
                      App.SidebarTemplate();
                      App.init();

           }
        App.dependency_Fun(App.dependencies);
        

/*App.init();*/           
})();