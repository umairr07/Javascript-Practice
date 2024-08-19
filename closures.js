
// ** 1. Simple Closure Example **
// function x() {
//     var a = 10
//     function y() {
//         console.log(a)
//     }
//     a = 500
//     return y();
// }
// x()

// ** 2. Little Advance Closure Example **
// function z() {
//     var b = 500
//     function x() {
//         var a = 10
//         function y() {
//             console.log(a, b)
//         }
//         y();
//     }
//     x()
// }
// z()


// ** 3. Example with setTimeout
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000)
//     }
//     console.log("Hello World")
// }
// x()

/* Imp Note --> The for loop which has a variable i declared with var and inside for loop there is setTimeout function, so the output it will give is (6), but we except 1 2 3 4 5 

Question 1: Why it is giving 6?

--> So because of the i decalre with var has a function scoped, it means there is only one `i` variable that is getting update on each iteration.

--> In simple words i has refernce which has been stored so whenver the loop iterates the value of `i` get updates

--> And by the time the setTimeout has excuted the loop has already completed and  value of i has become (6)

** As we all know that Js dont wait for anyone, so the setTimeout has a delay of 1 sec so the loop is getting iterated and henced the value of `i` becomes (6)


Question 2: So if we need output as 1 2 3 4 5, what to do?

--> So in for loop instead of decalring the variable of `i` with var, we can declare it with let as we all know that let has block scope..

--> In each iteration of the loop creates a new i variable, so when the setTimeout callback is executed, it refers to the correct value of i at that specific iteration.

*/

// ** 3. Example with setTimeout and Closures
function outer() {
    for (var i = 1; i <= 5; i++) {
        function inner(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        inner(i)
    }
    console.log("Hello World")
}
outer()

/*
So this is giving us the output as we expected as 1 2 3 4 5, but the question comes in mind is how?

---> Because we have created a another function as inner() ans also passes the paramater as inner(i) , so whenever the setTimeout function is called the i has new reference and in each iteration the value became change

--> 
The code gives the correct output (1, 2, 3, 4, 5) because of how the inner() function works.

When you call inner(i), you’re passing the current value of i to the inner() function. Inside inner(), this value is used by the setTimeout function. Because of how JavaScript works, each setTimeout remembers the value of i that was passed to it when inner(i) was called.

So, each setTimeout uses the correct value of i from the loop, and that’s why the output is 1, 2, 3, 4, 5.

*/