export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

    // split pra transformar em array
    // map pra retornar de string pra numero

    const dataHoje = new Date();
    const diaHoje = dataHoje.getDay();
    const horaAgora = dataHoje.getHours();

    const diasAberto = diasSemana.indexOf(diaHoje) !== -1;
    const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1]);

    if (diasAberto && horarioAberto) {
        funcionamento.classList.add('aberto');
    }
}
