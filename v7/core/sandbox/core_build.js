const core_build = class{
  constructor(){
    
  }
  generate(type){
    switch(type){
      case "basic_config":
        //write here code of generate basic_config
      default:
        console.log(`The option you specified ${type} is not registered as a build option.
Please check db.sandbox.build.help().`);
    }
  }
};
export default core_build;
