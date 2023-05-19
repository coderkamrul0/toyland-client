import React from "react";
import { Helmet } from 'react-helmet';


const Blogs = () => {
  return (
    <div className="py-16">
      <Helmet>
        <title>ToyLand | Blogs</title>
      </Helmet>
      <h1 className="text-center text-4xl font-bold">ToyLand Blogs</h1>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <h4 className="font-bold text-xl pb-5">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p>
            An access token is a short-lived, limited-permission token that is
            used to access protected resources. A refresh token is a long-lived,
            high-permission token that can be used to obtain new access tokens.
            Access tokens are typically used to access resources that are not
            sensitive, such as public data or user-specific data that is not
            confidential. Refresh tokens are typically used to access resources
            that are sensitive, such as user-specific data that is confidential.
            Access tokens are typically stored in the browser's local storage or
            cookies. Refresh tokens are typically stored in the browser's local
            storage or a secure database.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl pb-5">Compare SQL and NoSQL databases?</h4>
          <p>
            QL databases are relational databases that use a structured query
            language (SQL) to access and manipulate data. SQL databases are
            typically used for structured data, such as customer records or
            product inventory. SQL databases are good for performing complex
            queries and enforcing data integrity. NoSQL databases are
            non-relational databases that do not use SQL. NoSQL databases are
            typically used for unstructured data, such as social media posts or
            sensor data. NoSQL databases are good for storing large amounts of
            data and scaling horizontally. The best database for a particular
            application depends on the type of data being stored and the
            requirements of the application. If the data is structured and
            complex queries are needed, then a SQL database is a good choice. If
            the data is unstructured and scaling is important, then a NoSQL
            database is a good choice.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl pb-5">What is express js? What is Nest JS?</h4>
          <p>
            1 Express.js is a minimal and flexible Node.js web application
            framework that provides a robust set of features for building web
            applications. It is designed to be easy to use and extend, and it
            has a large and active community of developers. Nest.js is a
            progressive Node.js framework that combines the features of
            Express.js with the power of TypeScript and the NestJS ecosystem. It
            provides a robust set of features for building scalable and
            maintainable web applications.Express.js is a good choice for
            building simple and straightforward web applications. Nest.js is a
            good choice for building scalable and maintainable web applications.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl pb-5">What is MongoDB aggregate and how does it work?</h4>
          <p>
            MongoDB aggregate is a feature that allows you to perform complex
            operations on data in a MongoDB collection. Aggregate operations are
            performed using a pipeline, which is a sequence of stages that
            process the data. Each stage performs an operation on the input
            data, and the output from one stage is passed to the next stage.This
            pipeline will first filter the data to only include users who are
            over 18 years old. It will then group the data by the _id field and
            calculate the average age for each group. The final result will be
            an array of documents, each of which contains the average age for a
            group of users. MongoDB aggregate is a powerful tool that can be
            used to perform complex operations on data. By using aggregate, you
            can easily find patterns in your data and extract insights that
            would be difficult or impossible to find using other methods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
