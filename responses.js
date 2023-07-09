function getBotResponse(que)
//  input.toLowerCase()
 {var input=que.toLowerCase();

    // Simple responses
    if (input== "who is jamvant omkar"||input=="jamvant omkar"|| input=="omkar"||input=="jamvant") {
        return "Mr. Jamvant Omkar! He is a faculty member at IES. \n Contact details are: 7987188088";
        // {
        //     if(input=="Yes"||input=="yes"||input=="yEs"||input==yES||input==yeS)
        // }
    }
     else if(input=="who is vijay dhote"||input=="Vijay Dhote"||input=="vijay Dhote"||input=="vijay dhote"||input=="vijay"||input=="Vijay"||input=="vijay dhote sir"||input=="vijay sir"){
        return "Mr. Vijay Dhote! He is a faculty member at IES. \n Contact details are: 7987087580";
        
    }
    
    else if(input=="who is kuldeep mishra"||input=="kuldeep"||input=="kuldeep mishra"||input=="kuldeep mishra sir"||input=="kuldeep sir")
    {
        return "He is a technical trainer at IES.";
    }

    else if(input=="who is Dr. bs yadav"||input=="Dr. bs yadav"||input=="bs yadav"||input=="bs"||input=="er bs yadav"){
        return "Er. B.S Yadav is chancellor at IES ";
    }
    else if(input=="who is aishwariya mishra"||input=="aishwariya mishra"||input=="aishwariya"||input=="aiswariya"||input=="aiswariya mam"){
        return "Miss. Awishraya Mishra! she is a faculty member at IES.";
    }
    else if(input=="who is nikhat raza"||input=="dr nikhat raza"||input=="nikhat"||input=="nikhat raza"||input=="nikhat raza mam"||input=="nikhat mam"){
        return "Miss. Nikhat Raza! she is an Hr of the CS department at IES.";
    }
    else if(input=="who is ankita namdev"||input=="ankita"||input=="ankita namdev"||input=="ankita mam"){
        return "Miss. Ankita Namdev! She is a faculty member at IES.";
    }
    else if(input=="anubhav sir"||input=="anubhav"){
       return  "Mr. Anubhav sir! He is a faculty member at IES.";
    }
    else if(input=="who is dp singh"||input=="dp singh"||input=="dp sir"||input=="dp singh sir"||input=="sport incharge"||input=="sport teacher"){
        return "Mr. D.P Singh! He is a Sports teacher member at IES. contact details : 9098024661";
    }
    else if(input=="who is farida mam"||input=="farida"||input=="communication trainer"||input=="English trainer"||input=="farida mam"){
        return"Miss. Farida mam ! she is a comunication trainner  at IES.";
}
    else if(input=="who is manmohan singh"||input=="manmohan singh "||input=="manmohan singh"||input=="manmohan chauhan"||input=="manmohan sir"){return "Mr. Manmohan Singh Chauhan! He is a faculty member at IES.";}

    else if(input=="sonualal sir"||input=="sonulal"||input=="who is sonu lal"){
        return"Mr. Sonulal sir! He is a faculty member at IES.";
    }
    // else if(input="difference between icot and iitm"||input=="icot iitm"||input=="icotiitm"||input=="icot and iitm"){
    //     return"IES is mainly comprises of two departments, ICOT and IITM where icot is RGPV affiliate department whereas iitm is affiliate of IES University.";
    // }
    else if(input=="where is library "||input=="library"||input=="iitm library"||input=="iitm library direction"||input=="icot library"||input=="icot library direction"||input=="where is icot library"||input=="where is library"){
        return "There are two Libraries in IES one is at icot and the second one is in iitm building";
    }
    else if(input=="fees"||input=="how to submit fees online"||input=="how to submit fees"||input=="fees submit"||input=="submit fees"){return"you can submit fees with the help of q-fix, ongoing to this url -[ http://surl.li/ixqrr ]";}

    else if(input=="1st shift timing"||input=="first shift timing"||input=="1st shift bus timing"||input=="first shift bus timing"||input=="bus timing")
    {return"First shift timing: On stop: from 7:30 am to 8:30 am";}

    else if(input=="2nd shift timing"||input=="2nd shift timing"||input=="2nd shift bus timing"||input=="second shift bus timing"||input=="second shift")
    {return"second shift timing: On stop: from 9:25 am to 10:30 am";}
    else if(input=="who is hod of cse"||input=="hod"||input=="who is hod")
    {
        return "Dr. Nikhat Raza";
    }
    else if (input=="how is ies"||input=="is ies is good"||input=="is ies is a good college"){
             return "IES is in the field of education for the past 25 years, so no doubt IES is Best ";
    }
             
             else if(input=="who is  chancellor of ies "||input=="chancellor ofinput=="who is chancellor")
    {
        return "Er. B.S Yadav is chancellor at IES";
    }

    else {
        return "Try asking something else!";
    }
}
