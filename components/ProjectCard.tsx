import Link from 'next/link'


export default function ProjectCard({ project }: any){
return (
<article className="p-4 rounded-lg bg-white shadow">
<img src={project.image || '/placeholder.png'} alt={project.title} className="w-full h-40 object-cover rounded" />
<h3 className="mt-3 text-lg font-semibold text-purplebrand-700">{project.title}</h3>
<p className="text-sm text-gray-600 mt-1">{project.short}</p>
<div className="mt-3">
<Link href={`/projects/${project.slug}`} className="text-purplebrand-700 underline">Read more →</Link>
</div>
</article>
)
}