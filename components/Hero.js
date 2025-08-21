const Hero = {
    render(config = {}) {
        const {
            title = "Bienvenido a BestMilk",
            subtitle = "La plataforma perfecta para gestionar tus proyectos de manera eficiente y colaborativa",
            } = config;
        
        return `
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col s12">
                            <div class="hero-content">
                                <h1 class="hero-title">${title}</h1>
                                <p class="hero-subtitle"> ${subtitle} </p>
                                
                                <div class="hero-buttons">
                                    <a href="#" class="btn btn-hero btn-primary waves-effect waves-light">
                                        <i class="material-icons left">rocket_launch</i>
                                        Comenzar Ahora
                                    </a>
                                    <a href="#" class="btn btn-hero btn-secondary waves-effect waves-light">
                                        <i class="material-icons left">play_circle_outline</i>
                                        Ver Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
};