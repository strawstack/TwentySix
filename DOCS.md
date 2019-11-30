# TwentySix (0x1A) Documentation

# Global Variables
Lower case letters `a to w` are dynamically typed variables.

# Numbers
Numbers are a series of integers; `12335` is an integer.

# Strings
A sequence of characters inside `single-quotes` is a string; `'sam'` is a string.

# Lists
Lower case letters `x and y` are global lists.

# Hash map
Lower case `z` is a global hash map.

# Built-in Functions

Arguments to built-in functions are given as space delimited lists after the name of the function.

In the definitions below, `exp` stands for expression, which is any expression that can be evaluated in the language.

## A [exp1] [exp2]
Add: The result of adding the given expressions.

## B [x/y] [exp]
Bag: Append `exp` to given list.

## C [exp1] [exp2]
Compare: true if exp1 < exp2, otherwise false.

## D [exp1] [exp2]
Divide: Divide exp1 by exp2.

## E [exp1] [exp2]
Equals: True if exp1 is equal to exp2, otherwise false.

## F [exp]
Flip: Positive becomes negative, and vice versa.

## G [x/y/z] [index/key]
Get: Get the element at `index` from the given list or `key` from HashMap

## H
Halt: Stop the process.

## I [exp1] [exp2]
If: If exp1 is true then execute exp2. Otherwise, do nothing.

## J [name]
Jump: Continue execution from line with given `name`.

## K [x/y]
Kick: Remove the top value from given list.

## L [a-w] [exp]
Let: Assign result of expression to given global variable.

## M [exp1] [exp2]
Mod: Result of expression1 `MOD` expression2.

## N [name]
Name: Assign `name` to line that code appears on. See `J`.

## O [x/y]
Order: Sort the given list.

## P [exp]
Print: Log `expression` to the console.

## Q [exp]
sQrt: Find the sqrt of `exp`.

## R
Read: Read value from std input as string.

## S [x/y] [index] [value]
Set: Assign `value` to `index` of given list. If index would otherwise be out of bounds, list is padded with zeros.

## T [exp1] [exp2]
Times: Result of exp1 multiplied by exp2.

## U [exp1] [exp2]
Unite: Concat exp1 and exp2 together as strings. Non strings are converted to strings and appended.

## V [string] [n]
Value: String to base `n` integer.

## W [key] [value]
Write: Assign `value` to `key` in `z`.

## X [exp1] [exp2]
XOR: Value obtained from exp1 XOR exp2.

## Y
Yolo: Obtain random float [0, 1).

## Z [x-z] [x-z]
Zip: Create list of tuples by pairing each element of given lists. Access elements are discarded.

# User Defined Procedures

Users can defined their own "function like" code by assigning a name to a line with the function `N`. Calling the function `J` with a name will jump to a named line. Arguments and return values can be stored in global variables.
