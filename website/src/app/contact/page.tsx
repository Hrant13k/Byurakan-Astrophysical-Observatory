"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/shared/PageHeader";
import { useLanguage } from "@/lib/i18n";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      lines: ["Byurakan, Aragatsotn Province", "Armenia, 0213"],
    },
    {
      icon: Phone,
      title: t.contact.phone,
      lines: ["+374 232 34 142", "+374 232 34 571"],
    },
    {
      icon: Mail,
      title: t.contact.email,
      lines: ["info@bao.sci.am", "director@bao.sci.am"],
    },
    {
      icon: Clock,
      title: t.contact.visitingHours,
      lines: ["Tue \u2013 Sun: 10:00 \u2013 17:00", "Monday: Closed"],
    },
  ];
  return (
    <>
      <PageHeader
        title={t.pages.contactTitle}
        description={t.pages.contactDesc}
      />

      <section className="py-16 pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-7">
                {t.contact.sendMessage}
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[13px] font-medium text-foreground mb-2"
                    >
                      {t.contact.fullName}
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[13px] font-medium text-foreground mb-2"
                    >
                      {t.contact.email}
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[13px] font-medium text-foreground mb-2"
                  >
                    {t.contact.subject}
                  </label>
                  <select
                    id="subject"
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t.contact.selectTopic}
                    </option>
                    <option>{t.contact.generalInquiry}</option>
                    <option>{t.contact.researchCollab}</option>
                    <option>{t.contact.visiting}</option>
                    <option>{t.contact.educationPrograms}</option>
                    <option>{t.contact.mediaPress}</option>
                    <option>{t.contact.other}</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[13px] font-medium text-foreground mb-2"
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="w-full rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground border border-border/60 outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <Button type="submit" className="gap-2.5">
                  <Send className="h-4 w-4" />
                  {t.contact.send}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease }}
              className="lg:col-span-2 space-y-4"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-7">
                {t.contact.information}
              </h2>
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex gap-4 p-5 rounded-2xl border border-border/60 bg-card"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0">
                    <info.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground">
                      {info.title}
                    </h3>
                    {info.lines.map((line) => (
                      <p
                        key={line}
                        className="text-sm text-muted-foreground"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-2xl border border-border/60 bg-card">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-primary" />
                  <h3 className="text-[13px] font-semibold text-foreground">
                    {t.contact.onlineResources}
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      DFBS Database Portal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Library & Archives
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      Weather Station
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative py-14">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground mb-7">
            {t.contact.findUs}
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[16/7]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=44.2738%2C40.3318%2C44.2938%2C40.3418&layer=mapnik&marker=40.3368%2C44.2838"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              title="Byurakan Observatory location on map"
            />
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            {t.contact.mapNote}
          </p>
        </div>
      </section>
    </>
  );
}
