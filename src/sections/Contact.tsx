import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import emailjs from "@emailjs/browser";
import { useTranslation } from "@/context/Transalation/TranslationContext";
import { Toast } from "@/components/ui/Toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t, lang } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message ?? "messagem vazia",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      Toast.success(lang === 'pt' ? "Mensagem enviada com sucesso!" : "Message sent successfully!");
      setIsSubmitting(false);

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      Toast.error(lang === 'pt' ? "Erro ao enviar mensagem" : "Error sending message");
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "edilson591@gmail.com",
      href: "mailto:edilson591@gmail.com",
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+55 (82) 99622-7970",
      href: "#",
    },
    {
      icon: MapPin,
      label: t.contact.location,
      value: "Brasil",
      href: "#",
    },
  ];

  // const socialLinks = [
  //   {
  //     icon: Github,
  //     label: "GitHub",
  //     href: "https://github.com",
  //     color: "hover:bg-gray-800",
  //   },
  //   {
  //     icon: Linkedin,
  //     label: "LinkedIn",
  //     href: "https://linkedin.com",
  //     color: "hover:bg-blue-600",
  //   },
  // ];

  return (
    <section id="contact" className="section-container bg-bg-secondary/10">
      <Container>
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-4">
                {t.contact.heading}
              </h3>
              <p className="text-text/70 leading-relaxed">
                {t.contact.description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={(e) => {
                    if (item.label !== "Email") {
                      e.preventDefault();
                    }
                  }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary/20 border border-bg-secondary/30 hover:border-primary/50 transition-all"
                >
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-text/60">{item.label}</p>
                    <p className="font-medium text-text">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            {/* <div>
              <h4 className="text-lg font-semibold text-text mb-4">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "p-4 rounded-xl bg-bg-secondary/30 text-text transition-all",
                      "hover:text-white",
                      social.color,
                    )}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-bg-secondary/20 border border-bg-secondary/30"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-bg border border-bg-secondary/50",
                      "text-text placeholder:text-text/40",
                      "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all",
                    )}
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-bg border border-bg-secondary/50",
                      "text-text placeholder:text-text/40",
                      "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all",
                    )}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text mb-2"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(
                      "w-full px-4 py-3 rounded-lg bg-bg border border-bg-secondary/50",
                      "text-text placeholder:text-text/40 resize-none",
                      "focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20",
                      "transition-all",
                    )}
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>{t.contact.form.submitted}</>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      {t.contact.form.submit}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
