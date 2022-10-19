let budget = 100;
let product = prompt("Costs of product");
let text = document.getElementById('text');

if (budget > product) 
{
document.write('U heeft genoeg geld!') 
budget.style.color = "Green";

}


    
else 
{
    text.innerHTML = "Helaas u heeft te weinig geld!";
    text.style.color = "red";
}