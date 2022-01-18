<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userName" @keydown.enter="addUser">
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Raja', 'Rahul', 'Julie', 'Prem', 'Anjela']
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter(usr => usr !== user );
    },
    addUser() {
      const user = this.$refs.userName.value.trim();
      this.$refs.userName.value = '';
      if(user === ''){
        return;
      }
      this.users.unshift(user);
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
  }

  li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
  }

  .user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }

  .user-list-enter-active {
    transition: all 1s ease-out;
  }

  .user-list-leave-active {
    transition: all 1s ease-in;
    position: absolute; /* to make work with group of element - smooth removal */
  }

  .user-list-enter-to,
  .user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  .user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* css class to control group of elements' movement */
  .user-list-move {
    transition: transform 0.8s ease;
  }
</style>