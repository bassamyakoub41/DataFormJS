    let inputBtn = document.querySelector('#btn');
    inputBtn.addEventListener('click',function(e){
        (e).defaultPrevented
        
        var inputUser= document.querySelector('#nameinput').value;
        var inputGender= document.querySelector('#genderinput').value;
        var inputAge= document.querySelector('#ageinput').value;
        var dataT= document.querySelector('#info')


        document.querySelector('#nameinput').value='';
        document.querySelector('#genderinput').value='';
        document.querySelector('#ageinput').value='';

        const newTr=document.createElement('tr');
        document.getElementById('tbody').append(newTr);
        const newFname= document.createElement('td')
        newFname.innerHTML=inputUser;
        newTr.append(newFname)
        const newLname= document.createElement('td')
        newLname.innerHTML=inputGender;
        newTr.append(newLname)
        const newAge= document.createElement('td')
        newAge.innerHTML=inputAge;
        newTr.append(newAge)


    
});


