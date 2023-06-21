
const tabButttons = document.querySelectorAll('.features__tab');


const removeActiveElements = (selector)=>{
    const elementsActive = document.querySelectorAll(`.${selector}`);

    if(elementsActive.length){

        elementsActive.forEach(elementActive =>{
            elementActive.classList.remove(selector);
        });

    }
}

tabButttons.forEach(tabButton =>{
    tabButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if(!tabButton.classList.contains('features__tab--active')){
            
            const articleNumber = tabButton.getAttribute('data-article');

            const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`);

            console.log(articleNumber);

            removeActiveElements('features__article--active');
            removeActiveElements('features__tab--active');


            articleShow.classList.add('features__article--active');
            tabButton.classList.add('features__tab--active');

        }
    })
});
