const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const fromText = document.getElementById("fromText");
const toText = document.getElementById("toText");
const translateBtn = document.getElementById("translateBtn");
const exchange = document.querySelector(".exchange");
const icons = document.querySelectorAll(".icons");


for (let lang in languages){
    
    let option = `<option value =${lang}>${languages[lang]}</option>`;

    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);

    fromLang.value = "tr-TR";
    toLang.value = "en-GB";

}

translateBtn.addEventListener("click", () => {

    let text = fromText.value;
    let from = fromLang.value;
    let to =  toLang.value;
    let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`; 

    fetch(url)
        .then(res => res.json())
        .then(data => 
            toText.value = data.responseData.translatedText
            )
})

exchange.addEventListener("click",()=> {

    let text = fromText.value;
    fromText.value = toText.value;
    toText.value = text; 

    let lang = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = lang;
    
})

for (let icon of icons){

    icon.addEventListener("click", (element)=> {
        console.log(element.target)

        if(element.target.classList.contains("fa-copy")){
            if(element.target.id =="from"){
                navigator.clipboard.writeText(fromText.value)
            } else{            
            navigator.clipboard.writeText(toText.value)
        }
        }

    })


}