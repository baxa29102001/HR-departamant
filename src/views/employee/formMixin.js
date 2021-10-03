import CraeteEditForm from './CreateEditForm.vue'

export default {
  components: {
    CraeteEditForm
  },

  data() {
    return {
     
      form: {
        name:{
          value:null,
          validate:false,
          listener:{
            blur:function(){
             this.blurValidate('name')
            }.bind(this)
          }
        },
        position:{
          value:null,
          validate:false,
          listener:{
            blur:function(){
              this.blurValidate('position')
            }.bind(this)
          }
        },
        gender:{
          value:null,
          validate:false,
          listener:{
            blur:function(){
              this.blurValidate('gender')
            }.bind(this)
          }
        },
        departament:{
          value:null,
          validate:false,
          listener:{
            blur:function(){
              this.blurValidate('departament')
            }.bind(this)
          }
        },
        date:{
          value:null,
          validate:false,
          listener:{
            blur:function(){
              this.blurValidate('date')
            }.bind(this)
          }
        },

        err:'',
        goodres:''
      },
    }
  },

  methods:{
    blurValidate(name){
      if (!this.form[name].value) {
        this.form[name].validate = true
      }else{
        this.form[name].validate = false
      }
    },
    submitHandler(){
      let dataforDatabase = {}
      Object.keys(this.form).forEach(key => {
        if(!this.form[key].value){
          this.form.err = 'Please fill all inputs'
          return
        }
        if(!['err','goodres'].includes(key)){
          dataforDatabase[key] = this.form[key].value
        }
      })

     this.$store.dispatch('createEmpolyee', dataforDatabase).then(() => {
       this.form.goodres = 'Successfully! Created :)'
       Object.keys(this.form).forEach(key => {
        this.form[key].value = null
      })
     }).catch(err => {
       this.form.err = err
     })
    }
  }
}

