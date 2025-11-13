// =================================================================================
// 1. CONFIGURATION & GAME DATA
// =================================================================================

const quizData = {
    EASY: [
        { question: "¿Cuál es el propósito principal de la Interpolación Polinomial?", options: ["Encontrar una función que pase exactamente por un conjunto de puntos de datos.", "Calcular la integral de una función desconocida.", "Simplificar ecuaciones diferenciales complejas.", "Determinar la derivada en puntos específicos."], correctIndex: 0 },
        { question: "¿Qué propiedad garantiza que un polinomio de grado 'n' pasa por 'n+1' puntos distintos?", options: ["Teorema de Rolle.", "Unicidad del polinomio interpolador.", "Teorema Fundamental del Álgebra.", "Método de Newton-Raphson."], correctIndex: 1 },
        { question: "Si tienes 3 puntos (x₀, x₁, x₂), ¿cuál es el grado máximo del polinomio interpolador?", options: ["Grado 3", "Grado 2", "Grado 4", "Grado 1"], correctIndex: 1 },
        { question: "¿Qué forma tiene el polinomio interpolador de Lagrange?", options: ["Una suma de términos que contienen diferencias divididas.", "Una suma de funciones base $L_i(x)$ ponderadas por los valores de la función $f(x_i)$.", "Una matriz de coeficientes.", "Un polinomio trigonométrico."], correctIndex: 1 },
        { question: "¿Para qué sirve el concepto de 'Diferencias Divididas' en la interpolación?", options: ["Para calcular integrales.", "Para obtener los coeficientes del polinomio de Newton.", "Para resolver sistemas de ecuaciones.", "Para determinar el error de aproximación."], correctIndex: 1 },
        { question: "¿Qué es el 'Error de Truncamiento' en la aproximación?", options: ["El error generado por la limitación de la precisión de la máquina.", "El error al truncar los datos de entrada.", "El error que resulta de usar una aproximación (como un polinomio) en lugar de la función exacta.", "El error debido a la mala elección de los nodos."], correctIndex: 2 },
        { question: "¿Cuál es un beneficio clave de usar la forma de Newton del polinomio interpolador?", options: ["Es computacionalmente más lento.", "Permite añadir nuevos nodos fácilmente sin recalcular todo.", "Solo funciona para funciones pares.", "Siempre tiene menos error que Lagrange."], correctIndex: 1 },
        { question: "¿Qué se busca en la 'Aproximación por Mínimos Cuadrados'?", options: ["Un polinomio que pase exactamente por todos los puntos.", "Un polinomio que minimice la suma de las diferencias absolutas.", "Una línea o curva que minimice la suma de los cuadrados de los errores.", "Un polinomio de grado $n$ para $n$ puntos."], correctIndex: 2 },
        { question: "Si la función real es $f(x)$ y el polinomio es $P(x)$, ¿cuál es la fórmula general del error?", options: ["$E(x) = f'(x) - P'(x)$", "$E(x) = f(x) + P(x)$", "$E(x) = |f(x) - P(x)|$", "$E(x) = f(x) * P(x)$"], correctIndex: 2 },
        { question: "¿Qué tipo de aproximación es adecuada cuando se tienen muchos datos con cierto ruido (dispersión)?", options: ["Interpolación de Lagrange.", "Interpolación de Hermite.", "Aproximación por Mínimos Cuadrados.", "Diferencias Divididas."], correctIndex: 2 }
    ],
    MEDIUM: [
        { question: "¿Cuál es la principal desventaja computacional del método de Lagrange frente al de Newton?", options: ["Lagrange no puede interpolar funciones impares.", "Si se añade un nuevo punto, todo el polinomio de Lagrange debe ser recalculado desde cero.", "Lagrange requiere más memoria RAM.", "Lagrange solo funciona con nodos equidistantes."], correctIndex: 1 },
        { question: "¿Qué se requiere para que un conjunto de datos pueda ser interpolado por el método de Newton (Diferencias Divididas)?", options: ["Los nodos deben estar espaciados uniformemente.", "La función debe ser periódica.", "Los nodos deben ser distintos (no se requiere espaciado uniforme).", "Se requiere el conocimiento de las derivadas de la función."], correctIndex: 2 },
        { question: "Al usar interpolación inversa, ¿qué se busca?", options: ["Encontrar el valor de $y$ dado un valor de $x$.", "Encontrar el valor de $x$ dado un valor de $y$.", "Encontrar el polinomio derivado.", "Encontrar los nodos óptimos."], correctIndex: 1 },
        { question: "¿Qué representa el coeficiente $a_k$ en el polinomio de Newton?", options: ["El valor de la función en $x_k$.", "Una diferencia dividida de orden $k$.", "El error máximo de interpolación.", "El valor promedio de la función."], correctIndex: 1 },
        { question: "¿Cuál de estos métodos no requiere que los nodos sean equidistantes?", options: ["Lagrange y Newton.", "Diferencias Progresivas.", "Fórmulas de Stirling.", "Fórmulas de Bessel."], correctIndex: 0 },
        { question: "¿Cómo se construye un sistema de ecuaciones para encontrar los coeficientes de un polinomio en forma estándar ($P(x) = a_0 + a_1 x + \dots$)?", options: ["Usando la matriz identidad.", "Usando la matriz de Vandermonde.", "Usando el método de Gauss-Seidel.", "Usando la matriz Jacobiana."], correctIndex: 1 },
        { question: "¿Qué son los 'nodos' en el contexto de la interpolación?", options: ["Las raíces del polinomio.", "Los puntos de inflexión de la función.", "Los puntos de datos discretos $ (x_i, f(x_i)) $ que el polinomio debe atravesar.", "Los puntos donde el error es máximo."], correctIndex: 2 },
        { question: "¿Cuál es la relación entre el grado del polinomio de interpolación y el número de puntos usados?", options: ["Son siempre iguales.", "El grado es el doble del número de puntos.", "El grado máximo es $n-1$ para $n$ puntos.", "No hay relación directa."], correctIndex: 2 },
        { question: "En Mínimos Cuadrados, si usamos una recta ($y=a_0+a_1x$), ¿cuántas ecuaciones normales se deben resolver?", options: ["Una.", "Dos.", "Tres.", "Depende del número de puntos."], correctIndex: 1 },
        { question: "¿Cuándo es preferible el polinomio de Newton al de Lagrange?", options: ["Cuando la precisión no importa.", "Cuando se desea interpolar con pocos puntos.", "Cuando es posible que se necesite añadir más puntos de datos en el futuro.", "Nunca, Lagrange es siempre superior."], correctIndex: 2 }
    ],
    HARD: [
        { question: "¿Cuál es la principal limitación de la interpolación polinomial con muchos puntos, especialmente en nodos equidistantes?", options: ["El método de Newton falla.", "La matriz de Vandermonde es fácil de invertir.", "El Fenómeno de Runge (grandes oscilaciones cerca de los extremos del intervalo).", "El error siempre es cero."], correctIndex: 2 },
        { question: "¿Qué se puede hacer para mitigar el Fenómeno de Runge en la interpolación?", options: ["Usar siempre nodos equidistantes.", "Usar polinomios de mayor grado.", "Usar nodos de Chebyshev o aproximación por Splines.", "Reducir la precisión de la máquina."], correctIndex: 2 },
        { question: "La cota superior del error de truncamiento en la interpolación depende de la derivada de la función, ¿de qué orden es esta derivada?", options: ["De orden 1 (la primera derivada).", "De orden $n$, donde $n$ es el grado del polinomio.", "De orden $n+1$, donde $n$ es el grado del polinomio.", "No depende de ninguna derivada."], correctIndex: 2 },
        { question: "¿Qué condición de suavidad se impone en un Spline Cúbico Natural en los puntos extremos?", options: ["La primera derivada es cero.", "La segunda derivada es cero.", "La tercera derivada es cero.", "La función es continua."], correctIndex: 1 },
        { question: "¿Qué son los 'Polinomios de Chebyshev' en el contexto de la interpolación?", options: ["Polinomios que minimizan el error en el punto central.", "Polinomios que maximizan el error.", "Polinomios ortogonales que se utilizan para elegir los nodos óptimos y minimizar el error máximo (Fenómeno de Runge).", "Polinomios que se usan solo para integrar."], correctIndex: 2 },
        { question: "En el error de Mínimos Cuadrados, la minimización se realiza sobre $\sum(y_i - f(x_i))^2$. ¿Qué representa $f(x_i)$?", options: ["El valor real de la función.", "El valor de la aproximación (la curva o recta) en el punto $x_i$.", "La derivada de la función.", "El error absoluto."], correctIndex: 1 },
        { question: "¿Por qué el sistema de ecuaciones normales de Mínimos Cuadrados es a menudo mejor condicionado que la matriz de Vandermonde?", options: ["Porque siempre es simétrico y definido positivo, lo que facilita la solución numérica.", "Porque tiene menos incógnitas.", "Porque siempre es una matriz diagonal.", "No lo es, es peor condicionado."], correctIndex: 0 },
        { question: "¿Qué es la 'Extrapolación' y cuál es su riesgo en la interpolación polinomial de alto grado?", options: ["Estimar el valor dentro del rango, el riesgo es nulo.", "Estimar el valor fuera del rango de los nodos, el riesgo es una gran inestabilidad y error.", "Ajustar la curva a los puntos, el riesgo es que el polinomio sea constante.", "Encontrar la derivada, el riesgo es la ambigüedad."], correctIndex: 1 },
        { question: "¿Qué diferencia a la Interpolación de Hermite de la de Lagrange?", options: ["Hermite solo usa los valores de la función, no las derivadas.", "Hermite interpola usando solo las derivadas.", "Hermite interpola tanto los valores de la función como los valores de su derivada en los nodos.", "Hermite solo funciona para polinomios de grado 1."], correctIndex: 2 },
        { question: "¿Qué problema puede surgir al usar Mínimos Cuadrados con un polinomio de grado demasiado alto?", options: ["Siempre se ajusta perfectamente a los datos.", "Suele causar el Fenómeno de Runge.", "Puede conducir a un sobreajuste ('overfitting') de los datos, ajustando el ruido en lugar de la tendencia.", "El error es siempre el de la máquina."], correctIndex: 2 }
    ],
    VERY_HARD: [
        { question: "¿Cuál es el principal beneficio de usar 'Splines Cúbicos' sobre un solo polinomio de alto grado?", options: ["Reduce el número de cálculos.", "Garantiza la continuidad y la suavidad de las derivadas primera y segunda, eliminando las oscilaciones de Runge.", "Solo funciona para funciones lineales.", "No requiere el uso de nodos."], correctIndex: 1 },
        { question: "¿Qué significa que un Spline Cúbico tiene continuidad $C^2$?", options: ["La función es continua.", "La primera derivada es continua.", "La función, su primera y su segunda derivada son continuas en los nodos.", "Solo es continua en el primer y último punto."], correctIndex: 2 },
        { question: "¿Qué es un 'Spline Clamped' o Embridado?", options: ["Un spline donde todas las derivadas son cero.", "Un spline donde se especifican los valores de la primera derivada ($f'(x_0)$ y $f'(x_n)$) en los puntos extremos.", "Un spline que solo usa tres nodos.", "Un spline que no tiene segunda derivada continua."], correctIndex: 1 },
        { question: "En la aproximación de Mínimos Cuadrados, si queremos ajustar datos a una función exponencial $y = ae^{bx}$, ¿qué se debe hacer primero?", options: ["Usar interpolación de Lagrange.", "Linealizar la función tomando el logaritmo natural ($\ln y = \ln a + bx$).", "Usar una matriz de Vandermonde.", "Ajustar directamente con un polinomio."], correctIndex: 1 },
        { question: "¿Qué se entiende por 'ortogonalidad' en el contexto de la aproximación polinomial (por ejemplo, Polinomios de Legendre)?", options: ["Los polinomios son perpendiculares en el plano.", "Que la integral de su producto es cero bajo un cierto producto interior.", "Que la integral de su producto es cero bajo un cierto producto interior.", "Que solo tienen grados pares."], correctIndex: 1 },
        { question: "¿Cuál es la forma matricial del sistema de ecuaciones normales de Mínimos Cuadrados para una aproximación lineal?", options: ["$A\mathbf{x} = \mathbf{b}$ (donde $A$ es la matriz de Vandermonde).", "$A^T A \mathbf{c} = A^T \mathbf{y}$ (donde $\mathbf{c}$ son los coeficientes).", "Una matriz diagonal.", "Una matriz triangular superior."], correctIndex: 1 },
        { question: "¿Por qué se utiliza a menudo la Interpolación Cúbica de Hermite en gráficos por computadora y modelado CAD?", options: ["Porque es muy simple de calcular.", "Porque solo requiere un punto.", "Porque permite un control preciso sobre la posición y la dirección (tangente) de la curva en los nodos.", "Porque no tiene errores."], correctIndex: 2 },
        { question: "En la aproximación no lineal $y = a/(1+bx)$, ¿qué transformación se necesita para linealizarla y usar Mínimos Cuadrados?", options: ["Tomar la raíz cuadrada.", "Tomar el inverso de $y$ ($1/y = (1+bx)/a$).", "Tomar el logaritmo.", "No se puede linealizar."], correctIndex: 1 },
        { question: "¿Qué es el 'Spline de Akima' en comparación con el Spline Cúbico Natural?", options: ["Akima es menos suave.", "Akima utiliza un método local basado en cuatro puntos vecinos para estimar las pendientes, a menudo reduciendo los sobrepasos (overshoots) indeseados.", "Akima requiere que se conozcan las derivadas de segundo orden.", "Akima solo funciona con nodos equidistantes."], correctIndex: 1 },
        { question: "Si se utilizan 6 puntos para interpolar una función con la fórmula de Newton, ¿cuántas diferencias divididas de orden 5 se necesitan calcular?", options: ["Se necesitan 6.", "Se necesitan 5.", "Se necesita solo 1 (el coeficiente principal del polinomio).", "No se necesitan."], correctIndex: 2 }
    ]
};

