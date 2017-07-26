/**
 * 
 * toast.js v1.0
 * @author Guilherme Modugno - https://modugno.github.io 
 * 
 */
class Toast {

	/**
	 * Success Message
	 */
	static success(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'success');
	}

	/**
	 * Error Message
	 */
	static error(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'error');
	}

	/**
	 * Info Message
	 */
	static info(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'info');
	}

	/**
	 * Warning Message
	 */
	static warning(msg) {
		window.event.preventDefault();
		this._createToast(msg, 'warning');
	}

	/**
	 * Create Toast
	 * @param  String msg        Message Text
	 * @param  String toastClass css class to be use
	 */
	static _createToast(msg, toastClass) {

		this._createContainer();
		
		// create toast
		this.toast = document.createElement('div');
		this.toast.classList.add('toast');
		this.toast.textContent = msg;

		// add to toast container
		this.toastContainer.appendChild(this.toast);

		// add css class toast
		this.toast.classList.add('show', 'toast-' + toastClass);

		setTimeout(() => {
			// get all toast from screen
			let allToast = document.querySelectorAll('.toast');

			// remove toast
			allToast[0].classList.remove('show');
			allToast[0].parentNode.removeChild(allToast[0]);
			
		}, 5000);

	}

	/**
	 * Create ToastContainer
	 * @return void
	 */
	static _createContainer() {
		// pega o container no DOM
		this.toastContainer = document.querySelector('#toast-container');

		// Does not exist, create one
		if (this.toastContainer == null) {
			this.toastContainer = document.createElement('div');
			this.toastContainer.id = 'toast-container';
			document.body.appendChild(this.toastContainer);
		}
	}

}