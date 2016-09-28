Shower({
    name:"subscribeForm",
    method:"subscribeInsert",
    fields:{
        email:{
            required:true,
            format:"email",
            message:"Ingrese un email valido"
        }
    }
});

