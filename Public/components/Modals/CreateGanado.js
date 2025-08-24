  // Initialize Materialize components
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize modals
            var modals = document.querySelectorAll('.modal');
            M.Modal.init(modals);
            
            // Initialize select dropdowns
            var selects = document.querySelectorAll('select');
            M.FormSelect.init(selects);
            
            // Initialize floating action button
            var actionButtons = document.querySelectorAll('.fixed-action-btn');
            M.FloatingActionButton.init(actionButtons);

            // Form submission handler
            document.getElementById('form-nuevo-ganado').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(this);
                const ganadoData = {};
                
                for (let [key, value] of formData.entries()) {
                    ganadoData[key] = value;
                }
                
                // Add timestamp
                ganadoData.fecha_registro = new Date().toISOString();
                
                // Here you would typically send the data to your backend
                console.log('Datos del ganado a registrar:', ganadoData);
                
                // Show success message
                M.toast({
                    html: '<i class="material-icons left">check_circle</i>Ganado registrado exitosamente',
                    classes: 'green',
                    displayLength: 4000
                });
                
                // Close modal and reset form
                var modalInstance = M.Modal.getInstance(document.getElementById('modal-nuevo-ganado'));
                modalInstance.close();
                this.reset();
                
                // Reinitialize selects after reset
                setTimeout(() => {
                    var selects = document.querySelectorAll('select');
                    M.FormSelect.init(selects);
                }, 100);
                
                // In a real application, you would make an AJAX call here:
                /*
                fetch('/api/ganado', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ganadoData)
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    // Update the dashboard with new data
                })
                .catch((error) => {
                    console.error('Error:', error);
                    M.toast({html: 'Error al registrar el ganado', classes: 'red'});
                });
                */
            });
        });