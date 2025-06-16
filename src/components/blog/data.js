const blogData = [
  {
    id: 1,
    title: "AWS Loves Next.js",
    dateCreated: "2 months ago",
    content: `
    Today, when we develop modern web applications, we should use a suitable page rendering technique that makes sense to our application. You may use Server-Side Rendering(SSR), Static Site Generation (SSG), Client-side rendering, or a mix of these techniques. br
    <br>
Next.js is a fast and reliable way to build production-ready React web applications that supports all three rendering modes mentioned above.
<br>
The best thing about Next.js is that you can use a blend of SSR, SSG or Client-side rendering in the same application as per your use case.
Because of this flexibility, the major players in the IT industry have started embracing Next.js rapidly. Therefore public cloud providers like AWS and Azure began to providing more support and love to Next.js.


    `,
    image: require("../../assets/aws.webp")
  },
  {
    id: 1,
    title: "Understanding Clean Architecture with Uncle Bob",
    dateCreated: "1 months ago",
    content: `
        Clean Architecture is a timeless design pattern proposed by Uncle Bob. 
        It emphasizes the separation of concerns, ensuring that the core logic 
        of your software is isolated from external systems such as the UI, databases, and frameworks. 
        This blog covers the principles of Clean Architecture, including how to achieve independent layers, 
        make the code more testable, and promote scalability. Let's dive into practical implementation techniques for building robust, maintainable applications.
      `,
    image: require("../../assets/clean.JPG")
  },
  {
    id: 2,
    title: "Machine Learning in Production: Challenges and Solutions",
    dateCreated: "1 months ago",
    content: `
        Moving machine learning models from experimentation to production comes with its own set of challenges. 
        From data pipeline maintenance to model monitoring and performance scaling, 
        this blog dives into common hurdles encountered and offers practical solutions. 
        Learn about deployment strategies, managing data drift, and ensuring continuous improvements in production environments.
      `,
    image: require("../../assets/mlops.JPG")
  },
  {
    id: 3,
    title: "Why React is the Go-To Framework for Frontend Development",
    dateCreated: "1 months ago",
    content: `
        React has taken the frontend world by storm, but why is it the preferred framework for many developers? 
        In this blog, we explore the reasons behind React's popularity, 
        including its component-based architecture, virtual DOM, and large ecosystem of tools. 
        Whether you're building a single-page application or a large web project, React provides flexibility and scalability.
      `,
    image: require("../../assets/react2.JPG")
  },
  {
    id: 4,
    title: "The Role of Feature Engineering in Machine Learning Success",
    dateCreated: "1 months ago",
    content: `
        Feature engineering is one of the most critical steps in building machine learning models. 
        This blog explains the concept of feature engineering, why it matters, and how to transform raw data into meaningful features that improve model accuracy. 
        Learn how domain knowledge, feature selection, and transformation techniques can significantly impact the outcome of your ML project.
      `,
    image: require("../../assets/eng.JPG")
  }
];

export default blogData;