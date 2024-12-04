import { Link } from "@lazarv/react-server/navigation";
import { Suspense } from "react";
import { usePrerender } from "@lazarv/react-server/prerender";

async function DynamicComponent() {
  usePrerender();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Dynamic content loaded from a slow backend.</div>;
}

export default async function AboutPage() {

  return (
    <div>
      <title>About</title>
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <p>This is placeholder for a Textblock.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
      <Link to="/" className="mt-4 inline-block underline">
        Return home
      </Link>
    </div>
  );
}