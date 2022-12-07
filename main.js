
let button = document.querySelector('button')

let wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
document.body.append(wrapper)


let count = 1
button.addEventListener('click', () => {
    if(count % 2 === 0) {
        addClass('card-gray')
    } else {
        addClass('card-red')
    }})


    
    function addClass(cardClass) {
        let card = document.createElement('div')
        card.classList.add(cardClass)
        wrapper.append(card)
        card.innerHTML = count
        count += 1
    }

