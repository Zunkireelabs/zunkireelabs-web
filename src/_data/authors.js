export default {
  "sadin-shrestha": {
    id: "sadin-shrestha",
    name: "Sadin Shrestha",
    role: "Founder & CEO",
    bio: "Founder of Zunkiree Labs. Building AI infrastructure from Kathmandu, Nepal.",
    avatar: "/assets/images/team/sadin-shrestha.webp",
    social: {
      twitter: "https://twitter.com/sadinshrestha",
      linkedin: "https://linkedin.com/in/sadinshrestha"
    }
  },
  "zunkiree-team": {
    id: "zunkiree-team",
    name: "Zunkiree Labs Team",
    role: "Engineering Team",
    bio: "The Zunkiree Labs engineering team builds AI systems, RAG pipelines, and enterprise software.",
    avatar: "/assets/images/zunkireelabs-logo-light.png",
    // The logo asset is the full wide wordmark (~9:1
    // aspect), not a square icon mark. object-cover in a circular frame
    // crops most of it away, so this author's avatar needs object-contain
    // instead of the object-cover every other (headshot) avatar uses.
    avatarFit: "contain",
    social: {
      twitter: "https://twitter.com/zunkiree",
      linkedin: "https://www.linkedin.com/company/zunkireelabs"
    }
  }
};
