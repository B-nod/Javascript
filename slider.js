const img_array=['mountain.jpg','abc1.jpg','temple.jpeg','everest.jpg']
const array_lenght = img_array.length

let i=0

let set = setInterval(sliderFunction,5000)
//here, sliderFunction is a user define function
//5000 -> 5 seconds

function sliderFunction(){
    i++
    i=i%array_lenght
    //i=0%5=0
    //i=1%5=1
    //i=2%5=2
    //i=3%5=3
    //i=4%5=4
    //i=5%5=0
    document.getElementById('image').src=`images/${img_array[i]}`
}

function next() {
    i++
    i=i%array_lenght
    document.getElementById('image').src=`images/${img_array[i]}`
}

function prev() {
    i--
    if(i<0) {
        i=array_lenght-1
    }
    document.getElementById('image').src=`images/${img_array[i]}`
}

function stops(){
    clearInterval(set)
}

function starts(){
    set = setInterval(sliderFunction,5000)
}