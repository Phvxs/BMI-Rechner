function BMI(){
    let m = document.querySelector('#gross').value;
    let w = document.querySelector('#gewicht').value;

    m = parseFloat(m);
    w = parseFloat(w);

    let bmi= w / (m*m);

    bmi = bmi.toFixed(1);

    

    document.querySelector('#result').innerHTML = "Dein BMI ist: " + bmi;

}