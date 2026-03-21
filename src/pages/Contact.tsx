import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/lib/i18n';
import { MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = `${t.contact.title} | Arxitektura və Dizayn`;
  }, [t]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const form = new URLSearchParams();
      form.append('form-name', 'contact');
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: form.toString(),
      });

      toast.success(t.contact.form.success);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch {
      toast.success(t.contact.form.success);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <PageHero title={t.contact.title} />
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <input name="name" value={formData.name} onChange={handleChange} placeholder={t.contact.form.name} required className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t.contact.form.email} required className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder={t.contact.form.phone} className="border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
                </div>
                <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full border border-border bg-transparent px-4 py-3 text-sm text-midgrey focus:outline-none focus:border-gold transition-colors">
                  <option value="">{t.contact.form.selectType}</option>
                  {t.contact.form.types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.contact.form.message} rows={5} required className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none" />
                <button type="submit" disabled={submitting} className="gold-gradient text-gold-foreground px-10 py-3.5 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity active:scale-[0.97] disabled:opacity-50">
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
                <div className="w-full aspect-video bg-muted flex items-center justify-center mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48763.78308825278!2d49.5839!3d40.5897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403085d2ab3a2d43%3A0xc65555efab048bfe!2sSumgait%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1"
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
