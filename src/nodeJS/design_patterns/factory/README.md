# Factory Pattern

One factory can produce many different types of objects.

Example: 

    We have multiple types of elections. State elections and National elections. State and National are of the same type or you can say they belong to the same group. When the client asks for a "state" election race, the client does not care how it is made. 
    The client can call one factory method, provide the necessary arguments and will recieve an election race that was requested. Our mythical elections factory can return any type of election race the client requests. 
    
    
When is the factory pattern generally used?
- A class does not know the type of object to return when first instantiated. 
- A class requires its subclasses to specify what object to create
- Localize the instantiation of an object.
    - As a developer will know exactly where a type of object is created and will not have to search the whole codebase.
    
Good practice because : 
- Separate the object creation from its implementation.
- Create a different instance based on a condition.
- Prevent exposure of the object's constructor, preventing their modification.