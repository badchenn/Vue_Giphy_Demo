// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueApiRequest from 'vue-api-request'

Vue.config.productionTip = false

var api = {
  giphyRandom: function () {
    return axios.get('//api.giphy.com/v1/gifs/random', {
      params: {
        api_key: 'ceea3d73eee446f48e2a645e117b1f31'
      }
    })
  }
};

VueApiRequest.setAPI(api);
Vue.use(VueApiRequest);

new Vue({
  el: '#app',
  data: {
    myResponse: null
  },
  created: function () {
    console.log('Vue instance created')
  }
})