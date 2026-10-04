const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const savedFormData = localStorage.getItem(storageKey);

if (savedFormData) {
  const parsedFormData = JSON.parse(savedFormData);
  formData.email = parsedFormData.email || '';
  formData.message = parsedFormData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  if (event.target.name in formData) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log({ ...formData });
  localStorage.removeItem(storageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
});
