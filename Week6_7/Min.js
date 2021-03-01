output = min(3, 3);
console.log(output);

function min(num1, num2)
{    
    if(num1 < num2)
    {
        return num1
    }
    else if(num2 < num1)
    {
        return num2
    }
    else
    {
        return "Numbers are equal"
    }
}