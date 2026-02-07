import { motion } from 'framer-motion';

export default function Members() {
    const members = [
        { role: "President", name: "[Name]" },
        { role: "Vice President", name: "[Name]" },
        { role: "Secretary", name: "[Name]" },
        { role: "Treasurer", name: "[Name]" },
        { role: "Core Team", name: "[Name 1], [Name 2], [Name 3], [Name 4]" },
        { role: "Web Team", name: "[Name 1], [Name 2]" },
        { role: "Event Coordinators", name: "[Name 1], [Name 2], [Name 3]" },
    ];

    return (
        <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
            >
                <div className="bg-numerano-navy py-10 px-6 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Club Members</h1>
                    <p className="text-blue-200 text-lg">The minds behind the magic</p>
                </div>

                <div className="divide-y divide-gray-100">
                    {members.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center hover:bg-gray-50 transition duration-200"
                        >
                            <div className="sm:w-1/3 mb-2 sm:mb-0">
                                <span className="text-lg font-bold text-numerano-navy block border-l-4 border-blue-500 pl-3">
                                    {group.role}
                                </span>
                            </div>
                            <div className="sm:w-2/3">
                                <span className="text-gray-700 text-lg font-medium">{group.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gray-50 p-8 text-center text-gray-500 italic">
                    <p>And many more enthusiastic volunteers and participants!</p>
                </div>
            </motion.div>
        </div>
    );
}
