var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img: "https://cafans.b-cdn.net/images/Category_115290/subcat_179274/vqOESOiq_2708181623491gpadd.jpg"
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img: "https://cafans.b-cdn.net/images/Category_115290/subcat_179274/vqOESOiq_2708181623491gpadd.jpg"
  }
]


var ul = document.createElement("ul")
document.body.appendChild(ul)


books.forEach(book => {

  var li = document.createElement("li")
  var p = document.createElement("p")
  var ig = document.createElement("img")
  // console.log(books[i])
  // let book = books[i]
  let textNode = document.createTextNode(`${book.title} \nby ${book.author}`)
  ig.src = book.img
  ul.appendChild(li)
  li.appendChild(ig)
  li.appendChild(p)
  p.appendChild(textNode)

});
