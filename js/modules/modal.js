export default function initModal() {
    const login = document.querySelector('[data-modal="abrir"]');
    const fechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');

    function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
    }

    function cliqueForaModal(event) {
        // this === section container para não fechar quando clicar dentro do modal
        if (event.target === this) {
            toggleModal(event);
        }
    }

    if (login && fechar && containerModal) {
        login.addEventListener('click', toggleModal);
        // ao clicar no botão de login abre o modal para efetuar login
        fechar.addEventListener('click', toggleModal);
        // ao clicar no botão X fecha o modal
        containerModal.addEventListener('click', cliqueForaModal);
        // ao clicar fora do modal também fecha o modal
    }
}
