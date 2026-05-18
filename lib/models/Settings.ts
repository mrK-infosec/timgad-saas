import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  defaultPair: { type: String, default: 'EUR/USD' },
  riskPercentage: { type: Number, default: 2.0 },
  notifications: { type: Boolean, default: true },
  theme: { type: String, default: 'dark' },
  timezone: { type: String, default: 'UTC' }
});

export default mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);
