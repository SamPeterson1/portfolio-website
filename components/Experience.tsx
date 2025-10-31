export default function Experience(){
    const roles = [
    {company: 'Company A', title: 'Senior Frontend Engineer', period: '2022 — Present'},
    {company: 'Company B', title: 'Frontend Engineer', period: '2019 — 2022'},
    ]
    
    
    return (
    <div className="p-6 rounded-lg bg-white shadow">
    <h2 className="text-2xl font-semibold text-purplebrand-700">Work Experience</h2>
    <ul className="mt-4 space-y-4">
    {roles.map(r=> (
    <li key={r.company}>
    <div className="flex justify-between">
    <div>
    <div className="font-semibold">{r.title}</div>
    <div className="text-sm text-gray-600">{r.company}</div>
    </div>
    <div className="text-sm text-gray-500">{r.period}</div>
    </div>
    </li>
    ))}
    </ul>
    </div>
    )
    }