import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Trade from '@/lib/models/Trade';
import { auth } from '@/auth';

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const trades = await Trade.find({ userId: session.user.id }).sort({ createdAt: -1 });
  
  return NextResponse.json(trades);
}

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const body = await req.json();
  const trade = await Trade.create({
    ...body,
    userId: session.user.id
  });

  return NextResponse.json(trade);
}
