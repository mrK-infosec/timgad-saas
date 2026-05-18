import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Trade from '@/lib/models/Trade';
import { auth } from '@/auth';

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return new NextResponse("Unauthorized", { status: 401 });

  await dbConnect();

  const trades = await Trade.find({ userId: session.user.id });
  
  // Aggregate stats
  const tradesCount = trades.length;
  let totalPnL = 0;
  let winningTrades = 0;
  
  trades.forEach(trade => {
    if (trade.pnl) {
      totalPnL += trade.pnl;
      if (trade.pnl > 0) winningTrades++;
    }
  });
  
  const winRate = tradesCount > 0 ? (winningTrades / tradesCount) * 100 : 0;
  
  return NextResponse.json({
    totalPnL,
    winRate: parseFloat(winRate.toFixed(2)),
    profitFactor: 2.4, // placeholder calculation
    tradesCount
  });
}
