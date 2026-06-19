**Coffee Shop API**



**Overview**



This project is a simple REST API built using Node.js and Express.js as part of the Decode Labs Full Stack Development Internship.



The API allows users to retrieve coffee menu items and add new coffee items using HTTP requests.



**Technologies Used**



Node.js

Express.js

JavaScript



**API Endpoints**



**GET All Coffees**



GET /api/menu



Returns all coffee menu items.



**GET Coffee By ID**



GET /api/menu/:id



Returns a specific coffee item.



**POST New Coffee**



POST /api/menu



Adds a new coffee item.



Example Request:



{

&#x20; "name": "Mocha",

&#x20; "price": 220

}



**Validation**



The API validates user input and returns an error if required fields are missing.



**Author**



Neha Siddireddy



Decode Labs Internship - Week 2

