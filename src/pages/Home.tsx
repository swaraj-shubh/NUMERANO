import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';

export default function Home() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-slate-900 pt-0 overflow-x-hidden">

            {/* ANIMATED HERO SECTION (KEPT AS REQUESTED) */}
            <HeroSection />

            {/* Main Content - Reverted to Light Theme */}
            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                    className="md:col-span-2 space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-bold mb-6 border-l-8 border-numerano-navy pl-4 text-numerano-navy">
                        Who We Are
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Numerano is not just a club; it's a movement. We are a vibrant community of mathematics enthusiasts dedicated to fostering a love for problem-solving and critical thinking.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        We organize weekly challenges, workshops, and inter-college competitions to push the boundaries of mathematical understanding. From easy puzzles to complex theorems, we cover it all.
                    </p>
                </motion.div>

                {/* Brain Buffs Column - Light Card Style */}
                <motion.div
                    className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-numerano-navy"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-numerano-navy">
                        <span>🧠</span> Weekly Brain Buff
                    </h3>
                    <div className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-100">
                        <p className="font-semibold text-lg mb-3 text-numerano-blue">Problem #42</p>
                        <p className="italic text-gray-800 font-medium">"If you have a 3-liter jug and a 5-liter jug, how can you measure exactly 4 liters?"</p>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-600">Your Solution</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-numerano-navy focus:outline-none transition text-slate-900 bg-white"
                                rows={3}
                                placeholder="Type your logic here..."
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-numerano-navy text-white py-3 rounded-lg font-bold shadow-md hover:bg-blue-900 transition"
                        >
                            Submit Answer
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
