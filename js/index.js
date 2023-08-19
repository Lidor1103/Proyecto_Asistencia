document.addEventListener('DOMContentLoaded', function () {
    const verContraseña = document.querySelector('#verContraseña');
    const contraseña = document.querySelector('#Contraseña');

    verContraseña.addEventListener('click', function () {
        if (contraseña.type === 'password') {
            contraseña.type = 'text';
            verContraseña.classList.remove("fa-eye")
            verContraseña.classList.add("fa-eye-slash")
        } else {
            contraseña.type = 'password';
            verContraseña.classList.remove("fa-eye-slash");
            verContraseña.classList.add("fa-eye");
        }
    });
});



function validarFormulario() {
	const correo = document.getElementById('Correo electrónico').value;
	const contraseña = document.getElementById('Contraseña').value;

	if (correo === '' || contraseña === '') {
		alert('Faltan datos, por favor complete todos los campos antes de enviar el formulario.');
		return false;
	}
    const completoCaptcha = grecaptcha.getResponse();
    if (completoCaptcha === ''){
        alert('Por favor, complete el reCaptcha.');
        return false;
    }
	return true;
}


