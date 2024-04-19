DROP DATABASE IF EXISTS encora;
CREATE DATABASE encora OWNER postgres;

USE encora;

CREATE SCHEMA IF NOT EXISTS public;

CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content text NOT NULL,
  photo VARCHAR(255) NOT NULL
);

INSERT INTO public.blogs (title, content, photo)
     VALUES (
        'Mejores ejercicios para bajar de peso rápido',
        'Hay un montón de maneras de quemar calorías rápido, y hoy nos vamos a centrar en exponer los que son para nosotros los mejores ejercicios para bajar de peso rápido. Una cosa que tienen en común todos los ejercicios para quemar calorías que presentamos a continuación es que son grandes rutinas de cuerpo entero que desafían, de la cabeza a los pies. Al incorporar tanto el trabajo cardiovascular como de fuerza, se logra cumplir e incluso superar el umbral de las 700 calorías.',
        'https://www.gymcompany.es/blog/wp-content/uploads/2013/10/ejercicios-para-quemar-calorias-hombre-sprint.jpg'
     );
INSERT INTO public.blogs (title, content, photo) 
     VALUES (
      'Intel Fights Back, Major AI Threats Ahead, and Michael Dell Is Back, Baby!',
      'Tech analyst Rob Enderle discusses Intels response to strategic challenges and how Michael Dells renewed leadership at Dell signals a strong comeback amid critical AI threats...',
      'https://www.technewsworld.com/story/intel-fights-back-major-ai-threats-ahead-and-michael-dell-is-back-baby-179119.html'
     );