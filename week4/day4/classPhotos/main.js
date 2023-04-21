const myArr= [
    {
        id: 1,
        status: "laugh",
        name: "Susanne",
        img:"./img/00-PowerCoders_62.jpg"
    },
    {
        id:2,
        status: "laugh",
        img:"./img/02-PowerCoders_02.jpg"
    },
    {
        id:3,
        status: "laugh",
        img:"./img/37-PowerCoders_37.jpg"
    },
    {
        id:5,
        status:"laugh",
        img:"./img/30-PowerCoders_30.jpg"
    },
    {
        id:6,
        status:"serious",
        img:"./img/29-PowerCoders_29.jpg"
    },
    {
        id:8,
        status:"serious",
        img:"./img/26-PowerCoders_26.jpg"
    },
    {
        id:9,
        status:"smile",
        img:"./img/23-PowerCoders_23.jpg"
    },
    {
        id:10,
        status:"smile",
        img:"./img/19-PowerCoders_19.jpg"
    },
    {
        id:11,
        status:"serious",
        img:"./img/17-PowerCoders_17.jpg"
    },
    {
        id:12,
        status:"smile",
        img:"./img/15-PowerCoders_15.jpg"
    },
    {
        id:13,
        status:"laugh",
        img:"./img/11-PowerCoders_11.jpg"
    },
    {
        id:14,
        status:"serious",
        img:"./img/08-PowerCoders_08.jpg"
    }
]

myArr.forEach(element => {
    document.getElementById("content").innerHTML+=`
    <img id="${element.id}" src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
    `
});

function smile()
{
    document.getElementById("content").innerHTML=""
        myArr.forEach(element => {
            if (element.status === "smile") {
                document.getElementById("content").innerHTML+=`
                <img id="${element.id}" src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
                `
            }
        })
}

function serious()
{
    document.getElementById("content").innerHTML=""
        myArr.forEach(element => {
            if (element.status === "serious") {
                document.getElementById("content").innerHTML+=`
                <img id="${element.id}" src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
                `
            }
        })
}

function laugh()
{
    document.getElementById("content").innerHTML=""
        myArr.forEach(element => {
            if (element.status === "laugh") {
                document.getElementById("content").innerHTML+=`
                <img id="${element.id}" src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
                `
            }
        })
}

function printAll()
{
    document.getElementById("content").innerHTML=""
        myArr.forEach(element => {
            document.getElementById("content").innerHTML+=`
            <img id="${element.id}" src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
            `
        })
}

function callInfo(param)
{
    document.getElementById(param).innerHTML+=`
    <div class="card" id="${element.id}"><img src="${element.img}" alt="" onclick="callInfo(${element.id})"> 
    </div>
    `
}