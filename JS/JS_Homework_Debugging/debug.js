const flowers = ["rose","star gazer","tulips","sun flower"];

// count the length of the strings inside the array
for (i = 0; i < flowers.length; i++) {
    /* 
    ! 1. Logical Error : flowers[0] was using the sole index [0] instead of using the iterator [i] 
    ! 2. Syntax error: .lentgh is a wrong spelling. Use .length
    ! 3. Runtime Error:  Cannot read properties of undefined (reading 'length') : Undefined has no length
    ! There are only 4 objects in the array. By replacing the less than or equals to sign ( <= ) with a less than sign ( < ) in the for loop allowed the 
    ! code to run smoother and not throw errors.
    */
    console.log(flowers[i].length); 
   
}

