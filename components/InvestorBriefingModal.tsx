'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import { X } from 'lucide-react';
import { trackLead, trackSchedule, openSavvyCal } from '@/lib/analytics';

const ZAPIER_MASTER_BRIEFING_WEBHOOK = 'REPLACE_WITH_ZAPIER_WEBHOOK_URL';

const COUNTRY_CODES = [
  { code: '+1', label: 'US/CA (+1)', iso: 'US' },
  { code: '+44', label: 'UK (+44)', iso: 'GB' },
  { code: '+61', label: 'Australia (+61)', iso: 'AU' },
  { code: '+49', label: 'Germany (+49)', iso: 'DE' },
  { code: '+33', label: 'France (+33)', iso: 'FR' },
  { code: '+31', label: 'Netherlands (+31)', iso: 'NL' },
  { code: '+34', label: 'Spain (+34)', iso: 'ES' },
  { code: '+39', label: 'Italy (+39)', iso: 'IT' },
  { code: '+41', label: 'Switzerland (+41)', iso: 'CH' },
  { code: '+52', label: 'Mexico (+52)', iso: 'MX' },
  { code: '+55', label: 'Brazil (+55)', iso: 'BR' },
  { code: '+57', label: 'Colombia (+57)', iso: 'CO' },
  { code: '+506', label: 'Costa Rica (+506)', iso: 'CR' },
  { code: '+504', label: 'Honduras (+504)', iso: 'HN' },
  { code: '+507', label: 'Panama (+507)', iso: 'PA' },
  { code: '+64', label: 'New Zealand (+64)', iso: 'NZ' },
  { code: '+65', label: 'Singapore (+65)', iso: 'SG' },
  { code: '+971', label: 'UAE (+971)', iso: 'AE' },
  { code: '+972', label: 'Israel (+972)', iso: 'IL' },
  { code: '+other', label: 'Other', iso: '' },
];

const COUNTRIES = [
  'United States', 'Canada', 'United Kingdom', 'Australia', 'New Zealand',
  'Germany', 'France', 'Netherlands', 'Switzerland', 'Spain', 'Italy', 'Belgium',
  'Austria', 'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Portugal',
  'Mexico', 'Brazil', 'Colombia', 'Costa Rica', 'Panama', 'Argentina', 'Chile',
  'Peru', 'Ecuador', 'Venezuela', 'Honduras', 'Guatemala', 'El Salvador',
  'Nicaragua', 'Belize', 'Dominican Republic', 'Cuba', 'Jamaica', 'Trinidad and Tobago',
  'Singapore', 'UAE', 'Israel', 'South Africa', 'India', 'Japan', 'South Korea',
  'China', 'Hong Kong', 'Taiwan', 'Thailand', 'Malaysia', 'Philippines', 'Indonesia',
  'Other',
].sort();

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Valid email required'),
  phoneCode: z.string().min(1, 'Required'),
  phoneNumber: z.string().min(4, 'Valid phone required'),
  country: z.string().min(1, 'Required'),
  budget: z.string().min(1, 'Required'),
  timeline: z.string().min(1, 'Required'),
  motivation: z.enum(['Investment', 'Lifestyle', 'Both'], { error: 'Required' }),
});

type FormData = z.infer<typeof schema>;

function getUtmParams() {
  if (typeof window === 'undefined') return {};
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get('utm_source') ?? '',
    utm_medium: p.get('utm_medium') ?? '',
    utm_campaign: p.get('utm_campaign') ?? '',
    utm_content: p.get('utm_content') ?? '',
    utm_term: p.get('utm_term') ?? '',
  };
}

