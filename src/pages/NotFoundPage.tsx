import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SwatchVisual } from "../components/ui/SwatchVisual";

export function NotFoundPage() {
  return (
    <section className="thread-grid flex min-h-[100svh] items-center bg-night text-paper">
      <div className="mx-auto grid w-full max-w-[76rem] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-clay-soft">
            Error 404
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance sm:text-6xl">
            This thread <span className="italic text-clay-soft">came loose.</span>
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-mist">
            The page you are looking for does not exist or has been moved. Let us guide
            you back to the main collection.
          </p>
          <Link to="/" className="mt-10 inline-block">
            <Button size="lg">
              <ArrowLeft className="size-4" strokeWidth={2.25} />
              Back to Homepage
            </Button>
          </Link>
        </div>
        <figure className="hidden overflow-hidden rounded-xl shadow-panel ring-1 ring-paper/15 lg:block">
          <SwatchVisual
            pattern="twill"
            palette={{ base: "#33475E", warp: "#42586F", weft: "#232F3E" }}
            className="aspect-[4/3] w-full"
          />
        </figure>
      </div>
    </section>
  );
}
