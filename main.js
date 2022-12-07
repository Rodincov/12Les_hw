
let button = document.querySelector('button')

let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.append(wrapper)


let count = 1
button.addEventListener('click', () => {
    if(count % 2 === 0) {
        addGray()
    } else {
        addRed()
    }})


    
    function addGray() {
        let card = document.createElement('div')
        card.classList.add('card-gray')
        wrapper.append(card)
        card.innerHTML = count
        count += 1
    }
    function addRed() {
        let card = document.createElement('div')
        card.classList.add('card-red')
        wrapper.append(card)
        card.innerHTML = count
        count += 1
    }

