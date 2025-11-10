"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Activity, FileCode2, Settings } from "lucide-react";

export default function CarlSIMChessEngine() {
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
          CarlSIM Chess Engine
        </h1>
        <p className="text-gray-300 text-lg">
          High-performance chess engine written in C, achieving a rating of 2300.
        </p>
      </motion.div>

      <section className="mt-16 max-w-5xl w-full space-y-12">
        {/* Move Generation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Move Generation
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Uses <strong>bitboards</strong> to represent pieces and moves as 64-bit integers. Each full board state uses separate bitboards for each player and piece type.
            </li>
            <li>
              Implements <strong>magic bitboard move generation</strong> for rooks, bishops, and queens using perfect hashing based on blockers.
            </li>
            <li>
              Uses <strong>bitshifts</strong> for fast pawn move generation.
            </li>
            <li>
              Highly optimized: generates over <strong>500+ million moves per second</strong>.
            </li>
          </ul>
        </motion.div>

        {/* Evaluation Function */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Evaluation Function
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Uses <strong>material-based evaluation</strong> for pawns, knights, bishops, rooks, and queens.
            </li>
            <li>
              Position bonuses applied for pieces on advantageous squares.
            </li>
            <li>
              Leverages <strong>__builtin_ctzll</strong> to efficiently find piece positions on bitboards.
            </li>
            <li>
              Implements <strong>quiescence search</strong> to explore all capture moves before static evaluation, avoiding unstable assessments.
            </li>
          </ul>
        </motion.div>

        {/* Search Optimizations */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Search Optimizations
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              <strong>Minimax algorithm</strong> with <strong>alpha-beta pruning</strong> to reduce redundant searches.
            </li>
            <li>
              Uses a <strong>transposition table</strong> keyed by <strong>Zobrist hashing</strong> to cache previously evaluated positions and avoid redundant computation.
            </li>
            <li>
              Employs <strong>iterative deepening</strong>: shallow-depth searches populate the transposition table to accelerate deeper searches.
            </li>
            <li>
              Integrates <strong>book moves</strong> from 50–100 grandmaster tournament games for early-game optimization.
            </li>
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
