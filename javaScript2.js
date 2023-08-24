mostrarLista = document.getElementById('mostrarLista');
contenido = document.getElementById('contenido');

mostrarLista.addEventListener('click', function() {

  if (contenido.style.display === 'none') {
    contenido.style.display = 'block';
  } else {
    contenido.style.display = 'none';
  }
});

