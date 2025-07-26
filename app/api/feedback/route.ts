import clientPromise from "@/lib/mongoDBClient"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db(process.env.DB_NAME) // Uses DB_NAME from .env
    const collection = db.collection(process.env.COLLECTION_NAME || "feedback") // Uses COLLECTION_NAME from .env or defaults to "feedback"

    const feedback = await collection.find({}).toArray()

    return NextResponse.json(feedback)
  } catch (error) {
    console.error("Error fetching feedback:", error)
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
  }
}
