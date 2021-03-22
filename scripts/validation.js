let callForm = document.querySelector('.call-form');
let submit = callForm.querySelector('.form__button');

let fields = callForm.querySelectorAll('.js-field');

// Добавляем обработчик клика на кнопку отправки формы
  submit.addEventListener('click', function(e) {

	let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    // Пройдёмся по всем полям
	// for (let i = 0; i < fields.length; i++) {

	  // let field = fields[i];

      if (name.checkValidity() == false) {
        // let validity = field.validity;

		name.classList.add('invalid-field');

          if (name.validity.patternMismatch) {
            let message = 'Это неверный формат. Используйте только буквы русского алфавита.'
            name.insertAdjacentHTML('afterend', '<p class="error-message">' + message + '</p>');

            }
      }
      if (phone.checkValidity() == false) {

		phone.classList.add('invalid-field');

         if (phone.validity.patternMismatch) {
            let message = 'Это неверный формат. Введите номер одним числом или с пробелами или тире в качестве разделителя'
            phone.insertAdjacentHTML('afterend', '<p class="error-message">' + message + '</p>');

            }

        stopSubmit = true;
	  } // закончился if
  // закончился цикл

	if (stopSubmit) {
	  e.preventDefault();
	}

  });
