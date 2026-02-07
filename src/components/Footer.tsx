import { Instagram, Mail, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-numerano-navy text-white text-center py-10"
        >
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-left">
                    <h3 className="text-2xl font-bold">NUMERANO</h3>
                    <p className="text-sm text-gray-300 mt-1">Where Logic Meets Creativity</p>
                </div>

                <div className="flex space-x-8 mb-6 md:mb-0">
                    <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <Mail size={24} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                        <Github size={24} />
                    </a>
                </div>

                <div className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Numerano. All rights reserved.
                </div>
            </div>
        </motion.footer>
    );
}
