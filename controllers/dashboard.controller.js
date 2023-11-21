
const handleDashboard = (req,res)=>{
    const cookie = res.cookie()
    if('token' in cookie){
        displayDashboardAdmin(req,res);
    }else{
        displayDashboardUser(req,res);
    }
}

const displayDashboardUser = (req,res)=>{
    //sustituir por llamada a la funcion del controler de SQL
    let listaPrueba = [{Title:'hola1',Director:'yo1'},{Title:'hola2',Director:'yo2'},{Title:'hola3',Director:'yo3'}]
    res.render('user_dashboard',misPelisJs = listaPrueba)
}

const displayDashboardAdmin = (req,res)=>{
    res.render('admin_dashboard')
}

module.exports = {
    handleDashboard
}