<template>
  <v-layout column id="customers" class="pa-3">
    <v-row>
      <v-col cols="12">
        <div id="p_supplier">
          <v-row>
            <div id="card-right">
              <div id="head">
                <div id="brand">
                  <div id="picture">
                    <!-- <img :src="product.product_image" :alt="product.image_alt" /> -->
                  </div>
                  <div id="title" v-text="inquiry.title">
                    نون
                    <!-- <h1 v-text="product.title"></h1> -->
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="cards">
                  <div class="head_card">
                    <h2>اطلاعات استعلام</h2>
                  </div>
                  <div class="row_card" id="phone_card">
                    <div>
                      <span>موضوع</span>
                    </div>
                    <div class="case">
                      <!-- <span v-text="product.title"></span> -->
                      <span>thth</span>
                    </div>
                  </div>
                  <div class="row_card" id="email_card">
                    <div>
                      <span>تاریخ و زمان ثبت</span>
                    </div>
                    <div class="case">
                      <span>1400/3/5 12:00</span>
                    </div>
                  </div>
                  <div class="row_card" id="id_card">
                    <div><span>شناسه دمیرکو</span></div>
                    <div class="case"><span>5465151</span></div>
                  </div>
                </div>
                <div class="cards" id="customer_requirement">
                  <div class="head_card">
                    <h2>توضیحات</h2>
                  </div>
                  <div class="row_card" id="orders">
                    <!-- <p v-text="JSON.parse(order).extra_fields">
               ن.ن
              </p> -->
                    <p>ن.ن</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="card-left">
              Left
            </div>
          </v-row>
          <notification />
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  layout: 'userpanel/index',
  data() {
    return {}
  },
  async asyncData(context) {
    try {
      const token = context.$auth.$storage._state['_token.local']
      const id=this.$route.params.id
      const {data}=await EventService.get_inquiry({token,id})
      return{
        inquiry:data.results
      }
    } catch (e) {
      context.error({
        statusCode: 503,
        message: 'خطایی رخ داده است',
      })
    }
  },
  components: {
    // Notification
  },
  created() {
    console.log(this.$route.params.id);
  },
  mounted() {},
  computed: {
    // product() {
    //   if (typeof this.order != "undefined") {
    //     return JSON.parse(this.order).product;
    //   }
    // },
  },
  methods: {},
}
</script>

