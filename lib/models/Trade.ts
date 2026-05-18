import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  symbol: { type: String, required: true },
  pair: { type: String, required: true },
  direction: { type: String, required: true, enum: ['long', 'short'] },
  status: { type: String, required: true, enum: ['idea', 'analysis', 'execution', 'closed'] },
  lotSize: { type: Number },
  entryPrice: { type: Number },
  exitPrice: { type: Number },
  stopLoss: { type: Number },
  takeProfit: { type: Number },
  pnl: { type: Number },
  tags: [{ type: String }],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }
}, { timestamps: true });

export default mongoose.models.Trade || mongoose.model('Trade', TradeSchema);
