# Dojos week 13

  
## Proposal #1 - Christmas App (bdd/back/front)
#### Tuesday:


It is almost Christmas and Santa Claus is asking for an application so that children (name, first name, level of wisdom) can add gifts (name) to their list.
If a child is not wise, Santa Claus can delete their gifts. 

**Bonus**
> As Christmas approaches, the deadlines become tighter, he will soon start exploiting hundreds of elves (last name, first name). A leprechaun works alone on each gift and once he has finished he moves on to the next gift. It might be wise to add a todo/doing/done status to the gifts.

 1. BDD Modeling
 2. BDD creation _(Manually add children/gifts/bonus-elf in the database)_
 3. Node project initialisation (express/mysql)
 4. MySQL configuration
 5. Creation of express routes
     1. Get a list of children along with their gifts
     2. Add a gift 
     3. Delete a child's list
     ** bonus**
     4. Associate a leprechaun with a gift
     5. Validate the manufacture of the gift (gift status table - ok) 

  

#### Thursday:

 1. Initiate a react/angular project
 2. Connect the front to the back (fetch/httpClient)
 3. View the list of children and their gifts
 4. Button for deleting a child's list
 5. Form for adding gifts for a child
 ** bonus**
 6. View a list of elves
 7. Associate a leprechaun with a gift

  
## Proposal #2 - Dojo project (bdd/back/front)

You now know your projects better than we do and you should have a valid bdd model. For this dojo, focus on creating 2 or 3 tables linked by joins.

> E.g. An e-commerce platform containing users (name, first name, email) which have a list of products (name, category, price) in their shopping cart.

 1. Database creation (Only selected tables) 
 2. Node project initialisation (express/mysql) or use of resources provided by the instructor
 3. MySQL configuration
 4. Creation of express routes
     **example**
     1. Retrieve a user
     2. Add / Update / Delete users
     3. Add / Update / Delete products
     4. View a list of products by category

  

#### Thursday:

 1. Initiate a react/angular project
 2. Connect the front to the back (fetch/httpClient)
 3. Display a user
 4. 'Create a user' form
 5. Reuse the form for modification.
 ** bonus**
 7. Apply the same for other routes
