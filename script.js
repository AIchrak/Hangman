let devinermot=document.getElementById("devinermot");
let alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let pendu=["i1.jpg","i2.jpg","i3.jpg","i4.jpg","i5.jpg","i6.jpg","i7.jpg"];
let imagependu=0;
let listevocabulaire=["heterogeneous", "feint", "preponderance", "extinguish", "empirical", "establish", "puissance", "javascript", "coding", "enthusiasm"];
let placementlettre=document.getElementById("traits");
let liveSpan=document.getElementById("lives");
let randWord = listevocabulaire[Math.floor(Math.random() * listevocabulaire.length)];
let Allbuttons=document.querySelectorAll(".lettrebtn");
let lives=6;
let indexes=Array.from(randWord);
let letterFoundCount= 0;
let letterAmountToFind= Infinity;

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
    document.location.reload()
    document.getElementById("play").disabled=false;
})


// clicker sur une lettre:
let indices=[];
Allbuttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        if(indexes.includes(btn.textContent.toLowerCase())){
            for(let i = 0; i < indexes.length; i++){
                    if(btn.textContent.toLowerCase() == indexes[i]){
                        placementlettre.children[i].textContent = btn.textContent.toUpperCase(); 
                        letterFoundCount ++;  
                    } 
            }
        }
        else if(letterFoundCount == randWord.length){
                win();
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
function win(){
        alert("The word was "+randWord + ". You've won!");
        document.location.reload();
}
//let arraytest=Array.from(placementlettre);

// winning the game:

/*for(let k=0; k<placementlettre.children.length; k++){
    if(placementlettre.children[k].textContent!="_"){
       // val=false;
       alert("The word was "+randWord + ". You've won!");
        document.location.reload();
    }   
}*/

    
//console.log(placementlettre.children.length);




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