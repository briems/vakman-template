import { klantConfig } from "@/config/klant";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#diensten", label: "Diensten" },
  { href: "#projecten", label: "Projecten" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const jaar = new Date().getFullYear();

  return (
    <footer className="bg-[var(--vakman-navy)] text-white/50 pb-24 sm:pb-0">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo-icon.png"
                alt={`${klantConfig.bedrijfsnaam} logo`}
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-white font-bold text-lg font-[family-name:var(--font-heading)]">
                {klantConfig.bedrijfsnaam}
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Uw betrouwbare vakman in {klantConfig.stad}. Al meer dan {klantConfig.jarenlange_ervaring} jaar actief in de regio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${klantConfig.telefoonnummer}`} className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer">
                  <Phone className="h-4 w-4 text-[var(--vakman-primary)]" />
                  {klantConfig.telefoonnummer}
                </a>
              </li>
              <li>
                <a href={`mailto:${klantConfig.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer">
                  <Mail className="h-4 w-4 text-[var(--vakman-primary)]" />
                  {klantConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${klantConfig.whatsappNummer}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--vakman-primary)]" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Business info */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">
              Gegevens
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--vakman-primary)] mt-0.5 shrink-0" />
                <span>{klantConfig.adres}</span>
              </li>
              <li>KvK: {klantConfig.kvkNummer}</li>
              <li>Werkgebied: {klantConfig.stad} e.o.</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {jaar} {klantConfig.bedrijfsnaam}. Alle rechten voorbehouden.</p>
          <p className="text-white/30">Vakman Website Template</p>
        </div>
      </div>
    </footer>
  );
}
