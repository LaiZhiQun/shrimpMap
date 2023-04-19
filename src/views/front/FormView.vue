<script>
import { mapActions } from 'pinia'
import useCartStore from '@/stores/cart'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    createOrder () {
      this.isLoading = true
      const order = this.form
      this.$http({
        method: 'post',
        url: `${VITE_APP_URL}api/${VITE_APP_PATH}/order`,
        data: { data: order }
      }).then((response) => {
        // alert(response.data.message)
        this.$refs.form.resetForm()
        this.form.message = ''
        this.getCarts()
        this.isLoading = false
        this.$router.push('/orderSuccess')
      })
    },
    ...mapActions(useCartStore, ['getCarts'])
  }
}
</script>

<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <div class="my-5 row justify-content-center text-white">
    <div class="text-center mt-10 mb-5">
      <span class="text-primary">1. 選購商品 > </span><span class="text-primary">2. 填寫資料 > </span><span class="text-secondary">3. 訂單完成</span>
      </div>
    <VForm ref="form" class="col-md-6 col-7" v-slot="{ errors }" @submit="createOrder">
      <p class="text-danger">*為必填選項</p>
      <div class="mb-3">
        <label for="email" class="form-label"><span class="text-danger">*</span> Email</label>
        <VField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></VField>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label"><span class="text-danger">*</span> 收件人姓名</label>
        <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名" rules="required" v-model="form.user.name"></VField>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label"><span class="text-danger">*</span> 收件人電話</label>
        <VField id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話" rules="required|min:8|max:10" v-model="form.user.tel"></VField>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label"><span class="text-danger">*</span> 收件人地址</label>
        <VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址" rules="required" v-model="form.user.address"></VField>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </VForm>
  </div>
</template>
