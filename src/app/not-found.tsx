"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-primary/10 p-6 rounded-full mb-8 shadow-sm">
        <SearchX className="w-16 h-16 text-primary" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-sm">
        404 - Page Not Found
      </h1>
      <p className="text-muted-foreground text-lg mb-8 max-w-[500px]">
        Oops! We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps the URL is incorrect.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          variant="outline" 
          size="lg" 
          onClick={() => router.back()}
          className="group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Go Back
        </Button>
        <Link href="/">
          <Button size="lg" className="w-full sm:w-auto group">
            <Home className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
