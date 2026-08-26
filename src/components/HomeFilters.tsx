"use client";

import React, {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  LayoutGrid,
  ChevronDown,
  Check,
} from "lucide-react";

import Link from "next/link";

export default function HomeFilters({
  categories,
  title = "Featured Deals",
}: {
  categories: any[];
  title?: string;
}) {

  const router = useRouter();

  const searchParams =
    useSearchParams();

  const [isOpen, setIsOpen] =
    useState(false);

  const dropRef =
    useRef<HTMLDivElement>(null);

  const selectedCat =
    searchParams.get("category") ||
    "all";

  const sortOrder =
    searchParams.get("sort") ||
    "newest";

  const options = [
    {
      v: "newest",
      l: "Latest Arrivals",
    },
    {
      v: "price_low",
      l: "Price: Low to High",
    },
    {
      v: "price_high",
      l: "Price: High to Low",
    },
    {
      v: "rating",
      l: "Top Rated Deals",
    },
  ];

  const updateSort = (v: string) => {

    const p =
      new URLSearchParams(
        searchParams.toString()
      );

    if (v === "newest") {
      p.delete("sort");
    } else {
      p.set("sort", v);
    }

    const query =
      p.toString();

    router.push(
      query
        ? `/?${query}`
        : "/",
      {
        scroll: false,
      }
    );

    setIsOpen(false);
  };

  useEffect(() => {

    const close = (
      e: MouseEvent
    ) => {

      if (
        dropRef.current &&
        !dropRef.current.contains(
          e.target as Node
        )
      ) {
        setIsOpen(false);
      }

    };

    document.addEventListener(
      "mousedown",
      close
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        close
      );

  }, []);

  return (

    <div
      className="
        mb-10
        space-y-8
      "
    >

      {/* TITLE + SORT */}

      <div
        className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-end
          md:justify-between
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-[1000]
              tracking-tighter
              text-slate-900
              uppercase
              italic
            "
          >
            {title}
          </h2>

          <div
            className="
              mt-2
              h-1.5
              w-16
              rounded-full
            "
            style={{
              backgroundColor:
                "var(--primary)",
            }}
          />

        </div>

        {/* SORT */}

        <div
          className="relative"
          ref={dropRef}
        >

          <button
            onClick={() =>
              setIsOpen(!isOpen)
            }
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-6
              py-3.5
              shadow-sm
              transition-all
              md:w-64
              hover:border-[var(--hover)]
            "
          >

            <div
              className="
                flex
                flex-col
                items-start
                leading-tight
              "
            >

              <span
                className="
                  mb-0.5
                  text-[9px]
                  font-black
                  uppercase
                  text-slate-400
                "
              >
                Sort Results
              </span>

              <span
                className="
                  text-sm
                  font-bold
                  text-slate-800
                "
              >
                {
                  options.find(
                    (o) =>
                      o.v === sortOrder
                  )?.l
                }
              </span>

            </div>

            <ChevronDown
              size={18}
              className={`
                transition-transform
                ${isOpen
                  ? "rotate-180"
                  : ""
                }
              `}
              style={{
                color:
                  "var(--hover)",
              }}
            />

          </button>

          {isOpen && (

            <div
              className="
                absolute
                right-0
                top-[110%]
                z-[100]
                w-full
                rounded-2xl
                border
                border-slate-100
                bg-white
                p-2
                shadow-2xl
                animate-in
                fade-in
                slide-in-from-top-2
              "
            >

              {options.map((o) => {

                const selected =
                  sortOrder === o.v;

                return (

                  <button
                    key={o.v}
                    onClick={() =>
                      updateSort(o.v)
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3
                      text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      transition
                    "
                    style={
                      selected
                        ? {
                            backgroundColor:
                              "color-mix(in srgb, var(--sort-selected) 10%, white)",
                            color:
                              "var(--sort-selected)",
                          }
                        : undefined
                    }
                  >

                    <span
                      className={
                        selected
                          ? ""
                          : "text-slate-600 hover:text-[var(--hover)]"
                      }
                    >
                      {o.l}
                    </span>

                    {selected && (
                      <Check
                        size={14}
                      />
                    )}

                  </button>

                );
              })}

            </div>

          )}

        </div>

      </div>

      {/* CATEGORIES */}

      <div
        className="
          flex
          gap-2
          overflow-x-auto
          pb-2
          no-scrollbar
        "
      >

        {/* ALL */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2
            whitespace-nowrap
            rounded-xl
            border
            px-8
            py-3.5
            text-[10px]
            font-black
            uppercase
            tracking-widest
            transition-all
          "
          style={
            selectedCat === "all"
              ? {
                  backgroundColor:
                    "var(--category-selected)",
                  borderColor:
                    "var(--category-selected)",
                  color: "#fff",
                }
              : undefined
          }
        >

          <LayoutGrid
            size={14}
          />

          All Deals

        </Link>

        {/* CATEGORIES */}

        {categories.map((c) => {

          const selected =
            selectedCat === c.slug;

          return (

            <Link
              key={c.id}
              href={`/?category=${c.slug}`}
              className="
                whitespace-nowrap
                rounded-xl
                border
                px-8
                py-3.5
                text-[10px]
                font-black
                uppercase
                tracking-widest
                transition-all
              "
              style={
                selected
                  ? {
                      backgroundColor:
                        "var(--category-selected)",
                      borderColor:
                        "var(--category-selected)",
                      color: "#fff",
                    }
                  : undefined
              }
            >

              {c.name}

            </Link>

          );

        })}

      </div>

    </div>
  );
}
