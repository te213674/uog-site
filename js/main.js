// ===== 3D Molecule Animation (H2S - Hydrogen Sulfide) =====
const canvas = document.getElementById('moleculeCanvas');
if (canvas) {
const ctx = canvas.getContext('2d');

let width, height;
let animationId;

// Molecule structure: H2S (one sulfur, two hydrogen atoms)
// Увеличенная и более прозрачная версия
const molecule = {
    rotation: { x: 0, y: 0, z: 0 },
    atoms: [
        { type: 'S', x: 0, y: 0, z: 0, radius: 60, color: '#fbbf24', opacity: 0.5 }, // Sulfur (yellow) - увеличенный
        { type: 'H', x: -70, y: -55, z: 0, radius: 28, color: '#e2e8f0', opacity: 0.4 }, // Hydrogen 1 - увеличенный
        { type: 'H', x: 70, y: -55, z: 0, radius: 28, color: '#e2e8f0', opacity: 0.4 }  // Hydrogen 2 - увеличенный
    ],
    bonds: [
        { from: 0, to: 1 }, // S-H bond 1
        { from: 0, to: 2 }  // S-H bond 2
    ]
};

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

// 3D rotation functions
function rotateX(point, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: point.x,
        y: point.y * cos - point.z * sin,
        z: point.y * sin + point.z * cos
    };
}

function rotateY(point, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: point.x * cos + point.z * sin,
        y: point.y,
        z: -point.x * sin + point.z * cos
    };
}

function rotateZ(point, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return {
        x: point.x * cos - point.y * sin,
        y: point.x * sin + point.y * cos,
        z: point.z
    };
}

function project(point) {
    const fov = 500;
    const scale = fov / (fov + point.z);
    return {
        x: point.x * scale + width / 2,
        y: point.y * scale + height / 2,
        scale: scale
    };
}

function drawAtom(atom, projected) {
    const radius = atom.radius * projected.scale;
    const opacity = atom.opacity || 0.5;
    
    // Outer glow (очень прозрачный)
    const glowGradient = ctx.createRadialGradient(
        projected.x, projected.y, 0,
        projected.x, projected.y, radius * 3
    );
    glowGradient.addColorStop(0, atom.color + '20');
    glowGradient.addColorStop(0.5, atom.color + '10');
    glowGradient.addColorStop(1, 'transparent');
    
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, radius * 3, 0, Math.PI * 2);
    ctx.fillStyle = glowGradient;
    ctx.fill();
    
    // Main atom (более прозрачный для объёмности)
    const atomGradient = ctx.createRadialGradient(
        projected.x - radius * 0.25, projected.y - radius * 0.25, 0,
        projected.x, projected.y, radius
    );
    atomGradient.addColorStop(0, 'rgba(255, 255, 255, ' + (opacity * 0.8) + ')');
    atomGradient.addColorStop(0.4, atom.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'));
    atomGradient.addColorStop(1, atom.color + '30');
    
    ctx.beginPath();
    ctx.arc(projected.x, projected.y, radius, 0, Math.PI * 2);
    ctx.fillStyle = atomGradient;
    ctx.fill();
    
    // Inner highlight (для объёма)
    const highlightGradient = ctx.createRadialGradient(
        projected.x - radius * 0.3, projected.y - radius * 0.3, 0,
        projected.x - radius * 0.15, projected.y - radius * 0.15, radius * 0.5
    );
    highlightGradient.addColorStop(0, 'rgba(255, 255, 255, ' + (opacity * 0.6) + ')');
    highlightGradient.addColorStop(1, 'transparent');
    
    ctx.beginPath();
    ctx.arc(projected.x - radius * 0.2, projected.y - radius * 0.2, radius * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = highlightGradient;
    ctx.fill();
}

function drawBond(from, to, color) {
    // Outer glow (прозрачный)
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = color + '30';
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // Main bond
    const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
    gradient.addColorStop(0, color + '50');
    gradient.addColorStop(0.5, color + '60');
    gradient.addColorStop(1, color + '50');
    
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 12;
    ctx.lineCap = 'round';
    ctx.stroke();
    
    // Inner highlight (для объёма)
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Update rotation (медленнее для плавности)
    molecule.rotation.y += 0.003;
    molecule.rotation.x += 0.0015;
    
    // Transform atoms
    const transformedAtoms = molecule.atoms.map(atom => {
        let point = { x: atom.x, y: atom.y, z: atom.z };
        point = rotateX(point, molecule.rotation.x);
        point = rotateY(point, molecule.rotation.y);
        point = rotateZ(point, molecule.rotation.z);
        return { ...atom, ...point };
    });
    
    // Project atoms
    const projectedAtoms = transformedAtoms.map(atom => ({
        ...atom,
        ...project({ x: atom.x, y: atom.y, z: atom.z })
    }));
    
    // Sort by z-depth for proper rendering
    projectedAtoms.sort((a, b) => b.z - a.z);
    
    // Draw bonds first
    molecule.bonds.forEach(bond => {
        const from = projectedAtoms.find((_, i) => i === bond.from);
        const to = projectedAtoms.find((_, i) => i === bond.to);
        if (from && to) {
            drawBond(from, to, '#64748b');
        }
    });
    
    // Draw atoms
    projectedAtoms.forEach(atom => {
        drawAtom(atom, atom);
    });
    
    // Draw floating particles
    drawParticles();
    
    animationId = requestAnimationFrame(animate);
}

// Floating particles (более прозрачные)
const particles = [];

function initParticles() {
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            z: Math.random() * 500,
            size: Math.random() * 2 + 1,
            speed: Math.random() * 0.3 + 0.1
        });
    }
}

