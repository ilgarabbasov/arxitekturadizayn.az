import { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '', projectType: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <PageHero title={t.contact.title} />

      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.form.name} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input name="surname" value={formData.surname} onChange={handleChange} placeholder={t.contact.form.surname} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.contact.form.email} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder={t.contact.form.phone} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 text-sm text-midgrey focus:outline-none focus:border-gold transition-colors">
                  <option value="">{t.contact.form.selectType}</option>
                  {t.contact.form.types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <input name="subject" value={formData.subject} onChange={handleChange} placeholder={t.contact.form.subject} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.contact.form.message} rows={5} className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                <button type="submit" className="gold-gradient text-gold-foreground px-10 py-3.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97]">
                  {t.contact.form.submit}
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-midgrey">{t.footer.address}</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-midgrey">{t.footer.phone}</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-midgrey">{t.footer.email}</p>
                </div>

                {/* Map placeholder */}
                <div className="w-full aspect-video bg-muted flex items-center justify-center mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.4!2d49.8671!3d40.3893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIzJzIxLjUiTiA0OcKwNTInMDEuNiJF!5e0!3m2!1sen!2s!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
