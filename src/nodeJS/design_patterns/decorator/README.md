# Decorator Pattern

Allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class. Divide functionality between classes with unique areas of concern.

Keep in mind the "S.O.L.I.D." design principle. We do not want to change the existing functionality of an object, we just need to add functionality to the existing object "dynamically".

- Modify an object dynamically
- Uses composition instead of inheritance
- More flexibility than static inheritance

Idea is to allow one or many decorators to stack functionality on-top of an existing object.

## Why do we not use inheritance?
It is better to use composition over inheritance. A couple words, code re-use.

What if we had a vehicle that needs to be painted red. We could extend the vehicle class and make a red vehicle class. Now we have a bike that needs to be red as well. Now we have to extend the bike class and make a red bike class. If we used composition instead, we can decorate the existing classes with a "paint red" class. Now both the car and the bike can be painted red.