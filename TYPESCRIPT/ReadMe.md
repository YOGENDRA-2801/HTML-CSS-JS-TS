# FLOW
    1. On execution typescript gets converted into javascripted hence executable file of typescript program is javascript
    2. Execution - "npx tsc filename.ts"  ,  use "npx tsc" to create js file in output dir & can compile all ts file in one go
    3. The "npx tsc filename.ts --watch" command will update the JS file on every change for the given filename
    4. JS Execution in CLI -- node filename.js
    5. touch filename.ts -- to create a file from console 

# DATA TYPE 
    1. It is not necessary to define the type of a property/function in a typescript but if you want this feature to be mandatory then you can define settings for it.
    2. undefined -- data type of un-initialized variable
    3. There are no tuple type in js when ts is converted to js then the tuple of ts is converted to array of js
    4. when possible use 'unknown' instead of 'any' ; unknown -- API responses , user input validation , error handling , JSON.parse output
    5. Runtime में: JavaScript में सभी object keys strings में convert हो जाती हैं (symbols को छोड़कर)

# Properties
    1. "name" , "status" naam ka variable use krne p error dega bcoz yh naam k predefined object present hai hence directly yah naame  ka variable create nahi kr skte
    ***2. let & const is block scope ; ts converts-to js on execution/changes ; all happens in same project/folder* ==>> "let" use krke variable declare krne p u may sometime get error as same name variable js m bhi present  -- hence prop-config to keep js file in separate file ***
    3. properties declared with 'var' can be redeclared and don't have block scope. When redeclared then both/all should have same type else it will give error
    4. typeof operator का return value हमेशा string होता है, इसीलिए हमें quotes में comparison करना पड़ता है।


# Config File
    1. To create typescript config file use command "npx tsc --init"
    2. If config file is present use "npx tsc" to convert all the ts file to js ek hi baar me
    3. "outDir": "./output" -- tells ki ts se convert hui js wali saari file / output file konsi location me aayegi
    4. "target": "es2023" -- it tells that jab code typescript se javascript m convert hoga to konsa javascript version use hoga
    5. "declaration": true -- creates declaration/definition file (.d wali) from js and ts file ; "module": "ES6"  

# Class
    1. Constructor
        1.1 TypeScript में multiple cnstrctr implementations allowed नहीं हैं, लेकिन overloading possible है। 
        1.2 Implementation sign में सभी params होने चाहिए जो overload sign में हैं, और extra parameters optional(?,|) होने चाहिए।
        1.3 If overloaded cnstrctr is declared - Usage k time wahi cnstrctr use kr payoge jiska overload sign declare kiya hai
    2. "type": "module",  // ES modules का full advantage मिलता है
    3. default modifier is public. private - same class , protected - same & child class , public - same project
    4. Here get (getter) and set (setter) are the properties not method. Instance content static area me access nahi kr skte
    5. Module
        5.1 default export ek special type ka export hai jisko import karte time koi bhi naam de sakte hain, kyunki yeh unnamed export hota hai.
        5.2 yeh "fallback mechanism" nahi hai - yeh ek separate export type hai. Per file sirf EK default export allowed hai. 
        5.3 Import karte time exact naam match karne ki zarurat nahi. Curly braces {} use nahi karte import mein. 
        5.4 Named exports ke saath combine kar sakte hain default export ho like same file m ek defaul export + other normal export
        5.5 Module import krte time .js wali extension use krne ka 

# OTHER
    1. GENERIC
        1.1 <T> matlab ye function generic hai. T ek placeholder type hai jo function call ke waqt decide hota hai.
        1.2 ():T yaha T return type hai and undefined T ka part nahi hota by default.
    2. Difference
        1.1 Pick v/s Extract -- Object props ko select karta hai v/s Union types me se matching members ko filter karta hai. 
        1.2 Omit v/s Exclude -- Object me se kuch properties hatata hai v/s Union types me se kuch members remove karta hai.
    3. namespace v/s module
        1.1  Global scope me attach hota hai v/s File-based scope hota hai
        1.2  NamespaceName.Member v/s  	import { Member } from "./file"
    4. Function 
        4.1 ek constructor aur type(broad type h matlab koi bhi function chalega) h jo har function ko represent karta hai.
        4.2 Problem: Ye parameters aur return type check nahi karta.
        4.3 Instead of Function, specific type signature likhna best hai: (a: number) => string
    5. Decorator
        5.1 target -- instance property → class ka prototype (Cls.prototype); static property → class constructor (Cls khud)
        5.2 key -- yeh property ka naam hota hai jisme decorator lagaya gaya.

# BEST PRACTICES
    1. Avoid using Uppercase types (Number, String, Boolean, ...) instead use Lowercase types (number, string, boolean, ...) 
    2. Use interface instead of type for object shapes
    3. Avoid any - Use proper types or unknown
    4. Use const assertions for better type inference
    5. Use strict mode aur avoid ! (non-null assertion -- variable!) overuse