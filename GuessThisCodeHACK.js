//Use with Python Automation Script
function guess(){
    for(let i = 0; i <= 3; i++){

        let element = $(".btn" + i.toString());
    
        if( element.text() == rightLanguage){
            console.log(`Programming Language => ${element.text()}`);
            element.click();
            $(".btn-next").click();   
        }
    }        
}


//Use to know only the Language
function onlyOne(){
    console.log(`Programming Language => ${rightLanguage}`);
}


//use to Add how many points you want (also strings LMAO)
function addPoints(){
    let pointsInput = window.prompt("How many points?");
    points = pointsInput;
    $(".top-score-value").text(points);
}


//by CaptainBeluga 🐳