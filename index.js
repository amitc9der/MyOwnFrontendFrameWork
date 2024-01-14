function App(){
    e =  document.createElement("div");
    
    h = document.createElement("h1");
    h.innerHTML = "Hello World";
    
    e.appendChild(h);
    return e
}







render(App());

///////////////////////////////////////////////////////////
        /*Code below belongs to framework */
///////////////////////////////////////////////////////////
/*
    this function is entry to DOM need document as a args bcz document.body is entry point to DOM.
*/
function render(rootComponent){
    document.addEventListener("DOMContentLoaded", (event) => {
        console.log("DOM fully loaded and parsed");
        document.body.appendChild(rootComponent)
    });
}

/*
This function create Element that can be render. 
I need a parser, I think
*/
function CreateComponent(){

}