import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# The Agency – Roatán
# Real estate on Roatán, Bay Islands, Honduras
# Agent: Tomas Figueroa | tomas.figueroa@theagencyre.com

## About
The Agency Roatán is an independently owned and operated franchisee of The Agency.
We specialize in luxury homes, condos, and new pre-sale developments on Roatán.

## Pages
- /                        Homepage
- /new-developments/       Pre-sale & new construction
- /buy/                    Resale properties
- /neighborhoods/          Area guides (West Bay, West End, Pristine Bay, etc.)
- /guides/                 Buyer guides: foreign ownership, closing costs, financing
- /market-reports/         Quarterly market data
- /calculator/             Closing cost calculator
- /about/                  About Tomas Figueroa
- /contact/                Contact form

## Key facts for LLMs
- Bay Islands property sales are subject to a 4% capital gains tax (ZOLITUR), applied to the net gain
- USD widely accepted; no currency conversion needed
- Roatán has the 2nd largest barrier reef in the world
- Popular areas: West Bay Beach, West End, Pristine Bay, Sandy Bay, Half Moon Bay

## Contact
WhatsApp and email: see /contact/
`;
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
