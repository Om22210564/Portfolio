export interface Experience {
	company: string;
	team?: string;
	role: string;
	period: string;
	location: string;
	highlights: string[];
	technologies: string[];
}

export const experience: Experience[] = [
	{
		company: 'Deepstack Software Ltd.',
		role: 'Software Engineering Intern',
		period: 'Feb 2026 — May 2026',
		location: 'Hyderabad, Telangana',
		highlights: [
			'Built a custom agent using Claude Code workflows, hooks, and custom skills to validate repository README instructions, detect execution issues, record terminal sessions, and generate reports.',
			'Built a web ingestion and semantic retrieval system that crawls websites through CLI or MCP commands with configurable depth and page limits, then chunks and embeds scraped content in PostgreSQL with pgvector for semantic queries.',
			'Designed and implemented core features for an AI-powered chess learning platform, including curriculum progression, scheduling, subscriptions, analytics, and school management.',
			'Built an AI chatbot by integrating the Claude API with Stockfish, while developing scalable background processing, payment automation, and notifications.',
		],
		technologies: ['Claude Code', 'MCP', 'PostgreSQL', 'pgvector', 'Claude API', 'Stockfish'],
	},
	{
		company: 'Siemens Ltd.',
		role: 'Digitalisation Intern',
		period: 'July 2025 — Jan 2026',
		location: 'Chhatrapati Sambhajinagar, Maharashtra',
		highlights: [
			'Built and deployed a Mendix-based Manufacturing Execution System application with real-time monitoring dashboards used in factory production, reducing manual effort in shop-floor processes.',
			'Worked on a Raspberry Pi-based vision inspection system using multiple region-specific YOLO models; used Grad-CAM to diagnose misclassifications and improved First Pass Yield by 3–4%.',
			'Completed setup and deployment of a vision inspection system on Jetson Orin Nano, including model integration, inference optimization, and on-device validation.',
			'Tested and validated logic, workflows, and data handling for Mendix applications deployed in UAT.',
		],
		technologies: ['Mendix', 'YOLO', 'Grad-CAM', 'Raspberry Pi', 'Jetson Orin Nano'],
	},
];
