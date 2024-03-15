
const button = document.getElementById('ping')
let  count = 0;
const func = async () => {
    count++
    button.innerText = count
}

button.addEventListener('click', () => {
    func()
})