<style scoped>
h1,
h2,
h3 {
  color: rgba(0, 0, 0, 0.829);
}
p,
span {
  color: rgba(0, 0, 0, 0.767);
}
#p_supplier {
  width: 100%;
  text-align: right;
  /* background: red; */
  box-sizing: border-box;
}
#card-right {
  width: 70%;
  /* height: 800px; */
  /* overflow: scroll; */
}
#card-left {
  width: 30%;
  border-right: 2px solid rgba(0, 0, 0, 0.123);
}
#head {
  width: 100%;
  height: 120px;
  /* background-color: #bbe1fa1f; */
}
#brand {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  margin-top: 25px;
}
#picture {
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50%;
}
#picture img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
#title {
  margin-right: 10px;
}
#title h1 {
  font-size: 22px;
  font-weight: bold;
}
.cards {
  width: 96%;
  margin: 20px auto;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
}
.head_card {
  width: 100%;
  height: 40px;
  background-color:#bbe1fa1f;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-sizing: border-box;
}
.row_card {
  width: 100%;
  height: 60px;
  display: inline-flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.123);
  padding-right: 10px;
  padding-top: 5px;
  box-sizing: border-box;
}
.head_card h2 {
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px 0;
  box-sizing: border-box;
}
.row_card span,
.row_card p {
  font-size: 15px;
  font-weight: bold;
  margin-right: 5px;
}
.case {
  margin-right: 10%;
}
.assets {
  width: 98%;
  height: 300px;
  margin: 10px auto;
  /* background-color: blueviolet; */
  border: solid 0.5px rgba(0, 0, 0, 0.123);
}
.cards-left {
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
}
.title_cardLeft h1 {
  font-size: 22px;
  font-weight: bold;
  /* background-color: teal; */
}
#items_sell {
  width: 98%;
  margin: 10px auto;
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.item_sell {
  width: 150px;
  height: 50px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
  border-radius: 15px;
  margin: 5px 0;
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.2s;
}
.item_sell:hover {
  box-shadow: 0 7px 8px 5px rgb(210, 210, 210);
  cursor: pointer;
}
.item_sell p {
  font-size: 13px;
  font-weight: bold;
  padding-right: 3px;
}
#progress_state {
  width: 98%;
  margin: 10px auto;
  padding: 5px;
  text-align: center;
}
#notes {
  width: 98%;
  margin: auto;
  padding: 5px;
}
.save_note {
  width: 60px;
  background-color: #007bffaf;
  border-radius: 3px;
  color: white;
  border: 0.1px solid rgba(66, 66, 250, 0.336);
  padding: 5px;
  box-sizing: border-box;
  transition: all 0.2s;
  font-size: 17px;
  font-weight: bold;
  margin: 5px;
  text-align: center;
}
.save_note:hover {
  background-color: #007bff;
}
form textarea {
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
}
form textarea::placeholder {
  font-size: 13px;
  font-weight: bold;
  padding-right: 2px;
}
.item_note {
  width: 84%;
  margin: 10px 10px 10px 0;
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
  direction: rtl;
}
#username {
  width: 100%;
  height: 40px;
  padding: 10px;
}
#username h3 {
  font-size: 17px;
  font-weight: bold;
}
.content {
  width: 100%;

  /* background-color: rosybrown; */
  padding: 9px 10px 5px 5px;
  box-sizing: border-box;
}
.content p {
  font-size: 14px;
  font-weight: bold;
}
.cr {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /* background-color: steelblue; */
}
#date_item {
  width: max-content;
  padding: 5px 10px;
  box-sizing: border-box;
  /* background-color: tomato; */
}
.crud {
  width: max-content;
  padding: 5px 10px;
  box-sizing: border-box;
}
.crud ul {
  width: 100px;
  /* background-color: seagreen; */
  display: inline-flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  list-style: none;
}
.crud ul li {
  width: 45px;
  /* background-color: orange; */
  /* padding: 5px; */
  text-align: right;
  color: rgba(0, 0, 0, 0.411);
  /* padding-right: 10px; */
  font-size: 13px;
  font-weight: bolder;
}
.crud ul li:hover {
  cursor: pointer;
  color: rgba(0, 0, 0, 0.686);
}
#form_edit {
  display: none;
}
.btn-edit {
  width: 40px;
  height: 25px;
  /* padding: 5px; */
  color: 14px;
  font-weight: bold;
  margin-right: 5px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.788);
  /* color: #DC3545;
  color: #28A745; */
}
#btn-edit-record {
  border: 0.2px solid #24a843;
  background-color: #28a745;
  transition: all 0.2s;
}
#btn-edit-record:hover {
  background-color: #158b31;
}
#btn-edit-cancel {
  border: 0.2px solid #db2e3f;
  background-color: #dc3545;
  transition: all 0.2s;
}
#btn-edit-cancel:hover {
  background-color: #be2534;
}
#orders {
  height: auto !important;
  display: flex !important;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
  padding: 15px 10px !important;
}
.order {
  width: 160px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 5px 6px 3px rgb(226, 226, 226);
  /* border: 1px solid rgba(0, 0, 0, 0.466); */
}
#title_order {
  width: 100%;
  /* background-color: red; */
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
}
#title_order h3 {
  font-size: 15px;
  font-weight: bold;
}
#image_order {
  width: 100%;
  /* background-color: green; */
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
}
#image_order img {
  width: 100%;
  height: 80px;
}
#items-note {
  /* height: 460px; */
  width: 100% !important;
  height: 415px;
  /* background-color: rgb(205, 255, 218); */
  overflow: scroll;
  direction: ltr;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: flex-end;
  /* align-content: center; */
}
/* @media screen and (max-width: 1000px) {
  #p_supplier {
    width: 100%;
  }
  #card-left {
    width: 32%;
  }
} */
@media screen and (max-width: 960px) {
  #card-right {
    width: 100%;
  }
  #card-left {
    width: 100%;
  }
  #items-note {
    align-items: center;
  }
}
</style>
