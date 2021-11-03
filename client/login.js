class Login{
  constructor(form,fields){
    this.form=form;
    this.fields=fields;
    this.validateOnSubmit;
  }
  validateOnSubmit(){
    let self = this;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
var error=0;
      // loop through fields in for eah statement. result will be a field from the fields array
      self.fields.forEach((field) =>{
        const input = document.querySelector(`#${field}`);


  console.log('success');
        }
      )
    })
  }
};



// create variable for form
const form = document.querySelector(".loginForm");
if(form){
  const fields = ["username", "password"]
  const validator = new Login(form, fields);
};
