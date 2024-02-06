"use server";

interface user {
  name: string;
  email: string;
  phoneNumber: string;
}

import { sql } from "@vercel/postgres";

export async function saveLead({ name, email, phoneNumber }: user) {
  try {
    await sql`INSERT INTO PreEnrollment (name, email, phoneNumber) VALUES (${name}, ${email}, ${phoneNumber})`;
  } catch (error) {
    console.log(error);
  }
}
