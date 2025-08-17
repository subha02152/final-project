import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongoDBClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    console.log("Received data:", { name, email, phone, service, message });

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    console.log("MongoDB client connected successfully");

    // Get database - use fallback if env var is missing
    const dbName = process.env.DB_NAME || "NEESH";
    const db = client.db(dbName);
    console.log("Using database:", dbName);

    // Get collection - use fallback if env var is missing
    const collectionName = process.env.COLLECTION_NAME || "contacts";
    const collection = db.collection(collectionName);
    console.log("Using collection:", collectionName);

    // Insert document
    const result = await collection.insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    console.log("Insert result:", result);

    if (result.acknowledged) {
      return NextResponse.json({ 
        success: true,
        message: "Contact saved successfully", 
        id: result.insertedId 
      });
    } else {
      throw new Error("Insert was not acknowledged by MongoDB");
    }

  }catch (err: any) {
  console.error("Error saving contact:", err);
  return NextResponse.json({ 
    error: "Failed to save contact", 
    details: err.message 
  }, { status: 500 });
}
}
// Add this at the top of your /api/contact/route.ts
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "EXISTS" : "MISSING");

