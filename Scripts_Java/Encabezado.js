// Script para ingresar el Encabezado dinamicamente
fetch("Encabezado.html")
  .then((Response) => {
    if (!Response.ok) {
      throw new Error("No se pudo cargar el Encabezado.");
    }
    return Response.text();
  })
  .then((data) => {
    document.getElementById("EncabezadoId").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error al cargar el Encabezado:", error);
  });
