import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Under Construction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Under Construction
          </h1>
          <p className="text-gray-600">Coming Soon</p>
        </div>
      </div>
    </React.Fragment>
  );
}
