"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Cpu, Braces, FileCode2, Settings } from "lucide-react";

export default function MarlinLang() {
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
          Marlin Programming Language
        </h1>
        <p className="text-gray-300 text-lg">
          A lightweight, statically-typed systems programming language built from scratch featuring a lexer, parser, compiler, and virtual machine.
        </p>
      </motion.div>

      <section className="mt-16 max-w-5xl w-full space-y-12">
        {/* Lexer / Parser / AST */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Braces className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Lexer → Parser → Abstract Syntax Tree (AST)
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The front-end of the Marlin compiler follows a traditional three-stage design, converting raw source code into a structured program representation.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              <strong>Lexer: </strong>Converts a character stream into an enumeration of token types- (identifiers, literals, operators, etc.)
            </li>
            <li>
              <strong>Parser: </strong>Consumes the token stream to produce an Abstract Syntax Tree (AST), representing the syntactic structure of the program
            </li>
          </ul>
        </motion.div>

        {/* Compiler / Linker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Cpu className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Compiler and Linker
            </h3>
          </div>

          <p className="text-gray-300 mb-4">
            The compiler transforms the AST into executable assembly that can be run on a virtual machine implementing the instruction set
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Implements a visitor-based traversal to generate assembly instructions from AST nodes</li>
            <li>Maintains separate memory segments for code and data to support linking and relocation</li>
          </ul>
        </motion.div>

        {/* Language Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FileCode2 className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Language Features
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Arithmetic expressions, boolean operators, operator precedence</li>
            <li>Expression-oriented syntax: if statements, loops, and assignments can return values</li>
            <li>While loops, for loops, and expression loops that return a value upon exit</li>
            <li>Arrays, pointers, and structs</li>
            <li>Nested type resolution for hierarchical data structures</li>
          </ul>
        </motion.div>

        {/* Instruction Set */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-purple-300" />
            <h3 className="text-2xl font-semibold text-purple-200">
              Instruction Set
            </h3>
          </div>

          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Compact, RISC-style instruction set</li>
            <li>Integer and double-precision arithmetic: ADD, SUB, MULT, DIV, AND, OR, XOR, etc (immediate and register formats)</li>
            <li>LD/ST instructions for memory accesses with PC-relative and base + offset addressing modes</li>
            <li>Push/Pop operations to atomically push and pop data from the stack</li>
            <li>Conditional branches (JMP), function calls (CALL), and returns (RET)</li>
            <li>PUTC and GETC for character I/O operations</li>
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
