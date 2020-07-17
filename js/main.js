const hamburgerBtn = document.querySelector('.hamburger');
        const sidepanel = document.querySelector('.sidepanel');
        const main = document.querySelector('.main');
        const footer = document.querySelector('.footer');
        hamburgerBtn.addEventListener('click',() => {
            hamburgerBtn.classList.toggle('is-active'); 
            sidepanel.classList.toggle('sidepanelTriggered');
            footer.classList.toggle('footerTriggered');
            main.classList.toggle('mainTriggered');
        });