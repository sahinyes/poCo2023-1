var inputItem = document.getElementById('inputItem')
var button = document.getElementById('button')
var ul = document.getElementById('list')
var todoArr = []
var error = document.getElementById('error')

button.addEventListener('click', () => {
    const input = document.getElementById('inputItem').value
    
    // isItemValid(input) ? todoArr.push(iste)
    if (isItemValid(input) !== false){
        todoArr.push(input)
    } else {
        error.innerHTML = `You can not add duplicated or empty value`
    }
    promptItem()
})

//! Add line-throught, checkboxes Etc. Maybe some css also..

function isItemValid(param){

    param = param.replace(/[^\w. ]/gi, '')
    if (!todoArr.includes(param) && param !== "")
        return param
    else {
        return false
    } 
    // return param.replace(/<[^>]*?>/gi, "")
}

function createList(){
    clearBoard()
    return todoArr = []
}

function sortArray(){
    clearBoard()
    todoArr = todoArr.sort()
    promptItem()
    return todoArr
}

function clearBoard(){
    return ul.innerHTML = ''
}

function promptItem(){
    clearBoard()

    todoArr.forEach(element => {
        let li = document.createElement('li')
        let textNode = document.createTextNode(element)
        var btn = document.createElement('button')
        btn.textContent = 'X'
        btn.id = element
        btn.className = "deleteButton"
        btn.addEventListener('click',() => {
            itemDeleter(element)
        })
        ul.appendChild(li)
        li.appendChild(btn)        
        li.appendChild(textNode)
    });

}

function itemDeleter(param) {
    todoArr = todoArr.filter(item => item !== param)
    return promptItem()
}
