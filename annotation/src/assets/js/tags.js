//<script>
$(document).ready(function(){
        //$("p").annotator(); // works
        //.annotator('setupPlugins'); //error
        //$("p").annotator('setupPlugins');// works comment
        //$("p").annotator('addPlugin', 'Tags');//works tags
        var check= $("p").annotator('setupPlugins');// works
        check.annotator('addPlugin', 'Tags');
    });

//</script>