function scrollToElement(elementSelector, Instance = 0){
    const elements = document.querySelectorAll(elementSelector) 
    if(elements.length>Instance){
        elements[Instance].scrollIntoView({behavior : 'smooth'});
    }
}

const link1 = document.getElementById("Link1");
const link2 = document.getElementById("Link2");
const link3 = document.getElementById("Link3");

link1.addEventListener('click',()=>{
    scrollToElement('.header')
})
link2.addEventListener('click',()=>{
    scrollToElement('.header',1)
})
link3.addEventListener('click',()=>{
    scrollToElement('.header',2)
})