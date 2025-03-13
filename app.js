document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('amigo');
    const addButton = document.querySelector('.button-add');
    const drawButton = document.querySelector('.button-draw');
    const nameList = document.getElementById('listaAmigos');
    const result = document.getElementById('resultado');
    let names = [];

    addButton.addEventListener('click', addName);
    nameInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addName();
        }
    });

    drawButton.addEventListener('click', () => {
        if (names.length === 0) {
            alert('A lista está vazia. Adicione nomes antes de sortear.');
            return;
        }
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];
        result.innerHTML = `<li>Amigo sorteado: ${selectedName}</li>`;
    });

    function addName() {
        const name = nameInput.value.trim();
        if (name === '') {
            alert('Por favor, insira um nome válido.');
            return;
        }
        names.push(name);
        updateNameList();
        nameInput.value = '';
    }

    function updateNameList() {
        nameList.innerHTML = '';
        names.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            nameList.appendChild(li);
        });
    }
});