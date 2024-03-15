const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`


const button = document.getElementById('ping')
let  count = 0;
const func = async () => {
    count++
    button.innerText = count
}

button.addEventListener('click', () => {
    func()
})