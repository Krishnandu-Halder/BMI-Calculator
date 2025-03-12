window.onload= result;
function result(){
    let resultBmi = document.getElementById("result1");
    
    let height = parseFloat(document.getElementById("height-input").value);
    let weight = parseFloat(document.getElementById("weight-input").value);
    if(weight>0 && height>0){
        const calBmi = weight /((height/100)*(height/100));
        let category = ' ';
        if(calBmi<18.5){
            category = 'Under Weight!';
        }
        else if(calBmi<24.9){
            category = 'Normal Weight!';
        }
        else if(calBmi<29.9){
            category = 'Over Weight!';
        }
        else{
            category = 'Obese!';
        }
        resultBmi.innerText =`${calBmi.toFixed(2)} ${category}`;
        
    }
    else{
        resultBmi.innerText =`Please enter valid height & weight`;

    }
    

};


let btn = document.getElementById("#btn");