const difficultyTimes = {
    EASY: 155,
    MEDIUM: 180,
    HARD: 178,
    VERY_HARD: 191
};

// =================================================================================
// 2. DOM ELEMENT REFERENCES
// =================================================================================

const body = document.body;
const introOverlay = document.getElementById('intro-overlay');
const introText = document.getElementById('intro-text');
const welcomeContainer = document.getElementById('welcome-container');
const startButton = document.getElementById('start-quiz-btn');
const difficultyScreen = document.getElementById('difficulty-screen');
const instructionsScreen = document.getElementById('instructions-screen');
const quizGameScreen = document.getElementById('quiz-game-screen');
const gameOverScreen = document.getElementById('game-over-screen');

const btnEasy = document.getElementById('btn-easy');
const btnMedium = document.getElementById('btn-medium');
const btnHard = document.getElementById('btn-hard');
const btnVeryHard = document.getElementById('btn-very-hard');
const allButtons = document.querySelectorAll('button');
const startTransmissionBtn = document.getElementById('start-transmission-btn');
const restartButton = document.getElementById('restart-btn');

const questionText = document.getElementById('question-text');
const answerOptionsContainer = document.getElementById('answer-options');
const currentDifficultyDisplay = document.getElementById('current-difficulty');
const timerElement = document.getElementById('timer');
const healthBar = document.getElementById('health-bar');
const gameMessage = document.getElementById('confirmation-message');

