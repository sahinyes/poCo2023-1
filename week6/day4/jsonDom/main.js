var ul = document.getElementById("ul")

for (i of range(1,10)) {
    fetch('https://jsonplaceholder.typicode.com/photos/'+i)
    .then(response => response.json())
    .then(json => creator(json))
}


function* range(_start_, _end_) {
    for (let h = _start_; h <= _end_; h++) {
    yield h;
    }
}

function creator(json){

    var li = document.createElement("li")
    var img = document.createElement("img")
    var h3 = document.createElement("h3")

    var textNode = document.createTextNode(json.title)

    img.src = json.url

    ul.appendChild(li)
    li.appendChild(img)
    h3.appendChild(textNode)
    li.appendChild(h3)

}


