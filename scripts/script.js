document.addEventListener("DOMContentLoaded", function() {
   
    //Creación de variables
    const modalMiguel = document.getElementById("modalMiguel");
    const modales = document.getElementsByClassName("modal");
    const nombrePablo =document.getElementById("nombrePablo");
    const nombreMiguel =document.getElementById("nombreMiguel");
    const btnCerrar = document.getElementsByClassName("cerrar");
    
    //Abrir modales
    nombrePablo.addEventListener("click",function(){
        modalPablo.showModal();
        
    });

     nombreMiguel.addEventListener("click",function(){
        modalMiguel.showModal();
        
    });
    
    // Funcionalidad de cerrar
    for (cerrar of btnCerrar){
        cerrar.addEventListener("click",function(){
            modalMiguel.close();
        });
    }
     //Cerrar al clickar fuera
        window.onclick = function(event) {
        for(modal of modales){
            if (event.target == modal) {
                modal.close();
             }
        }
        }
    
});
