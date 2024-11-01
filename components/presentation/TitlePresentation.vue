<template>
  <div>
    <h1 class="text-6xl font-bold">Nikoolaii</h1>
    <h3 class="text-4xl font-bold">
      <span class="typed-text text-violet-500 dark:text-violet-400">{{ typeValue }}</span>
      <span class="blinking-cursor text-4xl">|</span>
      <span :class="{ typing: typeStatus }" class="cursor">&nbsp;</span>
    </h3>
    <h5 class="text-lg italic">{{ $t('presentation.small_description') }}</h5>
  </div>
</template>

<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 50,
      erasingSpeed: 50,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  computed: {
    translatedDisplayTextArray() {
      return [this.$t('presentation.developer'), this.$t('presentation.student'), this.$t('presentation.coffee')];
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.translatedDisplayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.translatedDisplayTextArray[this.displayTextArrayIndex].charAt(
            this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.translatedDisplayTextArray[this.displayTextArrayIndex].substring(
            0,
            this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.translatedDisplayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.blinking-cursor {
  @apply text-gray-800 animate-blink;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>