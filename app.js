const AppConfig = {
    name: "MiApp",
    version: "1.0.0",
    apiUrl: "https://api.miapp.com",
    routes: {
        login: "login/index.html",
        signup: "signup/index.html", 
        error: "error/index.html",
        dashboard:"dashboard/index.html"
    }
};

// Funciones  globales

const Utils = {
    // Navegación entre páginas
    navigateTo(page) {
        if (AppConfig.routes[page]) {
            window.location.href = AppConfig.routes[page];
        } else {
            window.location.href = `${page}/index.html`;
        }
    },

     // Mostrar notificaciones
    showToast(message, classes = 'rounded') {
        M.toast({html: message, classes: classes});
    },
    
    // Validaciones
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Animaciones
    animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.animation = 'fadeIn 0.6s ease-in forwards';
            }
        });
    }
};

// Hacer funciones disponibles globalmente
window.navigateTo = Utils.navigateTo;
window.showToast = Utils.showToast;
window.validateEmail = Utils.validateEmail;

// Event listeners globales
window.addEventListener('scroll', Utils.animateOnScroll);
window.addEventListener('load', Utils.animateOnScroll);
