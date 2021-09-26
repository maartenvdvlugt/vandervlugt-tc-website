import React from "react";
import Head from "next/head";

interface PageHeaderProps {
  title: string;
  description?: string;
  follow?: boolean;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, description, follow } = props;
  return (
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <title>{title}</title>

      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='icon' type='image/png' href='/favicon.png' />

      {/* Short description of the document (limit to 150 characters)
                This content *may* be used as a part of search engine results. */}
      {description ? <meta name='description' content={description} /> : null}

      {/* Control the behavior of search engine crawling and indexing */}
      {follow ? <meta name='robots' content='index,follow'></meta> : null}
    </Head>
  );
};
