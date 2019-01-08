// scroll indicator component
Vue.component('indicator', {
  template:'<div id="indicator"></div>',
  mounted:function(){
    var vm = this
    window.addEventListener('scroll', function(e){
      var scrollPos = window.scrollY
      var winHeight = window.innerHeight
      var docHeight = document.documentElement.scrollHeight // instead document.body.clientHeight
      var perc = 100 * scrollPos / (docHeight - winHeight)
      vm.$el.style.width = perc + '%'
    })

  }
})


// dummy text component
Vue.component('txtdummy', {
  template: '<h1>{{str}}</h1>',
  data:function(){
    return{
      str: ''          
    }
  },
  mounted:function(){
    console.log(this);
    var url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text'

    var vm = this
    axios.get(url)
      .then(function(d){
        vm.str = d.data
      })
      .catch(function(e){
        console.log(e)
      })

  }
})


// Vue bootstrap
new Vue({
  el:'#app'
})