// Visual Effects & Overlays
const stormOverlay = document.getElementById('storm-overlay');
const transitionOverlay = document.getElementById('transition-overlay');
const titleElement = document.querySelector('#project-title h1');
const subtitleElement = document.querySelector('#project-title h2');
const bgCanvas = document.getElementById('rain-canvas');
const bgCtx = bgCanvas.getContext('2d');
const fgCanvas = document.getElementById('foreground-canvas');
const fgCtx = fgCanvas.getContext('2d');

// Minigame Elements
const dodgeMinigameContainer = document.getElementById('dodge-minigame-container');
const playerCharacter = document.getElementById('player-character');
const attackerCharacter = document.getElementById('attacker-character');
const warningSign = document.getElementById('warning-sign');
const inkPendulumContainer = document.getElementById('ink-pendulum-container');

// =================================================================================
// 3. GAME STATE VARIABLES
// =================================================================================

let currentQuestions = [];
let currentQuestionIndex = 0;
let playerHealth = 5;
let currentDifficultyKey = '';
let timerInterval = null;
let timeLeft = 0;

// Difficulty Mechanics State
let isFugitiveRound = false;
let isFugitiveGameActive = false;
let fugitiveButton = null;
let fugitiveMouseMoveHandler = null;
let fugitiveEscapes = 0; // Contador de huidas
let inkPendulumInterval = null;
let inkSplatInterval = null;
let isAttackSequenceRunning = false;
let playerLane = 'bottom';
let attackerLane = 'bottom';

// Visuals State
let animationRunning = true;
let isSnowing = false;
let isRainingInk = false;
let snowflakes = [];
let inkDrops = [];
let backgroundBlocks = [];
let foregroundBlocks = [];
let diamondState = 'default';

