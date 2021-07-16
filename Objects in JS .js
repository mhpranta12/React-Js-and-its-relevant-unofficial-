//We can use (this) to refer to self and (.) to point like other languages . . . . . . . . 

const student ={ id:1836233 ,
        'sid': '18-36233-1',
        'name':'Mehedi Hasan Pranta' ,
        getName: function()  //we have to write function like this 
        {
                console.log(this.name); 
        } , //this (,) comma must be included if we want to proceed more . . . 
        /*function getID()   This method is not valid in here 
        {

        }*/
        getId: function()  //we have to write function like this 
        {
           

                return this.id;
        }
}

console.log(student.id); //printing id of this object

student.getId();
student.getName();      // invoking the getName function  which itself printing the name of the student object

console.log(student['name']);           // we can also acces the object like associative array's indexing 

student.id=2;               // editing the object's id attribute from outside of that object 
student.name='ertugrul';    // editing name of this student object from outside 

console.log(student.getId());       // here it is displaying our newly set id 
student.getName();          // calling getName function to get  the new name ertugrul

student.s1='pranta';        // we can also define object's attribute like this 
console.log(student.s1);

student.name='Sheher lala';
student.id='18-36618-1';

student['getName']();       /* We can also use this associative array's indexing system to calll function also. 
For that the structure is : objectname['functionname']()  and if function only return but doesn't print anything then : console.log(objectname['functionname']());  */
console.log(student['getId']());

const getCls = {
                id:2 ,
                getObj : function ()
                {
                    return{

                        value=10 ,
                        getfun : function ()
                        {
                            return this.value;
                        }
                    }
                  
                }
}
console.log(getCls.getObj().getfun());
