# API Documentation: 

## Endpoint Description
This endpoint allows users to register an account by providing required personal and authentication details. Upon successful registration, the endpoint returns an authentication token and the user details.

---

## URL
`POST /users/register`

---

## Request Body
The endpoint expects a JSON object in the body of the request with the following structure:

### Required Fields:
- `fullname`: An object containing the user's full name:
  - `firstname` (String, Required): Must be at least 3 characters long.
  - `lastname` (String, Optional): If provided, must be at least 3 characters long.
- `email` (String, Required): Must be a valid email address and unique.
- `password` (String, Required): Must be at least 6 characters long.

### Example:
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
