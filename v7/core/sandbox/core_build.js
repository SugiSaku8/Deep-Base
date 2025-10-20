const core_build = class{
  constructor(){
    if(!window.db){
      console.error("Error! Deep-Base has not been initialized.");
      console.error("Return Status:2")
      return 2;
    }else{
      
    }
  }
  generate_config(type){
    switch(type){
      case "basic_config":
        //write here code of generate basic_config
      default:
        console.log(`The option you specified ${type} is not registered as a build option.
Please check db.sandbox.build.help().`);
    }
  }
  *generate(){
    yield this.config = this.generate_config("basic_config");
     
  }
  }
};
export default core_build;
