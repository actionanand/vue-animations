<template>
  <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{animate: isBlockAnimated}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <!-- if u use name property, u can use ur custom prefix for animation class, i.e, we can use 'para-enter-from' instead 'v-enter-from' -->
    <transition name="para" :css="false" @before-enter="paraBeforeEnter" @enter="paraEnter" @after-enter="paraAfterEnter" 
    @before-leave="paraBeforeLeave" @leave="paraLeave" @after-leave="paraAfterLeave"
    @enter-cancelled="paraEnterCancelled" @leave-cancelled="paraLeaveCancelled"> 
      <p v-if="isParaVisible">This is only sometimes visible!</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="button" mode="out-in">
      <button @click="showUsers" v-if="!areUsersVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
  import ListData from './components/ListData.vue';

export default {
  components: {
    ListData
  },
  data() {
    return { 
      dialogIsVisible: false,
      isBlockAnimated: false,
      isParaVisible: false,
      areUsersVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    animateBlock() {
      this.isBlockAnimated = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    togglePara() {
      this.isParaVisible = !this.isParaVisible;
    },
    showUsers() {
      this.areUsersVisible = true;
    },
    hideUsers() {
      this.areUsersVisible = false;
    },
    paraBeforeEnter(el) {
      // console.log('Before Enter animation');
      // console.log(el);
      el.style.opacity = 0;
    },
    paraEnter(el, done) {
      // console.log('Enter animation');
      // console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1;
        round++;
        if(round > 10) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    paraAfterEnter(el) {
      // console.log('After Enter animation');
      console.log(el);
    },
    paraBeforeLeave(el) {
      // console.log('Before Leave animation');
      // console.log(el);
      el.style.opacity = 1;
    },
    paraLeave(el, done) {
      // console.log('Leave animation');
      // console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1;
        round++;
        if(round > 10) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    paraAfterLeave(el) {
      // console.log('After Leave animation');
      console.log(el);
    },
    paraEnterCancelled(el) {
      console.log(el);
      clearInterval(this.enterInterval);
    },
    paraLeaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: my-slide-frame 0.3s ease-out forwards;
}

/* vue added css utitity classes when wrapped around 'transition' components */

.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-active {
  /* transition: all 0.3s ease-out; */
  animation: my-slide-frame 0.3s ease-out;
}

.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-from {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-active {
  /* transition: all 0.3s ease-in; */
  animation: my-slide-frame 0.3s ease-in;
}

.para-leave-to {
  /* opacity: 0;
  transform: translateY(-30px); */
}




.button-enter-from,
.button-leave-to {
  opacity: 0;
}

.button-enter-active {
  transition: opacity 0.3s ease-out;
}

.button-leave-active {
  transition: opacity 0.3s ease-in;
}

.button-enter-to,
.button-leave-from {
  opacity: 1;
}


@keyframes my-slide-frame {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>