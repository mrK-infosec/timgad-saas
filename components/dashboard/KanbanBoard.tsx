"use client";
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { useTradeStore, Trade } from '@/store/tradeStore';
import { useUiStore } from '@/store/uiStore';
import { Plus } from '@phosphor-icons/react';

const columns: { id: Trade['status'], title: string, color: string }[] = [
  { id: 'idea', title: 'Idea', color: 'bg-dark-border' },
  { id: 'analysis', title: 'Analysis', color: 'bg-accent-gold/20 text-accent-gold' },
  { id: 'execution', title: 'Execution', color: 'bg-blue-500/20 text-blue-500' },
  { id: 'closed', title: 'Closed', color: 'bg-trading-green-bg text-trading-green-text' }
];

export default function KanbanBoard() {
  const { trades, fetchTrades, moveTrade } = useTradeStore();
  const { openTradeModal, addToast } = useUiStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    fetchTrades();
    setMounted(true);
  }, [fetchTrades]);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    try {
      await moveTrade(draggableId, destination.droppableId as Trade['status']);
    } catch (error) {
      addToast('error', 'Failed to move trade');
    }
  };

  if (!mounted) return null; // Prevent hydration errors with DND

  return (
    <div className="flex h-full gap-6 overflow-x-auto pb-4">
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(col => {
          const columnTrades = trades.filter(t => t.status === col.id);
          
          return (
            <div key={col.id} className="flex-1 min-w-[300px] flex flex-col gap-4">
              <div className="flex items-center justify-between sticky top-0 bg-dark-bg z-10 py-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-medium uppercase tracking-wider">{col.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${col.color}`}>
                    {columnTrades.length}
                  </span>
                </div>
                <button onClick={() => openTradeModal()} className="text-text-secondary hover:text-text-primary">
                  <Plus size={16} />
                </button>
              </div>

              <Droppable droppableId={col.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`flex-1 rounded-xl p-2 transition-colors ${snapshot.isDraggingOver ? 'bg-dark-surface/50' : ''}`}
                  >
                    {columnTrades.map((trade, index) => (
                      <Draggable key={trade._id} draggableId={trade._id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => openTradeModal(trade._id)}
                            className={`bg-dark-surface border rounded-lg p-4 mb-3 cursor-pointer transition-shadow
                              ${snapshot.isDragging ? 'border-accent-gold shadow-lg shadow-accent-gold/10 scale-[1.02]' : 'border-dark-border hover:border-dark-border-hover'}`}
                            style={{ ...provided.draggableProps.style }}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${col.color}`}>
                                {trade.symbol}
                              </span>
                              <span className="text-xs text-text-tertiary">
                                {new Date(trade.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-sm font-medium text-text-primary mb-1">{trade.title}</h4>
                            {trade.pnl !== undefined && col.id === 'closed' && (
                              <p className={`text-sm mt-3 ${trade.pnl >= 0 ? 'text-trading-green-text' : 'text-loss-red-text'}`}>
                                {trade.pnl >= 0 ? '+' : ''}${trade.pnl}
                              </p>
                            )}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}
