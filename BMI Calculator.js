const form = document.querySelector("form");

form.addEventListener("submit", function(e){
  //this is used to prevent the default action(here the default action is to submit immedietly)
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height < 0 || height == "" || isNaN(height) ) {
    results.innerHTML = `please enter a vaild height ${height}`
  }else if (weight < 0 || weight == "" || isNaN(weight) ) {
    results.innerHTML = `please enter a vaild weight ${weight}`
  } else {
    const bmi = (weight/(height*height/10000)).toFixed(2);
    results.innerHTML = `<b>${bmi}</b>`;

    if(bmi < 18.6){
      results_statement.innerHTML = "<h3>you are under weight</h3>"
    }else if ( bmi >= 18.6 && bmi <= 24.9){
      results_statement.innerHTML = "<h3>your weight is normal</h3>"
    }else if ( bmi > 24.9 ){
      results_statement.innerHTML = "<h3>you are over weight</h3>"
    }
  }
})