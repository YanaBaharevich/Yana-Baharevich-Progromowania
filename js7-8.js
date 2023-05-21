function wartosc(firld){
    const passwordr=/!@#$%^&*/;
    if (!passwordr.test(firld.value)){
        firld.setCustomValidity("...");
        return true;
    }
    else{
        firld.setCustomValidity('');
        return false
    }

}
