import { ref, onMounted, onBeforeUnmount } from "vue";

export function useDark() {
  const isDark = ref(null);
  const setDark = () => {
    isDark.value = document.documentElement.classList.contains("dark");
  };

  let observer = null;

  onMounted(() => {
    setDark();
    observer = new MutationObserver(setDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
  });
  
  onBeforeUnmount(() => {
    observer.disconnect();
  });

  return {
    isDark
  }
}
