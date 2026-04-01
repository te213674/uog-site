// ===== 3D Molecule Animation (H2S - Hydrogen Sulfide) =====
const canvas = document.getElementById('moleculeCanvas');
if (!canvas) {
    console.log('Canvas not found - skipping animation');
} else {
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

// ===== Mobile Menu =====
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav');

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burgerMenu.classList.remove('active');
    });
});

// ===== Language Switcher =====
const langSwitcher = document.querySelector('.lang-switcher');
let currentLang = localStorage.getItem('language') || 'ru';

if (langSwitcher) {
    langSwitcher.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    
    langSwitcher.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        localStorage.setItem('language', currentLang);
        langSwitcher.textContent = currentLang === 'ru' ? 'EN' : 'RU';
    });
}

// ===== Calculator =====
function calculateCost() {
    const capacity = parseFloat(document.getElementById('calcCapacity').value);
    const h2s = parseFloat(document.getElementById('calcH2S').value);
    const hours = parseFloat(document.getElementById('calcHours').value);
    
    if (!capacity || !h2s || !hours) {
        alert('Введите корректные значения');
        return;
    }
    
    // Base price calculation (ориентировочная стоимость базовой установки)
    // УОГ-20: ~2 млн руб (базовая цена)
    // Коэффициент масштабирования от производительности
    const basePrice = 2000000; // 2 млн руб за УОГ-20
    const baseCapacity = 20;
    
    // Расчёт стоимости на основе производительности
    const capacityFactor = Math.pow(capacity / baseCapacity, 0.7); // economies of scale
    let estimatedPrice = basePrice * capacityFactor;
    
    // Корректировка по содержанию H2S
    const h2sFactor = 1 + (h2s - 0.5) * 0.1;
    estimatedPrice *= h2sFactor;
    
    // Применяем коэффициент 3 (по требованию пользователя)
    estimatedPrice *= 3;
    
    // Operating cost (себестоимость 1 нм³ очистки)
    // Базовая себестоимость + зависимость от содержания H2S и часов работы
    const baseOperatingCost = 0.5; // базовая стоимость руб/нм³
    
    // Коэффициент режима работы (чем меньше часов, тем выше удельные затраты на пуск/останов)
    const modeFactor = hours < 4000 ? 1.3 : hours < 6000 ? 1.15 : 1.0;
    
    // Себестоимость зависит от содержания H2S и режима работы
    const operatingCostPerNm3 = (baseOperatingCost + (h2s * 0.4)) * modeFactor;
    
    // Recommended model
    const model = getRecommendedModel(capacity);
    
    // Format functions
    const formatCurrency = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + ' млн ₽';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(0) + ' тыс. ₽';
        }
        return num.toFixed(0) + ' ₽';
    };
    
    const formatOperatingCost = (num) => {
        return num.toFixed(2) + ' ₽/нм³';
    };
    
    // Update results with animation
    animateValue('costUOG', formatCurrency(estimatedPrice));
    animateValue('operatingCost', formatOperatingCost(operatingCostPerNm3));
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
        alert(`Спасибо! Файл "${fileName}" отправлен. Мы свяжемся with вами в ближайшее время.`);
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
    initMolecule();
    
    // Calculate default values
    setTimeout(() => {
        calculateCost();
    }, 500);
});

// Console info
console.log('%c SorbGaz UOG Website', 'color: #06b6d4; font-size: 20px; font-weight: bold;');
console.log('%c Contact: +7 (831) 280-81-46 | www.sorbgaz.ru', 'color: #94a3b8; font-size: 12px;');
}
