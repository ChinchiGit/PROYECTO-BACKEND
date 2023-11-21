if (document.title === "Films API - Tu Dashboard - Admin") {
	let crear = document.getElementById("crear");
	let formularioCrear = document.getElementById("formularioCrear");
	let editar = document.getElementById("editar");
	let formularioEditar = document.getElementById("formularioEditar");
	let borrar = document.getElementById("borrar");
	let formularioBorrar = document.getElementById("formularioBorrar");

	crear.addEventListener("click", function () {
		formularioCrear.classList.toggle("esconde");
	})

	editar.addEventListener("click", function () {
		formularioEditar.classList.toggle("esconde");
	})

	borrar.addEventListener("click", function () {
		formularioBorrar.classList.toggle("esconde");
	})

};