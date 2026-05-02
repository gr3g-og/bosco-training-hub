import { MapPin, Mail, Clock } from "lucide-react";

const items = [
  { icon: MapPin, label: "Location", value: "Tema Community 22, Ashaiman" },
  { icon: Mail, label: "Email", value: "info@donboscoashaiman.com" },
  { icon: Clock, label: "Hours", value: "Mon – Fri · 8AM – 5PM" },
];

export const ContactStrip = () => {
  return (
    <section className="bg-charcoal px-6 md:px-12 py-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
              <Icon className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="flex flex-col leading-tight min-w-0">
              <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-white/35">
                {label}
              </span>
              <span className="text-[13px] text-white truncate">{value}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
