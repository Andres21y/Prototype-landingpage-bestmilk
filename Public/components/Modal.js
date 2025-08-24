const ModalComponent = {
    render(config = {}) {
        const {
            id = "defaultModal",
            icon = "info",
            title = "Información",
            content = "Contenido del modal",
            buttons = [
                { text: "Cerrar", class: "modal-close btn-flat waves-effect waves-light grey-text" }
            ]
        } = config;
        
        const buttonsHTML = buttons.map(btn => `
            <a href="#" class="${btn.class}" ${btn.onclick ? `onclick="${btn.onclick}"` : ''}>
                ${btn.text}
            </a>
        `).join('');
        
        return `
            <div id="${id}" class="modal">
                <div class="modal-content">
                    <i class="material-icons modal-icon">${icon}</i>
                    <h4>${title}</h4>
                    <p>${content}</p>
                </div>
                <div class="modal-footer center-align">
                    ${buttonsHTML}
                </div>
            </div>
        `;
    },
    
    init(modalId = "defaultModal") {
        setTimeout(() => {
            const modalElem = document.getElementById(modalId);
            if (modalElem) {
                M.Modal.init(modalElem);
            }
        }, 100);
    },
    
    show(modalId = "defaultModal") {
        const instance = M.Modal.getInstance(document.getElementById(modalId));
        if (instance) {
            instance.open();
        }
    }
};