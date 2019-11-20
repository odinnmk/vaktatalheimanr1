export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64.cf15be.png","120x120":"/_nuxt/icons/icon_120.cf15be.png","144x144":"/_nuxt/icons/icon_144.cf15be.png","152x152":"/_nuxt/icons/icon_152.cf15be.png","192x192":"/_nuxt/icons/icon_192.cf15be.png","384x384":"/_nuxt/icons/icon_384.cf15be.png","512x512":"/_nuxt/icons/icon_512.cf15be.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
