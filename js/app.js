var Calculadora={
	display:parseInt(document.getElementById("display").innerHTML),//Se obtiene el contenido del html con tipo de dato int
	init:function(){
		this.onC()//formateo de los valores
		botones=document.getElementsByClassName("tecla")//obtencion de un array con los botones de la calculadora
		for(i=0;i<botones.length;i++){//analisis del estado de cada boton 
			botones[i].onmousedown=this.funcionalidades	//llamado a la funcion que contiene las acciones a realizar al hacer clic
			botones[i].onmouseup=this.retornarTamaño//llamado a la funcion con la accion a realizar al soltar el boton
		}
	},
	funcionalidades:function(event){//funciones que se deben realizar al hacer clic		
		var tecla=event.currentTarget.id//obtencion de la tecla presionada
		Calculadora.reducirboton(tecla)//llamado a la funcion que reduce el tamaño de la funcion
		Calculadora.respuesta(tecla)//llamado a la funcion que maneja la respuesta de la calculadora a los botones que se presionan
	},
	reducirboton:function(tecla){//funcion al hacer clic en el boton que reduce el tamaño de este
		if(tecla=="mas"){//particularidades de la tecla mas ya que posee distinto tamaño a las demas teclas
			document.getElementsByClassName("col2")[0].style.margin="1% 0 .2%"			
			document.getElementById(tecla).style.padding="1%"		
		}else{
			document.getElementById(tecla).style.padding=".5%"
		}
	},
	retornarTamaño:function(event){//funcion a realizar al soltar el boton que retorna el tamaño original
		var tecla=event.currentTarget.id
		if (tecla=="mas") {//particularidades de la tecla mas ya que posee distinto tamaño a las demas teclas
			document.getElementsByClassName("col2")[0].style.margin="0"	
			document.getElementById(tecla).style.padding="0"
		}else{
			document.getElementById(tecla).style.padding="0"
		}
	},
	
	respuesta:function(tecla){//funcion que maneja el comportamiento de las teclas
		display.style.display="inherit"//vuelve a mostrar el visor una vez que se blanqueo
		this.enVisor=display.innerHTML//extrae el contenido del visor
		if((Number.isInteger(parseInt(tecla)))&&(this.validarDigitos())==false){//corrobora que se este ejecutando un numero y no se supere las 8 cifras
			if((this.enVisor==0)&&(this.numNatural==true)){
				this.display=tecla//asigna el valor al display de la tecla presionada cuando no hay ningun contenido previo
			}else{
				this.display=this.enVisor+tecla//agrega un segundo numero al display
			}
		}else{			
			switch(tecla){//si no se presiono un numero realiza la funcion correspondiente a esa tecla
				case "on":
				this.onC()
				break
				case "punto":
				this.punto(tecla)
				break
				case "sign":
				this.signo(tecla)
				break
				case "mas":
				case "menos":
				case "por":
				case "dividido":
				this.operaciones(tecla)
				break
				case "igual":
				this.calculos(this.operacion)
				break

			}
		}	
		document.getElementById("display").innerHTML=this.display	
	},
	punto:function(tecla){//agrega el punto al numero
		if(this.numNatural==true){//corrobora si el numero numero sigue siendo natural
			this.numNatural=false//indica que el numero ya no sera natural
			if(this.display==0){//si el visor contiene solo el numero 0 asigna un punto al lado
				this.display="0."
			}else if(Math.trunc(this.enVisor)%this.enVisor==0){//Coloca el punto despues de un numero distinto al cero
				this.display=this.enVisor+"."
			}
		}
	},
	onC:function(){//blanquea los valores 
			this.numNatural=true
			this.numero1=null
			this.numero2=null
			this.operacion=null
			this.resultado=null
			this.enVisor=0
			this.display=0		
	},
	signo:function(tecla){//coloca el signo negativo o lo quita segun corresponda
		if((this.display!=0)){//evita que afecte al cero
			this.display=-this.display
		}
	},
	validarDigitos:function(){//Corrobora que no se agreguen mas de 8 digitos
		cantidad=this.display.length
		if(cantidad>=8){
			return true
		}else{		
			return false
		}
	},
	operaciones(tecla){//Asignacion del primer valor y de la operacion que se debe realizar
		this.numero1=parseInt(this.display)
			this.display=0
		switch(tecla){
			case "mas":
				this.operacion="+"
				break
			case "menos":
				this.operacion="-"
				break
			case "por":
				this.operacion="*"
				break
			case "dividido":
				this.operacion="/"
				break
		}

		display.style.display="none"
	},
	calculos:function(){//realizacion de las operaciones matematicas
		switch(this.operacion){
			case "+":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1+this.numero2
			break
			case "-":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1-this.numero2
			break
			case "*":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1*this.numero2		
			break
			case "/":
				this.numero2=parseInt(this.display)	
			this.resultado=this.numero1/this.numero2
			break
		}
		/*Impresion en pantalla*/
		if(this.resultado.toString().length>8){
			this.display=(this.resultado).toFixed(8)
		}else{
			this.display=this.resultado
		}		
	}
}
Calculadora.init()

