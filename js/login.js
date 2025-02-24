// step Number --- 1

document.getElementById("btn_login").addEventListener("click", function(event){
  
    // relode bondo korte ai ta used korte hobe
    event.preventDefault();

    const accountNumber = document.getElementById("first_input_number").value;
    const accountPin = document.getElementById("first_input_pin").value;
    const pin = parseInt(accountPin)

    if(accountNumber.length === 11){
        if(pin === 1234){
            window.location.href="./main.html"
        }
        else{
            console.log("pin thik nai")
        }
    }
    else{
        console.log("invalid pin")
    }

    
})