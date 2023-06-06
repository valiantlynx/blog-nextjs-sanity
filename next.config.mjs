/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      { hostname: 'cdn.sanity.io' },
      { hostname: 'source.unsplash.com' },
    ],
  },
  env: {
        GA_MEASUREMENT_ID: "G-M2PVXMBE67",
        CLARITY_KEY: "ftpnw924g7",
            // Defaults, used by ./intro-template and can be deleted if the component is removed
        NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER: "sanity-io",
        NEXT_PUBLIC_VERCEL_GIT_PROVIDER: "github",
        NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG: "nextjs-blog-cms-sanity-v3",

        // Required, find them on https://manage.sanity.io
        NEXT_PUBLIC_SANITY_PROJECT_ID: "ajju8uwl",
        NEXT_PUBLIC_SANITY_DATASET: "production",
        // see https://www.sanity.io/docs/api-versioning for how versioning works
        NEXT_PUBLIC_SANITY_API_VERSION: "2022-11-15",
        SANITY_API_READ_TOKEN: "skgeAghkz3mfmIELvipZO8yGJxcWc7OUb9jGLTXUaCwhm7nJOq2357U08QD6hUfYOCHUewGSK9lsZo0TaxA2gyD3bB03eU26JmTcFZniaqexGPRzReaR2643yEQHj0VwYxIjt4JNkOJkFIBnNTnWFPlPrWeZNJVw4trs91QTaFXextABfQlL",
        // Optional, useful if you plan to add API functions that can write to your dataset your dataset
        SANITY_API_WRITE_TOKEN: "sk69Km1guRukurDf9np7J7LWz7jrT7RkeXE5LRAwabuDLh9U5EjpULAYc7mYQYMJVGuqrnp2RQdWlnDbfHUrgXMgQJ1jQXtF6vvSoi1CkA7bLrmmd8Ozcskrh1vV0NG4qox7VCLOXdYeVEume6BlRK2AdHuwEO4yQp6YVYesEKNxBb47WF9M",

        // Optional, can be used to change the Studio title in the navbar and differentiate between production and staging environments for your editors
        NEXT_PUBLIC_SANITY_PROJECT_TITLE: "Next.js Blog with Sanity.io",

        // Optional, check the comments in pages/api/revalidate.ts for instructions on how to set it up
        SANITY_REVALIDATE_SECRET: "",

        // If `/api/preview?slug` URLs don't have a `secret` search parameter then static rendering will still be optimistically enabled but without
        // a `token` set. Instead, it'll check if the user have a valid Sanity session and have access to the project and dataset before any draft content is queried.
        // You can turn this off by setting this env var to "true" and only valid secrets will be allowed to bypass static rendering and harden the security.
        SANITY_REQUIRE_PREVIEW_SECRET: "",
    },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
  output: 'standalone',
}

export default config
