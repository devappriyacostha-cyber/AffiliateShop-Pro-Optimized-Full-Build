"use client";

import { useState } from "react";
import {
  Save,
  Palette,
  Globe2,
  Share2,
  Sparkles,
  MousePointer2,
  SlidersHorizontal,
} from "lucide-react";
import { updateSettings } from "../actions";

const defaults: Record<string, string> = {
  siteName: "AffiliateShop.lk",
  siteTagline: "Best Deals in Sri Lanka",
  logoUrl: "/logo.png",

  facebookUrl: "",
  youtubeUrl: "",
  instagramUrl: "",

  primaryColor: "#f97316",
  accentColor: "#0f172a",
  backgroundColor: "#fafafa",

  // NEW UI COLORS
  viewDealColor: "#2563eb",
  categorySelectedColor: "#2563eb",
  sortSelectedColor: "#2563eb",
  hoverColor: "#2563eb",
  headerCtaColor: "#2563eb",
  footerActionColor: "#2563eb",
  otherPrimaryColor: "#2563eb",

  animation: "smooth",

  heroTitle: "Best Deals",
  heroSubtitle: "Discover products worth buying.",
  featuredTitle: "Featured Deals",
  searchPlaceholder: "Search products...",
};

type ColorItem = {
  key: string;
  label: string;
  description: string;
};

