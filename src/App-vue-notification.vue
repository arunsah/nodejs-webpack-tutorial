<template>
  <div id="app">
    <h2>Vue.js Notification</h2>
 <!-- Velocity animation example -->
    <notifications group="foo-velocity"
                   position="bottom right"
                   animation-type="velocity"
                   :speed="500" />

    <div>
      <button class="success" style="width:30%" @click="show('foo-velocity', 'success')">
        <i class="icon icon-information-circled" /> Success
      </button>
      <button class="warn" style="width:30%" @click="show('foo-velocity', 'warn')">
        <i class="icon icon-alert-circled" /> Warning
      </button>
      <button class="error" style="width:30%" @click="show('foo-velocity', 'error')">
        <i class="icon icon-close-circled" /> Error
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      id: 0,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2],
        },
        leave: {
          opacity: 0,
          height: 0,
        },
      },
    };
  },
  methods: {
    show(group, type = "") {
      const text = `
                This is notification text!
                <br>
                Date: ${new Date()}
            `;

      this.$notify({
        group,
        title: `Test ${type} notification #${this.id++}`,
        text,
        type,
        date: { randomNumber: Math.random() },
      });
    },
  },

  clean(group) {
    this.$notify({ group, clean: true });
  },
};
</script>

<style lang="scss">
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  padding-top: 80px;
  margin: 0;
  h2 {
    font-weight: 300;
    a {
      color: black;
      font-size: 12px;
    }
  }
  button {
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
    color: white;
    vertical-align: top;
    text-decoration: none;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    transition: all 500ms;
    padding: 12px;
    box-shadow: none;
    background: #02ccba;
    font-weight: 600;
    width: 100%;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
    &.success {
      background: #68cd86;
    }
    &.warn {
      background: #ffb648;
    }
    &.error {
      background: #e54d42;
    }
    &:active {
      opacity: 0.8;
    }
  }
  #app {
    text-align: center;
    color: #2c3e50;
    .content {
      margin: 0 auto;
      max-width: 420px;
    }
  }
}
.sub-button {
  display: inline-block;
  float: right;
  background: #e54d42;
  padding: 4px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
}
/*
  EXAMPLES
*/
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #eaf4fe;
  border: 1px solid #d4e8fd;
  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    color: #2589f3;
  }
}
.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  &,
  & > div {
    box-sizing: border-box;
  }
  background: #e8f9f0;
  border: 2px solid #d0f2e1;
  .custom-template-icon {
    flex: 0 1 auto;
    color: #15c371;
    font-size: 32px;
    padding: 0 10px;
  }
  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    opacity: 0.2;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .custom-template-content {
    padding: 10px;
    flex: 1 0 auto;
    .custom-template-title {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
    }
  }
}
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all 0.5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>