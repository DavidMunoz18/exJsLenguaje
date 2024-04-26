/**
 * 
 */

//Declaro el array
let bdd = [];

//funcion de añadir cliente
function aniadirCliente() {

	let nombreUsu = prompt("Introduce el nombre");

	let apellidoUsu = prompt("Introduce el apellido")

	let coste = prompt("Introduce el coste");

	let fchaEntrada = prompt("Introduce la fecha de entrada (yyyy/MM/dd)");

	fchaEntrada = fchaEntrada.split("/");

	const fecha = new Date(fchaEntrada[0], fchaEntrada[1] - 1, fchaEntrada[2]);

	//Aqui se suma 5 dias a la fecha introducida
	const fchaSalida = new Date(fecha.getTime());
	fchaSalida.setDate(fecha.getDate() + 5);

	bdd.push(nombreUsu, apellidoUsu, coste, fchaEntrada, fchaSalida);

	document.getElementById("aniadir").innerHTML = bdd;


}
//Esta funcion elimina el cliente
function eliminarCliente() {
	let nombreAEliminar = prompt("Introduce el nombre del cliente a eliminar");

	//Aqui cojo el indice del nombre a eliminar en el array
	let index = bdd.indexOf(nombreAEliminar);

	if (index === -1) {
		alert("Cliente no encontrado");
	} else {
		
		//Elimino el bloque completo
		bdd.splice(index, 5);

		alert("Cliente eliminado exitosamente");

		document.getElementById("aniadir").innerHTML = bdd;
	}
}
function ordenar(){
	bdd = bdd.sort((a,b)=>{
	if(a[0][4] > b[0][4]){
		return 1;
		
	}else{
		return -1;
	}
})
document.getElementById("aniadir").innerHTML = bdd;
}




