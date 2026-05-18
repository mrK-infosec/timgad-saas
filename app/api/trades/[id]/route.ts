import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Trade from '@/lib/models/Trade';
import { auth } from '@/auth';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const trade = await Trade.findOne({ _id: id, userId: session.user.id });
  
  if (!trade) return new NextResponse("Not Found", { status: 404 });
  
  return NextResponse.json(trade);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const body = await req.json();
  const trade = await Trade.findOneAndUpdate(
    { _id: id, userId: session.user.id },
    body,
    { new: true }
  );
  
  if (!trade) return new NextResponse("Not Found", { status: 404 });
  
  return NextResponse.json(trade);
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const trade = await Trade.findOneAndDelete({ _id: id, userId: session.user.id });
  
  if (!trade) return new NextResponse("Not Found", { status: 404 });
  
  return new NextResponse(null, { status: 204 });
}
