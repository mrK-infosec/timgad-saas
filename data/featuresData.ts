import { FeatureItem } from '../types';

export const featuresData: FeatureItem[] = [
  { id: '1', title: 'Trade Pipeline', description: 'Track every stage of your execution workflow.', colSpan: 2, rowSpan: 1, type: 'pipeline' },
  { id: '2', title: 'Risk Management', description: 'Monitor exact exposure in real-time.', colSpan: 1, rowSpan: 1, type: 'risk' },
  { id: '3', title: 'Team Collaboration', description: 'Sync strategies across your trading desk.', colSpan: 1, rowSpan: 1, type: 'team' },
  { id: '4', title: 'Performance Analytics', description: 'Visualize your alpha over time.', colSpan: 1, rowSpan: 2, type: 'analytics' },
  { id: '5', title: 'Enterprise Grade', description: 'Built for speed and security.', colSpan: 2, rowSpan: 1, type: 'stats' },
];
