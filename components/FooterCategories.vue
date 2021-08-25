<template>
  <v-layout column  id="products-footer">
    <v-card elevation="0" class="text-h6 text-center pa-5 font-weight-bold my-1"
      >لیست دسته‌بندی ها</v-card
    >
    <div class="my-5 mt-1 d-flex flex-nowrap" no-gutters style="overflow: auto">
      <div
        v-for="mother_category in footerCategories"
        :key="mother_category.slug"
        style="min-width: 281px;"
        class="pa-2"
      >
        <v-layout column class="text-center">
          <v-card elevation="0" class="pa-3 text-center primary--text font-weight-bold">
            {{ mother_category.title }}
          </v-card>
          <v-btn
            v-for="category in mother_category.categories"
            :key="category.slug"
            text
            class="my-1 grey lighten-5" v-bind:href="'/product-category/'+ category.slug"
            >{{ category.title }}</v-btn
          >
          <v-btn text class="my-1 grey lighten-5 font-weight-bold" v-bind:href="'/categories/'+ mother_category.slug" >
            بیشتر
            <v-icon small>mdi-arrow-left</v-icon>
          </v-btn>
        </v-layout>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      footerCategories: [
        {
          id: 1,
          title: 'خط تولید',
          slug: 'خط-تولید',
          categories: [
            {
              id: 23,
              title: 'خط تولید شانه تخم مرغ',
              slug: 'خط-تولید-شانه-تخم-مرغ',
            },
            {
              id: 16,
              title: 'خط تولید بیسکوئیت',
              slug: 'خط-تولید-بیسکوئیت',
            },
            {
              id: 12,
              title: 'خط تولید کمپوت',
              slug: 'خط-تولید-کمپوت',
            },
            {
              id: 38,
              title: 'دستگاه عصاره و گلاب گیر',
              slug: 'دستگاه-عصاره-و-گلاب-گیر',
            },
            {
              id: 10,
              title: 'خط تولید کارتن',
              slug: 'خط-تولید-کارتن',
            },
          ],
        },
        {
          id: 2,
          title: 'بسته بندی',
          slug: 'بسته-بندی',
          categories: [
            {
              id: 190,
              title: 'میز ترافیک',
              slug: 'میز-ترافیک',
            },
            {
              id: 8,
              title: 'دستگاه درب بند',
              slug: 'دستگاه_درب-بند',
            },
            {
              id: 85,
              title: 'دستگاه کارتن فورمینگ',
              slug: 'دستگاه-کارتن-فورمینگ',
            },
            {
              id: 84,
              title: 'دستگاه کلیپس زن',
              slug: 'دستگاه-کلیپس-زن',
            },
            {
              id: 4,
              title: 'دستگاه پالتایزر | دستگاه دی پالتایزر',
              slug: 'دستگاه-پالتایزر-دستگاه-دی-پالتایزر',
            },
          ],
        },
        {
          id: 6,
          title: 'ورزشی',
          slug: 'ورزشی',
          categories: [
            {
              id: 101,
              title: 'چمن مصنوعی',
              slug: 'artificial-turf',
            },
            {
              id: 103,
              title: 'دستگاه بدنسازی قدرتی',
              slug: 'دستگاه-بدنسازی-قدرتی',
            },
            {
              id: 104,
              title: 'کف پوش ورزشی',
              slug: 'sprot-floring',
            },
            {
              id: 102,
              title: 'دستگاه سیم کش',
              slug: 'sport-cable-machine',
            },
            {
              id: 100,
              title: 'تردمیل خانگی و باشگاهی',
              slug: 'treadmill-machine',
            },
          ],
        },
        {
          id: 7,
          title: 'دستگاه های چاپ',
          slug: 'printing-machines',
          categories: [
            {
              id: 113,
              title: 'دستگاه چاپ سابلیمیشن',
              slug: 'دستگاه-چاپ-سابلیمیشن',
            },
            {
              id: 109,
              title: 'پرینتر سه بعدی',
              slug: 'پرینتر-سه-بعدی',
            },
            {
              id: 108,
              title: 'دستگاه چاپ سیلک',
              slug: 'دستگاه-چاپ-سیلک',
            },
            {
              id: 112,
              title: 'دستگاه چاپ افست',
              slug: 'دستگاه-چاپ-افست',
            },
            {
              id: 114,
              title: 'دستگاه چاپ فلکسو',
              slug: 'دستگاه-چاپ-فلکسو',
            },
          ],
        },
        {
          id: 9,
          title: 'دستگاه های سرمایش و گرمایش',
          slug: 'heating-and-cooling',
          categories: [
            {
              id: 118,
              title: 'کندانسور',
              slug: 'condenser',
            },
            {
              id: 115,
              title: 'اواپراتور',
              slug: 'اواپراتور',
            },
            {
              id: 117,
              title: 'تجهیزات سرمایش آزمایشگاهی',
              slug: 'lab-cooling-equipment',
            },
            {
              id: 121,
              title: 'دستگاه هواساز',
              slug: 'air-handler',
            },
            {
              id: 122,
              title: 'یخساز صنعتی',
              slug: 'ice-machine',
            },
          ],
        },
        {
          id: 10,
          title: 'ماشین الات تنباکو و سیگار',
          slug: 'tobacco-cigarette',
          categories: [
            {
              id: 123,
              title: 'خط تولید تنباکو',
              slug: 'tobacco-prod-line',
            },
          ],
        },
        {
          id: 11,
          title: 'ماشین آلات ساخت و ساز',
          slug: 'construction-machinery',
          categories: [
            {
              id: 126,
              title: 'گود برداری و حمل خاک',
              slug: 'earth-moving-machinery',
            },
            {
              id: 127,
              title: 'دستگاه سندبلاست',
              slug: 'sandblast',
            },
            {
              id: 124,
              title: 'بچینگ',
              slug: 'concrete-batching-plant',
            },
            {
              id: 162,
              title: 'بالابر ساختمانی',
              slug: 'lifter',
            },
            {
              id: 129,
              title: 'میکسر بتن یا بتونیر',
              slug: 'concrete-mixer',
            },
          ],
        },
        {
          id: 12,
          title: 'ماشین آلات شیمایی و دارویی',
          slug: 'chemical-machinery',
          categories: [
            {
              id: 131,
              title: 'راکتور آزمایشگاهی',
              slug: 'reactor',
            },
            {
              id: 133,
              title: 'مخزن تحت فشار',
              slug: 'pressure-vessels',
            },
            {
              id: 134,
              title: 'ماشین آلات دارویی',
              slug: 'pharmaceutical-machinery',
            },
            {
              id: 132,
              title: 'تجهیزات خشک کن',
              slug: 'drying-equipment',
            },
          ],
        },
        {
          id: 13,
          title: 'پمپ ها و کمپرسور ها  صنعتی',
          slug: 'pumps-and-compressors',
          categories: [
            {
              id: 142,
              title: 'دستگاه رطوبت گیر صنعتی',
              slug: 'dehumidifier',
            },
            {
              id: 135,
              title: 'پمپ باد (کمپرسور باد)',
              slug: 'air-compressor',
            },
          ],
        },
        {
          id: 14,
          title: 'ضدعفونی و شست شو',
          slug: 'cleaning-equipment',
          categories: [
            {
              id: 136,
              title: 'دستگاه تصفیه آب خانگی',
              slug: 'home-water-filter',
            },
            {
              id: 137,
              title: 'دستگاه تصفیه آب صنعتی',
              slug: 'industrial-water-filter',
            },
            {
              id: 138,
              title: 'تونل ضدعفونی کننده',
              slug: 'air-shower',
            },
            {
              id: 139,
              title: 'لوازم کارواش و تجهیزات کارواش صنعتی',
              slug: 'carwash-equipment',
            },
            {
              id: 140,
              title: 'زمین شوی و کف شوی',
              slug: 'floor-sweeper',
            },
          ],
        },
        {
          id: 15,
          title: 'دستگاه های فرآوری پلاستیک',
          slug: 'plastic-rubber-machinery',
          categories: [
            {
              id: 146,
              title: 'خط تولید یونولیت',
              slug: 'ionolyte-production',
            },
            {
              id: 143,
              title: 'دستگاه آسیاب پلاستیک',
              slug: 'plastic-grinding-recyling',
            },
          ],
        },
        {
          id: 16,
          title: 'ماشین آلات کشاورزی',
          slug: 'agriculture-machinery',
          categories: [
            {
              id: 155,
              title: 'سیلو گندم و سیمان',
              slug: 'silos',
            },
            {
              id: 145,
              title: 'تیلر',
              slug: 'cultivator',
            },
            {
              id: 147,
              title: 'دستگاه کودپاش و بذرپاش',
              slug: 'fertilizer-spreaders',
            },
            {
              id: 148,
              title: 'دستگاه بوجاری',
              slug: 'grain-processing-machinery',
            },
            {
              id: 150,
              title: 'بیلر',
              slug: 'bailer',
            },
          ],
        },
        {
          id: 17,
          title: 'ماشین آلات کاغذ',
          slug: 'paper-product-machinery',
          categories: [
            {
              id: 159,
              title: 'ماشین آلات تولید محصولات سلولزی',
              slug: 'cellulase-production',
            },
            {
              id: 160,
              title: 'دستگاه تولید کاغذ و محصولات کاغذی',
              slug: 'paper-production',
            },
          ],
        },
        {
          id: 18,
          title: 'ماشین آلات مصالح ساخت',
          slug: 'building-material-machinery',
          categories: [
            {
              id: 165,
              title: 'دستگاه سنگ شکن',
              slug: 'stone-crusher',
            },
            {
              id: 164,
              title: 'ماشین آلات تولید سرامیک و کاشی',
              slug: 'tile-production-machinery',
            },
            {
              id: 166,
              title: 'دستگاه های سنگ زنی و برش سنگ',
              slug: 'stone-machinery',
            },
            {
              id: 161,
              title: 'دستگاه های شیشه بری',
              slug: 'glass-equipment',
            },
            {
              id: 163,
              title: 'ماشین آلات تولید سیمان',
              slug: 'cement-production-machine',
            },
          ],
        },
        {
          id: 19,
          title: 'ماشین آلات نوشیدنی و غذا',
          slug: 'food-drinks-machinery',
          categories: [
            {
              id: 171,
              title: 'ماشین آلات تولید آب نبات',
              slug: 'candy-product-machinery',
            },
            {
              id: 172,
              title: 'خط تولید پاپ کورن و پفیلا',
              slug: 'popcorn-production-line',
            },
            {
              id: 174,
              title: 'دستگاه پخت نان',
              slug: 'baking-ovens',
            },
            {
              id: 179,
              title: 'دستگاه های فرآوری گوشت',
              slug: 'meat-processing-machinery',
            },
            {
              id: 182,
              title: 'دستگاه استریلیزر',
              slug: 'sterilizer',
            },
          ],
        },
        {
          id: 20,
          title: 'ماشین آلات چوب',
          slug: 'wood-working-machinery',
          categories: [
            {
              id: 183,
              title: 'خط تولید ام دی اف (MDF) و دستگاه هایش',
              slug: 'mdf-wood-machinery',
            },
            {
              id: 185,
              title: 'مکنده صنعتی | چوب ، خاک اره',
              slug: 'dust-collector',
            },
            {
              id: 186,
              title: 'دستگاه چوب خرد کن یا چیپر چوب',
              slug: 'wood-chip-machine',
            },
            {
              id: 184,
              title: 'دستگاه پرس چوب',
              slug: 'wood-press',
            },
          ],
        },
      ],
    }
  },
}
</script>
