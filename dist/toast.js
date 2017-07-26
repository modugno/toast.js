/**
 * 
 * toast.js v1.0
 * @author Guilherme Modugno - https://modugno.github.io 
 * 
 */
class Toast {

	/**
	 * Mensagem de Sucesso
	 */
	static success(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'success');
	}

	/**
	 * Mensagem de Erro
	 */
	static error(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'error');
	}

	/**
	 * Mensagem de Informação
	 */
	static info(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'info');
	}

	/**
	 * Mensagem de Avisos
	 */
	static warning(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'warning');
	}

	/**
	 * Cria o Toast
	 * @param  {[type]} msg        Mensagem a ser exibida
	 * @param  {[type]} toastClass classe para ser utilizada
	 */
	static _createToast(msg, toastClass) {

		// cria o container
		this._createContainer();
		
		// cria o toast
		this.toast = document.createElement('div');
		this.toast.classList.add('toast');
		this.toast.textContent = msg;

		// adiciona o toast ao container
		this.toastContainer.appendChild(this.toast);

		// adiciona a classe de exibição no toast
		this.toast.classList.add('show', 'toast-' + toastClass);

		setTimeout(() => {
			// pega todos os toats da tela
			let allToast = document.querySelectorAll('.toast');

			// remove da tela
			allToast[0].classList.remove('show');
			allToast[0].parentNode.removeChild(allToast[0]);
			
		}, 5000);

	}

	/**
	 * Cria o ToastContainer
	 * @return {[type]} [description]
	 */
	static _createContainer() {
		// pega o container no DOM
		this.toastContainer = document.querySelector('#toast-container');

		// se ele não existir, cria um
		if (this.toastContainer == null) {
			this.toastContainer = document.createElement('div');
			this.toastContainer.id = 'toast-container';
			document.body.appendChild(this.toastContainer);
		}
	}

}