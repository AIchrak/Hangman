let devinermot=document.getElementById("devinermot");
let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let pendu=["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg","i7.jpg"];
let imagependu=0;
let listevocabulaire=["heterogeneous", "feint", "preponderance", "extinguish", "empirical", "establish", "puissance", "javascript", "coding", "enthusiasm"];
let placementlettre=document.getElementById("traits");
//let stringLength=placementlettre.textContent.length;
let liveSpan=document.getElementById("lives");
let randWord = listevocabulaire[Math.floor(Math.random() * listevocabulaire.length)];
//let divparent=document.querySelector(".container");
let Allbuttons=document.querySelectorAll(".lettrebtn");
//console.log(Allbuttons[0].textContent);
let lives=6;

//To disable all letters before starting to play;
Allbuttons.forEach(btn=>{
    btn.disabled=true;
    
})

// bouton play sélectionne un mot de la liste:
document.getElementById("play").addEventListener("click",()=>{
    
        for(let i=0; i<randWord.length; i++){
            const html= '<p id="word"> _ </p>';
            placementlettre.insertAdjacentHTML('beforeend',html);
        }
    document.getElementById("play").disabled=true;
    Allbuttons.forEach(btn=>{
        btn.disabled=false;
        
    })
    console.log(randWord);
})

//bouton Reset reload la page:
document.getElementById("reset").addEventListener("click",()=>{
    //var p=document.getElementById("word");
    //for(let i in randWord.length){
        //p.remove(p);
    document.location.reload()
    document.getElementById("play").disabled=false;
    //console.log(randWord);
})


//var letter ="a";
let indexes=Array.from(randWord);
/*const getindexes=function(letter){  
    //console.log(indexes);
    indexes.forEach( i =>{
        if(i===letter){
            const index =i;
            indexes.push(index);
        }
    });
};*/

// clicker sur une lettre:
let indices=[];
Allbuttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(indexes.includes(btn.textContent.toLowerCase())){
            for(let i = 0; i < indexes.length; i++){
                    if(btn.textContent.toLowerCase() == indexes[i]){
                        //let UpLetter = btn.textContent.toUpperCase();
                        //placementlettre.children[i].textContent = `${UpLetter}`;
                        placementlettre.children[i].textContent = btn.textContent.toUpperCase();
                        
                    } 
            }
            
                //console.log(indexes.length);
        }
        
        else{
                lives--;
                liveSpan.innerHTML="Remaining lives: "+ lives;
                    imagependu+=1
                    document.images[0].src=pendu[imagependu];
                if(lives==0){
                    alert("game over");
                    document.location.reload();

                }
                
        }
        btn.disabled=true;
    })
    
})
let arraytest=Array.from(placementlettre);

// winning the game:

/*for(let k=0; k<placementlettre.children.length; k++){
    if(placementlettre.children[k].textContent!="_"){
       // val=false;
       alert("The word was "+randWord + ". You've won!");
        document.location.reload();
    }   
}*/

    
//console.log(placementlettre.children.length);


