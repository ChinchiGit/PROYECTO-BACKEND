if (document.title === "Films API - Tu Dashboard - Admin") {

	let	classname = 'esconder'

	let crear = document.getElementById("crear");
	let formularioCrear = document.getElementById("formularioCrear");
	let editar = document.getElementById("editar");
	let formularioEditar = document.getElementById("formularioEditar");
	let borrar = document.getElementById("borrar");
	let formularioBorrar = document.getElementById("formularioBorrar");

	crear.addEventListener("click", function () {
		formularioCrear.classList.toggle(classname);
		if(!formularioBorrar.classList.contains(classname)){
			formularioBorrar.classList.toggle(classname);
		}
		if(!formularioEditar.classList.contains(classname)){
			formularioEditar.classList.toggle(classname);
		}
	})

	editar.addEventListener("click", function () {
		formularioEditar.classList.toggle(classname);
		if(!formularioBorrar.classList.contains(classname)){
			formularioBorrar.classList.toggle(classname);
		}
		if(!formularioCrear.classList.contains(classname)){
			formularioCrear.classList.toggle(classname);
		}
	})

	borrar.addEventListener("click", function () {
		formularioBorrar.classList.toggle(classname);
		if(!formularioCrear.classList.contains(classname)){
			formularioCrear.classList.toggle(classname);
		}
		if(!formularioEditar.classList.contains(classname)){
			formularioEditar.classList.toggle(classname);
		}
	})

};


