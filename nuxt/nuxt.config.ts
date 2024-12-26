// https://nuxt.com/docs/api/configuration/nuxt-config
let meta = [
  { name: 'format-detection', content: 'telephone=no' },
  { name: 'format-detection', content: 'address=no' },
  { name: 'format-detection', content: 'email=no' },
  { name: 'format-detection', content: 'date=no' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1' },
]

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'RSP',
      htmlAttrs: { lang: 'en' },
      meta: meta,
      link: [
        // { rel: 'stylesheet', href: 'https://use.typekit.net/uwv0htd.css' }
        { rel:"preconnect", href: "https://fonts.googleapis.com" },
        { rel:"preconnect", href: "https://fonts.googleapis.com", crossorigin: true },
        {
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap",
          rel: "stylesheet"
        }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
   cssPath: '~/assets/css/tailwind.css',
  }
})