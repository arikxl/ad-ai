export const GENERATE_SCRIPT_PROMPT = `Topic:{topic}
Generate 3 different 30-second video scripts based on the user's topic.

Return the result in Hebrew as a JSON array using the following schema:

[
  { "content": "..." },
  { "content": "..." },
  { "content": "..." }
]
`;
