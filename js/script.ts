const btnElem = document.querySelector('#menu-btn')
const navElem = document.querySelector('#menu')

btnElem?.addEventListener("click", (): void => {
    btnElem.classList.toggle('open')
    navElem?.classList.toggle('flex')
    navElem?.classList.toggle('hidden')
})
