var amount = document.getElementById("amount")
var type = document.getElementById("type")
var desc = document.getElementById("desc")
var date = document.getElementById("date")
var table = document.getElementById("table")
var income = 0
var expense = 0
var lop = document.getElementById("lop")
var total ;
function transaction(){
    
if(amount.value !== "" ){
    console.log('amount',amount.value);
console.log("type",type.value);
if (type.value === 'income'){
    income += parseInt(amount.value)
    console.log('income',income);
}else{
    expense += parseInt(amount.value)
    console.log('expense',expense);
}
total = income - expense
table.innerHTML+=`
<tr>
<td>${type.value}</td>
<td>${amount.value}</td>
<td>${desc.value}</td>
<td>${date.value}</td>
</tr>
`
amount.value=''
desc.value=''
date.value=''
lop.innerText = total
console.log('total',total);
}

}