const uiColors: ColorItem[] = [
  {
    key: "viewDealColor",
    label: "View Deal",
    description: "Product card View Deal button",
  },
  {
    key: "categorySelectedColor",
    label: "Category Selected",
    description: "Selected category button",
  },
  {
    key: "sortSelectedColor",
    label: "Sort Selected",
    description: "Selected sorting option",
  },
  {
    key: "hoverColor",
    label: "Hover",
    description: "General hover effects",
  },
  {
    key: "headerCtaColor",
    label: "Header CTA",
    description: "Header search and CTA buttons",
  },
  {
    key: "footerActionColor",
    label: "Footer / Action",
    description: "Footer links and action buttons",
  },
  {
    key: "otherPrimaryColor",
    label: "Other Primary Buttons",
    description: "Other important primary buttons",
  },
];

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
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  async function save() {
    setSaving(true);
    setSaved(false);

    try {
      await updateSettings(form);

      setSaved(true);

      setTimeout(() => {
        setSaved(false);
      }, 2500);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-8">

      {/* PAGE HEADER */}
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="settings-primary-icon" />

          <h1 className="text-3xl font-black tracking-tight text-slate-950">
            Site Settings
          </h1>
        </div>

        <p className="mt-2 text-sm text-slate-500">
          Control the main website identity, links, content and visual theme
          from one place.
        </p>
      </div>

      {/* BRAND + CONTENT */}
      <section className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[28px] border bg-white p-7 shadow-sm">

          <div className="mb-6 flex items-center gap-3">
            <Globe2 className="settings-primary-icon" />

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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-[var(--other-primary)] focus:ring-4 focus:ring-[color-mix(in_srgb,var(--other-primary)_10%,transparent)]"
                />

              </label>

            ))}

          </div>
        </div>

        {/* SOCIAL */}
        <div className="rounded-[28px] border bg-white p-7 shadow-sm">

          <div className="mb-6 flex items-center gap-3">

            <Share2 className="settings-primary-icon" />

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
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none transition focus:border-[var(--other-primary)]"
                />

              </label>

            ))}

          </div>
        </div>

      </section>

      {/* BASIC COLORS */}
      <section className="rounded-[28px] border bg-white p-7 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <Palette className="settings-primary-icon" />

          <div>
            <h2 className="font-black">
              Main Theme
            </h2>

            <p className="text-xs text-slate-400">
              Main website colors
            </p>
          </div>

        </div>

        <div className="grid gap-5 sm:grid-cols-3">

          {[
            ["primaryColor", "Primary color"],
            ["accentColor", "Dark accent"],
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

      </section>

      {/* NEW UI COLOR CONTROL */}
      <section className="rounded-[28px] border bg-white p-7 shadow-sm">

        <div className="mb-7 flex items-start gap-3">

          <MousePointer2 className="settings-primary-icon mt-0.5" />

          <div>

            <h2 className="text-xl font-black">
              Button & UI Colors
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Change each website UI color separately.
              Changing one color will not change the others.
            </p>

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {uiColors.map((item) => (

            <div
              key={item.key}
              className="group rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >

              <div className="flex items-center justify-between gap-4">

                <div className="min-w-0">

                  <div className="flex items-center gap-2">

                    <div
                      className="h-3 w-3 rounded-full border border-white shadow-sm"
                      style={{
                        backgroundColor:
                          form[item.key] || "#2563eb",
                      }}
                    />

                    <div className="text-sm font-black text-slate-900">
                      {item.label}
                    </div>

                  </div>

                  <div className="mt-1 text-[11px] leading-4 text-slate-400">
                    {item.description}
                  </div>

                </div>

                <input
                  type="color"
                  value={form[item.key] || "#2563eb"}
                  onChange={(e) => set(item.key, e.target.value)}
                  title={`${item.label} color`}
                  className="h-12 w-14 shrink-0 cursor-pointer rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
                />

              </div>

              <div className="mt-3 flex items-center gap-2">

                <input
                  type="text"
                  value={form[item.key] || "#2563eb"}
                  onChange={(e) => set(item.key, e.target.value)}
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase outline-none focus:border-[var(--other-primary)]"
                />

                <div
                  className="h-8 w-8 shrink-0 rounded-lg shadow-inner"
                  style={{
                    backgroundColor:
                      form[item.key] || "#2563eb",
                  }}
                />

              </div>

            </div>

          ))}

        </div>

        {/* LIVE PREVIEW */}
        <div className="mt-7 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 p-5">

          <div className="mb-4 flex items-center gap-2">

            <SlidersHorizontal
              size={16}
              className="text-slate-400"
            />

            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Live Preview
            </span>

          </div>

          <div className="flex flex-wrap gap-3">

            <button
              type="button"
              style={{
                backgroundColor: form.viewDealColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              View Deal
            </button>

            <button
              type="button"
              style={{
                backgroundColor: form.categorySelectedColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              Selected Category
            </button>

            <button
              type="button"
              style={{
                backgroundColor: form.sortSelectedColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              Selected Sort
            </button>

            <button
              type="button"
              style={{
                backgroundColor: form.headerCtaColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              Header CTA
            </button>

            <button
              type="button"
              style={{
                backgroundColor: form.footerActionColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              Footer Action
            </button>

            <button
              type="button"
              style={{
                backgroundColor: form.otherPrimaryColor,
              }}
              className="rounded-xl px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-sm"
            >
              Primary
            </button>

          </div>

        </div>

      </section>

      {/* ANIMATION */}
      <section className="rounded-[28px] border bg-white p-7 shadow-sm">

        <div className="mb-5 flex items-center gap-3">

          <Sparkles className="settings-primary-icon" />

          <h2 className="font-black">
            Animation
          </h2>

        </div>

        <label className="block">

          <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">
            Animation preset
          </span>

          <select
            value={form.animation}
            onChange={(e) => set("animation", e.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-bold outline-none focus:border-[var(--other-primary)]"
          >
            <option value="smooth">
              Smooth
            </option>

            <option value="minimal">
              Minimal
            </option>

            <option value="energetic">
              Energetic
            </option>

            <option value="none">
              No animation
            </option>

          </select>

        </label>

      </section>

      {/* SAVE */}
      <button
        disabled={saving}
        onClick={save}
        className="settings-save-button flex w-full items-center justify-center gap-2 rounded-2xl py-4 font-black uppercase tracking-widest text-white shadow-xl transition hover:-translate-y-0.5 disabled:opacity-50"
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
