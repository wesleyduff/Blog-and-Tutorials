> # TDD - Created by *Kent Beck* in the early 1990's when he was employed by the Chrysler Corporation.

# Tutorial on How to get Started with TDD
- TDD is also part of the Extream programming methodology. 

## Structure 
Each level of the tutorial will be located in folders. 
1. The setup
2. Our first failing test & passing test : Does module exist
3. Going from Red to Green : Checking for method
4. Using Chai's expect to fail and pass a test
5. Setting up Sinon Spies : Spying on arguments passed into a function call
6. Sinon Spy : Checking if a method was called.
7. How to handle third party API calls with Nock.
9. Mocking out large collaborators : Mocking out methods.

* Review some existing tests in your codebase.

## Rules
- No production code should be written till there is a failing unit test.
- The first test should be the simplest failing test case, and that includes compiling.
- The first test should be just enough to make the test fail.
- The production code written to make the test pass should be just enough production code to fulfil the test case.

## Why should we test?
Software bugs can hurt the business. 
The goal of any developer, Senior or higher, should be to write world class software. 
If this is not a goal of yours, then you are in the wrong business. 
A developer should be responsible for the code they put out into the world.  

> *High Quality Code* - Where the developer takes responsibility for the quality of their code.

You should be proud of the code you submit for review. Dare the quality assurance team to find a bug with your code. 

> *Fail Fast* - The faster you fail, the quicker you can find the holes in your code

You will be surprised on how quickly you can find an issue with your code when you start to write tests. This will make you a better developer because you will remember what went wrong and will help you swerve these pot holes. Save time in the future by not making the same mistake twice. 

> *Confidence* - When your code goes out to production, you can be confident you code did not break, instead it strengthened the code base and user experience. 

How many times do you find yourslf on a release, with the nagging thought that you code might not work. Better yet, get called out because your code broke on production. If your code is fully tested and you have the correct tests written, you will have the confidence in your code.

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
- Keep tests fast
  - Adding console logs and other console methods in your test case slows down the test. If you have 1000 test cases, you can see how this will slow down your test suites.
  - Fast testing is one of the major benifits of TDD. Test yoru code and fail fast. If it takes a while to run your test, you will run them less often and less frequently. 
  - Use testing frameworks to handle slow collaborators with fast test doubles. (spies, mocks and stubs)
  
  
## What next?
### Code Coverage
*What is code coverage*?  
Code coverage shows you the amount of code covered. Some code coverage tools show you what lines have not been covered in a GUI tool. This comes in handy because it allows you to see what you have misseed.

What you should look for in your code coverage report :
- Percentage of lines covered from your whole application
- Review each module folder and see what level of coverage is reported
  - For example, say there is a login folder that contains our login modules. We can view the login folder and it will tell us the code coverage for the files within that folder. If we see the code coverage and it is lower than our team agreement, we know we need to increase the code coverage for those modules.
- A good rule of thumb for code coverage numbers should be around 80%. But know, not all lines of code need to be covered. It is nice to have 100% of lines covered, but this is not very realistic nor practicle for a coprorate situation. We should make sure we cover everything that was discussed during the tech grooming phase of our story. The main idea for testing is: cover your failing cases first and make them fail gracefully, make your test pass, refactor your code to adhere to your teams best practices.
