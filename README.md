Agenda
======

This aims to be a system for managing appointments, and customers.


Data structure

##### Appointment

An appointment is a period of time that is booked to complete a certain job. Examples could be (assessing  a job quote, meeting with a client etc.).

Each appointment needs to have a job, and a customer related to it. Even if the customer is a guest / new.

```json
{
    "id":"hashId",
    "notes":"something specific about this appointment",
    // these time metrics will help analyze how long certain jobs take
    "estimated_start_time":"2014-08-22T01:57:02.359Z",
    "estimated_end_time":"2014-08-22T01:57:02.359Z",
    "actual_start_time":"2014-08-22T01:57:02.359Z",
    "actual_end_time":"2014-08-22T01:57:02.359Z",

    // user estimates time - estimated_end time is managed server side
    // this decides how long the appointments last 
    "estimated_completion_time": 30,
    "estimated_completion_metric":"minutes",

    // relational data
    "job_id":"hashId",
    "customer_id": "hashId",
    "location_id": "hashId",

    // if the customer was invoiced
    // and if they paid it
    "invoiced":true,
    "invoiced_at":"2014-08-22T01:57:02.359Z",
    "invoice_payed":true,
    "invoice_payed_at":"2014-08-22T01:57:02.359Z",

    // general record information
    "created_at":"2014-08-22T01:57:02.359Z",
    "updated_at":"2014-08-22T01:57:02.359Z",

    // nothing is actually ever GONE :D
    // archive that bitch
    "deleted_at":"2014-08-22T01:57:02.359Z"
}
```

##### Jobs

a job is description of a specific type of work. (carpet cleaning, quote, computer repair). A job can be assigned to an appointment and a customer can could have many jobs completed through appointments. 

```json
{
    "id":"hashId",
    "name":"Carpet Cleaning",
    "description":"A sometimes very dirty job :(",
    "created_at":"2014-08-22T01:57:02.359Z",
    "updated_at":"2014-08-22T01:57:02.359Z",
    "deleted_at":"2014-08-22T01:57:02.359Z"
}
```

##### Customer

A customer can be one time or returning. They can have multiple locations associated with them. Assuming a job is completed remotley.

```json
{
    "id":"hashId",
    "type":"recurring | partner | platinum", // may need to break into its own model
    "first_name":"Jane",
    "last_name":"Doe",
    "phone_primary":"+xxxxxxxxxxx",
    "phone_secondary":"+xxxxxxxxxxx",
    "phone_primary_type":"mobile",
    "phone_secondary_type":"home",
    "email":"jane.doe@gmail.com",
    "notes":"This person tends to not pay their bill on time",
    "created_at":"2014-08-22T01:57:02.359Z",
    "updated_at":"2014-08-22T01:57:02.359Z",
    "deleted_at":"2014-08-22T01:57:02.359Z"
}
```

##### Location

A location is a place where remote work is completed. When you clean carpets its required that you drive to the customers location to complete the work.

```json
{
    "id":"hashId",
    "type":"apartment | home | industrial building",
    "customer_id":"hashId",
    "address_line_1": "100 I ST NE, Washington, D.C, 20003",
    "address_line_2": "Unit 5000",
    "cross_street":"New Jersey Ave",
    "notes": "requires a keycode to gain access to premises",
    "created_at":"2014-08-22T01:57:02.359Z",
    "updated_at":"2014-08-22T01:57:02.359Z",
    "deleted_at":"2014-08-22T01:57:02.359Z"
}
```