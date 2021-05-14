# Basic Library API using an Express Server
### Author: Carlos Andrés Escalona Contreras 
#### Proposed by: Javier Luna
Main file: ExpressServer.js  
Created: 05/05/2021  
Updated: 12/05/2021

## Installation
### `git clone https://github.com/CarlosAEC-KS/LibraryAPI`

## Start
### `npm run dev`

## Testing
### `npm run test`

## Description
* Express server listening to requests on port 5000.
* Domain for queries: "/books" which is replaced by "." as follows.

| Endpoint | Method | Description |
|-|-|-|
| . /search | GET | For searching, we need to be able to fetch the books information in 2 different ways: by book GUID, and by parameters (title, author, publication year or a tag).|
| . /add | POST | If we want to add a new entry for a book, we need the title, author, publication year and tags. Please return to us a unique identifier (GUID) if a new book is added. If the book info is already in our database (title, author and publication year, no matter the tags), don't allow the creation for the new entry. If an invalid entry is sent, a 400 error is returned.|
| . /update | PUT | Updates the information provided of the specified entry from the library. |
| . /delete | DELETE | Deletes the specified entry from the library. |
| . /reset | DELETE | Clears the content of the library. |

Additional requirements:
1. Use port 5000 and domain /books
2. Use MVC Model
4. Use a middleware for input data validations
5. " Finally, please be careful, we don't want to see invalid values on book information: title and author should be characters, publication year should be a valid year, larger than 1454; and tags should be an array of characters like ['adventure', 'comedy']"

Example of entry in JSON format:  
```json
{
  "title":"I Robot", 
  "author":"Isaac Asimov",
  "year":"1950",
  "edition": 1,
  "publisher":"Gnome Press",
  "country":"United States",
  "genre":	"science fiction",
  "language":	"English",
  "ISBN": 9789754053098,
  "pages": 253
}
```