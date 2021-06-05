Vue.component('sidebar', {
    template: 
    `
    <div clas="sidebar" :class="{ fixed: fixedOrderPanel, sidebar: true }" style="height: 100vh">
        <div class="sidebar-header">Course Content</div>
        <sidebar-item :currentPlayingVideo="listener" @send-video-to-sidebar="collectVideoFromSideBar"></sidebar-item>
    </div>
    `,
    data() {
        return {
          fixedOrderPanel: false,
          listener: {},
        }
    },
    destroyed: function () {
      document.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
      document.addEventListener('scroll',  this.handleScroll);
    },
    methods: {
      collectVideoFromSideBar(payload) {
        this.$emit('send-video-to-appwrapper', payload)
      },
      handleScroll: function(){
        const checkWindow = window !== undefined && window.scrollY;

        if (checkWindow && window.scrollY > 115) {
            this.fixedOrderPanel = true
        } else {
            this.fixedOrderPanel = false
        }
        const scrollFix = (scrolled) => {
          if (scrolled > 160) {

              this.fixedOrderPanel = true
            } else {
              this.fixedOrderPanel = false
          }
        }
      }
    },
})