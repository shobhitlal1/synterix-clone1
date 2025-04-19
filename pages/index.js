import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Innovation Starts Here
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Welcome to your modern AI-powered experience. Content goes here.
        </motion.p>
        <Button className="rounded-2xl px-6 py-3 text-lg flex items-center gap-2">
          Get Started <ArrowRight size={18} />
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16 max-w-7xl mx-auto">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Feature Title {i + 1}</h3>
              <p className="text-gray-600">
                Placeholder text for feature description. This can be updated later with real content.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © 2025 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
