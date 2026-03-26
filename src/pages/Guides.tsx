import { useState } from 'react';
import { FileText, Download, X, Send, Loader2 } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  description: string;
  file: string;
  pages: string;
}

const guides: Guide[] = [
  {
    id: 'buyers-guide',
    title: "Buyer's Guide to Roatan Real Estate",
    description: 'Everything you need to know before purchasing property in Roatan — from legal process to neighborhood selection and financing.',
    file: '/guides/buyers-guide.pdf',
    pages: 'Comprehensive Guide',
  },
];

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Guides = () => {
  const [selected, setSelected] = useState<Guide | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const openModal = (guide: Guide) => {
    setSelected(guide);
    setName('');
    setEmail('');
    setError('');
  };

  const closeModal = () => {
    setSelected(null);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected) return;
    setSubmitting(true);
    setError('');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'guide-download',
          name,
          email,
          guide: selected.title,
        }),
      });
      // Open the PDF in a new tab after successful form submission
      window.open(selected.file, '_blank');
      closeModal();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#04649b] to-[#03527d] text-white">
        <div className="section-container text-center">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            Free Resources
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Roboto Slab', serif" }}
          >
            Guides
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            In-depth guides to help you make informed decisions about buying property in Roatan.
            Free to download — just enter your name and email.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {guides.map((guide) => (
              <button
                key={guide.id}
                onClick={() => openModal(guide)}
                className="group text-left bg-[#f5f5f5] hover:bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                {/* Thumbnail */}
                <div className="relative bg-gradient-to-br from-[#04649b] to-[#03527d] aspect-[3/4] flex flex-col items-center justify-center p-8">
                  <FileText className="w-16 h-16 text-white/80 mb-4" />
                  <span className="text-white/60 text-xs uppercase tracking-widest">{guide.pages}</span>
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 group-hover:bg-white group-hover:text-[#04649b] transition-all duration-300">
                    <Download className="w-3.5 h-3.5 text-white group-hover:text-[#04649b] transition-colors" />
                    <span className="text-white group-hover:text-[#04649b] text-xs font-medium transition-colors">Free Download</span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <h2
                    className="text-lg font-bold text-[#1d1d1d] mb-2 group-hover:text-[#04649b] transition-colors"
                    style={{ fontFamily: "'Roboto Slab', serif" }}
                  >
                    {guide.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{guide.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-gray-100">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#04649b] mb-1">Free Download</p>
                <h3
                  className="text-xl font-bold text-[#1d1d1d]"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors ml-4 mt-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <p className="text-gray-500 text-sm">
                Enter your details below to get instant access to this guide.
              </p>

              <div>
                <label htmlFor="guide-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="guide-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04649b] focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="guide-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="guide-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#04649b] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 bg-[#04649b] hover:bg-[#03527d] disabled:opacity-60 text-white py-3.5 rounded-lg font-medium transition-all"
              >
                {submitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Guide
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By downloading you agree to receive occasional real estate insights from Tomas Figueroa.
                <Send className="w-3 h-3 inline ml-1 opacity-50" />
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guides;
