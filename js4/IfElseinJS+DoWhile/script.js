function selectionFunction(){
    let berufsjahre;
    do{
        berufsjahre = prompt("Bitte geben Sie Ihre Anzahl an Berufsjahren ein:");
    }while(berufsjahre < 0 || berufsjahre > 60);
    let berufsFrage = "Ihr Beruf ist: ";

    if(berufsjahre < 1){
        alert(berufsFrage+ "Junior Consultant");
    }else if(berufsjahre < 4){
        alert(berufsFrage + "Consultant");
    }else{
        let anzahl_mitarbeiter = prompt("Bitte geben Sie Ihre Anzahl an Mitarbeitern die unter Ihrer Leitung stehen an:")
        if(anzahl_mitarbeiter == 0){
            alert(berufsFrage+ "Senior Consultant");
        }else if( anzahl_mitarbeiter < 21){
            alert(berufsFrage + "Manager");
        }else if(anzahl_mitarbeiter > 20){
            alert(berufsFrage + "Director");
        }
    }
}