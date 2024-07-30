<script setup>
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import hljs from 'highlight.js'
import { ref } from 'vue';
import beautify from 'js-beautify';
import { copyByDocumentApi } from '@/assets/js/createEamilString'
import { useToast } from 'vue-toastification';
const codeTemaple = ref()
const codeDefalutString = '/* Please create email code :) */'
const highlightedCode = hljs.highlight(
    codeDefalutString,
    { language: 'xml' }
).value
codeTemaple.value = highlightedCode
let copyData = "";
const handleCopyCode = () => {
    if (copyData) {
        copyByDocumentApi(copyData).then(() => {
            useToast().success("Copy Code Success🎉🎉🎉");
            codeTemaple.value = codeDefalutString;
            copyData = ""
        })
    }
}

const initCodeTemple = (data) => {
    return new Promise((resolve, reject) => {
        copyData = data;
        const dataHtmlFormat = beautify.html(data)
        const highlightedCode = hljs.highlight(
            dataHtmlFormat,
            { language: 'xml' }
        ).value
        codeTemaple.value = highlightedCode
        resolve('continue')
    })
}

defineExpose({
    initCodeTemple
});


</script>
<template>
    <div class="language-html relative h-full w-full bg-[#282c34] text-white rounded-[8px] px-5 pt-14 overflow-hidden">
        <button v-if="codeTemaple != codeDefalutString" @click="handleCopyCode"
            class=" absolute right-2 top-1 p-2 rounded-[4px] transition-500 hover:bg-[#343848]">
            <img src="./../assets/image/copy.svg" width="32" height="32" alt="">
        </button>
        <pre class="h-full w-full  overflow-hidden" v-html="codeTemaple"></pre>
    </div>

</template>
<style scoped>
code,
kbd,
samp,
pre {
    font-family: inherit;
}
</style>