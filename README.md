# Authentication using JSON Web Tokens (JWTs)
### <a href="https://relaxed-fermat-a20695.netlify.app/index.html">Link to the project site</a>
## Topics
- **enpoint api**
- # users router endpoint 

**register endpoint for users**
  - name
  - username (unique)
  - password
  - email (unique)
 

 ## /api/register  


## Data Schema:

 ```js 
    {
      "name": "Robbin William",
      "username: "Robin",
      "password": "rob003",
      "email": "robbin@robbin.com",
    }
```
**login endpoint for users**

## /api/login 

user login example: ## password will return the token into client side.
## Data Schema: 
 ```js
    {
      "username": "Robin",
      "password": "rob003",
    }
```

