const blogData = [
  {
    id: 1,
    title: "Understanding Clean Architecture with Uncle Bob",
    dateCreated: "12 Jan 2024",
    tags: ["Software Architecture", "Clean Code", "Design Patterns", "Best Practices"],
    featured: false,
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
    id: 5,
    title: "My Graduation",
    featured: false,
    dateCreated: "27 Nov 2024",
    tags: ["Personal", "Education", "Achievement", "University"],
    content: `
       I am thrilled to share that I have officially graduated from Kwame Nkrumah University of Science and Technology, Kumasi with a First Class Honors in Business Information Technology! This incredible journey has been filled with growth, challenges, and memorable experiences that have shaped me into who I am today.

A heartfelt thank you to my supervisors and academic tutors To Dr John Serbe Marfo and Prof. Kwame Owusu Kwateng (PhD, CMILT, MCIPS) your invaluable guidance, mentorship, and encouragement have been a beacon of inspiration throughout this journey. I am deeply grateful for the impact you have had on both my academic and personal development.

A special shoutout to my brothers for life
To Ousman Njie, Alassana Jallow, Mamudou Bojang, and Yaya Sanyang I cannot thank you enough for standing by me during my highest moments and my lowest struggles. You have been more than friends you've been my family, always ready to lend a hand, share a laugh, or offer a shoulder to lean on. I am truly blessed to have you in my life.

To my classmates and group members
This journey would not have been possible without your collaboration, support, and shared determination. Together, we navigated challenges, celebrated victories, and proved the power of teamwork. As our paths diverge, I wish each of you success, growth, and fulfillment in all your future endeavors.
      `,
    image: require("../../assets/blog/IMG_9844.jpg")
  },
  {
    id: 6,
    featured: false,
    title: "Speak Up",
    dateCreated: "14 June 2025",
    tags: ["Motivation", "Personal Growth", "Career Advice", "Self-Development"],
    content: `
      Rest in peace to all the opportunities we missed buried by our silence, choked by fear, and forgotten by voices unheard.

I have sat in rooms where opportunity floated in the air, and those who dared to speak caught it. I have seen my talents buried under timidity, my potential strangled by fear. And I knew that if I wanted the world to hear me, I had to stop whispering my worth.

So I spoke up. I asked questions others were afraid to ask. I made my ideas heard in rooms where people doubted I belonged. I told my story when others hid theirs because I realized that silence might keep you comfortable, but it will never make you unforgettable.

The truth is, destiny responds to voice. Closed mouths protect pride but postpone purpose. And if you're waiting to be "discovered," you might be waiting forever.
      `,
    image: require("../../assets/blog//IMG_3069.jpeg")
  },
  {
    id: 7,
    featured: false,
    title: "Africa's Digital Transformation",
    dateCreated: "13 July 2024",
    tags: ["Africa Tech", "Digital Transformation", "Machine Learning", "AI"],
    content: `
     Africa's Digital Transformation is Accelerating 

I had an incredible experience at the Ghana Data Science Summit (IndabaX Ghana) 

As a software engineer working with AI applications and LLMs, I was thrilled to learn new techniques and gain insights into advanced machine learning, deep learning, computer vision, and image processing.

Learning about cross model learning, neural architecture, and attention mechanism important research topics in data science and computer vision was particularly impactful. I also discovered machine learning and data science real life applications I never imagined possible.

The event showcased amazing innovations and talents in the Ghana tech space, and the quality connections I made were truly inspiring.

Fun facts 😂:

This experience will always be inspiring while making you feel useless at the same time.

This experience has motivated me to dive even deeper into the world of data science.

Thank you, Ghana Data Science Summit (IndabaX Ghana) for hosting such an inspiring event!
      `,
    image: require("../../assets/IMG_5496.jpeg")
  },
  {
    id: 8,
    featured: false,
    title: "IndabaX Data Science Summit",
    dateCreated: "13/07/2024",
    tags: ["Python", "Conference", "Networking", "Africa Tech"],
    content: `
     PyCon Africa  

I had an incredible experience at the Ghana Data Science Summit (IndabaX Ghana) 

As a software engineer working with AI applications and LLMs, I was thrilled to learn new techniques and gain insights into advanced machine learning, deep learning, computer vision, and image processing.

Learning about cross model learning, neural architecture, and attention mechanism important research topics in data science and computer vision was particularly impactful. I also discovered machine learning and data science real life applications I never imagined possible.

The event showcased amazing innovations and talents in the Ghana tech space, and the quality connections I made were truly inspiring.

Fun facts 😂:

This experience will always be inspiring while making you feel useless at the same time.

This experience has motivated me to dive even deeper into the world of data science.

Thank you, Ghana Data Science Summit (IndabaX Ghana) for hosting such an inspiring event!
      `,
    image: require("../../assets/blog/IMG_4484.jpeg")
  },
  {
    id: 9,
    featured: true,
    title: "Pycon Africa 2024",
    dateCreated: "25/09/2024",
    tags: ["Python", "Conference", "Community", "Tech Events"],
    content: `
    Day three at PyCon Africa is full of excitement.

    Whether it's coding, networking, or enjoying coffee breaks, the energy and collaboration here is exceptional.

    We came for the code and stayed for the community.

    feeling the AGI with Jason Quist 
      `,
    image: require("../../assets/blog/IMG_8071.jpeg")
  },
  {
    id: 10,
    featured: false,
    title: "Developers & Screen Time",
    dateCreated: "04/13/2024",
    tags: ["Developer Life", "Work-Life Balance", "Productivity", "Health"],
    content: `
   Being a Good Developer involves a lot of screen time and being a creator involves even more .

stepping away from the screen isn't just about taking breaks it's also about fostering creativity and innovation. Engaging in activities unrelated to coding stimulates different parts of the brain, leading to new insights and ideas. Many developers find that their best solutions come to them when they least expect it, whether it's during a shower, a workout, or a leisurely stroll.

being a good developer isn't just about the quantity of screen time , it's about finding the right balance between focused work and rejuvenating breaks. Embracing this approach not only enhances productivity but also promotes long term well being and creativity. 

So, the next time you find yourself stuck on a bug, remember that taking some time away from the screen may be the most productive thing you can do.
      `,
    image: require("../../assets/blog/IMG_1696.jpeg")
  },
  {
    id: 11,
    featured: false,
    title: "My Senegalese Brother",
    dateCreated: "27/09/2024",
    tags: ["Networking", "Inspiration", "Google", "Africa Tech"],
    content: `
 Day Four at PyCon Africa was truly a dream come true for me. 

I had the privilege of meeting Abdoulaye Diack my Senegambian 🇬🇲🇸🇳 brother and the Research Program Manager at Google Ghana. With over two decades of experience in the tech industry, Abdoulie has been leading impactful AI research across the Global South.

Abdoulaye has long been my source of inspiration in Africa's tech ecosystem, and meeting him in person was a significant milestone for me. 

It was an incredible opportunity to share my passion and interests with someone who has contributed so much to this vibrant community.

Check his Portfolio- https://adiack.github.io
      `,
    image: require("../../assets/blog/IMG_8165.jpeg")
  },
  {
    id: 12,
    featured: false,
    title: "Senior Developer",
    dateCreated: "07/06/2024",
    tags: ["Career Development", "Soft Skills", "Leadership", "Programming"],
    content: `
 Writing Code Won't Make You a Senior Developer.

Have you ever realized that many problems are solved in our heads or through sketching and brainstorming with the team before writing a single line of code?

Climbing the ladder to become a senior developer requires not only technical skills but, more importantly, soft skills. Your ability to work effectively with people from diverse backgrounds and navigate complex interpersonal dynamics is important .

Becoming a better developer involves balancing both technical and soft skills. Focus on continuous improvement in these areas to advance your career and impact your team and projects.

Soft Skills Tips for Devs

1.Communication Skills ‼️
2.Time Management 
3.Leadership 
4.Adaptability 
5.Problem Solving 
6.Collaboration 

Keep Innovation 🙌
      `,
    image: require("../../assets/blog/IMG_0733.jpg")
  }
];

export default blogData;