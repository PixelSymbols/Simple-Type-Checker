# easier-type-checker

## usecase
```typescript
import types from 'easier-type-checker'

//code goes here
```

## find
use find to find what types are the variable. (one variable can have many types)
example:
```ts
types.find("5") //return [ 'int', 'number' ]
types.find(5) //return [ 'number', 'char', 'string' ]
```
***return type:*** `string[]`

## is
use is to check if variable is right type or not
example:
```typescript
types.is.number(5); //return true
types.is.number('5'); //return true

types.is.int(5) //return true
types.is.int('5') //return false

//and etc.
```
***return type:*** `string[]`


`is` is an object, so you can do:
```ts
Object.keys(types.is).join('\n');
```
to see the list of all types that are implemented

## Types
Types is raw version of `is`. Its a **Map**. So you can implement/add your own types to it easily, and then convert to an object:
```ts
Types.Types.set("<your type>",<func>);
//will become the same thing as an original is
const is = Object.fromEntries(Types.Types);
```
> why not use Types rather than is?

it will be ugly:
```ts
Types.Types.get("number")(5)
```
and also typescript might say warning, because **Map** can return `undefined`, so u would need to write something like this:
```ts
let answer = Types.Types.get("number")
if(answer!==undefined) answer = answer(5);
```
or something similar


## full list of implemented types
```python
int
object
map
```
```ts
number
string
symbol
null
```
```basic
array
```
```php
ENG
```
```brainfuck
char
symbols
```
