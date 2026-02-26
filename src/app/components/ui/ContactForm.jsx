"use client";

import { useState } from "react";
import { FaArrowRight, FaCheck, FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { sendContactEmail } from "@/app/actions/sendEmail";

const contactOptions = [
  { value: "call", label: "Ring mig op" },
  { value: "sms", label: "Svar via SMS" },
  { value: "email", label: "Svar via e-mail" },
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [contactPref, setContactPref] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const result = await sendContactEmail(formData);

    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error || "Der opstod en fejl. Prøv igen.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-[#367067] p-10 md:p-16 rounded-[40px] text-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <FaCheck className="text-white text-2xl" />
        </div>
        <h3 className="text-white mb-4">Tak for din henvendelse</h3>
        <p className="text-white/70">
          Jeg vender tilbage inden for 24 timer med en besked eller et opkald.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#367067] p-8 md:p-12 rounded-[40px]">
      <h3 className="text-white mb-2">
        Skal vi starte en samtale?
      </h3>
      <p className="text-white/60 mb-10 italic text-sm">
        Udfyld formularen, så ringer eller skriver jeg til dig inden for 24
        timer.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Navn */}
        <div>
          <input
            name="name"
            type="text"
            required
            placeholder="Navn"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all"
          />
        </div>

        {/* Mobil */}
        <div>
          <input
            name="phone"
            type="tel"
            required
            placeholder="Mobilnummer"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all"
          />
        </div>

        {/* Besked */}
        <div>
          <textarea
            name="message"
            placeholder="Hvad har du brug for hjælp til? (valgfrit)"
            rows={4}
            className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all resize-none"
          />
        </div>

        {/* Foretrukken kontaktform — shadcn dropdown */}
        <div>
          <input type="hidden" name="contactPreference" value={contactPref} required />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-left flex items-center justify-between transition-all outline-none focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 data-[state=open]:border-[#F38A5D] data-[state=open]:ring-1 data-[state=open]:ring-[#F38A5D]/30"
              >
                <span className={contactPref ? "text-white" : "text-white/40"}>
                  {contactPref
                    ? contactOptions.find((o) => o.value === contactPref)?.label
                    : "Hvordan vil du helst kontaktes?"}
                </span>
                <FaChevronDown className="text-white/40 text-xs transition-transform duration-200 data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={8}
              className="w-[var(--radix-dropdown-menu-trigger-width)] bg-[#2f635a] border-white/10 rounded-2xl p-1"
            >
              <DropdownMenuRadioGroup value={contactPref} onValueChange={setContactPref}>
                {contactOptions.map((option) => (
                  <DropdownMenuRadioItem
                    key={option.value}
                    value={option.value}
                    className="px-5 py-3 rounded-xl text-white/70 focus:bg-white/10 focus:text-white data-[state=checked]:text-white data-[state=checked]:bg-white/10 cursor-pointer"
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3 py-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              name="isStudent"
              type="checkbox"
              className="w-5 h-5 mt-0.5 accent-[#F38A5D] rounded shrink-0"
            />
            <span className="text-white/80 group-hover:text-white transition-colors text-sm">
              Jeg er studerende (Studiepris: 900 kr.)
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="w-5 h-5 mt-0.5 accent-[#367067] rounded shrink-0"
            />
            <span className="text-white/50 group-hover:text-white/70 transition-colors text-xs italic">
              Jeg accepterer at mine data behandles fortroligt jf.{" "}
              <a href="/privatliv" className="underline hover:text-white">
                privatlivspolitikken
              </a>
              .
            </span>
          </label>
        </div>

        {/* Error message */}
        {error && (
          <p className="text-red-300 text-sm text-center bg-red-500/10 py-2 px-4 rounded-xl">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group bg-[#F38A5D] hover:bg-[#e07a4f] disabled:opacity-70 text-white font-normal py-4 px-8 rounded-full transition-all hover:scale-[1.01] flex justify-center items-center gap-3 text-lg mt-2"
        >
          {loading ? (
            <span className="animate-pulse">Sender...</span>
          ) : (
            <>
              Send henvendelse
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <FaArrowRight className="text-sm text-white group-hover:animate-[arrow-slide_0.5s_ease-in-out]" />
              </div>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
