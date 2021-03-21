let callForm = document.querySelector('.call-form');
let submit = callForm.querySelector('.form__button');
// let name = callForm.getElementById('name');
// let phone = callForm.getElementById('phone');

let fields = callForm.querySelectorAll('.js-field');

function CustomValidation() { }

CustomValidation.prototype = {
	// Установим пустой массив сообщений об ошибках
	invalidities: [],

	// Метод, проверяющий валидность
	checkValidity: function(field) {

	  let validity = field.validity;

	  if (!field.value.match('^[А-Яа-яЁё\s]+$')) {
		this.addInvalidity('Only cyrillic letters are required');
	  }

	  if (!field.value.match('^[\d+\s|\-]+$')) {
		this.addInvalidity('Only numbers are required');
	  }


	  // И остальные проверки валидности...
	},

	// Добавляем сообщение об ошибке в массив ошибок
	addInvalidity: function(message) {
	  this.invalidities.push(message);
	  console.log(invalidities);
	},

	// Получаем общий текст сообщений об ошибках
	getInvalidities: function() {
	  return this.invalidities.join('. \n');
	}
  };

CustomValidation.prototype.getInvaliditiesForHTML = function() {
	return this.invalidities.join('. <br>');
  }

  // Добавляем обработчик клика на кнопку отправки формы
  submit.addEventListener('click', function(e) {
	// Пройдёмся по всем полям
	for (let i = 0; i < fields.length; i++) {

	  let field = fields[i];

	  // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
	  if (field.checkValidity() == false) {

		let fieldCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
		fieldCustomValidation.checkValidity(field); // Выявим ошибки
		let customValidityMessage = fieldCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
		field.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

		// Добавим ошибки в документ
		let customValidityMessageForHTML = fieldCustomValidation.getInvaliditiesForHTML();
		field.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
		stopSubmit = true;

	  } // закончился if
	} // закончился цикл

	if (stopSubmit) {
	  e.preventDefault();
	}
  });