// =================================================================================
// 4. AUDIO MANAGEMENT
// =================================================================================

const audioIntro = document.getElementById('audio-intro');
const audioButtonClick = document.getElementById('audio-button-click');
const audioInstructions = document.getElementById('audio-instructions');
const audioGameOver = document.getElementById('audio-game-over');
const audioButtonHover = document.getElementById('audio-button-hover');
const audioCorrectAnswer = document.getElementById('audio-correct-answer');
const audioIncorrectAnswer = document.getElementById('audio-incorrect-answer');

const music = {
    EASY: document.getElementById('audio-music-easy'),
    MEDIUM: document.getElementById('audio-music-medium'),
    HARD: document.getElementById('audio-music-hard'),
    VERY_HARD: document.getElementById('audio-music-very-hard')
};

function playButtonClickSound() {
    if (audioButtonClick) {
        audioButtonClick.currentTime = 0;
        audioButtonClick.play();
    }
}

function playButtonHoverSound() {
    if (audioButtonHover) {
        audioButtonHover.currentTime = 0;
        audioButtonHover.play().catch(e => console.error("Error al reproducir hover:", e));
    }
}

function stopAllMusic() {
    Object.values(music).forEach(audio => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
}

function playAudioWithFadeIn(audioElement, duration = 1000) {
    if (!audioElement) return;
    audioElement.volume = 0;
    audioElement.currentTime = 0;
    audioElement.play().catch(e => console.error("Error al reproducir audio:", e));

    let currentVolume = 0;
    const intervalTime = 50;
    const fadeSteps = duration / intervalTime;
    const volumeIncrement = 1 / fadeSteps;

    const fadeInterval = setInterval(() => {
        currentVolume += volumeIncrement;
        if (currentVolume >= 1) {
            audioElement.volume = 1;
            clearInterval(fadeInterval);
        } else {
            audioElement.volume = currentVolume;
        }
    }, intervalTime);
}

// =================================================================================
// 5. CORE GAME LOGIC
// =================================================================================

function startGame(difficultyKey) {
    currentDifficultyKey = difficultyKey; // Set difficulty first

    cleanupAllMechanics(); // Ensure a clean slate before starting
    stopAllMusic();

    // Start difficulty-specific mechanics
    if (difficultyMechanics[difficultyKey] && difficultyMechanics[difficultyKey].setup) {
        difficultyMechanics[difficultyKey].setup();
    }

    const currentMusic = music[difficultyKey];
    if (currentMusic) {
        if (difficultyKey === 'EASY' || difficultyKey === 'MEDIUM' || difficultyKey === 'HARD') {
            currentMusic.volume = 0.7;
        } else {
            currentMusic.volume = 1.0;
        }
        currentMusic.play().catch(e => console.error("Error al reproducir música de fondo:", e));
    }

    currentDifficultyKey = difficultyKey;
    currentQuestions = quizData[difficultyKey];
    currentQuestionIndex = 0;
    playerHealth = 5;
    updateHealthBar();

    stopTimer();
    timeLeft = difficultyTimes[difficultyKey] || 180;
    if (timerElement) {
        timerElement.textContent = formatTime(timeLeft);
        timerElement.classList.remove('timer-warning');
    }
    timerInterval = setInterval(updateTimer, 1000);

    const bgMap = { EASY: 'bg-easy', MEDIUM: 'bg-medium', HARD: 'bg-hard', VERY_HARD: 'bg-extreme' };
    body.className = '';
    if (bgMap[difficultyKey]) body.classList.add(bgMap[difficultyKey]);

    const themeMap = { EASY: 'theme-easy', MEDIUM: 'theme-medium', HARD: 'theme-hard', VERY_HARD: 'theme-extreme' };
    if (quizGameScreen) {
        quizGameScreen.className = 'hidden';
        if (themeMap[difficultyKey]) quizGameScreen.classList.add(themeMap[difficultyKey]);
    }

    if (quizGameScreen) quizGameScreen.classList.remove('hidden');

    const displayNames = { EASY: 'FÁCIL - SABER', MEDIUM: 'MEDIO - APRENDER', HARD: 'DIFÍGIL - LUCHAR', VERY_HARD: 'EXTREMO - VIVIR' };
    if (currentDifficultyDisplay) currentDifficultyDisplay.textContent = `DIFICULTAD: ${displayNames[difficultyKey]}`;

    showQuestion();
}

function showQuestion() {
    if (!questionText || !answerOptionsContainer) return;

    isFugitiveRound = (currentDifficultyKey === 'EASY'); // Siempre activo en modo Fácil

    if (currentQuestionIndex >= currentQuestions.length) {
        handleGameWin();
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    questionText.innerHTML = q.question;

    const buttons = answerOptionsContainer.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        const newBtn = btn.cloneNode(true);
        const answerTextSpan = newBtn.querySelector('.answer-text');
        if (answerTextSpan && q.options[index]) {
            answerTextSpan.innerHTML = q.options[index];
        }

        newBtn.classList.remove('correct', 'incorrect');
        newBtn.disabled = false;
        const eyes = newBtn.querySelector('.fugitive-eyes');
        if (answerTextSpan) answerTextSpan.style.display = 'flex';
        if (eyes) eyes.style.display = 'none';

        btn.parentNode.replaceChild(newBtn, btn);
    });

    const newButtons = answerOptionsContainer.querySelectorAll('.answer-btn');
    newButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => selectAnswer(index));
    });
}

