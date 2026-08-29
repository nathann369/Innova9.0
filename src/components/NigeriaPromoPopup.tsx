import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '+2348067444146';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello! NOVA, I would love to learn more about your services.'
);
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WHATSAPP_MESSAGE}`;

function looksLikeNigeria() {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const locale = navigator.language ?? '';
  const languages = Array.isArray(navigator.languages) ? navigator.languages : [locale];
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone ?? '';

  const localeMatch = [locale, ...languages].some((lang) => /(?:ng|ng-NG)/i.test(lang));
  const timezoneMatch = /Africa\/(Lagos|Abuja)/i.test(timeZone);

  return localeMatch || timezoneMatch;
}

async function fetchNigeriaGeo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data?.country_code === 'NG' || data?.country_name === 'Nigeria';
  } catch {
    return false;
  }
}

export function NigeriaPromoPopup() {
  const [isNigeria, setIsNigeria] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let active = true;

    const detect = async () => {
      const localMatch = looksLikeNigeria();
      if (localMatch) {
        if (active) {
          setIsNigeria(true);
          setIsReady(true);
        }
        return;
      }

      const geoMatch = await fetchNigeriaGeo();
      if (active) {
        setIsNigeria(geoMatch);
        setIsReady(true);
      }
    };

    detect();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!isReady || !isNigeria) {
      return;
    }

    const delay = 1000; // 1 second
    const timer = window.setTimeout(() => setIsOpen(true), delay);

    return () => window.clearTimeout(timer);
  }, [isReady, isNigeria]);

  if (!isOpen || !isNigeria) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="relative w-full max-w-lg rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-2xl shadow-black/10">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
          aria-label="Close promotion">
          ×
        </button>

        <div className="space-y-4">
          <div className="rounded-2xl border-slate-300 bg-[#f7f6ff] p-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0b0b0c]">
            Building in Nigeria?
          </div>

          <div className="space-y-3">
            <p className="text-xl font-semibold text-slate-900">
              You are eligible for special local pricing on any of our services.
            </p>
            <p className="text-sm leading-7 text-slate-600">
              Send us a WhatsApp message with your project idea, and I'll provide a customized quote within 24 hours. IN NAIRA
            </p>
            <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-800 shadow-sm">
              <p className="font-semibold">Local Offer</p>
              {/* <p className="mt-1 text-lg font-bold text-slate-900">From ₦50,000</p> */}
              <p className="mt-1 text-slate-600">WhatsApp me now to lock in this local rate.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#030303] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851] sm:w-auto">
              WhatsApp Now
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 sm:w-auto">
              Continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
