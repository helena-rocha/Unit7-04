let day = 0
let age = 0

document.getElementById('button').addEventListener('click', newfunction)
function newfunction () {
  day = document.getElementById('input').value
  age = document.getElementById('input-2').value
  if ((day === 'Tuesday' || day === 'Thursday') || (age >= 12 && age <= 21)) {
    document.getElementById('paragraph').innerHTML = 'You are eligible for student pricing!'
  } else {
    document.getElementById('paragraph').innerHTML = 'you must pay regular price'
  }
}
