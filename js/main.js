(() => {

    // make an AJAX request using the Fetch API - a more streamlined version of AJAX
    fetch('./data/classData.json')
    .then(res => res.json())
    .then(data => { // the data perameter can be whatever you want

        //handleData
        // here's where you would call the function that puts the pieces on the page
        
            let classInfo = document.querySelector('.profPanelText').children,
                courseInfo = document.querySelector('.courseInfo').children;

            classInfo[0].innerHTML = data.coursename + ' - ' + "<span class='text-primary'>" + data.coursecode + "</span>";
            classInfo[1].textContent = "Professor - " + data.profname;
            classInfo[2].innerHTML = "&#128336" + data.classtime[0] + " " + "&#128344;" + data.classtime[1];
            courseInfo[0].innerHTML = data.coursename + " - " + data.coursecode;
            courseInfo[3].innerHTML = data.coursedesc;


            // console.log(data);    
        //the same function that we wrote in the ongoing class build from week 1
    })
    .catch((err) => {
        console.log(err);
    })


})();