function drawParticles() {
    particles.forEach(p => {
        p.y -= p.speed;
        if (p.y < 0) p.y = height;
        
        const alpha = 0.15 + (p.z / 500) * 0.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 54, 93, ${alpha})`;
        ctx.fill();
    });
}

// Initialize 3D animation
function initMolecule() {
    resize();
    initParticles();
    animate();
}

window.addEventListener('resize', resize);
}

// ===== Mobile Menu =====
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav');

    // Сброс меню при загрузке страницы
    if (nav) nav.classList.remove('active');
    if (burgerMenu) burgerMenu.classList.remove('active');

    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
            burgerMenu.classList.toggle('active');
        });
    }

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (nav) nav.classList.remove('active');
            if (burgerMenu) burgerMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav && nav.classList.contains('active')) {
            if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
                nav.classList.remove('active');
                burgerMenu.classList.remove('active');
            }
        }
    });
});

// ===== Language Switcher =====
const langSwitcher = document.querySelector('.lang-switcher');

// Sanitize and validate language value from localStorage
function getSafeLanguage() {
    const stored = localStorage.getItem('language');
    const allowed = ['ru', 'en'];
    // Validate: must be one of allowed values, or default to 'ru'
    return (stored && allowed.includes(stored)) ? stored : 'ru';
}

let currentLang = getSafeLanguage();

if (langSwitcher) {
    langSwitcher.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    
    langSwitcher.addEventListener('click', () => {
        // Only allow switching between 'ru' and 'en', no arbitrary values possible
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('language', currentLang);
        langSwitcher.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    });
}

// ===== Calculator =====
function calculateCost() {
    console.log('calculateCost вызвана');
    
    const capacity = parseFloat(document.getElementById('calcCapacity').value); // нм³/час
    const h2s = parseFloat(document.getElementById('calcH2S').value); // г/м³
    const hours = parseFloat(document.getElementById('calcHours').value); // часов в год
    const elecPrice = parseFloat(document.getElementById('calcElecPrice').value); // ₽/кВт·ч
    const salary = parseFloat(document.getElementById('calcSalary').value); // ₽/мес
    
    console.log('capacity:', capacity, 'h2s:', h2s, 'hours:', hours, 'elecPrice:', elecPrice, 'salary:', salary);
    
    if (!capacity || !h2s || !hours || isNaN(elecPrice) || isNaN(salary)) {
        alert('Введите корректные значения');
        console.log('Ошибка валидации');
        return;
    }
    
    // ===== СТОИМОСТЬ УСТАНОВКИ =====
    // Матрица цен (базовые цены из Excel)
    const priceMatrix = [
        { cap: 20, price: 2000000 },
        { cap: 100, price: 3500000 },
        { cap: 200, price: 4500000 },
        { cap: 500, price: 7000000 },
        { cap: 1000, price: 11000000 },
        { cap: 1500, price: 14000000 },
        { cap: 2500, price: 19000000 },
        { cap: 5000, price: 32000000 }
    ];

    // Линейная интерполяция для базовой цены
    let basePrice = 0;
    if (capacity <= priceMatrix[0].cap) {
        basePrice = priceMatrix[0].price;
    } else if (capacity >= priceMatrix[priceMatrix.length - 1].cap) {
        // Экстраполяция для больших объемов
        const last = priceMatrix[priceMatrix.length - 1];
        const prev = priceMatrix[priceMatrix.length - 2];
        const slope = (last.price - prev.price) / (last.cap - prev.cap);
        basePrice = last.price + slope * (capacity - last.cap);
    } else {
        for (let i = 0; i < priceMatrix.length - 1; i++) {
            if (capacity >= priceMatrix[i].cap && capacity <= priceMatrix[i + 1].cap) {
                const p1 = priceMatrix[i];
                const p2 = priceMatrix[i + 1];
                const fraction = (capacity - p1.cap) / (p2.cap - p1.cap);
                basePrice = p1.price + fraction * (p2.price - p1.price);
                break;
            }
        }
    }

    // Коэффициент H2S (линейная зависимость)
    const h2sFactor = 1 + (h2s / 10);

    // Итоговая стоимость (базовая * коэфф H2S * 6 (текущие цены))
    const estimatedPrice = basePrice * h2sFactor * 6;
    
    // ===== СЕБЕСТОИМОСТЬ 1 нм³ =====
    // Константы
    const SOLUTION_PRICE = 80; // ₽/кг (фиксированная скрытая цена раствора)
    const STAFF = 2; // человек
    
    // 1. РАСТВОР (реагент)
    // Расход на реакцию: 2.5 кг раствора на 1 кг серы
    // Сера (кг/ч) = Объем (нм3/ч) * H2S (г/нм3) / 1000
    const sulfurPerHour = (capacity * h2s) / 1000;
    const solutionForReactionPerHour = sulfurPerHour * 2.5;
    
    // Расход на унос: 0.01 кг на 1 нм3 газа
    const solutionCarryoverPerHour = capacity * 0.01;
    
    const totalSolutionPerHour = solutionForReactionPerHour + solutionCarryoverPerHour;
    const solutionCostPerHour = totalSolutionPerHour * SOLUTION_PRICE;
    const solutionPerNm3 = solutionCostPerHour / capacity;
    
    // 2. ЭЛЕКТРИЧЕСТВО
    // Линейная зависимость мощности насосов от объема (0.034 кВт на 1 нм3/ч)
    // Для 500 нм3/ч это даст 17 кВт
    const POWER_PER_NM3 = 0.034;
    const power = capacity * POWER_PER_NM3; // кВт
    
    const elecCostPerHour = power * elecPrice;
    const elecPerNm3 = elecCostPerHour / capacity;
    
    // 3. ЗАРПЛАТА
    const salaryMonthly = STAFF * salary;
    // Считаем стоимость зарплаты на 1 нм3 исходя из среднемесячной выработки
    const monthlyHours = hours / 12;
    const monthlyVolume = capacity * monthlyHours;
    const salaryPerNm3 = salaryMonthly / monthlyVolume;
    
    // ИТОГО
    const totalPerNm3 = solutionPerNm3 + elecPerNm3 + salaryPerNm3;
    
    // Рекомендуемая модель
    const model = getRecommendedModel(capacity);
    
    // Формат вывода
    const formatCurrency = (num) => {
        if (num >= 1000000) return (num / 1000000).toFixed(1) + ' млн ₽';
        else if (num >= 1000) return (num / 1000).toFixed(0) + ' тыс. ₽';
        return num.toFixed(0) + ' ₽';
    };
    
    const formatPerNm3 = (num) => num.toFixed(2) + ' ₽/нм³';
    
    // Обновляем результаты
    animateValue('costUOG', formatCurrency(estimatedPrice));
    animateValue('costSolution', formatPerNm3(solutionPerNm3));
    animateValue('costElec', formatPerNm3(elecPerNm3));
    animateValue('costSalary', formatPerNm3(salaryPerNm3));
    animateValue('operatingCost', formatPerNm3(totalPerNm3));
    animateValue('recommendedModel', model);
}

function getRecommendedModel(capacity) {
    if (capacity <= 20) return 'УОГ-20';
    if (capacity <= 100) return 'УОГ-100';
    if (capacity <= 200) return 'УОГ-200';
    if (capacity <= 500) return 'УОГ-500';
    if (capacity <= 1500) return 'УОГ-1500';
    if (capacity <= 2500) return 'УОГ-2500';
    return 'УОГ-5000';
}

function animateValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = value;
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 100);
    }
}

// ===== Analysis Modal =====
function openAnalysisModal() {
    const modal = document.getElementById('analysisModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAnalysisModal() {
    const modal = document.getElementById('analysisModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeAnalysisModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAnalysisModal();
    }
});

// ===== Analysis Form =====
const analysisForm = document.getElementById('analysisForm');
if (analysisForm) {
    analysisForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(analysisForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Validate
        if (!data.name || !data.phone || !data.email || !data.file) {
            alert('Заполните обязательные поля');
            return;
        }
        
        // Show file name
        const fileName = data.file.name || 'файл';
        
        // Success
        alert(`Спасибо! Файл "${fileName}" отправлен. Мы свяжемся с вами в ближайшее время.`);
        analysisForm.reset();
        closeAnalysisModal();
        console.log('Analysis form data:', data);
    });
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {};
        
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Validate
        if (!data.name || !data.phone || !data.email) {
            alert('Заполните обязательные поля');
            return;
        }
        
        // Success
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
        console.log('Form data:', data);
    });
}

// ===== Header Scroll Effect =====
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 1)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.model-card, .project-card, .process-step, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Calculate default values
    setTimeout(() => {
        calculateCost();
    }, 500);
});

// Console info
console.log('%c SorbGaz UOG Website', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%c Contact: +7 (831) 280-81-46 | www.sorbgaz.ru', 'color: #94a3b8; font-size: 12px;');
