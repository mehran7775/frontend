<template>
  <v-app>
    <v-app-bar flat prominent>
      <v-container class="px-0 px-md-2">
        <v-layout column>
          <v-layout justify-space-between align-center>
            <v-img src="/logo.webp" max-width="150" class="me-3"></v-img>
            <v-spacer></v-spacer>
            <v-card flat height="50" class="mb-2">
              <v-layout justify-center align-start>
                <v-autocomplete
                  dense
                  class="mt-3 px-2"
                  label="جستجو کنید ..."
                  append-icon=""
                ></v-autocomplete>
                <v-btn
                  fab
                  small
                  tile
                  flat
                  color="primary"
                  href="tel:02177569156"
                  class="pa-0 ma-1"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
            <v-card flat height="50" class="mb-2 mx-5 d-none d-md-block">
              <v-layout justify-center align-center>
                <v-layout column>
                  <v-row no-gutters class="text-caption px-2"
                    >021-77569156</v-row
                  >
                  <v-row no-gutters class="text-caption px-2"
                    >021-77542719</v-row
                  >
                </v-layout>
                <v-btn
                  fab
                  small
                  tile
                  flat
                  color="primary"
                  href="tel:02177569156"
                  class="pa-0 ma-1"
                >
                  <v-icon>mdi-phone</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
            <v-card flat height="50" width="50" class="mb-2 d-none d-md-block">
              <v-btn
                fab
                small
                tile
                flat
                color="primary"
                href="/users/entry/"
                class="pa-0 ma-1"
              >
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-card>
          </v-layout>
          <v-layout align-center justify-start class="grey lighten-5 pa-2">
            <v-btn
              v-for="link in links"
              :key="link"
              :href="link.href"
              text
              class="d-none d-md-flex"
            >
              {{ link.text }}
            </v-btn>
            <v-icon color="primary" class="d-md-none">mdi-phone</v-icon>
            <v-btn
              class="d-md-none text-caption px-1"
              text
              href="tel:02177569156"
              >021-77569156</v-btn
            >
            <v-btn
              class="d-md-none text-caption px-1"
              text
              href="tel:02177569156"
              >021-77569156</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn text class="white text-caption font-weight-bold pe-1 ps-0">
              <v-icon color="primary" class="mx-2">mdi-database-outline</v-icon>
              تامین کننده ما شوید
            </v-btn>
          </v-layout>
        </v-layout>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container class="py-5">
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer padless>
      <v-layout column>
        <v-container class="my-5">
          <v-card flat class="text-h6 text-center pa-5 font-weight-bold ma-1"
            >لیست دسته‌بندی ها</v-card
          >
          <v-row
            class="my-5 mt-1 flex-nowrap"
            no-gutters
            style="overflow: auto"
          >
            <v-col
              v-for="mother_category in footerCategories"
              :key="mother_category.slug"
              cols="12"
              md="3"
              class="px-1"
            >
              <v-layout column class="text-center">
                <v-card
                  flat
                  class="pa-3 text-center primary--text font-weight-bold"
                >
                  {{ mother_category.title }}
                </v-card>
                <v-btn
                  v-for="category in mother_category.categories"
                  :key="category.slug"
                  text
                  class="my-1 grey lighten-5"
                  >{{ category.title }}</v-btn
                >
                <v-btn text class="my-1 grey lighten-5 font-weight-bold">
                  بیشتر
                  <v-icon small>mdi-arrow-left</v-icon>
                </v-btn>
              </v-layout>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" md="4" order-md="3" offset-md="1">
              <v-card flat class="pa-5 text-center">
                <v-layout justify-center>
                  <v-img src="/logo.webp" max-width="150"></v-img>
                </v-layout>
              </v-card>
              <v-card flat class="pa-5 mt-1 text-justify" height="175px">
                <p class="text-caption">
                  هدف ما در دمیرکو آسان کردن خرید صنعتی و ایجاد اعتماد بین
                  خریدار و فروشنده است. و در زمینه‌ی فروش جت پرینتر،شیرینگ پک،خط
                  تولید لنت،خط تولید سیم و کابل و ... آماده خدمت‌رسانی هستیم.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="4" order-md="1" class="px-md-1">
              <v-card
                flat
                class="pa-5 text-center primary--text font-weight-bold"
              >
                تماس با ما
              </v-card>
              <v-card flat class="mt-1 pa-4" height="130px">
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >تلفن:</v-col
                  >
                  <v-col cols="4">
                    <v-btn text class="text-caption" href="tel:02177569156"
                      >021-77569156</v-btn
                    >
                  </v-col>
                  <v-col cols="4">
                    <v-btn text class="text-caption" href="tel:02177542719"
                      >021-77542719</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >واتسپ:</v-col
                  >
                  <v-col cols="4">
                    <v-btn
                      text
                      class="text-caption"
                      href="https://api.whatsapp.com/send/?phone=989107545479&text&app_absent=0"
                      >09107545479</v-btn
                    >
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="3" class="text-caption font-weight-bold"
                    >ایمیل:</v-col
                  >
                  <v-col cols="4">
                    <v-btn
                      text
                      class="text-caption text-lowercase"
                      href="mailto:info@damirco.com"
                      >info@damirco.com</v-btn
                    >
                  </v-col>
                </v-row>
              </v-card>
              <v-card flat class="mt-1 pa-2">
                <v-layout justify-space-around>
                  <v-btn icon color="blue">
                    <v-icon>mdi-linkedin</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="green"
                    href="https://api.whatsapp.com/send/?phone=989124242066&text&app_absent=0"
                  >
                    <v-icon>mdi-whatsapp</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    color="red"
                    href="https://www.instagram.com/damir_co/"
                  >
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </v-layout>
              </v-card>
            </v-col>
            <v-col cols="12" md="3" order-md="2" class="px-md-1">
              <v-card
                flat
                class="pa-5 text-center primary--text font-weight-bold"
              >
                درباره ما
              </v-card>
              <v-card flat class="mt-1 pa-4" height="185px">
                <v-layout column align-center>
                  <v-btn text class="text-caption" href="/sell/">
                    فروش در دمیرکو
                  </v-btn>
                  <v-btn text class="text-caption" href="/buy/">
                    خرید از دمیرکو
                  </v-btn>
                </v-layout>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
        <v-card color="white" flat class="mx-0">
          <v-layout justify-center align-center class="py-5">
            <v-btn href="/privacy_policy" text>حریم خصوصی</v-btn>
            <v-btn href="/rules_to_use" text>شرایط استفاده</v-btn>
          </v-layout>
        </v-card>
        <v-layout justify-center class="py-5">
          <div>© تمام حقوق این سایت متعلق به دمیرکو است</div>
        </v-layout>
        <div style="height: 100px; width: 100%"></div>
      </v-layout>
    </v-footer>
    <v-bottom-navigation
      fixed
      app
      hide-on-scroll
      :grow="false"
      style="background-color: transparent; box-shadow: none"
      class="d-md-none"
      height="70"
      mandatory
    >
      <v-container>
        <v-card color="primary" height="70" rounded>
          <v-layout justify-center align-center fill-height>
            <v-btn
              color="primary"
              depressed
              class="white--text"
              href="/users/entry/"
            >
              ورود
              <v-icon color="white">mdi-account</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              depressed
              class="white--text"
              href="/users/entry/"
            >
              خانه
              <v-icon color="white">mdi-home</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              depressed
              class="white--text"
              href="/users/entry/"
            >
              یلاگ
              <v-icon color="white">mdi-book-open-blank-variant</v-icon>
            </v-btn>
            <v-btn
              color="primary"
              depressed
              class="white--text"
              href="/users/entry/"
            >
              دسته بندی
              <v-icon color="white">mdi-view-dashboard-outline</v-icon>
            </v-btn>
          </v-layout>
        </v-card>
      </v-container>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        text: 'خانه',
        href: '/',
      },
      {
        text: 'محصولات',
        href: '#products-footer',
      },
      {
        text: 'وبلاگ',
        href: '/blog/posts/',
      },
      {
        text: 'درباره ما',
        href: '/about_us/',
      },
      {
        text: 'ورود',
        href: '/users/entry/',
      },
    ],
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
          {
            id: 15,
            title: 'خط تولید پاستیل',
            slug: 'خط-تولید-پاستیل',
          },
          {
            id: 18,
            title: 'خط تولید پنیر پیتزا',
            slug: 'خط-تولید-پنیر-پیتزا',
          },
          {
            id: 19,
            title: 'خط تولید رشته',
            slug: 'خط-تولید-رشته',
          }
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
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'میز ترافیک دستگاه های است که در خط تولید و قسمت بسته بندی مورد استفاده قرار می گیرد و شما می توانید قیمت های..',
            meta_copyright: null,
          },
          {
            id: 8,
            title: 'دستگاه درب بند',
            slug: 'دستگاه_درب-بند',
            meta_author: 'damirco',
            meta_keywords:
              'خرید دستگاه درب بند، دستگاه درب بند، خرید دستگاه درببند',
            meta_description:
              'برای بستن درب ظروف در خط تولید نیازمد دستگاه دربند اتوماتیک هستید و این دستگاه سرعت و راندمان تولید شما را بالا می برد. انواع دستگاه های درب بند خانگی و صنعتی و مشخصاتشان',
            meta_copyright: '@damirco.com',
          },
          {
            id: 85,
            title: 'دستگاه کارتن فورمینگ',
            slug: 'دستگاه-کارتن-فورمینگ',
            meta_author: null,
            meta_keywords: 'دستگاه کارتن فورمینگ',
            meta_description:
              'دستگاه کارتن فرمینگ مهندسی شده است تا کارتن های برش و تا خورده آماده را بصورت اتوماتیک به کارتن تبدیل کند این دستگاه توانایی کار با کارتن های...',
            meta_copyright: '@damirco.com',
          },
          {
            id: 84,
            title: 'دستگاه کلیپس زن',
            slug: 'دستگاه-کلیپس-زن',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه کلیپس زن,خرید دستگاه کلیپس زن,قیمت دستگاه کلیپس زن,دستگاه کلیپس زن سوسیس و کالباس',
            meta_description:
              'کلیپس زن ، یک دستگاه بسته بندی برای انواع کیسه های پلاستیکی ، توری و غیره است . مشاوره خرید و فروش دستگاه های کلیپس زن سوسیس و کالباس و غیره',
            meta_copyright: '@damirco.com',
          },
          {
            id: 4,
            title: 'دستگاه پالتایزر | دستگاه دی پالتایزر',
            slug: 'دستگاه-پالتایزر-دستگاه-دی-پالتایزر',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه پالتایزر,دستگاه دی پالتایزر,پالتایزر,دی پالتایزر,فیلم دستگاه پالتایزر',
            meta_description:
              'برای چیدن اتوماتیک محصولات روی پالت ها از دستگاه پالتایزر استفاده می شود. اینجا انواع و مدل های پالتایزر را ببینید و برای خرید پالتایزر میتوانید از دمیرکو مشاوره بگیرید.',
            meta_copyright: '@damirco',
          },
          {
            id: 42,
            title: 'دستگاه دوخت گونی',
            slug: 'دستگاه-دوخت-سر-کیسه-سر-کیسه-دوز',
            meta_author: 'damirco',
            meta_keywords:
              'خرید دستگاه دوخت گونی,قیمت دستگاه دوخت گونی اتوماتیک,دستگاه دوخت گونیشارژی,دستگاه دوخت گونی برنج',
            meta_description:
              'دستگاههای دوخت سر کیسه برای بستن درب های کیسه های در باز مورد استفاده قرار می گیرند .  جنس کیسه ها می تواند از کناف ، کیسه های بافتنی پلی اتیلنی یا سلفونی...',
            meta_copyright: '@damirco.com',
          },
          {
            id: 45,
            title: 'دستگاه منگنه کوب کارتن',
            slug: 'دستگاه-کارتن-دوز',
            meta_author: 'damirco',
            meta_keywords:
              'خرید دستگاه منگنه کارتن,دستگاه کارتون دوز,منگنه کوب کارتن',
            meta_description:
              'دستگاه منگنه کوب کارتن در مدل های مختلف ، موارد استفاده منگنه کوب و قیمت های کارتن دوز',
            meta_copyright: '@damirco.com',
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
            meta_author: null,
            meta_keywords: 'خرید چمن مصنوعی ، چمن مصنوعی ، چمن تزئینی',
            meta_description:
              'مشاوره و خرید چمن مصنوعی ورزشی ، تزئینی چمن های مصنوعی مناسب برای زمین های ورزشی و کافی شاپ ها و اتاق کودک را می توانید در اینجا مشاهده کیند و همچنین...',
            meta_copyright: null,
          },
          {
            id: 103,
            title: 'دستگاه بدنسازی قدرتی',
            slug: 'دستگاه-بدنسازی-قدرتی',
            meta_author: null,
            meta_keywords: 'دستگاه بدنسازی',
            meta_description:
              'دستگاه های بدنسازی یا ورزش های قدرتی که شامل دستگاه پرس پا ، پرس سینه ، دستگاه اسکات ، دستگاه تی بار و سایر دستگاه های با وزنه می باشد که شما می توانیدآنها...',
            meta_copyright: null,
          },
          {
            id: 104,
            title: 'کف پوش ورزشی',
            slug: 'sprot-floring',
            meta_author: 'damirco',
            meta_keywords:
              'کف پوش ورزشی,کف پوش ورزشی خارجی,کف پوش ورزشی pvc,کف پوش ورزشی خانگی,انواع کف پوش ورزشی,کف پوش ورزشی زیر فوم دار,قیمت کف پوش ورزشی ارزان,کف پوش ورزشی رولی,کف پوش ورزشی گرانول,کف پوش ورزشی پلی یورتان,کف پوش ورزشی سالنی,کف پوش ورزشی ایرانی,کف پوش ورزشی کمپار',
            meta_description:
              'انواع کفپوش ورزشی از جمله کفپوش ورزشی زیر فوم دار ، کفپوش ورزشی رولی ، گرانول ، پلی یورتان و غیره با مدل ها و قیمت های مختلف کفپوش ورزشی خارجی و ایرانی در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 102,
            title: 'دستگاه سیم کش',
            slug: 'sport-cable-machine',
            meta_author: 'damirco',
            meta_keywords:
              'خرید دستگاه سیم کش,دستگاه سیم کش,دستگاه سیم کش خانگی,دستگاه سیم کش بدن سازی,دستگاه سیم کش لاستیک,دستگاه سیم کش زیر بغل,دستگاه سيم كش خانگي,دستگاه سیم کش کراس اور',
            meta_description:
              'خرید انواع دستگاه سیم کش خانگی و بدن سازی حرفه ای باشگاهی . سیم کش زیر بغل ، لاستیک و کراس اور و غیره در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 100,
            title: 'تردمیل خانگی و باشگاهی',
            slug: 'treadmill-machine',
            meta_author: 'damirco',
            meta_keywords:
              'تردمیل,دستگاه تردمیل,تردمیل خانگی,تردمیل باشگاهی,قیمت تردمیل,تردمیل دست دوم',
            meta_description:
              'برای خرید انواع تردمیل خانگی و حرفه ای و باشگاهی میتوانید پس از مشاهده محصولات و مشخصاتشان، برای مشاوره تماس بگیرید. + تخفیف برای خرید عمده تردمیل',
            meta_copyright: '@damirco',
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
            meta_author: 'حمیدرضا میرشکاری',
            meta_keywords: 'دستگاه چاپ سابلیمیشن',
            meta_description:
              'چاپ سابلیمیشین نو عی از چاپ است که با استفاده از حرارت و جوهر روی سطوح چاپ می کند ماندگاری طرح چاپ شده توسط سابلیمیشن بیشتر از سایر چاپ های موجود ...',
            meta_copyright: '@damirco',
          },
          {
            id: 109,
            title: 'پرینتر سه بعدی',
            slug: 'پرینتر-سه-بعدی',
            meta_author: 'erfan shafiei',
            meta_keywords:
              'پرینتر سه بعدی,بهترین پرینترهای سه بعدی,خدمات پرینترهای سه بعدی,پرینترهای سه بعدی ایرانی,چاپ سه بعدی,پرینترهای سه بعدی صنعتی بزرگ,قیمت پرینتر سه بعدی ارزان,پرینترهای سه بعدی خانگی,پرینترهای سه بعدی صنعتی,پرینترهای سه بعدی ساختمان سازی,پرینترهای سه بعدی فل',
            meta_description:
              'پرینتر سه بعدی یا چاپگر سه بعدی : به کمک کامپیوتر می توان قطعات مختلف طراحی کرد. برای خرید بهترین پرینترهای سه بعدی و خدمات آن و استعلام قیمت روز آن ها با دمیرکو تماس بگیرید',
            meta_copyright: '@damirco',
          },
          {
            id: 108,
            title: 'دستگاه چاپ سیلک',
            slug: 'دستگاه-چاپ-سیلک',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه چاپ سیلک,دستگاه چاپ سیلک 4 رنگ,دستگاه چاپ سیلک چیست,دستگاه چاپ سیلک اتوماتیک پارچه,دستگاه چاپ سیلک ارزان,دستگاه چاپ سیلک اتوماتیک,دستگاه چاپ سیلک دستی,دستگاه چاپ سیلک اسکرین,دستگاه چاپ سیلک روی تیشرت,دستگاه چاپ سیلک نیمه اتوماتیک',
            meta_description:
              'طرز کار دستگاه چاپ سیلک ، مزایای این نوع چاپ و قیمت و خرید انواع دستگاه چاپ سیلک اتوماتیک و دستی برای چاپ روی تیشرت و چوب و غیره در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 112,
            title: 'دستگاه چاپ افست',
            slug: 'دستگاه-چاپ-افست',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه چاپ افست,قیمت دستگاه چاپ افست,دستگاه چاپ افست کوچک,دستگاه چاپ افست دست دوم,قیمت دستگاه چاپ افست دو ورقی,دستگاه چاپ افست تک رنگ,دستگاه چاپ افست خشک,دستگاه چاپ افست رول,دستگاه چاپ افست چهار رنگ',
            meta_description:
              'انواع دستگاه چاپ افست تک رنگ ، چهار رنگ ، ورقی ، وب فید و غیره و چاپ افست سریع . به همراه قیمت انواع مختلف چاپ افست',
            meta_copyright: '@damirco',
          },
          {
            id: 114,
            title: 'دستگاه چاپ فلکسو',
            slug: 'دستگاه-چاپ-فلکسو',
            meta_author: 'حمیدرضا میرشکاری',
            meta_keywords:
              'دستگاه چاپ فلکسو,قیمت دستگاه چاپ فلکسو 6 رنگ,قیمت دستگاه چاپ فلکسو,قیمت چاپ فلکسو,قیمت دستگاه چاپ فلکسو چهار رنگ,قیمت دستگاه چاپ فلکسو کارتن,قیمت دستگاه چاپ فلکسو نایلون,مزایای چاپ فلکسو,دستگاه چاپ فلکسو تک رنگ,دستگاه چاپ فلکسو لیبل,نمونه چاپ فلکسو',
            meta_description:
              'چاپ فلکسو بیشتر برای چاپ های طولانی مدت استفاده می شود. انواع چاپ فلکسو و قیمت دستگاه های چاپ فلکسو تک رنگ ، چهار رنگ و غیره و دستگاه چاپ فلکسو لیبل و کارتن و نایلون در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 105,
            title: 'دستگاه چاپ تامپو',
            slug: 'دستگاه-چاپ-تامپو',
            meta_author: 'عرفان شفیعی',
            meta_keywords:
              'دستگاه چاپ تامپو,قیمت دستگاه چاپ تامپو 4 رنگ,قیمت دستگاه چاپ تامپو اتوماتیک,فیلم دستگاه چاپ تامپو,قیمت دستگاه چاپ تامپو تک رنگ,قیمت چاپ تامپو,قیمت دستگاه چاپ تامپو دستی دست دوم,تعمیرات دستگاه چاپ تامپو,آموزش کار با دستگاه چاپ تامپو,دستگاه چاپ تامپو دستی,د',
            meta_description:
              'دستگاه های چاپ تامپو یا پد پرینتر با قابلیت چاپ بر روی انواع سطوح غیر متعارف مناسب است. انواع دستگاه چاپ تامپو تک رنگ و چند رنگ و انواع دستپاه چاپ تامپو دستی و اتوماتیک به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 107,
            title: 'چاپ جعبه و کارتن',
            slug: 'carugate-printingmachine',
            meta_author: 'damirco',
            meta_keywords:
              'چاپ جعبه,چاپ کارتن,دستگاه چاپ کارتن,فیلم دستگاه چاپ کارتن,قیمت دستگاه چاپ کارتن پلاست,قیمت دستگاه چاپ کارتن دست دوم,دستگاه چاپ کارتن چینی,دستگاه چاپ کارتن پیتزا,دستگاه چاپ کارتن 3 رنگ',
            meta_description:
              'چاپ جعبه و کارتن با انواع دستگاه های چاپ کارتن تک رنگ و 3 رنگ و غیره به روش های فلکسو و افست. برای چاپ کارتن پیتزا ، کارتن چینی و دستگاه چاپ کارتن پلاست به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 106,
            title: 'جت پرینتر',
            slug: 'marking-printer',
            meta_author: null,
            meta_keywords:
              'جت پرینتر صنعتی ، جت پرینتر دستی ، جت پرینتر ایرانی ، جت پرینتر لیزری',
            meta_description:
              'جت پرینتر انواع مختلف دارد از جمله جت پرینتر دستی ، ریبونی ، حرارتی ، درشتنگار ،  ایرانی و لیزری که همه آنها را می توانید اینجا مشاهده کنید و از بین آنها...',
            meta_copyright: null,
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
            meta_author: 'damirco',
            meta_keywords:
              'کندانسور,قیمت کندانسور,کندانسور برج تقطیر,کندانسور آزمایشگاهی,تفاوت اواپراتور و کندانسور,خرید کندانسور,کندانسور صنعتی,کندانسور یخچال,کندانسور کولر گازی',
            meta_description:
              'کندانسور یا چگالنده هوایی انواع تبخیری، آبی و چیلر که مناسب سردخانه می باشد. برای استعلام قیمت و خرید انواع کندانسور صنعتی ، آزمایشگاهی و کولر گازی و غیره با دمیرکو تماس بگیرید',
            meta_copyright: '@damirco',
          },
          {
            id: 115,
            title: 'اواپراتور',
            slug: 'اواپراتور',
            meta_author: 'Alireza Alavi',
            meta_keywords:
              'اواپراتور,قیمت اواپراتور,اواپراتور کولر,کاتالوگ اواپراتور,انواع اواپراتور,کویل اواپراتور,ساختار اواپراتور,اواپراتور چیست,اواپراتور یخچال,اواپراتور 206,اواپراتور کولر 206',
            meta_description:
              'اوپراتور یا واحدی که در یخچال ها، چیلر و کولر گازی کارایی دارد و در صنایع غذایی برای افزایش غلظت از آن استفاده می شود. قیمت اواپراتورهای کولر و یخچال و اواپراتورهای صنعتی در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 117,
            title: 'تجهیزات سرمایش آزمایشگاهی',
            slug: 'lab-cooling-equipment',
            meta_author: 'damirco',
            meta_keywords:
              'فریزر آزمایشگاهی,مخزن شوک حرارتی,سردخانه آزمایشگاهی,اتاق  سرد پزشکی,چیلر آزمایشگاهی,تجهیزات آزمایشگاهی پزشکی,تجهیزات سرمایش آزمایشگاهی,تجهیزات آزمایشگاهی دست دوم,تاسیسات سرمایشی,تاسیسات سرمایشی برودتی',
            meta_description:
              'برای خرید انواع یخچال و فریزر آزمایشگاهی، مخزن شوک حرارتی و گرمایی، سردخانه آزمایشگاهی ، اتاق  سرد آزمایشگاهی/ پزشکی و چیلر آزمایشگاهی با دمیرکو در تماس باشید',
            meta_copyright: '@damirco',
          },
          {
            id: 121,
            title: 'دستگاه هواساز',
            slug: 'air-handler',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه هواساز,هواساز,قیمت دستگاه هواساز,دستگاه هواساز خانگی,دستگاه هواساز صنعتی,انواع هواساز,دستگاه هواساز آپارتمانی,دستگاه هواساز بیمارستانی',
            meta_description:
              'از دستگاه هواساز بیشتر در محیط ها بسته استفاده میشود تا هوا را در این مکان ها به جریان بیندازد. انواع هواساط خانگی و صنعتی و آپارتمانی و بیمارستانی و غیره در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 122,
            title: 'یخساز صنعتی',
            slug: 'ice-machine',
            meta_author: 'damirco',
            meta_keywords:
              'سیستم یخ ساز,دستگاه یخ ساز صنعتی,دستگاه یخ ساز صنعتی دست دوم,قیمت دستگاه یخ ساز پودری,یخ ساز دستی,یخساز,یخساز پودری,یخساز رستوران,یخساز اتوماتیک,یخساز صنعتی,یخ ساز,یخساز صنعتی پولکی,یخساز صنعتی قالبی,یخساز صنعتی کوچک',
            meta_description:
              'ژنراتور یخ یا یخساز که یخ را در شکل های مختلفی چون حبه ای، یخساز صنعتی قالبی ، پولکی ، یخ ساز پودری و غیره به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 116,
            title: 'بویلر',
            slug: 'بویلر',
            meta_author: 'erfan shafiei',
            meta_keywords:
              'بویلر,مشخصات فنی بویلر,قیمت بویلر,تاسیسات بویلر,درام بویلر چیست,اجزای بویلر,بویلر واتر تیوب,بویلر نیروگاه',
            meta_description:
              'انواع بویلرهای صنعتی مثل بویلر واتر تیوب و نیروگاه، بویلر روغن حرارتی و غیره. تاسیسات و اجزای بویلر و قیمت آن ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 119,
            title: 'برج خنک کننده',
            slug: 'cooling-tower',
            meta_author: 'damirco',
            meta_keywords:
              'برج خنک کننده,قیمت اب پخش کن برج خنک کننده,فروش برج خنک کننده دست دوم,مزایا و معایب برج خنک کننده,انواع برج خنک کننده,اجزای برج خنک کننده,قیمت برج خنک کننده,برج خنک کننده آب گردان,برج خنک کننده دست دوم,برج خنک کننده مدار باز',
            meta_description:
              'در سایت دمیرکو می توانید انواع برج خنک کننده را بیابید. البته برای دقت بیشتر و قیمت روز با ما تماس بگیرید و مشخصات فنی برخ خنک کننده مورد نظرتان را مطرح نمایید',
            meta_copyright: '@damirco',
          },
          {
            id: 120,
            title: 'تجهیزات و تاسیسات گرمایشی',
            slug: 'heating-equipment',
            meta_author: 'damirco',
            meta_keywords:
              'تاسیسات گرمایشی,تاسیسات گرمایشی یا حرارتی,بررسی تاسیسات گرمایشی,انواع تاسیسات گرمایشی,انواع تاسیسات گرمایشی,تاسیسات گرمایشی ساختمان,تجهیزات گرمایشی,تجهیزات گرمایشی استخر,تجهیزات گرمایشی گلخانه,تجهیزات گرمایشی مرغداری,تجهیزات گرمایشی صنعتی,تجهیزات گرمایشی',
            meta_description:
              'تاسیسات و سیستم های گرمایشی و سرمایشی مختلف ، قیمت آن ها و قیمت اجزا و انواع تاسیسات گرمایشی در دمیرکو. تجهیزات پرمایشی استخر ، ساختمان ، مرغداری و تجهیزات گرمایشی صنعتی',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'خط تولید تنباکو,تولید تنباکو معسل,تولید تنباکو میوه ای,فروس دستگاه تنباکو,قیمت دستگاه بسته بندی تنباکو دست دوم,خط تولید تنباکو میوه ای,خط تولید تنباکو معسل,قیمت خط تولید تنباکو,خرید خط تولید تنباکو,خط تولید تنباکوی میوه ای,قیمت خط تولید تنباکو میوه ای,راه',
            meta_description:
              'دستگاه های مورد نیاز خط تولید تنباکو برای انواع تنباکو مثل میوه ای و معسل. دستگاه بسته بندی تنباکو دست دوم و نو. قیمت و هزینه راه اندازی انواع خط تولید تنباکو در دمیرکو',
            meta_copyright: '@damirco',
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
            meta_author: null,
            meta_keywords: 'لودر،بولدوزر،کامیون،بیل مکانیکی',
            meta_description:
              'متداول ترین دستگاه مورد استفاده در گود برداری و خاک برداری عبارت اند ازکامیون،لودر،باب کت،بیل مکانیکی،بیل جام جلو،بولدوزرو غیره که عملیات گودبرداری وحمل...',
            meta_copyright: null,
          },
          {
            id: 127,
            title: 'دستگاه سندبلاست',
            slug: 'sandblast',
            meta_author: 'damirco',
            meta_keywords:
              'سندبلاست,سندبلاست مبل,سندبلاست طلا,سندبلاست سنگ,کاربرد سندبلاست,سندبلاست چوب,سندبلاست شیشه,سندبلاست آهن,دستگاه سندبلاست,دستگاه سندبلاست لیزری,قیمت دستگاه سندبلاست کابینی,انواع دستگاه سندبلاست,قیمت دستگاه سندبلاست سنگ,دستگاه سندبلاست کوچک,دستگاه سندبلاست پ',
            meta_description:
              'توضیح طرز کار سندبلاست، انواع دستگاه سندبلاست چوب ، سنگ ، آهن ، شیشه با بلاسترهای جاذبه ای و فشاری و انواع ساینده و قیمت خرید دستگاه های سندبلاست',
            meta_copyright: '@damirco',
          },
          {
            id: 124,
            title: 'بچینگ',
            slug: 'concrete-batching-plant',
            meta_author: 'damirco',
            meta_keywords:
              'بچینگ اتوماتیک,قیمت بچینگ,انواع بچینگ,ظرفیت بچینگ,ماشین بچینگ,بچینگ سیمان,بچینگ خشک',
            meta_description:
              'بچینگ های مختلف مثل بچینگ اتوماتیک ، خشک و غیره. به همراه ظرفیت و قیمت بچینگ بر حسب ظرفیت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 162,
            title: 'بالابر ساختمانی',
            slug: 'lifter',
            meta_author: 'damirco',
            meta_keywords:
              'بالابر ساختمانی,بهترین بالابر ساختمانی,بالابر ساختمانی جدید,قیمت موتور بالابر ساختمانی,قیمت پایه بالابر ساختمانی,بالابر ساختمانی 500 کیلویی,ابعاد بالابر ساختمانی,قیمت بالابر ساختمانی کوچک',
            meta_description:
              'انواع بالابر یاختمانی کوچک و بزرگ 500 کیلویی. قیمت بالابر ساختمانی و اجزای آن مثل موتور و پایه بالابر به صورت جداگانه در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 129,
            title: 'میکسر بتن یا بتونیر',
            slug: 'concrete-mixer',
            meta_author: 'جلال شجیعی',
            meta_keywords:
              'انواع میکسر بتن,میکسر بتن دست دوم,قیمت ماشین میکسر بتن,قیمت دیگ میکسر بتن,مینی میکسر بتن,میکسر بتن ثابت,قیمت میکسر بتن دیزلی,قیمت میکسر بتن آماده,بتونیر,بتونیر دست دوم,بتونیر 250,بتونیر کوچک,خرید دیگ بتونیر,بتونیر 100 لیتری,قیمت بتونیر 120 لیتری',
            meta_description:
              'انواع میکسر بتن و بتونیر 250 ، بتونیر 100 و 120 لیتری ، میکسر بتنی ثابت ، دیزلی و آماده به همراه دیگ بتن و ملزومات دیگر و قیمت آن ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 130,
            title: 'ویبراتور بتن',
            slug: 'concrete-vibrator',
            meta_author: 'damirco',
            meta_keywords:
              'ویبراتور بتن,بهترین ویبراتور بتن,طرز کار ویبراتور بتن,قیمت شیلنگ ویبره بتن,قیمت ویبراتور برقی دریلی,قیمت ویبراتور دستی',
            meta_description:
              'انواع ویبراتور بتنی برقی دریلی و بنزینی و دستی، بهترین ویبراتور و قیمت شیلننگ ویبره و ملزومات دیگر به همراه قیمت ویبراتور بتن دست دوم و نو در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 125,
            title: 'پمپ بتن',
            slug: 'concrete-pumps',
            meta_author: 'damirco',
            meta_keywords:
              'پمپ بتن,انواع پمپ بتن,قیمت پمپ بتن,زمینی دست دوم,پمپ بتن دستی,پمپ بتن برقی,انواع پمپ بتن کوچک,پمپ بتن زمینی,پمپ بتن هوایی,پمپ بتن',
            meta_description:
              'انواع پمپ بتن زمینی و هوایی و پمپ های کوچک. قیمت پمپ بتن دست دوم و نو در دمیرو. برای استعلام قیمت امروز با ما تماس بگیرید.',
            meta_copyright: '@damirco',
          },
          {
            id: 128,
            title: 'دستگاه شاتکریت',
            slug: 'shotcrete-machines',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه شاتکریت,قیمت دستگاه شاتکریت دست دوم,اجاره دستگاه شاتکریت,انواع دستگاه شاتکریت,قیمت دستگاه شاتکریت دستی,قیمت دستگاه شاتکریت کوچک,دستگاه شاتکریت دست دوم,دستگاه شاتکریت بتن,دستگاه شاتکریت سیمان',
            meta_description:
              'شاتکریت تکنیکی در ساخت و ساز است که در آن ملات با فشار و سرعت بالا به روی سطح پاشیده می شود. انواع دستگاه های شاتکریت کوچک و بزرگ و دستی به همراه قیمت در دمیرکو. برای شاتکریت بتن ، سیمان و غیره',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'راکتور آزمایشگاهی,راکتور شیمیایی آزمایشگاهی,راکتور شیشه ای آزمایشگاهی,راکتور آزمایشگاهی چیست,قیمت راکتور آزمایشگاهی,راکتور آزمایشگاهی فشار بالا,راکتور تحت فشار آزمایشگاهی,خرید راکتور آزمایشگاهی',
            meta_description:
              'راکتور آزمایشگاهی در مهندسی شیمی، به دستگاه یا محفظه ای گفته می شود. که در آن فرآیندهای شیمیایی برای اهداف آزمایشگاهی و ساختاری انجام می شود. انواع راکتور آزمایشگاهی شیمیایی ، تحت فشار و فشار بالا به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 133,
            title: 'مخزن تحت فشار',
            slug: 'pressure-vessels',
            meta_author: 'damirco',
            meta_keywords:
              'مخزن تحت فشار,مخزن تحت فشار چیست,مخازن تحت فشار,انواع مخازن تحت فشار,مخزن تحت فشار پلاستیکی,قیمت مخزن تحت فشار,قطعات مخزن تحت فشار,قیمت مخزن تحت فشار دیافراگمی,مخزن تحت فشار آب,مخزن تحت فشار 100 لیتری,منبع تحت فشار',
            meta_description:
              'انواع مخازن تحت فشار یا منبع تحت فشار و برج تقطیر. مخزن تحت فشار پلاستیکی ، دیافراگمی و آب به همراه قیمت در اندازه های مختلف 100 لیتری و غیره در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 134,
            title: 'ماشین آلات دارویی',
            slug: 'pharmaceutical-machinery',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'با پیشرفت تکنولوژی تولید دارو نیز پیشرفت کردهو دستگاه هایی چون پرکن کپسول،روکش قرص،پرس قرص،قرص شمار،پرکن دارویی و... به کمک هر چه بهتر تولید شدن داروهای...',
            meta_copyright: null,
          },
          {
            id: 132,
            title: 'تجهیزات خشک کن',
            slug: 'drying-equipment',
            meta_author: null,
            meta_keywords: 'دستگاه خشک کن،دستگاه خشک کن صنعتی',
            meta_description:
              'با ظهور دستگاه خشک کن بسیاری از مشکلات انسان برای خشک کردن اقلام مختلف حل شده خشک کن ها در انواع غشائی،انجمادی،کاکتوس،فلش،آزمایشگاهی وغیره قابل دسترس ...',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه رطوبت گیر,دستگاه رطوبت گیر صنعتی,رطوبت گیر صنعتی,دستگاه رطوبت زدا,دستگاه رطوبت گیر استخر,دستگاه رطوبت گیر ایرانی,خشک کننده هوا,دستگاه رطوبت گیر هوا,دستگاه رطوبت گیر صنعتی هوا',
            meta_description:
              'انواع دستگاه های رطوبت گیر و رطوبت زدا یا خشک کننده هوا مثل رطوبت گیر صنعتی هوا ، استخر و غیره. به همراه قیمت مدل های مختلف آن در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 135,
            title: 'پمپ باد (کمپرسور باد)',
            slug: 'air-compressor',
            meta_author: 'damirco',
            meta_keywords:
              'کمپرسور باد,کمپرسور باد ایرانی,کمپرسور باد با قیمت مناسب,کمپرسور باد تسمه ای,کمپرسور باد دیزلی,کمپرسور باد 5 لیتری,کمپرسور باد فندکی,کمپرسور باد دست دوم,کمپرسور باد صنعتی',
            meta_description:
              'کمپرسور باد یا هوا دستگاهی که است که هوای فشرده مورد نیاز ابزارهای پنوماتیک را فراهم می کند.و در انواع:اسکرو،روتاری،سانترفیوژ،اسکرال وغیره موجود...',
            meta_copyright: '@damirco',
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
            meta_author: 'erfan shafiei',
            meta_keywords:
              'دستگاه تصفیه آب خانگی,دستگاه تصفیه آب,تصفیه آب خانگی,دستگاه تصفیه آب چیست,قیمت دستگاه تصفیه آب آکوا لاین,دستگاه تصفیه آب ایرانی,قیمت دستگاه تصفیه آب خانگی آکواجوی,قیمت دستگاه تصفیه آب خانگی رومیزی,دستگاه تصفیه آب خانگی قابل حمل,فیلتر دستگاه تصفیه آب,بهتری',
            meta_description:
              'انواع دستگاه های تصفیه آب خانگی ارزان و با کیفیت ، ایرانی و تایوانی و آمریکایی، به همراه مشخصات دستگاه تصفیه آب خانگی و قیمت آن ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 137,
            title: 'دستگاه تصفیه آب صنعتی',
            slug: 'industrial-water-filter',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه تصفیه آب صنعتی,کاتالوگ دستگاه تصفیه آب صنعتی,لیست قیمت دستگاه تصفیه آب صنعتی,دستگاه تصفیه آب صنعتی چیست,دستگاه تصفیه آب صنعتی ro,اجزای دستگاه تصفیه آب صنعتی,قیمت آب شیرین کن صنعتی,دستگاه تصفیه آب صنعتی دست دوم',
            meta_description:
              'انواع دستگاه تصفیه آب صنعتی یا همان آب شیرین کن صنعتی به همراه لیست قیمت در دمیرکو. برای دریافت کاتالوگ و لیست قیمت روز با ما تماس بگیرید.',
            meta_copyright: '@damirco',
          },
          {
            id: 138,
            title: 'تونل ضدعفونی کننده',
            slug: 'air-shower',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'تونل ضدعفونی کننده یکی از دستگاه های مورد نیاز به خصوص در دوران کرونا ، ساخت آن به مرور رو به افرایش است و به آن ضد عفونی تونلی نیز گفته می شود',
            meta_copyright: null,
          },
          {
            id: 139,
            title: 'لوازم کارواش و تجهیزات کارواش صنعتی',
            slug: 'carwash-equipment',
            meta_author: 'damirco',
            meta_keywords:
              'لوازم کارواش,تجهیزات کارواش,تجهیزات کارواش صنعتی,هزینه تجهیزات کارواش,تجهیزات کارواش مدرن,لوازم مصرفی کارواش,محصولات کارواش,وسایل مورد نیاز کارواش,لوازم کارواش و صفرشویی,لوازم کارواش دست دوم,تجهیزات کارواش دستی,قیمت لوازم کارواش',
            meta_description:
              'انواع لوازم مصرفی و تجهیزات کارواش صنعتی و خانگی مثل پمپ کارواش و غیره. به همراه قیمت لوازم کارواش و صفرشویی در دمیرکو. برای مشاوره و خرید تجهیزات کارواش صنعتی تماس بگیرید',
            meta_copyright: '@damirco',
          },
          {
            id: 140,
            title: 'زمین شوی و کف شوی',
            slug: 'floor-sweeper',
            meta_author: 'damirco',
            meta_keywords: 'کفساب زمین شوی',
            meta_description:
              'انواع دستگاه زمین شوی و ماشین کف شوی صنعتی برای کف سابی زمین  و کف سالن های تولید و کارخانه. قیمت زمین شوی و کف شوی در دمیرکو',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'خط تولید یونولیت,خط تولید یونولیت دیوار,خط تولید یونولیت سقفی,خط تولید یونولیت سقفی دست دوم,خط تولید پلاستوفوم,خط تولید یونولیت بسته بندی,خط کامل یونولیت',
            meta_description:
              'دستگاه های مورد نیاط و ماشین آلات خط تولید یونولیت سقفی و یونولیت بسته بندی و فوم و پلاستوفوم. مثل دیگ بخار، سختی گیر آب، کلکتور بخار، دستگاه پیش پخت، دستگاه پخت دوم، سیلو، بلوکر، دستگاه برش، دستگاه خرد کن و غیره به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 143,
            title: 'دستگاه آسیاب پلاستیک',
            slug: 'plastic-grinding-recyling',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه آسیاب پلاستیک,برق دستگاه آسیاب پلاستیک,مشخصات فنی دستگاه آسیاب پلاستیک,قیمت دستگاه آسیاب پلاستیک,دستگاه آسیاب پلاستیک دست دوم,آسیاب شور پلاستیک,دستگاه آسیاب پلاستیک تک فاز,دستگاه آسیاب پلاستیک چکشی',
            meta_description:
              'انواع دستگاه های آسیاب پلاستیک چکشی و شمشیری و غیره به صورت تک فاز و سه فاز و قیمت مدل های مختلف دستگاه های خرد کن پلاستیک در دمیرکو',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'سیلو گندم,خرید سیلو گندم,سیلوی گندم,خرید سیلو قهوه,خرید سیلو سیمان,خرید سیلو حبوبات,خرید سیلو ذرت,ساخت سیلو',
            meta_description:
              'برای خرید یا سفارش ساخت سیلو های بتنی و فلزی برای نگهداری سیمان ، گندم یا غلات و غیره با دمیرکو تماس بگیرید',
            meta_copyright: '@damirco',
          },
          {
            id: 145,
            title: 'تیلر',
            slug: 'cultivator',
            meta_author: 'damirco',
            meta_keywords:
              'تیلر,قیمت تیلر,تیلر کشاورزی,قیمت تیلر کشاورزی,تیلر باغی,تیلر دستی,تیلر چهار چرخ,تیلر تراکتور,تیلر گازوییلی,تیلر مزرعه',
            meta_description:
              'انواع تیلر های کشاورزی ، باغی ، تراکتور و تیلرهای گازوییلی و بنزینی و برقی با چهار چرخ یا دو چرخ. استعلام قیمت و مشاوره خرید تیلرهای مختلف در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 147,
            title: 'دستگاه کودپاش و بذرپاش',
            slug: 'fertilizer-spreaders',
            meta_author: 'damirco',
            meta_keywords:
              'کودپاش,کود پاش,بذرپاش,بذر پاش,قیمت کودپاش شارژی,قیمت کودپاش شخمیران,قیمت کودپاش پشت تراکتوری,کودپاش موتوری,کودپاش دستی,دستگاه کودپاش شارژی,ماشین بذرپاش,دستگاه بذرپاش',
            meta_description:
              'انواع بذر پاش و کود پاش دستی ، شارژی ، موتوری و پشت تراکتوری به همراه قیمت مدل های مختلف آن در دمیرکو.',
            meta_copyright: '@damirco',
          },
          {
            id: 148,
            title: 'دستگاه بوجاری',
            slug: 'grain-processing-machinery',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه بوجاری,قیمت دستگاه بوجاری گندم,قیمت دستگاه بوجاری کنجد,قیمت دستگاه بوجاری خاکشیر,دستگاه بوجاری خانگی,دستگاه بوجاری چیست,قیمت دستگاه بوجاری کوچک,قیمت دستگاه بوجاری لیزری,دستگاه بوجاری همه کاره,دستگاه بوجاری دست دوم,دستگاه بوجاری حبوبات,دستگاه بوجاری',
            meta_description:
              'انواع دستگاه های بوجاری حبوبات و بذر و گندم و کنجد و برنج و خاکشیر و غیره در کارکردهای مختلف. دستگاه بوجاری کوچک و بزرگ و خانگی و لیزری به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 150,
            title: 'بیلر',
            slug: 'bailer',
            meta_author: 'damirco',
            meta_keywords:
              'بیلر,دستگاه بیلر,قیمت بیلر,قیمت دستگاه بیلر,انواع بیلر,بیلر تراکتوری',
            meta_description:
              'یک بیلرعلوفه خشک یا کاه را جمع کرده و به صورت بسته هایی که از نظر حجم و وزن یکدست هستند در می آورد. انواع بیلرها مثل بیلر گرد، بیلر مستطیلی بیلر تراکتوری وغیره به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 151,
            title: 'لوازم آبیاری | قطره ای و بارانی',
            slug: 'irrigation-equiment',
            meta_author: 'damirco',
            meta_keywords:
              'لوازم آبیاری,لوازم آبیاری قطره ای,قیمت شیلنگ آبیاری قطره ای,مجموعه لوازم آبیاری قطره ای,تجهیزات آبیاری,سیستم آبیاری قطره ای,تایمر آبیاری قطره ای,لوازم آبیاری بارانی,شیر خودکار آبیاری بارانی',
            meta_description:
              'انواع تجهیزات و لوازم آبیاری قطره ای و بارانی و سنتی مثل آبپاش خودکار ، قطره چکان ، تایمر و شیلنگ آبیاری قطره ای و غیره به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 152,
            title: 'دستگاه جوجه کشی | خانگی ، صنعتی',
            slug: 'egg-incubators',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه جوجه کشی,قیمت دستگاه جوجه کشی خانگی ارزان,قیمت دستگاه جوجه کشی صنعتی بزرگ,دستگاه جوجه کشی تمام اتوماتیک,دستگاه جوجه کشی چیست,دستگاه جوجه کشی ارزان,دستگاه جوجه کشی فاخته,دستگاه جوجه کشی شتر مرغ,دستگاه جوجه کشی اسکندری,دستگاه جوجه کشی آرکام',
            meta_description:
              'انواع دستگاه جوجه کشی مرغ ، کبوتر و فاخته ، تخم بلدرچین و شتر مرغ با ظرفیت های متفاوت 168 تایی ای 840 تایی. قیمت دستگاه جوجه کشی خانگی و صنعتی و اتوماتیک در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 153,
            title: 'لوازم و تجهیزات دامداری',
            slug: 'animal-husbandary-equipment',
            meta_author: 'damirco',
            meta_keywords:
              'تجهیزات دامداری,لوازم دامداری,تجهیزات دامپروری,دامداری صنعتی,تجهیزات دامداری صنعتی,تجهیزات دامداری سبک,لوازم دامداری دست دوم,تجهیزات دامداری گوسفندی,قیمت لوازم دامداری,لوازم دامداری صنعتی',
            meta_description:
              'انواع لوازم و تجهیزات دامداری صنعتی مثل سیستم تهویه دامداری، میکسر خوراک دام، علوفه خرد کن، ابخوری اتوماتیک ، دستگاه شیردوش و غیره به همراه قیمت دردمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 156,
            title: 'کمباین',
            slug: 'combine-harvester',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'ماشین های کمباین نام خود را از روشی میگیرند که به طول خودکار فرایند های برداشت و جدا سازی را انجام میدهند.کمباین سه نوع کمباین دشت، تپه، کششی...',
            meta_copyright: null,
          },
          {
            id: 154,
            title: 'سمپاش',
            slug: 'agricultur-sprayers',
            meta_author: 'damirco',
            meta_keywords:
              'سمپاش,سمپاش دستی,سمپاش برقی,سمپاش شارژی,سمپاش موتوری,سمپاش صنعتی,دستگاه سمپاش صنعتی,قیمت عمده سمپاش,سمپاش فرغونی,پمپ سمپاش,قیمت پمپ سمپاش چینی',
            meta_description:
              'انواع سمپاش های دستی ، شارژی ، موتوری ، فرغونی و غیره. لوازم جانبی سمپاش مثل پمپ سمپاش و غیره به همراه قیمت آن ها در دمیرکو. برای خرید عمده قیمت بسته به تعداد قابل مذاکره است.',
            meta_copyright: '@damirco',
          },
          {
            id: 157,
            title: 'دستگاه کمپوست صنعتی',
            slug: 'compost-making-machine',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه تولید کمپوست,دستگاه کمپوستر,کمپوستر,قیمت دستگاه تولید کمپوست خانگی,قیمت دستگاه تولید ورمی کمپوست,دستگاه کمپوست ترنر,دستگاه کمپوست ساز خانگی',
            meta_description:
              'انواع دستگاه های تولید کود کمپوست ، کمپوستر و کمپوست ترنر خانگی و صنعتی برای تبدیل زباله به کود. به همراه قیمت مدل های مختلف دستگاه کمپوست در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 158,
            title: 'دستگاه نشاکار',
            slug: 'transplant-machine',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه نشاکار,قیمت دستگاه نشاکار دستی برنج,خرید دستگاه نشاکار دستی,دستگاه نشاکار صیفی جات,دستگاه نشاکار اتوماتیک,دستگاه نشاکار دستی گوجه فرنگی,دستگاه نشاکار برنج,دستگاه نشاکار پیاز',
            meta_description:
              'انواع دستگاه های نشاکار دستی و اتوماتیک و قیمت آن ها در دمیرکو. برای نشاکاری برنج و صیفی جات مثل گوجه فرنگی و پیاز و غیره',
            meta_copyright: '@damirco',
          },
          {
            id: 149,
            title: 'تجهیزات پرورش آبزیان',
            slug: 'aquacultue-equipments',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'به طور کلی برای پرورش ماهی به دستگاه هایی از قبیل دستگاه های هواده، دستگاه های مانیتورینگ، آسیاب های غذا، وان، سایه بان ها و بخشی از تجهیزات آبی مثل...',
            meta_copyright: null,
          },
          {
            id: 144,
            title: 'تراکتور',
            slug: 'tractor',
            meta_author: null,
            meta_keywords: 'تراکتور',
            meta_description:
              'ما در زمینه ی خرید و فروش تراکتورباغی،تراکتور چرخ آهنی،تراکتور دستی،تراکتور زنجیری،تراکتور ردیف کار،تراکتور دو چرخ می توانیم راهنمای خرید شما باشیم و در کنارتان',
            meta_copyright: null,
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
            meta_author: 'damirco',
            meta_keywords:
              'تولید دستمال کاغذی,خط تولید دستمال کاغذی,تولید محصولات سلولزی,تولید نوار بهداشتی,تولید پوشک,خط تولید پوشک,تولید پوشک بچه,تولید پوشک بزرگسال,خط تولید دستمال کاغذی',
            meta_description:
              'خط تولید محصولات سلولزی که عبارت اند ازخط تولید دستمال کاغذی ، خط تولید نوار بهداشتی ، خط تولید پوشاک بچه و بزرگسال ، خط تولید دستمال توالت و غیره به همراه قیمت مناسب و کیفیت مرغوب دستگاه ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 160,
            title: 'دستگاه تولید کاغذ و محصولات کاغذی',
            slug: 'paper-production',
            meta_author: 'damirco',
            meta_keywords:
              'تولید کاغذ,خط تولید کاغذ,تولید کاغذ در ایران,مراحل تولید کاغذ,تولید پاکت کاغذی,تولید پاکت پول,تولید پاکت کرافت,تولید لیوان کاغذی,خط تولید لیوان کاغذی,سود تولید لیوان کاغذی,دستگاه تولید لیوان کاغذی,قیمت دستگاه تولید لیوان کاغذی,تولید لیوان یک بار مصرف کاغذ',
            meta_description:
              'انواع دستگاه های تولید کاغذ و محصولات کاغذی مانند خط تولید کارتن ، خط تولید لیوان کاغذی، پاکت کاغذی ، خط تولید شانه تخم مرغ  وغیرهبه همراه قیمت و مشاوره در دمیرکو',
            meta_copyright: '@damirco',
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
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه سنگ شکن,قیمت دستگاه سنگ شکن,دستگاه سنگ شکن دست دوم,قیمت دستگاه سنگ شکن کوچک,دستگاه سنگ شکن فکی دست دوم,دستگاه سنگ شکن صنعتی,دستگاه سنگ شکن دستی',
            meta_description:
              'دستگاه های سنگ شکن برای تبدیل سنگ به شن و ماسه و در اندازه های مختلف کاربرد دارند و شامل سنگ شکن فکی ، مخروطی ، دوبازویی ، ژیراتوری ، دستی و غیره می شود. قیمت انواع دستگاه های سنگ شکن صنعتی کوچک و بزرگ در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 164,
            title: 'ماشین آلات تولید سرامیک و کاشی',
            slug: 'tile-production-machinery',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'خط تولید وماشین آلات تولید کاشی و سرامیک می توانید انواع مختلفی از کاشی ، سرامیک ، کاشی سه بعدی را برا کیف و دیوارهای آشپزخانه ، راهرو ، حمام و غیره تولید کنید',
            meta_copyright: null,
          },
          {
            id: 166,
            title: 'دستگاه های سنگ زنی و برش سنگ',
            slug: 'stone-machinery',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه سنگ زنی,قیمت دستگاه سنگ زنی,قیمت دستگاه سنگ زنی تخت,دستگاه سنگ زنی دستی,دستگاه سنگ زنی مغناطیسی,دستگاه برش سنگ,قیمت دستگاه برش سنگ دست دوم,انواع دستگاه برش سنگ,دستگاه برش سنگ معدن,قیمت دستگاه برش سنگ اتوماتیک,دستگاه برش سنگ دستی,دستگاه برش سنگ کوچک',
            meta_description:
              'انواع ماشین آلات و دستگاه های سنگ مثل ماشین سنگ زنی ، دستگاه های برش سنگ کوچک و بزرگ، دستی و دستگاه برش سنگ اتوماتیک به همراه قیمت آن ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 161,
            title: 'دستگاه های شیشه بری',
            slug: 'glass-equipment',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه شیشه بری,دستگاه برش شیشه,دستگاه تراش شیشه,دستگاه پخ زنی شیشه,قیمت دستگاه شیشه بری اتوماتیک,قیمت دستگاه لول شیشه دست دوم,قیمت دستگاه تراش شیشه دست دوم,دستگاه های شیشه گری',
            meta_description:
              'خرید دستگاه ها و ماشین آلات تولید شیشه و فرآوری شیشه، کوره پخت شیشه، چسب زن شیشه، تراش شیشه. دستگاه های شیشه بری و شیشه گری و قیمت دست دوم و نوی آن ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 163,
            title: 'ماشین آلات تولید سیمان',
            slug: 'cement-production-machine',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'خرید خط تولید سیمان و قیمت دستگاه های تولید سیمان در ظرفیت های مختلف با امکان مشاوره برای انتخاب درست و دقیق دستگاه ها می تواند ریسک شما را در راه اندازی کارخانه',
            meta_copyright: null,
          },
          {
            id: 167,
            title: 'ماشین آلات تولید لوله',
            slug: 'pipe-production-line',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'خطوط تولید لوله های مختلف شامل لوله پولیکا یا پی وی سی ،  پلی اتیلن، چند لایه ، نوار تیپ ، هیدروپونیک،  فلزی ، لوله مسی، آلومینیومی را در دمیرکو ببینید',
            meta_copyright: null,
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
            meta_author: null,
            meta_keywords: 'خط تولید آب نبات',
            meta_description:
              'با استفاده از خط تولید آب نبات امروزه دیگر کار برای تولید آسان تر آب نبات و محصولات این چنینی راحت شده و نیاز به زمان وهزینه ی بالا نیست و کاملا اتوماتیک...',
            meta_copyright: null,
          },
          {
            id: 172,
            title: 'خط تولید پاپ کورن و پفیلا',
            slug: 'popcorn-production-line',
            meta_author: 'damirco',
            meta_keywords:
              'پاپ کورن,پفیلا,پف فیل,تولید پاپ کورن,تولید پفیلا,دستگاه های تولید پاپ کورن,خط تولید پاپ کورن',
            meta_description:
              'خط تولید پاپ کورن و انواع دستگاه های مورد نیاز تولید پفیلا و قیمت آن ها در دمیرکو. رایج ترین خط  آن ، خط تولید تمام اتومات پاپ کورن است',
            meta_copyright: '@damirco',
          },
          {
            id: 174,
            title: 'دستگاه پخت نان',
            slug: 'baking-ovens',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه پخت نان,دستگاه پخت نان سنگگ دست دوم,دستگاه پخت نان لواش دست دوم,قیمت دستگاه پخت نان لواش,دستگاه پخت نان بربری دست دوم,دستگاه پخت نان خانگی,دستگاه پخت نان صنعتی,قیمت دستگاه پخت نان',
            meta_description:
              'انواع دستگاه های پخت نان صنعتی و قیمت دستگاه پخت نان سنگگ و لوش و بربری دست دوم و نو در دمیرکو . مشاهده دستگاه های مختلف و امکان مشاوره رایگان با تیم فنی',
            meta_copyright: '@damirco',
          },
          {
            id: 179,
            title: 'دستگاه های فرآوری گوشت',
            slug: 'meat-processing-machinery',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'دستگاه کاتر میکسر دستگاهی چند کاره است که از آن برای ریز کردن، خمیر کردن و پودری کردن مواد غذایی استفاده میشود کاربرد این دستگاه بیشتر در بیمارستان ها برای...',
            meta_copyright: null,
          },
          {
            id: 182,
            title: 'دستگاه استریلیزر',
            slug: 'sterilizer',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'در صنایع غذایی و نوشیدنی برای عرضه بهداشتی و افزایش ماندگاری انواع غذا نوشیدنی از دو روش استریلیزیشن و پاستوریزیشن استفاده می شود که قبل از معرفی انواع...',
            meta_copyright: null,
          },
          {
            id: 176,
            title: 'فر قنادی | فر صنعتی شیرینی پزی',
            slug: 'cake-oven',
            meta_author: 'damirco',
            meta_keywords:
              'فر قنادی,فر شیرینی پزی,فر صنعتی,فر صنعتی شیرینی پزی,فر صنعتی قنادی,طرز کار فر قنادی,قیمت مینی فر قنادی,قیمت فر قنادی دست دوم',
            meta_description:
              'فر صنعتی قنادی یا فر شیرینی پزی در سایزها و ظرفیت های مختلف ساخته می شود. انواع مینی فر و فر قنادی و قیمتشان در دمیرکو برای دستگاه های نو و دست دوم',
            meta_copyright: '@damirco',
          },
          {
            id: 177,
            title: 'دستگاه آجیل پزی | دستگاه تفت آجیل  و بودادن تخمه',
            slug: 'nuts-processing-machinery',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه آجیل پزی,دستگاه تفت آجیل,دستگاه تفت تخمه,دستگاه بو دادن تخمه,دستگاه پخت آجیل و خشکبار,دستگاه بو دادن آجیل',
            meta_description:
              'انواع دستگاه های تفت آجیل و تخمه و خشکبار برای آجیل پزی و بودادن تخمه و آجیل و خشکبار و قهوه به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 178,
            title: 'چرخ گوشت صنعتی',
            slug: 'meat-mincer',
            meta_author: 'damirco',
            meta_keywords:
              'چرخ گوشت صنعتی,قیمت چرخ گوشت صنعتی 32,چرخ گوشت صنعتی تسمه ای,چرخ گوشت صنعتی گیربکسی,چرخ گوشت صنعتی کوچک,چرخ گوشت صنعتی بزرگ,چرخ گوشت صنعتی رومیزی',
            meta_description:
              'انواع چرخ گوشت صنعتی و نیمه صنعتی در دو نوع تسمه ای یا گیربکسی. در اندازه های مختلف چرخ گوشت صنعتی کوچک و بزرگ به همراه قیمت در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 180,
            title: 'دستگاه آبگیری میوه و سبزی',
            slug: 'fruit-processing-machinery',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه آبگیری گوجه,دستگاه آبگیری لیمو ترش,دستگاه آبلیمو گیری,دستگاه آبلیمو گیری تمام اتوماتیک,دستگاه آبمیوه گیری,دستگاه آبگیری انگور,دستگاه آبگیری انار,قیمت دستگاه آبگیری انار',
            meta_description:
              'انواع دستگاه های آبمیوه گیری صنعتی برای آبگیری گوجه ، انگور ، انار ، لیمو ترش ، هویج و غیره به همراه قیمت در دمیرکو . همچنین دستگاه های مورد نیاز مزتبط مثل پوست کن و خردکن میوه و سبزی',
            meta_copyright: '@damirco',
          },
          {
            id: 181,
            title: 'دستگاه هموژنایزر',
            slug: 'homogenizer',
            meta_author: 'damirco',
            meta_keywords:
              'هموژنایزر,قیمت هموژنایزر,قیمت دستگاه هموژنایزر,خرید هموژنایزر,قیمت دستگاه هموژنایزر آزمایشگاهی,روش کار هموژنایزر,پمپ هموژنایزر,هموژنایزر بافتی,هموژنایزر فشار بالا,میکسر هموژنایزر,هموژنایزر دستی,هموژنایزر آزمایشگاهی,هموژنایزر صنعتی',
            meta_description:
              'انواع دستگاه های هموژنایزر آزمایشگاهی ، صنعتی ، دستی و فشار بالا به همراه پمپ و میکسر هموژنایزر به همراه قیمت این ها در دمیرکو',
            meta_copyright: '@damirco',
          },
          {
            id: 173,
            title: 'دستگاه بستنی ساز | خط تولید بستنی',
            slug: 'icecream-production-machinery',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه بستنی ساز,انواع دستگاه بستنی ساز,قیمت دستگاه بستنی ساز قیفی دست دوم,قیمت دستگاه بستنی ساز سنتی,خط تولید بستنی,خط تولید بستنی قیفی,خط تولید بستنی سنتی,خط تولید بستنی دست دوم',
            meta_description:
              'خط تولید بستنی و انواع دستگاه های بستنی ساز صنعتی و دستگاه تولید نان بستنی و غیره به همراه قیمت مدل های مختلف آن با ظرفیت های مختلف در دمیرکو (تماس بگیرید)',
            meta_copyright: '@damirco',
          },
          {
            id: 175,
            title: 'فرصنعتی پخت غذا',
            slug: 'industrial-oven',
            meta_author: null,
            meta_keywords: null,
            meta_description:
              'آشپزی هنری حرفه ای و حساس میباشد.به همین منظور استفاده از تجهیزات مدرن و به روز هم به بالا بردن کیفیت غذا کمک میکند از جمله فر صنعتی پخت غذا که کار را برای...',
            meta_copyright: null,
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
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه ام دی اف,تولید ام دی اف,خط تولید ام دی اف,دستگاه تولید ام دی اف,خط تولید روکش ام دی اف,خط تولید ام دی اف سه میل,دستگاه برش چوب,دستگاه برش ام دی اف,دستگاه برش ام دی اف دست دوم',
            meta_description:
              'انواع دستگاه های خط تولید ام دی اف مثل دستگاه برش ورق ام دی اف ، دستگاه چسب روکش و پرس ام دی اف به همراه قیمت در دمیرکو + خط تولید روکش آن',
            meta_copyright: '@damirco',
          },
          {
            id: 185,
            title: 'مکنده صنعتی | چوب ، خاک اره',
            slug: 'dust-collector',
            meta_author: 'damirco',
            meta_keywords:
              'مکنده صنعتی,مکنده گرد و غبار,دستگاه مکنده گرد و غبار,مکنده گرد و غبار صنعتی,قیمت دستگاه مکنده گرد و غبار,مکنده خاک اره,قیمت دستگاه مکنده خاک اره,مکنده خاک اره دست دوم,قیمت مکنده صنعتی,مکنده صنعتی چوب,دستگاه مکنده',
            meta_description:
              'انواع دستگاه های مکنده صنعتی چوب ، مکند گرد و غبار و خاک اره به همراه قیمت دست دوم نوی این دستگاه ها در دمیرکو . برای استعلام قیمت روز تماس بگیرید',
            meta_copyright: '@damirco',
          },
          {
            id: 186,
            title: 'دستگاه چوب خرد کن یا چیپر چوب',
            slug: 'wood-chip-machine',
            meta_author: 'damirco',
            meta_keywords:
              'دستگاه چوب خرد کن,چوب خرد کن,چوب خرد کن تراکتوری,دستگاه چوب خرد کن تراکتوری,چوب خرد کن باغی,دستگاه چوب خرد کن باغی,چوب خرد کن دستی,چوب خرد کن دیزلی,چوب خرد کن دست دوم,دستگاه چوب خرد کن دست دوم,دستگاه چوب خرد کن کوچک,دستگاه چوب خرد کن بزرگ',
            meta_description:
              'انواع دستگاه های چوب خرد کن دستی و برقی ، چوب خرد کن تراکتوری و باغی کوچک و بزرگ و صنعتی در دمیرکو به همراه قیمت. برای تولید خاک اره یا چیپس چوب',
            meta_copyright: '@damirco',
          },
          {
            id: 184,
            title: 'دستگاه پرس چوب',
            slug: 'wood-press',
            meta_author: 'damirco',
            meta_keywords:
              'پرس چوب,دستگاه پرس چوب,دستگاه پرس درب چوبی,دستگاه پرس گرم درب,قیمت دستگاه پرس گرم درب,قیمت دستگاه پرس نجاری,دستگاه پرس نجاری,پرس سرد چوب,پرس گرم چوب,پرس روکش چوب',
            meta_description:
              'انواع دستگاه پرس چوب و روکش چوب ، پرس سرد و گرم چوب یا همان دستپاه پرس نجاری به همراه قیمت دست دوم و نو در دمیرکو. برای استعلام قیمت روز تماس بگیرید.',
            meta_copyright: '@damirco',
          },
        ],
      },
    ],
  }),
  async fetch() {
    this.footerCategories = await this.$http.$get(
      'https://api.nuxtjs.dev/posts'
    )
  },
  fetchOnServer: false,
}
</script>
