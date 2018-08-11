export class JsRouter{
	
	data:{pattern:string|string[], ctrlClass:any}[];
	mainCtrl:any;
	
	document:Document;
	
	constructor(document:Document){
		
		this.data = [];
		this.document = document;
		document.addEventListener("DOMContentLoaded", this.onDomLoaded.bind(this));
	}
	
	
	
	setMainCtrl(ctrlClass:any):void
	{
		this.mainCtrl = ctrlClass;
	}
	
	
	addCtrl(pattern:string|string[], ctrlClass:any):void
	{	
		this.data.push({
			pattern,
			ctrlClass,
		});
		
	}
	
	
	
	onDomLoaded():void
	{
		if(this.mainCtrl){
			let mainCtrl:any = new this.mainCtrl();
			mainCtrl.ready();
		}
		
		let pathname:string = this.document.location.pathname;
		if(pathname.charAt(0) =='/') pathname = pathname.substr(1);
		
		let ctrlClass:any = this.getControllerByPattern(pathname);
		
		if(ctrlClass){
			let ctrl:any = new ctrlClass();
			ctrl.ready();
		}
	}
	
	
	
	
	private getControllerByPattern(pattern:string):any
	{
		for(let k in this.data){;
			
			let item = this.data[k];
			let patterns:string[] = [];
			if(typeof item.pattern == 'string') patterns.push(item.pattern);
			else patterns = item.pattern;
			
			for(let j in patterns){;
				let p:string = patterns[j];
				if(p == pattern){
					return item.ctrlClass;
				}
			}
		}
		return null;
		
	}
	
	
}