categories = ["Pays", "Ville", "Accessoire", "Marque", "Fruit/Légume", "Film/Série", "Mon frère est", "État USA"]
 
let main = document.getElementById("main").firstElementChild;
let letter_div = document.getElementById("letter");
let new_cat = document.getElementById("new");

alphabet = [];
already_seen = [];
(function (){
    append_ntimes = function(letter, num){
        if (typeof(letter)=="object"){
            for (lett of letter){
                append_ntimes(lett, num);
            }
        }else{
            for (let i = 0; i < num; i ++){
                alphabet.push(letter)
            }    
        }   
    }
    append_ntimes("E", 15);
    append_ntimes("A", 9);
    append_ntimes("I", 8);
    append_ntimes(["N","O","R","S","T","U"], 6);
    append_ntimes("L", 5);
    append_ntimes(["D", "M"], 3);
    append_ntimes(["G", "B", "C", "P", "F", "H", "V"], 2);
    append_ntimes(["J","Q","K","W","X","Y","Z"], 1);
})()

function generate(){
    already_seen = [];
    while (main.firstChild){
        main.removeChild(main.lastChild);
    }
    categories.sort((a, b)=> 0.5 - Math.random());
    for (let index = 0; index < 7; index++){
        let temp = document.createElement("th");
        temp.innerHTML = categories[index];
        main.appendChild(temp);
    }
    document.getElementById("glob").style.display = "flex";
    letter_div.innerHTML = "";
}

function letter(){
    if (already_seen.length >= 26){
        letter_div.innerHTML = "Vous avez tout utilisé";
    }
    else{
        alphabet.sort((a, b)=> 0.5 - Math.random());
        let i = 0;
        while (already_seen.indexOf(alphabet[i])>=0){
            i++;
        }
        letter_div.innerHTML = alphabet[i];
        already_seen.push(alphabet[i])
    }
}

function submit(){
    categories.push(new_cat.value);
    console.log(new_cat.value);
}
