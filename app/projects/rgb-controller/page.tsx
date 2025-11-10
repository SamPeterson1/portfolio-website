"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Network, Server, Cpu, Lightbulb, Music } from "lucide-react";

export default function RBGController() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-gradient-to-b from-purple-950 to-purple-900 text-gray-100 p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-3">
          Distributed RGB LED Controller
        </h1>
        <p className="text-gray-300 text-lg">
          A networked, event-driven lighting controller supporting synchronized LED effects across multiple devices with real-time audio and external integrations.
        </p>
      </motion.div>

      <section className="mt-16 max-w-5xl w-full space-y-12">
        {/* Functional Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Functional Description
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Supports position-based LED effects streamed and synchronized across multiple networked devices</li>
            <li>Integrates with external event sources and reacts to music</li>
            <li>Provides an HTTP API for controlling effects, updating parameters, and managing device states</li>
          </ul>
        </motion.div>

        {/* Networking */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Network className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Networking
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>mDNS used for automatic device discovery and network identification</li>
            <li>TCP socket for receiving external event data and synchronization messages</li>
            <li>UDP socket for high-throughput streaming of RGB frame data to endpoint devices</li>
          </ul>
        </motion.div>

        {/* Web Server */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Server className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Web Server
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The controller exposes a RESTful web interface built using the Axon web framework, allowing seamless integration with browsers and automation tools.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Handles device registration, discovery, and pairing</li>
            <li>Provides endpoints for enabling or disabling connected devices</li>
            <li>Supports selection of lighting effects, parameter tuning, and playback control (pause/resume)</li>
          </ul>
        </motion.div>

        {/* Multithreaded Architecture */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Multithreaded Architecture
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The system is built around a concurrent design where each functional component runs independently, enabling smooth real-time updates and synchronization.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Each device runs in its own thread, consuming a stream of RGB color frames to send to the hardware</li>
            <li>The effect thread manages the currently active effect — receiving events and computing the state used by the device manager</li>
            <li>The device manager calls a shader closure with the position of each LED, producing the color output streamed to device threads</li>
            <li>Event source threads feed events into the effect controller to influence animations or transitions in real time</li>
          </ul>
        </motion.div>

        {/* Supported Endpoint Devices */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Music className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Supported Endpoint Devices
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><strong>Nanoleaf Shapes</strong>: communicate through RESTful API calls and support UDP streaming</li>
            <li><strong>NeoPixel LED strips</strong>: controlled by an ESP32 device programmed to take streamed color data through UDP</li>
          </ul>
        </motion.div>
      </section>

      {/* Back Link */}
      <Link
        href="/projects"
        className="mt-16 text-purple-400 underline hover:text-purple-200 transition-colors"
      >
        ← Back to all projects
      </Link>
    </main>
  );
}
