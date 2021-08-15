<template>
  <div class="modal_delete">
    <div id="modal_delete">
      <p>
        <strong>
          <slot name="title" :title="title"></slot>
        </strong>
      </p>
      <div id="btns">
        <div class="bt ml-3">
          <btn class="pt-1" @event_fell="verify_handler()">
            <span>تایید</span>
          </btn>
        </div>
        <div class="bt">
          <btn class="pt-1" @event_fell="close_modal()">
            <span>انصراف</span>
          </btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import btn from '@/components/buttons/btn.vue'
export default {
  data() {
    return {
      id: null,
      title: null,
    }
  },
  components: {
    btn,
  },
  mounted() {
    this.$nuxt.$on('delete_product', (item) => {
      this.id = item.id
      this.title = item.title
      const el = document.querySelector('.modal_delete')
      el.style.transition = 'all 0.3s'
      el.style.visibility = 'visible'
      el.style.opacity = 1
      const h = window.innerHeight
      // alert(h)
      document.querySelector('#userpanel').style.height = h + 'px'
      document.querySelector('#userpanel').style.overflow = 'hidden'
    })
  },
  methods: {
    close_modal() {
      const el = document.querySelector('.modal_delete')
      el.style.visibility = 'hidden'
      el.style.opacity = 0
      document.querySelector('#userpanel').style.height = '100%'
      document.querySelector('#userpanel').style.overflow = 'visible'
    },
    async verify_handler() {
      const data = {
        token: this.$auth.$storage._state['_token.local'],
        id: this.id,
      }
      await this.$store.dispatch('remove_product', data)
      this.close_modal()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
