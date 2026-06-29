'use client';

import Link from 'next/link';
import { Calendar, ChevronLeft } from 'lucide-react';
import { trackSchedule, openSavvyCal } from '@/lib/analytics';

const UNIT_TYPES = [
  {
    type: 'Studio',
    sqft: '393 sq ft',
    sqm: '36.54 m²',
    hoa: '$146/mo',
    ideal: 'Efficient open-concept layout. Ideal for couples and solo investors. Kitchen, desk area, laundry, and terrace.',
  },
  {
    type: 'Studio Plus',
    sqft: '497 sq ft',
    sqm: '46.13 m²',
    hoa: '$185/mo',
    ideal: 'Larger footprint with a generous terrace designed to maximize views of the surrounding tropical greenery.',
  },
  {
    type: 'One Bedroom',
    sqft: '525 sq ft',
    sqm: '48.78 m²',
    hoa: '$195/mo',
    ideal: 'Separate living room and primary bedroom with direct views of green areas and the ocean.',
  },
  {
    type: 'Two Bedroom',
    sqft: '640 sq ft',
    sqm: '58.88 m²',
    hoa: '$236/mo',
    ideal: 'Master + junior bedroom, two bathrooms, spacious terrace. Designed for families and maximum indoor-outdoor living.',
  },
];

const AMENITIES = [
  'Infinity Pool',
  'Jacuzzi',
  'Rooftop Lounge',
  'Restaurant & Bar',
  'Fitness Center',
  'Coworking Space',
  'Meeting Room',
  'Cinema Room',
  'Game Room',
  'Green Areas',
  'Reception Lobby',
  'Elevators',
];

const PAYMENT_STEPS = [
  { pct: '10%', label: 'Reservation Deposit', desc: 'Secures your unit.' },
  { pct: '30%', label: 'Construction Commencement', desc: 'January 2027.' },
  { pct: '30%', label: 'Structure Completion', desc: 'Mid-construction milestone.' },
  { pct: '20%', label: 'Completion of Finishes', desc: 'Near-delivery milestone.' },
  { pct: '10%', label: 'At Closing', desc: 'Title transfer, H2 2028.' },
];

const LOCATION_TIMES = [
  { time: '5 min', dest: 'West Bay Beach' },
  { time: '5 min', dest: 'West End' },
  { time: '7 min', dest: 'Flowers Bay' },
  { time: '10 min', dest: 'Sandy Bay' },
  { time: '25 min', dest: "Int'l Airport" },
];

