<template>
  <div id="create_product" class="w-100">
    <div class="form">
      <div class="form-group h-100">
        <label for="picture">عکس محصول</label>
        <font-awesome-icon
          :icon="['fas', 'asterisk']"
          class="fa-xs text-danger mb-1"
        ></font-awesome-icon>
        <input
          multiple
          type="file"
          class="form-control-file"
          required
          id="picture"
          ref="picture"
          @change="amount"
          accept="image/*"
        />
        <small v-if="image.length < 1" class="des_image"
          >می توانید هرتعداد عکسی که از محصول میخواهید آپلود کنید</small
        >
        <small
          class="text text-danger"
          v-if="errors.picture"
          v-text="errors.picture"
        ></small>
        <div
          class="d-flex flex-column justify-content-center align-items-center"
        >
          <div class="picture" v-if="image.length > 0 && !errors.picture">
            <img
              v-for="img of image"
              :src="img"
              width="100"
              height="100"
              alt="تصویر ناقص است"
            />
          </div>
          <div>
            <button
              v-if="image.length !== 0"
              class="btn btn-secondary m-2"
              @click="removeImage"
            >
              حذف عکس ها
            </button>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="name">نام محصول</label>
        <input

          type="text"
          class="form-control"
          placeholder="نام محصول را واردکنید"
          id="name"
          name="name"
          ref="name"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="description">توضیحات</label>
        <textarea
          rows="5"
          type="text"
          class="form-control"
          placeholder="توضیحات محصول خود را وارد کنید"
          id="description"
          ref="description"
          name="description"
          v-model="description"
        ></textarea>
      </div>
      <div class="w-50 m-auto">
        <btn @event_fell="register" class="pt-1 pb-1">ثبت</btn>
        <!-- <button :disabled="(!validated.picture && !validated.name)">rbhth</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import btn from "@/components/buttons/btn.vue";
export default {
  layout: "userpanel/index",
  async fetch({ route, store, $auth }) {
    // console.log($auth.$storage._state['_token.local'])
    const data = {
      token: $auth.$storage._state["_token.local"],
      id: route.params.id,
    };
    await store.dispatch("get_product_edit", data);
  },
  computed: {
    // ...mapState({
    //   product: (state) => state.product_edit,
    // }),
    name: {
      get() {
        return this.$store.state.product_edit.name;
      },
      set(value) {
        this.$store.commit("UPDATENAME", value);
      },
    },
    description: {
      get() {
        return this.$store.state.product_edit.description;
      },
      set(value) {
        this.$store.commit("UPDATEDESCRIPTION", value);
      },
    },
  },
  components: {
    btn,
  },
  data() {
    return {
      picture: [],
      image: [],
      errors: {
        picture: "",
      },
    };
  },
  methods: {
    createImage(file) {
      new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        // vm.image = e.target.result;
        vm.image.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage(e) {
      this.validated.picture = false;
      this.image = [];
      this.$refs.picture.value = "";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
