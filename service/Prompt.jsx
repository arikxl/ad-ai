export const GENERATE_SCRIPT_PROMPT = `Topic:{topic}
Generate 3 different 20-second video scripts based on the user's topic.

Return the result in {language} as a JSON array using the following schema:

[
  { "content": "..." },
  { "content": "..." },
  { "content": "..." }
]
`;
