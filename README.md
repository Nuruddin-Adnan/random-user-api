
# Random User Api

This is a random user api without server



## API Reference


#### Get random user

```http
  GET /user/random
```

#### Get all users

```http
  GET /user/all
```


| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `limit`      | `number` | **Note**. Limit is for limit the number of user |

#### Create a new user

```http
  POST /user/save
  Data pass by body
```

#### Update a user

```http
  PATCH /user/update/${id}
  Data pass by body
```

#### Delete a user

```http
  PATCH /user/delete/${id}
```


#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [Nuruddin Adnan](https://github.com/Nuruddin-Adnan)


## Demo 

 - [https://random-user-api-nuruddin-adnan.vercel.app/user/all](https://random-user-api-nuruddin-adnan.vercel.app/user/all)
 - [https://random-user-api-nuruddin-adnan.vercel.app/user/all?limit=3](https://random-user-api-nuruddin-adnan.vercel.app/user/all?limit=3)
 - [https://random-user-api-nuruddin-adnan.vercel.app/user/random](https://random-user-api-nuruddin-adnan.vercel.app/user/random)
 - [POST method and data pass by body] [https://random-user-api-nuruddin-adnan.vercel.app/user/save](https://random-user-api-nuruddin-adnan.vercel.app/user/save)
  -  [PATCH method and id pass by params and data pass by body] [https://random-user-api-nuruddin-adnan.vercel.app/user/update/:id](https://random-user-api-nuruddin-adnan.vercel.app/user/random)
 -  [Delete method and id pass by params] [https://random-user-api-nuruddin-adnan.vercel.app/user/delete/:id](https://random-user-api-nuruddin-adnan.vercel.app/user/random)

