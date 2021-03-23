function changeText(){
    let button=document.getElementsByClassName("bools")
    let i=0
    for(i=0; i<button.length; i++){
        button[i].id=i
        console.log(button[i].id)
    }
}
changeText()