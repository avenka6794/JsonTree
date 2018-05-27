# JsonTree

A simple library to generate interactive html lists from JSON Data

Take a look at the example: 

### Usage

Dependencies:(cdn)
1. jQuery - https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js
2. Animejs - https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.js
3. Material Icons - https://fonts.googleapis.com/icon?family=Material+Icons

After adding the dependencies to your html, there are two methods to create a list:

    Tree.createList(JSON)
    
This method returns a DOM element to that can be appended to the doc.
Function takes a simgle parmater 'JSON' - an array of javascript objects pertaining to the list to be created. Format is as follows:
* All items should contain a name field - the name that is to be displayed
* Standalone items (no sub-items) should contain a type = file
* Nested items (the parent) should contain type = folder and a property children that contains an array of the subitems

A sample data arrangment would look like
    ```[
    {
    type:'file',
    name: 'file #1'
    },
    {
    type: 'folder',
    name: 'folder #1',
    children: [
    {
    type: 'file',
    name: 'nested files #1'
    },
      {
    type: 'file',
    name: 'nested files #2'
    }
    ]
    }
    ]```

    Tree.setupList(options)
    
This method creates click handlers and styles the list for usage.
It takes one paramater options, an object that contains four properties:

 * beforeEnterState - Stringified CSS of nested list before opened 
 * enterAnimation- Animejs animation of list on opening
  * leaveAnimation - Animejs animation of list on closing
  * afterEnterState - Stringified CSS of nested list after closing
  
##### Contact me for personal requests/questions
