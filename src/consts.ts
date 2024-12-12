import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "SYD Blog",
  EMAIL: "devan@syd.my.id",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Bahas Programming dan Web Development dengan Santai",
  DESCRIPTION:
    "SYD blog adalah sebuah blog yg berisi tentang programming dan hal - hal menarik lainnya yg ditulis oleh Devan.",
};

export const ERROR: Metadata = {
  TITLE: "404 Page Not Found",
  DESCRIPTION: "Maaf, halaman yg kamu cari gk ada di blog ini.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Kumpulan blog dalam beragam topik yg sudah aku tulis.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Kumpulan project yg sudah pernah aku buat.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
    HREF: "https://x.com/Nipaaaa1b",
  },
  {
    NAME: "github",
    HREF: "https://github.com/Nipaaaa1",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/devan-sayidina-52586a30a",
  },
];
