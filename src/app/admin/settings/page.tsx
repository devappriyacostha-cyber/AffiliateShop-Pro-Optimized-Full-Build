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
  primaryColor: "#f97316",
  accentColor: "#0f172a",
  backgroundColor: "#fafafa",
  animation: "smooth",
  heroTitle: "Best Deals",
  heroSubtitle: "Discover products worth buying.",
  featuredTitle: "Featured Deals",
  searchPlaceholder: "Search products...",
};

export default function AdminSettings({ initialSettings = {} }: { initialSettings?: Record<string, string> }) {
  const [form, setForm] = useState({ ...defaults, ...initialSettings });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const set = (key: string, value: string) => setForm((v) => ({ ...v, [key]: value }));

  async function save() {
    setSaving(true);
    setSaved(false);
    await updateSettings(form);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3">
          <Sparkles className="text-orange-500" />
          <h1 className="text-3xl font-black tracking-tight text-slate-950">Site Settings</h1>
        </div>
        <p className="mt-2 text-sm text-slate-500">Control the main website identity, links, content and visual theme from one place.</p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border bg-white p-7 shadow-sm">
          <div className="mb-6 flex items-center gap-3"><Globe2 className="text-orange-500" /><h2 className="font-black">Brand & Content</h2></div>
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
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
                <input value={form[key] ?? ""} onChange={(e) => set(key, e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10" />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border bg-white p-7 shadow-sm">
          <div className="mb-6 flex items-center gap-3"><Share2 className="text-orange-500" /><h2 className="font-black">Social Links</h2></div>
          <div className="space-y-4">
            {[
              ["facebookUrl", "Facebook URL"],
              ["youtubeUrl", "YouTube channel URL"],
              ["instagramUrl", "Instagram URL"],
            ].map(([key, label]) => (
              <label key={key} className="block">
                <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</span>
                <input value={form[key] ?? ""} onChange={(e) => set(key, e.target.value)} placeholder="https://..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm font-semibold outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10" />
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border bg-white p-7 shadow-sm lg:col-span-2">
          <div className="mb-6 flex items-center gap-3"><Palette className="text-orange-500" /><h2 className="font-black">Visual Theme</h2></div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              ["primaryColor", "Primary color"],
              ["accentColor", "Dark accent"],
              ["backgroundColor", "Background"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center gap-3 rounded-2xl border bg-slate-50 p-3">
                <input type="color" value={form[key]} onChange={(e) => set(key, e.target.value)} className="h-12 w-14 cursor-pointer rounded-xl border-0 bg-transparent" />
                <div><div className="text-xs font-black uppercase">{label}</div><div className="text-xs text-slate-400">{form[key]}</div></div>
              </label>
            ))}
          </div>
          <div className="mt-5">
            <label className="block">
              <span className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-400">Animation preset</span>
              <select value={form.animation} onChange={(e) => set("animation", e.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-bold outline-none focus:border-orange-500">
                <option value="smooth">Smooth</option>
                <option value="minimal">Minimal</option>
                <option value="energetic">Energetic</option>
                <option value="none">No animation</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <button disabled={saving} onClick={save} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-4 font-black uppercase tracking-widest text-white shadow-xl transition hover:bg-orange-600 disabled:opacity-50">
        <Save size={18} /> {saving ? "Saving..." : saved ? "Saved ✓" : "Save Everything"}
      </button>
    </div>
  );
}