function selectAnswer(selectedIndex) {
    if (isFugitiveGameActive) {
        return;
    }

    const q = currentQuestions[currentQuestionIndex];
    const buttons = Array.from(answerOptionsContainer.querySelectorAll('.answer-btn'));
    const isCorrect = (selectedIndex === q.correctIndex);

    // Let the current difficulty mechanic handle the answer if it needs to.
    const mechanicHandled = difficultyMechanics[currentDifficultyKey]?.handleAnswer?.(isCorrect, buttons, selectedIndex);
    if (mechanicHandled) {
        return; // The mechanic took over.
    }

    buttons.forEach(btn => btn.disabled = true);
    buttons[q.correctIndex].classList.add('correct');
    if (!isCorrect) {
        buttons[selectedIndex].classList.add('incorrect');
    }

    if (isCorrect) {
        if (audioCorrectAnswer) audioCorrectAnswer.play();
        gainHealth();
        if (gameMessage) gameMessage.querySelector('p').textContent = "¡Correcto! El flujo de datos es estable.";
    } else {
        if (audioIncorrectAnswer) audioIncorrectAnswer.play();
        loseHealth();
        if (currentDifficultyKey === 'VERY_HARD') {
            body.classList.add('screen-float');
            body.addEventListener('animationend', () => body.classList.remove('screen-float'), { once: true });
        }
    }

    if (gameMessage) {
        gameMessage.classList.remove('hidden');
        gameMessage.classList.add('visible');
    }

    setTimeout(() => {
        if (gameMessage) {
            gameMessage.classList.add('hidden');
            gameMessage.classList.remove('visible');
        }
        if (playerHealth > 0) {
            currentQuestionIndex++;
            showQuestion();
        }
    }, 1800);
}

function updateHealthBar() {
    if (!healthBar) return;
    healthBar.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const block = document.createElement('div');
        block.classList.add('health-block');
        if (i >= playerHealth) {
            block.classList.add('lost');
        }
        healthBar.appendChild(block);
    }
}

function gainHealth() {
    if (playerHealth < 5) {
        playerHealth++;
        updateHealthBar();
    }
}

function loseHealth() {
    if (playerHealth > 0) {
        playerHealth--;
        updateHealthBar();
        if (playerHealth === 0) {
            if (gameMessage) gameMessage.querySelector('p').textContent = "ERROR CRÍTICO: ¡Sistema fallido! GAME OVER.";
            gameOver();
        } else {
            if (gameMessage) gameMessage.querySelector('p').textContent = "¡Error! La señal se ha corrompido. Vida perdida.";
        }
    }
}

function updateTimer() {
    timeLeft--;
    if (timerElement) timerElement.textContent = formatTime(timeLeft);
    if (timeLeft <= 10 && timeLeft > 0) {
        if (timerElement) timerElement.classList.add('timer-warning');
    }
    if (timeLeft <= 0) {
        stopTimer();
        if (gameMessage) gameMessage.querySelector('p').textContent = "¡SE ACABÓ EL TIEMPO! La tormenta te ha alcanzado.";
        gameOver();
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    secs = secs < 10 ? '0' + secs : secs;
    return `${minutes}:${secs}`;
}

function handleGameWin() {
    stopTimer();
    stopAllMusic();
    isRainingInk = false;
    if (quizGameScreen) quizGameScreen.classList.add('hidden');
    if (gameMessage) {
        gameMessage.querySelector('p').textContent = "¡VICTORIA! Has dominado la Aproximación Polinomial.";
        gameMessage.classList.remove('hidden');
        gameMessage.classList.add('visible');
    }
    setTimeout(() => {
        if (gameMessage) gameMessage.classList.add('hidden');
        resetGame(false);
        difficultyScreen.classList.remove('hidden');
        difficultyScreen.classList.add('fade-in');
    }, 4000);
}

function gameOver() {
    stopTimer();
    stopAllMusic();
    cleanupAllMechanics();

    playAudioWithFadeIn(audioGameOver, 1500);
    if (quizGameScreen) quizGameScreen.classList.add('hidden');
    if (gameOverScreen) gameOverScreen.classList.remove('hidden');
    diamondState = 'red';
    isSnowing = true;
}

function resetGame(fullReset = true) {
    stopAllMusic();
    stopTimer();
    cleanupAllMechanics();

    playerHealth = 5;
    currentQuestionIndex = 0;
    currentQuestions = [];
    currentDifficultyKey = '';

    body.className = '';
    diamondState = 'default';
    isSnowing = false;
    updateHealthBar();

    if (fullReset) {
        Object.values(music).forEach(audio => { if(audio) audio.currentTime = 0; });
        if (audioIntro) audioIntro.currentTime = 0;
        if (audioInstructions) audioInstructions.currentTime = 0;
        if (audioGameOver) audioGameOver.currentTime = 0;

        if (gameOverScreen) gameOverScreen.classList.add('hidden');
        difficultyScreen.classList.remove('hidden');
        difficultyScreen.classList.add('fade-in');
    }
}

// =================================================================================
// 6. UI & VISUAL EFFECTS
// =================================================================================

function runIntroSequence() {
    initSnow();
    isSnowing = true;
    setTimeout(() => {
        if (introText) introText.classList.add('visible');
    }, 1000);
    setTimeout(() => {
        if (introOverlay) {
            introOverlay.style.opacity = 0;
            introOverlay.addEventListener('transitionend', () => {
                introOverlay.classList.add('hidden');
            }, { once: true });
        }
    }, 5000);
}

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function handleTransition(callback) {
    transitionOverlay.classList.add('visible');
    await wait(500);
    if (callback) callback();
    transitionOverlay.classList.remove('visible');
    await wait(500);
}

function activateLightning() {
    stormOverlay.style.transition = 'none';
    stormOverlay.style.opacity = '0.98';
    body.classList.add('shaking');
    titleElement.classList.add('diamond-glow');
    startButton.classList.add('diamond-glow');

    setTimeout(() => {
        stormOverlay.style.transition = 'opacity 0.8s ease-out';
        stormOverlay.style.opacity = '0';
        body.classList.remove('shaking');
        titleElement.classList.remove('diamond-glow');
        startButton.classList.remove('diamond-glow');
        scheduleNextLightning();
    }, 200);
}

function scheduleNextLightning() {
    const delay = Math.random() * (10000 - 5000) + 5000;
    setTimeout(activateLightning, delay);
}

class GlowingBlock {
    constructor(x, y, size, speed) {
        this.x = x; this.y = y; this.size = size; this.speed = speed;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.brightness = Math.random() * 0.5 + 0.5;
    }
    draw(ctx, isBackground, color) {
        const finalOpacity = this.opacity * this.brightness;
        let blockColor;
        switch (color) {
            case 'light': blockColor = `rgba(200, 255, 255, ${finalOpacity * 1.5})`; break;
            case 'gold': blockColor = `rgba(255, 215, 0, ${finalOpacity})`; break;
            case 'red': blockColor = `rgba(255, 0, 0, ${finalOpacity})`; break;
            case 'purple': blockColor = `rgba(170, 0, 255, ${finalOpacity})`; break;
            default: blockColor = `rgba(0, 255, 255, ${finalOpacity})`;
        }
        if (isBackground) {
            const gradientRadius = this.size * 10 * this.brightness;
            const gradient = ctx.createRadialGradient(this.x + this.size / 2, this.y + this.size / 2, 0, this.x + this.size / 2, this.y + this.size / 2, gradientRadius);
            gradient.addColorStop(0, blockColor.replace(/[^,]+(?=\))/, '0.1'));
            gradient.addColorStop(1, blockColor.replace(/[^,]+(?=\))/, '0'));
            ctx.fillStyle = gradient;
            ctx.fillRect(this.x - gradientRadius, this.y - gradientRadius, gradientRadius * 2, gradientRadius * 2);
        }
        ctx.fillStyle = blockColor;
        ctx.shadowBlur = this.size * this.brightness * 1.5;
        ctx.shadowColor = blockColor.replace(/[^,]+(?=\))/, '0.5');
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.shadowBlur = 0;
    }
    update(canvasHeight, canvasWidth) {
        this.y += this.speed;
        if (this.y > canvasHeight) {
            this.y = -this.size;
            this.x = Math.random() * canvasWidth;
        }
    }
}

