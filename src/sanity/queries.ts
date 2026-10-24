import { groq } from 'next-sanity';
import { client } from './client';
import type {
  DesignDocument,
  WebdevDocument,
  PhotoDocument,
  ProfileDocument,
} from './types';

export const profileQuery = groq`*[_type == "profile"][0] {
  name,
  avatar,
  bio,
  telegram,
  email,
  "resumeFileUrl": resumeFile.asset->url,
  resumeUrl,
  customLinks
}`;

export const webdevQuery = groq`*[_type == "webdev"][0] { webdev }`;

export const designQuery = groq`*[_type == "design"] { posts[] { preview, link }, date } | order(date desc)`;

export const photoQuery = groq`*[_type == "photo"] { 'images': images[], date } | order(date desc)`;

export async function getProfile(): Promise<ProfileDocument | null> {
  return client.fetch<ProfileDocument | null>(
    profileQuery,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getWebdev(): Promise<WebdevDocument | null> {
  return client.fetch<WebdevDocument | null>(
    webdevQuery,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getDesign(): Promise<DesignDocument[]> {
  return client.fetch<DesignDocument[]>(
    designQuery,
    {},
    { next: { revalidate: 60 } }
  );
}

export async function getPhoto(): Promise<PhotoDocument[]> {
  return client.fetch<PhotoDocument[]>(
    photoQuery,
    {},
    { next: { revalidate: 60 } }
  );
}
