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

# ABC