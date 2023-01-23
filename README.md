# <Password Generator>

## Description


For the password generator task I was asked to create a series of functions to create a password generator using Javascript. The HTML and  CSS 
was already present so the main focus was to complete the incomplete functions in the javascript code (script.js).

Firstly I logged a couple of tests to check that my button was working and entered text into the generate password function to check that text 
would pass through the function.

I then began creating the pseudo code so I could keep track of the tasks that needed completing and break down each step (see the steps below)


  step 1 prompt user
      a. to ask for the value length of password (data range >=10 and <= 64)
     b. prompt user for uppercase/lowercase and special characters
 step 2 input validation ( e.g. isupper?, islower?, length)
 step 3 generate password
 step 4 display generated password on webpage

 The first step I took was to create some prompts as suggested in the README instructions for this task. The prompts were easy to set up but I did have some issues at the start 
 as I tried to place my prompts inside the functions and this did not work so I moved them outside. 

 I the set to work adding an if statement to check the length of the characters in the code to make sure that data was entered between 10 and 64 characters. There was an issue with this code
 as I did an AND code to check the values and an OR code the prompts did not bypass when the correct data range was entered.

 Having not much experience of using Javascript I decided to do some research into the code for creating a password generator the code I followed did not work
 well due to it not fitting in with the existing code in the javascript file. So after a couple of attempts I decided to look for solutions to incorporating the arrays 
 that were already hard coded into the program.

 For selecting uppercase and lowercase values I used a code that casted a string datatype and selected the ASCII Character set code (CharCode). The Math floor code made sure that the value selected was an integer an the Math Random code selected a random value.  I moved the special character and number arrays from the top and pasted them into the randomgenerate function.

 I made several attempts at this task but was unsucessful in the last part which was taking all the arrays or stringvalues and getting one password generated from all the information and code that I had completed.

 The second attempt most the code was completed by myself looking up from class lessons and two main websites w3forschools and MDN Web docs. The first attempt was completed taking a lot of information from a youtube video which was explained very well from Traversy Media.

 
   


## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

My code does not currently need an install and can be viewed directly through the URL.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:





## Credits

There were no collaborators in this task.


I followed the bootcamp zoom tutorial recordings on Javascript arrays and if statements. 

I looked at the following tutorial for inspiration on how to create a password generator James Q Quick
https://www.youtube.com/watch?v=O-79Cb5s9U4


I looked at the following tutorial on password generators from Traversy Media
https://www.youtube.com/watch?v=duNmhKgtcsI


I looked at and tried elements from the following website.
https://stackoverflow.com/questions/61021441/random-password-generator-javascript

I looked at various methods on this site.
https://www.w3schools.com/jsref/jsref_filter.asp

I trawled this website look at different methods of creating arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


## License

I have chosen a MIT license for this project
---

## Badges

I now have 2 git hub badge acheivements pullshark x2 and YOLO

## Features

If I could have added more to the user experience and had more time I would have added a fontawsome icon with a clipboard as I have seen this feature on the fontawesome website and on git hub and think it is a neat and fundemental feature.

## How to Contribute

N/A

## Tests

I have created a series of tests as I went along and took screenshots of some of the tests I tried when I ran my code.

Test 1 add console log to check button is connected 

Test 2 checking that function generate password adds text

Test 3 Checking Prompts work

Test 5 checking that string.charcode will select random uppercase and random lowercase values

Test 6 log to check user needs returns customised length of password and Boolean values if special characters, numbers, lower and uppercase are needed.

Test 7 Code now displays arrays if confirm is true on lines 119 - 128

Test 8 Test to see if it displays on array when only special characters are selected ( now only displays array on line 119 all false values not console logged

