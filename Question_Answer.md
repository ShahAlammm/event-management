<div class="align-center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`


<i>In the corrected code, the variable is declared as greeting and assigned an empty object. This aligns with the subsequent console.log(greeting) statement, ensuring consistency in the variable name.</i>


</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:C: `"12"`?

<i>1. In the sum function, you are using the + operator to add two values, a and b. However, when you invoke the function with sum(1, "2"), the second parameter is a string.



2.In JavaScript, when you use the + operator with a string and a number, it performs string concatenation. In this case, 1 is a number, and "2" is a string. So, instead of adding them as numbers, JavaScript concatenates them, resulting in the string "12". That's why the output is C: "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']` ?

<i> 1."const food = ["🍕", "🍫", "🥑", "🍔"];: This declares an array named food with four elements.

2.const info = { favoriteFood: food[0] };: This declares an object named info with a property favoriteFood set to the first element of the food array, which is "🍕".

3.info.favoriteFood = "🍝";: This line reassigns the value of info.favoriteFood to "🍝".

4.console.log(food);: This prints the food array to the console.

5.Since the reassignment info.favoriteFood = "🍝" doesn't affect the original food array, the console.log(food) statement will output the original array, which is ['🍕', '🍫', '🥑', '🍔']. Therefore, the correct answer is A.</i>



</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:B: `Hi there, undefined` ?

<i>Explanation: This is a simple function named sayHi that takes a parameter name and returns a string using template literals.
Here, you are calling the sayHi function without providing any argument. When a function is called without passing a value for a parameter, the parameter takes the value undefined.

Output Explanation:
The template literal in the return statement is "Hi there, ${name}". Since name is undefined in this case, the output will be "Hi there, undefined".

Therefore, the correct answer is B: Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3?

<i>Here, you initialize a variable count to 0 and an array nums with values [0, 1, 2, 3].
The forEach loop iterates over each element in the nums array. The arrow function checks if each num is truthy (not equal to 0), and if it is, it increments the count by 1.

Result:
After the loop, the count has been incremented for each truthy value in the array (1, 2, and 3). Therefore, count is now 3.This prints the final value of count to the console, which is 3.

Therefore, the correct answer is C: 3.</i>



Therefore, the correct answer is C: 3.

</p>
</details>