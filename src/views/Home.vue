<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
  <div>
    <Form @submit="onSubmit">
      <Field id="email" name="email" type="email" placeholder="請輸入 Email" rules="email|required" v-model="user.email">
      </Field>
      <error-message name="email"></error-message> <br>
      <Field name="地區" rules="required" placeholder="請輸入地區" as="select" v-model="user.region">
        <option value="">請選擇地區</option>
        <option value="台北市">台北市</option>
        <option value="高雄市">高雄市</option>
      </Field>
      <error-message name="地區"></error-message> <br>
      <Field name="電話" placeholder="請輸入電話" :rules="isPhone" v-model="user.phone"></Field>
      <error-message name="電話"></error-message>
      <button type="submit">送出</button>
    </Form>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    data() {
      return {
        user: {
          email: '',
          region: '',
          phone: '',
        }
      }
    },
    methods: {
      isPhone(value) {
        const phoneNumber = /^(09)[0-9]{8}$/
        return phoneNumber.test(value) ? true : '需要正確的電話號碼'
      },
      onSubmit() {
        console.log("送出成功")
        console.log(this.user)
      }
    },
  }
</script>