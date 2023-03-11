import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'vyqbplzw',
  dataset: 'production',
  apiVersion: '2023-03-01',
  useCdn: true,
});

const builder = ImageUrlBuilder(client);

export const urlFor = source => builder.image(source);
