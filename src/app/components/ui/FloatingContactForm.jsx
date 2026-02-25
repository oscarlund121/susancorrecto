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

const contactOptions = [
  { value: "call", label: "Ring mig op" },
  { value: "sms", label: "Svar via SMS" },
  { value: "email", label: "Svar via e-mail" },
];

const FloatingContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactPref, setContactPref] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Replace with Resend server action
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#367067] p-6 rounded-3xl text-center">
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheck className="text-white text-lg" />
        </div>
        <h4 className="text-white mb-2">Tak for din henvendelse</h4>
        <p className="text-white/70 text-sm">
          Jeg vender tilbage inden for 24 timer.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#367067] p-5 md:p-6 rounded-3xl">
      <p className="text-white/60 mb-4 italic text-xs">
        Udfyld formularen, så kontakter jeg dig inden for 24 timer.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Navn */}
        <input
          name="name"
          type="text"
          required
          placeholder="Navn"
          className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all"
        />

        {/* Mobil */}
        <input
          name="phone"
          type="tel"
          required
          placeholder="Mobilnummer"
          className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all"
        />

        {/* Besked */}
        <textarea
          name="message"
          placeholder="Hvad har du brug for hjælp til? (valgfrit)"
          rows={2}
          className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 outline-none transition-all resize-none"
        />

        {/* Foretrukken kontaktform */}
        <div>
          <input type="hidden" name="contactPreference" value={contactPref} required />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm text-left flex items-center justify-between transition-all outline-none focus:border-[#F38A5D] focus:ring-1 focus:ring-[#F38A5D]/30 data-[state=open]:border-[#F38A5D] data-[state=open]:ring-1 data-[state=open]:ring-[#F38A5D]/30"
              >
                <span className={contactPref ? "text-white" : "text-white/40"}>
                  {contactPref
                    ? contactOptions.find((o) => o.value === contactPref)?.label
                    : "Hvordan vil du helst kontaktes?"}
                </span>
                <FaChevronDown className="text-white/40 text-xs" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              side="top"
              sideOffset={8}
              className="w-[var(--radix-dropdown-menu-trigger-width)] bg-[#2f635a] border-white/10 rounded-xl p-1"
            >
              <DropdownMenuRadioGroup value={contactPref} onValueChange={setContactPref}>
                {contactOptions.map((option) => (
                  <DropdownMenuRadioItem
                    key={option.value}
                    value={option.value}
                    className="px-4 py-2.5 rounded-lg text-sm text-white/70 focus:bg-white/10 focus:text-white data-[state=checked]:text-white data-[state=checked]:bg-white/10 cursor-pointer"
                  >
                    {option.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-2 py-1">
          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              name="isStudent"
              type="checkbox"
              className="w-4 h-4 mt-0.5 accent-[#F38A5D] rounded shrink-0"
            />
            <span className="text-white/80 group-hover:text-white transition-colors text-xs">
              Jeg er studerende (Studiepris: 900 kr.)
            </span>
          </label>

          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="w-4 h-4 mt-0.5 accent-[#367067] rounded shrink-0"
            />
            <span className="text-white/50 group-hover:text-white/70 transition-colors text-[11px] italic leading-tight">
              Jeg accepterer at mine data behandles fortroligt jf.{" "}
              <a href="/privatliv" className="underline hover:text-white">
                privatlivspolitikken
              </a>
              .
            </span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="group bg-[#F38A5D] hover:bg-[#e07a4f] disabled:opacity-70 text-white font-normal py-3 px-6 rounded-full transition-all hover:scale-[1.01] flex justify-center items-center gap-2 text-sm mt-1 cursor-pointer"
        >
          {loading ? (
            <span className="animate-pulse">Sender...</span>
          ) : (
            <>
              Send henvendelse
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                <FaArrowRight className="text-xs text-white group-hover:animate-[arrow-slide_0.5s_ease-in-out]" />
              </div>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FloatingContactForm;
