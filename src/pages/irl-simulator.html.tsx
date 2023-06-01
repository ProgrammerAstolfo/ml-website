import Head from "next/head";
import { useEffect } from "react";

export default function IRLSimulatorHTMLRedirect() {
    return (
        <div>
            <Head>
                <meta httpEquiv="refresh" content="1; url=/project/irlsimulator" />
            </Head>
            <h1>Old URL, redirecting to new one...</h1>
        </div>
    )
}