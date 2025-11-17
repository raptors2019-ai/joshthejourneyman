import { defineType, defineField } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
      description: 'Brief 150 character summary of the post',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      description: 'Full article content with rich text',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'string',
      description: 'YouTube or other video URL',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Technologies used in this project',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as featured (shows badge on grid)',
      initialValue: false,
    }),
    defineField({
      name: 'problem',
      title: 'The Problem',
      type: 'string',
      description:
        'What problem does this project solve? (for PM-focused sidebar)',
    }),
    defineField({
      name: 'hypothesis',
      title: 'Initial Hypothesis',
      type: 'string',
      description:
        'What was your initial hypothesis? (for PM-focused sidebar)',
    }),
    defineField({
      name: 'learnings',
      title: 'Key Learnings',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Array of key learnings from the project',
    }),
  ],
});
