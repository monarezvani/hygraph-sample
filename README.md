# Overview

This project utilizes Next.js for server-side rendering (SSR) to accommodate frequent data changes within a Content Management System (CMS) and is based on the necessity for immediate data freshness and SEO considerations.

# @apollo/client vs. graphql-request

We've opted to utilize Apollo Client for GraphQL operations within this project due to its active maintenance, extensive feature set, and vibrant community support. Notably, Apollo Client's recent updates, occurring every few weeks, showcase its commitment to ongoing development and improvement. With a considerable number of stars and forks on GitHub (19.2k stars as of the last update), Apollo Client has garnered significant traction and community adoption. In contrast, graphql-request, while a viable option, has seen its last update approximately 9 months ago, with comparatively fewer stars and forks (5.6k stars ). This decision reflects our confidence in Apollo Client's reliability, comprehensive functionality, and the thriving ecosystem it offers for GraphQL integration

# Webhooks Integration

To maintain data freshness and trigger updates upon CMS content changes, the project recommends setting up webhooks within the CMS. These webhooks should notify the Next.js application whenever content is added, updated, or deleted.

Upon receiving a webhook notification, the application will initiate a rebuild of affected pages using either SSR or ISR, depending on the chosen strategy. This ensures that the latest content is promptly reflected in the Next.js web application, enhancing user experience and search engine visibility.

# @next/third-parties

he @next/third-parties package simplifies the integration of YouTube video embeds into Next.js applications, offering optimized components for streamlined usage. With dedicated components like YouTubeEmbed, developers can easily include YouTube videos with minimal setup, ensuring faster load times and improved user experience. This package abstracts complex loading techniques, making it effortless to integrate YouTube embeds while maintaining performance standards in Next.js projects.

# Getting Started

To get started with the project:

1- Install dependencies using npm install.
2- Run the development server using npm run dev.

# Additional Resources

Next.js Documentation for in-depth guides and tutorials: https://nextjs.org/docs
Apollo Client Documentation for integrating GraphQL with Next.js using @apollo/client:https://www.apollographql.com/blog/how-to-use-apollo-client-with-next-js-13
CMS Documentation for setting up model and understanding data management options: https://hygraph.com/docs
https://developer.chrome.com/blog/next-third-parties
