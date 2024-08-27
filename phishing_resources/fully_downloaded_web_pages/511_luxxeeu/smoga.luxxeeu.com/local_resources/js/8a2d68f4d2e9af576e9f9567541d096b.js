document.addEventListener('DOMContentLoaded', () => {

    // burger-menu & links
    function getMenuActive(classMenuBtn, menuNav, addNewClass) {
        const toBody = document.body;
        const links = document.querySelectorAll('[data-menu]');
        const menuClick = document.querySelector(classMenuBtn);
        const menuContent = document.querySelector(menuNav);
        const menuClose = document.querySelector('#menuclose');

        // add new class 
        function addClass() {
            menuClick.addEventListener("click", () => {
                menuClick.classList.toggle(addNewClass);
                menuContent.classList.toggle(addNewClass);
                toBody.classList.toggle(addNewClass);
            });
        }
        // remove new class
        function removeClass() {
            menuClose.addEventListener('click', () => {
                menuContent.classList.remove(addNewClass);
                menuClick.classList.remove(addNewClass);
                toBody.classList.remove(addNewClass);
            })
            for (let link of links) {
                link.addEventListener("click", (e) => {
                    e.preventDefault();

                    const blockID = link.getAttribute("href").substring(1);

                    menuContent.classList.remove(addNewClass);
                    menuClick.classList.remove(addNewClass);
                    toBody.classList.remove(addNewClass);
                    // scroll to block
                    document.getElementById(blockID).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                });
            }
        }

        addClass();
        removeClass();
    }

    getMenuActive('#menubtn', '.header__list', 'active');
});


