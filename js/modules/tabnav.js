export default function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active');
        });
        tabContent[index].classList.add('active');
    }

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('active'); // adiciona a raposa como ativa sempre que atualiza a pag

        // loop pra cada li e index de cada img - em cada item evento de click executa a função de ativar class

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                activeTab(index);
            });
        });
    }
}
