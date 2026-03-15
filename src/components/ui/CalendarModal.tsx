import React from "react";
import { Calendar } from "lucide-react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar size={28} /> Book a Meeting
        </h2>
        <div className="flex flex-col items-center justify-center h-60">
          <Calendar size={80} className="text-blue-500 mb-4" />
          <label className="mb-2 font-medium">Select a date:</label>
          <input
            type="date"
            className="border rounded px-3 py-2 mb-4"
            style={{ fontSize: '1rem' }}
          />
          <p className="text-gray-600 text-center">Pick a date for your meeting.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
