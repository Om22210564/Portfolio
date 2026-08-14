export interface SkillCategory {
	name: string;
	skills: string[];
}

export const skillCategories: SkillCategory[] = [
	{ name: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'C', 'SQL', 'R'] },
	{ name: 'AI / ML', skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLMs', 'RAG', 'Agentic AI', 'LangChain'] },
	{ name: 'Backend & Data', skills: ['FastAPI', 'Node.js', 'PostgreSQL', 'pgvector', 'Redis', 'BullMQ', 'Prisma'] },
	{ name: 'Infrastructure & Tools', skills: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Linux'] },
	{ name: 'Frontend', skills: ['React', 'Next.js', 'React Native', 'Astro'] },
];
