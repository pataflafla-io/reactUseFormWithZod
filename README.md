# React Form PoC

A small proof of concept to explore form handling and validation on the **frontend** using **React Hook Form**, **Zod**, and **TypeScript**.

This started with a simple question:

> What if I use React Hook Form + Zod to handle form validation on the frontend of my e-commerce project?

The e-commerce already uses **Zod in its server actions**.
This PoC explores bringing the same schema-based validation approach to the client side.
Rather than changing the existing application right away, I decided to isolate the idea first, build a small component, and see how it feels in practice.

This repository is the result.

## Context

The e-commerce project already uses Zod to validate data in its server actions.
The forms themselves, however, were initially implemented using React state and input handling directly.
There is nothing fundamentally wrong with that approach. It works. but while revisiting the project, I wanted to explore whether using **React Hook Form + Zod on the frontend** could make the form logic simpler and the validation rules more explicit.
So, instead of introducing the new approach directly into the application, I pulled the idea out into a small PoC.

## What I'm exploring

This PoC brings together:

* React Hook Form for form state and submission.
* Zod for schema-based validation.
* `zodResolver` to connect React Hook Form and Zod.
* TypeScript for type safety and inference.
* Vite for a lightweight development environment.

The main idea is to explore whether the validation model already used by the server can also provide a good fit for the frontend.

## Tech Stack

* React
* TypeScript
* React Hook Form
* Zod
* `@hookform/resolvers`
* Vite

## Why a PoC?

Because I don't want to introduce a new approach into an existing project just because it looks good on paper. The e-commerce already works, and it already uses Zod on the server side.
So before changing the frontend forms, I wanted to build something small, use it, and see what I actually gain from the new approach.

The question is not:

> Is React Hook Form + Zod better?

The question is:

> Is it a better fit for the frontend of this particular project?

I'll find that out when I integrate it back into the e-commerce.

## Project Structure

The project is intentionally small.
The form component handles the UI and interaction, while the Zod schema contains the validation rules.
The goal is to keep validation explicit and independent from the form implementation, while still taking advantage of TypeScript's type inference.

## Running locally

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide the local URL.

## Related Project

This PoC comes from an existing e-commerce project built with:

* Next.js
* TypeScript
* Prisma
* PostgreSQL
* NextAuth
* Zod
* Tailwind CSS

The application already uses Zod in its server actions.
The frontend forms currently use React state and input handling.
This repository explores a possible frontend refactoring path using React Hook Form and Zod.

## Status

**Proof of concept — experimental**

This is intentionally not a form library or a production-ready component.
It is a small experiment built to answer a real question in an existing project.
If the approach proves useful, I'll bring it back into the e-commerce and see how it behaves there.
