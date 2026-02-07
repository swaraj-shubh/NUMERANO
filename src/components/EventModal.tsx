import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    highlights: string[];
    videoUrl?: string;
}

interface EventModalProps {
    isOpen: boolean;
    onClose: () => void;
    event: Event | null;
}

export default function EventModal({ isOpen, onClose, event }: EventModalProps) {
    if (!isOpen || !event) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-red-500 bg-white rounded-full p-2 shadow-md transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    <div className="p-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-numerano-navy mb-6 border-b pb-4">{event.title}</h2>
                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
                            {event.videoUrl ? (
                                <div className="aspect-w-16 aspect-h-9 bg-black">
                                    <iframe
                                        src={event.videoUrl}
                                        title={event.title}
                                        className="w-full h-[400px] object-cover"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <img
                                    src={event.imageUrl || "https://placehold.co/800x400?text=Event+Image"}
                                    alt={event.title}
                                    className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                                />
                            )}
                        </div>

                        <div className="prose max-w-none text-gray-700">
                            <p className="text-lg leading-relaxed">{event.description}</p>
                            <div className="mt-8 bg-blue-50 p-6 rounded-xl border-l-4 border-numerano-navy">
                                <h3 className="text-xl font-bold mb-4 text-numerano-navy">Event Highlights</h3>
                                <ul className="space-y-2">
                                    {event.highlights && event.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-center text-gray-800">
                                            <span className="w-2 h-2 bg-numerano-accent rounded-full mr-3"></span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
