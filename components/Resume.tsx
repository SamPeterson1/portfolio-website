export default function Resume(){
    return (
    <div className="p-6 rounded-lg bg-white shadow">
    <h2 className="text-2xl font-semibold text-purplebrand-700">Resume</h2>
    <p className="mt-2 text-gray-700">Download a PDF or view key highlights below.</p>
    <ul className="mt-4 list-disc list-inside text-gray-700">
    <li>Experience: 5+ years building web apps</li>
    <li>Education: B.S. in Computer Science</li>
    <li>Available for work: Yes</li>
    </ul>
    <div className="mt-4">
    <a className="px-4 py-2 rounded bg-purplebrand-600 text-white" href="#">Download PDF</a>
    </div>
    </div>
    )
    }