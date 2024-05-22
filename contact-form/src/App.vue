<template>
  <header class="sr-only">
    <h1>Contact form</h1>
  </header>

  <main class="w-full max-w-[735px]">
    <div class="md:p-10 p-5 min-h-[775px] bg-neutral-white rounded-[14px] w-full">
      <h2 class="heading">Contact Us</h2>
      <form class="mt-7" @submit.prevent="submitForm">
        <fieldset>
          <legend class="sr-only">pessoais</legend>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <label for="firstName" class="w-full flex flex-col items-start gap-2">
              <span>First Name *</span>
              <input
                v-model="form.firstName"
                class="text-[18px] pb-[2px] cursor-pointer px-2 md:px-[23px] w-full h-[51px] rounded-lg"
                :class="{ input_error: v$.firstName.$error }"
                type="text"
                name="firstName"
                id="firstName"
              />
              <span v-if="v$.firstName.$error" class="text-primary-red font-bold">
                This field is required
              </span>
            </label>

            <label for="lastName" class="relative w-full flex flex-col items-start gap-2">
              <span>Last Name *</span>
              <input
                v-model="form.lastName"
                class="text-[18px] pb-[2px] w-full px-2 md:px-[23px] h-[51px] rounded-lg cursor-pointer"
                :class="{ input_error: v$.lastName.$error }"
                type="text"
                name="lastName"
                id="lastName"
              />
              <span v-if="v$.lastName.$error" class="text-primary-red font-bold">
                This field is required
              </span>
            </label>
          </div>

          <label for="email" class="relative w-full flex flex-col items-start gap-2">
            <span>Email Address *</span>
            <input
              v-model="form.email"
              class="text-[18px] pb-[2px] w-full px-2 md:px-[23px] h-[51px] rounded-lg cursor-pointer"
              :class="{ input_error: v$.email.$error }"
              type="email"
              name="email"
              id="email"
            />

            <span
              v-if="attemptedSubmit && !v$.email.required.$pending && v$.email.required.$invalid"
              class="text-primary-red font-bold"
            >
              This field is required
            </span>
            <span
              v-if="
                !v$.email.required.$invalid && !v$.email.email.$pending && v$.email.email.$invalid
              "
              class="text-primary-red font-bold"
            >
              Please enter a valid email address
            </span>
          </label>
        </fieldset>

        <fieldset>
          <p class="mt-6">Query Type *</p>
          <div class="flex flex-col justify-between gap-4 mt-4">
            <div class="md:flex-row flex-col flex items-center gap-4">
              <div
                class="radio-container cursor-pointer w-full border border-solid border-neutral-medium-grey rounded-lg flex items-center gap-[14px] h-[50px]"
                :class="{ radio_container_active: form.queryType === 'General Enquiry' }"
              >
                <label
                  for="general_enquiry"
                  class="cursor-pointer w-full rounded-lg pl-6 flex items-center gap-[14px]"
                >
                  <input
                    type="radio"
                    v-model="form.queryType"
                    value="General Enquiry"
                    name="queryType"
                    id="general_enquiry"
                  />
                  <div class="custom-radio">
                    <span></span>
                  </div>
                  <span class="bodyM">General Enquiry</span>
                </label>
              </div>

              <div
                class="radio-container cursor-pointer w-full border border-solid border-neutral-medium-grey rounded-lg flex items-center gap-[14px] h-[50px]"
                :class="{ radio_container_active: form.queryType === 'Support Request' }"
              >
                <label
                  for="support_request"
                  class="cursor-pointer w-full rounded-lg pl-6 flex items-center gap-[16px]"
                >
                  <input
                    type="radio"
                    v-model="form.queryType"
                    value="Support Request"
                    name="queryType"
                    id="support_request"
                  />
                  <div class="custom-radio">
                    <span></span>
                  </div>
                  <span class="bodyM">Support Request</span>
                </label>
              </div>
            </div>
            <span v-if="v$.queryType.$error" class="text-primary-red font-bold">
              Please select a query type
            </span>
          </div>

          <div class="relative mt-6 flex flex-col gap-2">
            <p>Message *</p>
            <textarea
              v-model="form.message"
              class="text-[17px] font-semibold pb-[2px] w-full py-[12px] px-5 h-[105px] rounded-lg"
              :class="{ input_error: v$.message.$error }"
              name="message"
              id="message"
            ></textarea>
            <span v-if="v$.message.$error" class="text-primary-red font-bold">
              This field is required
            </span>
          </div>
        </fieldset>

        <div class="relative mb-10 mt-[42px] ml-[2px]">
          <label class="form-control cursor-pointer flex flex-col gap-4">
            <div class="flex items-center gap-5">
              <input v-model="form.consent" type="checkbox" name="consent" id="consent" />
              <span>I consent to being contacted by the team</span>
            </div>
            <span
              v-if="attemptedSubmit && form.consent === false"
              class="text-primary-red font-bold"
            >
              To submit this form, please consent to being contacted
            </span>
          </label>
        </div>

        <ButtonForm text="Submit" />
      </form>
    </div>
  </main>
  <SuccessAlert v-if="showSuccessAlert" />
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import ButtonForm from './components/ButtonForm.vue'
import SuccessAlert from './components/SuccessAlert.vue'
import { email, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  queryType: '',
  consent: false
})

const rules = computed(() => {
  return {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    queryType: { required },
    message: { required },
    consent: { required }
  }
})

const v$ = useVuelidate(rules, form)
const attemptedSubmit = ref(false)
const showSuccessAlert = ref(false)

async function submitForm() {
  attemptedSubmit.value = true

  const result = await v$.value.$validate()

  if (!result || !form.consent) {
    showSuccessAlert.value = false
    return
  }

  form.consent = false
  form.email = ''
  form.firstName = ''
  form.lastName = ''
  form.message = ''
  form.queryType = ''

  attemptedSubmit.value = false
  v$.value.$reset()

  showSuccessAlert.value = true

  setTimeout(() => {
    showSuccessAlert.value = false
  }, 2000)
}
</script>