/* //Pour créer l'alphabet dans span via script:
let listevocabulaire=["heterogeneous", "feint", "preponderance", "extinguish", "empirical", "establish", "puissance", "javascript", "coding", "enthusiasm"]
let placerlettres=document.getElementById("placerlettres");
let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let text="";
for(let i=0; i<alphabet.length; i++){
    let span=document.createElement("span");
    let id=document.createAttribute("id");
    id.value="lettres";
    span.setAttributeNode(id);
    document.getElementById("placerlettres").appendChild(span);
    span.innerHTML= " "+alphabet[i];
}
document.getElementById("lettres[j]").addEventListener("click", ()=>{
    for(let i=0; i<alphabet.length; i++){
        document.getElementById("devinermot").innerHTML=alphabet[i];
    }
})

*/
/*
document.getElementById("b").addEventListener("click",()=>{

})
document.getElementById("c").addEventListener("click",()=>{

})
document.getElementById("d").addEventListener("click",()=>{

})
document.getElementById("e").addEventListener("click",()=>{

})
document.getElementById("f").addEventListener("click",()=>{

})
document.getElementById("g").addEventListener("click",()=>{

})
document.getElementById("h").addEventListener("click",()=>{

})
document.getElementById("i").addEventListener("click",()=>{

})
document.getElementById("j").addEventListener("click",()=>{

})
document.getElementById("k").addEventListener("click",()=>{

})
document.getElementById("l").addEventListener("click",()=>{

})
document.getElementById("m").addEventListener("click",()=>{

})
document.getElementById("n").addEventListener("click",()=>{

})
document.getElementById("o").addEventListener("click",()=>{

})
document.getElementById("p").addEventListener("click",()=>{

})
document.getElementById("q").addEventListener("click",()=>{

})
document.getElementById("r").addEventListener("click",()=>{

})
document.getElementById("s").addEventListener("click",()=>{

})
document.getElementById("t").addEventListener("click",()=>{

})
document.getElementById("u").addEventListener("click",()=>{

})
document.getElementById("v").addEventListener("click",()=>{

})
document.getElementById("w").addEventListener("click",()=>{

})
document.getElementById("x").addEventListener("click",()=>{

})
document.getElementById("y").addEventListener("click",()=>{

})
document.getElementById("z").addEventListener("click",()=>{

})

*/
/*
const getindexes=function(letter){
    let indexes=Array.from(randWord);
    //console.log(indexes);
    indexes.forEach((val,i)=>{
        if(val===letter){
            const index =i;
            indexes.push(index);
        }
    });
};
*/
/*
document.getElementById("a").addEventListener("click",()=>{
    if(randWord.includes(letter)){
        const indexeslist=getindexes(letter);
        console.log(indexeslist);
        indexeslist.forEach(i=>{
            placementlettre.children[i].textContent=this.textContent;
        });
        //document.getElementById("word").textContent =this.textContent;
        document.getElementById("lives").innerHTML="Remaining lives: "+ "7";
    }
    else{
        lives --;
            liveSpan.innerHTML="Remaining lives: "+ lives;
    }
    document.getElementById("a").disabled=true;
})
*/
/*
if(indexes.includes("i")){
        indexes.forEach((e,index)=>{
            if(e="i"){
                let index=indexes.indexOf("i");
                //console.log(index);
                placementlettre.children[index].textContent="i";
            }
        });
        
        //document.getElementById("word").textContent =this.textContent;
        document.getElementById("lives").innerHTML="Remaining lives: "+ "7";
    }
*/

/* //code qui fonctionne mais pour une lettre:
// clicker sur une lettre:
let indices=[];
document.getElementById("a").addEventListener("click",()=>{
    if(indexes.includes(document.getElementById("a").textContent.toLowerCase())){
        indexes.forEach((e,index)=>{
            if(e="a"){
                let index=indexes.indexOf(e);
                while (index != -1) {
                indices.push(index);
                index = indexes.indexOf(e, index + 1);
                }
                //console.log(indices);
                indices.forEach((valeurs, j)=>{
                    
                    placementlettre.children[valeurs].textContent=e;
                })
                
            }
        });
        
        //document.getElementById("word").textContent =this.textContent;
        document.getElementById("lives").innerHTML="Remaining lives: "+ "7";
    }
    else{
        lives --;
            liveSpan.innerHTML="Remaining lives: "+ lives;
    }
    document.getElementById("a").disabled=true;
})
*/

/* //Mon Code qui fonctionne pour tout bouton mais change lettre à chaque fois:
// clicker sur une lettre:
let indices=[];
Allbuttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(indexes.includes(btn.textContent.toLowerCase())){
            indexes.forEach((e,index)=>{
                if(e=btn.textContent.toLowerCase()){
                    let index=indexes.indexOf(e);
                    while (index != -1) {
                    indices.push(index);
                    index = indexes.indexOf(e, index + 1);
                    }
                    indices.forEach((valeurs, j)=>{
                        
                        placementlettre.children[valeurs].textContent=btn.textContent.toLowerCase();
                    })
                    
                }
            });
            
            //document.getElementById("word").textContent =this.textContent;
            document.getElementById("lives").innerHTML="Remaining lives: "+ "7";
        }
        else{
            lives --;
                liveSpan.innerHTML="Remaining lives: "+ lives;
                if(lives<=0){
                    alert("game over");
                    document.location.reload();

                }
                
        }
        btn.disabled=true;
    })
})

*/

/* //win draft:
//1
(randWord.length==indexes.length){
            
    alert("The word was "+randWord + ". You've won!");
    document.location.reload();
}

//2
function win(){
    indexes.forEach(i=>{
        if(randWord == indexes[i]){
            alert("The word was "+randWord + ". You've won!");
        document.location.reload();
        console.log(indexes[i]);
        };
    })
}
*/