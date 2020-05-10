const courseName = document.querySelector('#courseName');
const courseRating = document.querySelector('#courseRating');
const addBtn = document.querySelector('#btn-add');
const coursesList = document.querySelector('#courses-list');

addBtn.addEventListener('click', () => {
  const cName = courseName.value;
  const cRating = courseRating.value;

  if (cName.trim().length <= 0 || cRating < 1 || cRating > 5 || cRating.trim().length <= 0) {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid inputs';
    alert.message = 'Please enter a valid name and rating.';
    alert.buttons = ['OKAY'];
    document.body.appendChild(alert);
    return alert.present();
  }
  const newItem = document.createElement('ion-item');
  newItem.innerHTML = `${cName.bold()} - ${cRating}/5`;
  coursesList.appendChild(newItem);
});