document.getElementById("Add_money").addEventListener("click", function(event){
    event.preventDefault()
    const Ammount = document.getElementById("Ammount").value
    const convertAmmount = parseFloat(Ammount);

    const pin =  document.getElementById("pin").value;
    const convertPin = parseInt(pin)

    const mainBalnce = document.getElementById("main_balnce").innerText;
const convertMainBlance = parseFloat(mainBalnce)

    if(convertPin === 1234){
        const sum = convertMainBlance + convertAmmount;
        document.getElementById("main_balnce").innerHTML = sum
    }
    else{
        console.log("pin thik nha")
    }

})