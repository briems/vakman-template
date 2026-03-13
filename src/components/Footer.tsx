import { klantConfig } from "@/config/klant";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const jaar = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10 pb-20 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">{klantConfig.bedrijfsnaam}</h3>
            <p className="text-sm leading-relaxed">
              Uw betrouwbare vakman in {klantConfig.stad}. Al meer dan 19 jaar actief in de regio.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${klantConfig.telefoonnummer}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="h-4 w-4" />
                  {klantConfig.telefoonnummer}
                </a>
              </li>
              <li>
                <a href={`mailto:${klantConfig.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                  {klantConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${klantConfig.whatsappNummer}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Gegevens</h3>
            <ul className="space-y-2 text-sm">
              <li>KvK: {klantConfig.kvkNummer}</li>
              <li>Werkgebied: {klantConfig.stad} e.o.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          &copy; {jaar} {klantConfig.bedrijfsnaam}. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
