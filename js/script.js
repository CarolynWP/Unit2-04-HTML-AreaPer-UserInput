function calculate () {

  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // calculations
  const area = base * height / 2

  // the output
  document.getElementById('area').innerHTML = 'The area of your rectangle is ' + area + ' cm'
}