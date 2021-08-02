<template>
  <v-app>
    <TopNavigationbar />
    <v-main class="grey lighten-4">
      <v-container class="py-5">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer padless class="grey lighten-4">
      <v-layout column>
        <v-container class="my-5">
          <FooterCategories />
          <FooterGeneralInfo />
        </v-container>
        <FooterPolicyAndCopyrights />
      </v-layout>
    </v-footer>
    <MobileBottomNavigation />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'HardwareStore',
        name: 'دمیرکو',
        image: '',
        '@id': 'https://www.damirco.com',
        url: 'https://www.damirco.com',
        telephone: '021-77569156',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'خیابان شیخ صفی الدین',
          addressLocality: 'تهران',
          postalCode: '',
          addressCountry: 'IR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: "35.718997899432594",
          longitude: "51.44842462379313",
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Sunday',
            'Saturday',
            'Thursday',
            'Wednesday',
            'Tuesday',
            'Monday',
          ],
          opens: '08:00',
          closes: '20:00',
        },
      },
    }
  },
  head() {
    return {
      script: [{ type: 'application/ld+json', json: this.structuredData }],
    }
  },
}
</script>

