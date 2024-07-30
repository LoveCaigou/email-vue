<script setup>
import { data } from 'autoprefixer';
import { ref } from 'vue';

import CodeTemaple from '@/components/codeTemaple.vue'
const props = defineProps({ data: { name: String } })
const widthData = ref("")
const handleCodeTemaple = ref(null)
const handleCreateEmail = () => {
    const tableElement = document.getElementById('table');
    const tableString = tableElement.getHTML()
    widthData.value = tableString
    handleCodeTemaple.value.initCodeTemple(tableString)
}

defineExpose({
    handleCreateEmail
});
</script>
<template>
    <div  class="flex flex-col h-full">
        <div id="table">
            <table border="0" style="border-spacing: 0;width: 100%;max-width: 630px;">
                <tr>
                    <td style="padding: 0; height: 40px; font-size: 11px;line-height: 40px;color: #2a46b6;">{{
                        props.data.name
                        }}</td>
                </tr>
                <tr>
                    <td style="padding: 0; height: 24px;font-size: 11px;">
                        <span style="font-weight: 900;">{{ props.data.position }} - Southchip Limited |</span>
                        www.southchips.com
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0; height: 24px;font-size: 11px;">
                        T:{{ props.data.telephone }} | M:+86-{{ props.data.phone }}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0;border-top: solid 2px rgb(42, 70, 182);">
                        <span style="vertical-align: center; font-size: 11px;line-height: 48px;">Connect With Southchips
                            Limited</span>

                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/southchips/"
                            style="display: inline-block;vertical-align: middle;margin-left: 10px;">
                            <img src="https://www.southchips.com/wp-content/themes/southchip-pro-reborn/assets/img/icons/icon_In.png"
                                alt="linkedin logo" width="24" title="Southchip linkedin link logo">
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/southchips"
                            style="display: inline-block;vertical-align: middle;margin-left: 10px;">
                            <img src="https://www.southchips.com/wp-content/themes/southchip-pro-reborn/assets/img/icons/icon_Fac.png"
                                alt="linkedin logo" width="24" title="Southchip linkedin link logo">
                        </a><a target="_blank" rel="noopener noreferrer"
                            href="https://www.instagram.com/southchiplimited/"
                            style="display: inline-block;vertical-align: middle;margin-left: 10px;">
                            <img src="https://www.southchips.com/wp-content/themes/southchip-pro-reborn/assets/img/icons/icon_Ins.png"
                                alt="linkedin logo" width="24" title="Southchip linkedin link logo">
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/southchips"
                            style="display: inline-block;vertical-align: middle;margin-left: 10px;">
                            <img src="https://www.southchips.com/wp-content/themes/southchip-pro-reborn/assets/img/icons/icon_Tiw.png"
                                alt="linkedin logo" width="24" title="Southchip linkedin link logo">
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@thesouthchips"
                            style="display: inline-block;vertical-align: middle;margin-left: 10px;">
                            <img src="https://www.southchips.com/wp-content/themes/southchip-pro-reborn/assets/img/icons/icon_YTB.png"
                                alt="linkedin logo" width="24" title="Southchip linkedin link logo">
                        </a>
                    </td>
                </tr>
            </table>
        </div>

        <div class="mt-2.5 flex-1 space-x-2.5 w-[630px] h-[435px]">
            <CodeTemaple ref="handleCodeTemaple"></CodeTemaple>
        </div>
    </div>

</template>
<style scoped>
input {
    @apply transition-all duration-500 ease-out placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-[10px] px-4 py-2 shadow-sm focus:outline-none focus:border-blue focus:ring-blue focus:ring-1 sm:text-sm
}
</style>