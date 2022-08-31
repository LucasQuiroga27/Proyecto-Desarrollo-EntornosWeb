let tabServices = document.getElementById('tab-services');
let service= document.querySelectorAll('.service');
let tabForms = document.getElementById('tab-forms');
let forms = document.querySelectorAll('.form-content');

for (let i = 0; i < service.length; i++) {
    service[i].addEventListener('click', () => {
        tabServices.getElementsByClassName('selected')[0].classList.remove('selected');
        service[i].classList.add('selected');
        tabForms.getElementsByClassName('selected')[0].classList.remove('selected');
        forms[i].classList.add('selected');
    })
}

document.getElementById("cotizarPW").addEventListener("click", cotizarPW); //Web Page clicked
document.getElementById("cotizarAM").addEventListener("click", cotizarAM); // Apps Mobile clicked

			//Función para cotizar
			function cotizarPW(){
				
				var nroPages = document.getElementById("pages").value;
                var capacity = document.getElementById("capacity").value;
                var nroForms = document.getElementById("forms").value;
                var nroUsers = document.getElementById("user").value;;
                var yesForo = document.querySelector('input[name="yesForo"]:checked').value;

                //Calculos de Precio
                var pricePages = nroPages * 10;
                var priceCapacity = capacity * 30;
                var priceForms = nroForms * 50;
                var priceNroUsers = nroUsers * 2;
                var priceForo;

                if(yesForo == "yes") priceForo = 100;
                else priceForo = 0;

                var totalPrice = priceCapacity + priceForms + priceNroUsers + pricePages + priceForo;

				alert("Estimado usuario. De acuerdo a los datos ingresados." +
                " El precio aproximado de su aplicación es de $" + totalPrice);
				
			}

            function cotizarAM(){
				
				var nroActivities = document.getElementById("activities").value;
                var nroForms = document.getElementById("form").value;
                var nroUsers = document.getElementById("users").value;

                var yesSensor = document.querySelector('input[name="sensor"]:checked').value;
                var yesGPS = document.querySelector('input[name="sensor"]:checked').value;

                //Calculos de Precio
                var priceActivities = nroActivities * 15;
                var priceForms = nroForms * 50;
                var priceNroUsers = nroUsers * 2;
                var priceSensor, priceGPS;

                if(yesSensor == "yes") priceSensor = 100;
                else priceSensor = 0;

                if(yesGPS == "yes") priceGPS = 200;
                else priceGPS = 0;

                var totalPrice = priceActivities + priceForms + priceNroUsers + priceSensor + priceGPS;

				alert("Estimado usuario. De acuerdo a los datos ingresados." +
                " El precio aproximado de su aplicación es de $" + totalPrice);
				
			}

