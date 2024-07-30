<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from "vue-router";

import { useToast } from "vue-toastification";
import { ref } from "vue";
import md5 from "js-md5";
const router = useRouter();
const formData = ref({
  user: "",
  pwd: "",
});

function handleFrom(){
    if(formData.value.user&&formData.value.pwd){
        const user = md5(formData.value.user);
        const pwd  = md5(formData.value.pwd);

        localStorage.setItem('username', md5(formData.value.user));
        localStorage.setItem('pwd', md5(formData.value.pwd));
        router.push('/')
    }else{
        useToast().error("Please Enter Your Account And Password");
    }
    
}

</script>
<template>
    <div class="h-screen bg-white flex items-center justify-center">
        <div
            class=" w-full md:max-w-[600px] min-h-[300px] border rounded shadow shadow-gray-300 text-neutral-800 p-10 mb-20">
            <p class="text-center font-black text-3xl">Login to see more</p>
            <p class="text-center text-gray-400 mt-2.5">You can enjoy more quality services after landing</p>
            <div class="flex flex-col space-y-5 mt-10">
                <label>
                    <span>Account</span>
                    <input v-model="formData.user" placeholder="Please enter your account" type="text" name="account" />
                </label>
                <label>
                    <span>Password</span>
                    <input v-model="formData.pwd" placeholder="Please enter your password" type="password" name="account" />
                </label>
            </div>

            <button
                class="border w-full bg-blue text-white rounded-[10px] h-12 text-lg transition-500 hover:bg-hblue mt-10" @click="handleFrom" >Continue</button>
        </div>
    </div>
</template>
<style scoped>
input {
    @apply transition-all duration-500 ease-out placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[10px] px-4 py-2 shadow-sm focus:outline-none  focus:border-blue focus:ring-blue focus:ring-1 sm:text-sm
}
</style>