turno=0;
function colocar(){
    objeto = event.srcElement;
    if(objeto.className=="vacio"){
       objeto.className = "ocupada";
       turno++
    if((turno%2)==0){
        objeto.innerHTML = "<img src=../assets/Circulo.png height=33 widht=33>";
    }else{
        objeto.innerHTML = "<img src=../assets/Cruz.png height=33 widht=33>";
     }
      }
}