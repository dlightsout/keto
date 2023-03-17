const { signupForm }= document.forms;

signupForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  let response;
  try {
    response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
        phone: event.target.phone.value,
      }),
    });
    if (response.status !== 200) {
      console.log('response.status :', response.status);
      const data = await response.json()
      return failSignup(event.target, data.err);
    }
  } catch (err) {
    console.error('CATCH ERR', err);
    return failSignup(event.target, err.message);
  }

  window.location.assign('/');
});

// Очищаем кастомные сообщения об ошибках при новом вводе
signupForm?.addEventListener('input', (event) => {
  event.target.setCustomValidity('');
  event.target.checkValidity();
});

/**
 * Выдает ошибку при неверной регистрации
 * @param {HTMLFormElement} signupForm Форма регистрации
 */
function failSignup(signupForm, err) {
  signupForm.name.setCustomValidity(`Ошибка регистрации. Ошибка: ${err}`);
  signupForm.name.reportValidity();
  setTimeout(() => {signupForm.name.setCustomValidity('')}, 350000)
}
