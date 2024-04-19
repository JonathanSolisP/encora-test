DROP DATABASE IF EXISTS encora;
CREATE DATABASE encora OWNER postgres;

USE encora;

CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL
);

INSERT INTO public.blogs (title, content, photo) values ('blog title', 'blog content', 'blog photo');
INSERT INTO public.blogs (title, content, photo) values ('blog title2', 'blog content2', 'blog photo2');
INSERT INTO public.blogs (title, content, photo) values ('blog title3', 'blog content3', 'blog photo3');