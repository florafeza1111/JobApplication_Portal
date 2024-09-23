// app/api/apply/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();
  
  // You can add logic to save the data to your database here
  
  console.log('Form Data:', formData);

  // Respond with a success message
  return NextResponse.json({ message: 'Application received!' });
}
