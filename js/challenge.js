let likes = {}

let counter = parseInt(document.getElementById('counter').innerHTML)

console.log(parseInt(counter))
let interval = setInterval(increment, 1000);
function increment() {
    counter++
        document.getElementById('counter').innerHTML = counter
} 


let pauseResumeBtn = document.querySelector('button#pause')

let timerStopper = () => {
    pauseResumeBtn.addEventListener('click', alterTimer)
    //console.log("i was clicked")
}
 let pauseCount = () => {
     clearInterval(interval)
}

let alterTimer = (event) => {
    event.preventDefault()
    let button = event.target
    if (button.innerText === "Pause") {
        button.className = 'pausetimer'
        button.innerText = "Resume"
        pauseCount()
        
    } else {
        button.className = ''
        button.innerText = "Pause"
        interval = setInterval(increment, 1000);
    }
}

timerStopper()

//minus button -
const minusbtn = document.querySelector('button#minus')
let minusFunction = () => {
    minusbtn.addEventListener('click', subtract)
}

let subtract = (event) => {
    event.preventDefault
    counter--
    document.getElementById('counter').innerHTML = counter 
}
minusFunction()


// + plus button
const plusbtn = document.querySelector('button#plus')
let plusFunction = () => {
    plusbtn.addEventListener('click', add)
}
let add = (event) => {
    event.preventDefault
    counter++
    document.getElementById('counter').innerHTML = counter 
    //console.log("i was clicked")
}
plusFunction()



//like number button
let mouseClick = 0
const heartBtn = document.querySelector('button#heart')
let likeNumber = () => {
    heartBtn.addEventListener('click', heartNumbers)
}
let heartNumbers = () => {
    if(counter in likes) {
        likes[counter] = likes[counter] + 1
        let li = document.getElementById(counter)
        li.innerText = `${counter} liked ${likes[counter]} times!`
    }
    else if(!(counter in likes)) {
        let likeSection = document.querySelector('ul.likes')
        console.log(counter)
        likes[counter] = (likes[counter] || 0 ) + 1
        console.log(likes)
        let li = document.createElement('h5')
        li.id = counter
        li.innerText = `${counter} liked ${likes[counter]} times!`
        likeSection.append(li)
    }
}   
likeNumber()



//form

document.addEventListener('DOMContentLoaded', () => {
    const subBtn = document.querySelector("button#submit")
    subBtn.addEventListener('click', submitForm)
})

const submitForm = (event) => {
    event.preventDefault();
    //console.log('i was clicked');
    let commentSectionn = document.getElementById('list')
    const comment = document.createElement('h4');
    const commentText = document.querySelector("input#comment-input")
    comment.innerText = commentText.value
    commentSectionn.append(comment);
    
}
