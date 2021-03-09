let input = document.getElementById("input");
let submit = document.getElementById("submit");
let list = document.getElementById("list");
let icon = "<a href='#' id='i' + item> X </a>";
let x = document.getElementById("'i' + item");

if (localStorage.getItem("ToDo")){
} else {
    let todo = [];
    localStorage.setItem("ToDo", JSON.stringify(todo));
};

// FUNKTION FÖR ATT SKRIVA UT LISTAN
function printList() {
    // TÖM LISTAN INNAN NYTT SRIVS UT SÅ DET INTE BLIR DUBBELT
    list.innerHTML = "";

    // HÄMTA
    let storedTodo = JSON.parse(localStorage.getItem("ToDo"));

    // LOOPA UT ALLA ITEMS
    for (i in storedTodo) {
        console.log("i", i);
        list.insertAdjacentHTML("beforeend", "<li id='"+i+"'>" + storedTodo[i] + "</li>");
    };
};

// FUNKTION FÖR ATT SPARA NYTT ITEM
submit.addEventListener("click", function(){
    
    // HÄMTA
    let storedTodo = JSON.parse(localStorage.getItem("ToDo"));
    // ÄNDRA
    let saveInput = input.value;
    storedTodo.push(saveInput);
    // SPARA
    localStorage.setItem("ToDo", JSON.stringify(storedTodo));

    // SKRIV UT LISTAN IGEN EFTER ÄNDRINGAR
    printList();
});

// RADERA FUNKTION
list.addEventListener("click", function(e){
    console.log("click", e.target.id);

    // HÄMTA
    let deleteTodo = JSON.parse(localStorage.getItem("ToDo"));
    // ÄNDRA
    deleteTodo.splice(e.target.id, 1);
    // SPARA
    localStorage.setItem("ToDo", JSON.stringify(deleteTodo)); 

    // SKRIV UT LISTAN IGEN EFTER ÄNDRINGAR
    printList();
});

// ANROPA FUNKTION FÖR ATT SKRIVA UT LISTAN
printList();