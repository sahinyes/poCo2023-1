var helloType = "es"

function helloWorld(param){    
    switch (param) {
        case "es":
            console.log("Hola Mundo")
            break

        case "de":
            console.log("Grüezzi World")
            break

        case "en":
            console.log("Hello World")
            break
        
        default:
            console.log("Hello World")   
            
    }

}

helloWorld(helloType)