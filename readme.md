## CarRental
### Instructions how to use API of car rental

Start application:

1. Git clone https://github.com/Mazvydas22/CarRental.git
2. cd CarRental
3. docker-compose up

## API

#### GET request

Get list of all the cars available to rent.

```aidl
URI: /cars
```
#### PUT request

Change data of selected car
```aidl
URI: /cars/557df54fdgt45trg45df8d

Body:
{"Brand": "Toyota", "model": Corolla, "year":"1999", "price": "50" }
```

#### DELETE request

Delete the car with selected ID

```aidl
URI: /cars/557df54fdgt45trg45df8d
```

#### GET request

Get the car by particular ID

```aidl
URI: /cars/557df54fdgt45trg45df8d
```


#### POST request

Add car to the list.

```aidl
URI: /cars

Body:
{"Brand": "Toyota", "model": Corolla, "year":"1999", "price": "50" }
```