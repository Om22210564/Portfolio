export interface Project {
	number: string;
	title: string;
	subtitle?: string;
	description: string;
	highlights?: string[];
	technologies: string[];
	github?: string;
	demo?: string;
	video?: string;
}

export const projects: Project[] = [
	{
		number: '01',
		title: 'Multi-Agent Personal Shopping Assistant',
		description:
			'Multi-agent shopping assistant using A2A, AG-UI, A2UI, and UCP with a mock AP2 mandate and SerpAPI for intelligent product discovery, preferences, cart management, and mock checkout.',
		highlights: [
			'Product discovery through a dedicated search capability.',
			'Multi-agent orchestration with a persistent mock checkout flow.',
		],
		technologies: ['A2A', 'AG-UI', 'A2UI', 'UCP', 'AP2', 'SerpAPI'],
		github: 'https://github.com/Om22210564/Multi-Agent-Personal-Shopping-Assistant',
		video: 'videos/shopping-assistant-demo.webm',
	},
	{
		number: '02',
		title: 'OpenAnt',
		subtitle: 'Cross-CLI AI Session Bridge',
		description:
			'A CLI session bridge that enables cross-compatibility between Claude Code CLI and Codex by parsing, converting, and migrating conversation sessions.',
		technologies: ['CLI', 'Codex', 'Claude Code'],
		github: 'https://github.com/Om22210564/OpenAnt',
	},
	{
		number: '03',
		title: 'Chess-Persona',
		description:
			'A transfer learning-based chess AI that fine-tunes the pretrained Maia3-5M transformer on a player’s PGN game history to learn and mimic their playing style.',
		highlights: [
			'Predicts moves that reflect a player’s opening repertoire, positional preferences, and decision-making patterns.',
		],
		technologies: ['Transfer Learning', 'Maia3-5M', 'Transformer', 'PGN'],
		github: 'https://github.com/Om22210564/Chess-Persona',
	},
	{
		number: '04',
		title: 'AI Memory Tree',
		subtitle: 'Branchable LLM Conversations',
		description:
			'A prototype AI chat system that stores conversations as a tree, allowing users to branch, revisit, and explore topics without context pollution.',
		technologies: ['FastAPI', 'React', 'Vite', 'Groq'],
		github: 'https://github.com/Om22210564/AI-Memory-Tree-Branchable-LLM-Conversations',
	},
	{
		number: '05',
		title: 'Invoice OCR',
		description:
			'An AI-powered web application that extracts, edits, stores, and analyzes invoice data from images with an interactive dashboard.',
		technologies: ['OCR', 'Image Processing', 'Dashboard'],
		github: 'https://github.com/Om22210564/Invoice-OCR',
	},
];
