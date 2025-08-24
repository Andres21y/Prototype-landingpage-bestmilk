export function cattleRegistrationForm() {
    const formHTML = `
                <div class="container dairy-container">
                    <div class="row">
                        <div class="col s12 l10 offset-l1">
                            <div class="card">
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <i class="material-icons">local_drink</i>
                                        Registro de Ganado Lechero
                                    </h4>
                                    
                                    <form id="dairyCattleForm">
                                        <!-- Información Básica del Animal -->
                                        <h5 class="section-header">
                                            <i class="material-icons left dairy-icon">pets</i>
                                            Información Básica del Animal
                                        </h5>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m6">
                                                <input id="cattle_id" type="text" class="validate" required>
                                                <label for="cattle_id">ID del Animal Lechero *</label>
                                                <span class="helper-text">Código único (ej: VL001)</span>
                                            </div>
                                            
                                            <div class="input-field col s12 m6">
                                                <input id="name" type="text" class="validate">
                                                <label for="name">Nombre de la Vaca</label>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m4">
                                                <select id="breed" required>
                                                    <option value="" disabled selected>Seleccionar raza lechera</option>
                                                    <option value="holstein">Holstein</option>
                                                    <option value="jersey">Jersey</option>
                                                    <option value="brown_swiss">Pardo Suizo</option>
                                                    <option value="guernsey">Guernsey</option>
                                                    <option value="ayrshire">Ayrshire</option>
                                                    <option value="shorthorn">Shorthorn Lechero</option>
                                                    <option value="normando">Normando</option>
                                                </select>
                                                <label>Raza Lechera *</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m4">
                                                <input id="birth_date" type="date" class="validate" required>
                                                <label for="birth_date">Fecha de Nacimiento *</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m4">
                                                <input id="weight" type="number" step="0.1" class="validate">
                                                <label for="weight">Peso Actual (kg)</label>
                                            </div>
                                        </div>
                                        
                                        <!-- Información Reproductiva -->
                                        <h5 class="section-header">
                                            <i class="material-icons left dairy-icon">favorite</i>
                                            Información Reproductiva
                                        </h5>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m6">
                                                <select id="reproductive_status">
                                                    <option value="" disabled selected>Estado reproductivo</option>
                                                    <option value="novilla">Novilla (sin parir)</option>
                                                    <option value="gestante">Gestante</option>
                                                    <option value="lactante">Lactante</option>
                                                    <option value="seca">Seca</option>
                                                    <option value="vacia">Vacía</option>
                                                </select>
                                                <label>Estado Reproductivo</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m6">
                                                <input id="last_calving" type="date" class="validate">
                                                <label for="last_calving">Último Parto</label>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m4">
                                                <input id="total_calvings" type="number" min="0" class="validate">
                                                <label for="total_calvings">Número de Partos</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m4">
                                                <input id="expected_calving" type="date" class="validate">
                                                <label for="expected_calving">Próximo Parto Esperado</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m4">
                                                <input id="insemination_date" type="date" class="validate">
                                                <label for="insemination_date">Última Inseminación</label>
                                            </div>
                                        </div>
                                        
                                        <!-- Información de Producción Lechera -->
                                        <h5 class="section-header">
                                            <i class="material-icons left dairy-icon">local_drink</i>
                                            Producción Lechera
                                        </h5>
                                        
                                        <div class="milk-stats">
                                            <div class="row">
                                                <div class="input-field col s12 m4">
                                                    <input id="daily_milk_production" type="number" step="0.1" class="validate">
                                                    <label for="daily_milk_production">Producción Diaria (litros)</label>
                                                </div>
                                                
                                                <div class="input-field col s12 m4">
                                                    <input id="lactation_days" type="number" min="0" class="validate">
                                                    <label for="lactation_days">Días en Lactancia</label>
                                                </div>
                                                
                                                <div class="input-field col s12 m4">
                                                    <input id="peak_production" type="number" step="0.1" class="validate">
                                                    <label for="peak_production">Pico de Producción (litros)</label>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="input-field col s12 m6">
                                                    <input id="milk_fat_percentage" type="number" step="0.01" min="0" max="10" class="validate">
                                                    <label for="milk_fat_percentage">% Grasa en Leche</label>
                                                </div>
                                                
                                                <div class="input-field col s12 m6">
                                                    <input id="milk_protein_percentage" type="number" step="0.01" min="0" max="10" class="validate">
                                                    <label for="milk_protein_percentage">% Proteína en Leche</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Información de Salud -->
                                        <h5 class="section-header">
                                            <i class="material-icons left dairy-icon">local_hospital</i>
                                            Salud y Manejo
                                        </h5>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m6">
                                                <select id="health_status">
                                                    <option value="" disabled selected>Estado de salud</option>
                                                    <option value="excelente">Excelente</option>
                                                    <option value="bueno">Bueno</option>
                                                    <option value="regular">Regular</option>
                                                    <option value="tratamiento">En Tratamiento</option>
                                                </select>
                                                <label>Estado de Salud</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m6">
                                                <input id="last_vaccination" type="date" class="validate">
                                                <label for="last_vaccination">Última Vacunación</label>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m6">
                                                <input id="body_condition_score" type="number" step="0.1" min="1" max="5" class="validate">
                                                <label for="body_condition_score">Condición Corporal (1-5)</label>
                                                <span class="helper-text">Escala de 1 (muy flaca) a 5 (muy gorda)</span>
                                            </div>
                                            
                                            <div class="input-field col s12 m6">
                                                <select id="milking_frequency">
                                                    <option value="" disabled selected>Frecuencia de ordeño</option>
                                                    <option value="2x">2 veces al día</option>
                                                    <option value="3x">3 veces al día</option>
                                                    <option value="automatico">Ordeño automático</option>
                                                </select>
                                                <label>Frecuencia de Ordeño</label>
                                            </div>
                                        </div>
                                        
                                        <!-- Ubicación y Manejo -->
                                        <h5 class="section-header">
                                            <i class="material-icons left dairy-icon">location_on</i>
                                            Ubicación y Manejo
                                        </h5>
                                        
                                        <div class="row">
                                            <div class="input-field col s12 m6">
                                                <input id="location" type="text" class="validate">
                                                <label for="location">Potrero/Establo</label>
                                            </div>
                                            
                                            <div class="input-field col s12 m6">
                                                <select id="feeding_system">
                                                    <option value="" disabled selected>Sistema de alimentación</option>
                                                    <option value="pastoreo">Pastoreo</option>
                                                    <option value="semi_estabulado">Semi-estabulado</option>
                                                    <option value="estabulado">Estabulado</option>
                                                    <option value="mixto">Sistema Mixto</option>
                                                </select>
                                                <label>Sistema de Alimentación</label>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <textarea id="observations" class="materialize-textarea"></textarea>
                                                <label for="observations">Observaciones Especiales</label>
                                                <span class="helper-text">Notas sobre comportamiento, tratamientos, etc.</span>
                                            </div>
                                        </div>
                                        
                                        <!-- Botones -->
                                        <div class="row" style="margin-top: 2rem;">
                                            <div class="col s12 center-align">
                                                <button class="btn btn-dairy waves-effect waves-light" type="submit">
                                                    <i class="material-icons left">save</i>
                                                    Registrar Vaca Lechera
                                                </button>
                                                <button class="btn-flat waves-effect" type="button" onclick="resetDairyForm()" style="margin-left: 1rem;">
                                                    <i class="material-icons left">refresh</i>
                                                    Limpiar Formulario
                                                </button>
                                            </div>
                                        </div>
                                        
                                        <div class="success-message" id="successMessage">
                                            <i class="material-icons left">check_circle</i>
                                            ¡Vaca lechera registrada exitosamente! Los datos han sido guardados en el sistema.
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

    return {
        html: formHTML,
        init: initializeDairyForm,
        submit: handleDairyFormSubmit,
        reset: resetDairyForm,
        validate: validateDairyForm,
        getData: getDairyFormData
    };
}