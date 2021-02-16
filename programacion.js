var usuario = prompt("Cual es tu peso en la Tierra?");
		var planeta = prompt("De que planeta deseas calcular tu peso? \n 1. Marte 2. Jupiter");

		var masa_Tierra = parseFloat(usuario); 

		//Gravedades
		var g_Tierra = 9.8;
		var g_Jupiter = 24.6;
		var g_Marte = 3.7;
		var peso;
		var name; 
		if(planeta==1){
			//Calculos para Marte
			peso = masa_Tierra*g_Marte/g_Tierra;
			peso_final = peso.toFixed(2); 
			name = "Martes";
		}
		else if(planeta==2)
		{
			//Calculos para Jupiter
			peso = masa_Tierra*g_Jupiter/g_Tierra;
			peso_final = peso.toFixed(2);
			name = "Jupiter";
		}
		else
		{
			peso_final = 100000;
			name = "Kripton";
		}
		//Impresion
		document.write("Tu peso en " +name+" es " + peso_final + " Kg");