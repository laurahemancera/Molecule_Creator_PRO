$(function() {
  const elementoss = [{
    simbolo : "H", 
    nombre : "Hidrógeno",
    
  },{
    simbolo : "N", 
    nombre : "Nitrógeno",
    
  },{
    simbolo : "O", 
    nombre : "Oxigéno",
    
  }, {
    simbolo : "F", 
    nombre : "Flúor	",
    
  } ,{
    simbolo : "Cl", 
    nombre : "Cloro",
    
  },{
    simbolo : "He", 
    nombre : "Helio",
    
  },{
    simbolo : "Ne", 
    nombre : "Neón",
    
  }, {
    simbolo : "Cs", 
    nombre : "Cesio",
   
  },{
    simbolo : "Fr", 
    nombre : "Francio",
   
  },{
    simbolo : "Hg", 
    nombre : "Mercurio",
   
  },{
    simbolo : "Ga", 
    nombre : "Galio",
   
  },{
    simbolo : "Br", 
    nombre : "Bromo",
   
  },{
    simbolo : "Li", 
    nombre : "Litio",
   
  },{
    simbolo : "Na", 
    nombre : "Sodio",
   
  },{
    simbolo : "K", 
    nombre : "Potasio",
   
  },{
    simbolo : "Ca", 
    nombre : "Calcio",
   
  },{
    simbolo : "Ba", 
    nombre : "Bario",
   
  },{
    simbolo : "Cu", 
    nombre : "Cobre",
   
  },{
    simbolo : "Ag", 
    nombre : "Plata",
   
  },{
    simbolo : "Au", 
    nombre : "Oro",
   
  }];
  
  //console.log(elementos);
  //Función que validará que el nombre del elemento digitado exista...
  const validarElementoo = (nombre = "") => {
    //Se hará uso de un for para iterar el array de elementos y así buscarlo con su símbolo...
    const nombreEcontrado = {
      existe : false, 
      elementoo : {}
    };
    for(let i = 0; i < elementoss.length; i++) {
      if(elementoss[i].nombre.toLowerCase() === nombre.toLowerCase()){
        nombreEcontrado.existe = true;
        nombreEcontrado.elementoo = elementoss[i];
        break;
      } 
    }
    return nombreEcontrado;
  };
  
  //Realiza el proceso de escuchar el evento click del botón...
  $("#buscaElemento").click(function(e){
    const resultado = validarElementoo($("#elementoo").val());
    if(resultado.existe) {
       $("#busqueda").html(`El simbolo del elemento es ${resultado.elementoo.simbolo}`);
    } else {
      alert("El elemento no existe");
    }
  });
});
$(function() {
  const tasks = JSON.parse(localStorage.getItem("todos")) || [];
  //console.log(guid());

  const updateLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  };

  const posIndex = hash => {
    return tasks.findIndex(v => v.id === hash);
  };

  const deleteTask = indice => {
    const newIndex = posIndex(indice);
    swal(
      {
        title: "¿Estás Segur@?",
        text: `¿Deseas eliminar "${tasks[newIndex].name}" como nombre de tu molecula?`,
        type: "info",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Si, lo deseo",
        cancelButtonText: "No, cancelar",
        closeOnConfirm: true,
        closeOnCancel: false
      },
      function(isConfirm) {
        if (isConfirm) {
          tasks.splice(newIndex, 1);
          $(`#newtask_${indice}`).hide("slow", function(e) {
            $(this).remove();
          });
          updateLocalStorage();
          swal({
            title: "Proceso realizado",
            text: "Se ha eliminado ",
            type: "success"
          });
        } else {
          swal({
            title: "Cancelar",
            text: "Se ha cancelado ",
            timer: 2000,
            type: "error"
          });
        }
      }
    );
  };

  

  const addTask = (task, indice, finish = false) => {
    updateLocalStorage();
    $("#tasks").append(
      `<div id='newtask_${indice}' style="text-decoration : ${
        finish ? "line-through" : "none"
      }">${task} - <a href="#" id="delete_${indice}">Eliminar</a> </div> </div>`
    );
    $(`#delete_${indice}`).click(function(e) {
      //console.log(this.id.split("_")[1]);
      deleteTask(this.id.split("_")[1]);
    });
   
  };

  const loadTask = () => {
    for (let i = 1; i <= tasks.length; i++) {
      addTask(tasks[i - 1].name, tasks[i - 1].id, tasks[i - 1].finish);
    }
  };

  loadTask();

  /*
  text-decoration: line-through;
  */

  $("#saveTask").click(e => {
    //Validar que el campo no esté vacío...
    const $newTask = $("#task").val();
    if ($newTask.length !== 0) {
      const idTask = guid();
      tasks.push({
        id: idTask,
        name: $newTask,
        finish: false
      });
      addTask($newTask, idTask);
      $("#task")
        .val("")
        .focus();
    } else {
      $("#task").focus();
      //alert("Por favor escribe un simbolo");
      swal({
        title: "Error",
        text: "Por favor escribe un simbolo",
        type: "error"
      });
    }
  });

  function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }
});

