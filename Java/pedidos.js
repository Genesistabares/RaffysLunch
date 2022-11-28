

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    
    var nombre = document.getElementById('nombre').value; 
    var nombre = document.getElementById('telefono').value;
    var nombre = document.getElementById('direccion').value;
    
    if(nombre.length == 0) {
      alert('Debe escribir su nombre');
      return;
    }
    
    if (telefono < 1000000000 || documento>9999999999 || isNaN(telefono) )  {
        alert('el numero de teléfono es incorrecto, el valor debe tener mínimo 10 digitos.');
        return;
     }
    
     if(direccion.length == 0) {
      alert('Debe escribir su dirección');
      return;
    }

     alert('Formulario enviado');
    this.submit();
  }


 