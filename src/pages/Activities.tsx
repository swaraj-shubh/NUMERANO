import { useState } from 'react';
import EventModal, { Event } from '../components/EventModal';
import { motion } from 'framer-motion';

export default function Activities() {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    const events: Event[] = [
        {
            id: 1,
            title: "Math Olympiad 2025",
            date: "March 15, 2025",
            description: "Our annual inter-college mathematics competition saw participation from over 500 students. The event featured challenging problem-solving rounds and a guest lecture by Dr. A. Ramanujan.",
            imageUrl: "https://placehold.co/600x400/0a192f/FFF?text=Math+Olympiad",
            highlights: ["500+ Participants", "20 Colleges", "Cash Prizes worth 50k"],
            videoUrl: ""
        },
        {
            id: 2,
            title: "Pi Day Celebration",
            date: "March 14, 2025",
            description: "Celebrating the most famous constant in mathematics with pie-eating contests and recitation challenges. We set a new club record of 314 digits memorized!",
            imageUrl: "https://placehold.co/600x400/0a192f/FFF?text=Pi+Day",
            highlights: ["Pie Eating Contest", "Recitation Challenge", "Interactive Workshops"]
        },
        {
            id: 3,
            title: "Guest Lecture Series",
            date: "Feb 20, 2025",
            description: "A fascinating talk on 'The Poetry of Prime Numbers' by Prof. Sarah Jones. Explored the distribution of primes and the Riemann Hypothesis.",
            imageUrl: "https://placehold.co/600x400/0a192f/FFF?text=Guest+Lecture",
            highlights: ["Full House Attendance", "Q&A Session", "Networking Dinner"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl font-bold text-center text-numerano-navy mb-4">Our Activities</h1>
                    <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
                        Explore our journey of events, workshops, and competitions.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300"
                            onClick={() => setSelectedEvent(event)}
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm font-semibold text-numerano-blue mb-2">{event.date}</div>
                                <h3 className="text-xl font-bold text-numerano-navy mb-3">{event.title}</h3>
                                <p className="text-gray-600 line-clamp-3 mb-4">{event.description}</p>
                                <div className="text-numerano-navy font-semibold text-sm flex items-center">
                                    View Details <span className="ml-1">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <EventModal
                isOpen={!!selectedEvent}
                onClose={() => setSelectedEvent(null)}
                event={selectedEvent}
            />
        </div>
    );
}
