// When we can, use this file as not-found page and move it under [lang] dir (https://github.com/vercel/next.js/discussions/12477) and delete the main root layout

import { redirect } from 'next/navigation'

export default function NotFound() {
  redirect('/bla')
}
