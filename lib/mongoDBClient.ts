import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

// Atlas-optimized options
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4
  retryWrites: true,
  w: 'majority'
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Add this to avoid "global" TypeScript error
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// Validate the environment variable
if (!process.env.MONGODB_URI) {
  throw new Error("Please add MONGODB_URI to your .env file");
}

// Reuse the connection in development
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    const options = {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      family: 4, // Use IPv4
      retryWrites: true,
      w: 1
    };
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  // Always create a new client in production
  const options = {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4
    retryWrites: true,
    w: 1
  };
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
  clientPromise = client.connect();
}

export default clientPromise;