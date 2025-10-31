export default function Skills(){
    const skills = ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Node.js', 'Design']
    return (
    <ul className="mt-4 flex flex-wrap gap-2">
    {skills.map(s=> (
    <li key={s} className="px-3 py-1 rounded-full bg-purplebrand-100 text-purplebrand-700 text-sm">{s}</li>
    ))}
    </ul>
    )
    }