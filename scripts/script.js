document.addEventListener("DOMContentLoaded", function() {
    console.log("Document is ready!");
   
    const modalMiguel = document.getElementById("modalMiguel");
    const nombreMiguel =document.getElementById("nombreMiguel");
    const btnCerrar = document.getElementsByClassName("cerrar");
    nombreMiguel.addEventListener("click",function(){
        modalMiguel.showModal();
        console.log("llego aqui");
        
    });
    // 
    for (cerrar of btnCerrar){
        cerrar.addEventListener("click",function(){
            modalMiguel.close();
        });
    }

    
});
