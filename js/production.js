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

function updateVideo() {
    const video = document.getElementById('mainVideo');
    const title = document.getElementById('videoTitle');
    const currentNum = document.getElementById('currentNum');
    const thumbs = document.querySelectorAll('.carousel-thumb');
    
    if (!video || !title || !currentNum) return;
    
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
