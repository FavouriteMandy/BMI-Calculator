function calculateBMI(){
    let h = document.getElementById('height').value;
    let w = document.getElementById('weight').value;
    let BMI = w / (h^2);
    document.getElementById('answer').value=BMI ;
    
};