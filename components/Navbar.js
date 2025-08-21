const Navbar = {
    render() {
        return `
            <div class="navbar-fixed">
                <nav>
                    <div class="nav-wrapper">
                    <a href="#" class="brand-logo grey-text text-darken-3"><img class="responsive-img" src="../assets/images/best_milk_main.png"></a>
                            <a href="#" data-target="mobile-demo" class="sidenav-trigger grey-text text-darken-3">
                                <i class="material-icons">menu</i>
                            </a>
                            <ul class="right hide-on-med-and-down">
                                <li><a href="#" onclick="navigateTo('login')" class="grey-text text-darken-1">Iniciar Sesión</a></li>
                                <li><a href="#" onclick="navigateTo('signup')" class="btn indigo darken-1 white-text">Registrarse</a></li>
                            </ul>
                        </div>
                </nav>
            </div>

            <ul class="sidenav blue lighten-5" id="mobile-demo" >
              <li>
                <div class="user-view">
                     <div class="background"><img src="./assets/images/BovinosN.jpg"></div>
                        <a href="#user"><img class="circle" src="./assets/images/BovinosN.jpg"></a>
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#" onclick="navigateTo('')">Home</a></li>
                <li><a href="#" onclick="navigateTo('login')">Iniciar Sesión</a></li>
                <li><a href="#" onclick="navigateTo('signup')">Registrarse</a></li>
                <li><a href="#" onclick="navigateTo('dashboard')">Dashboard</a></li>

                <li><div class="divider"></div></li>
                <li><a href="#" onclick="navigateTo('setting')">Contac</a></li>
                <li><a href="#" onclick="navigateTo('setting')">Help</a></li>
                <li><a href="#" onclick="navigateTo('setting')">Settings</a></li>
            </ul>
        `;
    },

    init() {
        // Inicializar sidenav después de renderizar
        setTimeout(() => {
            const sidenavElems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(sidenavElems);
        }, 100);
    }
};