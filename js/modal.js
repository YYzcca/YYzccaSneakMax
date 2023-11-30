const bigImg = document.getElementById('bigImg')
const smImgs = document.querySelector('.small-imgs')
const sImg = smImgs.querySelectorAll('img')
const crCard = document.querySelectorAll('.cross-card')
const modal = document.querySelector('.modal')
const bodyModal = document.querySelector('.body-modal')

crCard.forEach((e) => {
    e.addEventListener('click', () => {
        modal.style.top = "120px"
        modal.classList.add('vis')
        bodyModal.classList.add('vis')
        modal.classList.remove('hide')
        bodyModal.classList.remove('hide')
        bodyModal.style.opacity = "0.5"
        bodyModal.addEventListener('click', () => {
            modal.classList.add('hide');
            modal.classList.remove('vis');
            bodyModal.classList.add('hide');
            bodyModal.classList.remove('vis');
            modal.style.top = "90px"
        })

        let modalImg = e.querySelector('img').getAttribute("src");
        bigImg.setAttribute("src", modalImg)
        modal.querySelector('h4').innerText = e.querySelector('h6').innerText
        modal.querySelector('strong').innerText = e.querySelector('p').innerText
        let r = parseInt(e.querySelector('p').innerText) + "000";
        let wr = (parseInt(r) + 1500)
        modal.querySelector('strong').nextElementSibling.innerText = wr.toLocaleString();

        if (bigImg.getAttribute("src") == './img/image.jpg'){
            sImg.forEach((i, indx) => {
                if (indx % 2 === 0){
                    i.setAttribute("src", './img/nike2.jpg')
                } else {
                    i.setAttribute("src", './img/image.jpg')
                }
            })
        } else {
            sImg.forEach((i, indx) => {
                if (indx % 2 === 0){
                    i.setAttribute("src", './img/867bca0039568c805d55cbfde9f23808 17.png')
                } else {
                    i.setAttribute("src", './img/sm2.jpg')
                }
            })
        }
    })
})


sImg.forEach((e) => {
    e.addEventListener('click', () => {
        let src = e.getAttribute("src");
        bigImg.setAttribute("src", src);
    })
})