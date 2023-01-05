var btnElem = document.querySelector('#menu-btn');
var navElem = document.querySelector('#menu');
btnElem === null || btnElem === void 0 ? void 0 : btnElem.addEventListener("click", function () {
    btnElem.classList.toggle('open');
    navElem === null || navElem === void 0 ? void 0 : navElem.classList.toggle('flex');
    navElem === null || navElem === void 0 ? void 0 : navElem.classList.toggle('hidden');
});