export default function PalmHausContent() {
  const handleSchedule = () => { trackSchedule(); openSavvyCal(); };

  return (
    <>
      {/* Back link */}
      <div style={{ backgroundColor: '#0a1628', paddingTop: 110 }}>
        <div className="section-container" style={{ maxWidth: 1100, paddingBottom: 0 }}>
          <Link
            href="/new-developments"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'none',
            }}
          >
            <ChevronLeft style={{ width: 12, height: 12 }} />
            New Developments
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 32, paddingBottom: 80 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div style={{ maxWidth: 800 }}>
            <span
              style={{
                display: 'inline-block',
                marginBottom: 24,
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 9,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                backgroundColor: '#c9a84c',
                color: '#ffffff',
                padding: '4px 12px',
              }}
            >
              Pre-Construction · Site Prep Underway
            </span>
            <h1
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(38px, 5.5vw, 68px)',
                fontWeight: 400,
                color: '#ffffff',
                lineHeight: 1.05,
                margin: '0 0 20px',
                letterSpacing: '-0.01em',
              }}
            >
              The Palm Haus
            </h1>
            <p
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.1em',
                margin: '0 0 36px',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              West Bay – West End Corridor · Roatán, Honduras
            </p>
            <p
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontSize: 'clamp(16px, 2vw, 21px)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                margin: '0 0 44px',
                maxWidth: 640,
              }}
            >
              A 12-story condominium between Roatán&apos;s two most active tourism hubs. Four unit types — studio to two bedroom — delivered turnkey with resort amenities and an owner-friendly rental program.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={handleSchedule}
                className="btn-accent"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Calendar style={{ width: 15, height: 15 }} />
                Request Pricing & Details
              </button>
              <Link
                href="/us-buyers-guide-roatan"
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                }}
              >
                U.S. Buyer&apos;s Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ backgroundColor: '#f5f2ee' }}>
        <div className="section-container" style={{ maxWidth: 1100, paddingTop: 0, paddingBottom: 0 }}>
          <div
            className="grid grid-cols-3 md:grid-cols-5"
            style={{ borderTop: '3px solid #093f4f' }}
          >
            {[
              { label: 'Stories', value: '12' },
              { label: 'Unit Types', value: '4' },
              { label: 'Construction Start', value: 'Jan 2027' },
              { label: 'Estimated Delivery', value: 'H2 2028' },
              { label: 'Est. Annual ROI', value: '8–10%' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding: '28px 20px',
                  borderRight: i < 4 ? '1px solid #d4e8ed' : 'none',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontWeight: 400,
                    color: '#093f4f',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#789ead',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="label-caps block mb-4">Overview</span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(24px, 3vw, 38px)',
                  fontWeight: 400,
                  color: '#093f4f',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Prime location. Competitive entry. Strong rental logic.
              </h2>
            </div>
            <div style={{ paddingTop: 4 }}>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.85, margin: '0 0 18px' }}>
                The Palm Haus is strategically positioned between West Bay Beach and West End — Roatán&apos;s two most visited destinations and the core of the island&apos;s short-term rental market. Five minutes from both, with a free resident shuttle included.
              </p>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.85, margin: '0 0 18px' }}>
                The development is designed for both lifestyle ownership and investment. Optimized unit sizes keep entry pricing competitive while maintaining strong rental appeal and long-term resale value in Roatán&apos;s most active tourism corridor.
              </p>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: '#555555', lineHeight: 1.85, margin: 0 }}>
                Site preparation is underway. Construction begins January 2027. Estimated delivery: second half of 2028.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <span className="label-caps block mb-8">Location</span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {LOCATION_TIMES.map((loc) => (
              <div key={loc.dest} style={{ backgroundColor: '#ffffff', padding: '22px 18px' }}>
                <p
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 24,
                    fontWeight: 400,
                    color: '#093f4f',
                    margin: '0 0 4px',
                    lineHeight: 1,
                  }}
                >
                  {loc.time}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 11,
                    color: '#789ead',
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {loc.dest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit Types */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div style={{ marginBottom: 48 }}>
            <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Residences</span>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Four unit types. All delivered turnkey.
              </h2>
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, margin: 0 }}>
                Every residence includes major kitchen appliances, washer & dryer, A/C units, built-in cabinetry, closets, LED lighting, and premium finishes. Ready to live in or rent from day one.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginBottom: 28 }}>
            {UNIT_TYPES.map((unit) => (
              <div
                key={unit.type}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#789ead',
                    margin: '0 0 14px',
                  }}
                >
                  {unit.type}
                </p>
                <p
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: 30,
                    fontWeight: 400,
                    color: '#ffffff',
                    margin: '0 0 3px',
                    lineHeight: 1,
                  }}
                >
                  {unit.sqft}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.3)',
                    margin: '0 0 20px',
                  }}
                >
                  {unit.sqm}
                </p>
                <p
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.65,
                    margin: '0 0 24px',
                    flex: 1,
                  }}
                >
                  {unit.ideal}
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 16 }}>
                  <p
                    style={{
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.25)',
                      margin: '0 0 4px',
                    }}
                  >
                    Est. HOA
                  </p>
                  <p
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: 17,
                      color: '#d4e8ed',
                      margin: 0,
                    }}
                  >
                    {unit.hoa}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleSchedule}
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#789ead',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Request current pricing & availability →
          </button>
        </div>
      </section>

      {/* Amenities */}
      <section style={{ backgroundColor: '#093f4f', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start" style={{ marginBottom: 48 }}>
            <div>
              <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Amenities</span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontWeight: 400,
                  color: '#ffffff',
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Resort-style amenities on the rooftop and grounds.
              </h2>
            </div>
            <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, margin: 0, paddingTop: 6 }}>
              The 12th-floor rooftop is designed for every member of the family — outdoor terrace, cinema room, game room, and meeting room, all positioned to maximize panoramic views. Pool and jacuzzi on the grounds below. A free resident shuttle connects to West Bay Beach and West End daily.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
            {AMENITIES.map((name) => (
              <div
                key={name}
                style={{
                  backgroundColor: '#093f4f',
                  padding: '18px 20px',
                }}
              >
                <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>
                  {name}
                </span>
              </div>
            ))}
            <div
              style={{
                backgroundColor: '#093f4f',
                padding: '18px 20px',
                gridColumn: 'span 2',
              }}
            >
              <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.65 }}>
                Pool, jacuzzi, elevators, landscaping, security, and common area utilities included in HOA ($4/m²/month).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment + Investment */}
      <section style={{ backgroundColor: '#f5f2ee', paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-container" style={{ maxWidth: 1100 }}>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">

            {/* Payment schedule */}
            <div>
              <span className="label-caps block mb-4">Payment Schedule</span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  fontWeight: 400,
                  color: '#093f4f',
                  margin: '0 0 36px',
                  lineHeight: 1.2,
                }}
              >
                Five tranches tied to construction milestones.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {PAYMENT_STEPS.map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: 18,
                      paddingBottom: i < PAYMENT_STEPS.length - 1 ? 0 : 0,
                      position: 'relative',
                    }}
                  >
                    {i < PAYMENT_STEPS.length - 1 && (
                      <div
                        style={{
                          position: 'absolute',
                          left: 19,
                          top: 40,
                          height: 'calc(100% - 4px)',
                          width: 1,
                          backgroundColor: '#d4e8ed',
                        }}
                      />
                    )}
                    <div
                      style={{
                        flexShrink: 0,
                        width: 38,
                        height: 38,
                        backgroundColor: '#093f4f',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 12, fontWeight: 700, color: '#ffffff' }}>
                        {step.pct}
                      </span>
                    </div>
                    <div style={{ paddingTop: 4, paddingBottom: 28 }}>
                      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', margin: '0 0 2px' }}>
                        {step.label}
                      </p>
                      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment overview */}
            <div>
              <span className="label-caps block mb-4">Investment Overview</span>
              <h2
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: 'clamp(22px, 2.5vw, 28px)',
                  fontWeight: 400,
                  color: '#093f4f',
                  margin: '0 0 28px',
                  lineHeight: 1.2,
                }}
              >
                Built for rental income from day one.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ backgroundColor: '#ffffff', padding: '24px 24px' }}>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', margin: '0 0 8px' }}>
                    Short-Term Rental Program
                  </p>
                  <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 22, color: '#093f4f', margin: '0 0 8px', lineHeight: 1.1 }}>
                    75% Owner / 25% Operator
                  </p>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', margin: 0, lineHeight: 1.65 }}>
                    Optional enrollment in The Palm Haus Exclusive Rental Management Program. Fully managed, vacation-rental ready at delivery.
                  </p>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '24px 24px' }}>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', margin: '0 0 8px' }}>
                    Estimated Annual ROI
                  </p>
                  <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 22, color: '#093f4f', margin: '0 0 8px', lineHeight: 1.1 }}>
                    8–10% annually
                  </p>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', margin: 0, lineHeight: 1.65 }}>
                    Subject to owner usage. Based on short-term rental demand in Roatán&apos;s West Bay – West End corridor.
                  </p>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '24px 24px' }}>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#789ead', margin: '0 0 8px' }}>
                    Long-Term Rental Option
                  </p>
                  <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: 22, color: '#093f4f', margin: '0 0 8px', lineHeight: 1.1 }}>
                    Self-managed or 10% fee
                  </p>
                  <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 12, color: '#789ead', margin: 0, lineHeight: 1.65 }}>
                    Owners may self-manage rentals exceeding 6 months. Optional property management at 10%/month includes tenant sourcing, rent collection, and property supervision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="section-container" style={{ maxWidth: 760 }}>
          <span className="label-caps block mb-8">FAQ</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { q: 'Can foreigners own property in Honduras?', a: 'Yes. U.S. and foreign buyers have the same property rights as Honduran citizens. Title is registered at the Public Registry.' },
              { q: 'Can I live full-time in my unit?', a: 'Yes. There are no restrictions on owner-occupancy.' },
              { q: 'Can I participate in short-term rentals?', a: 'Yes. The Palm Haus Exclusive Rental Management Program is available to all owners who choose to enroll their unit for short-term vacation rentals.' },
              { q: 'Are units delivered with appliances?', a: 'Yes. Every unit includes major kitchen appliances, washer & dryer, A/C units, built-in cabinetry and closets, LED lighting, and the finishes specified in the FF&E package.' },
              { q: 'What is the HOA fee?', a: 'Estimated at $4/m²/month. Studio units are approximately $146/month; two-bedroom units approximately $236/month. HOA covers common areas, pool, jacuzzi, elevators, landscaping, security, and utilities.' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid #e8f0f3',
                  paddingTop: 24,
                  paddingBottom: 24,
                }}
              >
                <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 600, color: '#093f4f', margin: '0 0 8px' }}>
                  {item.q}
                </p>
                <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, color: '#666666', lineHeight: 1.75, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #e8f0f3' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0a1628', paddingTop: 80, paddingBottom: 80 }}>
        <div className="section-container" style={{ maxWidth: 720, textAlign: 'center' }}>
          <span className="label-caps block mb-4" style={{ color: '#789ead' }}>Next Step</span>
          <h2
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 400,
              color: '#ffffff',
              margin: '0 0 16px',
              lineHeight: 1.2,
            }}
          >
            Interested in The Palm Haus?
          </h2>
          <p
            style={{
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              margin: '0 auto 40px',
              maxWidth: 500,
            }}
          >
            Schedule a 20-minute call to discuss current pricing, unit availability, and how this project fits your timeline and investment goals. No obligation.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <button
              onClick={handleSchedule}
              className="btn-accent"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Calendar style={{ width: 15, height: 15 }} />
              Schedule a Strategy Call
            </button>
            <Link
              href="/new-developments"
              style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
              }}
            >
              ← All Developments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
