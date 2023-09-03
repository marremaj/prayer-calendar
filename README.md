# Prayer Calendar App
The purpose of this calendar app is to keep track of prayers. The target user is a person who wants to make sure he/she completes all the prayers of the day. 

## Technologies
* React
* Javascript
* Python
* ...

## Future plans
* Adding statistics about the past
* Making a mobile application
* Running in AWS

## Running frontend
```
cd frontend
npm install
npm start
```
## Running backend
```
make backend
```

## Backend docs

Supported APIS can be found in 
```
http://localhost:8000/docs
```

## example requests using curl

Add new Prayer
```
curl -X POST http://localhost:8000/api/prayers/ -d '{"user":"marina","prayer":"Asr"}' -H 'Content-Type: application/json'

```

response
```json
{
    "status":"success",
    "prayer":
        {
            "user":"marina",
            "prayer":"Asr",
            "updatedAt":"2023-09-03T20:18:51",
            "date":"2023-09-03T20:18:51",
            "id":1
        }
}

```

Note that not providing "date" and "updatedAt" fields will use now as defult

Delete prayer 

```
curl -X DELETE http://localhost:8000/api/prayers/1

```
Response is nothing :D

Get all prayers

```
curl http://localhost:8000/api/prayers/

```
Response
```json
{
    "status":"success",
    "prayer":
        {
            "user":"marina",
            "prayer":"Asr",
            "updatedAt":"2023-09-03T20:18:51",
            "date":"2023-09-03T20:18:51",
            "id":1
        }
}

```