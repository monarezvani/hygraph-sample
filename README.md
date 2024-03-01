# Overview

This project utilizes Next.js for server-side rendering (SSR) to accommodate frequent data changes within a Content Management System (CMS) and is based on the necessity for immediate data freshness and SEO considerations.

# @apollo/client vs. graphql-request

The project opts for @apollo/client over graphql-request. This decision is influenced by the active maintenance and frequent updates of @apollo/client, ensuring compatibility with the latest features and best practices. As of the last update, @apollo/client provides a more reliable and up-to-date solution.

# Webhooks Integration

To maintain data freshness and trigger updates upon CMS content changes, the project recommends setting up webhooks within the CMS. These webhooks should notify the Next.js application whenever content is added, updated, or deleted.

Upon receiving a webhook notification, the application will initiate a rebuild of affected pages using either SSR or ISR, depending on the chosen strategy. This ensures that the latest content is promptly reflected in the Next.js web application, enhancing user experience and search engine visibility.

# Getting Started

To get started with the project:

1- Install dependencies using npm install.
2- Run the development server using npm run dev.

# Additional Resources

Next.js Documentation for in-depth guides and tutorials: https://nextjs.org/docs
Apollo Client Documentation for integrating GraphQL with Next.js using @apollo/client:https://www.apollographql.com/blog/how-to-use-apollo-client-with-next-js-13
CMS Documentation for setting up model and understanding data management options: https://hygraph.com/docs
