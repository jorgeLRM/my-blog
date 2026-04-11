export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
}

// Array order implies insertion recency — add newest projects at the end.
// The homepage "Latest Projects" section displays the last three entries.
export const projects: Project[] = [];
