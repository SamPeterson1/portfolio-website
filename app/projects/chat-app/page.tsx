import Link from "next/link";
import ChatDemo from "@/components/ChatDemo";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-purplebrand-900 text-gray-100 p-10">
      <ChatDemo />
      <p className="mt-6 text-gray-300">
        Real-time chat application with Firebase and custom UI components.
      </p>

      <Link
        href="/projects"
        className="block mt-8 text-purple-400 underline hover:text-purple-200"
      >
        ← Back to all projects
      </Link>
    </div>
  );
}
