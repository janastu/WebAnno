class AnnoStructure {
	constructor(){
		this.context = "http://www.w3.org/ns/anno.jsonld";
		this.id = " ";
		this.type = "Annotation";
		this.body = "annotext" ;
		this.target = "anno.quote";
		this.creator = "ashwini";
		this.created = this.Date();
	    this.motivation = "Commenting"; 
	}

	set current(body){
		    this.log.push(body);
	}
	log:[]
}


var AnnoInstance = new AnnoStructure();

console.log(AnnoInstance);