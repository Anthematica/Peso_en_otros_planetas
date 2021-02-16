
    //Constantes
    var g_Tierra = 9.8;
    var g_Jupiter = 24.6;
    var g_Marte = 3.7;

    //elementos de html
    var masa_Tierra = document.getElementById("peso");
    var button = document.getElementById("bottom");

    button.addEventListener("click", peso_marte);

    function peso_marte(){
        var peso_Tierra = masa_Tierra.value;

            peso = peso_Tierra*g_Marte/g_Tierra;
			peso_final = peso.toFixed(2); 
            
           //Forma de enviar un resultado a una caja de texto 
           document.getElementById("impresion").value = peso_final;

    }

   



		//Gravedades
        /*
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

        */