"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Satellite,
  CircuitBoard,
  BarChart3,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

export default function GNCFlightSoftware() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
          GNC Flight Software
        </h1>
      </motion.div>

      <section className="mt-16 max-w-5xl w-full space-y-12">
        {/* Core Functionality */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <div className="flex items-center gap-3 mb-4">
            <Satellite className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Core Functionality
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            A generic flight software stack for actively stabilized rockets (jet vanes, fin tabs, thrust vector control)
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Ground station GUI for displaying real-time telemetry and sending commands reliably
            </li>
            <li>
              On-board data logging for higher resolution data and redundancy
            </li>
            <li>
              Filtering and sensor fusion to feed into control algorithms
            </li>
          </ul>
        </motion.div>

        {/* Task Architecture */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Task Architecture
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The software uses <strong>FreeRTOS</strong> to handle concurrent tasks and reduce latency, making use of <strong>stream buffers</strong> to stream telemetry data from an ISR, a <strong>mutex</strong> to protect the rocket's global state struct from data races, and <strong>notifications</strong> to control execution of tasks.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><strong>Transmit:</strong> Sends updated rocket state to the ground station in a series of data packets</li>
            <li><strong>Receive:</strong> Receives commands from the radio using a <strong>stream buffer</strong></li>
            <li><strong>Controls:</strong> Runs an <strong>LQR</strong> control algorithm and sends <strong>PWM</strong> signal to actuators</li>
            <li><strong>Sensors:</strong> Reads sensor data, performing sensor fusion and an <strong>Extended Kalman Filter</strong> to update rocket state</li>
            <li><strong>Logger:</strong> Records data to the flash chip and copies it to an SD card once landed</li>
          </ul>

          <div className="relative w-full max-w-3xl mx-auto my-8">
            <div className="relative aspect-[1508/1122]">
              <Image
                src="/flight_software_tasks.png"
                alt="Task Architecture Diagram"
                fill
                className="object-contain rounded-2xl border border-purple-700/50"
              />
            </div>
          </div>
        </motion.div>

        {/* Hardware Interfaces */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <div className="flex items-center gap-3 mb-4">
            <CircuitBoard className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Hardware Interfaces
            </h3>
          </div>

          <ul className="grid md:grid-cols-2 gap-2 text-gray-400">
            <li><strong>W25Q Flash</strong> - Quad SPI</li>
            <li><strong>ADIS16500 IMU</strong> - SPI</li>
            <li><strong>LIS3MDL Magnetometer</strong> - SPI</li>
            <li><strong>ZED-F9P-04B GPS</strong> - UART</li>
            <li><strong>XBee Pro S3B Radio</strong> - UART</li>
            <li><strong>Servos</strong> - PWM</li>
            <li><strong>ADCs</strong> - DMA</li>
          </ul>
        </motion.div>

        {/* Communication Protocol */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <div className="flex items-center gap-3 mb-4">
            <Terminal className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Communication Protocol
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Packet integrity via <strong>CRC-8</strong> checks</li>
            <li>Frame boundary encoding using <strong>COBS</strong> (zero-encoded packets)</li>
            <li>Separated command and dataframe structures (commands include UUID + command ID)</li>
            <li>Commands require acknowledgments; up to 3 retries on failure</li>
          </ul>
        </motion.div>

        {/* Simulation */}
        <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Simulation (Work in progress)
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The software is simulated using <strong>Renode</strong> to allow the firmware to run on a virtual STM32 microcontroller. This setup enables realistic, automated tests without requiring physical hardware.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Supports SD card read/write emulation for testing data logging and retrieval</li>
            <li>Allows injection of synthetic sensor data for edge-case validation</li>
            <li>Integrates with the Robot Framework for automated unit and regression testing</li>
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
