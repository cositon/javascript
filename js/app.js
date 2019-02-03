var Calculadora={
	display:parseInt(document.getElementById("display").innerHTML),
	aux:0,

	init:function(){
		botones=document.getElementsByClassName("tecla")
		for(i=0;i<botones.length;i++){
			botones[i].onmousedown=Calculadora.funcionalidades			
			botones[i].onmouseup=Calculadora.retornarTamaño
		}
	},
	funcionalidades:function(event){		
		var tecla=event.currentTarget.id
		Calculadora.reducirboton(tecla)
		Calculadora.visor(tecla)
	},
	visor:function(tecla){
		document.getElementById(tecla).style.padding="1%"
		enVisor=display.innerHTML
		 if((enVisor==0)){
			this.display=tecla			
		}else if((enVisor>0)&&(tecla<10)){
			this.display=enVisor+tecla			
		}else{
			switch(tecla){
				case "on":
					this.display=0;
					break;
				case "punto":
					if(enVisor==Math.trunc(enVisor)){
						console.log("somos iguales")
						this.display=enVisor+"."
					}
					break
				
			}

		}		
		document.getElementById("display").innerHTML=this.display	
	},
	reducirboton:function(tecla){		
		document.getElementById(tecla).style.padding="1%"
	},
	retornarTamaño:function(event){		
		var tecla=event.currentTarget.id
		document.getElementById(tecla).style.padding="0"
	},
	
}

Calculadora.init()
