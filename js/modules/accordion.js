// mantem a primeira pergunta aberta e ao clicar abre a resposta

export default function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    function activeAccordion() {
        this.classList.toggle('active'); // quando clicar ativa
        this.nextElementSibling.classList.toggle('active'); // quando clicar no de cima o de baixo ativa
    }

    if (accordionList.length) {
        accordionList[0].classList.add('active');
        accordionList[0].nextElementSibling.classList.add('active');

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
