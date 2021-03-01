Console.log(range(1, 100));

function range(start, end)
{
    myArray = new Array();
    for(num = start; num<= end; num++)
    {
        myArray[num] = num;
    }

    return myArray;
}