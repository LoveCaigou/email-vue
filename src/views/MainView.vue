<script setup>
import WhiteEmail from '@/components/ui/whiteEmail.vue'
import { computed, reactive, ref } from "vue"

const handleWhiteEmail = ref(null)
const data = ref({
    name: "Joe Wilson",
    department: "0",
    position: "Principal Architect",
    phone: "137*****3138",
    email: "23135482@qq.com",
    address: computed(() => {
        if (data.value.department === '0') {
            // 内贸
            return '深圳市南山区深圳湾创新科技中心T1-4601'
        } else {
            // 外贸
            return '4601, Building A, Block 2, Shenzhen Wan Innovation Science And Technology Center, 3156 Ke Yuan Nan Road, Shenzhen, Guangdong, China'
        }
    }),
    telephone:computed(()=>{
        if (data.value.department === '0') {
            // 内贸
            return '+86 (755) 82780567'
        } else {
            // 外贸
            return '+852-96045823'
        }
    })
})

const positionList = computed(() => {
    if (data.value.department === '0') {
        // 内贸
        return ['Domestic Business Development Manager', 'Sr. Domestic Business Development Manager', 'Domestic Business Development Director', 'Sr. Domestic Business Development Director']
    } else {
        // 外贸
        return ['Global Business Development Manager', 'Global Business Development Director']
    }
})

const handleEvent =()=>{
    handleWhiteEmail.value.handleCreateEmail()
}


</script>
<template>
    <div class="h-screen bg-white flex items-center justify-center">
        <div class="flex space-x-5">
            <div class="w-[381px] min-h-[300px] border rounded-[6px] shadow shadow-gray-300 text-neutral-800 p-5 ">
                <div class="flex flex-col space-y-5 mt-10">
                    <label>
                        <span>Name | 姓名</span>
                        <input placeholder="Please enter your Name" type="text" name="name" v-model="data.name" />
                    </label>
                    <label>
                        <span>Department | 部门</span>
                        <div class="mt-2 w-full grid grid-cols-2">
                            <div>
                                <input type="radio" id="zero" value="0" v-model="data.department" class=" checked:hover:ring-0 checked:ring-0"
                                    @click="() => { data.position = '' }" />
                                <label for="zero"> 内贸</label>
                            </div>
                            <div>
                                <input type="radio" id="one" value="1" v-model="data.department"
                                    @click="() => { data.position = '' }" />
                                <label for="one"> 外贸</label>
                            </div>


                        </div>
                    </label>
                    <label>
                        <span>Position | 职位</span>
                        <input placeholder="Choose your Position" type="text" name="position" list="typelist"
                            v-model.trim="data.position" />
                        <datalist id="typelist">
                            <option v-for="(item, index) in positionList" :key="index">{{ item }}</option>
                        </datalist>
                    </label>
                    <label>
                        <span>Phone | 手机</span>
                        <input placeholder="Please enter your account" type="text" name="phone" v-model="data.phone" />
                    </label>
                    <label>
                        <span>Email | 邮箱</span>
                        <input placeholder="Please enter your account" type="text" name="email" v-model="data.email" />
                    </label>
                </div>

                <button
                    class="border w-full bg-blue text-white rounded-[10px] h-11 text-lg transition-500 hover:bg-hblue mt-10" @click="handleEvent">Create
                    Email</button>
            </div>
            <div>
                <WhiteEmail :data="data" ref="handleWhiteEmail"></WhiteEmail>
                
            </div>
        </div>
        
    </div>
</template>
<style scoped>
input:not([type="radio"]) {
    @apply mt-2 transition-all duration-500 ease-out placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[10px] px-4 py-2 shadow-sm focus:outline-none focus:border-blue focus:ring-blue focus:ring-1 sm:text-sm
}

[list]::-webkit-calendar-picker-indicator {
    display: none !important;
}

input:-webkit-autofill {
    box-shadow: 0 0 0px 1000px #ffffff inset !important;
}
</style>