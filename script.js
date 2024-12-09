let champions = [
    { "name": "Terra", "img": "./Images/Terra.webp" },
    { "name": "Aurora", "img": "./Images/Aurora.webp" },
    { "name": "Argus", "img": "./Images/Argus.webp" },
    { "name": "Countess", "img": "./Images/Countess.webp" },
    { "name": "Chrunch", "img": "./Images/Chrunch.webp" },
    { "name": "Dekker", "img": "./Images/Dekker.webp" },
    { "name": "Drongo", "img": "./Images/Drongo.webp" },
    { "name": "FengMao", "img": "./Images/FengMao.webp" },
    { "name": "Fey", "img": "./Images/Fey.webp" },
    { "name": "Gadget", "img": "./Images/Gadget.webp" },
    { "name": "Gideon", "img": "./Images/Gideon.webp" },
    { "name": "Greystone", "img": "./Images/Greystone.webp" },
    { "name": "GRIM.exe", "img": "./Images/GRIM.exe.webp" },
    { "name": "Grux", "img": "./Images/Grux.webp" },
    { "name": "Howitzer", "img": "./Images/Howitzer.webp" },
    { "name": "Iggy&Scorch", "img": "./Images/Iggy&Scorch.webp" },
    { "name": "Kallari", "img": "./Images/Kallari.webp" },
    { "name": "Khaimera", "img": "./Images/Khaimera.webp" },
    { "name": "Kira", "img": "./Images/Kira.webp" },
    { "name": "Kwang", "img": "./Images/Kwang.webp" },
    { "name": "Lt.Belica", "img": "./Images/Lt.Belica.webp" },
    { "name": "Morigesh", "img": "./Images/Morigesh.webp" },
    { "name": "Murdock", "img": "./Images/Murdock.webp" },
    { "name": "Muriel", "img": "./Images/Muriel.webp" },
    { "name": "Narbash", "img": "./Images/Narbash.webp" },
    { "name": "Phase", "img": "./Images/Phase.webp" },
    { "name": "Rampage", "img": "./Images/Rampage.webp" },
    { "name": "Revenant", "img": "./Images/Revenant.webp" },
    { "name": "Riktor", "img": "./Images/Riktor.webp" },
    { "name": "Serath", "img": "./Images/Serath.webp" },
    { "name": "Sevarog", "img": "./Images/Sevarog.webp" },
    { "name": "Shinbi", "img": "./Images/Shinbi.webp" },
    { "name": "Sparrow", "img": "./Images/Sparrow.webp" },
    { "name": "Steel", "img": "./Images/Steel.webp" },
    { "name": "TwinBlast", "img": "./Images/TwinBlast.webp" },
    { "name": "Wraith", "img": "./Images/Wraith.webp" },
    { "name": "Zarus", "img": "./Images/Zarus.webp" }
];

let currentChampion = {};
let score = 0;
let attemptCount = 0;

const mainMenu = document.getElementById('main-menu');
const classicBtn = document.getElementById('classic-btn');
const abilitiesBtn = document.getElementById('abilities-btn');

const quizContainer = document.getElementById('quiz-container');
const championImage = document.getElementById('champion-image');
const championInput = document.getElementById('champion-input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

function goToMainMenu() {
    quizContainer.style.display = 'none';
    mainMenu.style.display = 'block';
}

function loadRandomChampion() {
    currentChampion = champions[Math.floor(Math.random() * champions.length)];
    championImage.src = currentChampion.img;
    championInput.value = '';
    result.textContent = '';
    attemptCount = 0;
}

function updateGlobalCount() {
    let globalCount = localStorage.getItem('globalCount');
    if (!globalCount) {
        globalCount = 0;
    }
    globalCount = parseInt(globalCount) + 1;
    localStorage.setItem('globalCount', globalCount);
    return globalCount;
}

submitBtn.addEventListener('click', () => {
    const userInput = championInput.value.trim().toLowerCase();
    attemptCount++;
    if (userInput === currentChampion.name.toLowerCase()) {
        score++;
        const globalCount = updateGlobalCount();
        if (attemptCount === 1) {
            result.innerHTML = `<p>ONE SHOT! Du hast es erraten: ${currentChampion.name}</p>
                                <p>Du bist der ${globalCount}, der heute den Champion gefunden hat</p>
                                <p>Anzahl der Versuche: ${attemptCount}</p>`;
        } else {
            result.innerHTML = `<p>Richtig! Deine Punktzahl: ${score}</p>
                                <p>Du hast ${currentChampion.name} nach ${attemptCount} Versuchen erraten, sehr gut.</p>
                                <p>Du bist der ${globalCount}, der heute den Champion gefunden hat!!!</p>`;
        }
        result.style.color = 'green';
        setTimeout(() => {
            loadRandomChampion();
        }, 2000);
    } else {
        result.textContent = `Falsch! Versuch es erneut.`;
        result.style.color = 'red';
        setTimeout(() => {
            result.textContent = '';
        }, 2000);
    }
});

classicBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    quizContainer.style.display = 'block';
    loadRandomChampion();
});

abilitiesBtn.addEventListener('click', () => {
    alert('Fähigkeiten-Quiz ist noch nicht implementiert.');
});


loadRandomChampion();

