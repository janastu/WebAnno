!function() {
    window.App = window.App || {}, App.init = function() {
        App.ctx = document.body, App.buttonCreater(), App.data = App.getAnnos(), App.$aside = document.getElementById("sidebar-container"), 
        App.render();
    }, App.render = function() {
        App.$aside.innerHTML = "Look for Annotation";
        for (var t = App.sideAnnoTpl(), n = 0; n < t.length; n++) App.$aside.append(t[n]);
    }, App.bindEvents = {
        startAnnoBtn: function() {
            var t, n, e;
            App.annoBootstrap(), this.remove(), t = "you may start making notes", n = document.createElement("DIALOG"), 
            e = document.createTextNode(t), n.setAttribute("open", "open"), n.appendChild(e), 
            document.body.appendChild(n), setTimeout(function() {
                n.removeAttribute("open", "open");
            }, 3e3);
        },
        exportAnnoBtn: function() {
            for (var t = [], n = 0, e = localStorage.length; n < e; ++n) {
                var o = JSON.parse(localStorage.getItem(localStorage.key(n)));
                t.push(o);
            }
            App.exportAnnos(t);
        },
        clearStorageBtn: function() {
            var t = jQuery(App.ctx).data("annotator");
            t && t.plugins.Offline.store.clear();
        },
        refreshPage: function() {
            document.location.reload();
        }
    }, App.annoBootstrap = function() {
        $(App.ctx).annotator().annotator("addPlugin", "Touch", {
            force: location.search.indexOf("force") > -1,
            useHighlighter: location.search.indexOf("highlighter") > -1
        }), Annotator.Plugin.Touch.isTouchDevice() || (location.search.indexOf("force") > -1 ? $(App.ctx).append("<p><a href='./index.html'>Disable Plugin in Desktop Browser</a></p>") : $(App.ctx).append("<p><a href='./index.html?force'>Enable Plugin in Desktop Browser</a></p>")), 
        $(App.ctx).annotator().annotator("addPlugin", "Offline", {
            offline: function() {
                jQuery("#status").text("Offline");
            }
        }), $(App.ctx).annotator().annotator("addPlugin", "Tags", {
            tag: function() {
                jQuery("#status").tags("Tags");
            }
        }), $(App.ctx).annotator().annotator("addPlugin", "SuggestEdit", "This is Annotation"), 
        $(App.ctx).on("annotationCreated", function(t) {
            App.data = App.getAnnos(), App.render();
        });
    }, App.exportAnnos = function(t) {
        var n = JSON.stringify(t), e = "data:application/json;charset=utf-8," + encodeURIComponent(n), o = document.createElement("a");
        o.setAttribute("href", e), o.setAttribute("download", "data.json"), o.click();
    };
    App.getAnnos = function() {
        for (var t, n = [], e = Object.keys(localStorage), o = 0; t = e[o]; o++) n.push(localStorage.getItem(t));
        return n;
    }, App.sideAnnoTpl = function() {
        for (var t, n, e = [], o = 0; o < App.data.length; o++) e.push(document.createRange().createContextualFragment((t = JSON.parse(App.data[o]), 
        void 0, n = {
            text: t.text,
            quote: t.quote,
            tags: t.tags
        }, Mustache.to_html("<ul class='nav nav-pills nav-stacked'> <li class='list-of-annotations'><div class='anno-sidebar-text'><ul class='annotation-header list-group'><li class='annotation-text'> <strong>Body:</strong>  {{text}} <br><strong> Target:</strong> {{quote}} <br><strong> Tags:</strong>  {{tags}}   </li></ul></div></li></ul><br>", n))));
        return e;
    }, App.buttonCreater = function() {
        var t = [ "start-anno", "export-anno", "clear-storage", "exit-annotation" ], n = [ "StartAnnotating", "ExportAnnotation", "Clear localStorage", "exit-annotation" ], e = [ "startAnnoBtn", "exportAnnoBtn", "clearStorageBtn", "refreshPage" ], o = document.createElement("h1");
        o.innerText = "Annotation List", o.id = "anno-list", document.body.prepend(o);
        for (var a = 0; a < t.length; a++) t[a] = document.createElement("button"), t[a].id = "annobtn", 
        t[a].innerText = n[a], t[a].addEventListener("click", App.bindEvents[e[a]]), document.body.prepend(t[a]);
    }, App.SidebarTemplate = function() {
        var t = document.createElement("div");
        t.id = "sidebar-container", document.body.prepend(t);
    }, App.dependencies = [ "src/assets/css/bundle.css", "src/assets/js/bundle/bundle.min.js" ], 
    App.dependency_Fun = function(t) {
        new Promise(function(n, e) {
            if (t.length) {
                for (var o = 0; o < t.length; o++) if (".js" === t[o].substr(t[o].length - 3)) {
                    var a = document.createElement("script");
                    a.src = "//janastu.github.io/WebAnno/annotation/" + t[o], a.type = "text/javascript", 
                    document.head.appendChild(a);
                } else {
                    var r = document.createElement("link");
                    r.rel = "stylesheet", r.href = "//janastu.github.io/WebAnno/annotation/" + t[o], 
                    document.head.appendChild(r);
                }
                setTimeout(() => n("All files are loaded!"), 1e3);
            } else setTimeout(() => e(new Error("Whoops!")), 1e3);
        }).then(function(t) {
            console.log("loadingdependencies_with_promise:", t), App.SidebarTemplate(), App.init();
        }, function(t) {
            console.log(t);
        });
    }, App.dependency_Fun(App.dependencies);
}();