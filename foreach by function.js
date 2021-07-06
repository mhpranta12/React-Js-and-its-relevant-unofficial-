"use strict"

        var s=[2,3,4]
        function add(num)
        {
            console.log(num+1)
        }
        //add(5);

        s.forEach(add);  /*This is the way of wrtining foreach loop in JS . We must have to iterrate the loop through a function.
        We have to send the  function as a parameter inside inside this function.*/
