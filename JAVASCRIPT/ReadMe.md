# Interview
    1. Higher Order Funtions -- Functions that either takes other functions as a argument or returns others functions as a output , forEach() 
    2. When specified arg not present getElementByID returns null & getElementsByClassName return empty htmlcollection

# Variables
    1. console.log() => hamesha new line m chize print krta h & it is a part of browser where JS is implemented
    2. If block scope me var(c) already declared h to parent scope ka var(p) consider NHI kiya jayega 
            as a result uss scope m declaration statement k pahle wah var(c) tu use nhi kr skta
    3. undefined => andr kya value h pata hi nhi h ; null => andr pata h ki kya h, khali value hai , absence of obj
    4. Types => number, null, undefined, boolean, bigint, string, symbol, object(obj, arr, date & it is non-primitive DT)
    5. priority => const(must be initialized during declaring & mostly capitalized for primitives) > let > var
    6. Object ( k-V pair wala ) ke members ko . operator use krke hi access kr skte , If using [] -- [""] for ExactKey and [] for var
    7. prompt hamesha str m val return krta 
    
# Condition
    1. True -- 1 and False -- 0
    2. JS type conversion khud s kr leta h jaha jarurt hoti h wahi then back-2-original
    3. L-OP is apllied on logical expression , C-OP is applied on 2 value
    4. >> -- left side m leftmost ka hi copy daalta h 
    5. >>> -- left side m zero daal deta h 
    6. "else" ko apen "if" ki bina nhi likh skte 
    7. (18<age<25) => (18<age)<25 => hence true for all stmnt greater than 18 
    8. default hamesha last m daalne ka pahle dala to wahi exe ho jayega aur baki nhi

# Function
    1. particular block ke return statement ke baad ki koi bhi line exe nhi hoti
    2. parameters act as a local variables of/for that funtion || Chote kamo k liye arrow func else normal func 
    3. " ()=>{} "  --  sirf itne part ko hum arrow funtion bolte hai , var use krna means humne yh func ko usme store kr rhe
    4. Function which is passed as an argument is called callback function 

# Array
    1. Heterogenous datatype bhi store kr skte but not preferred
    2. Property -- bus value deti hai -- length 
    3. Method -- jo kuch kaam krta -- push() pop() unshift() shift() toString() concat() slice() splice() include() 
    4. arr.forEach( func(element,index,array) ) -- forEach func ko uske parameters ki val dega khud se 
    5. arr.map( func(element,index,array) ) -- used to create new array using returned value which is based on the operation performed on the each element of original array 
    6. arr.filter( func(element,index,array) ) 
        6.1 returns new array by filtering the element of original array based on some condition that returns true / false 
        6.2 Jis element ke liye true return karega sirf usko hi new arr me store karega
    7. arr.reduce( func(accumulator/prev-val/result , currentValue/element) ) 
        7.1 perform some op on arr ele & reduce arr to a single val (also returns this)
        7.2 prev-val me initially arr ka 1st ele store rhta , fir yh prev op ka result hold krta 

# Objects
    1. Class / Object ke Variables -- Properties && Funtions -- Methods / Behaviour

# Promises
    1. A has 3 state pending , fulfilled/resolved , rejected
    2. resolve aur reject jo as a param pass hue hai wah func js hi crt krrta h
    3. promise fulfill hone k baad kuch kaam  karana ho use 'then(res)=>{}' and fail hone pr kuch kaam krana ho use 'catch(err)=>{}'

# Strings
    1. Methods -- toUpperCase() , toLowerCase() , trim() , slice() , concate() , replace() , charAt() 
    2. str[index] ✓ || Properties -- length || Strings are Immutable || str.replace(" ", "") -- removes all whitespaces

# Loop
    1. Ctrl + C: This is the most common way to stop a running process in the terminal.
    2. Ctrl + Z: This will suspend the process. You can then kill it using the 'kill' command in Unix-based systems.
    3. for-of == String , A  || for-in == Objects , A , S × || forEach == Array , S × || for == Universal

# Event 
    1. priority -- inline handler < JS handler
    2. event handling ways -- inline handling , event listener , js handling (can write only one  EHing meth for a node's event in .js)

# DOM
    1. window is parent/root/global object 
    2. HTML ka saara content JS ke pass availabe hota h in the form of obj named "document" object
    3. document obj body tag k pahle use kiya to wah null dega 
    4. console.dir(obj) -- specified obj ki sari prop & meth dekhne k liye
    5. Access -- getElementByID , getElementsByClassName , getElementsByTagName , querySelector - .# , querySelectorAll - .#
    6. Properties --  innerName , innerHTML , innerText , textContent
    7. firstChild , lastChild , children    ||    node - text , element , comment    ||    parent , child , siblings 

# Set 
    1. It is JS built-in object that stores unique values. Set ka lookup time complexity O(1) hota hai.
    2. Methods -- has() 