"use client";

import { useState } from "react";
import { Save, Palette, Globe2, Share2, Sparkles } from "lucide-react";
import { updateSettings } from "../actions";

const defaults: Record<string, string> = {
  siteName: "AffiliateShop.lk",
  siteTagline: "Best Deals in Sri Lanka",
  logoUrl: "/logo.png",

  facebookUrl: "",
  youtubeUrl: "",
  instagramUrl: "",

  primaryColor: "#2563eb",
  accentColor: "#0f172a",
  backgroundColor: "#fafafa",

  viewDealColor: "#2563eb",
  categorySelectedColor: "#2563eb",
  sortSelectedColor: "#2563eb",
  hoverColor: "#2563eb",
  headerCtaColor: "#2563eb",
  footerActionColor: "#2563eb",
  primaryButtonColor: "#2563eb",

  animation: "smooth",

  heroTitle: "Best Deals",
  heroSubtitle: "Discover products worth buying.",
  featuredTitle: "Featured Deals",
  searchPlaceholder: "Search products...",
};

export default function AdminSettings({
  initialSettings = {},
}: {
  initialSettings?: Record<string, string>;
}) {
  const [form, setForm] = useState({
    ...defaults,
    ...initialSettings,
  });

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const set = (key: string, value: string) => {
    setForm((v) => ({
      ...v,
      [key]: value,
    }));
  };

  async function save() {
    setSaving(true);
    setSaved(false);

    await updateSettings(form);

    setSaving(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  const colorSettings = [
    ["viewDealColor", "View Deal Color"],
    ["categorySelectedColor", "Category Selected Color"],
    ["sortSelectedColor", "Sort Selected Color"],
    ["hoverColor", "Hover Color"],
    ["headerCtaColor", "Header CTA Color"],
    ["footerActionColor", "Footer / Action Color"],
    ["primaryButtonColor", "Other Primary Buttons"],
  ];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="text-[var(--primary)]" />

          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Site Settings
          </h1>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Control the website identity, content and every major UI color
          from one place.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">

        {/* BRAND */}
        <div className="rounded-[28px] border bg-white p-7 shadow-sm">

          <div className="mb-6 flex items-center gap-3">
            <Globe2 className="text-[var(--primary)]" />

            <h2 className="font-black">
              Brand & Content
            </h2>
          </div>

          <div className="space-y-4">

            {[
              ["siteName", "Website name"],
              ["siteTagline", "Tagline"],
              ["logoUrl", "Logo URL"],
              ["heroTitle", "Hero title"],
              ["heroSubtitle", "Hero subtitle"],
              ["featuredTitle", "Featured section title"],
              ["searchPlaceholder", "Search placeholder"],
            ].map(([key, label]) => (
              <label key={key} className="block">

                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {label}
                </span>

                <input
                  value={form[key] ?? ""}
                  onChange={(e) => set(key, e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--primary)_10%,transparent)]"
                />

              </label>
            ))}

          </div>
        </div>

        {/* SOCIAL */}
        <div className="rounded-[28px] border bg-white p-7 shadow-sm">

          <div className="mb-6 flex items-center gap-3">
            <Share2 className="text-[var(--primary)]" />

            <h2 className="font-black">
              Social Links
            </h2>
          </div>

          <div className="space-y-4">

            {[
              ["facebookUrl", "Facebook URL"],
              ["youtubeUrl", "YouTube channel URL"],
              ["instagramUrl", "Instagram URL"],
            ].map(([key, label]) => (
              <label key={key} className="block">

                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {label}
                </span>

                <input
                  value={form[key] ?? ""}
                  onChange={(e) => set(key, e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-[var(--primary)]"
                />

              </label>
            ))}

          </div>
        </div>

        {/* VISUAL THEME */}
        <div className="rounded-[28px] border bg-white p-7 shadow-sm lg:col-span-2">

          <div className="mb-6 flex items-center gap-3">
            <Palette className="text-[var(--primary)]" />

            <div>
              <h2 className="font-black">
                Visual Theme
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Change each website color independently.
              </p>
            </div>
          </div>

          {/* GENERAL COLORS */}
          <div className="mb-8">

            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
              General Colors
            </h3>

            <div className="grid gap-5 sm:grid-cols-3">

              {[
                ["primaryColor", "Base Primary Color"],
                ["accentColor", "Dark Accent"],
                ["backgroundColor", "Background"],
              ].map(([key, label]) => (

                <label
                  key={key}
                  className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-3"
                >

                  <input
                    type="color"
                    value={form[key]}
                    onChange={(e) => set(key, e.target.value)}
                    className="h-12 w-14 cursor-pointer rounded-xl border-0 bg-transparent"
                  />

                  <div>
                    <div className="text-xs font-black uppercase">
                      {label}
                    </div>

                    <div className="text-xs text-slate-400">
                      {form[key]}
                    </div>
                  </div>

                </label>

              ))}

            </div>
          </div>

          {/* INDIVIDUAL COLORS */}
          <div>

            <h3 className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
              Individual UI Colors
            </h3>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {colorSettings.map(([key, label]) => (

                <label
                  key={key}
                  className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-slate-300 hover:bg-white"
                >

                  <input
                    type="color"
                    value={form[key]}
                    onChange={(e) => set(key, e.target.value)}
                    className="h-12 w-14 cursor-pointer rounded-xl border-0 bg-transparent"
                  />

                  <div className="min-w-0">

                    <div className="text-[11px] font-black uppercase leading-tight">
                      {label}
                    </div>

                    <div className="mt-1 text-xs font-semibold text-slate-400">
                      {form[key]}
                    </div>

                  </div>

                </label>

              ))}

            </div>
          </div>

          {/* COLOR PREVIEW */}
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">

            <div className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
              Live Color Preview
            </div>

            <div className="flex flex-wrap gap-3">

              <button
                type="button"
                style={{ backgroundColor: form.viewDealColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                View Deal
              </button>

              <button
                type="button"
                style={{ backgroundColor: form.categorySelectedColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                Category
              </button>

              <button
                type="button"
                style={{ backgroundColor: form.sortSelectedColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                Sort Selected
              </button>

              <button
                type="button"
                style={{ backgroundColor: form.headerCtaColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                Header CTA
              </button>

              <button
                type="button"
                style={{ backgroundColor: form.footerActionColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                Footer Action
              </button>

              <button
                type="button"
                style={{ backgroundColor: form.primaryButtonColor }}
                className="rounded-xl px-5 py-3 text-xs font-black text-white shadow-lg"
              >
                Primary
              </button>

            </div>
          </div>

          {/* ANIMATION */}
          <div className="mt-6">

            <label className="block">

              <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
                Animation preset
              </span>

              <select
                value={form.animation}
                onChange={(e) => set("animation", e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-bold outline-none transition focus:border-[var(--primary)]"
              >
                <option value="smooth">Smooth</option>
                <option value="minimal">Minimal</option>
                <option value="energetic">Energetic</option>
                <option value="none">No animation</option>
              </select>

            </label>

          </div>

        </div>

      </section>

      {/* SAVE */}
      <button
        disabled={saving}
        onClick={save}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] py-4 font-black uppercase tracking-widest text-white shadow-xl transition hover:brightness-90 disabled:opacity-50"
      >
        <Save size={18} />

        {saving
          ? "Saving..."
          : saved
            ? "Saved ✓"
            : "Save Everything"}
      </button>

    </div>
  );
}
