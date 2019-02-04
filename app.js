var Calculadora={
	display:parseInt(document.getElementById("display").innerHTML),
	numNatural:true,
	numero1:null,
	numero2:null,
	operacion:null,
	resultado:null,
	init:function(){
		botones=document.getElementsByClassName("tecla")
		for(i=0;i<botones.length;i++){
			botones[i].onmousedown=this.funcionalidades			
			botones[i].onmouseup=this.retornarTamaño
		}
	},
	reducirboton:function(tecla){		
		if(tecla=="mas"){		
			document.getElementsByClassName("col2")[0].style.margin="1% 0 .2%"			
			document.getElementById(tecla).style.padding="1%"		
		}else{
			document.getElementById(tecla).style.padding=".5%"
		}
	},
	retornarTamaño:function(event){		
		var tecla=event.currentTarget.id
		if (tecla=="mas") {
			document.getElementsByClassName("col2")[0].style.margin="0"	
			document.getElementById(tecla).style.padding="0"
		}else{
			document.getElementById(tecla).style.padding="0"
		}
	},
	funcionalidades:function(event){		
		var tecla=event.currentTarget.id
		Calculadora.reducirboton(tecla)
		Calculadora.visor(tecla)
	},
	visor:function(tecla){
		display.style.display="inherit"
		enVisor=display.innerHTML

		if((Number.isInteger(parseInt(tecla)))&&(this.validarDigitos())==false){
			if((enVisor==0)&&(this.numNatural==true)){
				this.display=tecla			
			}else{
				this.display=enVisor+tecla			
			}
		}else{
			if(this.numero1==null){				
			this.numero1=parseInt(this.display)
			display.style.display="none"
			this.display=0
		}
			switch(tecla){
				case "on":
				this.onC(tecla)
				break
				case "punto":
				this.punto(tecla);
				break
				case "sign":
				this.signo(tecla)
				break
				case "mas":
				this.mas()
				break;
				case "menos":
				this.menos()
				break;
				case "por":
				this.por()
				break;
				case "dividido":
				this.dividido()
				break;
				case "igual":
				this.igual()
				break;

			}
		}	
		document.getElementById("display").innerHTML=this.display	
	},
	punto:function(tecla){

		if(this.numNatural==true){
			this.numNatural=false
			if(this.display==0){
				this.display="0."
			}else if(Math.trunc(enVisor)%enVisor==0){				
				this.display=enVisor+"."
			}
		}
	},
	onC:function(tecla){
		if(tecla=="on"){
			this.display=0	
			this.numNatural=true
			this.numero1=0
			this.numero2=0
		}
	},
	signo:function(tecla){
		if((this.display!=0)){
			this.display=-this.display
		}
	},
	validarDigitos:function(){
		cantidad=this.display.length
		if(cantidad>=8){
			return true
		}else{		
			return false
		}
	},
	mas:function(){
		this.operacion="+";
		
	},
	menos:function(){
		this.operacion="-";
		
	},
	por:function(){
		this.operacion="*";
		
	},
	dividido:function(){
		this.operacion="/";
		
	},

	igual:function(){
		switch(this.operacion){
			case "+":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1+this.numero2
			this.display=this.resultado
			console.log(this.resultado)
			break
			case "-":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1-this.numero2
			this.display=this.resultado
			console.log(this.resultado)
			break
			case "*":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1*this.numero2
			this.display=this.resultado
			console.log(this.resultado)
			break
			case "/":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1/this.numero2
			this.display=this.resultado
			console.log(this.resultado)
			break
		}
		
	}
}




Calculadora.init()


/*if(this.numNatural==false){
cantidad-=1
console.log(cantidad)
}***********************/