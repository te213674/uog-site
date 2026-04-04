// ===== Production Page Video Carousel =====

const videos = [
    { src: 'reference/УОГ 5000/УОГ видео/УОГ блок управления 20200809.mp4', title: '🎬 Блок управления' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ вид внутри контейнеров 20200809.mp4', title: '🏭 Вид внутри контейнеров' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ вид с контейнера 20200809.mp4', title: '📦 Вид с контейнера' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ вид со стороны колонн 20200809.mp4', title: '⚙️ Вид со стороны колонн' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ работа блока управления 20200809.mp4', title: '🖥️ Работа блока управления' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ работа табло 20200809.mp4', title: '📊 Работа табло' },
    { src: 'reference/УОГ 5000/УОГ видео/УОГ табло управления 20200809.mp4', title: '🎛️ Табло управления' }
];

let currentIndex = 0;

function goToVideo(index) {
    currentIndex = index;
    updateVideo();
}

function prevVideo() {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length;
    updateVideo();
}

function nextVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    updateVideo();
}

function loadVideo() {
    const video = document.getElementById('mainVideo');
    const placeholder = document.getElementById('videoPlaceholder');
    if (!video) return;
    
    // Переносим src из data-src в src
    const source = video.querySelector('source');
    if (source && source.dataset.src) {
        source.src = source.dataset.src;
        video.load();
    }
    
    // Скрываем плейсхолдер
    if (placeholder) {
        placeholder.style.display = 'none';
    }
}

function updateVideo() {
    const video = document.getElementById('mainVideo');
    const title = document.getElementById('videoTitle');
    const currentNum = document.getElementById('currentNum');
    const thumbs = document.querySelectorAll('.carousel-thumb');
    const placeholder = document.getElementById('videoPlaceholder');
    
    if (!video || !title || !currentNum) return;
    
    // Показываем плейсхолдер при смене видео
    if (placeholder) {
        placeholder.style.display = 'flex';
    }
    
    video.querySelector('source').src = videos[currentIndex].src;
    video.load();
    title.textContent = videos[currentIndex].title;
    currentNum.textContent = currentIndex + 1;
    
    thumbs.forEach((thumb, i) => {
        if (i === currentIndex) {
            thumb.classList.add('active');
            thumb.style.borderColor = 'var(--color-primary)';
            thumb.style.background = 'white';
        } else {
            thumb.classList.remove('active');
            thumb.style.borderColor = 'transparent';
            thumb.style.background = 'var(--color-bg-alt)';
        }
    });
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevVideo();
    if (e.key === 'ArrowRight') nextVideo();
});

// ===== Comparison Page Calculator =====

function calculateSavings() {
    const capacity = parseFloat(document.getElementById('calcCapacity').value);
    const hours = parseFloat(document.getElementById('calcHours').value);
    
    if (!capacity || !hours) {
        alert('Введите корректные значения');
        return;
    }
    
    const annualVolume = capacity * hours;
    const uogCost = 1.35; // руб/нм³
    const sulfurexCost = 2.5; // руб/нм³
    
    const uogTotal = annualVolume * uogCost;
    const sulfurexTotal = annualVolume * sulfurexCost;
    const savings = sulfurexTotal - uogTotal;
    
    const formatCurrency = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + ' млн ₽/год';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + ' тыс. ₽/год';
        }
        return num.toFixed(0) + ' ₽/год';
    };
    
    document.getElementById('savingsValue').textContent = formatCurrency(savings);
}

// ===== Калькулятор себестоимости 1 нм³ =====

function calculateOperatingCost() {
    const volume = parseFloat(document.getElementById('costVolume').value); // нм³/час
    const h2s = parseFloat(document.getElementById('costH2S').value); // г/м³
    const elecPrice = parseFloat(document.getElementById('costElectricity').value); // ₽/кВт·ч
    
    if (!volume || !h2s || !elecPrice) {
        alert('Введите корректные значения');
        return;
    }
    
    // Константы
    const SOLUTION_PRICE = 98; // ₽/кг
    const SOLUTION_LOSS = 38; // кг/сут (потери раствора)
    const POWER = 150; // кВт
    const STAFF = 2; // человек
    const SALARY = 30000; // ₽/мес
    
    // Расчёты за месяц (30 дней)
    const monthlyHours = 24 * 30; // 720 часов
    const monthlyVolume = volume * monthlyHours; // нм³/мес
    
    // 1. Раствор: пропорционально содержанию H2S
    const solutionDaily = SOLUTION_LOSS * (h2s / 2); // кг/сут (пропорция от 2 г/м³)
    const solutionMonthlyCost = solutionDaily * 30 * SOLUTION_PRICE;
    const solutionPerNm3 = solutionMonthlyCost / monthlyVolume;
    
    // 2. Электричество
    const elecMonthly = POWER * monthlyHours; // кВт·ч/мес
    const elecMonthlyCost = elecMonthly * elecPrice;
    const elecPerNm3 = elecMonthlyCost / monthlyVolume;
    
    // 3. Зарплата
    const salaryMonthly = STAFF * SALARY;
    const salaryPerNm3 = salaryMonthly / monthlyVolume;
    
    // Итого
    const totalPerNm3 = solutionPerNm3 + elecPerNm3 + salaryPerNm3;
    
    const formatPerNm3 = (num) => num.toFixed(1) + ' ₽';
    
    // Вывод результатов
    document.getElementById('costPerNm3').textContent = formatPerNm3(totalPerNm3);
    document.getElementById('costSolution').textContent = formatPerNm3(solutionPerNm3);
    document.getElementById('costElec').textContent = formatPerNm3(elecPerNm3);
    document.getElementById('costSalary').textContent = formatPerNm3(salaryPerNm3);
}
