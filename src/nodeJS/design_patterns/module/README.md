# Module Desgin Pattern 
## When to use this pattern
- Reuse code 
    - one project inside another project
    - current project and the code is used across multiple methods.
- structure your code under namespaces : Keep the global space clean
- Need the use of private variables 

I find this pattern very useful. When you are working as part of a large team or you are breaking apart a monolithic code base. Separating your code out into modules allows you to not only re-use code, but to allow other people on your team to work on one item while the rest of the team works on another. This will keep code merge and other git merge practices from becoming a nightmare. 
  