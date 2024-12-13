import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl  font-semibold mb-4">Not found</h2>
        <p className="text-lg mb-4">
          The page you are looking for does not exist.
        </p>
      </div>
      
        <Button className="flex items-center justify-center gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </Button>
        <footer className="text-center mt-12 text-sm text-muted-foreground">
                If you believe this is an error, please contact support.
        </footer>
    </div>
  );
}

export default NotFoundPage;
