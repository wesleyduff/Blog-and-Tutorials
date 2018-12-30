# Tutorial on How to get Started with TDD

## Structure 
Each level of the tutorial will be located in folders. 
1. The setup
2. Our first failing test
3. Going from Red to Green
4. Going from Green to Refactor to Green again
5. Finding the next smallest test case and moving forward
6. Implementing a code coverage tool
7. Revewing code coverage and getting one hundred percent. 

## Rules
- No production code should be written till there is a failing unit test.
- The first test should be the simplest failing test case, and that includes compiling.
- The first test should be just enough to make the test fail.
- The production code written to make the test pass should be just enough production code to full fil the test case.

## Why should we test?
Software bugs can hurth the business. 
The goal of any developer Senior or higher should be to write world class software. 
If this is not a goal of yours, then you are in the wrong buseinss. 
Your junior teammates and you manager are looking to you to output the best code you 
can possibly create. Not everyone is the same, but we should all 
have the mindset to be responsible for the code we put out into the world.  

> *High Quality Code* - Where the developer takes responsibility for the quality of their code.

You should be proud of the code you submit for review. Dare the quality assucrance team to find a bug with your code. 

> *Fail Fast* - The faster you fail, the quicker you can find the holes in your code

You will be suporised on how quickly you can find an issue with your code when you start to write tests. This will also start making you a better developer because you will remember what went wrong and will swerve these pot hols and save time in the future by not making the same mistake twice. 

> *Confidence* - When your code goes out to production, you can be confident you code did not break, instead it strengthened the code base and user experenice. 

How many times do you find yourslf on a release, with the nagging thought that you code might not work. Better yet, get called out because your code broke on production. If your code is fully tested and you have the correct tests written, you will have the peace of confidence in your code.

> *Documentation* - Yes! Tests document your code. 

When you have a full suite of tests, you can review these tests and see a full documentation of what each function does. When you bring on a new hire, you can have them review the test cases. This will give that person a faster, robust knowledge of the current working application. 

> *Drives Best Practices* - When you are writing tests in a TDD fashion, you encourage best practices.

TDD, you write your tests before you write any production code. This allows you to think about, failing api calls, wrong arguments passed in, and so much more. You are also forced to write code in a modular pattern and small consise functions that do one thing and one thing well.

