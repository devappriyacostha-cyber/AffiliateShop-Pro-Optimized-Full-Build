"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Flame,
  Star,
  ExternalLink,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  shortName?: string | null;
  price: string | number;
  originalPrice?: string | number | null;
  discountPercent?: number | null;
  discountLabel?: string | null;
  imageUrls: string[];
  rating?: string | number | null;
  isHot?: boolean;
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {

  const price = Number(product.price);

  const original = product.originalPrice
    ? Number(product.originalPrice)
    : 0;

  const discount =
    product.discountPercent ??
    (
      original > price
        ? Math.round(
            ((original - price) / original) * 100
          )
        : 0
    );

  const image =
    product.imageUrls?.[0] ||
    "/logo.png";

  const rating =
    Number(product.rating || 0);

  return (
    <article
      className="
        group relative flex h-full flex-col
        overflow-hidden rounded-[28px]
        border border-slate-200/80
        bg-white
        shadow-[0_12px_40px_rgba(15,23,42,0.06)]
        transition duration-500
        hover:-translate-y-1
        hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]
      "
    >

      {/* DISCOUNT */}
      {discount > 0 && (
        <div className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
          {discount}% OFF
        </div>
      )}

      {/* HOT */}
      {product.isHot && (
        <div className="absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-slate-950/90 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">

          <Flame
            size={12}
            className="text-orange-400"
          />

          Hot

        </div>
      )}

      {/* IMAGE */}
      <Link
        href={`/product/${product.id}`}
        className="block"
      >

        <div className="relative aspect-square overflow-hidden bg-slate-50 p-5">

          <Image
            src={image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 280px"
            className="object-contain p-4 transition duration-700 group-hover:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/5 to-transparent opacity-0 transition group-hover:opacity-100" />

        </div>

      </Link>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5">

        {/* RATING */}
        <div className="mb-2 flex items-center gap-1 text-xs">

          {[0, 1, 2, 3, 4].map((i) => (

            <Star
              key={i}
              size={12}
              fill={
                i < Math.floor(rating)
                  ? "currentColor"
                  : "none"
              }
              className={
                i < Math.floor(rating)
                  ? "text-amber-400"
                  : "text-slate-200"
              }
            />

          ))}

          {rating > 0 && (
            <span className="ml-1 font-bold text-slate-400">
              {rating.toFixed(1)}
            </span>
          )}

        </div>

        {/* PRODUCT NAME */}
        <Link
          href={`/product/${product.id}`}
          className="
            line-clamp-2
            text-[15px]
            font-extrabold
            leading-6
            text-slate-900
            transition
          "
        >
          {product.shortName ||
            product.name}
        </Link>

        <div className="mt-auto pt-5">

          {/* PRICE */}
          <div className="flex flex-wrap items-end gap-2">

            <span className="text-2xl font-black tracking-tight text-slate-950">
              Rs.{" "}
              {price.toLocaleString("en-LK")}
            </span>

            {original > price && (
              <span className="pb-0.5 text-sm font-semibold text-slate-400 line-through">
                Rs.{" "}
                {original.toLocaleString("en-LK")}
              </span>
            )}

          </div>

          {/* ACTIONS */}
          <div className="mt-4 flex gap-2">

            {/* VIEW DEAL */}
            <Link
              href={`/product/${product.id}`}
              className="
                flex flex-1
                items-center justify-center gap-2
                rounded-2xl
                px-4 py-3
                text-xs
                font-black
                uppercase
                tracking-wider
                text-white
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:brightness-95
              "
              style={{
                backgroundColor:
                  "var(--view-deal)",
              }}
            >
              View Deal

              <ArrowUpRight
                size={15}
              />

            </Link>

            {/* EXTERNAL */}
            <a
              href={`/go/${product.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open affiliate link"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-2xl
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-all
                hover:-translate-y-0.5
              "
              style={{
                ["--button-hover" as string]:
                  "var(--hover)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--hover)";

                e.currentTarget.style.color =
                  "var(--hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "#e2e8f0";

                e.currentTarget.style.color =
                  "#64748b";
              }}
            >

              <ExternalLink
                size={16}
              />

            </a>

          </div>

        </div>

      </div>

    </article>
  );
}