export default function InvestorBriefingModal() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('openBriefing', handler);
    return () => window.removeEventListener('openBriefing', handler);
  }, []);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { phoneCode: '+1', motivation: 'Both' },
  });

  const phoneCode = watch('phoneCode');
  const phoneNumber = watch('phoneNumber');

  const onSubmit = async (data: FormData) => {
    const fullPhone = `${data.phoneCode === '+other' ? '' : data.phoneCode}${data.phoneNumber}`;
    if (data.phoneCode !== '+other') {
      const codeEntry = COUNTRY_CODES.find(c => c.code === data.phoneCode);
      if (codeEntry?.iso && !isValidPhoneNumber(fullPhone, codeEntry.iso as never)) {
        // soft warning — still allow submit
      }
    }

    setSubmitting(true);
    const payload = {
      ...data,
      phone: fullPhone,
      ...getUtmParams(),
      referrer: typeof document !== 'undefined' ? document.referrer : '',
      landing_url: typeof window !== 'undefined' ? window.location.href : '',
      submitted_at: new Date().toISOString(),
      source: 'tomasfigueroa.com-master-briefing',
    };

    try {
      await fetch(ZAPIER_MASTER_BRIEFING_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch {
      // fail silently — don't block user on webhook errors
    }

    trackLead();
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'investor_briefing_download');
    }

    setSubmitting(false);
    setSuccess(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setSuccess(false); reset(); }, 300);
  };

  const handleSuccessCall = () => {
    trackSchedule();
    openSavvyCal();
  };

  if (!open) return null;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    fontSize: 13,
    fontFamily: 'Arial, Helvetica, sans-serif',
    border: '1px solid #d1d5db',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#093f4f',
    marginBottom: 6,
    fontFamily: 'Arial, Helvetica, sans-serif',
  };

  const errorStyle: React.CSSProperties = {
    fontSize: 11,
    color: '#dc2626',
    marginTop: 4,
    fontFamily: 'Arial, Helvetica, sans-serif',
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.65)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: 560,
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          margin: 'auto',
        }}
      >
        {/* Header */}
        <div style={{ backgroundColor: '#093f4f', padding: '28px 32px 24px', position: 'relative' }}>
          <button
            onClick={handleClose}
            style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)', display: 'flex' }}
            aria-label="Close"
          >
            <X style={{ width: 20, height: 20 }} />
          </button>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 400, color: '#ffffff', margin: 0, lineHeight: 1.2 }}>
            Get the Roatan Investor Briefing
          </h2>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginTop: 10, marginBottom: 0 }}>
            Two minutes. Tell me a little about what you&apos;re looking for and I&apos;ll send the briefing — the catalysts, the math, current developments, and how to evaluate them honestly.
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '28px 32px 32px' }}>
          {success ? (
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{ width: 52, height: 52, backgroundColor: '#093f4f', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', borderRadius: 0 }}>
                <svg style={{ width: 26, height: 26, color: '#ffffff' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 20, fontWeight: 400, color: '#093f4f', marginTop: 0, marginBottom: 10 }}>
                Briefing on its way to your inbox.
              </h3>
              <p style={{ fontSize: 13, color: '#555555', lineHeight: 1.75, marginBottom: 24 }}>
                Check your email in two minutes. While you wait — want to book a call?
              </p>
              <button onClick={handleSuccessCall} className="btn-accent" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                Schedule a Call with Tomas
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3" style={{ marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <input {...register('firstName')} style={inputStyle} placeholder="Jane" />
                  {errors.firstName && <p style={errorStyle}>{errors.firstName.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <input {...register('lastName')} style={inputStyle} placeholder="Smith" />
                  {errors.lastName && <p style={errorStyle}>{errors.lastName.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Email</label>
                <input {...register('email')} type="email" style={inputStyle} placeholder="jane@example.com" />
                {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Phone</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <select {...register('phoneCode')} style={{ ...inputStyle, width: 'auto', flexShrink: 0, paddingRight: 8 }}>
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>{c.label}</option>
                    ))}
                  </select>
                  <input {...register('phoneNumber')} type="tel" style={inputStyle} placeholder="555 123 4567" />
                </div>
                {errors.phoneNumber && <p style={errorStyle}>{errors.phoneNumber.message}</p>}
              </div>

              {/* Country */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Country of Residence</label>
                <select {...register('country')} style={inputStyle}>
                  <option value="">Select country…</option>
                  {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                {errors.country && <p style={errorStyle}>{errors.country.message}</p>}
              </div>

              {/* Budget */}
              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Budget Range</label>
                <select {...register('budget')} style={inputStyle}>
                  <option value="">Select…</option>
                  {['$300K–$500K', '$500K–$750K', '$750K–$1M', '$1M+', 'Just exploring'].map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
                {errors.budget && <p style={errorStyle}>{errors.budget.message}</p>}
              </div>

              {/* Timeline */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Timeline</label>
                <select {...register('timeline')} style={inputStyle}>
                  <option value="">Select…</option>
                  {['0–3 months', '3–6 months', '6–12 months', 'Just researching'].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.timeline && <p style={errorStyle}>{errors.timeline.message}</p>}
              </div>

              {/* Motivation */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>What pulls you to Roatán?</label>
                <div style={{ display: 'flex', gap: 24, marginTop: 8 }}>
                  {(['Investment', 'Lifestyle', 'Both'] as const).map(opt => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#333', cursor: 'pointer', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                      <input {...register('motivation')} type="radio" value={opt} style={{ accentColor: '#093f4f' }} />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.motivation && <p style={errorStyle}>{errors.motivation.message}</p>}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-accent"
                style={{ width: '100%', justifyContent: 'center', display: 'flex', opacity: submitting ? 0.7 : 1 }}
              >
                {submitting ? 'Sending…' : 'Send Me the Briefing'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
