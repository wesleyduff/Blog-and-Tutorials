> #TDD - Created by *Kent Beck* in the early 1990's when he was employed by the Crystler Corporation.

# Tutorial on How to get Started with TDD
- TDD is also part of the Extream programming methodology. 

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

## What do we test.
Anything that contains logic! Short and sweet.

## How do we test
Many good developers get stumped here. They are reviewing their story and are wondering how to get stared.  
Below is a list of items that will help you get started.

- Develop your code in a Red phase, Green phase and a refactor phase.
  - Red : Write a failing test case
  - Green : Write code to make your tests pass
  - Refactor : Refactor your code to adhear to team standards 
- Tech grooming session are a good way to get a good grasp of what test cases you should be writing. 
  - Discuss with your team, come up with a good list of test cases that are **MUSTS**. Write these first. You should also review the acceptance critiera, make sure you have all your bases covered.
  - Review your test cases, you do not want any bugs to come about, and you want to make sure your fellow developers use your methods correclty. 
  - Share your test cases with the P.O. and your Q.A. team. You should all agree, that if these tests are written and pass, then you can say by definition of done, I have successfully completed this story.
- *Uncle Bob* from the  book **[Clean Code](https://www.investigatii.md/uploads/resurse/Clean_Code.pdf)**
  - You may not write any production code until yoiu have written a failing unit test
  - You may not write any more code than is needed to fail your test.
    - Forces you to write just enough code to get you to the next test case.
    - The next test case should be the next simplist test case.
  - You may not write more production code than is sufficient to pass the current failng unit test.
  - Each itteration should only be a few minutes of work.
  > These rules help keep you in a small tight loop that help you write less code that passes all tests.
- Always write the next simplist testcase.
  - Writing the next simplist test case allows you to gradually increase the complexity of your code.
  - If you jump to a complex test case, you will find yourself writing a lot of production code all at once, which goes away from TDD.
  - Writing complex test cases also lead to poor design decisions. You might miss the more simpler approaches.
- Write descriptive test names
  - Your test suite (describe) should be descriptive of what your test cases will perform. 
  - Separate your test cases into test suites
  - Each test case should be short and clear about what the test asserts.
