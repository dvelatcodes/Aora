import { Client, Account } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.dvelat.aora",
    projectId: "668512c900278bc02cd3",
    databaseId: "668515ff003009dad6f0",
    userCollectionId: "6685163700258ece0343",
    videosCollectionId: "668516730036b8310222",
    storageId: "66851a7600333cf9f588"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

// Register User
export const createUser = ()=>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

