import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const name = data.get('name')?.toString().trim() ?? '';
    const email = data.get('email')?.toString().trim() ?? '';
    const phone = data.get('phone')?.toString().trim() ?? '';
    const message = data.get('message')?.toString().trim() ?? '';
    const source = data.get('source')?.toString() ?? 'unknown';
    const project = data.get('project')?.toString() ?? '';
    const country = data.get('country')?.toString() ?? '';
    const use = data.get('use')?.toString() ?? '';
    const sourcePage = data.get('sourcePage')?.toString() ?? '';

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const LEAD_EMAIL = import.meta.env.LEAD_EMAIL ?? 'tomas.figueroa@theagencyre.com';
    const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;

    const subject = project
      ? `New lead: ${name} — ${project}`
      : `New lead: ${name} (${source})`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      country ? `Country: ${country}` : null,
      use ? `Intended use: ${use}` : null,
      project ? `Project: ${project}` : null,
      `Source: ${source}`,
      sourcePage ? `Source page: ${sourcePage}` : null,
      message ? `\nMessage:\n${message}` : null,
    ].filter(Boolean).join('\n');

    if (SENDGRID_API_KEY) {
      await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: LEAD_EMAIL }] }],
          from: { email: 'noreply@tomasfigueroa.com', name: 'Website Lead' },
          reply_to: { email, name },
          subject,
          content: [{ type: 'text/plain', value: body }],
        }),
      });
    } else {
      // Log to console in dev/staging when SendGrid key not set
      console.log('[LEAD]', { name, email, source, subject, body });
    }

    const redirectUrl = new URL('/thank-you/', new URL(request.url).origin);
    return Response.redirect(redirectUrl.href, 303);
  } catch (err) {
    console.error('[lead API error]', err);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
