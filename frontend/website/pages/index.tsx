import Head from "next/head";
import { SomeComponent } from "@guided/components";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Guided</title>
      </Head>

      <main>
        <SomeComponent />
      </main>
    </div>
  );
}
