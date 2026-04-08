export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  featured: boolean;
}

export const featuredProjects: Project[] = [
  {
    title: "Distributed KV Store",
    description:
      "A distributed key-value store built with Go, featuring Raft consensus, sharding, and automatic rebalancing.",
    tags: ["Go", "gRPC", "Raft"],
    githubUrl: "https://github.com/joramosmarti/distributed-kv",
    featured: true,
  },
  {
    title: "Event Sourcing Framework",
    description:
      "A lightweight event sourcing and CQRS framework for Java applications with support for multiple event stores.",
    tags: ["Java", "Spring Boot", "Kafka"],
    githubUrl: "https://github.com/joramosmarti/event-sourcing",
    featured: true,
  },
  {
    title: "Load Balancer",
    description:
      "High-performance L7 load balancer with dynamic configuration, health checks, and circuit breaking.",
    tags: ["Go", "TCP/HTTP", "Prometheus"],
    githubUrl: "https://github.com/joramosmarti/load-balancer",
    featured: true,
  },
];