class Snowflake {
    constructor() {
        this.x = Math.random() * fgCanvas.width; this.y = Math.random() * fgCanvas.height;
        this.radius = Math.random() * 2 + 1; this.speed = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.5;
    }
    draw(ctx) {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = 10; ctx.shadowColor = 'white';
        ctx.fill(); ctx.closePath(); ctx.shadowBlur = 0;
    }
    update(canvasHeight) {
        this.y += this.speed;
        if (this.y > canvasHeight) {
            this.y = 0;
            this.x = Math.random() * fgCanvas.width;
        }
    }
}

class InkDrop {
    constructor() {
        this.x = Math.random() * fgCanvas.width; this.y = Math.random() * -fgCanvas.height;
        this.speed = Math.random() * 4 + 2; this.radius = Math.random() * 5 + 4;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(10, 10, 10, ${this.opacity})`;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        const highlightX = this.x - this.radius * 0.2;
        const highlightY = this.y - this.radius * 0.3;
        const highlightRadius = this.radius * 0.4;
        ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
        ctx.arc(highlightX, highlightY, highlightRadius, 0, Math.PI * 2);
        ctx.fill();
    }
    update(canvasHeight) {
        this.y += this.speed;
        if (this.y > canvasHeight) {
            this.y = -this.radius;
            this.x = Math.random() * fgCanvas.width;
        }
    }
}

function initBlocks() {
    bgCanvas.width = window.innerWidth; bgCanvas.height = window.innerHeight;
    fgCanvas.width = window.innerWidth; fgCanvas.height = window.innerHeight;
    backgroundBlocks = []; foregroundBlocks = [];
    const numBlocks = 100;
    for (let i = 0; i < numBlocks; i++) {
        const size = Math.random() * 10 + 5; const x = Math.random() * bgCanvas.width;
        const y = Math.random() * bgCanvas.height; const speed = Math.random() * 2 + 1;
        const block = new GlowingBlock(x, y, size, speed);
        (Math.random() > 0.3) ? backgroundBlocks.push(block) : foregroundBlocks.push(block);
    }
}

function initSnow(count = 150) {
    snowflakes = [];
    for (let i = 0; i < count; i++) snowflakes.push(new Snowflake());
}

function initInkRain(count = 100) {
    inkDrops = [];
    for (let i = 0; i < count; i++) inkDrops.push(new InkDrop());
}

function animateCanvas() {
    if (!animationRunning) return;
    requestAnimationFrame(animateCanvas);
    bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
    fgCtx.clearRect(0, 0, fgCanvas.width, fgCanvas.height);

    for (let block of backgroundBlocks) {
        block.update(bgCanvas.height, bgCanvas.width);
        block.draw(bgCtx, true, diamondState);
    }
    for (let block of foregroundBlocks) {
        block.update(fgCanvas.height, fgCanvas.width);
        block.draw(fgCtx, false, diamondState);
    }
    if (isSnowing) {
        for (let flake of snowflakes) {
            flake.update(fgCanvas.height);
            flake.draw(fgCtx);
        }
    }
    if (isRainingInk) {
        for (let drop of inkDrops) {
            drop.update(fgCanvas.height);
            drop.draw(fgCtx);
        }
    }
}

// =================================================================================
// 7. DIFFICULTY-SPECIFIC MECHANICS
// =================================================================================

let activeMechanics = {};

const difficultyMechanics = {
    EASY: {
        isFugitiveGameActive: false,
        fugitiveButton: null,
        originalButton: null, // Guardar referencia al botón original
        fugitiveMouseMoveHandler: null,
        nervousAnimation: null,
        fugitiveEscapes: 0,

        setup: function() {
            activeMechanics['EASY'] = this;
        },

        handleAnswer: function(isCorrect, buttons, selectedIndex) {
            if (isCorrect) {
                this.startFugitiveGame(buttons[selectedIndex], buttons);
                return true; // Indicates that the mechanic handled the action.
            }
            return false;
        },

        startFugitiveGame: function(button, allButtons) {
            this.isFugitiveGameActive = true;
            this.fugitiveEscapes = 0;
            this.originalButton = button; // Guardar el original

            const fugitiveClone = button.cloneNode(true);
            this.fugitiveButton = fugitiveClone; // El clon es el fugitivo

            this.originalButton.style.visibility = 'hidden'; // Ocultar el original

            allButtons.forEach(btn => {
                if (btn !== button) {
                    gsap.to(btn, { opacity: 0.5, duration: 0.3 });
                    btn.disabled = true;
                }
            });

            const buttonRect = button.getBoundingClientRect(); // Use original button's position
            const text = fugitiveClone.querySelector('.answer-text');
            const eyes = fugitiveClone.querySelector('.fugitive-eyes');

            gsap.to(text, { opacity: 0, duration: 0.2, onComplete: () => {
                text.style.display = 'none';
                eyes.style.display = 'flex';
                gsap.fromTo(eyes, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.3 });
            }});

            fugitiveClone.classList.add('fugitive');
            document.body.appendChild(fugitiveClone);

            gsap.set(fugitiveClone, {
                position: 'fixed',
                left: buttonRect.left,
                top: buttonRect.top,
                width: buttonRect.width,
                height: buttonRect.height,
                x: 0, y: 0
            });

            this.fugitiveMouseMoveHandler = (e) => this.handleFugitiveChase(e);
            window.addEventListener('mousemove', this.fugitiveMouseMoveHandler);
            fugitiveClone.addEventListener('click', () => this.endFugitiveGame(false), { once: true });
        },

        handleFugitiveChase: function(e) {
            if (!this.isFugitiveGameActive || this.isEscaping) return;
            const btn = this.fugitiveButton;
            const rect = btn.getBoundingClientRect();
            const distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));

            if (distance < 50 && this.fugitiveEscapes < 3) {
                this.isEscaping = true;
                this.fugitiveEscapes++;
                if (this.nervousAnimation) this.nervousAnimation.kill();

                const newPos = this.getFarthestPosition(e.clientX, e.clientY);
                gsap.to(btn, {
                    x: newPos.x, y: newPos.y, scale: 1, duration: 0.4, ease: 'power3.out',
                    onComplete: () => {
                        this.isEscaping = false;
                        if (this.fugitiveEscapes >= 3) {
                            window.removeEventListener('mousemove', this.fugitiveMouseMoveHandler);
                            if (this.nervousAnimation) this.nervousAnimation.kill();
                            gsap.to(btn, { scale: 1, x: '+=0', y: '+=0', duration: 0.2 });
                        }
                    }
                });
            } else if (distance < 200) {
                if (!this.nervousAnimation || !this.nervousAnimation.isActive()) {
                    this.nervousAnimation = gsap.to(btn, { x: 'random(-5, 5)', y: 'random(-5, 5)', scale: 0.9, duration: 0.1, repeat: -1, yoyo: true, ease: 'power1.inOut' });
                }
            } else {
                if (this.nervousAnimation) {
                    this.nervousAnimation.kill();
                    this.nervousAnimation = null;
                    gsap.to(btn, { scale: 1, duration: 0.2 });
                }
            }
        },

        getFarthestPosition: function(mouseX, mouseY) {
            const margin = 50;
            const btnRect = this.fugitiveButton.getBoundingClientRect();
            let bestX = 0, bestY = 0, maxDist = 0;
            for (let i = 0; i < 8; i++) {
                const x = Math.random() * (window.innerWidth - btnRect.width - margin * 2) + margin;
                const y = Math.random() * (window.innerHeight - btnRect.height - margin * 2) + margin;
                if (Math.hypot(x - mouseX, y - mouseY) > maxDist) {
                    maxDist = Math.hypot(x - mouseX, y - mouseY);
                    bestX = x; bestY = y;
                }
            }
            return { x: bestX - btnRect.left, y: bestY - btnRect.top };
        },

        endFugitiveGame: function(isReset) {
            if (!this.isFugitiveGameActive) return;
            this.isFugitiveGameActive = false;
            window.removeEventListener('mousemove', this.fugitiveMouseMoveHandler);
            if (this.nervousAnimation) this.nervousAnimation.kill();

            const fugitiveClone = this.fugitiveButton; // Guardar referencia al clon

            if (fugitiveClone && fugitiveClone.parentNode === document.body) {
                if (isReset) {
                    fugitiveClone.remove();
                } else {
                    gsap.to(fugitiveClone, { opacity: 0, scale: 0, duration: 0.3, onComplete: () => fugitiveClone.remove() });
                }
            }

            if (this.originalButton) {
                this.originalButton.style.visibility = 'visible';
            }

            this.fugitiveButton = null;
            this.originalButton = null;

            if (isReset) {
                showQuestion();
                return;
            }

            if (audioCorrectAnswer) audioCorrectAnswer.play();
            gainHealth();
            gameMessage.querySelector('p').textContent = "¡Lo atrapaste! Flujo de datos estable.";
            gameMessage.classList.remove('hidden');
            gameMessage.classList.add('visible');
            setTimeout(() => {
                gameMessage.classList.add('hidden');
                currentQuestionIndex++;
                showQuestion();
            }, 1800);
        },

        cleanup: function() {
            if (this.isFugitiveGameActive) {
                this.endFugitiveGame(true);
            }
            if (this.originalButton) {
                this.originalButton.style.visibility = 'visible';
            }
            this.isFugitiveGameActive = false;
            this.originalButton = null;
        }
    },

    MEDIUM: {
        inkSplatInterval: null,
        inkPendulumInterval: null,

        setup: function() {
            activeMechanics['MEDIUM'] = this;
            isRainingInk = true;
            initInkRain();
            this.inkSplatInterval = setInterval(this.triggerInkSplat, 3000);
            this.inkPendulumInterval = setInterval(this.triggerInkPendulumAnimation, 18000);
        },

        triggerInkPendulumAnimation: function() {
            const inkPendulum = document.getElementById('ink-pendulum');
            if (inkPendulum && !inkPendulum.classList.contains('animate')) {
                inkPendulum.classList.add('animate');
                inkPendulum.addEventListener('animationend', () => inkPendulum.classList.remove('animate'), { once: true });
            }
        },

        triggerInkSplat: function() {
            if (difficultyMechanics.EASY.isFugitiveGameActive) return;
            const answerButtons = Array.from(answerOptionsContainer.querySelectorAll('.answer-btn:not(.ink-stain-effect)'));
            if (answerButtons.length > 0) {
                const randomButton = answerButtons[Math.floor(Math.random() * answerButtons.length)];
                randomButton.classList.add('ink-stain-effect');
                setTimeout(() => randomButton.classList.remove('ink-stain-effect'), 5000);
            }
        },

        cleanup: function() {
            isRainingInk = false;
            clearInterval(this.inkSplatInterval);
            clearInterval(this.inkPendulumInterval);
            this.inkSplatInterval = null;
            this.inkPendulumInterval = null;
        }
    },

    HARD: {
        setup: function() { activeMechanics['HARD'] = this; },
        cleanup: function() { /* Lógica para limpiar mecánicas de HARD */ }
    },

    VERY_HARD: {
        setup: function() { activeMechanics['VERY_HARD'] = this; },
        cleanup: function() { /* Lógica para limpiar mecánicas de VERY_HARD */ }
    }
};

function cleanupAllMechanics() {
    isRainingInk = false; // Global visual effect
    for (const key in activeMechanics) {
        if (activeMechanics[key].cleanup) {
            activeMechanics[key].cleanup();
        }
    }
    activeMechanics = {};
}

// =================================================================================
// 8. INITIALIZATION & EVENT LISTENERS
// =================================================================================

function setupDifficultyHover(button, state, bgClass) {
    button.addEventListener('mouseenter', () => {
        diamondState = state;
        if (bgClass) body.classList.add(bgClass);
        if (gameMessage) {
            gameMessage.querySelector('p').textContent = "¿Estás seguro que quieres jugar con esta dificultad?";
            gameMessage.classList.remove('hidden');
            gameMessage.classList.add('visible');
        }
    });
    button.addEventListener('mouseleave', () => {
        diamondState = 'default';
        if (bgClass) body.classList.remove(bgClass);
        if (gameMessage) {
            gameMessage.classList.remove('visible');
            gameMessage.classList.add('hidden');
        }
    });
};

function setupDifficultyClick(button, difficultyKey) {
    button.addEventListener('click', async () => {
        currentDifficultyKey = difficultyKey;
        if (audioIntro) {
            audioIntro.pause();
            audioIntro.currentTime = 0;
        }
        await handleTransition(() => {
            difficultyScreen.classList.add('hidden');
            instructionsScreen.classList.remove('hidden');
            if (audioInstructions) audioInstructions.play();
        });
    });
};

startTransmissionBtn.addEventListener('click', async () => {
    await handleTransition(() => {
        if (audioInstructions) {
            audioInstructions.pause();
            audioInstructions.currentTime = 0;
        }
        instructionsScreen.classList.add('hidden');
        quizGameScreen.classList.remove('hidden');
        startGame(currentDifficultyKey);
    });
});

window.addEventListener('load', () => {
    initBlocks();
    animateCanvas();
    runIntroSequence();
    updateHealthBar();
    scheduleNextLightning();
    dodgeMinigameContainer.classList.add('hidden');
});

window.addEventListener('resize', initBlocks);

startButton.addEventListener('click', () => {
    if (audioIntro) audioIntro.play().catch(console.error);
    welcomeContainer.classList.add('fade-out');
    setTimeout(() => {
        welcomeContainer.classList.add('hidden');
        difficultyScreen.classList.remove('hidden');
        difficultyScreen.classList.add('fade-in');
    }, 500);
});

setupDifficultyClick(btnEasy, 'EASY');
setupDifficultyClick(btnMedium, 'MEDIUM');
setupDifficultyClick(btnHard, 'HARD');
setupDifficultyClick(btnVeryHard, 'VERY_HARD');

setupDifficultyHover(btnEasy, 'light');
setupDifficultyHover(btnMedium, 'gold', 'medium-hover-bg');
setupDifficultyHover(btnHard, 'red', 'hard-hover-bg');
setupDifficultyHover(btnVeryHard, 'purple', 'very-hard-hover-bg');

restartButton.addEventListener('click', () => resetGame(true));

allButtons.forEach(button => {
    button.addEventListener('click', playButtonClickSound);
    if (!button.classList.contains('answer-btn')) {
        button.addEventListener('mouseenter', playButtonHoverSound);
    }
});

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && currentDifficultyKey === 'VERY_HARD' && !quizGameScreen.classList.contains('hidden')) {
        e.preventDefault();
        // Llama a la función dentro de la mecánica activa
        if (activeMechanics.VERY_HARD) {
            activeMechanics.VERY_HARD.switchPlayerLane();
        }
    }
});
