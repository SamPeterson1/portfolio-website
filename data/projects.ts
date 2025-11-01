// data/projects.ts
export interface ProjectSummary {
  slug: string;
  title: string;
  description: string;
  thumbnail?: string;
  skills?: string[];
}

export const projects: ProjectSummary[] = [
  {
    slug: "gnc-flight-software",
    title: "GNC Flight Software",
    description:
      "Flight software for a collection of actively stabilized high-powered rockets, supporting advanced controls algorithms and real-time telemetry.",
      skills: ["C/C++", "STM32 HAL", "FreeRTOS", "SPI", "UART", "I2C", "PWM", "DMA", "ARM", "Device Drivers"],
  },
  {
    slug: "marlin-lang",
    title: "Marlin Programming Language",
    description:
      "A custom C-like programming language, compiler, and virtual machine for a custom instruction set implemented in Rust.",
      skills: ["Rust", "Compiler", "Instruction Set Architecture", "Virtual Machine"],
  },
  {
    slug: "rgb-controller",
    title: "Distributed RGB LED Controller",
    description:
      "Multithreaded RGB LED controller software implemented in Rust, real-time effects across multiple lighting devices synchronized with games and music.",
    skills: ["Rust", "Networking", "UDP", "TCP", "Multithreading", "Axum", "Tokio", "RESTful API", "Fourier Transform"],
  },
  {
    slug: "carlsim-chess",
    title: "CarlSIM Chess Engine",
    description:
      "A 2300+ rated chess engine implemented in C using advanced techniques in chess engine programming.",
      skills: ["C", "Alpha-Beta Pruning", "Minimax", "Hashing", "Optimization", "Heuristics"],
  },
  {
    slug: "stickers",
    title: "Stickers",
    description:
      "A 3D twisty puzzle solver and renderer implemented using Java and OpenGL capable of solving the Rubik's Cube, Pyraminx, Square-1, Ivy Cube, and Skewb.",
      skills: ["Java", "OpenGL", "GLSL", "Graphics Pipeline", "Shaders", "Algorithms", "Hashing"],
  },
  {
    slug: "tree-lighting",
    title: "3D Christmas Tree Lighting",
    description:
      "Uses image processing and linear algebra to find the 3D position of LEDs on a Christmas tree, allowing for 3D lighting effects. Implemented using an ESP32 and STM32 with a custom web server and interface.",
      skills: ["STM32", "ESP32", "C/C++", "HTTP", "HTML", "CSS", "JS", "Linear Algebra", "Computer Vision"],
  },
  {
    slug: "activ-tracker",
    title: "ActivTracker",
    description: "Fitness tracker app implemented as a final project for AP Computer Science",
    skills: ["SQL", "PHP", "HTML", "CSS", "JS", "JQuery"]
  }
];
