// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis

// CODE : use jaskis

// 2. Create a collection called bounties
// CODE : db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object
// CODE : db.bounties.insertOne({
 /*  name: "Thanoceros", 
  species: "Rhinoceros",
  location:"Grasslands",
  wantedFor: "Eating too much grass",
  reward: 1000,
  captured: false
})
{ acknowledged: true,
  insertedId: ObjectId("63b777664aefcbe14b60c0f9") }
 */

// 2. Query for all bounties in the bounties collection
// CODE : db.bounties.find()
/* { _id: ObjectId("63b777664aefcbe14b60c0f9"),
name: 'Thanoceros',
species: 'Rhinoceros',
location: 'Grasslands',
wantedFor: 'Eating too much grass',
reward: 1000,
captured: false } 


3. Insert many bounties at once using the given objects
 CODE : db.bounties.insertMany([
/*   {
    "name": "Lokinkajou",
    "species": "Kinkajou",
    "location": "Tropical rainforest",
    "wantedFor": "Partying too late at night",
    "client": "White tiger",
    "reward": 1000,
    "captured": false
  },
  {
    "name": "Nebullama",
    "species": "Llama",
    "location": "Grasslands",
    "wantedFor": "Drinking all the water from the ocean",
    "client": "Songbird",
    "reward": 2500,
    "captured": false
  },
  {
    "name": "Polarwind",
    "species": "Polar Bear",
    "location": "Arctic",
    "wantedFor": "Not hibernating",
    "client": "Sabertooth",
    "reward": 4000,
    "captured": false
  },
  {
    "name": "Wrecking Crows",
    "species": "Crow",
    "location": "Grasslands",
    "wantedFor": "Cawing too loudly",
    "client": "Red wolf",
    "reward": 40000,
    "captured": false
  },
  {
    "name": "Grandhog",
    "species": "Groundhog",
    "location": "Woodlands",
    "wantedFor": "Not coming out of the hole on time and prolonging winter",
    "client": "Songbird",
    "reward": 50000,
    "captured": false
  },
  {
    "name": "Grim Panda",
    "species": "Giant Panda",
    "location": "Temperate forest",
    "wantedFor": "Eating all the bamboo",
    "client": "Red wolf",
    "reward": 5000,
    "captured": false 
  }
    ])
{ acknowledged: true,
  insertedIds: 
   { '0': ObjectId("63b777c94aefcbe14b60c0fa"),
     '1': ObjectId("63b777c94aefcbe14b60c0fb"),
     '2': ObjectId("63b777c94aefcbe14b60c0fc"),
     '3': ObjectId("63b777c94aefcbe14b60c0fd"),
     '4': ObjectId("63b777c94aefcbe14b60c0fe"),
     '5': ObjectId("63b777c94aefcbe14b60c0ff") } } */

// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
 db.bounties.find({location: "Grasslands"}, {name:1})
 
// 2. Query for all bounties with a reward worth 10000 or more
db.bounties.find({reward:{$gte:1000}}, {name: 1})

// 3. Query for all bounties, but exclude the client attribute from being shown
db.bounties.find({}, {client: 0})

// 4. Query for a Groundhog in the Woodlands
db.bounties.find({ $and: [ { species: "Groundhog" }, { location: "Woodlands" } ] })

// Update and Delete
// 1. Update the reward for Polarwind to 10000
db.bounties.updateOne({name:"Polarwind"}, 
{$set: {reward:10000}}
)
// 2. Remove Lokinkajou
db.bounties.deleteOne({name: "Lokinkajou"})

// 3. Delete all bounties sent by Songbird
db.bounties.deleteMany({client: "Songbird"})

// 4. Update all captured statuses to true
db.bounties.updateMany(
  {captured: false}, 
  {$set: {captured: true}}
  )