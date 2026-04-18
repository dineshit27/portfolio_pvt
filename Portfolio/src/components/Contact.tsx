import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ContactForm } from './ui/ContactForm';
import { Github, Linkedin, Mail, Instagram, MessageCircle, Twitter, PenTool, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Let's collaborate on your next big idea — I'm just a message away 💬">Get In Touch</SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>

              {/* Schedule Meeting Button */}
              <div className="mb-8">
                <a
                  href="https://calendly.com/m-dinesh-it27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Meeting
                </a>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:m.dinesh.it27@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Mail className="w-6 h-6" style={{ color: '#EA4335' }} />
                  <span>m.dinesh.it27@gmail.com</span>
                </a>
                <a
                  href="https://github.com/dineshit27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-800 dark:text-white" />
                  <span>github.com/dineshit27</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/m-dinesh-d30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" style={{ color: '#0A66C2' }} />
                  <span>linkedin.com/m-dinesh-d30</span>
                </a>
                <a
                  href="https://www.instagram.com/_dinx_pvt_430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="w-6 h-6" style={{ color: '#E4405F' }} />
                  <span>@_dinx_pvt_430</span>
                </a>
                <a
                  href="https://wa.me/919122129450"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="w-6 h-6" style={{ color: '#25D366' }} />
                  <span>+91 8122129450</span>
                </a>
                <a
                  href="https://x.com/mr_dinesh_io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Twitter className="w-6 h-6 text-gray-900 dark:text-white" />
                  <span>x.com/mr_dinesh_io</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <ContactForm />
            </div>
          </div>

          {/* Location Map: Guduvanchery */}
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Location</h3>
            <div className="relative w-full h-0 pb-[40%] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              <iframe
                title="Guduvanchery Map"
                src="https://maps.google.com/maps?q=Guduvanchery&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 text-sm">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Guduvanchery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
