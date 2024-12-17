import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const cloudinaryUrlSchema = z
  .string()
  .refine((url) => url.includes("cloudinary.com"), {
    message: "URL harus berasal dari Cloudinary",
  })
  .transform((url) => {
    const uploadIndex = url.indexOf("/upload/");
    if (uploadIndex !== -1) {
      return (
        url.slice(0, uploadIndex + 8) + "f_webp/" + url.slice(uploadIndex + 8)
      );
    }
    return url;
  });

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnailUrl: cloudinaryUrlSchema,
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});
const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnailUrl: cloudinaryUrlSchema,
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

export const collections = { blog, projects };
