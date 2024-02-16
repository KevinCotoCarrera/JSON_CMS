import { NextResponse } from 'next/server'
import content from './content.json'
export async function GET(request: Request) {
  return NextResponse.json(content, { status: 200 })
  
}