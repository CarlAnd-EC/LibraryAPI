# Basic Library API using an Express Server
### Author: Carlos Andrés Escalona Contreras 
#### Proposed by: Javier Luna
Main file: ExpressServer.js  
Created: 05/05/2021  
Updated: 10/05/2021

## Installation
### `git clone https://github.com/CarlosAEC-KS/LibraryAPI`

## Start
### `npm run dev`

## Testing
### `npm run test`

## Description:
Build an API with Express with the following requirements:

"We are going to create a website to store our books information. If we want to add a new entry for a book, we need the title, author, publication year and tags. Please return to us a unique identifier (GUID) if a new book is added. For searching, we need to be able to fetch the books information in 2 different ways: by book GUID, and by parameters (title, author, publication year or a tag). We should be able to update and delete current books. If the book info is already in our database (title, author and publication year, no matter the tags), don't allow the creation for the new entry. Finally, please be careful, we don't want to see invalid values on book information: title and author should be characters, publication year should be a valid year, larger than 1454; and tags should be an array of characters like ['adventure', 'comedy']"

Additional requirements:
1. Use port 5000 and domain /books
2. Your API should be able to start with the command "npm run dev"
3. Use MVC Model
4. Use a middleware for input data validations