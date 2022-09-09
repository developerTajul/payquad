document.addEventListener('DOMContentLoaded', function () {


   
    // what we do
    const contents = document.querySelectorAll('.content');
    const items = document.querySelectorAll('.item');
    const itemsLength = items.length;
    for (let i = 0; i < itemsLength; i++) {
        items[i].addEventListener('click', function (e) {
            let clickedEle = e.target;
            do {
                if (clickedEle == items[i]) {
                    let target = items[i].dataset.target;
                    showContent(target);
                    return;
                } else {
                    clickedEle = clickedEle.parentNode;
                }
            } while (clickedEle)
        })
    }

    function showContent(target) {
        let contentLength = contents.length;
        for (let i = 0; i < contentLength; i++) {
            let targetedContent = contents[i].dataset.content;
            if (targetedContent === target) {
                toggleData(contents[i]);
            }
        }
    }
    function toggleData(el) {
        const show = document.querySelectorAll('.show');
        let showLength = show.length;
        for (let i = 0; i < showLength; i++) {
            show[i].classList.remove('show');
        }
        el.classList.add('show');
    }
    
  
  

   
})
