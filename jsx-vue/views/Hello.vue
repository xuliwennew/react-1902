

<script>
    export default {
        name: "Hello",
        data(){
          return {
              msg:"hello world"
          }
        },
        render(){
            return <div>
                <h1>{this.msg}</h1>
                <p>hello</p>
            </div>
        }
    }
</script>

<style scoped>

</style>
