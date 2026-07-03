import {
  onMounted,
  defineComponent,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
  ref,
} from 'vue'

export default defineComponent({
  setup: () => {
    const counter = ref<number>(0)
    console.log('setup')
    onMounted(() => {
      console.log('onmounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured')
    })
    onRenderTracked(() => {
      console.log('onRenderTracked')
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered')
    })
    onActivated(() => {
      console.log('onActivated')
    })
    onDeactivated(() => {
      console.log('onDeactivated')
    })
    onServerPrefetch(() => {
      console.log('onServerPrefetch')
    })

    return {
      counter,
    }
  },
})
