const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById('card-container')

    let carregando = `<span class="resultado">carregando...</span>`

    let pronto = `<span class="resultado">Cadastro Realizado!</span>`

    content.innerHTML = carregando

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})