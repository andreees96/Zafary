const HomeButt = document.querySelector('#bt-home');
const ZpotifyButt = document.querySelector('#bt-zpotify');
const WhatzButt = document.querySelector('#bt-watz');

const dinamiContent = document.querySelector('#dinamiContent');
const name = document.querySelector('#link-zafary');

/* fucniones */

HomeButt.addEventListener('click',Homepag)
function Homepag(){   
    dinamiContent.setAttribute('src','../Home/index.html');
    name.innerHTML ='bt-home'
}

ZpotifyButt.addEventListener('click',Zpotifypag);
function Zpotifypag(){

    document.getElementById("dinamiContent").src = "../Zpotify/index.html";
    name.innerHTML = "bt-watz";

    /*dinamiContent.setAttribute('src','../Zpotify/index.html');
    name.innerHTML ='Zpotifyid'*/
}

WhatzButt.addEventListener('click',Whatzpag);
function Whatzpag(){
    dinamiContent.setAttribute('src','../Whatzap/index.html');
    name.innerHTML ='bt-zpotify'
}

;
    

