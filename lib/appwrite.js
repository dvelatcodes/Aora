import { Client, Account, ID, Avatars, Databases } from 'react-native-appwrite';

// configuration for my server
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

// apply my unique signature
client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

// create instances of new account entity
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register User
export const createUser = async (email, password, username)=>{
   try {
     const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
     )
     if(!newAccount) throw Error

     const avatarUrl = avatars.getInitials(username);

    // function call to sign in user
     await signIn(email, password);

   //  save new user to database
     const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
     )

    return newUser;
   } catch (error) {
    console.log(error);
    throw new Error(error)
   }
}


// sign in user function
export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
         throw new Error(error)
    }
}

// account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
// .then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });