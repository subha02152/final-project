import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongoDBClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME); // from .env
    const collection = db.collection(process.env.COLLECTION_NAME!); // from .env

    const result = await collection.insertOne({
      name,
      email,
      phone,
      service,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message saved", id: result.insertedId });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
