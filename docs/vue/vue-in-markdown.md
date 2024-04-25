# 在 markdown 中使用 vue

<p>The count is: {{ count }}</p>
<p>isDark: {{ isDark}}</p>
<NConfigProvider :theme="isDark ? darkTheme : null">
  <NSpace>
    <NButton type="" @click=count++>click</NButton>
    <NButton type="tertiary" @click=count++>click</NButton>
    <NButton type="primary" @click=count++>click</NButton>
    <NButton type="info" @click=count++>click</NButton>
    <NButton type="success" @click=count++>click</NButton>
    <NButton type="warning" @click=count++>click</NButton>
    <NButton type="error" @click=count++>click</NButton>
    <NButton type="info" @click=count++>click</NButton>
  </NSpace>
</NConfigProvider>

<script setup>
import { ref } from 'vue'
import { NSpace, NButton, NConfigProvider, darkTheme } from 'naive-ui'
import { useDark } from '@/composables/useDark'

const { isDark } = useDark()
const count = ref(0)
</script>
