const blogData = [
    {
      id: 1,
      title: "Understanding Clean Architecture with Uncle Bob",
      dateCreated: "7 months ago",
      content: `
        Clean Architecture is a timeless design pattern proposed by Uncle Bob. 
        It emphasizes the separation of concerns, ensuring that the core logic 
        of your software is isolated from external systems such as the UI, databases, and frameworks. 
        This blog covers the principles of Clean Architecture, including how to achieve independent layers, 
        make the code more testable, and promote scalability. Let's dive into practical implementation techniques for building robust, maintainable applications.
      `,
      image: require("../../assets/nike.jpeg")
    },
    {
      id: 2,
      title: "Machine Learning in Production: Challenges and Solutions",
      dateCreated: "6 months ago",
      content: `
        Moving machine learning models from experimentation to production comes with its own set of challenges. 
        From data pipeline maintenance to model monitoring and performance scaling, 
        this blog dives into common hurdles encountered and offers practical solutions. 
        Learn about deployment strategies, managing data drift, and ensuring continuous improvements in production environments.
      `,
      image: require("../../assets/airbnb.jpeg")
    },
    {
      id: 3,
      title: "Why React is the Go-To Framework for Frontend Development",
      dateCreated: "5 months ago",
      content: `
        React has taken the frontend world by storm, but why is it the preferred framework for many developers? 
        In this blog, we explore the reasons behind React's popularity, 
        including its component-based architecture, virtual DOM, and large ecosystem of tools. 
        Whether you're building a single-page application or a large web project, React provides flexibility and scalability.
      `,
      image: require("../../assets/Screenshot 2023-06-11 at 11.40.32 PM.png")
    },
    {
      id: 4,
      title: "The Role of Feature Engineering in Machine Learning Success",
      dateCreated: "4 months ago",
      content: `
        Feature engineering is one of the most critical steps in building machine learning models. 
        This blog explains the concept of feature engineering, why it matters, and how to transform raw data into meaningful features that improve model accuracy. 
        Learn how domain knowledge, feature selection, and transformation techniques can significantly impact the outcome of your ML project.
      `,
      image: require("../../assets/client.png")
    },
    {
      id: 5,
      title: "Mastering Git for Collaborative Software Development",
      dateCreated: "3 months ago",
      content: `
        Git is an essential tool for software development teams, providing version control and collaboration capabilities. 
        This blog covers everything you need to know to master Git, from basic commands to advanced features like branching strategies, conflict resolution, and pull requests. 
        Whether you're working solo or with a team, mastering Git is crucial for maintaining an organized and efficient workflow.
      `,
      image: "https://example.com/git-collaboration.jpg"
    },
    {
      id: 6,
      title: "AI Ethics: Navigating the Moral Landscape of Machine Learning",
      dateCreated: "2 months ago",
      content: `
        As AI and machine learning continue to evolve, the ethical considerations surrounding these technologies become more pressing. 
        In this blog, we explore AI ethics, including issues such as bias in models, data privacy concerns, and the societal impacts of autonomous systems. 
        Learn how to approach AI development with a focus on fairness, transparency, and responsibility.
      `,
      image: "https://example.com/ai-ethics.jpg"
    },
    {
      id: 7,
      title: "DevOps for Machine Learning: Bridging the Gap Between ML and Ops",
      dateCreated: "1 month ago",
      content: `
        DevOps has transformed software development, but what about its role in machine learning? 
        This blog dives into the intersection of DevOps and ML, exploring how MLOps helps streamline model development, deployment, and monitoring. 
        Learn about continuous integration and delivery (CI/CD) pipelines for ML models and how to automate the lifecycle of machine learning applications.
      `,
      image: "https://example.com/mlops.jpg"
    }
  ];
  
  export default blogData;