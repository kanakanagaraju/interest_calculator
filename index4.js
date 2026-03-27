
function cal(a,b,c=0,e=0)
{
   let d=a*(b/100)
   let f=d*c
   let m=(((e*100)/30)/100)
   let g=((m*(b/100))*a)
   let r=f+g
   return r
   
}

function calculate() {
    
    let a = parseFloat(document.getElementById("initialamount").value);
    let b = parseFloat(document.getElementById("interestrate").value);
    let c = parseFloat(document.getElementById("totalmonths").value);
   
    let e = parseFloat(document.getElementById("totaldays").value);
   /* if (isNaN(a) || isNaN(b)){
        document.getElementById("demo").innerHTML = "Please enter valid numbers.";
        return;
    }*/
   let amount = document.querySelector("#initialamount").value;
    
if (amount=="" ) {
    
    document.getElementById("d1").innerHTML="Enter a valid number";
       
}let amount1 = document.querySelector("#interestrate").value;
    
if (amount1=="" ) {
    
    document.getElementById("d2").innerHTML="Enter a valid number";
 
}
    if(e>30){
        let k=e/30
        let K=Math.floor(k)
        let l=e%30
        e=l
        c=c+K
        document.getElementById("totalmonths").value = c;
        document.getElementById("totaldays").value = e;
    }


 let result = cal(a, b, c,e);
    document.getElementById("demo1").innerHTML ="total interest:-"+result;
    document.getElementById("demo").innerHTML = "total amount including interest:-"+(result+a);
}

document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('#initialamount, #interestrate, #totalmonths, #totaldays');
    document.querySelector('#initialamount').focus();
    inputs.forEach((input, index) => {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // prevent form submission or default behavior
                if (index + 1 < inputs.length) {
                    inputs[index + 1].focus(); // focus on the next input
                } else {
                    // If it's the last input, you may choose to trigger the calculation
                    document.querySelector('#initialamount').focus();
                    
                }
            }
        });
    });
});
