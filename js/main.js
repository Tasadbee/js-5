var elForm = document.querySelector('.form')
var elList= document.querySelector('.list')

var arr = []
elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    var obj = {
        image: e.target.image.value,
        name: e.target.name.value,
        color: e.target.color.value,
    }
    arr.push(obj)
    fn(arr)

})

function fn(arr){
    elList.innerHTML = ''
    for(var i = 0; i < arr.length; i++){
        let newLi = document.createElement('li')
        newLi.className = ('newLi')
        newLi.innerHTML = `<div class="box"><img  src="${arr[i].image} alt=""><p>${arr[i].name}</p> <p>${arr[i].color}</p> </div>`
        elList.appendChild(newLi)
    }
}