//
$(function() {
  const faces = [];

  const validateFaceGas = face => {
    const havee =  face[1] === "";
    return (
     ( (face[0] === "H" )||( face[0] === "N" )|| (face[0] === "O" )|| (face[0] === "F") ||( face[0] === "C" && face[1] === "l")||( face[0] === "H" && face[1] === "e")||( face[0] === "N" && face[1] === "e") ) 
    );
  };
  const validateFaceLiq = facee => {
    const haveL = facee[1] === "";
    return (
      ((facee[0] === "C" && facee[1] === "s" )||( facee[0] === "H" && facee[1] === "g")||( facee[0] === "G" && facee[1] === "a") ||( facee[0] === "B" && facee[1] === "r") )
    );
  };
  const validateFaceSol = faceee => {
    const haveS = faceee[1] === "";
    return (
      ((faceee[0] === "B" && faceee[1] === "a" )||( faceee[0] === "C" && faceee[1] === "u")||( faceee[0] === "A" && faceee[1] === "g") ||( faceee[0] === "A" && faceee[1] === "u")||( faceee[0] === "C" && faceee[1] === "a") (facee[0] === "K" ))
    );
  };

  function countSmileys(faces) {
    let numSmiles = 0;
    if (faces.length !== 0) {
      for (let i = 0; i < faces.length; i++) {
                numSmiles += +validateFaceGas(faces[i]);
        
      }
     
    }
    return numSmiles;
  }
  function countSmileysLiq(faces) {
    let numSmilesLiq = 0;
    if (faces.length !== 0) {
      for (let i = 0; i < faces.length; i++) {
                numSmilesLiq += +validateFaceLiq(faces[i]);
        
      }
     
    }
    return numSmilesLiq;
  }
  function countSmileysSol(faces) {
    let numSmilesSol = 0;
    if (faces.length !== 0) {
      for (let i = 0; i < faces.length; i++) {
                numSmilesSol += +validateFaceSol(faces[i]);
        
      }
     
    }
    return numSmilesSol;
  }

  $("#saveFace").click(e => {
    //Validar que el campo no esté vacío...
    const $newFace = $("#face").val();
    if ($newFace.length !== 0) {
      faces.push($newFace);
      $("#faces").append(`<div>${$newFace}</div>`);
      $("#face")
        .val("")
        .focus();
               
      $("#numFaces").html(
        `Número de átomos en fase gaseosa encontrados en tu molecula : ${countSmileys(faces)}` 
       
      );
        
      $("#numLiq").html(
        `Número de átomos en fase liquida encontrados en tu molecula : ${countSmileysLiq(faces)}` 
      
      );
    
      $("#numSol").html(
        `Número de átomos en fase solida  encontrados en tu molecula : ${countSmileysSol(faces)}` 
        
      );
    }
      
    
  });
});

//
window.onload= function()
{
    const nomDiv = div => document.getElementById(div);
    const peso = () => {
        let numFaces=nomDiv("numFaces");
        let numLiq=nomDiv("numLiq");
        let numSol=nomDiv("numSol");
       
        if (numFaces.length !=0 || numLiq.length !=0) {
           
            const respuesta = ((numFaces*-2)+(numLiq*-1)+(numSol*-1));
            nomDiv("respuesta").innerHTML = "Los electrones de valencia de tu molecula son:"+ respuesta.toFixed(2);
        }
    }
    
    const formula = () => {
        let numFaces=nomDiv("numFaces");
        let numLiq=nomDiv("numLiq");
        let numSol=nomDiv("numSol");

        if (numFaces.length !=0 || numLiq.length !=0) {
            
       
            const respuesta = ((numFaces*-2)+(numLiq*-1)+(numLiq*-1));
            nomDiv("respuesta").innerHTML= " Tu molecula ${task} tiene la formula molecular:"+ respuesta.toFixed(2);
        }
    }

  

    nomDiv("peso").addEventListener("click", function(event) {
        peso();
    });
    nomDiv("formula").addEventListener("click", function(event){
        formula();
    });
       
};