document.addEventListener("DOMContentLoaded", function() {
   
    //Creación de variables
    const modales = Array.from(document.getElementsByClassName("modal"));
    const nombrePablo =document.getElementById("nombrePablo");
    const modalPablo = document.getElementById("modalPablo");
    const nombreMiguel =document.getElementById("nombreMiguel");
    const modalMiguel = document.getElementById("modalMiguel");
    const nombrePaula =document.getElementById("nombrePaula");
    const modalPaula = document.getElementById("modalPaula");
    const nombreSaul =document.getElementById("nombreSaul");
    const modalSaul = document.getElementById("modalSaul");

    const btnCerrar = document.getElementsByClassName("cerrar");
    
    //Abrir modales
    nombrePablo.addEventListener("click",function(){
        modalPablo.showModal();        
    });

     nombreMiguel.addEventListener("click",function(){
        modalMiguel.showModal();        
    });
     nombrePaula.addEventListener("click",function(){
        modalPaula.showModal();        
    });
     nombreSaul.addEventListener("click",function(){
        modalSaul.showModal();        
    });
    

    // Funcionalidad de cerrar
    for (const cerrar of btnCerrar){
        cerrar.addEventListener("click",function(){
            for(modal of modales){
                modal.close();
            }
        });
    }
   
     //Cerrar al clickar fuera
     window.addEventListener("click", (event) => {
        for (const modal of modales) {
            if (event.target === modal) {
                modal.close();
            }
        }
    });
});
