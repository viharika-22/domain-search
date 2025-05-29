import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { FiMenu, FiCopy } from "react-icons/fi";
import toast from "react-hot-toast";

const SortableItem = ({ id, onCopy }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="bg-gray-700 p-3 rounded-md flex justify-between items-center hover:bg-gray-600 cursor-grab"
      {...attributes}
      {...listeners}
    >
      <span className="flex items-center gap-2">
        <FiMenu className="text-gray-400 cursor-grab" />
        {id}
      </span>
      <FiCopy
        onClick={() => onCopy(id)}
        className="text-gray-400 hover:text-teal-300 cursor-pointer"
      />
    </li>
  );
};

const DomainGenerator = ({ base }) => {
  const initial = [`get${base}`, `${base}hq`, `${base}app`, `${base}site`, `try${base}`];
  const [items, setItems] = useState(initial);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied: ${text}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow text-white">
      <h2 className="text-2xl font-bold mb-4 text-teal-400">Drag & Copy Suggestions</h2>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          <ul className="space-y-2">
            {items.map((id) => (
              <SortableItem key={id} id={id} onCopy={handleCopy} />
            ))}
          </ul>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DomainGenerator;
