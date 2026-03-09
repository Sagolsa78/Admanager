"use client";

import * as React from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Plus, GripVertical, Calendar, Info } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";

interface Task {
  id: string;
  columnId: ColumnId;
  content: string;
  brand: string;
  date: string;
}

type ColumnId = "draft" | "active" | "completed";

// Default columns and tasks
const defaultCols = [
  { id: "draft" as ColumnId, title: "Draft" },
  { id: "active" as ColumnId, title: "Active" },
  { id: "completed" as ColumnId, title: "Completed" },
];

const defaultTasks: Task[] = [
  {
    id: "1",
    columnId: "draft",
    content: "Test Direct Response Output",
    brand: "Acme Corp",
    date: "Mar 9",
  },
  {
    id: "2",
    columnId: "active",
    content: "LinkedIn Post Variations",
    brand: "Globex UI",
    date: "Mar 8",
  },
  {
    id: "3",
    columnId: "active",
    content: "Founder Origin Narrative",
    brand: "Initech",
    date: "Mar 7",
  },
  {
    id: "4",
    columnId: "completed",
    content: "Contrarian Angle test #1",
    brand: "Acme Corp",
    date: "Mar 1",
  },
];

function SortableTask({
  task,
  onClick,
}: {
  task: Task;
  onClick: (id: string) => void;
}) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-[#1F1F1F] opacity-30 border-2 border-primary rounded-xl p-4 h-[120px] mb-3"
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[#161616] border border-border p-4 rounded-xl mb-3 flex flex-col gap-3 group hover:border-text-secondary/50 transition-colors shadow-sm cursor-grab active:cursor-grabbing"
      {...attributes}
      {...listeners}
      onClick={() => onClick(task.id)}
    >
      <div className="flex items-start gap-2">
        <GripVertical className="h-4 w-4 text-text-secondary/50 group-hover:text-text-secondary shrink-0 mt-0.5" />
        <h4 className="font-semibold text-white text-sm leading-tight flex-1">
          {task.content}
        </h4>
      </div>
      <div className="flex items-center justify-between mt-auto pl-6">
        <span className="text-xs font-medium text-text-secondary flex items-center gap-1">
          <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center text-[8px] text-primary font-bold">
            {task.brand.charAt(0)}
          </div>
          {task.brand}
        </span>
        <span className="text-[10px] text-text-secondary flex items-center">
          <Calendar className="w-3 h-3 mr-1" />
          {task.date}
        </span>
      </div>
    </div>
  );
}

export function CampaignBoard() {
  const [tasks, setTasks] = React.useState<Task[]>(defaultTasks);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);

  const sensors = useSensors(usePointerSensor(), useKeyboardSensor());

  function usePointerSensor() {
    return useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    });
  }

  function useKeyboardSensor() {
    return useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    });
  }

  const handleDragStart = (event: import("@dnd-kit/core").DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    // Moving tasks
    setTasks((tasks) => {
      const activeTaskIndex = tasks.findIndex((t) => t.id === activeId);
      const overTaskIndex = tasks.findIndex((t) => t.id === overId);

      const isOverColumn = defaultCols.find((col) => col.id === overId);
      if (isOverColumn) {
        // Dropping over a column itself
        const updatedTasks = [...tasks];
        updatedTasks[activeTaskIndex].columnId = isOverColumn.id;
        return arrayMove(
          updatedTasks,
          activeTaskIndex,
          updatedTasks.length - 1,
        );
      }

      // Dropping over another task
      const updatedTasks = [...tasks];
      updatedTasks[activeTaskIndex].columnId = tasks[overTaskIndex].columnId;
      return arrayMove(updatedTasks, activeTaskIndex, overTaskIndex);
    });
  };

  const openTaskPanel = (id: string) => {
    const task = tasks.find((t) => t.id === id);
    if (task) {
      setSelectedTask(task);
      setPanelOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full lg:h-[calc(100vh-12rem)] w-full overflow-hidden">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <div className="flex gap-6 h-full overflow-x-auto pb-4 custom-scrollbar items-start">
            {defaultCols.map((col) => {
              const columnTasks = tasks.filter(
                (task) => task.columnId === col.id,
              );

              return (
                <div
                  key={col.id}
                  className="flex-shrink-0 w-[320px] flex flex-col h-full bg-[#161616]/50 rounded-xl overflow-hidden border border-[#2A2A2A]"
                >
                  <div className="p-4 border-b border-[#2A2A2A] flex items-center justify-between bg-[#1A1A1A]">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-white uppercase text-sm">
                        {col.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-[#1F1F1F] text-xs px-1.5 rounded-sm"
                      >
                        {columnTasks.length}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-text-secondary hover:text-white hover:bg-surface-2"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1 p-3 overflow-y-auto">
                    <SortableContext items={columnTasks.map((t) => t.id)}>
                      {columnTasks.map((task) => (
                        <SortableTask
                          key={task.id}
                          task={task}
                          onClick={openTaskPanel}
                        />
                      ))}
                    </SortableContext>
                  </div>
                </div>
              );
            })}
          </div>

          <DragOverlay>
            {activeId ? (
              <div className="bg-[#1F1F1F] border border-primary p-4 rounded-xl flex flex-col gap-3 shadow-2xl opacity-90 scale-105 cursor-grabbing">
                <div className="flex items-start gap-2">
                  <GripVertical className="h-4 w-4 text-text-secondary/50 shrink-0 mt-0.5" />
                  <h4 className="font-semibold text-white text-sm leading-tight flex-1">
                    {tasks.find((t) => t.id === activeId)?.content}
                  </h4>
                </div>
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>

      <Modal
        isOpen={panelOpen}
        onClose={() => setPanelOpen(false)}
        title="Campaign Details"
      >
        {selectedTask && (
          <div className="space-y-6">
            <div>
              <label className="text-xs font-semibold text-text-secondary uppercase">
                Brand Context
              </label>
              <h3 className="text-lg font-bold text-white mt-1">
                {selectedTask.content}
              </h3>
              <p className="text-sm text-text-secondary mt-1">
                {selectedTask.brand} • {selectedTask.date}
              </p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-text-secondary uppercase">
                Notes
              </label>
              <textarea
                className="w-full h-24 bg-surface-2 border border-border rounded-lg p-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Add notes about this campaign..."
                defaultValue={
                  "Currently testing the hook logic with 5 different ad creatives. A/B testing images vs videos."
                }
              />
            </div>

            <div className="bg-[#1F1F1F] border border-border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center text-primary">
                  <Info className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Full Context Reference
                  </h4>
                  <p className="text-xs text-text-secondary">
                    View the original Brand DNA context.
                  </p>
                </div>
              </div>
              <Button size="sm" variant="secondary">
                View Original
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
